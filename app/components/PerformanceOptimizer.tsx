"use client";

import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Prefetch critical pages
    if ("IntersectionObserver" in window) {
      // Lazy load images when they come into view
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              imageObserver.unobserve(img);
            }
          }
        });
      });

      // Observe all lazy images
      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
      });

      return () => imageObserver.disconnect();
    }
  }, []);

  return null;
}
