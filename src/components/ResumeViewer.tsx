import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Printer } from 'lucide-react';
import { headerData, professionalSummary, experiences, projects, skills, education } from '../data';

export default function ResumeViewer() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Action panel at top */}
      <div className="no-print bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-100 flex items-center gap-2">
            <Printer size={18} className="text-sky-400" />
            Print-Ready Professional Resume
          </h3>
          <p className="text-xs text-slate-400">
            Export a clean PDF or print a hardcopy. Styled exactly for standard A4/Letter size.
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-slate-950 font-bold text-sm rounded-lg transition-all shadow-lg shadow-sky-500/10 cursor-pointer"
        >
          <Printer size={15} />
          Print / Save as PDF
        </button>
      </div>

      {/* Styled Paper Container */}
      <div className="bg-white text-slate-900 rounded-xl shadow-2xl p-6 sm:p-12 border border-slate-200 max-w-[850px] mx-auto overflow-x-auto print:border-none print:shadow-none print:p-0 print:m-0">
        <div className="min-w-[650px] space-y-6 font-sans">
          
          {/* Header */}
          <div className="text-center border-b pb-5 border-slate-200">
            <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">{headerData.name}</h1>
            <p className="text-sm font-semibold text-sky-700 mt-1 uppercase tracking-wide">{headerData.title}</p>
            
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 mt-3 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1">
                <Phone size={12} className="text-slate-450" />
                {headerData.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail size={12} className="text-slate-450" />
                {headerData.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-slate-450" />
                {headerData.location}
              </span>
              <span>•</span>
              <a href={headerData.linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-700 underline transition-colors">
                LinkedIn
              </a>
              <span>•</span>
              <a href={headerData.github} target="_blank" rel="noreferrer" className="hover:text-sky-700 underline transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-sky-800 uppercase tracking-widest border-b pb-1 border-sky-100">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-700 text-justify">
              {professionalSummary}
            </p>
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <h2 className="text-sm font-bold text-sky-800 uppercase tracking-widest border-b pb-1 border-sky-100">
              Experience
            </h2>
            
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-xs font-semibold text-slate-700">{exp.company}, {exp.location}</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">{exp.period}</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-755 text-justify leading-relaxed">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      {/* Stylize target keywords in resume to match PDF style */}
                      {bullet.split(/(Angular|ReactJS|Spring Boot|Node\.js|MySQL|PostgreSQL|Celigo–Shopify|Apache Kafka|CoinAR WebAR|Flutter|AR\.js|RESTful APIs|3D model|response times by approximately 40%|efficient development efficiency by 35%)/g).map((part, i) => {
                        const isHighlight = ["Angular", "ReactJS", "Spring Boot", "Node.js", "MySQL", "PostgreSQL", "Celigo–Shopify", "Apache Kafka", "CoinAR WebAR", "Flutter", "AR.js", "RESTful APIs", "3D model", "response times by approximately 40%", "efficient development efficiency by 35%"].includes(part);
                        return isHighlight ? <strong key={i} className="font-semibold text-slate-900">{part}</strong> : part;
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="space-y-3">
            <h2 className="text-sm font-bold text-sky-800 uppercase tracking-widest border-b pb-1 border-sky-100">
              Projects
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <h3 className="text-xs font-bold text-slate-900">{proj.title}</h3>
                  <ul className="list-disc pl-5 space-y-0.5 text-xs text-slate-700 leading-relaxed text-justify">
                    {proj.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-sky-800 uppercase tracking-widest border-b pb-1 border-sky-100">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-1 text-xs text-slate-700">
              {skills.map((cat, i) => (
                <div key={i} className="flex gap-2">
                  <span className="font-bold text-slate-900 w-[150px] shrink-0 text-left">• {cat.title}:</span>
                  <span>{cat.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-2 pb-2">
            <h2 className="text-sm font-bold text-sky-800 uppercase tracking-widest border-b pb-1 border-sky-100">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs text-slate-700">
              <div>
                <h3 className="font-bold text-slate-900">{education.degree}</h3>
                <p className="text-slate-600 font-medium">{education.institution}</p>
              </div>
              <span className="font-semibold text-slate-600">{education.period}</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
