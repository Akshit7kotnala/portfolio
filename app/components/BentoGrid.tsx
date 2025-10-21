"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  FaCode,
  FaRocket,
  FaTrophy,
  FaGithub,
  FaLightbulb,
  FaCertificate,
} from "react-icons/fa";

interface BentoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  delay?: number;
  span?: "col-span-1" | "col-span-2" | "row-span-2";
}

const BentoCard = ({
  title,
  description,
  icon,
  className = "",
  delay = 0,
  span = "col-span-1",
}: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay }}
      className={`${span} ${className}`}
    >
      <div
        className="group relative h-full min-h-[200px] rounded-2xl p-6 overflow-hidden
                    bg-white/50 dark:bg-gray-800/50 
                    backdrop-blur-lg
                    border border-gray-200/50 dark:border-gray-700/50
                    hover:border-red-500/50 dark:hover:border-red-500/50
                    transition-all duration-500
                    hover:shadow-2xl hover:shadow-red-500/10
                    hover:-translate-y-1"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon */}
          <div className="text-4xl text-red-500 mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
            {description}
          </p>

          {/* Hover indicator */}
          <div className="mt-4 flex items-center gap-2 text-red-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
            <span className="text-sm font-medium">Explore</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

export default function BentoGrid() {
  const cards = [
    {
      title: "Backend Engineering",
      description:
        "Building scalable microservices and distributed systems with Go, Python, and modern cloud technologies.",
      icon: <FaCode />,
      span: "col-span-2" as const,
      delay: 0,
    },
    {
      title: "Machine Learning",
      description:
        "AI/ML enthusiast with experience in deep learning, computer vision, and NLP.",
      icon: <FaLightbulb />,
      span: "col-span-1" as const,
      delay: 0.1,
    },
    {
      title: "Open Source",
      description:
        "Active contributor to Hyperledger Fabric and various open-source projects.",
      icon: <FaGithub />,
      span: "col-span-1" as const,
      delay: 0.2,
    },
    {
      title: "National Recognition",
      description:
        "Bal Shakti Puruskar awardee, GATE 2025 Qualifier, and Smart India Hackathon finalist.",
      icon: <FaTrophy />,
      span: "col-span-2" as const,
      delay: 0.3,
    },
    {
      title: "Certifications",
      description:
        "Amazon ML Summer School 2025 and Oracle Cloud certifications in AI, Data, and Infrastructure.",
      icon: <FaCertificate />,
      span: "col-span-1" as const,
      delay: 0.4,
    },
    {
      title: "Innovation Mindset",
      description:
        "Passionate about solving real-world problems through technology and continuous learning.",
      icon: <FaRocket />,
      span: "col-span-1" as const,
      delay: 0.5,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What I Bring to the Table
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            A unique blend of technical expertise, innovation, and proven
            achievements
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {cards.map((card, index) => (
            <BentoCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              span={card.span}
              delay={card.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
