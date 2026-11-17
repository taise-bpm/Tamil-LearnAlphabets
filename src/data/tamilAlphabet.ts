import { TamilLetter } from '../types/alphabet';

// 12 Uyir Ezhuthukkal (உயிர் எழுத்துக்கள் - Vowels)
export const UYIR_LETTERS: TamilLetter[] = [
  {
    id: 'u-1',
    letter: 'அ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (குறில்)',
      ml: 'ഉയിരെഴുത്ത് (ഹ്രസ്വസ്വരം)',
      en: 'Vowel (Short)'
    },
    malayalam: 'അ',
    malayalamName: 'ഹ്രസ്വ അ (A)',
    english: 'a',
    soundDescriptionEn: "Short 'a' sound, like 'a' in 'cup' or 'umbrella'",
    soundDescriptionMl: "'അ'കാരം - അമ്മ, അച്ഛൻ എന്നിവയിലെ ആദ്യ സ്വരം",
    example: {
      wordTa: 'அம்மா',
      wordMl: 'അമ്മ',
      wordEn: 'Amma',
      meaningEn: 'Mother',
      meaningMl: 'മാതാവ് / അമ്മ',
      emoji: '👩‍👧'
    },
    strokeInstructions: {
      en: 'Start with a small loop on top left, curve round to the bottom, then pull a horizontal bar to the right, and join with a straight vertical line downward.',
      ml: 'മുകളിൽ ഇടതുവശത്ത് ഒരു ചെറിയ വൃത്തത്തിൽ തുടങ്ങി താഴേക്ക് വളച്ചു വരയ്ക്കുക, തുടർന്ന് വലത്തോട്ട് ഒരു നേർരേഖയും താഴേക്ക് ലംബരേഖയും വരയ്ക്കുക.',
      ta: 'மேல் இடதுபுறம் சிறு சுழியாகத் தொடங்கி, வளைத்து கீழ் நோக்கி வந்து, வலதுபுறமாக கிடைமட்டக் கோடு இழுத்து, செங்குத்து கோட்டுடன் இணைக்கவும்.'
    },
    strokeSteps: ['சிறு சுழி (Circle loop)', 'வளைவு (Bottom curve)', 'இணைப்புக் கோடு (Horizontal link)', 'செங்குத்துக் கோடு (Vertical line)']
  },
  {
    id: 'u-2',
    letter: 'ஆ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (நெடில்)',
      ml: 'ഉയിരെഴുത്ത് (ദീർഘസ്വരം)',
      en: 'Vowel (Long)'
    },
    malayalam: 'ആ',
    malayalamName: 'ദീർഘ ആ (Aa)',
    english: 'aa',
    soundDescriptionEn: "Long 'aa' sound, like 'a' in 'father' or 'car'",
    soundDescriptionMl: "'ആ'കാരം - ആട്, ആന എന്നിവയിലെ ദീർഘസ്വരം",
    example: {
      wordTa: 'ஆடு',
      wordMl: 'ആട്',
      wordEn: 'Aadu',
      meaningEn: 'Goat',
      meaningMl: 'ആട്',
      emoji: '🐐'
    },
    strokeInstructions: {
      en: "Form the letter 'அ', then curve underneath and curl a loop upwards at the bottom right.",
      ml: "'അ' പോലെ വരച്ച്, താഴെ വലതുവശത്ത് അടിയിലൂടെ ഒരു കൊളുത്ത് മുകളിലേക്ക് വളച്ചെടുക്കുക.",
      ta: "'அ' போன்று எழுதி, அடியில் வலதுபுறம் ஒரு கீழ் சுழியை சுழித்து முடிக்கவும்."
    },
    strokeSteps: ["'அ' வடிவம் (Draw 'அ')", 'கீழ் வளைவு (Bottom loop curl)']
  },
  {
    id: 'u-3',
    letter: 'இ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (குறில்)',
      ml: 'ഉയിരെഴുത്ത് (ഹ്രസ്വസ്വരം)',
      en: 'Vowel (Short)'
    },
    malayalam: 'ഇ',
    malayalamName: 'ഹ്രസ്വ ഇ (I)',
    english: 'i',
    soundDescriptionEn: "Short 'i' sound, like 'i' in 'pin' or 'sit'",
    soundDescriptionMl: "'ഇ'കാരം - ഇല, ഇഞ്ചി എന്നിവയിലെ സ്വരം",
    example: {
      wordTa: 'இலை',
      wordMl: 'ഇല',
      wordEn: 'Ilai',
      meaningEn: 'Leaf',
      meaningMl: 'ഇല',
      emoji: '🍃'
    },
    strokeInstructions: {
      en: 'Start with a small top circle, curve over to the right and downwards, loop inside, and swoop out below to the left.',
      ml: 'മുകളിൽ ചെറിയ വൃത്തത്തിൽ തുടങ്ങി, വലത്തോട്ട് വളച്ച് ഉള്ളിലേക്ക് ചുറ്റി അടിയിലൂടെ ഇടത്തോട്ട് വലിച്ച് നീട്ടുക.',
      ta: 'மேல் சுழியில் தொடங்கி, வலப்புறம் வளைந்து உள்ளே சுருட்டி, கீழ் வழியே இடப்புறம் இழுத்து வளைக்கவும்.'
    },
    strokeSteps: ['மேல் சுழி (Top loop)', 'வலது வளைவு (Right curve)', 'உள் சுருள் (Inner loop)', 'கீழ் வால் (Bottom tail)']
  },
  {
    id: 'u-4',
    letter: 'ஈ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (நெடில்)',
      ml: 'ഉയിരെഴുത്ത് (ദീർഘസ്വരം)',
      en: 'Vowel (Long)'
    },
    malayalam: 'ഈ',
    malayalamName: 'ദീർഘ ഈ (Ee)',
    english: 'ee',
    soundDescriptionEn: "Long 'ee' sound, like 'ee' in 'tree' or 'meet'",
    soundDescriptionMl: "'ഈ'കാരം - ഈച്ച, ഈട്ടി എന്നിവയിലെ ദീർഘസ്വരം",
    example: {
      wordTa: 'ஈட்டி',
      wordMl: 'ഈട്ടി / കുന്തം',
      wordEn: 'Eetti',
      meaningEn: 'Spear (or ஈ = Housefly)',
      meaningMl: 'കുന്തം / ഈച്ച',
      emoji: '🗡️'
    },
    strokeInstructions: {
      en: 'Draw two tall vertical parallel pillars connected by a horizontal top bar, with two dots placed inside and beside.',
      ml: 'മുകളിൽ യോജിപ്പിച്ച രണ്ട് ലംബരേഖകൾ വരച്ച്, ഉള്ളിലും പുറത്തും ഓരോ കുത്തുകൾ നൽകുക.',
      ta: 'இரு செங்குத்துக் கோடுகளை கிடைமட்டக் கோட்டால் இணைத்து, நடுவிலும் வெளியிலும் இரு புள்ளிகளை வைக்கவும்.'
    },
    strokeSteps: ['இடது செங்குத்து (Left post)', 'மேல் கோடு (Top bar)', 'வலது செங்குத்து (Right post)', 'இரு புள்ளிகள் (Two dots)']
  },
  {
    id: 'u-5',
    letter: 'உ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (குறில்)',
      ml: 'ഉയിരെഴുത്ത് (ഹ്രസ്വസ്വരം)',
      en: 'Vowel (Short)'
    },
    malayalam: 'ഉ',
    malayalamName: 'ഹ്രസ്വ ഉ (U)',
    english: 'u',
    soundDescriptionEn: "Short 'u' sound, like 'u' in 'put' or 'book'",
    soundDescriptionMl: "'ഉ'കാരം - ഉരൽ, ഊഞ്ഞാൽ എന്നിവയിലെ ആദ്യ സ്വരം",
    example: {
      wordTa: 'உரல்',
      wordMl: 'ഉരൽ',
      wordEn: 'Ural',
      meaningEn: 'Mortar (grinding stone)',
      meaningMl: 'ഉരൽ',
      emoji: '🥣'
    },
    strokeInstructions: {
      en: 'Start with a small loop at top, sweep downward and curve gracefully rightward along the baseline.',
      ml: 'മുകളിൽ ചെറിയ വൃത്തം തുടങ്ങി താഴേക്ക് വളച്ച് നേരെ അടിവരയായി വലത്തോട്ട് വരയ്ക്കുക.',
      ta: 'மேல் சுழியில் தொடங்கி, கீழே இறங்கி வளைத்து வலப்புறமாக நீளக் கோடு இழுக்கவும்.'
    },
    strokeSteps: ['சுழி (Small circle)', 'கீழ் வளைவு (Bottom bend)', 'கிடைமட்டக் கோடு (Horizontal line)']
  },
  {
    id: 'u-6',
    letter: 'ஊ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (நெடில்)',
      ml: 'ഉയിരെഴുത്ത് (ദീർഘസ്വരം)',
      en: 'Vowel (Long)'
    },
    malayalam: 'ഊ',
    malayalamName: 'ദീർഘ ഊ (Oo)',
    english: 'oo',
    soundDescriptionEn: "Long 'oo' sound, like 'oo' in 'moon' or 'food'",
    soundDescriptionMl: "'ഊ'കാരം - ഊഞ്ഞാൽ, ഊണ് എന്നിവയിലെ ദീർഘസ്വരം",
    example: {
      wordTa: 'ஊஞ்சல்',
      wordMl: 'ഊഞ്ഞാൽ',
      wordEn: 'Oonjal',
      meaningEn: 'Swing',
      meaningMl: 'ഊഞ്ഞാൽ',
      emoji: '🎪'
    },
    strokeInstructions: {
      en: "Draw the letter 'உ', and place the special auxiliary mark 'ள' on top.",
      ml: "'ഉ' എന്ന അക്ഷരം എഴുതി അതിനു മുകളിൽ 'ള' എന്ന ചിഹ്നം ചേർക്കുക.",
      ta: "'உ' வடிவை எழுதி அதன் மேல் 'ள' வடிவ துணைக் குறியீட்டைச் சேர்க்கவும்."
    },
    strokeSteps: ["'உ' வடிவம் (Letter 'உ')", "'ள' மேல் துணைக்குறி (Upper 'ள' mark)"]
  },
  {
    id: 'u-7',
    letter: 'எ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (குறில்)',
      ml: 'ഉയിരെഴുത്ത് (ഹ്രസ്വസ്വരം)',
      en: 'Vowel (Short)'
    },
    malayalam: 'എ',
    malayalamName: 'ഹ്രസ്വ എ (E)',
    english: 'e',
    soundDescriptionEn: "Short 'e' sound, like 'e' in 'bed' or 'egg'",
    soundDescriptionMl: "'എ'കാരം - എലി, എരുമ എന്നിവയിലെ ഹ്രസ്വസ്വരം",
    example: {
      wordTa: 'எலி',
      wordMl: 'എലി',
      wordEn: 'Eli',
      meaningEn: 'Mouse / Rat',
      meaningMl: 'എലി',
      emoji: '🐁'
    },
    strokeInstructions: {
      en: 'Draw a top horizontal line, drop down vertically, and extend a horizontal base to the right.',
      ml: 'മുകളിൽ ചെറിയ വളവിൽ തുടങ്ങി താഴേക്ക് ഇറക്കി അടിയിൽ വലത്തോട്ട് വരയ്ക്കുക.',
      ta: 'மேல் தொடங்கி கீழே செங்குத்தாக இறங்கி, பின் வலப்புறம் கிடைமட்டமாக நீட்டவும்.'
    },
    strokeSteps: ['தொடக்க சுழி (Start tick)', 'செங்குத்துக் கோடு (Vertical step)', 'அடிக் கோடு (Base line)']
  },
  {
    id: 'u-8',
    letter: 'ஏ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (நெடில்)',
      ml: 'ഉയിരെഴുത്ത് (ദീർഘസ്വരം)',
      en: 'Vowel (Long)'
    },
    malayalam: 'ഏ',
    malayalamName: 'ദീർഘ ഏ (Ae)',
    english: 'ae',
    soundDescriptionEn: "Long 'ae' sound, like 'a' in 'gate' or 'ay' in 'day'",
    soundDescriptionMl: "'ഏ'കാരം - ഏണി, ഏലക്ക എന്നിവയിലെ ദീർഘസ്വരം",
    example: {
      wordTa: 'ஏணி',
      wordMl: 'ഏണി',
      wordEn: 'Aeni',
      meaningEn: 'Ladder',
      meaningMl: 'ഏണി',
      emoji: '🪜'
    },
    strokeInstructions: {
      en: "Draw 'எ' and pull a diagonal stroke downwards from the corner.",
      ml: "'എ' എഴുതിയ ശേഷം അടിയിലെ മൂലയിൽ നിന്ന് താഴേക്ക് ചെരിഞ്ഞ വര വരയ്ക്കുക.",
      ta: "'எ' எழுதி, அதன் வலது கீழ்ப் பகுதியிலிருந்து சாய்வாகக் கீழ் நோக்கி ஒரு கோடு இழுக்கவும்."
    },
    strokeSteps: ["'எ' வடிவம் (Letter 'எ')", 'கீழ் சாய்வுக் கோடு (Slanted leg)']
  },
  {
    id: 'u-9',
    letter: 'ஐ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (நெடில்)',
      ml: 'ഉയിരെഴുത്ത് (ദീർഘസ്വരം)',
      en: 'Vowel (Diphthong)'
    },
    malayalam: 'ഐ',
    malayalamName: 'ഐ (Ai)',
    english: 'ai',
    soundDescriptionEn: "Diphthong 'ai' sound, like 'i' in 'ice' or 'ai' in 'aisle'",
    soundDescriptionMl: "'ഐ'കാരം - ഐസ്, അഞ്ച് (ഐന്തു) എന്നിവയിലെ സ്വരം",
    example: {
      wordTa: 'ஐந்து',
      wordMl: 'അഞ്ച്',
      wordEn: 'Ainthu',
      meaningEn: 'Five (Number 5)',
      meaningMl: 'അഞ്ച് (5)',
      emoji: '🖐️'
    },
    strokeInstructions: {
      en: 'Draw two double looping ripples on the left side, then sweep across into the body with right loops.',
      ml: 'ഇടതുവശത്ത് ഇരട്ടച്ചുഴികൾ വരച്ച്, വലത്തോട്ട് താഴേക്ക് വളച്ചു ബന്ധിപ്പിക്കുക.',
      ta: 'இடதுபுறம் இரட்டைச் சுழிகளை வளைத்து, வலதுபுறமாக அலை போன்ற வளைவுகளுடன் முடிக்கவும்.'
    },
    strokeSteps: ['இரட்டைச் சுழிகள் (Double swirl)', 'நடு இணைப்பு (Bridge)', 'வலது வளைவுகள் (Right waves)']
  },
  {
    id: 'u-10',
    letter: 'ஒ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (குறில்)',
      ml: 'ഉയിരെഴുത്ത് (ഹ്രസ്വസ്വരം)',
      en: 'Vowel (Short)'
    },
    malayalam: 'ഒ',
    malayalamName: 'ഹ്രസ്വ ഒ (O)',
    english: 'o',
    soundDescriptionEn: "Short 'o' sound, like 'o' in 'pot' or 'orange'",
    soundDescriptionMl: "'ഒ'കാരം - ഒട്ടകം, ഒന്ന് എന്നിവയിലെ ഹ്രസ്വസ്വരം",
    example: {
      wordTa: 'ஒட்டகம்',
      wordMl: 'ഒട്ടകം',
      wordEn: 'Ottagam',
      meaningEn: 'Camel',
      meaningMl: 'ഒട്ടകം',
      emoji: '🐪'
    },
    strokeInstructions: {
      en: 'Start with a small loop, curve upwards, then drop down and curl gracefully below to the right.',
      ml: 'മുകളിൽ ചെറിയ വൃത്തത്തിൽ തുടങ്ങി മുകളിലേക്ക് കയറ്റി താഴേക്ക് വളച്ച് വലത്തോട്ട് കൊണ്ടുപോകുക.',
      ta: 'மேல் சுழியில் தொடங்கி மேலேறி, பின் கீழ்நோக்கி இறங்கி அழகாக வளைத்து வலப்புறம் கொண்டுசெல்லவும்.'
    },
    strokeSteps: ['சுழி (Starting loop)', 'மேல் வளைவு (Upper crest)', 'கீழ் வளைவு (Lower curve)']
  },
  {
    id: 'u-11',
    letter: 'ஓ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (நெடில்)',
      ml: 'ഉയിരെഴുത്ത് (ദീർഘസ്വരം)',
      en: 'Vowel (Long)'
    },
    malayalam: 'ഓ',
    malayalamName: 'ദീർഘ ഓ (Oo)',
    english: 'oo',
    soundDescriptionEn: "Long 'o' sound, like 'o' in 'boat' or 'home'",
    soundDescriptionMl: "'ഓ'കാരം - ഓടം, ഓണം എന്നിവയിലെ ദീർഘസ്വരം",
    example: {
      wordTa: 'ஓடம்',
      wordMl: 'ഓടം / തോണി',
      wordEn: 'Odam',
      meaningEn: 'Boat',
      meaningMl: 'തോണി / വള്ളം',
      emoji: '⛵'
    },
    strokeInstructions: {
      en: "Form the letter 'ஒ', and curl the tail at the end into a closed loop at the bottom.",
      ml: "'ഒ' പോലെ എഴുതി, വാലിന്റെ അവസാനം ഒരു ചെറിയ വൃത്തമായി ചുറ്റി അവസാനിപ്പിക്കുക.",
      ta: "'ஒ' போன்று எழுதி, அடியில் முடியும் முனையை ஒரு சிறிய சுழியாகச் சுழித்து முடிக்கவும்."
    },
    strokeSteps: ["'ஒ' வடிவம் (Letter 'ஒ')", 'கடைசி கீழ் சுழி (End tail loop)']
  },
  {
    id: 'u-12',
    letter: 'ஔ',
    category: 'uyir',
    categoryTitle: {
      ta: 'உயிர் எழுத்து (நெடில்)',
      ml: 'ഉയിരെഴുത്ത് (ദീർഘസ്വരം)',
      en: 'Vowel (Diphthong)'
    },
    malayalam: 'ഔ',
    malayalamName: 'ഔ (Au)',
    english: 'au',
    soundDescriptionEn: "Diphthong 'au' / 'ow' sound, like 'ow' in 'cow' or 'out'",
    soundDescriptionMl: "'ഔ'കാരം - ഔഷധം എന്നിവയിലെ സ്വരം",
    example: {
      wordTa: 'ஔடதம்',
      wordMl: 'ഔഷധം',
      wordEn: 'Audhatham',
      meaningEn: 'Medicine',
      meaningMl: 'ഔഷധം / മരുന്ന്',
      emoji: '💊'
    },
    strokeInstructions: {
      en: "Write 'ஒ' followed immediately by the auxiliary companion letter 'ள'.",
      ml: "'ഒ' എഴുതി അതിനടുത്തായി 'ള' എന്ന അക്ഷരം ചേർക്കുക.",
      ta: "'ஒ' என்ற எழுத்தை எழுதி, அதன் பக்கத்தில் 'ள' என்னும் துணை எழுத்தை எழுதவும்."
    },
    strokeSteps: ["'ஒ' எழுத்து (Letter 'ஒ')", "பக்கத்து 'ள' (Companion 'ள')"]
  }
];

