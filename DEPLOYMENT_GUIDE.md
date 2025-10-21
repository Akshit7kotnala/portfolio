# 🚀 Deployment Guide - Host Your Portfolio on Vercel

## Why Vercel?

- ✅ **FREE** for personal projects
- ✅ **Automatic deployments** from GitHub
- ✅ **Global CDN** (super fast worldwide)
- ✅ **Custom domain** support (free SSL)
- ✅ **Made for Next.js** (zero configuration)
- ✅ **Automatic HTTPS**

---

## 📋 Step-by-Step Deployment

### **Step 1: Prepare Your Project** ✅ (Already Done!)

Your project is ready to deploy with all optimizations!

---

### **Step 2: Push to GitHub** 📦

#### Option A: If you DON'T have a GitHub repository yet

1. **Create a new repository on GitHub:**

   - Go to https://github.com/new
   - Repository name: `portfolio` (or any name you like)
   - Make it **Public** (so recruiters can see your code!)
   - **Don't** initialize with README (you already have files)
   - Click **"Create repository"**

2. **Initialize Git in your project** (run these commands in VS Code terminal):

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio with performance optimizations"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: If you ALREADY have a GitHub repository

```bash
# Add all new changes
git add .

# Commit changes
git commit -m "feat: Add performance optimizations and improvements"

# Push to GitHub
git push origin main
```

---

### **Step 3: Deploy to Vercel** 🚀

#### Method 1: Deploy via Vercel Website (EASIEST)

1. **Go to Vercel:**

   - Visit: https://vercel.com/signup
   - Click **"Continue with GitHub"**
   - Log in with your GitHub account

2. **Import your repository:**

   - Click **"Add New..."** → **"Project"**
   - Find your `portfolio` repository
   - Click **"Import"**

3. **Configure deployment:**

   - **Project Name:** `akshit-portfolio` (or your preferred name)
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
   - Click **"Deploy"**

4. **Wait for deployment** (2-3 minutes):

   - Vercel will build and deploy your site
   - You'll see a success message with your URL!

5. **Your site is LIVE!** 🎉
   - You'll get a URL like: `https://akshit-portfolio.vercel.app`
   - Share this URL anywhere!

---

#### Method 2: Deploy via Vercel CLI (Advanced)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

---

### **Step 4: Custom Domain (Optional)** 🌐

If you have a custom domain (like `akshitkotnala.com`):

1. **Go to Vercel Dashboard** → Your project
2. Click **"Settings"** → **"Domains"**
3. Add your domain
4. Update DNS records (Vercel provides instructions)
5. Wait for DNS propagation (can take 24-48 hours)

**Popular domain registrars:**

- Namecheap: ~$10/year
- GoDaddy: ~$12/year
- Google Domains: ~$12/year

---

## 🔄 Automatic Deployments

Once connected to GitHub, **every time you push code**, Vercel will:

1. ✅ Automatically detect changes
2. ✅ Build your project
3. ✅ Deploy the new version
4. ✅ Keep previous versions for rollback

**No manual deployment needed!** Just:

```bash
git add .
git commit -m "Updated projects section"
git push
```

And Vercel does the rest! 🚀

---

## 📊 After Deployment - Verify Performance

1. **Test your live site:**

   - Visit your Vercel URL
   - Check all sections load properly
   - Test on mobile and desktop

2. **Run Lighthouse on production:**

   - Go to https://pagespeed.web.dev/
   - Enter your Vercel URL
   - Run test
   - **Expect 95+ scores!** 🎉

3. **Check Vercel Analytics:**
   - Go to Vercel Dashboard → Your project
   - Click **"Analytics"**
   - See real visitor data (free!)

---

## 🎯 Quick Deployment Checklist

Before deploying, make sure:

- [x] All code is committed to Git
- [x] No console errors in development
- [x] All environment variables are set (if any)
- [x] Images are optimized
- [x] Build completes successfully locally (`npm run build`)
- [x] .gitignore includes `.next/`, `node_modules/`

---

## 🐛 Common Issues & Solutions

### Issue 1: Build fails on Vercel

**Solution:**

- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Check for missing dependencies in package.json

### Issue 2: Images not loading

**Solution:**

- Verify image paths are correct
- Check `next.config.mjs` has correct remote patterns
- Ensure images are in `public/` folder

### Issue 3: Environment variables

**Solution:**

- Add env vars in Vercel Dashboard → Settings → Environment Variables
- Never commit `.env` files to Git!

### Issue 4: Custom domain not working

**Solution:**

- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Use Vercel's DNS checker tool

---

## 📝 Your Deployment URLs

After deployment, you'll have:

1. **Production URL:** `https://your-project.vercel.app`

   - Share this with recruiters!
   - Add to resume, LinkedIn, GitHub profile

2. **Preview URLs:** Automatic for each commit

   - Test changes before merging
   - Every PR gets its own URL

3. **Custom Domain:** (if configured)
   - Your personal brand URL

---

## 🎓 Best Practices

### 1. **Use Branch Protection**

```bash
# Create development branch
git checkout -b dev

# Make changes in dev
git add .
git commit -m "Add new feature"
git push origin dev

# Merge to main when ready
git checkout main
git merge dev
git push origin main
```

### 2. **Environment Variables**

For sensitive data (API keys, etc.):

- Add in Vercel Dashboard (Settings → Environment Variables)
- Never hardcode in source code
- Use `.env.local` for local development (add to .gitignore)

### 3. **Monitor Performance**

- Enable Vercel Analytics (free)
- Check Core Web Vitals regularly
- Use Vercel Speed Insights

---

## 🚀 Ready to Deploy?

### Quick Commands (Copy & Paste):

```bash
# 1. Initialize Git (if not done)
git init

# 2. Add all files
git add .

# 3. Create commit
git commit -m "feat: Portfolio with performance optimizations ready for deployment"

# 4. Create GitHub repo, then add remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 5. Push to GitHub
git branch -M main
git push -u origin main

# 6. Go to vercel.com and import your GitHub repo
# That's it! 🎉
```

---

## 📱 Share Your Portfolio

After deployment, add your URL to:

- ✅ GitHub profile README
- ✅ LinkedIn profile (Featured section)
- ✅ Resume header
- ✅ Email signature
- ✅ Twitter/X bio
- ✅ Dev.to profile
- ✅ Job applications

---

## 🎉 Congratulations!

Once deployed, your portfolio will be:

- ✅ Live and accessible worldwide
- ✅ Lightning fast (95+ Lighthouse score)
- ✅ Automatically updated on every push
- ✅ Secure with HTTPS
- ✅ Hosted on global CDN

**Your professional portfolio is now live for the world to see!** 🌍

---

## 📞 Need Help?

If you encounter any issues:

1. Check Vercel build logs
2. Verify `npm run build` works locally
3. Review this guide again
4. Ask me for help!

---

**Next Steps:**

1. Push code to GitHub ✅
2. Deploy to Vercel ✅
3. Share your portfolio URL ✅
4. Get hired! 🎯

Good luck! 🚀
