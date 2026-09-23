import React from 'react';
import { CheckCircle2, ShieldCheck, MapPin, Wrench, HeartHandshake } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-14">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-50 text-brand-700 border border-teal-200/70">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span>Local Gurugram Expertise</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Local appliance care built around convenience
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Living in Gurgaon means balancing busy work schedules and household routines. When an air conditioner stops cooling during peak summer or a refrigerator fails unexpectedly, finding a prompt, dependable technician shouldn't feel like a gamble.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              <strong>{BUSINESS_CONFIG.businessName}</strong> was founded to bridge this gap. We provide a single, unified point of contact for routine servicing, urgent repairs, and skilled installations across 8 essential home appliances: <strong>ACs, refrigerators, washing machines, RO water purifiers, water geysers, kitchen chimneys, smart TVs, and microwave ovens</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Prompt technician dispatch in Gurugram",
                "Itemized estimates before any repair",
                "Quality tools & authentic diagnostic kits",
                "Support 7 days a week, 8 AM - 9 PM"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenBooking()}
              >
                Schedule an Inspection Visit
              </Button>
            </div>
          </div>

          {/* Right Visual Card Composition (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-7 shadow-card border border-slate-200/90 relative">
              <div className="flex items-center gap-3.5 pb-5 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-700 flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Dedicated Service Standards</h3>
                  <p className="text-xs text-slate-500">Every visit adheres to our protocol</p>
                </div>
              </div>

              <div className="py-5 space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-teal-50 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-bold text-xs">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">On-Site Diagnosis First</h4>
                    <p className="text-slate-500 text-xs mt-0.5">We test the electrical and mechanical circuits thoroughly to isolate the real issue.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-teal-50 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-bold text-xs">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Customer Quote Approval</h4>
                    <p className="text-slate-500 text-xs mt-0.5">No work is started without your written confirmation on repair costs and parts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-teal-50 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-bold text-xs">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Clean Working Area</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Our technicians keep your home clean and tidy during and after servicing.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-700" />
                  <span>Sector 45, Gurugram</span>
                </div>
                <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Open Today
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
