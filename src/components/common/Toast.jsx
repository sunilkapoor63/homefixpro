import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ 
  message, 
  type = 'info', 
  onClose, 
  duration = 4000 
}) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const bgStyles = {
    success: 'bg-teal-900 text-teal-100 border-teal-700',
    info: 'bg-slate-900 text-slate-100 border-slate-700',
    warning: 'bg-amber-900 text-amber-100 border-amber-700',
    error: 'bg-rose-900 text-rose-100 border-rose-700'
  };

  const Icon = type === 'success' 
    ? CheckCircle 
    : type === 'warning' || type === 'error' 
    ? AlertCircle 
    : Info;

  return (
    <div 
      role="status" 
      aria-live="polite"
      className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[calc(100%-2rem)] transition-all animate-bounce-short"
    >
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-xl backdrop-blur-sm ${bgStyles[type] || bgStyles.info}`}>
        <Icon className="w-5 h-5 shrink-0 text-teal-400" />
        <p className="text-sm font-medium flex-1">{message}</p>
        <button 
          onClick={onClose} 
          className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
