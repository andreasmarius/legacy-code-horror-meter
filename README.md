# Legacy Code Horror Meter™

<div align="center">

![Horror Meter](https://img.shields.io/badge/Horror-Meter-purple?style=for-the-badge&logo=ghost)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### 👻 Dare to discover how terrifying your legacy tax code really is...

[Live Demo](https://legacy-code-horror-meter.vercel.app) • [Report Bug](https://github.com/andreasmarius/legacy-code-horror-meter/issues)

</div>

---

## 🎃 What is This?

**Legacy Code Horror Meter™** is a fun and useful React + TypeScript tool that analyzes legacy code and gives it a **Horror Score** from 0-100. Paste your nightmarish tax calculations, ancient payroll systems, or any legacy code, and watch as it gets dissected for:

- 🔢 Magic numbers
- 🌀 Deep nesting nightmares  
- 📝 Abandoned TODO comments
- 💰 Hardcoded tax brackets
- 📏 Monster functions
- 🙈 Silent error swallowing
- 🦖 Ancient `var` keywords
- And much more!

Plus, get **AI-style refactoring suggestions** showing how to modernize the code with TypeScript best practices.

## ✨ Features

- **🎯 Horror Score**: Real-time code analysis with a spooky gauge (0-100)
- **📊 Visual Analytics**: Charts and severity breakdowns
- **👻 Animated Ghost Mascot**: Reacts to your code's horror level
- **💡 Refactor Suggestions**: Mock TypeScript modernization examples
- **📦 Sample Code**: Pre-loaded Norwegian tax legacy code samples
- **🎨 Beautiful UI**: Tailwind CSS + Framer Motion animations
- **⚡ Zero Backend**: Fully client-side, deployed on Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/andreasmarius/legacy-code-horror-meter.git
cd legacy-code-horror-meter

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

### Core
- **React 18** + **TypeScript**
- **Webpack** for bundling
- **Tailwind CSS** for styling
- **Framer Motion** for animations

### Components & Libraries
- `@monaco-editor/react` - Code editor
- `react-gauge-chart` - Horror score gauge
- `recharts` - Data visualization
- `react-icons` - Spooky icons
- `@radix-ui` - UI primitives

## 📁 Project Structure

```
/src
  /components
    CodeInput.tsx         # Monaco editor for pasting code
    HorrorMeter.tsx       # Animated gauge display
    AnalysisPanel.tsx     # Factor breakdown & charts
    GhostMascot.tsx       # Floating ghost reactions
  /logic
    calculateHorrorScore.ts   # Analysis engine
  /mock
    legacySamples.ts      # Sample legacy code
  /types
    index.ts              # TypeScript interfaces
  /styles
    globals.css           # Global styles + Tailwind
  App.tsx                 # Main application
  index.tsx               # Entry point
/public
  index.html              # HTML template
webpack.config.js         # Webpack configuration
tailwind.config.js        # Tailwind setup
vercel.json               # Vercel deployment config
```

## 🎨 How It Works

1. **Paste Code**: Use the Monaco editor or select a sample
2. **Analyze**: Click "Unleash the Horror Meter!"
3. **Get Results**: 
   - Horror Score (0-100)
   - Detected factors with severity levels
   - Bar chart visualization
   - Refactoring suggestions
4. **Watch the Ghost**: The mascot reacts based on horror level! 👻

### Analysis Factors

The tool detects:
- Magic numbers without context
- Nested conditionals (3+ levels)
- TODO/FIXME/HACK comments
- Hardcoded values (tax rates, percentages)
- Functions longer than 50 lines
- Empty try/catch blocks
- Single-letter variable names
- Ancient `var` declarations
- Dangerous `eval()` usage

## 🌍 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

Every PR creates a preview deployment! 🎉

### Manual Deployment

```bash
npm run build
# Upload `dist/` folder to your hosting
```

## 🤝 Contributing

Contributions welcome! Feel free to:

- Add more horror detection patterns
- Improve refactoring suggestions
- Create new sample code
- Enhance animations
- Add new features

## 📜 License

MIT License - feel free to use this for your own projects!

## 🎯 Future Ideas

- [ ] AI-powered analysis (Claude/GPT integration)
- [ ] Multi-language support (Java, C#, Python)
- [ ] Dark mode variants
- [ ] Save/share results
- [ ] Horror history tracking
- [ ] Team leaderboards

## 👨‍💻 Author

**Andreas Marius Steffensen**

- GitHub: [@andreasmarius](https://github.com/andreasmarius)

## 🙏 Acknowledgments

Built during a hackathon to make legacy code analysis fun and educational!

Special thanks to:
- All the developers who've survived legacy tax code 💀
- The React & TypeScript communities
- Norwegian tax authorities (for inspiration) 🇳🇴

---

<div align="center">

**Made with 💀 for legacy code survivors everywhere**

If you found this useful, give it a ⭐!

</div>