// 1 Ayutha Ezhuthu (ஆய்த எழுத்து - Special / Visarga)
export const AYUTHA_LETTER: TamilLetter = {
  id: 'a-1',
  letter: 'ஃ',
  category: 'ayutham',
  categoryTitle: {
    ta: 'ஆய்த எழுத்து (தனிநிலை)',
    ml: 'ആയ്ത എഴുത്ത് (അഃ / വിസർഗം)',
    en: 'Ayutha Ezhuthu (Glottal/Special)'
  },
  malayalam: 'അഃ',
  malayalamName: 'അഃ (വിസർഗ ശബ്ദം / ഫ്)',
  english: 'akh',
  soundDescriptionEn: "A subtle breathy throat sound like 'kh' or 'ah', placed before consonants",
  soundDescriptionMl: "സംസ്കൃതത്തിലെ വിസർഗത്തിന് (ഃ) സമാനമായ തൊണ്ടയിൽ നിന്നുള്ള ശബ്ദം",
  example: {
    wordTa: 'எஃகு',
    wordMl: 'ഉരുക്ക് (എഹ്കു)',
    wordEn: 'Ekku',
    meaningEn: 'Steel / Strong iron',
    meaningMl: 'ഉരുക്ക്',
    emoji: '🛡️'
  },
  strokeInstructions: {
    en: 'Draw three round dots arranged in a triangle (one dot on top, two dots spaced evenly below).',
    ml: 'ത്രികോണാകൃതിയിൽ മൂന്ന് കുത്തുകൾ ഇടുക (മുകളിൽ ഒരു കുത്തും താഴെ രണ്ട് കുത്തുകളും).',
    ta: 'முக்கோண வடிவில் மூன்று புள்ளிகளை வைக்கவும் (மேலே ஒரு புள்ளி, கீழே இரு புள்ளிகள்).'
  },
  strokeSteps: ['மேல் புள்ளி (Top dot)', 'கீழ் இடது புள்ளி (Bottom-left dot)', 'கீழ் வலது புள்ளி (Bottom-right dot)']
};

