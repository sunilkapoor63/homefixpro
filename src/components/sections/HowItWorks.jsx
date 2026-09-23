import React from 'react';
import { MessageSquare, CalendarClock, UserCheck, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function HowItWorks({ onOpenBooking }) {
  const steps = [
    {
      stepNumber: "01",
      icon: MessageSquare,
      title: "Tell Us the Problem",
      description: "Select your appliance, tell us what's malfunctioning, and provide your Gurugram locality."
    },
    {
      stepNumber: "02",
      icon: CalendarClock,
      title: "Choose Your Slot",
      description: "Pick a date and convenient window (morning, afternoon, or evening) that matches your schedule."
    },
    {
      stepNumber: "03",
      icon: UserCheck,
      title: "Technician Visits",
      description: "An experienced technician arrives at your doorstep equipped with diagnostic tools."
    },
    {
      stepNumber: "04",
      icon: CheckCircle2,
      title: "Approve & Repair",
      description: "Review a clear upfront estimate. We begin repair work only after you give your approval."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-14">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Simple 4-Step Process"
          title="Doorstep service made effortless"
          subtitle="From your first message to a perfectly working appliance, our workflow is designed for transparency, speed, and peace of mind."
        />

        {/* Steps Grid with Desktop Connector Line */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/90 flex flex-col justify-between hover:shadow-card hover:-translate-y-1 transition-all duration-200"
                >
                  <div>
                    {/* Top: Step Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-700 flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-heading font-black text-2xl text-slate-300">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to trigger flow */}
        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="md"
            onClick={() => onOpenBooking()}
            className="shadow-sm"
          >
            Start Booking Now
          </Button>
        </div>

      </div>
    </section>
  );
}
