// Performance configuration for optimal Lighthouse scores

// Enable React strict mode for performance checks
export const strictMode = true;

// Preload critical resources
export const preloadResources = ["/profile.jpg"];

// Prefetch routes
export const prefetchRoutes = ["/"];

// Resource hints
export const resourceHints = {
  preconnect: [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://web3forms.com",
  ],
  dnsPrefetch: [
    "https://brm-workforce.oracle.com",
    "https://images.credly.com",
  ],
};

// Performance budgets
export const performanceBudgets = {
  fcp: 1800, // First Contentful Paint (ms)
  lcp: 2500, // Largest Contentful Paint (ms)
  cls: 0.1, // Cumulative Layout Shift
  fid: 100, // First Input Delay (ms)
  ttfb: 600, // Time to First Byte (ms)
};

// Image optimization settings
export const imageOptimization = {
  quality: 85,
  formats: ["image/avif", "image/webp"],
  lazyLoadOffset: 100, // pixels before viewport
};

// Animation optimization
export const animationConfig = {
  reducedMotion: true, // Respect user preferences
  duration: 300, // Default animation duration (ms)
};
