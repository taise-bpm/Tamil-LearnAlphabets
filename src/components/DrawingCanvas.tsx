import React, { useRef, useState, useEffect, useCallback } from 'react';
import { TamilLetter, DrawingResult, LanguageSupportMode } from '../types/alphabet';
import { evaluateDrawing } from '../utils/strokeEvaluator';
import { audioTutor } from '../utils/audio';
import confetti from 'canvas-confetti';
import { 
  RotateCcw, 
  Sparkles, 
  Eye, 
  EyeOff, 
  Volume2, 
  Undo2, 
  Award,
  CheckCircle2,
  HelpCircle,
  Play
} from 'lucide-react';

interface DrawingCanvasProps {
  letter: TamilLetter;
  languageMode: LanguageSupportMode;
  onMastered?: (letterId: string, score: number) => void;
  savedScore?: number;
}

export const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  letter,
  languageMode,
  onMastered,
  savedScore
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokeHistory, setStrokeHistory] = useState<ImageData[]>([]);
  const [brushColor, setBrushColor] = useState('#ea580c'); // orange-600
  const [brushWidth, setBrushWidth] = useState(14);
  const [guideOpacity, setGuideOpacity] = useState<number>(0.35); // ghost letter opacity
  const [result, setResult] = useState<DrawingResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animProgress, setAnimProgress] = useState(0);

  const colors = [
    { name: 'Saffron', hex: '#ea580c' },
    { name: 'Peacock Green', hex: '#059669' },
    { name: 'Royal Blue', hex: '#2563eb' },
    { name: 'Maroon', hex: '#991b1b' },
    { name: 'Slate', hex: '#334155' }
  ];

  // Initialize canvas
  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setStrokeHistory([]);
    setResult(null);
  }, []);

  // Reset canvas when letter changes
  useEffect(() => {
    clearCanvas();
  }, [letter.id, clearCanvas]);

  // Stroke history snapshot for Undo
  const saveSnapshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setStrokeHistory(prev => [...prev.slice(-10), imgData]);
  };

  const handleUndo = () => {
    const canvas = canvasRef.current;
    if (!canvas || strokeHistory.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const previousHistory = [...strokeHistory];
    previousHistory.pop(); // remove current state
    if (previousHistory.length > 0) {
      const lastState = previousHistory[previousHistory.length - 1];
      ctx.putImageData(lastState, 0, 0);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setStrokeHistory(previousHistory);
    setResult(null);
  };

  // Get pointer coordinates relative to canvas
  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      if (e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    saveSnapshot();
    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushWidth;
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.closePath();
    setIsDrawing(false);
  };

  // Dynamically calculate optimal font size so multi-part letters (like ஶொ, கொ, க்ஷ) never overflow the canvas
  const letterFontSize = (() => {
    const text = letter.letter;
    // 3-part vowel signs (ொ, ோ, ௌ render as prefix ெ + letter + suffix ா / ள)
    if (/[ொோௌ]/.test(text) || text.length >= 3) {
      return 125;
    }
    // Conjuncts like க்ஷ, ஸ்ரீ
    if (text.includes('க்ஷ') || text.includes('ஸ்ரீ')) {
      return 155;
    }
    // 2-part vowel signs (ெ, ே, ை, ா, ீ, etc.)
    if (/[ெேைாிீுூ]/.test(text) || text.length === 2) {
      return 175;
    }
    // Single basic letter
    return 235;
  })();

  const handleCheckDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsEvaluating(true);
    setTimeout(() => {
      const evaluation = evaluateDrawing(canvas, letter.letter, letterFontSize);
      setResult(evaluation);
      setIsEvaluating(false);

      if (evaluation.accuracy >= 75) {
        audioTutor.playSuccessChime();
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
        if (onMastered) {
          onMastered(letter.id, evaluation.accuracy);
        }
      }
    }, 150);
  };

  // Guided stroke animation simulation
  const triggerStrokeDemo = () => {
    setShowAnimation(true);
    setAnimProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += 0.05;
      if (p >= 1) {
        clearInterval(interval);
        setAnimProgress(1);
        setTimeout(() => setShowAnimation(false), 800);
      } else {
        setAnimProgress(p);
      }
    }, 40);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
      {/* Canvas Top Bar */}
      <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50/50 p-4 border-b border-orange-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center text-3xl font-bold shadow-md shadow-orange-500/20 tamil-font">
            {letter.letter}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-slate-800 text-lg">
                Draw & Trace Practice
              </h3>
              {savedScore !== undefined && savedScore >= 75 && (
                <span className="inline-flex items-center space-x-1 text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mastered {savedScore}%</span>
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500">
              {languageMode !== 'english' && (
                <span className="malayalam-font font-semibold text-emerald-700 mr-2">
                  അക്ഷരം വരച്ച് ശീലിക്കാം
                </span>
              )}
              {languageMode !== 'malayalam' && (
                <span>Follow the ghost lines to form the letter</span>
              )}
            </p>
          </div>
        </div>

        {/* Pronunciation & Audio Trigger */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => audioTutor.speakTamil(letter.letter)}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-xl text-xs font-semibold transition active:scale-95 shadow-sm"
            title="Listen to Tamil pronunciation"
          >
            <Volume2 className="w-4 h-4 text-orange-600" />
            <span className="tamil-font font-bold">தமிழ்: {letter.letter}</span>
          </button>

          {(languageMode === 'both' || languageMode === 'malayalam') && (
            <button
              onClick={() => audioTutor.speakMalayalam(letter.malayalam)}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-xl text-xs font-semibold transition active:scale-95 shadow-sm"
              title="Listen to Malayalam swaram"
            >
              <Volume2 className="w-4 h-4 text-emerald-600" />
              <span className="malayalam-font font-bold">മലയാളം: {letter.malayalam}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Drawing Area */}
      <div className="relative flex-1 min-h-[380px] bg-slate-50/70 canvas-grid-pattern flex items-center justify-center p-4 select-none touch-none overflow-hidden">
        {/* Ghost / Tracing Background Guide */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
          style={{ opacity: guideOpacity }}
        >
          <span 
            className="tamil-font font-bold text-slate-900 select-none leading-none"
            style={{ 
              fontSize: `${letterFontSize}px`,
              textShadow: '0 0 1px rgba(0,0,0,0.4)',
              userSelect: 'none'
            }}
          >
            {letter.letter}
          </span>
        </div>

        {/* Animated tracing demo overlay */}
        {showAnimation && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="relative">
              <span 
                className="tamil-font font-bold text-orange-500/70 select-none leading-none animate-pulse"
                style={{ 
                  fontSize: `${letterFontSize}px`,
                  clipPath: `inset(0 ${(1 - animProgress) * 100}% 0 0)` 
                }}
              >
                {letter.letter}
              </span>
            </div>
          </div>
        )}

        {/* Interactive HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          width={500}
          height={400}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="relative z-10 w-full max-w-[480px] h-[360px] cursor-crosshair rounded-2xl bg-transparent border-2 border-dashed border-slate-300 hover:border-orange-400 transition-colors shadow-inner"
        />

        {/* Canvas floating quick tools (Opacity Toggle & Stroke Animation) */}
        <div className="absolute top-4 right-4 z-20 flex flex-col space-y-2">
          {/* Guide visibility switcher */}
          <button
            onClick={() => setGuideOpacity(prev => (prev === 0 ? 0.35 : prev === 0.35 ? 0.7 : 0))}
            className="p-2.5 rounded-xl bg-white/90 backdrop-blur shadow-md hover:bg-white text-slate-700 transition active:scale-95 border border-slate-200"
            title={`Tracing Guide: ${Math.round(guideOpacity * 100)}% (Click to toggle)`}
          >
            {guideOpacity === 0 ? <EyeOff className="w-5 h-5 text-slate-400" /> : <Eye className="w-5 h-5 text-orange-600" />}
          </button>

          {/* Stroke demo player */}
          <button
            onClick={triggerStrokeDemo}
            className="p-2.5 rounded-xl bg-white/90 backdrop-blur shadow-md hover:bg-white text-slate-700 transition active:scale-95 border border-slate-200"
            title="Watch stroke animation preview"
          >
            <Play className="w-5 h-5 text-emerald-600" />
          </button>
        </div>

        {/* Drawing Hint at bottom-left */}
        <div className="absolute bottom-3 left-4 z-20 pointer-events-none text-xs text-slate-400 flex items-center space-x-1">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Draw with finger or mouse</span>
        </div>
      </div>

      {/* Stroke Instructions Pill */}
      <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200/80 text-xs text-slate-600 flex items-start space-x-2">
        <span className="font-semibold text-orange-600 shrink-0 mt-0.5">Tip:</span>
        <div className="space-y-0.5">
          {(languageMode === 'both' || languageMode === 'english') && (
            <p className="text-slate-700">{letter.strokeInstructions.en}</p>
          )}
          {(languageMode === 'both' || languageMode === 'malayalam') && (
            <p className="text-emerald-800 malayalam-font">{letter.strokeInstructions.ml}</p>
          )}
        </div>
      </div>

      {/* Brush Settings & Actions Bar */}
      <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
        {/* Color Palette */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-500 mr-1">Color:</span>
          {colors.map(c => (
            <button
              key={c.hex}
              onClick={() => setBrushColor(c.hex)}
              style={{ backgroundColor: c.hex }}
              className={`w-7 h-7 rounded-full transition-transform ${
                brushColor === c.hex ? 'ring-2 ring-offset-2 ring-orange-500 scale-110 shadow-sm' : 'hover:scale-105 opacity-80'
              }`}
              title={c.name}
            />
          ))}
        </div>

        {/* Brush Size */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-500">Width:</span>
          {[8, 14, 20].map(size => (
            <button
              key={size}
              onClick={() => setBrushWidth(size)}
              className={`px-2.5 py-1 text-xs rounded-lg font-medium transition ${
                brushWidth === size
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {size === 8 ? 'Fine' : size === 14 ? 'Medium' : 'Thick'}
            </button>
          ))}
        </div>

        {/* Canvas Controls & Evaluation */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleUndo}
            disabled={strokeHistory.length === 0}
            className="flex items-center space-x-1 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition"
            title="Undo last stroke"
          >
            <Undo2 className="w-4 h-4" />
            <span className="hidden sm:inline">Undo</span>
          </button>

          <button
            onClick={clearCanvas}
            className="flex items-center space-x-1 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition active:scale-95"
            title="Clear all strokes"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Clear</span>
          </button>

          {/* Primary Action: Check Drawing */}
          <button
            onClick={handleCheckDrawing}
            disabled={isEvaluating}
            className="flex items-center space-x-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 rounded-xl shadow-md shadow-orange-500/25 active:scale-95 transition"
          >
            <Sparkles className="w-4 h-4 text-amber-200 animate-spin-slow" />
            <span>
              {isEvaluating ? 'Evaluating...' : 'Check My Drawing'}
            </span>
          </button>
        </div>
      </div>

      {/* Accuracy Evaluation Result Card */}
      {result && (
        <div className={`p-4 border-t transition-all ${
          result.accuracy >= 75
            ? 'bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-emerald-200'
            : result.accuracy >= 50
            ? 'bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-amber-200'
            : 'bg-gradient-to-r from-rose-50 via-red-50 to-rose-50 border-rose-200'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-bold shadow-md shrink-0 ${
                result.accuracy >= 75
                  ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                  : result.accuracy >= 50
                  ? 'bg-amber-500 text-white shadow-amber-500/20'
                  : 'bg-rose-500 text-white shadow-rose-500/20'
              }`}>
                <span className="text-xl leading-none">{result.accuracy}%</span>
                <span className="text-[10px] uppercase tracking-wider opacity-90">Score</span>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-bold text-slate-800 text-base">
                    {result.accuracy >= 75
                      ? '✨ Excellent Drawing!'
                      : result.accuracy >= 50
                      ? '👍 Good Progress!'
                      : '✍️ Keep Practicing!'}
                  </h4>
                  {result.accuracy >= 80 && (
                    <Award className="w-5 h-5 text-amber-500 animate-bounce" />
                  )}
                </div>

                {/* Bilingual Feedback Message */}
                {(languageMode === 'both' || languageMode === 'malayalam') && (
                  <p className="text-sm font-semibold text-slate-700 malayalam-font mt-0.5">
                    {result.feedbackMl}
                  </p>
                )}
                {(languageMode === 'both' || languageMode === 'english') && (
                  <p className="text-xs text-slate-600 mt-0.5">
                    {result.feedbackEn}
                  </p>
                )}
              </div>
            </div>

            {/* Shape Coverage vs Cleanliness Stats */}
            <div className="flex items-center space-x-4 bg-white/70 backdrop-blur px-4 py-2 rounded-2xl border border-slate-200/60 text-xs">
              <div className="text-center">
                <span className="block font-bold text-slate-700 text-sm">{result.coverageRatio}%</span>
                <span className="text-slate-500">Letter Coverage</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="text-center">
                <span className="block font-bold text-slate-700 text-sm">
                  {Math.max(0, 100 - result.overflowRatio)}%
                </span>
                <span className="text-slate-500">Stroke Precision</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
