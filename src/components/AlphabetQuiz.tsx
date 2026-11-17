import React, { useState, useEffect } from 'react';
import { TamilLetter, LanguageSupportMode } from '../types/alphabet';
import { ALL_LETTERS } from '../data/tamilAlphabet';
import { audioTutor } from '../utils/audio';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';

interface QuizQuestion {
  id: number;
  type: 'ml-to-ta' | 'ta-to-ml' | 'sound-to-ta' | 'word-to-ta';
  promptTitle: string;
  promptSubtitle?: string;
  targetLetter: TamilLetter;
  options: TamilLetter[];
}

interface AlphabetQuizProps {
  languageMode: LanguageSupportMode;
}

export const AlphabetQuiz: React.FC<AlphabetQuizProps> = ({ languageMode }) => {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedOption, setSelectedOption] = useState<TamilLetter | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [totalAnswered, setTotalAnswered] = useState(0);

  // Generate a random question
  const generateQuestion = (): QuizQuestion => {
    // Pick target letter
    const randomIndex = Math.floor(Math.random() * ALL_LETTERS.length);
    const target = ALL_LETTERS[randomIndex];

    // Pick 3 unique distractor letters
    const distractors: TamilLetter[] = [];
    while (distractors.length < 3) {
      const idx = Math.floor(Math.random() * ALL_LETTERS.length);
      const candidate = ALL_LETTERS[idx];
      if (candidate.id !== target.id && !distractors.some(d => d.id === candidate.id)) {
        distractors.push(candidate);
      }
    }

    // Shuffle options
    const options = [target, ...distractors].sort(() => Math.random() - 0.5);

    // Question types
    const types: ('ml-to-ta' | 'ta-to-ml' | 'sound-to-ta' | 'word-to-ta')[] = [];
    if (languageMode === 'both' || languageMode === 'malayalam') {
      types.push('ml-to-ta', 'ta-to-ml');
    }
    if (languageMode === 'both' || languageMode === 'english') {
      types.push('sound-to-ta', 'word-to-ta');
    }
    if (types.length === 0) types.push('sound-to-ta');

    const chosenType = types[Math.floor(Math.random() * types.length)];

    let promptTitle = '';
    let promptSubtitle = '';

    switch (chosenType) {
      case 'ml-to-ta':
        promptTitle = `Which Tamil letter corresponds to Malayalam '${target.malayalam}'?`;
        promptSubtitle = `'${target.malayalam}' എന്ന മലയാള സ്വരത്തിന് തുല്യമായ തമിഴ് അക്ഷരം ഏതാണ്?`;
        break;
      case 'ta-to-ml':
        promptTitle = `Find the Malayalam swaram equivalent for:`;
        promptSubtitle = `തമിഴ് അക്ഷരത്തിന് അനുയോജ്യമായ മലയാള സ്വരം തിരഞ്ഞെടുക്കൂ`;
        break;
      case 'sound-to-ta':
        promptTitle = `Listen and pick the matching Tamil letter:`;
        promptSubtitle = `Sound: /${target.english}/`;
        break;
      case 'word-to-ta':
        promptTitle = `Which letter starts the word "${target.example.wordTa}" (${target.example.meaningEn})?`;
        promptSubtitle = `${target.example.emoji} ${target.example.wordMl} (${target.example.meaningMl})`;
        break;
    }

    return {
      id: Date.now(),
      type: chosenType,
      promptTitle,
      promptSubtitle,
      targetLetter: target,
      options
    };
  };

  useEffect(() => {
    setCurrentQuestion(generateQuestion());
  }, [languageMode]);

  const handleSelectOption = (opt: TamilLetter) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOption(opt);
    setIsAnswered(true);
    setTotalAnswered(prev => prev + 1);

    const isCorrect = opt.id === currentQuestion.targetLetter.id;

    if (isCorrect) {
      setScore(prev => prev + 10);
      setStreak(prev => prev + 1);
      audioTutor.playSuccessChime();
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 }
      });
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setQuestionIndex(prev => prev + 1);
    setCurrentQuestion(generateQuestion());
  };

  const resetQuiz = () => {
    setScore(0);
    setStreak(0);
    setTotalAnswered(0);
    setQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentQuestion(generateQuestion());
  };

  if (!currentQuestion) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 max-w-3xl mx-auto">
      {/* Quiz Top Score Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-base">Alphabet Master Quiz</h3>
            <p className="text-xs text-slate-400">Test your Tamil & Malayalam swaram memory</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Total Played</span>
            <span className="text-xl font-extrabold text-slate-700">{totalAnswered}</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Score</span>
            <span className="text-xl font-extrabold text-orange-600">{score}</span>
          </div>
          {streak > 1 && (
            <div className="text-right bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
              <span className="text-[10px] text-amber-700 font-bold block">🔥 Streak</span>
              <span className="text-sm font-extrabold text-amber-800">{streak} in a row</span>
            </div>
          )}
          <button
            onClick={resetQuiz}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition"
            title="Restart quiz"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Question Card */}
      <div className="mt-6 text-center">
        <div className="inline-block px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold mb-2">
          Question #{questionIndex + 1}
        </div>
        <h2 className="text-xl font-bold text-slate-800">
          {currentQuestion.promptTitle}
        </h2>
        {currentQuestion.promptSubtitle && (
          <p className="text-sm font-medium text-emerald-800 malayalam-font mt-1">
            {currentQuestion.promptSubtitle}
          </p>
        )}

        {/* Prompt Letter / Clue Display */}
        <div className="my-6 flex justify-center">
          {currentQuestion.type === 'ml-to-ta' && (
            <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-6xl font-bold malayalam-font shadow-lg shadow-emerald-500/20">
              {currentQuestion.targetLetter.malayalam}
            </div>
          )}

          {currentQuestion.type === 'ta-to-ml' && (
            <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center text-6xl font-bold tamil-font shadow-lg shadow-orange-500/20">
              {currentQuestion.targetLetter.letter}
            </div>
          )}

          {currentQuestion.type === 'sound-to-ta' && (
            <div className="flex flex-col items-center space-y-3">
              <button
                onClick={() => audioTutor.speakTamil(currentQuestion.targetLetter.letter)}
                className="w-28 h-28 rounded-3xl bg-orange-600 hover:bg-orange-700 text-white flex flex-col items-center justify-center shadow-xl shadow-orange-500/25 transition active:scale-95 group"
                title="Click to hear letter sound"
              >
                <Volume2 className="w-10 h-10 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold mt-1">Play Sound</span>
              </button>
              <span className="text-xs font-mono text-slate-500">
                Sound: /{currentQuestion.targetLetter.english}/
              </span>
            </div>
          )}

          {currentQuestion.type === 'word-to-ta' && (
            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200 flex items-center space-x-4">
              <span className="text-5xl">{currentQuestion.targetLetter.example.emoji}</span>
              <div className="text-left">
                <span className="text-2xl font-bold text-slate-800 tamil-font">
                  {currentQuestion.targetLetter.example.wordTa}
                </span>
                <p className="text-xs text-slate-500">
                  {currentQuestion.targetLetter.example.wordEn} ({currentQuestion.targetLetter.example.meaningEn})
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Answer Options Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {currentQuestion.options.map((opt) => {
          const isCorrect = opt.id === currentQuestion.targetLetter.id;
          const isSelected = selectedOption?.id === opt.id;

          let btnStyle = 'bg-slate-50 border-slate-200 hover:border-orange-400 hover:bg-orange-50 text-slate-800';

          if (isAnswered) {
            if (isCorrect) {
              btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-2 ring-emerald-500 shadow-md';
            } else if (isSelected) {
              btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-500';
            } else {
              btnStyle = 'bg-slate-50 border-slate-200 opacity-50';
            }
          }

          return (
            <button
              key={opt.id}
              disabled={isAnswered}
              onClick={() => handleSelectOption(opt)}
              className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center relative active:scale-95 ${btnStyle}`}
            >
              {currentQuestion.type === 'ta-to-ml' ? (
                // If question asked for Malayalam swaram
                <>
                  <span className="text-4xl font-bold malayalam-font">{opt.malayalam}</span>
                  <span className="text-xs font-mono mt-1 opacity-70">/{opt.english}/</span>
                </>
              ) : (
                // If question asked for Tamil letter
                <>
                  <span className="text-4xl font-bold tamil-font">{opt.letter}</span>
                  <div className="flex items-center space-x-1.5 text-xs mt-1 opacity-70">
                    <span className="malayalam-font font-semibold">{opt.malayalam}</span>
                    <span>•</span>
                    <span className="font-mono">{opt.english}</span>
                  </div>
                </>
              )}

              {/* Status Icons */}
              {isAnswered && isCorrect && (
                <div className="absolute top-2 right-2 text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              )}
              {isAnswered && isSelected && !isCorrect && (
                <div className="absolute top-2 right-2 text-rose-500">
                  <XCircle className="w-5 h-5" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Answer Feedback Banner & Next Button */}
      {isAnswered && (
        <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-800">
                {selectedOption?.id === currentQuestion.targetLetter.id
                  ? '🎉 Correct Answer!'
                  : '💡 Correct Answer: '}
              </span>
              <span className="text-lg font-bold text-orange-600 tamil-font">
                {currentQuestion.targetLetter.letter}
              </span>
              <span className="text-base font-bold text-emerald-700 malayalam-font">
                ({currentQuestion.targetLetter.malayalam})
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Sound: /{currentQuestion.targetLetter.english}/ • {currentQuestion.targetLetter.soundDescriptionEn}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-sm shadow-md flex items-center space-x-2 transition active:scale-95 shrink-0"
          >
            <span>Next Question</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
