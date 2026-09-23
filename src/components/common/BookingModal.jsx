import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, Wrench, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { SERVICE_CATEGORIES } from '../../data/services';
import { SERVICE_AREAS } from '../../data/serviceAreas';
import { createWhatsAppUrl, formatBookingMessage } from '../../utils/whatsapp';
import { validateIndianPhone } from '../../utils/phone';

export default function BookingModal({
  isOpen,
  onClose,
  initialAppliance = '',
  initialService = '',
  onSuccessToast
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance: '',
    service: '',
    area: '',
    preferredDate: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
    issue: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Sync initial values when modal opens or initial props change
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        appliance: initialAppliance || prev.appliance || 'AC Repair & Service',
        service: initialService || prev.service || 'General Service & Checkup'
      }));
      setErrors({});
      setIsSubmitting(false);

      // Focus first input after animation
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);

      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialAppliance, initialService]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Compute minimum date (today) in YYYY-MM-DD format
  const todayString = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validateIndianPhone(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.appliance) {
      newErrors.appliance = 'Please select an appliance';
    }

    if (!formData.area.trim()) {
      newErrors.area = 'Please select or enter your Gurugram locality';
    }

    if (formData.preferredDate && formData.preferredDate < todayString) {
      newErrors.preferredDate = 'Date cannot be in the past';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for that field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Format WhatsApp message
    const waMessage = formatBookingMessage({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      appliance: formData.appliance,
      service: formData.service || 'Diagnostic & Repair',
      area: formData.area.trim(),
      preferredDate: formData.preferredDate || 'Earliest Available',
      preferredTime: formData.preferredTime,
      issue: formData.issue.trim() || 'General service / Inspection'
    });

    const waUrl = createWhatsAppUrl(waMessage, BUSINESS_CONFIG.whatsappNumber);

    if (onSuccessToast) {
      onSuccessToast('Opening WhatsApp to complete your booking…');
    }

    // Short delay to show feedback before opening WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        className="relative w-full sm:max-w-xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col transition-transform animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-semibold text-brand-700 uppercase tracking-wider">
                Doorstep Booking • Gurugram
              </p>
            </div>
            <h2 id="booking-modal-title" className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
              Schedule Appliance Service
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-200/60 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body (Scrollable) */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {/* Notice */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-teal-50/70 border border-teal-100 text-xs sm:text-sm text-teal-900">
            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
            <p>
              Submit below to confirm with our Gurugram coordinator on WhatsApp. No advance payment required to schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  ref={firstInputRef}
                  id="modal-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Vikas Sharma"
                  className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border ${
                    errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-brand-600'
                  } focus:outline-none focus:ring-2 focus:ring-brand-500/20`}
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
            </div>

            {/* Mobile Phone */}
            <div>
              <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="modal-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={14}
                  className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border ${
                    errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-brand-600'
                  } focus:outline-none focus:ring-2 focus:ring-brand-500/20`}
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Appliance Select */}
            <div>
              <label htmlFor="modal-appliance" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Appliance <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Wrench className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <select
                  id="modal-appliance"
                  name="appliance"
                  value={formData.appliance}
                  onChange={handleChange}
                  className="w-full pl-10 pr-8 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20 bg-white"
                >
                  <option value="">Select Appliance</option>
                  {SERVICE_CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                  <option value="Other Appliance">Other Household Appliance</option>
                </select>
              </div>
              {errors.appliance && <p className="mt-1 text-xs text-rose-500">{errors.appliance}</p>}
            </div>

            {/* Service Requested */}
            <div>
              <label htmlFor="modal-service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Service Type
              </label>
              <input
                id="modal-service"
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder="e.g. Deep Servicing, Not Cooling"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
          </div>

          {/* Gurugram Area / Locality */}
          <div>
            <label htmlFor="modal-area" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Locality / Sector in Gurugram <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                id="modal-area"
                list="area-suggestions"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="e.g. DLF Phase 3, Sector 45, Sushant Lok..."
                className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border ${
                  errors.area ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-brand-600'
                } focus:outline-none focus:ring-2 focus:ring-brand-500/20`}
              />
              <datalist id="area-suggestions">
                {SERVICE_AREAS.map(area => (
                  <option key={area} value={area} />
                ))}
              </datalist>
            </div>
            {errors.area && <p className="mt-1 text-xs text-rose-500">{errors.area}</p>}
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-date" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Visit Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  id="modal-date"
                  type="date"
                  name="preferredDate"
                  min={todayString}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
              </div>
              {errors.preferredDate && <p className="mt-1 text-xs text-rose-500">{errors.preferredDate}</p>}
            </div>

            <div>
              <label htmlFor="modal-time" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Time Slot
              </label>
              <div className="relative">
                <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <select
                  id="modal-time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full pl-10 pr-8 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20 bg-white"
                >
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  <option value="Earliest Available Slot">Earliest Available Slot</option>
                </select>
              </div>
            </div>
          </div>

          {/* Problem Description */}
          <div>
            <label htmlFor="modal-issue" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Problem Description (Optional)
            </label>
            <textarea
              id="modal-issue"
              name="issue"
              rows={2}
              value={formData.issue}
              onChange={handleChange}
              placeholder="e.g. AC is not cooling well, water leakage from indoor pipe..."
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:opacity-75"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>{isSubmitting ? 'Opening WhatsApp…' : 'Confirm via WhatsApp'}</span>
            </button>
            <p className="text-center text-[11px] text-slate-500 mt-2">
              Instant response during operating hours (8:00 AM – 9:00 PM).
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
