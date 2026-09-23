import React, { useState } from 'react';
import { PhoneCall } from 'lucide-react';
import { getTelLink } from '../../utils/phone';
import { BUSINESS_CONFIG } from '../../config/business';

export default function CallFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const telLink = getTelLink(BUSINESS_CONFIG.phoneRaw);

  return (
    <aside aria-label="Phone Quick Contact" className="hidden md:block fixed bottom-6 left-6 z-40">
      <div className="relative flex items-center">
        {/* Action Button */}
        <a
          href={telLink}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-brand-700 hover:bg-brand-800 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand-500/40"
          aria-label={`Call UrbanFix customer support at ${BUSINESS_CONFIG.phoneDisplay}`}
        >
          <PhoneCall className="w-6 h-6 animate-none group-hover:rotate-12 transition-transform duration-200" />
          <span className="sr-only">Call UrbanFix Helpline</span>
        </a>

        {/* Tooltip */}
        <div 
          className={`absolute left-full ml-3 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-medium shadow-xl whitespace-nowrap pointer-events-none transition-all duration-200 ${
            showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
          role="tooltip"
        >
          <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-4 border-transparent border-r-slate-900" />
        </div>
      </div>
    </aside>
  );
}