// 18 Mei Ezhuthukkal (மெய் எழுத்துக்கள் - Consonants)
export const MEI_LETTERS: TamilLetter[] = [
  {
    id: 'm-1',
    letter: 'க்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (வல்லினம்)', ml: 'വ്യഞ്ജനം (ഖരം)', en: 'Consonant (Hard)' },
    malayalam: 'ക്',
    malayalamName: 'ക / ക് (Ka / Ik)',
    english: 'k / ik',
    soundDescriptionEn: "Voiceless velar stop 'k' sound as in 'kite' or 'kick'",
    soundDescriptionMl: "'ക്'കാരം - കണ്ണ്, കപ്പൽ എന്നിവയിലെ ആദ്യ ശബ്ദം",
    example: { wordTa: 'கண்', wordMl: 'കണ്ണ്', wordEn: 'Kann', meaningEn: 'Eye', meaningMl: 'കണ്ണ്', emoji: '👁️' },
    strokeInstructions: {
      en: 'Draw the base letter க and place a dot (pulli) cleanly above it.',
      ml: "'ക' എന്ന അക്ഷരത്തിന് മുകളിലായി ഒരു കുത്തിടുക.",
      ta: "'க' வடிவத்தை எழுதி அதன் மேல் ஒரு புள்ளி இடவும்."
    },
    strokeSteps: ['செங்குத்து கோடு (Vertical line)', 'மேல் கோடு (Top horizontal)', 'வளைவு & கால் (Curve and leg)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-2',
    letter: 'ங்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (மெல்லினம்)', ml: 'വ്യഞ്ജനം (അനുനാസികം)', en: 'Consonant (Nasal)' },
    malayalam: 'ങ്',
    malayalamName: 'ങ / ങ് (Nga / Ing)',
    english: 'ng / ing',
    soundDescriptionEn: "Velar nasal sound like 'ng' in 'sing' or 'ring'",
    soundDescriptionMl: "'ങ്'കാരം - മാങ്ങ, സിംഹം എന്നിവയിലെ 'ങ്' ശബ്ദം",
    example: { wordTa: 'சிங்கம்', wordMl: 'സിംഹം', wordEn: 'Singam', meaningEn: 'Lion', meaningMl: 'സിംഹം', emoji: '🦁' },
    strokeInstructions: {
      en: 'Draw the letter ங with a dot on top.',
      ml: "'ങ' എന്ന അക്ഷരത്തിന് മുകളിലായി കുത്തിടുക.",
      ta: "'ங' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ங வடிவம் (Letter ங)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-3',
    letter: 'ச்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (வல்லினம்)', ml: 'വ്യഞ്ജനം (ഖരം)', en: 'Consonant (Hard)' },
    malayalam: 'ച്',
    malayalamName: 'ച / ച് (Cha/Sa / Ich)',
    english: 'ch / s',
    soundDescriptionEn: "Palatal sound like 'ch' in 'chair' or soft 's'",
    soundDescriptionMl: "'ച്'കാരം - ചക്രം, ചന്ദ്രൻ എന്നിവയിലെ 'ച' ശബ്ദം",
    example: { wordTa: 'சக்கரம்', wordMl: 'ചക്രം', wordEn: 'Chakkaram', meaningEn: 'Wheel', meaningMl: 'ചക്രം', emoji: '🎡' },
    strokeInstructions: {
      en: 'Draw letter ச with a dot on top.',
      ml: "'ച' എന്ന അക്ഷരത്തിന് മുകളിലായി കുത്തിടുക.",
      ta: "'ச' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ச வடிவம் (Letter ச)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-4',
    letter: 'ஞ்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (மெல்லினம்)', ml: 'വ്യഞ്ജനം (അനുനാസികം)', en: 'Consonant (Nasal)' },
    malayalam: 'ഞ്',
    malayalamName: 'ഞ / ഞ് (Nya / Inj)',
    english: 'ny / inj',
    soundDescriptionEn: "Palatal nasal sound like 'ny' in 'canyon' or Spanish 'ñ'",
    soundDescriptionMl: "'ഞ്'കാരം - ഞായർ, മഞ്ഞൾ എന്നിവയിലെ ശബ്ദം",
    example: { wordTa: 'ஞாயிறு', wordMl: 'ഞായർ / സൂര്യൻ', wordEn: 'Gnayiru', meaningEn: 'Sun / Sunday', meaningMl: 'സൂര്യൻ / ഞായർ', emoji: '☀️' },
    strokeInstructions: {
      en: 'Draw letter ஞ with an accent dot on top.',
      ml: "'ഞ' എന്ന അക്ഷരത്തിന് മുകളിലായി കുത്തിടുക.",
      ta: "'ஞ' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ஞ வடிவம் (Letter ஞ)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-5',
    letter: 'ட்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (வல்லினம்)', ml: 'വ്യഞ്ജനം (ഖരം)', en: 'Consonant (Hard)' },
    malayalam: 'ട്',
    malayalamName: 'ട / ട് (Ta/Da / It)',
    english: 't / d',
    soundDescriptionEn: "Retroflex 't' sound made by curling tongue tip back to the palate",
    soundDescriptionMl: "'ട്'കാരം - പട്ടം, തോട്ടം എന്നിവയിലെ കട്ടിയുള്ള 'ട'",
    example: { wordTa: 'பட்டம்', wordMl: 'പട്ടം', wordEn: 'Pattam', meaningEn: 'Kite', meaningMl: 'പട്ടം', emoji: '🪁' },
    strokeInstructions: {
      en: 'Draw a simple vertical stroke down and horizontal stroke right (ட), with a dot on top.',
      ml: "ലംബരേഖയും അടിവരയും ചേർത്ത് 'ട' വരച്ച് മുകളിൽ കുത്തിടുക.",
      ta: "செங்குத்து மற்றும் கிடைமட்ட கோடுகளால் 'ட' எழுதி மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ட வடிவம் (L-shape ட)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-6',
    letter: 'ண்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (மெல்லினம்)', ml: 'വ്യഞ്ജനം (അനുനാസികം)', en: 'Consonant (Retroflex Nasal)' },
    malayalam: 'ണ്',
    malayalamName: 'ണ / ണ് (Nna / Inn)',
    english: 'nn / inn',
    soundDescriptionEn: "Retroflex 'n' sound with tongue curled back (three loops)",
    soundDescriptionMl: "'ണ്'കാരം - കണ്ണ്, മണ്ണ് എന്നിവയിലെ 'ണ'",
    example: { wordTa: 'வண்டு', wordMl: 'വണ്ട്', wordEn: 'Vandu', meaningEn: 'Beetle / Bee', meaningMl: 'വണ്ട്', emoji: '🪲' },
    strokeInstructions: {
      en: 'Draw three consecutive loops curving together (ண) and place a dot on top.',
      ml: "മൂന്ന് ചുഴികളുള്ള 'ണ' വരച്ച് മുകളിൽ കുത്തിടുക.",
      ta: "மூன்று சுழிகளுடைய 'ண' எழுதி மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ண மூன்று சுழி (Three loop ண)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-7',
    letter: 'த்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (வல்லினம்)', ml: 'വ്യഞ്ജനം (ഖരം)', en: 'Consonant (Dental)' },
    malayalam: 'ത്',
    malayalamName: 'ത / ത് (Tha / Ith)',
    english: 'th / ith',
    soundDescriptionEn: "Soft dental 'th' sound as in 'think' or 'thanks'",
    soundDescriptionMl: "'ത്'കാരം - തവള, തല എന്നിവയിലെ 'ത' ശബ്ദം",
    example: { wordTa: 'தவளை', wordMl: 'തവള', wordEn: 'Thavalai', meaningEn: 'Frog', meaningMl: 'തവള', emoji: '🐸' },
    strokeInstructions: {
      en: 'Draw letter த and place a dot on top.',
      ml: "'ത' എന്ന അക്ഷരം എഴുതി മുകളിൽ കുത്തിടുക.",
      ta: "'த' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['த வடிவம் (Letter த)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-8',
    letter: 'ந்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (மெல்லினம்)', ml: 'വ്യഞ്ஜനം (അനുനാസികം)', en: 'Consonant (Dental Nasal)' },
    malayalam: 'ന്',
    malayalamName: 'ന / ന് (Na / In)',
    english: 'n / in',
    soundDescriptionEn: "Soft dental 'n' sound produced with tongue touching upper teeth",
    soundDescriptionMl: "'ന്'കാരം - നരി, നന്ദി എന്നിവയിലെ ദന്ത 'ന'",
    example: { wordTa: 'நரி', wordMl: 'കുറുക്കൻ (നരി)', wordEn: 'Nari', meaningEn: 'Fox / Jackal', meaningMl: 'കുറുക്കൻ', emoji: '🦊' },
    strokeInstructions: {
      en: 'Draw letter ந and put a dot on top.',
      ml: "'ന' എന്ന അക്ഷരം എഴുതി മുകളിൽ കുത്തിടുക.",
      ta: "'ந' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ந வடிவம் (Letter ந)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-9',
    letter: 'ப்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (வல்லினம்)', ml: 'വ്യഞ്ജനം (ഖരം)', en: 'Consonant (Hard)' },
    malayalam: 'പ്',
    malayalamName: 'പ / പ് (Pa / Ip)',
    english: 'p / ip',
    soundDescriptionEn: "Bilabial stop sound like 'p' in 'pen' or 'cup'",
    soundDescriptionMl: "'പ്'കാരം - പടം, പന്ത് എന്നിവയിലെ 'പ' ശബ്ദം",
    example: { wordTa: 'படம்', wordMl: 'പടം / ചിത്രം', wordEn: 'Padam', meaningEn: 'Picture / Film', meaningMl: 'ചിത്രം', emoji: '🖼️' },
    strokeInstructions: {
      en: 'Draw an open U-like shape with straight corners (ப) and place a dot on top.',
      ml: "ചതുരാകൃതിയിൽ 'പ' വരച്ച് മുകളിൽ കുത്തിടുക.",
      ta: "செவ்வக வடிவ 'ப' எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ப வடிவம் (Letter ப)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-10',
    letter: 'ம்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (மெல்லினம்)', ml: 'വ്യഞ്ജനം (അനുനാസികം)', en: 'Consonant (Nasal)' },
    malayalam: 'മ്',
    malayalamName: 'മ / മ് (Ma / Im)',
    english: 'm / im',
    soundDescriptionEn: "Bilabial nasal sound like 'm' in 'mother' or 'mango'",
    soundDescriptionMl: "'മ്'കാരം - മരം, മാങ്ങ എന്നിവയിലെ 'മ' ശബ്ദം",
    example: { wordTa: 'மரம்', wordMl: 'മരം', wordEn: 'Maram', meaningEn: 'Tree', meaningMl: 'മരം', emoji: '🌳' },
    strokeInstructions: {
      en: 'Draw letter ம with loop closing at bottom, and put a dot on top.',
      ml: "'മ' എന്ന അക്ഷരം എഴുതി മുകളിൽ കുത്തിടുക.",
      ta: "'ம' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ம வடிவம் (Letter ம)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-11',
    letter: 'ய்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (இடையினம்)', ml: 'വ്യഞ്ജനം (മധ്യമം)', en: 'Consonant (Semivowel)' },
    malayalam: 'യ്',
    malayalamName: 'യ / യ് (Ya / Iy)',
    english: 'y / iy',
    soundDescriptionEn: "Palatal approximant like 'y' in 'yellow' or 'joy'",
    soundDescriptionMl: "'യ്'കാരം - മുയൽ, യാത്ര എന്നിവയിലെ 'യ' ശബ്ദം",
    example: { wordTa: 'முயல்', wordMl: 'മുയൽ', wordEn: 'Muyal', meaningEn: 'Rabbit', meaningMl: 'മുയൽ', emoji: '🐇' },
    strokeInstructions: {
      en: 'Draw letter ய with its characteristic double scooped basin and top dot.',
      ml: "'യ' എന്ന അക്ഷരം എഴുതി മുകളിൽ കുത്തിടുക.",
      ta: "'ய' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ய வடிவம் (Letter ய)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-12',
    letter: 'ர்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (இடையினம்)', ml: 'വ്യഞ്ജനം (മധ്യമം)', en: 'Consonant (Liquid)' },
    malayalam: 'ർ',
    malayalamName: 'ര / ർ (Ra / Ir)',
    english: 'r / ir',
    soundDescriptionEn: "Smooth alveolar tap / rhotic like 'r' in 'water' or 'road'",
    soundDescriptionMl: "'ർ'കാരം - മയിൽ, തേര് എന്നിവയിലെ മൃദുവായ 'ര'",
    example: { wordTa: 'மயில்', wordMl: 'മയിൽ', wordEn: 'Mayil', meaningEn: 'Peacock', meaningMl: 'മയിൽ', emoji: '🦚' },
    strokeInstructions: {
      en: 'Draw a single vertical line with small top flag (ர) and a dot on top.',
      ml: "'ര' എന്ന അക്ഷരം എഴുതി മുകളിൽ കുത്തിടുക.",
      ta: "'ர' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ர வடிவம் (Letter ர)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-13',
    letter: 'ல்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (இடையினம்)', ml: 'വ്യഞ്ജനം (മധ്യമം)', en: 'Consonant (Lateral)' },
    malayalam: 'ൽ',
    malayalamName: 'ല / ൽ (La / Il)',
    english: 'l / il',
    soundDescriptionEn: "Dental / alveolar lateral like 'l' in 'light' or 'leaf'",
    soundDescriptionMl: "'ൽ'കാരം - പല്ല്, മല എന്നിവയിലെ സാധാരണ 'ല'",
    example: { wordTa: 'பல்', wordMl: 'പല്ല്', wordEn: 'Pal', meaningEn: 'Tooth', meaningMl: 'പല്ല്', emoji: '🦷' },
    strokeInstructions: {
      en: 'Draw letter ல starting with a round loop and curve over, with a dot on top.',
      ml: "'ല' എന്ന അക്ഷരം എഴുതി മുകളിൽ കുത്തിടുക.",
      ta: "'ல' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ல வடிவம் (Letter ல)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-14',
    letter: 'வ்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (இடையினம்)', ml: 'വ്യഞ്ജനം (മധ്യമം)', en: 'Consonant (Semivowel)' },
    malayalam: 'വ്',
    malayalamName: 'വ / വ് (Va / Iv)',
    english: 'v / iv',
    soundDescriptionEn: "Labiodental approximant like 'v' in 'van' or 'vine'",
    soundDescriptionMl: "'വ്'കാരം - വണ്ടി, വായ എന്നിവയിലെ 'വ' ശബ്ദം",
    example: { wordTa: 'வண்டி', wordMl: 'വണ്ടി', wordEn: 'Vandi', meaningEn: 'Vehicle / Cart', meaningMl: 'വാഹനം / വണ്ടി', emoji: '🚗' },
    strokeInstructions: {
      en: 'Draw letter வ starting with a loop and open right side, topped with a dot.',
      ml: "'വ' എന്ന അക്ഷരം എഴുതി മുകളിൽ കുത്തിടുക.",
      ta: "'வ' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['வ வடிவம் (Letter வ)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-15',
    letter: 'ழ்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (சிறப்பு இடையினம்)', ml: 'വ്യഞ്ജനം (പ്രത്യേക ഴ)', en: 'Special Approximant' },
    malayalam: 'ഴ്',
    malayalamName: 'ഴ / ഴ് (Zha / Izh - Unique sound)',
    english: 'zh / izh',
    soundDescriptionEn: "The famous retroflex liquid of Tamil and Malayalam! Curl tongue back without touching the roof",
    soundDescriptionMl: "തമിഴിലും മലയാളത്തിലും മാത്രമുള്ള അതിവിശിഷ്ടമായ 'ഴ'കാരം (ഉദാ: പഴം, തമിഴ്, മഴ)",
    example: { wordTa: 'பழம்', wordMl: 'പഴം', wordEn: 'Pazham', meaningEn: 'Fruit', meaningMl: 'പഴം', emoji: '🍌' },
    strokeInstructions: {
      en: 'Draw letter ழ starting like a stylized backward hook, looping smoothly across, with a dot on top.',
      ml: "മനോഹരമായ വളവുകളോടെ 'ഴ' എഴുതി മുകളിൽ കുത്തിടുക.",
      ta: "சிறப்பு வளைவுகளுடன் 'ழ' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ழ வடிவம் (Special letter ழ)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-16',
    letter: 'ள்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (இடையினம்)', ml: 'വ്യഞ്ജനം (മധ്യമം)', en: 'Consonant (Retroflex Lateral)' },
    malayalam: 'ൾ',
    malayalamName: 'ള / ൾ (Lla / Ill)',
    english: 'll / ill',
    soundDescriptionEn: "Retroflex 'l' with tongue curled back up touching the palate",
    soundDescriptionMl: "'ൾ'കാരം - വാൾ, കിളി എന്നിവയിലെ കട്ടിയുള്ള 'ള'",
    example: { wordTa: 'வாள்', wordMl: 'വാൾ', wordEn: 'Vaal', meaningEn: 'Sword', meaningMl: 'വാൾ', emoji: '🗡️' },
    strokeInstructions: {
      en: 'Draw letter ள with its top curved crown, and place a dot on top.',
      ml: "'ള' എന്ന അക്ഷരം എഴുതി മുകളിൽ കുത്തിടുക.",
      ta: "'ள' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ள வடிவம் (Letter ள)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-17',
    letter: 'ற்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (வல்லினம்)', ml: 'വ്യഞ്ജനം (ഖരം)', en: 'Consonant (Alveolar Trill)' },
    malayalam: 'റ്',
    malayalamName: 'റ / റ് (Rra / Irr - Strong R)',
    english: 'rr / irr',
    soundDescriptionEn: "Strong trilled / alveolar 'rr' sound as in Spanish 'perro' or Malayalam 'കാറ്റ്' (റ്റ)",
    soundDescriptionMl: "'റ്'കാരം - കാറ്റ്, പാറ എന്നിവയിലെ ശക്തമായ 'റ'",
    example: { wordTa: 'காற்று', wordMl: 'കാറ്റ്', wordEn: 'Kaatru', meaningEn: 'Wind / Breeze', meaningMl: 'കാറ്റ്', emoji: '💨' },
    strokeInstructions: {
      en: 'Draw letter ற with pointed triangular crest and foot, topped with a dot.',
      ml: "'റ' എന്ന അക്ഷരം എഴുതി മുകളിൽ കുത്തിടുക.",
      ta: "'ற' வடிவை எழுதி அதன் மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ற வடிவம் (Letter ற)', 'மேல் புள்ளி (Dot on top)']
  },
  {
    id: 'm-18',
    letter: 'ன்',
    category: 'mei',
    categoryTitle: { ta: 'மெய் எழுத்து (மெல்லினம்)', ml: 'വ്യഞ്ജനം (അനുനാസികം)', en: 'Consonant (Alveolar Nasal)' },
    malayalam: 'ൻ',
    malayalamName: 'ന / ൻ (Na / In - Two loop)',
    english: 'n / in',
    soundDescriptionEn: "Alveolar 'n' made with tongue tip resting flat behind front teeth (two loops)",
    soundDescriptionMl: "'ൻ'കാരം - മീൻ, അവൻ എന്നിവയിലെ രണ്ട് ചുഴിയുള്ള 'ന'",
    example: { wordTa: 'மீன்', wordMl: 'മീൻ', wordEn: 'Meen', meaningEn: 'Fish', meaningMl: 'മത്സ്യം / മീൻ', emoji: '🐟' },
    strokeInstructions: {
      en: 'Draw two connected loops (ன்) and put a dot on top.',
      ml: "രണ്ട് ചുഴികളുള്ള 'ന' വരച്ച് മുകളിൽ കുത്തിടുക.",
      ta: "இரண்டு சுழிகள் கொண்ட 'ன்' எழுதி மேல் புள்ளி வைக்கவும்."
    },
    strokeSteps: ['ன் இரண்டு சுழி (Two-loop ன்)', 'மேல் புள்ளி (Dot on top)']
  }
];

