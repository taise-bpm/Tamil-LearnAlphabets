import { DrawingResult } from '../types/alphabet';

/**
 * Evaluates the user's canvas drawing against a target Tamil letter.
 * Uses off-screen rasterization, dilation tolerance for natural handwriting variance,
 * and calculates intersection over target + stroke discipline.
 */
export function evaluateDrawing(
  userCanvas: HTMLCanvasElement,
  targetLetter: string,
  fontSize: number = 240
): DrawingResult {
  const width = userCanvas.width;
  const height = userCanvas.height;

  // 1. Get user drawing imageData
  const userCtx = userCanvas.getContext('2d');
  if (!userCtx) {
    return defaultResult(0);
  }
  const userImageData = userCtx.getImageData(0, 0, width, height);
  const userPixels = userImageData.data;

  // Count user pixels
  let userPixelCount = 0;
  for (let i = 3; i < userPixels.length; i += 4) {
    if (userPixels[i] > 30) {
      userPixelCount++;
    }
  }

  // If user drew almost nothing
  if (userPixelCount < 100) {
    return {
      accuracy: 0,
      rating: 'try-again',
      feedbackEn: 'Canvas is empty or has too few strokes. Please write the letter!',
      feedbackMl: 'ക്യാൻവാസിൽ ഒന്നും എഴുതിയിട്ടില്ല. ദയവായി അക്ഷരം വരയ്ക്കൂ!',
      coverageRatio: 0,
      overflowRatio: 0,
      matchedPixels: 0
    };
  }

  // 2. Create offscreen canvas for target letter
  const targetCanvas = document.createElement('canvas');
  targetCanvas.width = width;
  targetCanvas.height = height;
  const targetCtx = targetCanvas.getContext('2d');
  if (!targetCtx) {
    return defaultResult(50);
  }

  // Draw target letter centered
  targetCtx.clearRect(0, 0, width, height);
  targetCtx.font = `bold ${fontSize}px "Noto Sans Tamil", "Mukta Malar", sans-serif`;
  targetCtx.textAlign = 'center';
  targetCtx.textBaseline = 'middle';
  targetCtx.fillStyle = '#000000';
  targetCtx.fillText(targetLetter, width / 2, height / 2);

  const targetImageData = targetCtx.getImageData(0, 0, width, height);
  const targetPixels = targetImageData.data;

  // 3. Count target pixels and find bounding boxes
  let targetPixelCount = 0;
  let targetMinX = width, targetMaxX = 0, targetMinY = height, targetMaxY = 0;
  let userMinX = width, userMaxX = 0, userMinY = height, userMaxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4 + 3;
      if (targetPixels[idx] > 30) {
        targetPixelCount++;
        if (x < targetMinX) targetMinX = x;
        if (x > targetMaxX) targetMaxX = x;
        if (y < targetMinY) targetMinY = y;
        if (y > targetMaxY) targetMaxY = y;
      }
      if (userPixels[idx] > 30) {
        if (x < userMinX) userMinX = x;
        if (x > userMaxX) userMaxX = x;
        if (y < userMinY) userMinY = y;
        if (y > userMaxY) userMaxY = y;
      }
    }
  }

  if (targetPixelCount === 0) {
    return defaultResult(50);
  }

  // 4. Create a dilated target mask (tolerance buffer for handwriting stroke width)
  // 12px dilation radius gives comfortable natural writing room
  const toleranceRadius = 14;
  const dilatedTarget = new Uint8Array(width * height);

  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 2) {
      const idx = (y * width + x) * 4 + 3;
      if (targetPixels[idx] > 40) {
        // Mark circle of radius toleranceRadius
        const yStart = Math.max(0, y - toleranceRadius);
        const yEnd = Math.min(height - 1, y + toleranceRadius);
        const xStart = Math.max(0, x - toleranceRadius);
        const xEnd = Math.min(width - 1, x + toleranceRadius);

        for (let dy = yStart; dy <= yEnd; dy += 2) {
          for (let dx = xStart; dx <= xEnd; dx += 2) {
            dilatedTarget[dy * width + dx] = 1;
          }
        }
      }
    }
  }

  // 5. Measure coverage and precision
  let matchedUserPixels = 0;
  let outOfBoundsUserPixels = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4 + 3;
      if (userPixels[idx] > 30) {
        if (dilatedTarget[y * width + x] === 1) {
          matchedUserPixels++;
        } else {
          outOfBoundsUserPixels++;
        }
      }
    }
  }

  // Check target coverage: what fraction of the target's primary areas were touched?
  // Downsample to grid cells (e.g. 10x10 blocks) to check structural shape completeness
  const blockSize = 16;
  const gridW = Math.ceil(width / blockSize);
  const gridH = Math.ceil(height / blockSize);
  const targetBlocks = new Uint8Array(gridW * gridH);
  const userCoveredBlocks = new Uint8Array(gridW * gridH);

  let totalTargetBlocks = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4 + 3;
      const blockIdx = Math.floor(y / blockSize) * gridW + Math.floor(x / blockSize);
      if (targetPixels[idx] > 40) {
        if (targetBlocks[blockIdx] === 0) {
          targetBlocks[blockIdx] = 1;
          totalTargetBlocks++;
        }
      }
      if (userPixels[idx] > 30 && dilatedTarget[y * width + x] === 1) {
        userCoveredBlocks[blockIdx] = 1;
      }
    }
  }

  let matchedBlocks = 0;
  for (let b = 0; b < targetBlocks.length; b++) {
    if (targetBlocks[b] === 1 && userCoveredBlocks[b] === 1) {
      matchedBlocks++;
    }
  }

  const blockCoverage = totalTargetBlocks > 0 ? (matchedBlocks / totalTargetBlocks) : 0;
  const precision = userPixelCount > 0 ? (matchedUserPixels / userPixelCount) : 0;

  // Bounding box aspect & placement penalty if user drew in a totally wrong spot or tiny corner
  const targetWidthSpan = Math.max(1, targetMaxX - targetMinX);
  const targetHeightSpan = Math.max(1, targetMaxY - targetMinY);
  const userWidthSpan = Math.max(1, userMaxX - userMinX);
  const userHeightSpan = Math.max(1, userMaxY - userMinY);

  const widthRatio = Math.min(userWidthSpan / targetWidthSpan, targetWidthSpan / userWidthSpan);
  const heightRatio = Math.min(userHeightSpan / targetHeightSpan, targetHeightSpan / userHeightSpan);
  const scaleFitness = Math.max(0.5, (widthRatio + heightRatio) / 2);

  // Weighted accuracy score: 60% shape coverage, 30% precision, 10% bounding scale
  let rawScore = (blockCoverage * 0.60 + precision * 0.30 + scaleFitness * 0.10) * 100;

  // Penalize excessive scribble
  if (userPixelCount > targetPixelCount * 3.5) {
    rawScore = Math.max(20, rawScore * 0.7);
  }

  const accuracy = Math.min(99, Math.max(0, Math.round(rawScore)));

  let rating: DrawingResult['rating'] = 'try-again';
  let feedbackEn = '';
  let feedbackMl = '';

  if (accuracy >= 80) {
    rating = 'perfect';
    feedbackEn = 'Outstanding! Beautiful strokes and accurate form!';
    feedbackMl = 'അതിഗംഭീരം! മനോഹരമായും കൃത്യമായും എഴുതി!';
  } else if (accuracy >= 65) {
    rating = 'great';
    feedbackEn = 'Great job! Very neat writing, almost perfect!';
    feedbackMl = 'വളരെ നന്നായിട്ടുണ്ട്! ചെറിയൊരു ശ്രദ്ധ കൂടി നൽകിയാൽ പൂർണ്ണമാകും.';
  } else if (accuracy >= 45) {
    rating = 'good';
    feedbackEn = 'Good attempt! Try to follow the guide lines more closely.';
    feedbackMl = 'നല്ല ശ്രമം! മാതൃകാ വരകളിലൂടെ കുറച്ചുകൂടി ശ്രദ്ധയോടെ വരച്ചു നോക്കൂ.';
  } else {
    rating = 'try-again';
    feedbackEn = 'Keep practicing! Follow the ghost outline to learn the curves.';
    feedbackMl = 'വീണ്ടും പരിശീലിക്കൂ! അക്ഷരത്തിന്റെ നിഴൽ വരകളിലൂടെ വിരലോടിച്ചു ശീലിക്കൂ.';
  }

  return {
    accuracy,
    rating,
    feedbackEn,
    feedbackMl,
    coverageRatio: Math.round(blockCoverage * 100),
    overflowRatio: Math.round((outOfBoundsUserPixels / (userPixelCount || 1)) * 100),
    matchedPixels: matchedUserPixels
  };
}

function defaultResult(score: number): DrawingResult {
  return {
    accuracy: score,
    rating: score >= 60 ? 'good' : 'try-again',
    feedbackEn: 'Keep practicing to master this letter!',
    feedbackMl: 'ഈ അക്ഷരം പൂർണ്ണമായി പഠിക്കാൻ വീണ്ടും പരിശീലിക്കൂ!',
    coverageRatio: score,
    overflowRatio: 0,
    matchedPixels: 0
  };
}
