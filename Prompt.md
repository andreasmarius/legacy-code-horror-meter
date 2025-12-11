# Prompt: Generate React + TypeScript Code for "Legacy Code Horror Meter™" (GitHub + Vercel Edition)

You are an expert frontend engineer.  
Generate a complete React + TypeScript frontend for a spooky code-analysis tool called **Legacy Code Horror Meter™**.

All code MUST be compatible with:
- GitHub repository workflow  
- Vercel deployment  
- Vercel automatic PR previews  
- Webpack + React + TypeScript + Tailwind  
- Zero backend (client-only app)

This means:
- No Node APIs required
- Avoid server-side rendering
- All code should work in a static Vercel deployment
- Files should be structured as a typical `/src` frontend folder
- No special build steps beyond Webpack + Tailwind

---

# 🧱 Tech Stack Requirements

### Core
- React + TypeScript  
- Webpack (ESM + import statements)  
- Tailwind CSS  
- shadcn/ui components  
- Radix UI for dialogs/tooltips  
- Framer Motion for animations  
- `react-icons` for spooky visuals  

### Editor & Charts
- `@monaco-editor/react` for the paste editor  
- `react-gauge-chart` or a custom animated SVG gauge  
- Recharts for factor visualization  

### Analysis Logic
A fully client-side mock analysis:

Output:
```ts
interface HorrorResult {
  score: number;
  factors: string[];
  refactorSuggestion: string;
}
