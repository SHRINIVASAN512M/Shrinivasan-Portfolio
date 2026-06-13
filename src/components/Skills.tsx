import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Terminal, ChevronRight, X, ArrowRight } from 'lucide-react';
import { skills } from '../data';

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Core high-impact proficiencies we want to highlight in premium style
  const highlights = [
    { name: "Celigo", desc: "Enterprise Shopify B2B integrations, automated sync flows", tag: "Integration" },
    { name: "ReactJS", desc: "Modular, performance-driven web interfaces & tools", tag: "Frontend" },
    { name: "Spring Boot", desc: "Robust microservices, secure RESTful APIs", tag: "Backend" },
    { name: "Apache Kafka", desc: "High-throughput event-driven systems & queues", tag: "Distributed Systems" }
  ];

  const filteredSkills = useMemo(() => {
    return skills.map(cat => {
      // If we filtered by a category, keep only that category
      if (selectedCategory && cat.title !== selectedCategory) {
        return null;
      }
      
      const matchedItems = cat.items.filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchedItems.length === 0) {
        return null;
      }

      return {
        ...cat,
        items: matchedItems
      };
    }).filter((cat): cat is typeof skills[number] => cat !== null);
  }, [searchQuery, selectedCategory]);

  const allCategoryTitles = skills.map(cat => cat.title);

  return (
    <div className="space-y-8">
      {/* Search and Category Filter Toolbar */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Terminal size={18} className="text-sky-400" />
              Technical Stack Explorer
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Search skills or select categories to drill down into the ecosystem.
            </p>
          </div>
          
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. Kafka, Azure..."
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:border-sky-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-100"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Quick Category Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/50">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
              selectedCategory === null
                ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/10'
                : 'bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            All Categories
          </button>
          
          {allCategoryTitles.map((catTitle) => (
            <button
              key={catTitle}
              onClick={() => setSelectedCategory(catTitle)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                selectedCategory === catTitle
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/10'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {catTitle}
            </button>
          ))}
        </div>
      </div>

      {/* Flagship Highlight Cards */}
      {(!searchQuery && !selectedCategory) && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Sparkles size={12} className="text-sky-400" />
            Core Architectural Focus
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div 
                key={i} 
                className="bg-slate-900 border border-slate-800/80 hover:border-sky-500/30 p-5 rounded-2xl transition-all relative overflow-hidden group hover:-translate-y-0.5"
              >
                <div className="absolute right-4 top-4 text-[10px] uppercase font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded">
                  {h.tag}
                </div>
                <h5 className="font-bold text-slate-250 text-base">{h.name}</h5>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {h.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-slate-450 group-hover:text-sky-400 transition-colors">
                  <span>View experience items</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grid of Categorized Skill Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((cat, i) => (
          <div 
            key={i} 
            className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-500 to-indigo-505" />
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-slate-100 text-sm tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                {cat.title}
              </h4>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-950/80 px-2 py-0.5 rounded-md border border-slate-800">
                {cat.items.length} Skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {cat.items.map((item, idx) => (
                <div 
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/30 text-xs font-medium text-slate-300 transition-all hover:scale-[1.02] flex items-center gap-1.5 select-none"
                >
                  <ChevronRight size={10} className="text-sky-500/60" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredSkills.length === 0 && (
          <div className="col-span-full py-16 text-center bg-slate-900/20 border border-dashed border-slate-800 rounded-2xl">
            <Terminal size={32} className="mx-auto text-slate-600 mb-3" />
            <p className="text-sm font-semibold text-slate-400">No matching technical skills found</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for keywords like "Node", "Java", "Azure" or "Kafka".</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
              className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
