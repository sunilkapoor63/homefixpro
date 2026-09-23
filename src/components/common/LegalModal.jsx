import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export default function LegalModal({ isOpen, type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h2 id="legal-modal-title" className="text-xl font-bold text-slate-900">
            {title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Last Updated: September 2026 • {BUSINESS_CONFIG.businessName}
          </p>

          {isPrivacy ? (
            <>
              <h3 className="text-base font-bold text-slate-800">1. Information We Collect</h3>
              <p>
                When you schedule an appliance repair service through {BUSINESS_CONFIG.businessName}, we collect your name, contact phone number, address or locality in Gurugram, and relevant details concerning the appliance issue.
              </p>

              <h3 className="text-base font-bold text-slate-800">2. How We Use Your Information</h3>
              <p>
                Your contact details are used solely to dispatch our visiting technician, confirm your appointment, communicate repair estimates, and verify service completion. We do not sell or lease your personal contact details to third-party marketers.
              </p>

              <h3 className="text-base font-bold text-slate-800">3. WhatsApp Communications</h3>
              <p>
                By initiating a booking via WhatsApp or phone, you consent to receive direct service updates and scheduling confirmations related to your requested repair.
              </p>

              <h3 className="text-base font-bold text-slate-800">4. Contact Us</h3>
              <p>
                If you have any questions regarding our privacy practices, please contact us at {BUSINESS_CONFIG.email} or call {BUSINESS_CONFIG.phoneDisplay}.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-base font-bold text-slate-800">1. Service Scope &amp; Estimates</h3>
              <p>
                {BUSINESS_CONFIG.businessName} provides doorstep diagnosis, maintenance, and repair services for domestic household appliances across Gurugram. All starting prices quoted on this website represent standard technician labour and inspection fees. Final pricing depends on actual on-site diagnosis and replacement parts required.
              </p>

              <h3 className="text-base font-bold text-slate-800">2. Inspection &amp; Diagnosis Fee</h3>
              <p>
                A standard inspection visit fee applies if you decide not to proceed with the recommended repair after on-site diagnostic assessment. If the repair is approved, this inspection fee is adjusted towards the total bill.
              </p>

              <h3 className="text-base font-bold text-slate-800">3. Replacement Parts</h3>
              <p>
                Technicians provide genuine or compatible grade-A spare parts upon customer consent. Invoices for spare parts and labour will be clearly itemized prior to installation.
              </p>

              <h3 className="text-base font-bold text-slate-800">4. Limitation of Liability</h3>
              <p>
                While our technicians exercise utmost technical care, pre-existing structural wear, internal corrosion, or tamper from prior uncertified work will be documented during the initial inspection.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
