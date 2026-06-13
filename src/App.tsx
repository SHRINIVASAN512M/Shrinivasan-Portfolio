import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, Code, Database, FileText, MapPin, ExternalLink, Printer, 
  Linkedin, Github, Mail, Phone, ArrowUpRight, Copy, Check,
  Cpu, Terminal, Zap, Shield, Sparkles, ChevronRight, ChevronLeft, X, ArrowRight,
  Globe, GraduationCap, Calendar, Compass
} from 'lucide-react';

import { 
  headerData, professionalSummary, experiences, projects, skills, statistics, education 
} from './data';
import ResumeViewer from './components/ResumeViewer';
// @ts-ignore
import profilePic from "./assets/images/profile_pic_shrinivasan_1781374703848.jpg";

const CAROUSEL_SLIDES = [
  {
    badge: "CORE STACK FOCUS",
    title: "Java & Full Stack Platform Engineer",
    subtitle: "High-Throughput Services & Enterprise APIs",
    description: "Designing structured backend engines in Java (Spring Boot) and modular interfaces in React & Angular. Specializes in JPA query optimization, low-latency API design, and multi-node database architectures.",
    tech: ["Java", "Spring Boot", "ReactJS", "Angular", "PostgreSQL"],
    metric: "40% Boost",
    metricLabel: "In SQL Query Execution Speed"
  },
  {
    badge: "RELIABILITY STACK FOCUS",
    title: "B2B Sync & Integration Specialist",
    subtitle: "Event-Driven Schedulers & Stable Pipelines",
    description: "Constructing robust transactional exchange frameworks replacing manual ERP/CRM friction points. Leverages Apache Kafka message brokers and secure GraphQL pipelines to support high commercial operation volumes.",
    tech: ["Java", "Apache Kafka", "Shopify GraphQL UI", "Celigo Automation"],
    metric: "99.9% Rate",
    metricLabel: "Of Daily Automated Sync Accuracy"
  },
  {
    badge: "FRONTEND STACK FOCUS",
    title: "Modern UI & Interactive WebAR Architect",
    description: "Refining visual spaces with custom high-standard typography and clean reusable component models. Experienced in performance-optimized states, WebGL 3D image tracking rendering, and cross-platform mobile apps.",
    tech: ["ReactJS", "TypeScript", "Flutter Mobile", "AR.js / Three.js"],
    metric: "35% Faster",
    metricLabel: "Developer Collaboration & Setup Velocity"
  }
];

