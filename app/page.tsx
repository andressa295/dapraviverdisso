'use client';

import React, { useState } from 'react';
import Script from 'next/script';

// Importa os componentes de layout
import Footer from './components/Footer';

// Importa as seções da nova pasta
import FreeContentSection from './sections/FreeContentSection';
import PaidEbooksSection from './sections/PaidEbooksSection';
import HeroSection from './sections/HeroSection';

export default function PoderMentalPage() {
  const [isCtaAnimating, setIsCtaAnimating] = useState(false); // Mantém o estado de animação aqui se o cta-button for global

  const handleCtaClick = (link: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isCtaAnimating) return;

    setIsCtaAnimating(true);
    setTimeout(() => {
      window.location.href = link;
    }, 1500);
    setTimeout(() => {
      setIsCtaAnimating(false);
    }, 2000);
  };

  return (
    <>
      {/* Script da Hotmart (se for global para todos os CTAs de compra) */}
      <Script
        id="hotmart-widget-script"
        src="https://static.hotmart.com/checkout/widget.min.js"
        strategy="lazyOnload"
      />

     <HeroSection />
      <FreeContentSection />
      <PaidEbooksSection handleCtaClick={handleCtaClick} isCtaAnimating={isCtaAnimating} />
      

      <Footer />
    </>
  );
}