import { BUSINESS_CONFIG } from '../config/business';

/**
 * Returns a tel: link for dialing
 * @param {string} [phone] 
 * @returns {string}
 */
export function getTelLink(phone = BUSINESS_CONFIG.phoneRaw) {
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  return `tel:${cleanPhone}`;
}

/**
 * Returns a mailto: link
 * @param {string} [email] 
 * @param {string} [subject] 
 * @returns {string}
 */
export function getMailtoLink(email = BUSINESS_CONFIG.email, subject = "Appliance Service Enquiry - Gurugram") {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

/**
 * Validates an Indian phone number (10 digits, optional leading +91 or 0)
 * @param {string} phone 
 * @returns {boolean}
 */
export function validateIndianPhone(phone) {
  if (!phone) return false;
  // Strip spaces, dashes, parentheses
  const digitsOnly = phone.replace(/\D/g, '');
  // Valid Indian mobile: either 10 digits starting with 6,7,8,9
  // Or 11 digits starting with 0 followed by 6-9
  // Or 12 digits starting with 91 followed by 6-9
  if (/^[6-9]\d{9}$/.test(digitsOnly)) return true;
  if (/^0[6-9]\d{9}$/.test(digitsOnly)) return true;
  if (/^91[6-9]\d{9}$/.test(digitsOnly)) return true;
  return false;
}
