import React, { useState, useEffect } from 'react';
import { Check, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { PRICING_CATALOGUE, PRICING_FILTER_CATEGORIES } from '../../data/services';
import { BUSINESS_CONFIG } from '../../config/business';
import SectionHeading from '../common/SectionHeading';
import ServiceIcon from '../common/ServiceIcon';
import Button from '../common/Button';

export default function PricingSection({ 
  onOpenBooking, 
  activeFilter = 'All', 
  onFilterChange 
}) {
  const [currentCategory, setCurrentCategory] = useState(activeFilter);

  // Sync external filter updates (e.g. from dropdown or footer clicks)
  useEffect(() => {
    if (activeFilter) {
      setCurrentCategory(activeFilter);
    }
  }, [activeFilter]);

  const handleCategoryClick = (cat) => {
    setCurrentCategory(cat);
    if (onFilterChange) {
      onFilterChange(cat);
    }
  };

  const filteredServices = currentCategory === 'All'
    ? PRICING_CATALOGUE
    : PRICING_CATALOGUE.filter(item => item.category.toLowerCase() === currentCategory.toLowerCase());

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-14">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Transparent Rates"
          title="Popular services & transparent starting prices"
          subtitle="Know the starting service charge before you book. Final cost depends on diagnosis, replacement parts and the exact repair required."
        />

        {/* Filter Pills (Horizontally scrollable on mobile, centered on desktop) */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 pb-2 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {PRICING_FILTER_CATEGORIES.map((category) => {
            const isSelected = currentCategory.toLowerCase() === category.toLowerCase();
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 select-none ${
                  isSelected
                    ? 'bg-brand-700 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 border ${
                service.isPopular
                  ? 'bg-white border-teal-300 shadow-card hover:shadow-card-hover ring-1 ring-teal-200/60'
                  : 'bg-slate-50/60 hover:bg-white border-slate-200 shadow-sm hover:shadow-card'
              }`}
            >
              {/* Popular Badge */}
              {service.isPopular && (
                <div className="absolute -top-3 right-6 bg-amber-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Popular</span>
                </div>
              )}

              <div>
                {/* Header: Category & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-teal-50 px-2.5 py-1 rounded-md">
                    {service.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                    <ServiceIcon name={service.icon} className="w-4 h-4 text-brand-700" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 min-h-[38px] leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Pricing Display */}
                <div className="mt-5 pb-5 border-b border-slate-200/70">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-semibold text-slate-500">Starting from</span>
                    <span className="text-3xl font-extrabold text-slate-950 font-heading">
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>
                    {service.oldPrice && (
                      <span className="text-sm font-medium text-slate-400 line-through">
                        ₹{service.oldPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {service.note || 'Spare parts extra if required'}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="mt-5 space-y-2.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    What’s included:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Button
                  variant={service.isPopular ? "primary" : "outline"}
                  size="md"
                  fullWidth
                  onClick={() => onOpenBooking(service.category, service.name)}
                  className="text-sm"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Disclaimer Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-900 font-semibold">Pricing Transparency: </strong>
            {BUSINESS_CONFIG.pricingDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
}
