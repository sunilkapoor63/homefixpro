import React, { useState } from 'react';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import MobileDrawer from './components/layout/MobileDrawer';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import ServicesOverview from './components/sections/ServicesOverview';
import PricingSection from './components/sections/PricingSection';
import HowItWorks from './components/sections/HowItWorks';
import WhyChooseUs from './components/sections/WhyChooseUs';
import AboutSection from './components/sections/AboutSection';
import ServiceAreas from './components/sections/ServiceAreas';
import Reviews from './components/sections/Reviews';
import CTASection from './components/sections/CTASection';
import FAQ from './components/sections/FAQ';
import ContactSection from './components/sections/ContactSection';

import BookingModal from './components/common/BookingModal';
import LegalModal from './components/common/LegalModal';
import Toast from './components/common/Toast';
import WhatsAppFloatingButton from './components/common/WhatsAppFloatingButton';
import CallFloatingButton from './components/common/CallFloatingButton';
import MobileActionBar from './components/common/MobileActionBar';

export default function App() {
  // Mobile drawer state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active pricing filter category
  const [activePricingFilter, setActivePricingFilter] = useState('All');

  // Booking modal state & pre-selections
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingAppliance, setBookingAppliance] = useState('');
  const [bookingService, setBookingService] = useState('');

  // Legal modal state (privacy vs terms)
  const [legalModalType, setLegalModalType] = useState(null);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenBooking = (appliance = '', service = '') => {
    setBookingAppliance(appliance);
    setBookingService(service);
    setIsBookingOpen(true);
  };

  const handleSelectServiceCategory = (category) => {
    setActivePricingFilter(category);
  };

  const handleOpenLegal = (type) => {
    setLegalModalType(type);
  };

  const showToast = (message) => {
    setToastMessage(message);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-600 selection:text-white relative">
      
      {/* 1. Optional Top Utility Bar (Desktop/Tablet only) */}
      <TopBar />

      {/* 2. Sticky Navbar */}
      <Header
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onSelectServiceCategory={handleSelectServiceCategory}
        onOpenBooking={handleOpenBooking}
      />

      {/* Mobile Slide-in Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onSelectServiceCategory={handleSelectServiceCategory}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Single Page Content */}
      <main id="main-content" className="flex-1">
        {/* 3. Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4. Trust / Credibility Strip */}
        <TrustBar />

        {/* 5. Appliance Service Categories */}
        <ServicesOverview
          onOpenBooking={handleOpenBooking}
          onSelectServiceCategory={handleSelectServiceCategory}
        />

        {/* 6. Service & Pricing Catalogue */}
        <PricingSection
          onOpenBooking={handleOpenBooking}
          activeFilter={activePricingFilter}
          onFilterChange={setActivePricingFilter}
        />

        {/* 7. How It Works */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 8. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. About / Local Expertise */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 10. Gurgaon Service Areas */}
        <ServiceAreas onSelectArea={(area) => handleOpenBooking('', `Service in ${area}`)} />

        {/* 11. Customer Reviews Architecture (Disabled cleanly by default via showReviews: false) */}
        <Reviews />

        {/* 12. Strong Conversion CTA Banner */}
        <CTASection onOpenBooking={handleOpenBooking} />

        {/* 13. FAQ */}
        <FAQ />

        {/* 14. Contact / Booking Section */}
        <ContactSection onSuccessToast={showToast} />
      </main>

      {/* 15. Footer */}
      <Footer 
        onOpenLegal={handleOpenLegal}
        onSelectServiceCategory={handleSelectServiceCategory}
      />

      {/* 16. Desktop Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* 17. Desktop Floating Phone Call Button */}
      <CallFloatingButton />

      {/* 18. Mobile Sticky Action Bar */}
      <MobileActionBar onOpenBooking={handleOpenBooking} />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialAppliance={bookingAppliance}
        initialService={bookingService}
        onSuccessToast={showToast}
      />

      {/* Global Legal Modal */}
      <LegalModal
        isOpen={Boolean(legalModalType)}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Global Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

    </div>
  );
}
