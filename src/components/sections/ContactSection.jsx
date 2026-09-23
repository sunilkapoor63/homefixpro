import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { SERVICE_CATEGORIES } from '../../data/services';
import { SERVICE_AREAS } from '../../data/serviceAreas';
import { getTelLink, getMailtoLink, validateIndianPhone } from '../../utils/phone';
import { createWhatsAppUrl, formatBookingMessage } from '../../utils/whatsapp';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function ContactSection({ onSuccessToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance: 'AC Repair & Service',
    locality: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const telLink = getTelLink(BUSINESS_CONFIG.phoneRaw);
  const mailtoLink = getMailtoLink(BUSINESS_CONFIG.email);
  const waDirectUrl = createWhatsAppUrl(`Hello ${BUSINESS_CONFIG.businessName}, I would like to schedule an appliance service visit.`, BUSINESS_CONFIG.whatsappNumber);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your mobile number';
    } else if (!validateIndianPhone(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.appliance) newErrors.appliance = 'Please select an appliance';
    if (!formData.locality.trim()) newErrors.locality = 'Please enter your Gurugram locality';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const waMessage = formatBookingMessage({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      appliance: formData.appliance,
      service: 'Doorstep Service Request',
      area: formData.locality.trim(),
      preferredDate: 'Next available slot',
      preferredTime: 'Anytime today/tomorrow',
      issue: formData.message.trim() || 'General diagnosis / service'
    });

    const waUrl = createWhatsAppUrl(waMessage, BUSINESS_CONFIG.whatsappNumber);

    if (onSuccessToast) {
      onSuccessToast('Opening WhatsApp to send your request…');
    }

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-14">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Contact & Bookings"
          title="Reach our Gurugram service desk"
          subtitle="Speak with our dispatch coordinator directly or send a quick service request below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left: Contact Info (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-200/90 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {BUSINESS_CONFIG.businessName}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  {BUSINESS_CONFIG.tagline}
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm text-slate-700">
                {/* Phone */}
                <a
                  href={telLink}
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-teal-50/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-700 group-hover:bg-brand-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">Helpline &amp; Calls</span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-brand-700">
                      {BUSINESS_CONFIG.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={waDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-emerald-50/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">WhatsApp Support</span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                      Chat Now (+91 98765 43210)
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={mailtoLink}
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-100/70 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">Email Inquiries</span>
                    <span className="text-sm font-medium text-slate-900 group-hover:text-brand-700">
                      {BUSINESS_CONFIG.email}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">Central Hub</span>
                    <span className="text-sm text-slate-800">
                      {BUSINESS_CONFIG.address}
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">Operating Hours</span>
                    <span className="text-sm text-slate-800">
                      {BUSINESS_CONFIG.businessHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Request Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm border border-slate-200/90">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                  Quick Service Request
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and send directly via WhatsApp to coordinate visit timings.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Chandra"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                        errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-brand-600'
                      } focus:outline-none focus:ring-2 focus:ring-brand-500/20`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile"
                      maxLength={14}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-brand-600'
                      } focus:outline-none focus:ring-2 focus:ring-brand-500/20`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Appliance */}
                  <div>
                    <label htmlFor="contact-appliance" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Appliance Type <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="contact-appliance"
                      name="appliance"
                      value={formData.appliance}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20 bg-white"
                    >
                      {SERVICE_CATEGORIES.map(cat => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                      <option value="Other Appliance">Other Household Appliance</option>
                    </select>
                  </div>

                  {/* Locality */}
                  <div>
                    <label htmlFor="contact-locality" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Gurugram Locality <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-locality"
                      list="contact-areas"
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      placeholder="e.g. Sector 45, DLF Phase 2"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                        errors.locality ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-brand-600'
                      } focus:outline-none focus:ring-2 focus:ring-brand-500/20`}
                    />
                    <datalist id="contact-areas">
                      {SERVICE_AREAS.map(area => (
                        <option key={area} value={area} />
                      ))}
                    </datalist>
                    {errors.locality && <p className="mt-1 text-xs text-rose-500">{errors.locality}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Describe the Issue (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Water dripping from indoor AC, or washing machine not draining..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20 resize-none"
                  />
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>{isSubmitting ? 'Opening WhatsApp…' : 'Request Service on WhatsApp'}</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 mt-3 text-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>No online payment required to send a service request.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
