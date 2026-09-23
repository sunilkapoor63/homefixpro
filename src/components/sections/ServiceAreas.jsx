import React, { useState } from 'react';
import { MapPin, Search, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS } from '../../data/serviceAreas';
import { BUSINESS_CONFIG } from '../../config/business';
import { createWhatsAppUrl, formatAreaInquiryMessage } from '../../utils/whatsapp';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function ServiceAreas({ onSelectArea }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = SERVICE_AREAS.filter(area =>
    area.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const handleAreaClick = (area) => {
    const waUrl = createWhatsAppUrl(formatAreaInquiryMessage(area), BUSINESS_CONFIG.whatsappNumber);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleGeneralAreaCheck = () => {
    const targetArea = searchQuery.trim() || "my sector in Gurugram";
    const waUrl = createWhatsAppUrl(formatAreaInquiryMessage(targetArea), BUSINESS_CONFIG.whatsappNumber);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="areas" className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-14">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Local Coverage"
          title="Appliance repair across Gurugram"
          subtitle="We dispatch technicians throughout the city, covering DLF phases, major residential sectors, Golf Course corridors, and emerging hubs."
        />

        {/* Quick Filter Search Input */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your sector or locality (e.g. Sector 57, DLF...)"
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20 bg-slate-50/50"
              aria-label="Filter Gurugram service localities"
            />
          </div>
        </div>

        {/* Responsive Area Chips Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {filteredAreas.map((area, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleAreaClick(area)}
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-xs sm:text-sm font-medium text-slate-700 hover:text-brand-800 transition-all duration-150"
              title={`Check service availability in ${area}`}
            >
              <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-700 transition-colors" />
              <span>{area}</span>
            </button>
          ))}
        </div>

        {/* Locality Inquiry Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-50/60 border border-teal-200/70 max-w-2xl mx-auto text-center">
          <h3 className="text-base font-bold text-slate-900">
            Don't see your locality listed above?
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
            We cover residential apartments, condominiums, and independent homes across the entire Gurugram district. Message us on WhatsApp to confirm immediate availability.
          </p>
          <div className="mt-4">
            <Button
              variant="whatsapp"
              size="md"
              onClick={handleGeneralAreaCheck}
              className="shadow-sm"
            >
              <span>Check My Area on WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
