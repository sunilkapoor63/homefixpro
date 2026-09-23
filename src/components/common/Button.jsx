import React from 'react';

/**
 * Reusable Button component with accessible tap targets & modern styling
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
  disabled = false,
  ariaLabel,
  target,
  rel,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs md:text-sm min-h-[38px]",
    md: "px-5 py-2.5 text-sm md:text-base min-h-[44px]",
    lg: "px-7 py-3.5 text-base md:text-lg min-h-[50px] shadow-sm",
  };

  const variantStyles = {
    primary: "bg-brand-700 hover:bg-brand-800 text-white shadow-sm hover:shadow hover:-translate-y-0.5 focus:ring-brand-500 active:translate-y-0",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow hover:-translate-y-0.5 focus:ring-slate-700 active:translate-y-0",
    amber: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-sm hover:shadow hover:-translate-y-0.5 focus:ring-amber-400 active:translate-y-0",
    outline: "border border-slate-300 hover:border-brand-600 bg-white hover:bg-brand-50/50 text-slate-700 hover:text-brand-700 focus:ring-brand-500",
    whatsapp: "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm hover:shadow hover:-translate-y-0.5 focus:ring-emerald-400 font-bold active:translate-y-0",
    phone: "bg-brand-700 hover:bg-brand-800 text-white shadow-sm hover:shadow hover:-translate-y-0.5 focus:ring-brand-500 font-bold active:translate-y-0",
    ghost: "text-slate-600 hover:text-brand-700 hover:bg-slate-100 focus:ring-brand-500",
    darkOutline: "border border-slate-700 hover:border-slate-500 text-white hover:bg-slate-800/80 focus:ring-slate-500"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${widthStyle} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={`w-4 h-4 md:w-5 md:h-5 ${children ? 'mr-2' : ''} shrink-0`} aria-hidden="true" />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={`w-4 h-4 md:w-5 md:h-5 ${children ? 'ml-2' : ''} shrink-0`} aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}
