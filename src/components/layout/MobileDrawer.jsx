import React, { useState, useEffect } from 'react';
import { X, ChevronDown, Phone, MapPin, Wrench } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { SERVICE_CATEGORIES } from '../../data/services';
import { getTelLink } from '../../utils/phone';
import { createWhatsAppUrl, formatGeneralInquiryMessage } from '../../utils/whatsapp';
import ServiceIcon from '../common/ServiceIcon';

export default function MobileDrawer({ isOpen, onClose, onSelectServiceCategory, onOpenBooking }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setServicesExpanded(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const telLink = getTelLink(BUSINESS_CONFIG.phoneRaw);
  const waUrl = createWhatsAppUrl(formatGeneralInquiryMessage(), BUSINESS_CONFIG.whatsappNumber);

  const handleLinkClick = (hash) => {
    onClose();
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleServiceClick = (categoryFilter) => {
    onClose();
    if (onSelectServiceCategory) {
      onSelectServiceCategory(categoryFilter);
    }
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="md:hidden fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      onClick={onClose}
    >
      <div 
        className="w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Drawer Header */}
        <div>
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/70">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-700 flex items-center justify-center text-white shadow-sm">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-base text-slate-900 block leading-tight">
                  {BUSINESS_CONFIG.shortName}
                </span>
                <span className="text-[10px] text-brand-700 font-semibold uppercase tracking-wider block">
                  Appliance Care
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-200/60 transition-colors"
              aria-label="Close navigation drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1">
            <button
              onClick={() => handleLinkClick('#home')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Home
            </button>

            {/* Expandable Services Accordion */}
            <div>
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                aria-expanded={servicesExpanded}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                  servicesExpanded ? 'rotate-180 text-brand-700' : ''
                }`} />
              </button>

              {servicesExpanded && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl my-1">
                  {SERVICE_CATEGORIES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service.categoryFilter)}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:text-brand-700 hover:bg-teal-50/50 rounded-lg text-left transition-colors"
                    >
                      <ServiceIcon name={service.iconName} className="w-4 h-4 text-brand-700 shrink-0" />
                      <span className="font-medium">{service.name}</span>
                    </button>
                  ))}
                  <button
                    onClick={() => handleLinkClick('#services')}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-brand-700 uppercase tracking-wider"
                  >
                    View All Services Overview →
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('#pricing')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Pricing
            </button>

            <button
              onClick={() => handleLinkClick('#how-it-works')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              How It Works
            </button>

            <button
              onClick={() => handleLinkClick('#why-us')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Why Choose Us
            </button>

            <button
              onClick={() => handleLinkClick('#about')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              About
            </button>

            <button
              onClick={() => handleLinkClick('#areas')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Service Areas
            </button>

            <button
              onClick={() => handleLinkClick('#faq')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              FAQ
            </button>

            <button
              onClick={() => handleLinkClick('#contact')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/90 space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <MapPin className="w-3.5 h-3.5 text-brand-700 shrink-0" />
            <span>Serving all sectors in Gurugram</span>
          </div>

          <a
            href={telLink}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-brand-700 text-white font-bold text-sm shadow-sm hover:bg-brand-800 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-sm hover:bg-[#20bd5a] transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
