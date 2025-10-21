# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean and modern design
- 📱 Fully responsive
- ⚡ Built with Next.js 14
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

That's it! Vercel will automatically detect Next.js and configure everything for you.

## Customization

### Update Personal Information

Edit `app/page.tsx` to update:
- Your name and bio
- Work experience
- Skills and technologies
- Social media links
- Contact information

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: "#ef4444",  // Main red color
  accent: "#ff6b6b",   // Accent color
}
```

### Add Your Photo

Replace the placeholder image in the About section with your own photo.

## Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json        # Dependencies
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## License

MIT
