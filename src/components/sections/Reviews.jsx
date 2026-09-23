import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS_CONFIG } from '../../data/reviews';
import SectionHeading from '../common/SectionHeading';

/**
 * Reviews Component
 * Conditionally rendered based on `REVIEWS_CONFIG.showReviews`
 */
export default function Reviews() {
  if (!REVIEWS_CONFIG.showReviews) {
    return null;
  }

  return (
    <section id="reviews" className="py-16 md:py-24 bg-slate-50/80 border-b border-slate-200/80 scroll-mt-14">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Feedback"
          title={REVIEWS_CONFIG.sectionTitle}
          subtitle={REVIEWS_CONFIG.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {REVIEWS_CONFIG.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-teal-200 mb-2" />
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900">{rev.customerName}</h3>
                <p className="text-xs text-slate-500">{rev.locality}</p>
                <div className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-brand-700">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>{rev.appliance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
