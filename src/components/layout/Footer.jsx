import React from 'react';
import { MapPin, Phone, Mail, Clock, Wrench, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { SERVICE_CATEGORIES } from '../../data/services';
import { getTelLink, getMailtoLink } from '../../utils/phone';
import { createWhatsAppUrl, formatGeneralInquiryMessage } from '../../utils/whatsapp';

export default function Footer({ onOpenLegal, onSelectServiceCategory }) {
  const currentYear = new Date().getFullYear();
  const telLink = getTelLink(BUSINESS_CONFIG.phoneRaw);
  const mailtoLink = getMailtoLink(BUSINESS_CONFIG.email);
  const waUrl = createWhatsAppUrl(formatGeneralInquiryMessage(), BUSINESS_CONFIG.whatsappNumber);

  const handleServiceClick = (categoryFilter) => {
    if (onSelectServiceCategory) {
      onSelectServiceCategory(categoryFilter);
    }
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800/80 pt-16 pb-12 select-none">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-sm">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white block leading-none">
                  {BUSINESS_CONFIG.shortName}
                </span>
                <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider block mt-1">
                  Appliance Care • Gurugram
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Professional doorstep appliance repair and maintenance services across Gurugram. Fast response, transparent estimates, and genuine diagnostic care for modern homes.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSINESS_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-slate-800"
                aria-label="Visit Facebook"
              >
                <span className="text-xs font-bold">fb</span>
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-slate-800"
                aria-label="Visit Instagram"
              >
                <span className="text-xs font-bold">ig</span>
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-slate-800"
                aria-label="Visit LinkedIn"
              >
                <span className="text-xs font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Appliance Services</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing Catalogue</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">Gurugram Sectors</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Popular Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_CATEGORIES.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleServiceClick(service.categoryFilter)}
                    className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-teal-400 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Operations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact &amp; Operations
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address}</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={telLink} className="hover:text-white font-medium transition-colors">
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 fill-emerald-400 shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Helpline
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={mailtoLink} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.email}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_CONFIG.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {BUSINESS_CONFIG.businessName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
