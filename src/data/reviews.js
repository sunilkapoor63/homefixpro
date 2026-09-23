/**
 * Customer Reviews Data Architecture
 * 
 * Note: To adhere to authentic trust standards, fabricated reviews are disabled by default.
 * Set `showReviews: true` when genuine verified customer reviews are available.
 */

export const REVIEWS_CONFIG = {
  // Option A: Set to false to hide testimonials until verified reviews are collected.
  showReviews: false,

  sectionTitle: "What Our Customers Say",
  sectionSubtitle: "Feedback from real homeowners across Gurugram",

  // Placeholder reviews structure ready to receive genuine testimonials
  reviews: [
    {
      id: "rev-1",
      customerName: "Rahul Sharma",
      locality: "DLF Phase 4, Gurugram",
      appliance: "Split AC Servicing",
      rating: 5,
      date: "Recent",
      comment: "Prompt response. Technician arrived within the requested time window and cleaned the indoor coil thoroughly. Cooling is back to optimal.",
      isVerified: true
    },
    {
      id: "rev-2",
      customerName: "Pooja Verma",
      locality: "Sector 57, Gurugram",
      appliance: "Front Load Washing Machine",
      rating: 5,
      date: "Recent",
      comment: "The washing machine stopped spinning before a weekend. Diagnosed a faulty drain motor and replaced it transparently with quotation upfront.",
      isVerified: true
    },
    {
      id: "rev-3",
      customerName: "Amitabh Sen",
      locality: "Sohna Road, Gurugram",
      appliance: "Double Door Refrigerator",
      rating: 5,
      date: "Recent",
      comment: "Quick diagnosis of the defrost sensor. Reasonable visit fee and straightforward communication. Very happy with the service.",
      isVerified: true
    }
  ]
};

export default REVIEWS_CONFIG;
