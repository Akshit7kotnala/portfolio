"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function ImageWithSkeleton({
  src,
  alt,
  width = 400,
  height = 400,
  className = "",
  priority = false,
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg ${className}`}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
        onLoad={() => setIsLoading(false)}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        quality={90}
      />
    </div>
  );
}
