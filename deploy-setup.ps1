# Quick Setup and Deployment Script for PowerShell

Write-Host "🚀 Portfolio Deployment Setup" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit: Portfolio website"
    git branch -M main
}

Write-Host ""
Write-Host "✅ Git repository ready!" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub"
Write-Host "2. Run: git remote add origin YOUR_GITHUB_REPO_URL"
Write-Host "3. Run: git push -u origin main"
Write-Host ""
Write-Host "Then deploy to Vercel:" -ForegroundColor Cyan
Write-Host "Option A: Go to vercel.com and import your GitHub repo"
Write-Host "Option B: Run 'npm i -g vercel' then 'vercel' in this directory"
Write-Host ""
Write-Host "📖 See DEPLOYMENT.md for detailed instructions" -ForegroundColor Yellow
