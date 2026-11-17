export type LetterCategory = 'uyir' | 'ayutham' | 'mei' | 'grantha' | 'uyir-mei';

export type LanguageSupportMode = 'both' | 'malayalam' | 'english';

export type PracticeMode = 'learn' | 'practice' | 'quiz' | 'grid';

export interface TamilLetter {
  id: string;
  letter: string;
  category: LetterCategory;
  categoryTitle: {
    ta: string;
    ml: string;
    en: string;
  };
  malayalam: string;           // Corresponding swaram / letter in Malayalam
  malayalamName?: string;       // E.g., 'ഹ്രസ്വ അ'
  english: string;             // English phonetic sound (swaram)
  soundDescriptionEn: string;  // How it sounds in English
  soundDescriptionMl: string;  // Malayalam pronunciation tip
  example: {
    wordTa: string;            // Tamil word, e.g., 'அம்மா'
    wordMl: string;            // Malayalam word, e.g., 'അമ്മ'
    wordEn: string;            // Transliterated, e.g., 'Amma'
    meaningEn: string;         // English meaning, e.g., 'Mother'
    meaningMl: string;         // Malayalam meaning, e.g., 'അമ്മ'
    emoji: string;             // Visual aid
  };
  strokeInstructions: {
    en: string;
    ml: string;
    ta: string;
  };
  strokeSteps?: string[];      // Step by step breakdown for drawing
}

export interface DrawingResult {
  accuracy: number;            // 0 - 100 percentage
  rating: 'perfect' | 'great' | 'good' | 'try-again';
  feedbackEn: string;
  feedbackMl: string;
  coverageRatio: number;
  overflowRatio: number;
  matchedPixels: number;
}
