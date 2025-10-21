/* eslint-disable */
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltMaxAngle?: number;
  scale?: number;
  transitionSpeed?: number;
}

export default function TiltCard({
  children,
  className = "",
  tiltMaxAngle = 15,
  scale = 1.05,
  transitionSpeed = 400,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${tiltMaxAngle}deg`, `-${tiltMaxAngle}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${tiltMaxAngle}deg`, `${tiltMaxAngle}deg`]
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // Inline styles below are intentional: they map framer-motion motion values to CSS transforms
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale }}
      transition={{ duration: transitionSpeed / 1000 }}
      className={`relative ${className}`}
    >
      {/* translateZ layer for depth (inline style required for preserve-3d) */}
      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

interface TiltCard3DProps {
  children: ReactNode;
  className?: string;
  glareEffect?: boolean;
}

export function TiltCard3D({
  children,
  className = "",
  glareEffect = true,
}: TiltCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // Inline framer-motion style mapping
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Card content */}
      <div
        // depth layer; inline styles are required for the 3D transform composition
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {children}
      </div>

      {/* Glare effect: uses dynamic motion values for background (inline style required) */}
      {glareEffect && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden"
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring],
              ([latestX, latestY]) =>
                `radial-gradient(circle at ${
                  ((latestX as number) + 0.5) * 100
                }% ${
                  ((latestY as number) + 0.5) * 100
                }%, rgba(255,255,255,0.2) 0%, transparent 50%)`
            ),
            transform: "translateZ(75px)",
          }}
        />
      )}
    </motion.div>
  );
}

interface ProjectTiltCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function ProjectTiltCard({
  children,
  className = "",
  index = 0,
}: ProjectTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), {
    stiffness: 100,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), {
    stiffness: 100,
    damping: 15,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className={`${className}`}
    >
      {/* Inner shadow for depth */}
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {children}

        {/* Shine overlay */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: useTransform(
              [x, y],
              ([latestX, latestY]) =>
                `radial-gradient(circle at ${(latestX as number) * 100}% ${
                  (latestY as number) * 100
                }%, rgba(239, 68, 68, 0.15) 0%, transparent 60%)`
            ),
            transform: "translateZ(1px)",
          }}
        />

        {/* Highlight edge effect */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            boxShadow: useTransform([x, y], ([latestX, latestY]) => {
              const xOffset = ((latestX as number) - 0.5) * 20;
              const yOffset = ((latestY as number) - 0.5) * 20;
              return `${xOffset}px ${yOffset}px 40px rgba(0, 0, 0, 0.3)`;
            }),
            transform: "translateZ(2px)",
          }}
        />
      </div>
    </motion.div>
  );
}