// Grantha & Additional Consonants (கிரந்த எழுத்துக்கள் & கூடுதல் மெய்: ஜ, ஶ, ஷ, ஸ, ஹ, ள, க்ஷ)
export const GRANTHA_LETTERS: TamilLetter[] = [
  {
    id: 'g-1',
    letter: 'ஜ',
    category: 'grantha',
    categoryTitle: {
      ta: 'கிரந்த மெய் எழுத்து (ஜ)',
      ml: 'ഗ്രന്ഥ വ്യഞ്ജനം (ജ)',
      en: 'Grantha Consonant (Ja)'
    },
    malayalam: 'ജ',
    malayalamName: 'ജ (Ja / ജ്)',
    english: 'ja / j',
    soundDescriptionEn: "Voiced palatal affricate sound like 'j' in 'jam', 'juice', or 'judge'",
    soundDescriptionMl: "മലയാളത്തിലെ 'ജ' എന്ന സ്വരം (ഉദാ: ജന്നൽ, ജയം, രാജാവ്)",
    example: {
      wordTa: 'ஜன்னல்',
      wordMl: 'ജനൽ',
      wordEn: 'Jannal',
      meaningEn: 'Window',
      meaningMl: 'ജനൽ',
      emoji: '🪟'
    },
    strokeInstructions: {
      en: "Start with an S-like upper swirl, bridge horizontally across the middle, and drop down with a curved right leg.",
      ml: "മുകളിൽ 'S' ആകൃതിയിൽ വളച്ചു തുടങ്ങി, നടുവിൽ നിന്ന് വലത്തോട്ട് ബന്ധിപ്പിച്ച് താഴേക്ക് ലംബരേഖ വരയ്ക്കുക.",
      ta: "மேலே வளைந்த சுழியுடன் தொடங்கி, நடுவே கிடைமட்டமாக இணைத்து, கீழ்நோக்கி நேர்கோடு இழுக்கவும்."
    },
    strokeSteps: ['மேல் வளைவு (Top wave)', 'நடு இணைப்பு (Center bridge)', 'வலது செங்குத்து (Right stem)']
  },
  {
    id: 'g-2',
    letter: 'ஶ',
    category: 'grantha',
    categoryTitle: {
      ta: 'கிரந்த மெய் எழுத்து (ஶ)',
      ml: 'ഗ്രന്ഥ വ്യഞ്ജനം (ശ)',
      en: 'Grantha Consonant (Sha - Palatal)'
    },
    malayalam: 'ശ',
    malayalamName: 'ശ (Sha / ശ് - മൃദു സ്വരം)',
    english: 'sha / sh',
    soundDescriptionEn: "Soft palatal fricative sound like 'sh' in 'Shiva', 'sugar', or 'cashmere'",
    soundDescriptionMl: "മലയാളത്തിലെ മൃദുവായ 'ശ' എന്ന സ്വരം (ഉദാ: ശിവൻ, ശാന്തി, ശ്രീ)",
    example: {
      wordTa: 'ஶிவன்',
      wordMl: 'ശിവൻ',
      wordEn: 'Shivan',
      meaningEn: 'Lord Shiva / Auspicious',
      meaningMl: 'ശിവൻ',
      emoji: '🕉️'
    },
    strokeInstructions: {
      en: 'Start with a round circle loop on the left, swoop upwards, and complete with a right-hand arch and leg.',
      ml: 'ഇടതുവശത്ത് ചെറിയ വൃത്തത്തിൽ തുടങ്ങി മുകളിലേക്ക് വളച്ച് വലതുവശത്ത് ലംബമായി താഴേക്ക് വരയ്ക്കുക.',
      ta: 'இடதுபுற சுழியில் தொடங்கி மேலே வளைத்து, வலதுபுறத்தில் செங்குத்துக் காலோடு முடிக்கவும்.'
    },
    strokeSteps: ['இடது சுழி (Left loop)', 'மேல் வளைவு (Top arch)', 'வலது கால் (Right leg)']
  },
  {
    id: 'g-3',
    letter: 'ஷ',
    category: 'grantha',
    categoryTitle: {
      ta: 'கிரந்த மெய் எழுத்து (ஷ)',
      ml: 'ഗ്രന്ഥ വ്യഞ്ജനം (ഷ)',
      en: 'Grantha Consonant (Retroflex Sha)'
    },
    malayalam: 'ഷ',
    malayalamName: 'ഷ (Ssa / ഷ - കട്ടിയുള്ള സ്വരം)',
    english: 'ssa / sh',
    soundDescriptionEn: "Retroflex 'sh' pronounced with tongue curled back towards palate (like in 'pushpam')",
    soundDescriptionMl: "മലയാളത്തിലെ കട്ടിയുള്ള 'ഷ' എന്ന മൂർദ്ധന്യ സ്വരം (ഉദാ: പുഷ്പം, വർഷം, കഷ്ടം)",
    example: {
      wordTa: 'புஷ்பம்',
      wordMl: 'പുഷ്പം / പൂവ്',
      wordEn: 'Pushpam',
      meaningEn: 'Flower',
      meaningMl: 'പുഷ്പം / പൂവ്',
      emoji: '🌸'
    },
    strokeInstructions: {
      en: "Form the base letter 'ப' and draw a diagonal cross-slash connecting top-left to bottom-right inside.",
      ml: "'പ' പോലെ വരച്ച്, ഉള്ളിലൂടെ ഒരു ചരിഞ്ഞ രേഖ മുകളിൽ നിന്ന് താഴേക്ക് ബന്ധിപ്പിക്കുക.",
      ta: "'ப' போன்ற வடிவில் எழுதி, அதன் உள்ளே சாய்வாக குறுக்குக் கோடு ஒன்றை வரையவும்."
    },
    strokeSteps: ["'ப' வெளி வடிவம் (Outer 'ப' shape)", 'உள் குறுக்குக் கோடு (Diagonal cross-stroke)']
  },
  {
    id: 'g-4',
    letter: 'ஸ',
    category: 'grantha',
    categoryTitle: {
      ta: 'கிரந்த மெய் எழுத்து (ஸ)',
      ml: 'ഗ്രന്ഥ വ്യഞ്ജനം (സ)',
      en: 'Grantha Consonant (Dental Sa)'
    },
    malayalam: 'സ',
    malayalamName: 'സ (Sa / സ് - ദന്ത സ്വരം)',
    english: 'sa / s',
    soundDescriptionEn: "Voiceless dental sibilant sound like 's' in 'sun', 'song', or 'peace'",
    soundDescriptionMl: "മലയാളത്തിലെ 'സ' എന്ന ദന്ത സ്വരം (ഉദാ: സരസ്വതി, സഭ, സൂര്യൻ)",
    example: {
      wordTa: 'ஸரஸ்வதி',
      wordMl: 'സരസ്വതി',
      wordEn: 'Saraswathi',
      meaningEn: 'Goddess of Learning & Arts',
      meaningMl: 'സരസ്വതി ദേവി',
      emoji: '🪕'
    },
    strokeInstructions: {
      en: 'Start with a round left loop, draw a horizontal top bar, drop down vertically, and extend a base leg rightward.',
      ml: 'ഇടതുവശത്ത് ചെറിയ വൃത്തത്തിൽ തുടങ്ങി, മുകളിൽ നേർവര വരച്ച് താഴേക്ക് ലംബമായും അടിയിൽ വലത്തോട്ടും വരയ്ക്കുക.',
      ta: 'இடது சுழியில் தொடங்கி, மேலே கிடைமட்டமாகச் சென்று, செங்குத்தாக இறங்கி, வலதுபுறம் பாதத்தை நீட்டவும்.'
    },
    strokeSteps: ['சுழி (Small circle)', 'மேல் கோடு (Top bar)', 'செங்குத்து & பாதம் (Stem and foot)']
  },
  {
    id: 'g-5',
    letter: 'ஹ',
    category: 'grantha',
    categoryTitle: {
      ta: 'கிரந்த மெய் எழுத்து (ஹ)',
      ml: 'ഗ്രന്ഥ വ്യഞ്ജനം (ഹ)',
      en: 'Grantha Consonant (Ha)'
    },
    malayalam: 'ഹ',
    malayalamName: 'ഹ (Ha / ഹ് - കണ്ഠ സ്വരം)',
    english: 'ha / h',
    soundDescriptionEn: "Voiceless glottal fricative sound like 'h' in 'home', 'heart', or 'hello'",
    soundDescriptionMl: "മലയാളത്തിലെ 'ഹ' എന്ന കണ്ഠ സ്വരം (ഉദാ: ഹരി, ഹൃദയം, സിംഹം)",
    example: {
      wordTa: 'ஹரி',
      wordMl: 'ഹരി',
      wordEn: 'Hari',
      meaningEn: 'Hari (Lord / Green radiance)',
      meaningMl: 'ഹരി / പ്രകൃതി',
      emoji: '🌿'
    },
    strokeInstructions: {
      en: 'Start with an upper swirl, cascade down with a curved hook, and loop horizontally across the center.',
      ml: 'മുകളിൽ ചെറിയ ചുഴിയിൽ തുടങ്ങി താഴേക്ക് കൊളുത്തുപോലെ വളച്ച് നടുവിലൂടെ വലത്തോട്ട് വളച്ചെടുക്കുക.',
      ta: 'மேலே சுழியுடன் தொடங்கி, கீழ்நோக்கி வளைந்து வந்து, நடுவழியே வலதுபுறமாக சுருட்டி முடிக்கவும்.'
    },
    strokeSteps: ['மேல் சுழி (Top swirl)', 'மைய வளைவு (Center curve)', 'கீழ் கொக்கி (Lower hook)']
  },
  {
    id: 'g-6',
    letter: 'ள',
    category: 'grantha',
    categoryTitle: {
      ta: 'மெய் எழுத்து (அகர வரிசை ள)',
      ml: 'വ്യഞ്ജനം (ള - മൂർദ്ധന്യ ലകാരം)',
      en: 'Retroflex Lateral (Lla)'
    },
    malayalam: 'ള',
    malayalamName: 'ള (Lla / ൾ - കട്ടിയുള്ള ള)',
    english: 'lla / la',
    soundDescriptionEn: "Retroflex 'll' produced with tongue tip curled back touching the roof of mouth (like Malayalam 'ള')",
    soundDescriptionMl: "മലയാളത്തിലെ കട്ടിയുള്ള 'ള' എന്ന സ്വരം (ഉദാ: തവള, വാള, കിളി)",
    example: {
      wordTa: 'தவளை',
      wordMl: 'തവള',
      wordEn: 'Thavalai',
      meaningEn: 'Frog',
      meaningMl: 'തവള',
      emoji: '🐸'
    },
    strokeInstructions: {
      en: 'Start with a round base loop on bottom-left, arch upwards, crest rightward, and drop down with a curved foot.',
      ml: 'ഇടതുവശത്ത് വൃത്തത്തിൽ തുടങ്ങി മുകളിലേക്ക് വളച്ച് വലത്തോട്ട് കൊണ്ടുപോയി താഴേക്ക് വളച്ചു പൂർത്തിയാക്കുക.',
      ta: 'இடதுபுற சுழியில் தொடங்கி, மேலே வளைத்து ஏறி, வலப்புறமாக இறங்கி அடியில் வளைத்து முடிக்கவும்.'
    },
    strokeSteps: ['தொடக்க சுழி (Base circle)', 'மேல் வளைவு (Top arch)', 'கீழ் வளைவு பாதம் (Curved foot)']
  },
  {
    id: 'g-7',
    letter: 'க்ஷ',
    category: 'grantha',
    categoryTitle: {
      ta: 'கூட்டு மெய் எழுத்து (க்ஷ)',
      ml: 'കൂട്ടക്ഷരം (ക്ഷ - Ksha)',
      en: 'Grantha Conjunct Consonant (Ksha)'
    },
    malayalam: 'ക്ഷ',
    malayalamName: 'ക്ഷ (Ksha / ക് + ഷ)',
    english: 'ksha / x',
    soundDescriptionEn: "Conjunct consonant combining 'k' and retroflex 'sh' as in 'Lakshmi', 'action', or 'protection'",
    soundDescriptionMl: "മലയാളത്തിലെ 'ക്ഷ' എന്ന കൂട്ടക്ഷര സ്വരം (ഉദാ: ലക്ഷ്മി, പക്ഷി, രക്ഷകൻ)",
    example: {
      wordTa: 'லக்ஷ்மி',
      wordMl: 'ലക്ഷ്മി',
      wordEn: 'Lakshmi',
      meaningEn: 'Goddess Lakshmi / Prosperity & Grace',
      meaningMl: 'ലക്ഷ്മീദേവി / ഐശ്വര്യം',
      emoji: '🪷'
    },
    strokeInstructions: {
      en: "Form the initial 'க்' with its upper pulli/accent, followed seamlessly by the retroflex 'ஷ'.",
      ml: "'ക്' എന്ന അക്ഷരവും തുടർന്ന് 'ഷ' എന്ന അക്ഷരവും കൂട്ടിച്ചേർത്ത് എഴുതുക.",
      ta: "'க்' வடிவை எழுதி, தொடர்ந்து 'ஷ' வடிவை இணைத்து கூட்டெழுத்தாக எழுதவும்."
    },
    strokeSteps: ["'க்' பகுதி (First part 'க்')", "'ஷ' பகுதி (Second part 'ஷ')"]
  }
];

