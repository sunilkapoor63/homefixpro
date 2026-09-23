import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, Phone, Wrench, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { SERVICE_CATEGORIES } from '../../data/services';
import { getTelLink } from '../../utils/phone';
import ServiceIcon from '../common/ServiceIcon';
import Button from '../common/Button';

export default function Header({ 
  onOpenMobileMenu, 
  onSelectServiceCategory,
  onOpenBooking 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Track scroll position for backdrop blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceSelect = (categoryFilter) => {
    setIsServicesOpen(false);
    if (onSelectServiceCategory) {
      onSelectServiceCategory(categoryFilter);
    }
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const telLink = getTelLink(BUSINESS_CONFIG.phoneRaw);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
        : 'bg-white border-b border-slate-100 py-3.5'
    }`}>
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group select-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-700 group-hover:bg-brand-800 flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Wrench className="w-5 h-5 text-teal-100" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-950 tracking-tight leading-none">
                  {BUSINESS_CONFIG.shortName}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 hidden sm:inline-block" />
              </div>
              <span className="text-[11px] font-semibold text-brand-700 tracking-wider uppercase block mt-0.5">
                Appliance Care • Gurgaon
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-700" aria-label="Main Navigation">
            <a 
              href="#home" 
              className="px-3.5 py-2 rounded-lg hover:text-brand-700 hover:bg-slate-100/70 transition-colors"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setIsServicesOpen(false);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors ${
                  isServicesOpen ? 'text-brand-700 bg-teal-50/70' : 'hover:text-brand-700 hover:bg-slate-100/70'
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-brand-700' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="px-3.5 py-1.5 border-b border-slate-100 mb-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Doorstep Repair Categories
                    </p>
                  </div>

                  <div className="max-h-[380px] overflow-y-auto px-1.5 py-1">
                    {SERVICE_CATEGORIES.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service.categoryFilter)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-teal-50/80 text-left group transition-colors"
                        role="menuitem"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand-100/60 flex items-center justify-center text-slate-700 group-hover:text-brand-700 transition-colors">
                            <ServiceIcon name={service.iconName} className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-brand-700">
                              {service.name}
                            </span>
                            <span className="block text-[11px] text-slate-500">
                              {service.priceNote}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-brand-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          View →
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-1 pt-2 border-t border-slate-100 px-3 flex justify-between items-center text-xs">
                    <a
                      href="#services"
                      onClick={() => setIsServicesOpen(false)}
                      className="font-bold text-brand-700 hover:text-brand-800"
                    >
                      Browse all 8 categories
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#pricing" 
              className="px-3.5 py-2 rounded-lg hover:text-brand-700 hover:bg-slate-100/70 transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#how-it-works" 
              className="px-3.5 py-2 rounded-lg hover:text-brand-700 hover:bg-slate-100/70 transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#why-us" 
              className="px-3.5 py-2 rounded-lg hover:text-brand-700 hover:bg-slate-100/70 transition-colors"
            >
              Why Us
            </a>
            <a 
              href="#about" 
              className="px-3.5 py-2 rounded-lg hover:text-brand-700 hover:bg-slate-100/70 transition-colors"
            >
              About
            </a>
            <a 
              href="#faq" 
              className="px-3.5 py-2 rounded-lg hover:text-brand-700 hover:bg-slate-100/70 transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="px-3.5 py-2 rounded-lg hover:text-brand-700 hover:bg-slate-100/70 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Direct Phone Call Button */}
            <a
              href={telLink}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-800 hover:text-brand-700 hover:bg-slate-100 transition-colors border border-slate-200"
              aria-label={`Call ${BUSINESS_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-brand-700" />
              <span>Call Now</span>
            </a>

            {/* Primary Booking Modal Trigger */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex shadow-sm"
            >
              <span>Book a Service</span>
            </Button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-brand-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
