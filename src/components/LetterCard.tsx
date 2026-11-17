import React from 'react';
import { TamilLetter, LanguageSupportMode } from '../types/alphabet';
import { audioTutor } from '../utils/audio';
import { 
  Volume2, 
  BookOpen, 
  Sparkles, 
  Languages, 
  ChevronLeft, 
  ChevronRight,
  PenTool
} from 'lucide-react';

interface LetterCardProps {
  letter: TamilLetter;
  languageMode: LanguageSupportMode;
  onPrev?: () => void;
  onNext?: () => void;
  onStartDrawing?: () => void;
}

export const LetterCard: React.FC<LetterCardProps> = ({
  letter,
  languageMode,
  onPrev,
  onNext,
  onStartDrawing
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 p-6 text-white relative">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold">
            <Languages className="w-3.5 h-3.5" />
            <span className="tamil-font">{letter.categoryTitle.ta}</span>
            <span>•</span>
            <span className="malayalam-font">{letter.categoryTitle.ml}</span>
          </div>

          {/* Prev / Next controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onPrev}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 transition active:scale-90"
              title="Previous letter"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={onNext}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 transition active:scale-90"
              title="Next letter"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Hero Letter Display */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-5 min-w-0 flex-1">
            {/* Big Tamil Letter with Audio Ping */}
            <div className="relative group shrink-0">
              <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-3xl bg-white text-orange-600 flex items-center justify-center font-extrabold shadow-2xl tamil-font group-hover:scale-105 transition-transform duration-200 border-4 border-orange-100 p-2 text-center select-none overflow-hidden">
                <span className={`${
                  /[ொோௌ]/.test(letter.letter) || letter.letter.length >= 3
                    ? 'text-3xl sm:text-4xl'
                    : letter.letter.includes('க்ஷ') || letter.letter.length === 2
                    ? 'text-4xl sm:text-5xl'
                    : 'text-6xl sm:text-7xl'
                } leading-none text-center`}>
                  {letter.letter}
                </span>
              </div>
              <button
                onClick={() => audioTutor.speakTamil(letter.letter)}
                className="absolute -bottom-2 -right-2 p-2.5 sm:p-3 bg-orange-700 hover:bg-orange-800 text-white rounded-2xl shadow-lg transition active:scale-95 group-hover:ring-4 group-hover:ring-orange-300 z-10"
                title="Pronounce in Tamil"
              >
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Letter Title & Basics */}
            <div className="min-w-0 flex-1">
              <span className="text-orange-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider block">
                Tamil Alphabet / தமிழ் எழுத்து
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 tamil-font truncate">
                {letter.letter}
              </h2>
              <p className="text-orange-100 text-xs sm:text-sm mt-1">
                Category: <span className="font-semibold">{letter.categoryTitle.en}</span>
              </p>
            </div>
          </div>

          {/* Quick Practice CTA */}
          {onStartDrawing && (
            <button
              onClick={onStartDrawing}
              className="px-5 py-3 rounded-2xl bg-white text-orange-700 hover:bg-orange-50 font-bold text-sm shadow-xl flex items-center space-x-2 transition active:scale-95 shrink-0"
            >
              <PenTool className="w-4 h-4 text-orange-600" />
              <span>Practice Drawing</span>
            </button>
          )}
        </div>
      </div>

      {/* Comparative Swaram Section (Malayalam & English) */}
      <div className="p-6 bg-slate-50/50 border-b border-slate-200">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Swaram & Equivalent Pronunciation (ஒலிக்குறிப்பு)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Malayalam Swaram Box */}
          {(languageMode === 'both' || languageMode === 'malayalam') && (
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50/40 rounded-2xl p-4 sm:p-5 border border-emerald-200/80 shadow-sm relative">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-emerald-200/80 text-emerald-900 rounded-full mb-2 max-w-full truncate">
                    മലയാളം സ്വരം (Malayalam)
                  </span>
                  <div className="flex flex-wrap items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-emerald-900 malayalam-font break-all">
                      {letter.malayalam}
                    </span>
                    {letter.malayalamName && (
                      <span className="text-[11px] font-semibold text-emerald-800 malayalam-font bg-emerald-100/80 px-2 py-0.5 rounded-md truncate max-w-full">
                        {letter.malayalamName}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => audioTutor.speakMalayalam(letter.malayalam)}
                  className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md transition active:scale-95 shrink-0"
                  title="Speak Malayalam swaram"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <p className="mt-3 text-xs text-emerald-900/90 leading-relaxed malayalam-font font-medium">
                {letter.soundDescriptionMl}
              </p>
            </div>
          )}

          {/* English Phonetic Guide Box */}
          {(languageMode === 'both' || languageMode === 'english') && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/40 rounded-2xl p-4 sm:p-5 border border-blue-200/80 shadow-sm relative">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-blue-200/80 text-blue-900 rounded-full mb-2 max-w-full truncate">
                    English Phonetics
                  </span>
                  <div className="flex items-baseline space-x-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-blue-900 font-mono break-all">
                      /{letter.english}/
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => audioTutor.speakTamil(letter.letter)}
                  className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition active:scale-95 shrink-0"
                  title="Speak letter sound"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <p className="mt-3 text-xs text-blue-900/90 leading-relaxed font-medium">
                {letter.soundDescriptionEn}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Real-world Example Word */}
      <div className="p-6 bg-white border-b border-slate-200">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center space-x-2">
          <BookOpen className="w-3.5 h-3.5 text-orange-500" />
          <span>Example Word (சொல் பயிற்சி / വാക്ക് ഉദാഹരണം)</span>
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-orange-50/50 rounded-2xl border border-orange-200/60 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl border border-orange-100">
              {letter.example.emoji}
            </div>

            <div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-slate-900 tamil-font">
                  {letter.example.wordTa}
                </span>
                <button
                  onClick={() => audioTutor.speakTamil(letter.example.wordTa)}
                  className="p-1.5 rounded-lg bg-orange-100 hover:bg-orange-200 text-orange-800 transition active:scale-90"
                  title="Listen to Tamil word"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-600">
                {(languageMode === 'both' || languageMode === 'malayalam') && (
                  <span className="font-semibold text-emerald-800 malayalam-font">
                    മലയാളം: {letter.example.wordMl} ({letter.example.meaningMl})
                  </span>
                )}
                {(languageMode === 'both' || languageMode === 'english') && (
                  <span className="font-medium text-slate-600">
                    English: {letter.example.wordEn} ({letter.example.meaningEn})
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stroke Formation Steps */}
      {letter.strokeSteps && letter.strokeSteps.length > 0 && (
        <div className="p-6 bg-slate-50/30">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Step-by-step Writing Order (எழுதும் முறை):
          </h4>
          <div className="flex flex-wrap gap-2">
            {letter.strokeSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 px-3 py-1.5 bg-white rounded-xl border border-slate-200 text-xs shadow-sm font-medium text-slate-700"
              >
                <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center text-[10px]">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