// Helper to get all primary and Grantha letters
export const ALL_LETTERS: TamilLetter[] = [
  ...UYIR_LETTERS,
  AYUTHA_LETTER,
  ...MEI_LETTERS,
  ...GRANTHA_LETTERS
];

// Uyir-Mei Combinations Generator (உயிர்மெய் எழுத்துக்கள்)
// 18 Consonants x 12 Vowels
export interface UyirMeiRow {
  consonant: string;
  consonantMl: string;
  consonantEn: string;
  combinations: {
    letter: string;
    vowelLetter: string;
    vowelMl: string;
    vowelEn: string;
    malayalam: string;
    english: string;
  }[];
}

const CONSONANT_BASES = [
  { ta: 'க', ml: 'ക', en: 'k' },
  { ta: 'ங', ml: 'ങ', en: 'ng' },
  { ta: 'ச', ml: 'ച', en: 'ch' },
  { ta: 'ஜ', ml: 'ജ', en: 'j' },
  { ta: 'ஞ', ml: 'ഞ', en: 'ny' },
  { ta: 'ட', ml: 'ട', en: 't' },
  { ta: 'ண', ml: 'ണ', en: 'nn' },
  { ta: 'த', ml: 'ത', en: 'th' },
  { ta: 'ந', ml: 'ന', en: 'n' },
  { ta: 'ப', ml: 'പ', en: 'p' },
  { ta: 'ம', ml: 'മ', en: 'm' },
  { ta: 'ய', ml: 'യ', en: 'y' },
  { ta: 'ர', ml: 'ര', en: 'r' },
  { ta: 'ல', ml: 'ല', en: 'l' },
  { ta: 'வ', ml: 'വ', en: 'v' },
  { ta: 'ஶ', ml: 'ശ', en: 'sh' },
  { ta: 'ஷ', ml: 'ഷ', en: 'sh' },
  { ta: 'ஸ', ml: 'സ', en: 's' },
  { ta: 'ஹ', ml: 'ഹ', en: 'h' },
  { ta: 'ழ', ml: 'ഴ', en: 'zh' },
  { ta: 'ள', ml: 'ള', en: 'll' },
  { ta: 'ற', ml: 'റ', en: 'rr' },
  { ta: 'ன', ml: 'ന', en: 'n' },
  // Grantha consonants
  { ta: 'க்ஷ', ml: 'ക്ഷ', en: 'ksh' }
];

