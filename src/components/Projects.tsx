import React, { useState } from 'react';
import { Sparkles, Layers, ArrowUpRight, Folder, GitBranch, Terminal, Globe, Filter } from 'lucide-react';
import { projects, Project } from '../data';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'WebAR / Frontend' },
    { value: 'integration', label: 'Integrations & Shopify' },
    { value: 'backend', label: 'Backend / Databases' },
    { value: 'fullstack', label: 'Fullstack / Mobile' },
  ];

  return (
    <div className="space-y-8">
      {/* Filters Toolbar */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Layers size={18} className="text-sky-400" />
            Engineering Showroom
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Browse major projects by domain and structural category.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setActiveCategory(c.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5 ${
                activeCategory === c.value
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/10'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {c.value === 'all' && <Filter size={12} />}
              <span>{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          // Dynamic category icons and borders
          let borderTheme = 'hover:border-sky-500/30';
          let labelBadge = 'bg-sky-500/10 text-sky-400 border border-sky-500/20';
          
          if (project.category === 'integration') {
            borderTheme = 'hover:border-indigo-500/30';
            labelBadge = 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20';
          } else if (project.category === 'backend') {
            borderTheme = 'hover:border-amber-500/30';
            labelBadge = 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
          } else if (project.category === 'fullstack') {
            borderTheme = 'hover:border-emerald-500/30';
            labelBadge = 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
          }

          return (
            <div 
              key={project.id}
              className={`bg-slate-900 border border-slate-850 hover:bg-slate-900/80 p-6 rounded-2xl transition-all relative overflow-hidden group flex flex-col justify-between ${borderTheme}`}
            >
              <div>
                {/* Visual Top Bar */}
                <div className="flex items-center justify-between pointer-events-none mb-4">
                  <div className="flex items-center gap-2">
                    <Folder size={18} className="text-slate-400 group-hover:text-sky-400 transition-colors" />
                    <span className="text-[10px] font-mono text-slate-500">PROJECT::{project.id.toUpperCase()}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${labelBadge}`}>
                    {project.category}
                  </span>
                </div>

                {/* Info block */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-slate-100 tracking-tight flex items-center gap-1.5 group-hover:text-sky-305 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Sub Bullet details */}
                <div className="mt-5 space-y-2.5">
                  {project.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-2 text-xs text-slate-350">
                      <span className="text-sky-500 shrink-0 select-none">›</span>
                      <p className="leading-relaxed text-justify">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies footer */}
              <div className="mt-6 pt-4 border-t border-slate-850/65 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-slate-950 text-[10px] text-slate-400 font-mono rounded-md border border-slate-850"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-slate-955 text-[10px] text-slate-500 font-mono rounded">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-semibold text-slate-400 group-hover:text-sky-400 transition-colors flex items-center gap-1">
                  <span>Explore system specifications</span>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-12 text-center bg-slate-900/20 border border-dashed border-slate-800 rounded-2xl">
            <p className="text-sm text-slate-400 font-semibold">No projects for this category yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
