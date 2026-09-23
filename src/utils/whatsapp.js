import { BUSINESS_CONFIG } from '../config/business';

/**
 * Creates a properly encoded WhatsApp URL for wa.me
 * @param {string} message - The message string
 * @param {string} [phone] - The phone number (digits only, e.g. 919876543210)
 * @returns {string} Fully encoded URL
 */
export function createWhatsAppUrl(message, phone = BUSINESS_CONFIG.whatsappNumber) {
  const sanitizedPhone = String(phone).replace(/\D/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${sanitizedPhone}?text=${encodedText}`;
}

/**
 * Formats a structured booking inquiry for WhatsApp
 * @param {Object} data 
 * @returns {string} Formatted WhatsApp message
 */
export function formatBookingMessage(data) {
  const lines = [
    `Hello ${BUSINESS_CONFIG.businessName},`,
    ``,
    `I would like to book an appliance service.`,
    ``,
    `Name: ${data.name || 'Not provided'}`,
    `Phone: ${data.phone || 'Not provided'}`,
    `Appliance: ${data.appliance || 'General Appliance'}`,
    `Service: ${data.service || 'Inspection / Repair'}`,
    `Area: ${data.area || 'Gurugram'}`,
    `Preferred Date: ${data.preferredDate || 'Earliest available'}`,
    `Preferred Time: ${data.preferredTime || 'Flexible'}`,
    `Issue: ${data.issue || 'Diagnostic required'}`,
    ``,
    `Please confirm availability.`
  ];

  return lines.join('\n');
}

/**
 * Formats a quick locality availability check message
 * @param {string} area 
 * @returns {string}
 */
export function formatAreaInquiryMessage(area) {
  return `Hi, I want to check appliance service availability in ${area || 'my locality in Gurugram'}.`;
}

/**
 * Formats a general consultation message
 * @returns {string}
 */
export function formatGeneralInquiryMessage() {
  return `Hello ${BUSINESS_CONFIG.businessName}, I would like to enquire about doorstep appliance repair service in Gurugram.`;
}
