# Legacy Code Horror Meter™ - Project Plan

## Project Overview
**Legacy Code Horror Meter™** is a fun and useful React + TypeScript frontend tool that lets developers **paste legacy code** and instantly see:
- A **Horror Score** (0–100)  
- A list of detected “horror factors”  
- A **mock modernization suggestion** in TypeScript  
- Animated, playful visual feedback (gauge, icons, ghost mascot, screen shake)  

The goal is to make analyzing legacy tax code both **informative** and **entertaining**, with **zero backend**, fully client-side.

---

## Tech Stack

### Core
- React + TypeScript  
- Webpack (ESM imports)  
- Tailwind CSS + shadcn/ui  
- Radix UI (dialogs, tooltips)

### Editor
- `@monaco-editor/react` (paste legacy code directly)

### Animations & Visuals
- Framer Motion (animations, shake, fade, glow)  
- `react-icons` (skull, ghost, fire icons)  
- Optional: `use-sound` (spooky click sounds)

### Charts & Gauges
- `react-gauge-chart` (Horror Meter)  
- Recharts (bar/pie charts for horror factors)

### Mock Analysis Logic
- Detect magic numbers  
- Deeply nested conditionals  
- TODO / FIXME comments  
- Hardcoded tax brackets  
- Long functions  
- Empty try/catch blocks  
- Suspicious variable/function names  
- Line count / file length  

Output:
```ts
interface HorrorResult {
  score: number;
  factors: string[];
  refactorSuggestion: string;
}

/src
  /components
    CodeInput.tsx
    HorrorMeter.tsx
    AnalysisPanel.tsx
    GhostMascot.tsx (optional)
  /logic
    calculateHorrorScore.ts
  /mock
    legacySamples.ts
  App.tsx
  index.tsx
webpack.config.js
tailwind.config.js
vercel.json
index.html
plan.md
package.json


Key Features

Paste Code Editor

Monaco editor for pasting code

Analyze button triggers horror score calculation

Horror Meter

Gauge displaying score (0–100)

Color-coded based on intensity

Animated visual effects (shake, glow, icons)

Analysis Panel

Lists horror factors detected

Shows mocked TypeScript modernization suggestion

Animated reactions based on score

Sample Snippets

Preloaded Norwegian tax legacy code examples

Click to populate editor

Fun Extras

Ghost mascot reacts to score

Optional spooky sounds

Smooth transitions (Framer Motion)

GitHub + Vercel Workflow

Feature Branch

Developer clones repo

Creates a branch (feature/horror-meter)

Implements or modifies code

Pull Request

Push branch to GitHub

Open PR for review

Vercel automatically generates a Preview Deployment for the PR

Review & Merge

Reviewer checks PR preview

Merge to main branch triggers Vercel production deployment

Deployment

Fully static, client-side site

Hosted via Vercel

Development Notes

Client-side only (no Node backend)

Modular, clean React + TypeScript components

Tailwind + shadcn UI for fast styling

Framer Motion for polished animations

Mock analysis logic can be replaced with AI in future versions

Keep all features lightweight for fast hackathon iteration

Future Enhancements

Real AI analysis using Claude / GPT API

Dark mode + spooky theme variants

More fun animated reactions for extreme horror scores

Persisted sample library (localStorage)

Multi-language legacy code support (Java, C#, XML, JS, TS)

Test coverage for calculateHorrorScore.ts

Milestones (Hackathon Plan, ~3–4 Hours)
Time	Task
0:00–0:30	Setup React + TypeScript + Webpack + Tailwind + shadcn UI
0:30–1:00	Implement Monaco code editor (CodeInput.tsx) and paste flow
1:00–1:30	Create calculateHorrorScore.ts logic (mock analysis)
1:30–2:00	Build HorrorMeter.tsx with gauge + animations
2:00–2:30	Build AnalysisPanel.tsx (factors, refactor suggestions)
2:30–3:00	Add sample legacy snippets (legacySamples.ts)
3:00–3:30	Integrate ghost mascot + fun animations
3:30–4:00	Polish UI, PR workflow, Vercel preview test, final tweaks
References / Dependencies

React

TypeScript

Monaco Editor

Tailwind CSS

shadcn/ui

Framer Motion

react-gauge-chart

Recharts