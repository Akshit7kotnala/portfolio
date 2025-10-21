"use client";

import { useEffect } from "react";
import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
  useReportWebVitals((metric) => {
    // Log metrics in development
    if (process.env.NODE_ENV === "development") {
      console.log("Web Vital:", metric);
    }

    // You can send metrics to analytics service
    // Example: sendToAnalytics(metric);

    const { name, value, rating } = metric;

    // Visual feedback for poor metrics in development
    if (process.env.NODE_ENV === "development" && rating === "poor") {
      console.warn(`⚠️ Poor ${name} score: ${value.toFixed(2)}`);
    }
  });

  return null;
}
