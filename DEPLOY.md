# 🚀 Quick Deploy Guide

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Commit & Push to GitHub
```bash
git add .
git commit -m "feat: complete Legacy Code Horror Meter™ application"
git push origin master
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `legacy-code-horror-meter` repository
5. Vercel auto-detects settings - just click "Deploy"
6. Done! Your app will be live in ~60 seconds

### Step 3: Enable PR Previews (Automatic)
Every pull request will automatically get a preview URL!

---

## Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (run from project root)
vercel

# Follow the prompts
# Your site will be deployed instantly!
```

---

## Option 3: Deploy to Other Platforms

### Netlify
```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to Netlify
# Or use Netlify CLI:
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Your Own Server
```bash
# Build the project
npm run build

# Upload the contents of 'dist' folder to your web server
# Make sure to configure server to serve index.html for all routes
```

---

## Vercel Configuration Details

The `vercel.json` file is already configured with:
- Static build output from `dist` folder
- SPA routing (all routes serve index.html)
- Automatic GitHub integration
- PR preview deployments

---

## Testing Before Deploy

```bash
# Test development build
npm run dev

# Open http://localhost:3000
# Test all features:
# - Paste code
# - Select samples  
# - Analyze button
# - View horror score
# - Check animations
# - Verify responsive design
```

---

## Environment Variables

This project has **no environment variables** needed! 🎉

Everything runs client-side, so deployment is super simple.

---

## Custom Domain (Optional)

After deploying to Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Done!

---

## Troubleshooting Deploy

### Build fails on Vercel?
- Check build logs for errors
- Verify `package.json` scripts are correct
- Ensure all dependencies are in `dependencies` not `devDependencies` (if needed for build)

### Site is blank after deploy?
- Check browser console for errors
- Verify `dist/index.html` exists after build
- Check that routes are configured correctly in `vercel.json`

### Monaco editor not loading?
- Monaco requires web workers
- Vercel handles this automatically
- If issues persist, check Content Security Policy settings

---

## Post-Deploy Checklist

After deploying, verify:

- ✅ Site loads at Vercel URL
- ✅ Can paste code in editor
- ✅ Sample buttons work
- ✅ Analyze calculates score
- ✅ Gauge displays correctly
- ✅ Charts render
- ✅ Ghost mascot appears
- ✅ Mobile responsive works
- ✅ All animations smooth

---

## Share Your Project!

Tweet about it: "Just built a Legacy Code Horror Meter with React + TypeScript! 💀👻 Check it out: [your-url]"

Add to your portfolio
Share on LinkedIn
Post on dev.to or Hashnode

---

**Ready to deploy? Just run:**

```bash
git add .
git commit -m "feat: ready to deploy"
git push origin master
```

Then import to Vercel - that's it! 🎉
