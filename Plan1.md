# Prompt: Create a “Share Snippet” Feature Using Supabase for Legacy Code Horror Meter™

You are an expert React + TypeScript frontend developer.  
Your task is to generate a **share snippet feature** for the **Legacy Code Horror Meter™** app using **Supabase**.  

This feature should allow a user to:
1. Publish their analyzed code snippet (code + horror score + horror factors + optional refactor suggestion + optional author/name) to Supabase.
2. Receive a unique URL for the snippet.
3. Allow other users to view the snippet via the URL, including:
   - Read-only code display (Monaco editor)
   - Horror Score gauge
   - Horror factors
   - Animated ghost mascot and/or spooky sounds based on horror score

---

# **Requirements**

### 1. Supabase Integration
- Use Supabase JS SDK for client-side access.
- Assume Supabase project already exists; connection details can be referenced via environment variables:
  ```ts
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
id (UUID, primary key)
code (TEXT)
horrorScore (INTEGER)
factors (JSON)
refactorSuggestion (TEXT)
author (TEXT, optional)
createdAt (TIMESTAMP)
Frontend Components to Generate
a) /src/components/ShareSnippetButton.tsx

Props: code: string, score: number, factors: string[], refactorSuggestion?: string, author?: string

On click:

Insert snippet into Supabase

Generate unique ID / URL

Display or copy sharable URL to clipboard

Use Tailwind for styling and shadcn/ui button component.

b) /src/pages/snippet/[id].tsx (Next.js-style dynamic route, or React Router equivalent)

Fetch snippet from Supabase by id

Display:

Code snippet (Monaco, read-only)

Horror Score (gauge or Framer Motion)

List of factors

Optional refactor suggestion

Ghost mascot and spooky sound feedback based on score

Handle loading & error states gracefully

c) Sound Feedback

Use use-sound package

Trigger sound once on page load based on horror score:

<30 → soft ambient

30–60 → whispering ghost

60–80 → scary creaks

80+ → loud screech / alarm

d) Optional: “Clone & Analyze” Button

Copies snippet back into main code editor so user can re-analyze or modify

3. General Requirements

All code in TypeScript

Functional React components only

Tailwind + shadcn/ui for styling

Framer Motion for gauge animations

Monaco editor for code display

Clean, modular, hackathon-friendly code

Assume Vercel deployment (fully client-side, no backend server)

Output raw code blocks by file path, e.g.:

/src/components/ShareSnippetButton.tsx
<code>

/src/pages/snippet/[id].tsx
<code>


Do not include explanations unless requested.

Goal

Claude should generate a fully functional share snippet feature integrated with Supabase, complete with:

Storing user snippets

Generating a unique URL

Viewing snippet results with interactive visual and sound feedback

Optional cloning back into main editor