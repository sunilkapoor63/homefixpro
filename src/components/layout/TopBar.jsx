import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { getTelLink, getMailtoLink } from '../../utils/phone';

export default function TopBar() {
  const telLink = getTelLink(BUSINESS_CONFIG.phoneRaw);
  const mailtoLink = getMailtoLink(BUSINESS_CONFIG.email);

  return (
    <div className="hidden md:block bg-slate-900 text-slate-300 text-xs border-b border-slate-800/80 py-2 select-none">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Location & Operating Hours */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
            <span className="font-medium">Serving all sectors across Gurugram</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>{BUSINESS_CONFIG.businessHoursShort}</span>
          </div>
        </div>

        {/* Right: Phone & Email */}
        <div className="flex items-center gap-6">
          <a
            href={mailtoLink}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label={`Email ${BUSINESS_CONFIG.email}`}
          >
            <Mail className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
            <span>{BUSINESS_CONFIG.email}</span>
          </a>

          <a
            href={telLink}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-teal-300 transition-colors"
            aria-label={`Call ${BUSINESS_CONFIG.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
            <span>{BUSINESS_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
