# Prompt: Generate Horror Leaderboard / Hall of Shame Feature

You are an expert React + TypeScript frontend developer.  
Your task is to generate a **Horror Leaderboard / Hall of Shame** component for the **Legacy Code Horror Meter™** app.

---

## **Feature Description**

The leaderboard should:

1. Display the **Top 10 scariest snippets** submitted by users.  
2. Show for each snippet:
   - Horror score
   - Snippet title / optional author
   - Key horror factors (optional)
3. Support **live or mocked data**:
   - Live: Fetch from **Supabase** or **Firebase**  
   - Mocked: Use a local array of sample snippets
4. Trigger **fun UI reactions based on score**:
   - Medium-high score: flashing warning lights, ghost pops up  
   - High score: sirens, shaking animation, ghost panics  
   - Max score: explosion animation, confetti, dramatic spooky sounds
5. Use **Tailwind CSS**, **shadcn/ui** components, and **Framer Motion** for animations.
6. Fully **TypeScript** and modular.

---

## **Data Structure**

Assume each snippet has:

```ts
interface HorrorSnippet {
  id: string;
  title: string;
  author?: string;
  horrorScore: number;
  factors: string[];
  createdAt: string;
}
Frontend Components to Generate
1. /src/components/HorrorLeaderboard.tsx

Props: snippets?: HorrorSnippet[] (optional mocked array)

Fetch top 10 snippets by horrorScore from Supabase/Firebase if no props provided

Display in a vertical leaderboard with ranks 1–10

Include:

Score badge

Snippet title and author

Optional factors list

Trigger dynamic animations based on score:

50–80 → small ghost pops, flashing lights

81–99 → sirens + shake + ghost panic animation

100+ → confetti, full explosion, loud spooky sound

2. Sound Feedback

Use use-sound NPM package

Sounds vary by score tier:

Medium → ghost whispers

High → creaks, alarms

Maximum → loud scream / explosion

3. Optional: Interactive Snippet Preview

Clicking a snippet in leaderboard opens a modal or side panel:

Shows code in read-only Monaco editor

Horror score gauge

Factors

Ghost mascot reacts dynamically

Requirements

TypeScript + React functional components

Tailwind CSS + shadcn/ui styling

Framer Motion animations for ghost, shake, confetti, and warning lights

Compatible with Supabase or Firebase for live leaderboard

Mocked data support if no live backend is connected

Provide raw code blocks by file path, e.g.:

/src/components/HorrorLeaderboard.tsx
<code>


No explanations, just code unless requested