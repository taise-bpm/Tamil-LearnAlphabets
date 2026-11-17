import React from 'react';
import { TamilLetter, LetterCategory } from '../types/alphabet';
import { UYIR_LETTERS, AYUTHA_LETTER, MEI_LETTERS, GRANTHA_LETTERS } from '../data/tamilAlphabet';
import { CheckCircle2 } from 'lucide-react';

interface LetterSelectorProps {
  selectedLetter: TamilLetter;
  onSelectLetter: (letter: TamilLetter) => void;
  scores: Record<string, number>;
}

export const LetterSelector: React.FC<LetterSelectorProps> = ({
  selectedLetter,
  onSelectLetter,
  scores
}) => {
  const [activeTab, setActiveTab] = React.useState<LetterCategory>(selectedLetter.category || 'uyir');

  // Keep active tab synced if letter selected externally
  React.useEffect(() => {
    if (selectedLetter.category && selectedLetter.category !== 'uyir-mei') {
      setActiveTab(selectedLetter.category);
    }
  }, [selectedLetter.category]);

  const getLettersForTab = () => {
    switch (activeTab) {
      case 'uyir':
        return UYIR_LETTERS;
      case 'ayutham':
        return [AYUTHA_LETTER];
      case 'mei':
        return MEI_LETTERS;
      case 'grantha':
        return GRANTHA_LETTERS;
      default:
        return UYIR_LETTERS;
    }
  };

  const tabs: { id: LetterCategory; labelTa: string; labelMl: string; labelEn: string; count: number }[] = [
    { id: 'uyir', labelTa: 'உயிர்', labelMl: 'ഉയിർ (12)', labelEn: 'Vowels', count: 12 },
    { id: 'ayutham', labelTa: 'ஆய்தம்', labelMl: 'ആയ്തം (1)', labelEn: 'Special', count: 1 },
    { id: 'mei', labelTa: 'மெய்', labelMl: 'മെയ് (18)', labelEn: 'Consonants', count: 18 },
    { id: 'grantha', labelTa: 'கிரந்தம் / பிற', labelMl: 'ഗ്രന്ഥം (7)', labelEn: 'Grantha', count: 7 }
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-4">
      {/* Active Compound Letter Banner if practicing Uyir-Mei */}
      {selectedLetter.category === 'uyir-mei' && (
        <div className="mb-3 p-2.5 bg-orange-50 border border-orange-200 rounded-2xl flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 min-w-0">
            <span className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold tamil-font text-sm shadow-xs shrink-0">
              {selectedLetter.letter}
            </span>
            <span className="text-orange-950 font-semibold truncate">
              Compound Letter ({selectedLetter.malayalam} / {selectedLetter.english})
            </span>
          </div>
          <span className="text-[10px] text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full font-bold shrink-0 ml-2">
            உயிர்மெய்
          </span>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex space-x-1.5 p-1 bg-slate-100 rounded-2xl mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition flex flex-col items-center justify-center ${
              activeTab === tab.id
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="tamil-font">{tab.labelTa}</span>
            <span className="text-[10px] text-slate-400 font-normal">{tab.count} letters</span>
          </button>
        ))}
      </div>

      {/* Letter Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-2">
        {getLettersForTab().map(l => {
          const isSelected = selectedLetter.id === l.id;
          const score = scores[l.id];
          const isMastered = score !== undefined && score >= 75;

          return (
            <button
              key={l.id}
              onClick={() => onSelectLetter(l)}
              className={`relative p-2.5 rounded-2xl border flex flex-col items-center justify-center transition-all ${
                isSelected
                  ? 'bg-orange-500 text-white border-orange-600 shadow-lg shadow-orange-500/30 scale-105 z-10'
                  : 'bg-slate-50 hover:bg-orange-50 text-slate-800 border-slate-200 hover:border-orange-300'
              }`}
            >
              <span className={`text-2xl font-bold tamil-font leading-tight ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                {l.letter}
              </span>
              <div className="flex items-center space-x-1 text-[10px] mt-0.5 opacity-80">
                <span className="malayalam-font font-semibold">{l.malayalam}</span>
                <span>•</span>
                <span className="font-mono">{l.english}</span>
              </div>

              {/* Mastered Badge */}
              {isMastered && (
                <div className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
