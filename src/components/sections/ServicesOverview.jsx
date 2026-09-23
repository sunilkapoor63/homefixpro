import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/services';
import SectionHeading from '../common/SectionHeading';
import ServiceIcon from '../common/ServiceIcon';
import Button from '../common/Button';

export default function ServicesOverview({ onOpenBooking, onSelectServiceCategory }) {
  const handleViewPricing = (categoryFilter) => {
    if (onSelectServiceCategory) {
      onSelectServiceCategory(categoryFilter);
    }
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-14">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Comprehensive Care"
          title="Everything your appliances need, in one place"
          subtitle="From emergency breakdowns to scheduled maintenance, our specialized technicians service all major home appliances across Gurugram."
        />

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CATEGORIES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-card-hover border border-slate-200/90 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Card Top: Icon & Price Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 group-hover:bg-brand-700 text-brand-700 group-hover:text-white flex items-center justify-center transition-colors duration-200 shadow-sm">
                    <ServiceIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                    {service.priceNote}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
                  {service.shortDescription}
                </p>

                {/* Common Issues Handled */}
                <div className="mt-4 pt-3.5 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Common Problems Solved:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.commonIssues.slice(0, 3).map((issue, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                        <span className="line-clamp-1">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => handleViewPricing(service.categoryFilter)}
                  className="text-xs font-bold text-slate-600 hover:text-brand-700 transition-colors"
                >
                  View Pricing →
                </button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenBooking(service.name, 'General Inspection & Repair')}
                  className="text-xs px-3 py-1.5"
                >
                  Book Service
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Strip */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Need immediate emergency assistance?</h4>
              <p className="text-xs text-slate-500">Contact our Gurugram coordinator directly on WhatsApp or call.</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenBooking('Other Appliance', 'Emergency Repair')}
            className="w-full sm:w-auto"
          >
            Request Urgent Callback
          </Button>
        </div>

      </div>
    </section>
  );
}
