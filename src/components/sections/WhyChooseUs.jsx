import React from 'react';
import { 
  Zap, 
  FileText, 
  Layers, 
  Home, 
  Calendar, 
  RotateCcw,
  CheckCircle2,
  MapPin,
  Clock
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-14">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Why Choose UrbanFix"
          title="Reliable appliance care built for Gurgaon homes"
          subtitle="We focus on upfront honesty, doorstep convenience, and practical technical expertise — so you can skip the stress of unverified repairmen."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Large Bento Feature (Spans 2 cols on lg) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-3xl p-7 bg-gradient-to-br from-teal-900 to-slate-900 text-white shadow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-6 border border-teal-400/20">
                <RotateCcw className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                Our Core Principle
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2 leading-tight">
                Repair-First Approach
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-lg">
                We believe in fixing before replacing. Our technicians diagnose the root cause of component failure, prioritizing cost-effective repairs rather than pushing premature equipment replacement.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-semibold text-teal-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Transparent Root Diagnosis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>No Unnecessary Upselling</span>
              </div>
            </div>
          </div>

          {/* Card 2: Fast Local Response */}
          <div className="rounded-3xl p-6 sm:p-7 bg-slate-50 border border-slate-200 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-700 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Fast Local Response
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dedicated local route coordinators ensure rapid response across DLF, Golf Course Road, Sohna Road, and New Gurgaon.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-brand-700">
              <MapPin className="w-3.5 h-3.5" />
              <span>Sectors 14 through 57</span>
            </div>
          </div>

          {/* Card 3: Clear Estimates */}
          <div className="rounded-3xl p-6 sm:p-7 bg-slate-50 border border-slate-200 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-700 flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Clear Estimates
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                No surprises. You receive a complete written breakdown of technician labour and spare parts before work begins.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200/60 text-xs font-bold text-slate-700">
              Upfront Pricing Approval
            </div>
          </div>

          {/* Card 4: Multi-Appliance Expertise */}
          <div className="rounded-3xl p-6 sm:p-7 bg-slate-50 border border-slate-200 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-700 flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Multi-Appliance
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                One trusted contact for your AC, refrigerator, washing machine, RO, geyser, chimney, and microwave.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200/60 text-xs font-bold text-slate-700">
              8 Domestic Categories
            </div>
          </div>

          {/* Card 5: Doorstep Convenience */}
          <div className="rounded-3xl p-6 sm:p-7 bg-slate-50 border border-slate-200 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-700 flex items-center justify-center mb-5">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Doorstep Convenience
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                95% of routine servicing and diagnostics are completed directly in your apartment or villa, minimizing disruption.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200/60 text-xs font-bold text-slate-700">
              On-Site Precision Tools
            </div>
          </div>

          {/* Card 6: Bento Span Card (Spans 2 cols on lg) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-3xl p-7 bg-teal-50/70 border border-teal-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-700 text-white flex items-center justify-center mb-5">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
                Availability When You Need It
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                Flexible 7-Day Scheduling
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                Breakdowns don't wait for weekdays. We operate 7 days a week from 8:00 AM to 9:00 PM, offering morning, afternoon, and evening service slots to fit your busy schedule.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-teal-200/70 flex items-center gap-2 text-xs font-bold text-brand-800">
              <Clock className="w-4 h-4" />
              <span>Monday – Sunday • 8:00 AM – 9:00 PM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
