"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
  FaStackOverflow,
  FaMoon,
  FaSun,
  FaEnvelope,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useTheme } from "./ThemeProvider";
import ScrollAnimation from "./components/ScrollAnimation";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";
import WebVitals from "./components/WebVitals";
import BentoGrid from "./components/BentoGrid";
import {
  MagneticButton,
  AnimatedIcon,
  ShineButton,
  FloatingElement,
  GlowCard,
} from "./components/MicroInteractions";
import { ProjectTiltCard } from "./components/TiltCard";
import { projects } from "./data/projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeCertification, setActiveCertification] = useState(
    "Amazon ML Summer School"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  // Smooth scroll function
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const techStack = [
    "Python, Java, C/C++, JavaScript (ES6+)",
    "Django, Flask, FastAPI, React.js",
    "RESTful APIs & Microservices",
    "SQL, MySQL, PostgreSQL",
    "Docker, Git, CI/CD Pipelines",
    "AWS, GCP, and Azure (exposure)",
    "Machine Learning (Scikit-learn, TensorFlow, OpenCV)",
    "Data Structures, Algorithms & System Design",
  ];

  const certifications = [
    {
      name: "Amazon ML Summer School",
      title: "Amazon ML Summer School 2025",
      organization: "Amazon",
      date: "August 09 - August 31, 2025",
      description:
        "Intensive 8-module ML program with Amazon Scientists covering key topics from supervised learning to reinforcement learning.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      link: "https://drive.google.com/drive/folders/1ah2G7UCy3CFaDita5FEhbUOgh0veWb-v",
      modules: [
        "Supervised Learning",
        "Deep Neural Networks",
        "Dimensionality Reduction",
        "Unsupervised Learning",
        "Generative AI & LLMs",
        "Sequential Learning",
        "Causal Inferencing",
        "Reinforcement Learning",
      ],
    },
    {
      name: "Oracle Cloud Infrastructure",
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      organization: "Oracle",
      date: "Issued: September 23, 2025 | Expires: September 23, 2027",
      description:
        "Foundational knowledge of OCI services including Compute, Storage, Networking, Database, Security, and cost management.",
      logo: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25FNDCFAV1.png",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=781B241A97C3E7AD0160088E3738853275F77284709E31A9DB161BD8F5C67908",
      skills: [
        "Understanding of basic cloud concepts",
        "Core OCI services (Compute, Storage, Networking, Database)",
        "OCI security and identity model",
        "OCI billing and cost management",
        "Governance and administration",
      ],
    },
    {
      name: "Oracle Data Platform",
      title: "Oracle Data Platform 2025 Certified Foundations Associate",
      organization: "Oracle",
      date: "Issued: August 29, 2025 | Expires: August 29, 2027",
      description:
        "Expertise in Oracle Cloud data management services including Autonomous Database, MySQL, NoSQL, and Analytics.",
      logo: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25DCFAV2.png",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4874FD3F4C7FE5A1334B3CBB2F66A01E77FB85219B4292705F66D16D188F4373",
      skills: [
        "Oracle Cloud Data Management Principles",
        "Autonomous Database tools and Instance Creation",
        "MySQL and NoSQL services",
        "OCI Analytics and AI Data Services",
        "Migration and Upgrade options",
      ],
    },
    {
      name: "Oracle AI Foundations",
      title:
        "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      organization: "Oracle",
      date: "Issued: August 25, 2025 | Expires: August 25, 2027",
      description:
        "Knowledge of AI/ML fundamentals including deep learning, generative AI, LLMs, and OCI AI services.",
      logo: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25AICFAV1.png",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1D21ECDA685BD7873AF7A17AAED352A9FE44E3768A090E313BFA31ECA43E2D2E",
      skills: [
        "AI and ML fundamentals",
        "Supervised and unsupervised learning",
        "Deep learning (CNNs, RNNs, LSTMs)",
        "Generative AI and large language models",
        "OCI AI and ML services",
      ],
    },
  ];

  const workExperience = [
    {
      role: "Backend Engineering Intern",
      company: "HappyFox",
      location: "Chennai, India",
      period: "Jan 2025 – March 2025",
      description:
        "Designed and optimized RESTful APIs in Python & Django, built IoT-based telemetry dashboards, and collaborated with cross-functional teams to deliver production-ready features.",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='%23FF9800' d='M40 30 L100 70 L160 30 L160 90 L100 130 L40 90 Z'/%3E%3Cpath fill='%23FF5722' d='M100 70 L160 30 L160 90 L100 130 Z'/%3E%3Cpath fill='%23FFC107' d='M40 90 L100 130 L160 90 L160 150 L100 190 L40 150 Z'/%3E%3Cpath fill='%23FF9800' d='M100 130 L160 90 L160 150 L100 190 Z'/%3E%3C/svg%3E",
      achievements: [
        "Designed and optimized RESTful APIs in Python & Django, reducing latency by 30% for SaaS applications",
        "Integrated APIs with React dashboards, improving usability for 10K+ customers",
        "Built IoT-based telemetry dashboards for server monitoring, enabling real-time performance insights",
        "Collaborated with cross-functional teams (frontend, infrastructure, product) in Agile sprints to deliver production-ready features",
      ],
      technologies: ["Python", "Django", "RESTful APIs", "React", "IoT", "Agile"],
    },
    {
      role: "ML Summer School Participant",
      company: "Amazon",
      location: "Virtual",
      period: "Aug 2025 – Present",
      description:
        "Selected for Amazon's flagship ML program focusing on model building & deployment with exposure to cloud scalability and large-scale data pipelines.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      achievements: [
        "Selected for Amazon's flagship ML program focusing on model building & deployment",
        "Gained exposure to cloud scalability, large-scale data pipelines, and ethical AI principles",
        "Learning advanced ML concepts from Amazon Scientists and industry experts",
        "Working on real-world ML projects with production-grade infrastructure",
      ],
      technologies: ["Machine Learning", "AWS", "Data Pipelines", "Model Deployment", "Python"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      {/* Web Vitals Monitoring */}
      <WebVitals />

      {/* Loading Screen */}
      <LoadingScreen />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.reload();
                }}
                className="cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 border-red-500 flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-red-500 font-bold text-lg sm:text-xl">a</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-8 items-center">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 transition-colors"
              >
                <span className="text-red-500 font-mono">01.</span> About
              </a>
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, "experience")}
                className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 transition-colors"
              >
                <span className="text-red-500 font-mono">02.</span> Experience
              </a>
              <a
                href="#work"
                onClick={(e) => scrollToSection(e, "work")}
                className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 transition-colors"
              >
                <span className="text-red-500 font-mono">03.</span> Work
              </a>
              <a
                href="#certifications"
                onClick={(e) => scrollToSection(e, "certifications")}
                className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 transition-colors"
              >
                <span className="text-red-500 font-mono">04.</span> Certifications
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 transition-colors"
              >
                <span className="text-red-500 font-mono">05.</span> Contact
              </a>
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-all duration-300 p-2 hover:scale-110 hover:rotate-12"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
                </button>
              )}
              <MagneticButton>
                <a
                  href="https://drive.google.com/drive/folders/197mL76kxQGfGWSnq15lrZ8Hy-JLmhX9l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
                >
                  Resume
                </a>
              </MagneticButton>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex lg:hidden items-center gap-4">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-all duration-300 p-2"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors p-2"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a
              href="#about"
              onClick={(e) => {
                scrollToSection(e, "about");
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors py-2"
            >
              <span className="text-red-500 font-mono">01.</span> About
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                scrollToSection(e, "experience");
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors py-2"
            >
              <span className="text-red-500 font-mono">02.</span> Experience
            </a>
            <a
              href="#work"
              onClick={(e) => {
                scrollToSection(e, "work");
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors py-2"
            >
              <span className="text-red-500 font-mono">03.</span> Work
            </a>
            <a
              href="#certifications"
              onClick={(e) => {
                scrollToSection(e, "certifications");
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors py-2"
            >
              <span className="text-red-500 font-mono">04.</span> Certifications
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                scrollToSection(e, "contact");
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors py-2"
            >
              <span className="text-red-500 font-mono">05.</span> Contact
            </a>
            <a
              href="https://drive.google.com/drive/folders/197mL76kxQGfGWSnq15lrZ8Hy-JLmhX9l"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center border-2 border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-500 hover:text-white transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Side Social Links */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6">
        <AnimatedIcon delay={0}>
          <a
            href="mailto:akshit7kotnala@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>
        </AnimatedIcon>
        <AnimatedIcon delay={0.1}>
          <a
            href="https://github.com/Akshit7kotnala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
        </AnimatedIcon>
        <AnimatedIcon delay={0.2}>
          <a
            href="https://www.linkedin.com/in/akshit7kotnala/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </AnimatedIcon>
        <AnimatedIcon delay={0.3}>
          <a
            href="https://www.instagram.com/akshit_kotnala_962/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
        </AnimatedIcon>
        <div className="w-[2px] h-20 bg-gray-400 dark:bg-gray-600 mt-4"></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <div className="max-w-4xl">
              <p className="text-red-500 font-mono mb-4 sm:mb-6 text-sm sm:text-base">Hello there! I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Akshit Kotnala
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-700 dark:text-gray-300">
                Building intelligent systems, one line of code at a time.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                I'm a passionate software engineer driven by curiosity and
                innovation. With experience in backend development, machine
                learning, and cloud-based systems, I love turning ideas into
                scalable real-world solutions. Explore my work and see how I'm
                crafting the next wave of smart, reliable, and future-ready
                technology. 🚀
              </p>
              <button className="border-2 border-red-500 text-red-500 px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-red-50 dark:hover:bg-red-950 transition-colors text-sm sm:text-base">
                Check out my Blogs!
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Bento Grid Section */}
      <BentoGrid />

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 lg:pl-32 lg:pr-32 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
              <span className="text-red-500 font-mono">01.</span> About Me
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollAnimation direction="left" delay={0.2}>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  I'm Akshit Kotnala, a passionate Software Engineer and
                  final-year Information Technology student at{" "}
                  <a
                    href="#"
                    className="text-red-500 hover:underline dark:hover:text-red-500"
                  >
                    Army Institute of Technology, Pune
                  </a>{" "}
                  (CGPA 9.25). I love building scalable, impactful, and
                  intelligent systems that solve real-world problems.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Over the past few years, I've worked across diverse domains —
                  backend development, cloud computing, data-driven systems, and
                  machine learning. I've interned as a Backend Engineering
                  Intern at{" "}
                  <a
                    href="#"
                    className="text-red-500 hover:underline dark:hover:text-red-500"
                  >
                    HappyFox
                  </a>
                  , where I optimized RESTful APIs and built real-time telemetry
                  dashboards. My projects range from an AI-powered Gym Assistant
                  and Fake News Detection System to smart data-driven
                  applications — each one strengthening my passion for crafting
                  efficient, user-focused solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  I'm also a GATE 2025 qualifier, SIH Hackathon finalist, and
                  recipient of awards like the Bal Shakti Puruskar and UdChalo
                  Scholarship. These experiences have shaped my analytical
                  thinking, problem-solving, and leadership abilities — all of
                  which I bring to every project and team I'm part of.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Beyond code, I enjoy mentoring peers, organizing technical
                  events, and exploring new technologies that challenge me to
                  grow. Whether it's building distributed systems, optimizing
                  backend logic, or experimenting with AI — I'm always eager to
                  learn, innovate, and create something meaningful.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="flex flex-col items-center">
                <div className="relative group mb-8">
                  <div className="w-80 h-80 border-4 border-red-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                    <Image
                      src="/profile.jpg"
                      alt="Akshit Kotnala"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-500"
                      priority
                      quality={90}
                    />
                  </div>
                </div>
                <div className="w-full max-w-md">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">
                    Here are a few technologies I've been working with recently:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {techStack.map((tech, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-red-500">▸</span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              <span className="text-red-500 font-mono">02.</span> Where I've Worked
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
              Professional journey building scalable systems and intelligent solutions
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {workExperience.map((job, index) => (
              <ScrollAnimation key={job.company} direction="up" delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 hover:border-red-500/50 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                  {/* Company Logo & Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 p-2 flex items-center justify-center flex-shrink-0 overflow-hidden group">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {job.role}
                      </h3>
                      <p className="text-red-500 font-semibold mb-1">{job.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-red-500 mt-1 flex-shrink-0">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium text-red-500 bg-red-50 dark:bg-red-950 rounded-full border border-red-200 dark:border-red-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="work"
        className="py-20 px-6 lg:px-32 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              <span className="text-red-500 font-mono">03.</span> Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
              Some things I've built
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((p, index) => (
              <ProjectTiltCard key={p.title} index={index} className="h-full">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-6 bg-white dark:bg-gray-900 h-full transition-all duration-300 hover:border-red-500/50 shadow-lg flex flex-col">
                  <div className="mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                    {p.bullets[0]}
                  </p>
                  <ul className="mb-4 list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {p.bullets.slice(1).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="flex gap-2 flex-wrap mb-4 mt-auto">
                    {p.stack.map((tech) => (
                      <span key={tech} className="text-xs text-red-500 px-2 sm:px-3 py-1 bg-red-50 dark:bg-red-950 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </ProjectTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-20 px-6 lg:pl-32 lg:pr-32 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
              <span className="text-red-500 font-mono">04.</span> Certifications
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="flex flex-col md:grid md:grid-cols-[300px,1fr] gap-8">
              {/* Certification Tabs */}
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                {certifications.map((cert, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCertification(cert.name)}
                    className={`text-left px-4 sm:px-6 py-3 border-l-4 transition-all whitespace-nowrap md:whitespace-normal flex-shrink-0 md:flex-shrink text-sm sm:text-base ${
                      activeCertification === cert.name
                        ? "border-red-500 bg-red-50 dark:bg-red-950 text-red-500"
                        : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {cert.name}
                  </button>
                ))}
              </div>

              {/* Certification Content */}
              <div>
                {certifications
                  .filter((cert) => activeCertification === cert.name)
                  .map((cert, index) => (
                    <div key={index} className="animate-fadeIn">
                      {/* Logo and Title */}
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-24 h-24 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center p-2 border border-gray-200 dark:border-gray-700 transition-all duration-300 flex-shrink-0 group">
                          <Image
                            src={cert.logo}
                            alt={cert.title}
                            width={96}
                            height={96}
                            className="w-full h-full object-contain filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                            loading="lazy"
                            quality={85}
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                            {cert.title}
                          </h3>
                          <p className="text-red-500 font-semibold mb-2">
                            {cert.organization}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {cert.date}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {cert.description}
                      </p>

                      {/* Skills/Modules List */}
                      {cert.modules && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                            Program Modules:
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {cert.modules.map((module, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">▸</span>
                                <span className="text-gray-600 dark:text-gray-400">
                                  {module}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {cert.skills && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                            Key Skills:
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {cert.skills.map((skill, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">▸</span>
                                <span className="text-gray-600 dark:text-gray-400">
                                  {skill}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* View Credential Link */}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-50 dark:hover:bg-red-950 transition-colors font-medium"
                      >
                        View Credential →
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:pl-32 lg:pr-32">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
              <span className="text-red-500 font-mono">05.</span> Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-red-500 text-red-500 px-8 py-3 rounded hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
            >
              Say Hello
            </a>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Animated Background Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[20%] animate-pulse anim-delay-0"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[60%] animate-pulse anim-delay-1"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[60%] left-[80%] animate-pulse anim-delay-2"></div>
          <div className="absolute w-1 h-1 bg-red-400 rounded-full top-[20%] right-[30%] animate-pulse anim-delay-15"></div>
          <div className="absolute w-1 h-1 bg-red-400 rounded-full bottom-[40%] left-[40%] animate-pulse anim-delay-05"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-32 py-16 relative z-10">
          <ScrollAnimation direction="up">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Brand Section with Mountain Logo */}
              <div className="lg:col-span-2">
                <div className="flex items-start gap-4 mb-6">
                  {/* Mountain-style Logo */}
                  <div className="relative w-20 h-20 flex items-center justify-center opacity-80">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient
                          id="mountainGrad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#dc2626" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#991b1b" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>
                      {/* Mountain peaks */}
                      <path
                        d="M 20 80 L 35 45 L 50 80 Z"
                        fill="url(#mountainGrad)"
                        opacity="0.6"
                      />
                      <path
                        d="M 35 80 L 50 35 L 65 80 Z"
                        fill="url(#mountainGrad)"
                        opacity="0.8"
                      />
                      <path
                        d="M 50 80 L 65 40 L 80 80 Z"
                        fill="url(#mountainGrad)"
                        opacity="0.7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Akshit Kotnala
                    </h2>
                    <p className="text-gray-400 italic">Stories of Success</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md mb-6">
                  Software Engineer passionate about building intelligent
                  systems, scalable solutions, and creating impactful digital
                  experiences.
                </p>
                {/* Social Icons */}
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/akshit7kotnala/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-10 h-10 bg-gray-700/50 hover:bg-red-500/20 border border-gray-600 hover:border-red-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <FaLinkedin className="text-gray-400 group-hover:text-red-400 text-xl transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/akshit_kotnala_962/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="w-10 h-10 bg-gray-700/50 hover:bg-red-500/20 border border-gray-600 hover:border-red-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <FaInstagram className="text-gray-400 group-hover:text-red-400 text-xl transition-colors" />
                  </a>
                  <a
                    href="https://github.com/Akshit7kotnala"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-10 h-10 bg-gray-700/50 hover:bg-red-500/20 border border-gray-600 hover:border-red-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <FaGithub className="text-gray-400 group-hover:text-red-400 text-xl transition-colors" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                  Quick links
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "Write article", href: "#about", section: "about" },
                    {
                      name: "Request article",
                      href: "#experience",
                      section: "experience",
                    },
                    { name: "Videos", href: "#work", section: "work" },
                    {
                      name: "Our story",
                      href: "#certifications",
                      section: "certifications",
                    },
                    { name: "Dev team", href: "#contact", section: "contact" },
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.section)}
                        className="text-gray-400 hover:text-red-400 transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                  Connect
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:akshit7kotnala@gmail.com"
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm block"
                  >
                    akshit7kotnala@gmail.com
                  </a>
                  <a
                    href="https://github.com/Akshit7kotnala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm block"
                  >
                    GitHub Profile
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akshit7kotnala/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm block"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-700/50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm order-2 md:order-1">
                  Made with <span className="text-red-400">Love</span> and{" "}
                  <span className="text-red-400">Akshit</span> by{" "}
                  <span className="font-semibold text-gray-300">OSS Club</span>
                </p>
                <div className="flex items-center gap-6 text-sm order-1 md:order-2">
                  <p className="text-gray-500">
                    ©2025 Open Source Software Club All rights reserved
                  </p>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  );
}
