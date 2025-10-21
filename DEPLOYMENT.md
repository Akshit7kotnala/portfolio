# 🚀 Deployment Guide to Vercel

## Prerequisites

- A GitHub account
- A Vercel account (free tier available at vercel.com)

## Step-by-Step Deployment Instructions

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In" (you can use your GitHub account)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Wait 1-2 minutes for deployment to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy:**

   ```bash
   vercel
   ```

   - Follow the prompts
   - Your site will be deployed automatically

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## Post-Deployment

### Custom Domain (Optional)

1. Go to your project on Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables (If needed)

1. Go to "Settings" → "Environment Variables"
2. Add any required variables
3. Redeploy for changes to take effect

## Automatic Deployments

Once connected to GitHub:

- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment
- Pull requests get automatic preview URLs

## Troubleshooting

If deployment fails:

1. Check build logs on Vercel Dashboard
2. Ensure all dependencies are in `package.json`
3. Run `npm run build` locally to test
4. Check that Node.js version is compatible (18+)

## Your Live URLs

After deployment, you'll get:

- **Production URL:** `https://your-project-name.vercel.app`
- **Preview URLs:** For each pull request and branch
- **Custom Domain:** If configured

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