export default function App() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play timer for the header carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const currentRole = experiences[0];

  return (
    <div className="min-h-screen bg-[#090f1d] text-slate-200 flex flex-col antialiased font-sans selection:bg-sky-500/30 selection:text-sky-200">
      
      {/* Top Simple Utility Bar */}
      <div className="no-print bg-[#0d1425] border-b border-slate-800/60 px-4 sm:px-8 py-2.5 text-xs text-slate-400 font-medium">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse inline-block" />
            <span>Currently active in Chennai • {headerData.availability}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">Enterprise Java & API Orchestrations</span>
            <span className="hidden sm:inline font-mono text-[10px] text-slate-500">ENGINE: V2.5.0</span>
          </div>
        </div>
      </div>

      {/* Main Container - Framed conservatively with beautiful whitespace */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-12 py-12 sm:py-20 space-y-16 sm:space-y-24">
        
        {/* HERO TITLE HEADER - Clean, spacious layout with elegant presentation */}
        <section className="flex flex-col md:flex-row gap-8 items-center border-b border-slate-800/60 pb-10">
          
          {/* Circular Portrait Image */}
          <div className="relative group shrink-0">
            {/* Ambient blue border ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
            <img
              src={profilePic}
              alt="Shrinivasan Murugesan"
              referrerPolicy="no-referrer"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-slate-800 relative z-10 select-none brightness-95 contrast-105 hover:brightness-105 transition-all duration-300 shadow-lg"
            />
          </div>

          {/* Details Column with custom high-standard typography */}
          <div className="text-center md:text-left space-y-3">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-serif">
                {headerData.name}
              </h1>
              <p className="text-sm font-semibold tracking-wider text-sky-400 font-mono uppercase">
                {headerData.title}
              </p>
            </div>

            {/* Direct Contact Links - Not boxed, styled with standard typography */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-5 gap-y-2 text-xs text-slate-400 font-medium pt-1">
              <button 
                onClick={() => copyToClipboard(headerData.email, 'email')}
                className="flex items-center gap-1.5 hover:text-sky-300 transition-colors group cursor-pointer"
                title="Click to copy email address"
              >
                <Mail size={13} className="text-slate-500 group-hover:text-sky-400" />
                <span className="font-mono">{headerData.email}</span>
                {copiedField === 'email' ? (
                  <span className="text-[10px] text-sky-400 font-semibold">(copied)</span>
                ) : (
                  <span className="text-[10px] text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">(copy)</span>
                )}
              </button>

              <span className="hidden sm:inline text-slate-700">•</span>

              <button 
                onClick={() => copyToClipboard(headerData.phone, 'phone')}
                className="flex items-center gap-1.5 hover:text-sky-300 transition-colors group cursor-pointer"
                title="Click to copy phone number"
              >
                <Phone size={13} className="text-slate-500 group-hover:text-sky-400" />
                <span className="font-mono">{headerData.phone}</span>
                {copiedField === 'phone' ? (
                  <span className="text-[10px] text-sky-400 font-semibold">(copied)</span>
                ) : (
                  <span className="text-[10px] text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">(copy)</span>
                )}
              </button>

              <span className="hidden sm:inline text-slate-700">•</span>

              <span className="flex items-center gap-1.5 text-slate-400">
                <MapPin size={13} className="text-slate-500" />
                <span>{headerData.location}</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Open to Relocation</span>
              </span>
            </div>

            {/* Social Anchor Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 pt-1">
              <a 
                href={headerData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-[#0f172a] border border-slate-800 rounded-lg px-2.5 py-1.5 transition-all hover:border-slate-700"
              >
                <Linkedin size={13} className="text-sky-400" />
                <span>LinkedIn</span>
                <ExternalLink size={10} className="text-slate-500" />
              </a>

              <a 
                href={headerData.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-[#0f172a] border border-slate-800 rounded-lg px-2.5 py-1.5 transition-all hover:border-slate-700"
              >
                <Github size={13} className="text-slate-400" />
                <span>GitHub</span>
                <ExternalLink size={10} className="text-slate-500" />
              </a>

              <button 
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 hover:bg-sky-500/10 px-2.5 py-1.5 rounded-lg border border-sky-500/20 transition-all cursor-pointer"
              >
                <Printer size={13} />
                <span>Print-Ready CV</span>
              </button>
            </div>
          </div>
        </section>

        {/* HERO CAROUSEL SECTION - Sleek dynamic sliders */}
        <section className="space-y-4 no-print">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold flex items-center gap-1.5">
              <Sparkles size={11} className="text-sky-400" />
              Dynamic Expertise Focus
            </span>
            
            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-1.5">
              <button 
                onClick={handlePrevSlide}
                className="p-1.5 bg-[#0f172a] hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-md transition-all cursor-pointer"
                title="Previous Slide"
              >
                <ChevronLeft size={14} />
              </button>
              <span className="text-xs font-mono text-slate-500">
                {currentSlide + 1} / {CAROUSEL_SLIDES.length}
              </span>
              <button 
                onClick={handleNextSlide}
                className="p-1.5 bg-[#0f172a] hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-md transition-all cursor-pointer"
                title="Next Slide"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Carousel Slide Stage */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0c1328] to-[#0a1021] border border-slate-800/80 rounded-2xl p-6 sm:p-8 min-h-[190px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/40 pb-2">
                  <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-sky-400">
                    {CAROUSEL_SLIDES[currentSlide].badge}
                  </span>
                  <div className="flex gap-1.5">
                    {CAROUSEL_SLIDES[currentSlide].tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-sky-950/40 border border-sky-800/20 text-[9px] font-mono text-sky-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white font-serif">
                    {CAROUSEL_SLIDES[currentSlide].title}
                  </h3>
                  {CAROUSEL_SLIDES[currentSlide].subtitle && (
                    <p className="text-xs text-slate-400 font-mono">
                      {CAROUSEL_SLIDES[currentSlide].subtitle}
                    </p>
                  )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl font-light">
                  {CAROUSEL_SLIDES[currentSlide].description}
                </p>

                {/* Prominent feature badge or metric highlighting Java stack */}
                <div className="pt-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-450 bg-sky-400 animate-ping inline-block" />
                  <span className="text-xs text-slate-400">
                    Proven Core Metrics: <strong className="text-sky-305 text-white font-semibold">{CAROUSEL_SLIDES[currentSlide].metric}</strong> — {CAROUSEL_SLIDES[currentSlide].metricLabel}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Bullet Dots */}
            <div className="flex justify-center gap-2 pt-6">
              {CAROUSEL_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentSlide ? 'w-8 bg-sky-400' : 'w-2 bg-slate-800'
                  }`}
                  aria-label={`Go to slide ${i+1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CORE LANDMARKS / HIGH-STANDARD METRIC BAR */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-y border-slate-800/60">
          {statistics.map((stat, idx) => (
            <div key={idx} className="space-y-1 text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                {stat.description}
              </div>
            </div>
          ))}
        </section>

        {/* PROFESSIONAL SUMMARY */}
        <section className="space-y-3 text-justify">
          <h2 className="text-xs uppercase tracking-widest font-mono font-bold text-slate-400">
            Professional Summary
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-300 font-light font-sans">
            {professionalSummary}
          </p>
        </section>

        {/* WORK HISTORY CHRONOLOGY */}
        <section className="space-y-8 text-left">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#38bdf8] font-mono">
              Work History
            </span>
            <h2 className="text-2xl font-extrabold text-white tracking-tight font-serif">
              Engineering Chronology
            </h2>
          </div>

          <div className="relative pl-6 border-l-2 border-slate-800 space-y-8">
            <div className="relative">
              {/* Bullet node */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-sky-400 border-4 border-[#090f1d]" />

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                  <div>
                    <h3 className="text-base font-bold text-slate-100">
                      {currentRole.role}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400">
                      {currentRole.company} — {currentRole.location}
                    </p>
                  </div>
                  <span className="self-start sm:self-auto text-xs font-mono font-bold text-sky-400 bg-sky-950/40 border border-sky-800/20 px-2.5 py-1 rounded">
                    {currentRole.period}
                  </span>
                </div>

                <p className="text-xs text-slate-400 italic">
                  Leading modular core development and robust Java synchronizations across multi-million enterprise platforms (CoinAR, Level10, Fairbank Equipment).
                </p>

                <ul className="space-y-3 pt-2">
                  {currentRole.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-xs sm:text-sm text-slate-300 text-justify leading-relaxed">
                      <span className="text-sky-400 select-none font-mono font-bold">0{idx + 1}.</span>
                      <p>
                        {/* Highlights Java, Spring and critical technologies */}
                        {bullet.split(/(Angular|ReactJS|Spring Boot|Java|JPA\/Hibernate|MySQL|PostgreSQL|Celigo|Shopify GraphQL UI|Apache Kafka|CoinAR WebAR|Flutter|RESTful APIs)/g).map((part, i) => {
                          const isHigh = ["Angular", "ReactJS", "Spring Boot", "Java", "JPA/Hibernate", "MySQL", "PostgreSQL", "Celigo", "Shopify GraphQL UI", "Apache Kafka", "CoinAR WebAR", "Flutter", "RESTful APIs"].includes(part);
                          return isHigh ? <strong key={i} className="font-semibold text-sky-400">{part}</strong> : part;
                        })}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WORKSPACE PROJECTS */}
        <section className="space-y-8 text-left">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#38bdf8] font-mono">
              Project Showroom
            </span>
            <h2 className="text-2xl font-extrabold text-white tracking-tight font-serif">
              Engineering Contributions
            </h2>
            <p className="text-xs text-slate-400 max-w-xl">
              Clean architecture implementations using advanced database tuning strategies and modular state pipelines.
            </p>
          </div>

          {/* Simple Clean List without bulky boxes */}
          <div className="divide-y divide-slate-800/60">
            {projects.map((proj) => (
              <div key={proj.id} className="py-6 first:pt-0 last:pb-0 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold text-slate-105 text-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    {proj.title}
                  </h3>
                  <span className="text-[10px] font-mono text-sky-305 text-sky-400 uppercase font-semibold">
                    {proj.category} WORKSPACE
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  {proj.description}
                </p>

                <div className="space-y-2 pl-4">
                  {proj.bullets.map((b, i) => (
                    <div key={i} className="flex gap-2 text-xs text-slate-400 leading-relaxed text-justify">
                      <span className="text-sky-400 shrink-0 select-none">›</span>
                      <p>{b}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800/80 text-[10px] text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DETAILED SKILLS LIST */}
        <section className="space-y-8 text-left">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#38bdf8] font-mono">
              Ecosystem
            </span>
            <h2 className="text-2xl font-extrabold text-white tracking-tight font-serif">
              Technical Stack & Skill Set
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            {skills.map((cat, idx) => (
              <div key={idx} className="space-y-2 border-b border-slate-800/40 pb-4">
                <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 font-mono flex items-center gap-1.5">
                  <span className="w-1 h-3 bg-sky-450 bg-sky-450 bg-sky-400 rounded-sm inline-block" />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.items.map((item) => (
                    <span 
                      key={item}
                      className="text-xs text-slate-300 font-medium font-sans flex items-center gap-1"
                    >
                      {/* Highlight Java to prioritize */}
                      <span className={item.includes("Java") ? "text-sky-305 text-white font-bold" : ""}>{item}</span>
                      <span className="text-slate-600 last:hidden">,</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACADEMICS */}
        <section className="space-y-6 text-left border-t border-slate-800/60 pt-12">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#38bdf8] font-mono">
              Academic Background
            </span>
            <h2 className="text-2xl font-extrabold text-white tracking-tight font-serif">
              Education
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {education.degree}
              </h3>
              <p className="text-xs font-semibold text-slate-400 pt-0.5">
                {education.institution}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/40 border border-sky-800/20 px-2.5 py-1 rounded shrink-0">
              {education.period}
            </span>
          </div>
        </section>

        {/* CONTACT PORTAL */}
        <section className="bg-gradient-to-br from-[#0c1328] to-[#0a1021] border border-slate-800/80 rounded-2xl p-6 sm:p-10 space-y-6 text-center no-print">
          <div className="max-w-md mx-auto space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 font-mono bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/20 inline-block">
              Opportunity Portal
            </span>
            <h3 className="text-xl font-bold text-white font-serif">
              Let's Coordinate Directly
            </h3>
            <p className="text-xs sm:text-sm text-slate-350 text-slate-300 leading-relaxed">
              Skip traditional bulk lists. Reach me directly to connect for solid Java systems development, integration pipelines, and full stack contributions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a 
              href={`mailto:${headerData.email}?subject=Collaboration%20Inquiry`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-[#090f1d] hover:text-[#090f1d] font-bold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer text-center"
            >
              <Mail size={14} />
              <span>Email Me Directly</span>
            </a>

            <a 
              href={headerData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-xs tracking-wider uppercase transition-all cursor-pointer text-center"
            >
              <Linkedin size={14} className="text-sky-400" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          <p className="text-[10px] text-slate-500 font-mono pt-2 animate-pulse">
            Chennai Local Time Zone (IST • GMT+5:30) • Availability: Immediate
          </p>
        </section>

      </div>

      {/* Classic CV Printable Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs p-4 sm:p-8 flex items-start justify-center text-left"
          >
            <div className="relative w-full max-w-4xl bg-[#0d1425] border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-extrabold text-white text-lg font-serif">Original printable CV</h3>
                  <p className="text-xs text-slate-400">Perfectly formatted print layout.</p>
                </div>
                <button 
                  onClick={() => setIsResumeModalOpen(false)}
                  className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Viewer Wrapper with Light Theme Print Canvas Context */}
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-white/5 p-4">
                <ResumeViewer />
              </div>

              <div className="flex justify-end pt-2">
                <button 
                  onClick={() => setIsResumeModalOpen(false)}
                  className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-900 rounded-lg text-xs font-semibold cursor-pointer"
                >
                  Close Viewer
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Universal Footer */}
      <footer className="border-t border-slate-800/60 bg-[#070b16] py-12 px-6 text-slate-450 text-slate-500 font-mono text-[11px] text-left no-print">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-slate-350 text-slate-300 font-bold uppercase">
              {headerData.name} • {headerData.title}
            </p>
            <p className="text-[10px] text-slate-500">
              Premium Slate Dark Blue Interface Configured with Modular Component Standards.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href={headerData.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">LINKEDIN</a>
            <span>•</span>
            <a href={headerData.github} target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">GITHUB</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