const VOWEL_SIGNS = [
  { taSign: '', taVowel: 'அ', mlSign: '', mlVowel: 'അ', enVowel: 'a' },
  { taSign: 'ா', taVowel: 'ஆ', mlSign: 'ാ', mlVowel: 'ആ', enVowel: 'aa' },
  { taSign: 'ி', taVowel: 'இ', mlSign: 'ി', mlVowel: 'ഇ', enVowel: 'i' },
  { taSign: 'ீ', taVowel: 'ஈ', mlSign: 'ീ', mlVowel: 'ഈ', enVowel: 'ee' },
  { taSign: 'ு', taVowel: 'உ', mlSign: 'ു', mlVowel: 'ഉ', enVowel: 'u' },
  { taSign: 'ூ', taVowel: 'ஊ', mlSign: 'ൂ', mlVowel: 'ഊ', enVowel: 'oo' },
  { taSign: 'ெ', taVowel: 'எ', mlSign: 'െ', mlVowel: 'എ', enVowel: 'e' },
  { taSign: 'ே', taVowel: 'ஏ', mlSign: 'േ', mlVowel: 'ഏ', enVowel: 'ae' },
  { taSign: 'ை', taVowel: 'ஐ', mlSign: 'ൈ', mlVowel: 'ഐ', enVowel: 'ai' },
  { taSign: 'ொ', taVowel: 'ஒ', mlSign: 'ൊ', mlVowel: 'ഒ', enVowel: 'o' },
  { taSign: 'ோ', taVowel: 'ஓ', mlSign: 'ോ', mlVowel: 'ഓ', enVowel: 'oo' },
  { taSign: 'ௌ', taVowel: 'ஔ', mlSign: 'ൗ', mlVowel: 'ഔ', enVowel: 'au' }
];

