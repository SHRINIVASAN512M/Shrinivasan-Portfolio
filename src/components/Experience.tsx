import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu, FileJson, Layers, Database, Sparkles, Sliders } from 'lucide-react';
import { experiences } from '../data';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'all' | 'integration' | 'backend' | 'frontend'>('all');

  const exp = experiences[0]; // Primary workspace role

  // Sub-categorized metrics to show off technical expertise
  const categorisedBullets = {
    integration: [
      "Led end-to-end Celigo–Shopify B2B integrations, implementing SKU validation, GraphQL APIs, and customer-specific pricing workflows for reliable data synchronization.",
      "Designed and implemented secure RESTful APIs using Spring Boot and Node.js, enabling dynamic database operations and seamless integration between ERP and CRM platforms.",
    ],
    backend: [
      "Built and optimized event-driven systems using Apache Kafka, improving real-time processing capabilities and system scalability.",
      "Reduced backend API response times by approximately 40% through database query optimization, indexing strategies, and performance tuning.",
      "Managed cloud deployment processes and CI/CD pipelines, ensuring reliable releases and production stability.",
    ],
    frontend: [
      "Improved frontend development efficiency by 35% through the creation of reusable Angular components, dynamic product grids, and modular UI architectures.",
      "Developed the CoinAR WebAR Platform using ReactJS and AR.js, enabling image-based tracking and dynamic 3D model rendering for interactive customer experiences.",
      "Developed a cross-platform Service Management Application using Flutter with real-time service tracking and backend integrations."
    ]
  };

  const getFilteredBullets = () => {
    if (activeTab === 'integration') return categorisedBullets.integration;
    if (activeTab === 'backend') return categorisedBullets.backend;
    if (activeTab === 'frontend') return categorisedBullets.frontend;
    return exp.bullets;
  };

  return (
    <div className="space-y-8">
      {/* Role Intro Card */}
      <div className="bg-slate-900 border border-slate-850 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-20 translate-y-20 w-80 h-80 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-sky-500/15 text-sky-400 border border-sky-500/20">
              <Briefcase size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                Current Role
              </span>
              <h3 className="text-xl font-extrabold text-slate-100 tracking-tight mt-1">{exp.role}</h3>
              <p className="text-sm font-semibold text-slate-350 mt-0.5">{exp.company}</p>
            </div>
          </div>

          <div className="flex flex-col sm:items-end text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
              <Calendar size={13} className="text-sky-500" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5 mt-2">
              <MapPin size={13} className="text-amber-500" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Dynamic Architectural Pipeline Diagram (Integration/API proof) */}
        <div className="mt-6 p-4 sm:p-5 bg-slate-950/80 border border-slate-800/80 rounded-xl relative">
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <Cpu size={12} className="text-sky-400" />
              Core Integration Pipeline Flow
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
              Live Architecture
            </span>
          </div>

          {/* Interactive Flow visualization */}
          <div className="grid grid-cols-7 items-center text-center gap-1 sm:gap-2 pt-2 pb-1 overflow-x-auto">
            <div className="col-span-2 p-2 rounded-xl bg-slate-900 border border-slate-800 text-[10px] sm:text-xs">
              <p className="font-bold text-slate-300">Shopify B2B</p>
              <p className="text-[9px] text-slate-500 font-mono">Storefront/GraphQL</p>
            </div>
            
            <div className="flex items-center justify-center text-sky-400 animate-pulse text-sm">
              ⇄
            </div>

            <div className="col-span-1 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-[10px] sm:text-xs text-sky-305 font-bold relative group">
              <p className="font-bold text-sky-400">Celigo</p>
              <p className="text-[9px] text-slate-400 font-mono">Middleware</p>
            </div>

            <div className="flex items-center justify-center text-indigo-400 animate-pulse text-sm">
              ⇄
            </div>

            <div className="col-span-2 p-2 rounded-xl bg-slate-900 border border-slate-800 text-[10px] sm:text-xs">
              <p className="font-bold text-slate-300">Spring / Node API</p>
              <p className="text-[9px] text-slate-400 font-mono">Kafka Queue</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 text-center">
            Synchronizes customer catalogs, tiered contract pricing matrices, and real-time stock levels safely.
          </p>
        </div>

        {/* Filter Pill Actions */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              activeTab === 'all'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20'
                : 'bg-slate-950 text-slate-400 border border-slate-850 hover:border-slate-800 hover:text-slate-250'
            }`}
          >
            All Contributions ({exp.bullets.length})
          </button>
          <button
            onClick={() => setActiveTab('integration')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              activeTab === 'integration'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20'
                : 'bg-slate-950 text-slate-400 border border-slate-850 hover:border-slate-850 hover:text-slate-250'
            }`}
          >
            Integrations & Middleware
          </button>
          <button
            onClick={() => setActiveTab('backend')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              activeTab === 'backend'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20'
                : 'bg-slate-950 text-slate-400 border border-slate-850 hover:border-slate-850 hover:text-slate-250'
            }`}
          >
            Distributed Systems & Kafka
          </button>
          <button
            onClick={() => setActiveTab('frontend')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              activeTab === 'frontend'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20'
                : 'bg-slate-950 text-slate-400 border border-slate-850 hover:border-slate-850 hover:text-slate-250'
            }`}
          >
            Frontend & Mobile
          </button>
        </div>

        {/* Dynamic Achievements Stack */}
        <div className="mt-6 space-y-4">
          {getFilteredBullets().map((bullet, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/40 hover:bg-slate-950/80 border border-transparent hover:border-slate-850 transition-all group/bullet"
            >
              <div className="mt-1 p-0.5 rounded bg-sky-500/10 text-sky-400 group-hover/bullet:scale-110 transition-transform">
                <CheckCircle2 size={14} />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Tag Panel */}
      <div className="bg-slate-900/40 border border-slate-850 rounded-2xl p-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-4">
          <Database size={13} className="text-sky-400" />
          Stack Implemented on Current Work
        </h4>
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono rounded-lg hover:border-sky-500/20 transition-all select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
