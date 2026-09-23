import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { getTelLink } from '../../utils/phone';
import { createWhatsAppUrl, formatGeneralInquiryMessage } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function CTASection({ onOpenBooking }) {
  const telLink = getTelLink(BUSINESS_CONFIG.phoneRaw);
  const waUrl = createWhatsAppUrl(formatGeneralInquiryMessage(), BUSINESS_CONFIG.whatsappNumber);

  return (
    <section className="py-16 md:py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950 border border-teal-800/80 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Fast Gurugram Doorstep Service</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
            Broken appliance? <br />
            Get help without the hassle.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tell us what's wrong and we'll help you arrange a convenient service visit anywhere in Gurugram. Direct communication, clear estimates, and technicians you can count on.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shadow-lg"
            >
              <span>Book on WhatsApp</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="phone"
              size="lg"
              href={telLink}
              icon={Phone}
              className="w-full sm:w-auto shadow-lg"
              ariaLabel={`Call ${BUSINESS_CONFIG.phoneDisplay}`}
            >
              <span>Call Now</span>
            </Button>
          </div>

          {/* Quick trust metrics */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>8:00 AM – 9:00 PM • 7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Inspection from ₹199</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Pay after service</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
