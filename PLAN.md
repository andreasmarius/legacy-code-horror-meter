# Prompt: Generate React + TypeScript Code for "Legacy Code Horror Meter™"

You are an expert React + TypeScript frontend developer.  
Your task is to generate production-ready code for a fun and spooky code-analysis tool called **Legacy Code Horror Meter™**.

## 🎯 Purpose of the App
The tool lets the user paste or upload legacy code and receive:
- A **Horror Score** (0–100)
- A list of detected “horror factors”
- A fun animated **horror meter gauge**
- A TypeScript-based modernization suggestion (mocked)
- Playful spooky UI reactions

## 🧱 Required Tech Stack
All code MUST be written in **TypeScript** and use the following libraries:

### Core
- React + TypeScript  
- Webpack compatible imports

### Editor Input
- `@monaco-editor/react`  
- `monaco-editor`

### Styling & UI
- Tailwind CSS  
- shadcn/ui components  
- Radix UI for tooltips/dialogs  

### Animations & Effects
- Framer Motion  
- `react-icons` (skull, fire, ghosts, warnings)
- Optional: `use-sound` for click effects

### Data Visualization
- `react-gauge-chart` or a custom SVG gauge  
- Recharts for bar/pie distribution of horror factors

### Code Analysis Tools
Use lightweight **mock code analysis logic**:
- Magic number detection  
- Nesting depth  
- TODO/FIXME detection  
- Extremely long functions  
- Hardcoded tax bracket detection (“income < …”)  
- Empty catch blocks  
- File length as a risk factor  

### No backend required — everything runs in the browser.

---

# 🧩 Required Components Claude Should Generate
Please output clean, modular React components with imports and TypeScript types:

1. **`CodeUpload.tsx`**
   - Monaco editor
   - File upload
   - “Analyze” button

2. **`calculateHorrorScore.ts`**
   - Pure function
   - Takes string input
   - Returns:
     ```ts
     interface HorrorResult {
       score: number;
       factors: string[];
     }
     ```

3. **`HorrorMeter.tsx`**
   - Animated gauge using Framer Motion + react-gauge-chart
   - Color changes based on score
   - Fun icons (skull, fire, ghost)

4. **`AnalysisPanel.tsx`**
   - Shows horror score
   - Shows factor list
   - Shows mocked “modern TypeScript refactor”
   - Tailwind + shadcn styling

5. **`App.tsx`**
   - Page layout
   - Sidebar (samples)
   - Main panel
   - Smooth transitions

6. **`legacySamples.ts`**
   - A few sample legacy Java/C#/XML tax examples

7. **Optional Fun Component**
   - e.g., a “ScreenShake” effect using Framer Motion
   - or a ghost mascot that reacts to horror score

---

# 🎃 Tone & Style Requirements
- Code must be clean and idiomatic TypeScript.
- Use functional React components.
- Keep all logic inside separate files, nothing inline.
- Avoid any backend or server code.
- Ensure UI looks polished with Tailwind + shadcn.

---

# 📦 Complete Output Format
Provide **raw code blocks** in the following structure:

