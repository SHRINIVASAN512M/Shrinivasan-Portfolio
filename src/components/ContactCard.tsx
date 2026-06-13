import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, ExternalLink, Globe } from 'lucide-react';
import { headerData } from '../data';

export default function ContactCard() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
      {/* Accent glow on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-sky-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 space-y-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3 animate-pulse">
            <Globe size={12} />
            {headerData.availability}
          </span>
          <h3 className="text-lg font-bold text-slate-100 tracking-tight">Direct Contact</h3>
          <p className="text-xs text-slate-400 mt-1">Get in touch directly. Tap any entry to copy.</p>
        </div>

        <div className="space-y-3">
          {/* Email */}
          <button
            onClick={() => copyToClipboard(headerData.email, 'email')}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900/50 transition-all text-left group/item"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover/item:bg-sky-500/20 transition-colors">
                <Mail size={16} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Email Address</p>
                <p className="text-sm font-medium text-slate-300 truncate font-mono">{headerData.email}</p>
              </div>
            </div>
            <div className="text-slate-500 group-hover/item:text-sky-400 transition-colors pl-2">
              {copiedField === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </div>
          </button>

          {/* Phone */}
          <button
            onClick={() => copyToClipboard(headerData.phone, 'phone')}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900/50 transition-all text-left group/item"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover/item:bg-indigo-500/20 transition-colors">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Phone Number</p>
                <p className="text-sm font-medium text-slate-300 font-mono">{headerData.phone}</p>
              </div>
            </div>
            <div className="text-slate-500 group-hover/item:text-indigo-400 transition-colors pl-2">
              {copiedField === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </div>
          </button>

          {/* Location */}
          <div className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Location</p>
                <p className="text-sm font-medium text-slate-300">{headerData.location}</p>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              In-office / Hybrid
            </span>
          </div>
        </div>

        {/* Professional Profiles */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href={headerData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/40 hover:bg-sky-500/5 text-slate-350 hover:text-sky-400 transition-all font-medium text-sm text-center"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
            <ExternalLink size={12} className="opacity-40" />
          </a>

          <a
            href={headerData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/40 hover:bg-sky-500/5 text-slate-350 hover:text-sky-400 transition-all font-medium text-sm text-center"
          >
            <Github size={16} />
            <span>GitHub</span>
            <ExternalLink size={12} className="opacity-40" />
          </a>
        </div>

        {/* Instant action block */}
        <div className="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl relative overflow-hidden text-center">
          <p className="text-xs text-slate-400">
            Looking for a skilled backend/integration engineer?
          </p>
          <a
            href={`mailto:${headerData.email}?subject=Inquiry%20from%20Portfolio`}
            className="mt-3.5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-slate-950 font-bold text-xs transition-all w-full justify-center shadow-lg shadow-sky-500/20 hover:scale-[1.01]"
          >
            <Mail size={14} />
            Send Email Pitch
          </a>
        </div>
      </div>
    </div>
  );
}
