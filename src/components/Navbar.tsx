import React from 'react';
import { LanguageSupportMode, PracticeMode } from '../types/alphabet';
import { 
  BookOpen, 
  PenTool, 
  Grid3X3, 
  Trophy, 
  Languages, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  languageMode: LanguageSupportMode;
  onLanguageModeChange: (mode: LanguageSupportMode) => void;
  activeMode: PracticeMode;
  onActiveModeChange: (mode: PracticeMode) => void;
  masteredCount: number;
  totalLetters: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  languageMode,
  onLanguageModeChange,
  activeMode,
  onActiveModeChange,
  masteredCount,
  totalLetters
}) => {
  const modes: { id: PracticeMode; labelTa: string; labelMl: string; labelEn: string; icon: React.ReactNode }[] = [
    { id: 'learn', labelTa: 'பயில்வோம்', labelMl: 'പഠിക്കാം', labelEn: 'Learn', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'practice', labelTa: 'வரைவோம்', labelMl: 'വരയ്ക്കാം', labelEn: 'Draw & Check', icon: <PenTool className="w-4 h-4" /> },
    { id: 'grid', labelTa: 'உயிர்மெய்', labelMl: 'അക്ഷരക്കൂട്ടുകൾ', labelEn: '216 Grid', icon: <Grid3X3 className="w-4 h-4" /> },
    { id: 'quiz', labelTa: 'வினாடிவினா', labelMl: 'ക്വിസ്', labelEn: 'Quiz', icon: <Trophy className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3 gap-3">
          
          {/* Logo & App Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20 font-bold text-2xl tamil-font ring-2 ring-orange-200">
              அ
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  <span className="text-orange-600">தமிழ்</span> Alphabet Tutor
                </h1>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                  <Sparkles className="w-3 h-3 mr-1 text-amber-600" />
                  Interactive
                </span>
              </div>
              <p className="text-xs text-slate-500 flex items-center space-x-1.5">
                <span className="malayalam-font font-medium text-emerald-700">മലയാളം</span>
                <span>&</span>
                <span>English Swaram Guides</span>
              </p>
            </div>
          </div>

          {/* Right Controls: Language Support Selection & Progress */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Language Support Selector */}
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs">
              <span className="px-2 text-slate-500 font-semibold flex items-center space-x-1 text-[11px]">
                <Languages className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Support:</span>
              </span>

              <button
                onClick={() => onLanguageModeChange('both')}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${
                  languageMode === 'both'
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Show both Malayalam and English guides"
              >
                Both (മല + En)
              </button>

              <button
                onClick={() => onLanguageModeChange('malayalam')}
                className={`px-3 py-1.5 rounded-xl font-bold transition malayalam-font ${
                  languageMode === 'malayalam'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Show Malayalam guide only"
              >
                മലയാളം
              </button>

              <button
                onClick={() => onLanguageModeChange('english')}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${
                  languageMode === 'english'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Show English guide only"
              >
                English
              </button>
            </div>

            {/* Mastered Letters Counter */}
            <div className="flex items-center space-x-2 bg-orange-50 border border-orange-200/80 px-3 py-1.5 rounded-2xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <div className="text-xs">
                <span className="font-extrabold text-orange-800">{masteredCount}</span>
                <span className="text-slate-500 font-medium">/{totalLetters} Letters</span>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Mode Navigation Tabs */}
        <div className="flex space-x-2 border-t border-slate-100 pt-2 pb-2 overflow-x-auto">
          {modes.map(m => (
            <button
              key={m.id}
              onClick={() => onActiveModeChange(m.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all shrink-0 ${
                activeMode === m.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900'
              }`}
            >
              {m.icon}
              <span className="tamil-font">{m.labelTa}</span>
              <span className="opacity-75">({m.labelEn})</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
