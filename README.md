# தமிழ் எழுத்து பயிற்றுவிப்பாளர் (Tamil Alphabet Tutor)
### *Interactive Tamil Alphabet Learning with Malayalam & English Swaram Support*

A modern, responsive, and interactive educational application designed for learners of Tamil letters—specifically featuring comparative pronunciation and swaram assistance in **Malayalam (മലയാളം)** and **English**, along with an intelligent **interactive handwriting / drawing canvas** with automatic accuracy evaluation.

---

## ✨ Key Features

### 1. 🔤 Comprehensive Tamil Alphabet Coverage
- **12 Uyir Ezhuthukkal (உயிர் எழுத்துக்கள் - Vowels)**: அ, ஆ, இ, ஈ, உ, ஊ, எ, ஏ, ஐ, ஒ, ஓ, ஔ
- **1 Ayutha Ezhuthu (ஆய்த எழுத்து - Special / Glottal)**: ஃ (அഃ)
- **18 Mei Ezhuthukkal (மெய் எழுத்துக்கள் - Consonants)**: க், ங், ச், ஞ், ட், ண், த், ந், ப், ம், ய், ர், ல், வ், ழ், ள், ற், ன்
- **7 Grantha & Additional Consonants (கிரந்தம் & பிற மெய்)**: ஜ, ஶ, ஷ, ஸ, ஹ, ள, க்ஷ
- **216+ Uyir-Mei Grid (உயிர்மெய் எழுத்துக்கள் - Compound Letters)**: Complete interactive combination matrix.

### 2. 🌐 Multi-Language Swaram Support (മലയാളം & English)
Switch seamlessly at any time between:
- **Both (മലയാളം + English)**: Side-by-side comparison of Malayalam swaram and English phonetics.
- **മലയാളം (Malayalam Only)**: Tailored for Malayalam speakers learning Tamil (shows Malayalam script, letter name, and equivalent sound hints).
- **English (English Only)**: International phonetic transliteration and mouth/tongue movement guides.

### 3. ✍️ Interactive Drawing & Tracing Canvas
- **Stroke Tracing Guide**: Ghost outline with adjustable opacity (0%, 35%, 70%) to assist beginners.
- **Natural Brush Controls**: Multiple colors (Saffron, Peacock Green, Royal Blue, Maroon, Slate) and brush widths (Fine, Medium, Thick).
- **Undo & Clear**: Step-by-step stroke history undo.
- **Animated Demonstration**: Plays back dynamic stroke order preview.
- **Smart Accuracy Evaluator ("Check My Drawing")**:
  - Off-screen pixel rasterization with stroke dilation tolerance.
  - Measures letter coverage, stroke precision, and bounding balance.
  - Returns an **Accuracy Percentage (0–100%)** with encouraging feedback in Malayalam & English.
  - Confetti celebration and audio chimes for high scores (≥ 75%).
  - Tracks mastered letters in `localStorage`.

### 4. 🔊 Native Speech Audio Pronunciation
- Web Speech API integration for **Tamil (`ta-IN`)** and **Malayalam (`ml-IN`)**.
- Pronounce individual letters, Malayalam swaram, and sample vocabulary words.
- Web Audio API synthesizer for positive reinforcement chimes.

### 5. 🧩 Vocabulary & Step-by-step Formation
- Illustrated example words with emojis (e.g., அ ➔ அம்மா / അമ്മ / Mother).
- Step-by-step stroke instructions in Tamil, Malayalam, and English.

### 6. 🏆 Alphabet Quiz Challenge
- Interactive questions matching Tamil letters to Malayalam swaram, audio recognition, and word beginnings.
- Streaks counter and score tracking.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer)
- npm

### Installation & Running

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🛠️ Tech Stack
- **React 18** + **TypeScript**
- **Vite** (Lightning-fast bundler)
- **Tailwind CSS** (Custom Tamil & Malayalam cultural palette)
- **Lucide React** (Icons)
- **Canvas-Confetti** (Celebratory animations)
- **HTML5 Canvas API** (Smooth touch and mouse drawing engine)
