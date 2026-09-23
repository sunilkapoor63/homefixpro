import React from 'react';

/**
 * Reusable Section Heading component with clean typography & eyebrow pill
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  isDark = false,
  className = '',
  titleTag: TitleTag = 'h2'
}) {
  const isCentered = align === 'center';

  return (
    <div className={`max-w-3xl ${isCentered ? 'mx-auto text-center' : 'text-left'} ${className} mb-10 md:mb-14`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 ${
          isDark 
            ? 'bg-teal-950/80 text-teal-300 border border-teal-800/60' 
            : 'bg-teal-50 text-brand-700 border border-teal-200/70'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
      )}
      
      <TitleTag className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
        isDark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </TitleTag>

      {subtitle && (
        <p className={`mt-3.5 text-sm sm:text-base md:text-lg leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
