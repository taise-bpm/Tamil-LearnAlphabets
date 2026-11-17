import React, { useState } from 'react';
import { UYIR_MEI_MATRIX, ALL_UYIR_MEI_LETTERS } from '../data/tamilAlphabet';
import { LanguageSupportMode, TamilLetter } from '../types/alphabet';
import { audioTutor } from '../utils/audio';
import { Volume2, PenTool, X } from 'lucide-react';

interface UyirMeiMatrixProps {
  languageMode: LanguageSupportMode;
  onPracticeLetter: (letter: TamilLetter) => void;
}

export const UyirMeiMatrix: React.FC<UyirMeiMatrixProps> = ({
  languageMode,
  onPracticeLetter
}) => {
  const [selectedCell, setSelectedCell] = useState<{
    letter: string;
    vowelLetter: string;
    consonant: string;
    malayalam: string;
    english: string;
  } | null>(null);

  const vowels = [
    { ta: 'அ', ml: 'അ', en: 'a' },
    { ta: 'ஆ', ml: 'ആ', en: 'aa' },
    { ta: 'இ', ml: 'ഇ', en: 'i' },
    { ta: 'ஈ', ml: 'ഈ', en: 'ee' },
    { ta: 'உ', ml: 'ഉ', en: 'u' },
    { ta: 'ஊ', ml: 'ഊ', en: 'oo' },
    { ta: 'எ', ml: 'എ', en: 'e' },
    { ta: 'ஏ', ml: 'ഏ', en: 'ae' },
    { ta: 'ஐ', ml: 'ഐ', en: 'ai' },
    { ta: 'ஒ', ml: 'ഒ', en: 'o' },
    { ta: 'ஓ', ml: 'ഓ', en: 'oo' },
    { ta: 'ஔ', ml: 'ഔ', en: 'au' }
  ];

  const handleSendToPractice = () => {
    if (!selectedCell) return;
    const existing = ALL_UYIR_MEI_LETTERS.find(l => l.letter === selectedCell.letter);
    if (existing) {
      onPracticeLetter(existing);
      return;
    }
    const tempLetter: TamilLetter = {
      id: `um-${selectedCell.letter}`,
      letter: selectedCell.letter,
      category: 'uyir-mei',
      categoryTitle: {
        ta: 'உயிர்மெய் எழுத்து',
        ml: 'ഉയിർമെയ് അക്ഷരം',
        en: 'Compound Letter'
      },
      malayalam: selectedCell.malayalam,
      malayalamName: `${selectedCell.consonant} + ${selectedCell.vowelLetter}`,
      english: selectedCell.english,
      soundDescriptionEn: `Combination of consonant '${selectedCell.consonant}' and vowel '${selectedCell.vowelLetter}' (${selectedCell.english})`,
      soundDescriptionMl: `'${selectedCell.consonant}' വ്യഞ്ജനവും '${selectedCell.vowelLetter}' സ്വരവും ചേർന്ന അക്ഷരം`,
      example: {
        wordTa: selectedCell.letter,
        wordMl: selectedCell.malayalam,
        wordEn: selectedCell.english,
        meaningEn: `Compound letter: ${selectedCell.letter}`,
        meaningMl: `ഉയിർമെയ് അക്ഷരം: ${selectedCell.malayalam}`,
        emoji: '✨'
      },
      strokeInstructions: {
        en: `Write the consonant base and attach the corresponding vowel sign for '${selectedCell.vowelLetter}'.`,
        ml: `വ്യഞ്ജന അക്ഷരത്തോടൊപ്പം '${selectedCell.vowelLetter}' എന്ന സ്വരത്തിന്റെ ചിഹ്നം ചേർക്കുക.`,
        ta: `மெய் எழுத்துடன் '${selectedCell.vowelLetter}' உயிர்க்குறியை இணைத்து எழுதவும்.`
      }
    };
    onPracticeLetter(tempLetter);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">
              216
            </span>
            <h3 className="text-xl font-bold text-slate-800 tamil-font">
              உயிர்மெய் எழுத்துக்கள் (Compound Letters Matrix)
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {languageMode !== 'english' && (
              <span className="malayalam-font font-semibold text-emerald-700 mr-2">
                18 വ്യഞ്ജനങ്ങളും 12 സ്വരങ്ങളും ചേർന്ന 216 അക്ഷരക്കൂട്ടുകൾ
              </span>
            )}
            <span>Click any cell to hear pronunciation and inspect equivalent Malayalam / English swaram!</span>
          </p>
        </div>
      </div>

      {/* Interactive Matrix Table */}
      <div className="overflow-x-auto mt-4 pb-2">
        <table className="w-full text-center border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-orange-50 text-orange-950 text-xs font-bold border-b border-orange-200">
              <th className="p-3 sticky left-0 bg-orange-100/90 backdrop-blur z-10 text-left font-extrabold">
                மெய் \ உயிர்
              </th>
              {vowels.map(v => (
                <th key={v.ta} className="p-2.5 min-w-[50px]">
                  <div className="tamil-font text-base font-bold text-orange-800">{v.ta}</div>
                  <div className="text-[10px] text-orange-600 font-normal">
                    {languageMode !== 'english' && <span className="malayalam-font mr-1">{v.ml}</span>}
                    {languageMode !== 'malayalam' && <span>{v.en}</span>}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {UYIR_MEI_MATRIX.map((row, idx) => (
              <tr key={row.consonant} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                {/* Consonant Header Cell */}
                <td className="p-2.5 font-bold text-left sticky left-0 bg-slate-100/90 backdrop-blur z-10 border-r border-slate-200">
                  <div className="flex items-center space-x-1.5">
                    <span className="tamil-font text-lg text-slate-800">{row.consonant}</span>
                    <span className="text-[11px] text-slate-500">
                      ({languageMode !== 'english' ? row.consonantMl : row.consonantEn})
                    </span>
                  </div>
                </td>

                {/* 12 Vowel Combination Cells */}
                {row.combinations.map((comb) => {
                  const isSelected = selectedCell?.letter === comb.letter;
                  return (
                    <td key={comb.letter} className="p-1">
                      <button
                        onClick={() => {
                          setSelectedCell({
                            letter: comb.letter,
                            vowelLetter: comb.vowelLetter,
                            consonant: row.consonant,
                            malayalam: comb.malayalam,
                            english: comb.english
                          });
                          audioTutor.speakTamil(comb.letter);
                        }}
                        className={`w-full py-2 px-1 rounded-xl text-base font-bold transition-all tamil-font flex flex-col items-center justify-center ${
                          isSelected
                            ? 'bg-orange-600 text-white shadow-md scale-105'
                            : 'hover:bg-orange-100 text-slate-700 hover:text-orange-900'
                        }`}
                      >
                        <span>{comb.letter}</span>
                        <span className={`text-[9px] font-normal font-sans ${isSelected ? 'text-orange-100' : 'text-slate-400'}`}>
                          {languageMode === 'malayalam' ? comb.malayalam : comb.english}
                        </span>
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected Cell Detail Modal / Flyout */}
      {selectedCell && (
        <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-2xl border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-600 text-white flex items-center justify-center text-4xl font-bold tamil-font shadow-md">
              {selectedCell.letter}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-slate-800">
                  {selectedCell.consonant} + {selectedCell.vowelLetter} = {selectedCell.letter}
                </span>
                <button
                  onClick={() => audioTutor.speakTamil(selectedCell.letter)}
                  className="p-1.5 rounded-lg bg-orange-200 text-orange-900 hover:bg-orange-300 transition"
                  title="Speak letter"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-1 text-xs">
                {(languageMode === 'both' || languageMode === 'malayalam') && (
                  <span className="bg-emerald-100 text-emerald-900 font-semibold px-2 py-0.5 rounded-md malayalam-font flex items-center space-x-1">
                    <span>മലയാളം: {selectedCell.malayalam}</span>
                    <button onClick={() => audioTutor.speakMalayalam(selectedCell.malayalam)} className="hover:text-emerald-700">
                      <Volume2 className="w-3 h-3 ml-0.5 inline" />
                    </button>
                  </span>
                )}
                {(languageMode === 'both' || languageMode === 'english') && (
                  <span className="bg-blue-100 text-blue-900 font-semibold px-2 py-0.5 rounded-md">
                    English sound: /{selectedCell.english}/
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleSendToPractice}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center space-x-1.5 transition active:scale-95"
            >
              <PenTool className="w-4 h-4" />
              <span>Practice Drawing</span>
            </button>
            <button
              onClick={() => setSelectedCell(null)}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