// Special irregular forms for u and oo in Tamil consonants
const SPECIAL_U_FORMS: Record<string, string> = {
  'க': 'கு', 'ங': 'ஙு', 'ச': 'சு', 'ஞ': 'ஞு', 'ட': 'டு', 'ண': 'ணு',
  'த': 'து', 'ந': 'நு', 'ப': 'பு', 'ம': 'மு', 'ய': 'யு', 'ர': 'ரு',
  'ல': 'லு', 'வ': 'வு', 'ழ': 'ழு', 'ள': 'ளு', 'ற': 'று', 'ன': 'னு'
};

const SPECIAL_OO_FORMS: Record<string, string> = {
  'க': 'கூ', 'ங': 'ஙூ', 'ச': 'சூ', 'ஞ': 'ஞூ', 'ட': 'டூ', 'ண': 'ணூ',
  'த': 'தூ', 'ந': 'நூ', 'ப': 'பூ', 'ம': 'மூ', 'ய': 'யூ', 'ர': 'ரூ',
  'ல': 'லூ', 'வ': 'வூ', 'ழ': 'ழூ', 'ள': 'ளூ', 'ற': 'றூ', 'ன': 'னூ'
};

export const UYIR_MEI_MATRIX: UyirMeiRow[] = CONSONANT_BASES.map(c => {
  return {
    consonant: c.ta,
    consonantMl: c.ml,
    consonantEn: c.en,
    combinations: VOWEL_SIGNS.map(v => {
      let combinedTa = '';
      if (v.taVowel === 'அ') {
        combinedTa = c.ta;
      } else if (v.taVowel === 'உ') {
        combinedTa = SPECIAL_U_FORMS[c.ta] || `${c.ta}ு`;
      } else if (v.taVowel === 'ஊ') {
        combinedTa = SPECIAL_OO_FORMS[c.ta] || `${c.ta}ூ`;
      } else if (v.taSign === 'ெ' || v.taSign === 'ே' || v.taSign === 'ை') {
        // Prefix markers in Tamil Unicode are placed with consonant: e.g. ெ + க = கெ
        combinedTa = `${c.ta}${v.taSign}`;
      } else if (v.taSign === 'ொ' || v.taSign === 'ோ' || v.taSign === 'ௌ') {
        combinedTa = `${c.ta}${v.taSign}`;
      } else {
        combinedTa = `${c.ta}${v.taSign}`;
      }

      // Malayalam equivalent
      let combinedMl = '';
      if (v.mlVowel === 'അ') {
        combinedMl = c.ml;
      } else {
        combinedMl = `${c.ml}${v.mlSign}`;
      }

      return {
        letter: combinedTa,
        vowelLetter: v.taVowel,
        vowelMl: v.mlVowel,
        vowelEn: v.enVowel,
        malayalam: combinedMl,
        english: `${c.en}${v.enVowel}`
      };
    })
  };
});

