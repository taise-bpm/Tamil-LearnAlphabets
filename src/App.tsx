import { useState, useEffect } from 'react';
import { TamilLetter, LanguageSupportMode, PracticeMode } from './types/alphabet';
import { UYIR_LETTERS, ALL_LETTERS, ALL_UYIR_MEI_LETTERS } from './data/tamilAlphabet';
import { Navbar } from './components/Navbar';
import { DrawingCanvas } from './components/DrawingCanvas';
import { LetterCard } from './components/LetterCard';
import { LetterSelector } from './components/LetterSelector';
import { UyirMeiMatrix } from './components/UyirMeiMatrix';
import { AlphabetQuiz } from './components/AlphabetQuiz';
import { 
  ChevronLeft,
  ChevronRight,
  PenTool
} from 'lucide-react';

export function App() {
  const [selectedLetter, setSelectedLetter] = useState<TamilLetter>(UYIR_LETTERS[0]);
  const [languageMode, setLanguageMode] = useState<LanguageSupportMode>(() => {
    const saved = localStorage.getItem('tamil_tutor_lang_mode');
    return (saved as LanguageSupportMode) || 'both';
  });
  const [activeMode, setActiveMode] = useState<PracticeMode>('practice');
  const [scores, setScores] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('tamil_tutor_scores');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Persist language mode
  useEffect(() => {
    localStorage.setItem('tamil_tutor_lang_mode', languageMode);
  }, [languageMode]);

  // Persist scores
  useEffect(() => {
    localStorage.setItem('tamil_tutor_scores', JSON.stringify(scores));
  }, [scores]);

  const handleMastered = (letterId: string, score: number) => {
    setScores(prev => ({
      ...prev,
      [letterId]: Math.max(prev[letterId] || 0, score)
    }));
  };

  // Next / Previous letter navigation helper
  const handlePrevLetter = () => {
    if (selectedLetter.category === 'uyir-mei') {
      const idx = ALL_UYIR_MEI_LETTERS.findIndex(
        l => l.id === selectedLetter.id || l.letter === selectedLetter.letter
      );
      const safeIdx = idx >= 0 ? idx : 0;
      const prev = ALL_UYIR_MEI_LETTERS[(safeIdx - 1 + ALL_UYIR_MEI_LETTERS.length) % ALL_UYIR_MEI_LETTERS.length];
      setSelectedLetter(prev);
    } else {
      const idx = ALL_LETTERS.findIndex(
        l => l.id === selectedLetter.id || l.letter === selectedLetter.letter
      );
      const safeIdx = idx >= 0 ? idx : 0;
      const prev = ALL_LETTERS[(safeIdx - 1 + ALL_LETTERS.length) % ALL_LETTERS.length];
      setSelectedLetter(prev);
    }
  };

  const handleNextLetter = () => {
    if (selectedLetter.category === 'uyir-mei') {
      const idx = ALL_UYIR_MEI_LETTERS.findIndex(
        l => l.id === selectedLetter.id || l.letter === selectedLetter.letter
      );
      const safeIdx = idx >= 0 ? idx : 0;
      const next = ALL_UYIR_MEI_LETTERS[(safeIdx + 1) % ALL_UYIR_MEI_LETTERS.length];
      setSelectedLetter(next);
    } else {
      const idx = ALL_LETTERS.findIndex(
        l => l.id === selectedLetter.id || l.letter === selectedLetter.letter
      );
      const safeIdx = idx >= 0 ? idx : 0;
      const next = ALL_LETTERS[(safeIdx + 1) % ALL_LETTERS.length];
      setSelectedLetter(next);
    }
  };

  const masteredCount = Object.values(scores).filter(s => s >= 75).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        languageMode={languageMode}
        onLanguageModeChange={setLanguageMode}
        activeMode={activeMode}
        onActiveModeChange={setActiveMode}
        masteredCount={masteredCount}
        totalLetters={ALL_LETTERS.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Banner with Language Support Notification */}
        <div className="mb-6 p-4 rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl shrink-0">
              ✍️
            </div>
            <div>
              <h2 className="font-extrabold text-lg sm:text-xl">
                Learn Tamil with Malayalam & English Swaram
              </h2>
              <p className="text-xs text-orange-100 font-medium">
                {languageMode === 'malayalam' && (
                  <span className="malayalam-font">
                    മലയാളം അക്ഷരങ്ങളുമായി താരതമ്യം ചെയ്ത് തമിഴ് എഴുതി ശീലിക്കാം!
                  </span>
                )}
                {languageMode === 'english' && (
                  <span>
                    Master Tamil script with English phonetics and interactive drawing!
                  </span>
                )}
                {languageMode === 'both' && (
                  <span>
                    മലയാളം സ്വരങ്ങളും English Phonetics-ഉം ഒരേസമയം കണ്ട് വരച്ച് പഠിക്കാം!
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => setActiveMode('practice')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeMode === 'practice'
                  ? 'bg-white text-orange-700 shadow-md'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              Draw & Check
            </button>
            <button
              onClick={() => setActiveMode('learn')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeMode === 'learn'
                  ? 'bg-white text-orange-700 shadow-md'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              Explore Letters
            </button>
          </div>
        </div>

        {/* View Mode Switching */}
        {activeMode === 'practice' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Drawing Canvas and Evaluation */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col space-y-6">
              <DrawingCanvas
                key={selectedLetter.id}
                letter={selectedLetter}
                languageMode={languageMode}
                onMastered={handleMastered}
                savedScore={scores[selectedLetter.id]}
              />

              {/* Quick prev / next buttons */}
              <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <button
                  onClick={handlePrevLetter}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Letter</span>
                </button>

                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-orange-600 tamil-font">
                    {selectedLetter.letter}
                  </span>
                  <span className="text-sm font-semibold text-emerald-700 malayalam-font">
                    ({selectedLetter.malayalam})
                  </span>
                </div>

                <button
                  onClick={handleNextLetter}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition shadow-sm"
                >
                  <span>Next Letter</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Letter Selector & Quick Info */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col space-y-6">
              <LetterSelector
                selectedLetter={selectedLetter}
                onSelectLetter={setSelectedLetter}
                scores={scores}
              />

              <LetterCard
                letter={selectedLetter}
                languageMode={languageMode}
                onPrev={handlePrevLetter}
                onNext={handleNextLetter}
              />
            </div>
          </div>
        )}

        {activeMode === 'learn' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 xl:col-span-8">
              <LetterCard
                letter={selectedLetter}
                languageMode={languageMode}
                onPrev={handlePrevLetter}
                onNext={handleNextLetter}
                onStartDrawing={() => setActiveMode('practice')}
              />
            </div>

            <div className="lg:col-span-5 xl:col-span-4 flex flex-col space-y-6">
              <LetterSelector
                selectedLetter={selectedLetter}
                onSelectLetter={setSelectedLetter}
                scores={scores}
              />

              <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border border-orange-200 shadow-sm text-center">
                <PenTool className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 text-base">
                  Ready to practice writing?
                </h4>
                <p className="text-xs text-slate-600 mt-1 mb-4">
                  Draw this letter on our interactive canvas and get instant accuracy scoring!
                </p>
                <button
                  onClick={() => setActiveMode('practice')}
                  className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-sm shadow-md transition active:scale-95"
                >
                  Start Drawing Practice
                </button>
              </div>
            </div>
          </div>
        )}

        {activeMode === 'grid' && (
          <UyirMeiMatrix
            languageMode={languageMode}
            onPracticeLetter={(letter) => {
              setSelectedLetter(letter);
              setActiveMode('practice');
            }}
          />
        )}

        {activeMode === 'quiz' && (
          <AlphabetQuiz languageMode={languageMode} />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="flex items-center space-x-1.5">
            <span className="font-bold text-orange-600">தமிழ் Alphabet Tutor</span>
            <span>•</span>
            <span className="malayalam-font font-medium text-emerald-800">
              മലയാളം & English Swaram Support
            </span>
          </p>
          <p>
            Interactive handwriting canvas with automatic stroke accuracy scoring & Web Speech audio.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
