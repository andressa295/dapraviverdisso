// app/page.tsx
'use client';

import React, { useState } from 'react';
import Script from 'next/script';

// Importa os componentes de layout
import Header from './components/Header';
import Footer from './components/Footer';

// Importa as seções da nova pasta
import WelcomeSection from './sections/WelcomeSection';
import CommunityChallengeSection from './sections/CommunityChallengeSection';
import FreeContentSection from './sections/FreeContentSection';
import PaidEbooksSection from './sections/PaidEbooksSection';
import MediaSection from './sections/MediaSection';

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

      <Header />

      {/* As seções agora são renderizadas diretamente.
          O main-layout-container está no app/layout.tsx e gerencia o layout global.
          A classe 'section' em globals.css gerencia o layout de cada seção. */}
      <WelcomeSection /> 
      <CommunityChallengeSection />
      <FreeContentSection />
      <PaidEbooksSection handleCtaClick={handleCtaClick} isCtaAnimating={isCtaAnimating} />
      <MediaSection />

      <Footer />
    </>
  );
}