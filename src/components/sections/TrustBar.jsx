import React from 'react';
import { BUSINESS_CONFIG } from '../../config/business';

export default function TrustBar() {
  return (
    <section aria-label="Key Statistics and Credibility" className="py-8 bg-white border-b border-slate-200/80">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {BUSINESS_CONFIG.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center px-2 py-2 sm:py-0 ${
                idx > 0 && idx % 2 === 0 ? 'border-t sm:border-t-0' : ''
              }`}
            >
              <span className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-700 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
