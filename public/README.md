# How to Add Your Photo

To add your photo to the portfolio:

1. **Add your photo to the public folder:**

   - Place your photo file (e.g., `profile.jpg`, `photo.png`) in the `public` folder
   - Recommended size: 400x400 pixels or larger (square format works best)

2. **Update the image path in the code:**
   - Open `app/page.tsx`
   - Find the line with `src="/api/placeholder/320/320"`
   - Replace it with `src="/your-photo-name.jpg"` (or whatever your file name is)

Example:

```tsx
<img
  src="/profile.jpg"
  alt="Aditya"
  className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-500"
/>
```

## Photo Tips:

- Use a high-quality professional photo
- Square aspect ratio works best
- Good lighting and clear background
- File formats: JPG, PNG, or WebP
- Keep file size under 500KB for fast loading
