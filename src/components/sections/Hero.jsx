import React from 'react';
import { Phone, CheckCircle2, ShieldCheck, Clock, MapPin, ArrowRight, Sparkles, Wrench } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { getTelLink } from '../../utils/phone';
import { createWhatsAppUrl, formatGeneralInquiryMessage } from '../../utils/whatsapp';
import Button from '../common/Button';
import ServiceIcon from '../common/ServiceIcon';

export default function Hero({ onOpenBooking }) {
  const telLink = getTelLink(BUSINESS_CONFIG.phoneRaw);
  const waUrl = createWhatsAppUrl(formatGeneralInquiryMessage(), BUSINESS_CONFIG.whatsappNumber);

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 bg-gradient-to-b from-teal-50/40 via-white to-slate-50/60 border-b border-slate-200/60">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-brand-900 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{BUSINESS_CONFIG.heroEyebrow}</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Appliance problems? <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-teal-600 to-teal-800">
                We’ll get your home running again.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {BUSINESS_CONFIG.heroSubheading}
            </p>

            {/* CTA Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto shadow-md"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={telLink}
                icon={Phone}
                className="w-full sm:w-auto"
                ariaLabel={`Call ${BUSINESS_CONFIG.phoneDisplay}`}
              >
                <span>Call Now</span>
              </Button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 py-2 px-3 rounded-lg hover:bg-emerald-50/80 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* 3 Trust Badges */}
            <div className="pt-3 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              {BUSINESS_CONFIG.trustPills.map((pill, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-brand-700 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{pill}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Composition (5 cols on lg) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 shadow-xl border border-slate-200/80">
              
              {/* Floating Status Pill 1 */}
              <div className="absolute -top-3.5 left-6 bg-slate-900 text-white text-xs font-semibold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Technician available in Gurugram</span>
              </div>

              {/* Header inside Card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-brand-700">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">Doorstep Diagnostics</h2>
                    <p className="text-xs text-slate-500">Across all major appliances</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  From ₹199
                </span>
              </div>

              {/* Grid of Appliance Badges */}
              <div className="grid grid-cols-3 gap-3 my-5">
                {[
                  { name: "AC Care", icon: "Wind" },
                  { name: "Fridge", icon: "Refrigerator" },
                  { name: "Washer", icon: "WashingMachine" },
                  { name: "RO Water", icon: "Droplets" },
                  { name: "Geyser", icon: "Flame" },
                  { name: "Chimney", icon: "Fan" },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50/80 border border-slate-100 text-center hover:bg-teal-50/50 hover:border-teal-200 transition-all duration-200"
                  >
                    <ServiceIcon name={item.icon} className="w-5 h-5 text-brand-700 mb-1.5" />
                    <span className="text-xs font-semibold text-slate-700">{item.name}</span>
                  </div>
                ))}
              </div>

              {/* Quick Status Elements */}
              <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs">
                <div className="flex items-center justify-between text-slate-600 bg-slate-50/90 px-3.5 py-2 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                    <span className="font-medium">Doorstep service 7 days a week</span>
                  </div>
                  <span className="font-semibold text-slate-900">8 AM - 9 PM</span>
                </div>

                <div className="flex items-center justify-between text-slate-600 bg-slate-50/90 px-3.5 py-2 rounded-xl">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span className="font-medium">Coverage: All Gurugram Sectors</span>
                  </div>
                  <span className="font-semibold text-teal-700">DLF to Manesar</span>
                </div>
              </div>

              {/* Mini Booking Action inside Card */}
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-all text-center"
              >
                Schedule Quick Doorstep Visit
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