// Flattened array of all Uyir-Mei compound letters as TamilLetter objects
export const ALL_UYIR_MEI_LETTERS: TamilLetter[] = UYIR_MEI_MATRIX.flatMap(row =>
  row.combinations.map(comb => ({
    id: `um-${comb.letter}`,
    letter: comb.letter,
    category: 'uyir-mei' as const,
    categoryTitle: {
      ta: 'உயிர்மெய் எழுத்து',
      ml: 'ഉയിർമെയ് അക്ഷരം',
      en: 'Compound Letter'
    },
    malayalam: comb.malayalam,
    malayalamName: `${row.consonant} + ${comb.vowelLetter}`,
    english: comb.english,
    soundDescriptionEn: `Combination of consonant '${row.consonant}' and vowel '${comb.vowelLetter}' (${comb.english})`,
    soundDescriptionMl: `'${row.consonant}' വ്യഞ്ജനവും '${comb.vowelLetter}' സ്വരവും ചേർന്ന അക്ഷരം`,
    example: {
      wordTa: comb.letter,
      wordMl: comb.malayalam,
      wordEn: comb.english,
      meaningEn: `Compound letter: ${comb.letter}`,
      meaningMl: `ഉയിർമെയ് അക്ഷരം: ${comb.malayalam}`,
      emoji: '✨'
    },
    strokeInstructions: {
      en: `Write the consonant base and attach the corresponding vowel sign for '${comb.vowelLetter}'.`,
      ml: `വ്യഞ്ജന അക്ഷരത്തോടൊപ്പം '${comb.vowelLetter}' എന്ന സ്വരത്തിന്റെ ചിഹ്നം ചേർക്കുക.`,
      ta: `மெய் எழுத்துடன் '${comb.vowelLetter}' உயிர்க்குறியை இணைத்து எழுதவும்.`
    }
  }))
);
