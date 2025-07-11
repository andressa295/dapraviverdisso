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

      <main className="main-content-wrapper">
        {/* EFEITO DE LUZ DE FUNDO AURORA (pode ser global no main) */}
        <div className="aurora-light"></div>

        {/* WelcomeSection não deve ter animação de entrada para evitar flicker */}
        <WelcomeSection /> 
        
        {/* As demais seções usam a animação de entrada ao rolar (controlada pelo useScrollAnimation interno) */}
        <CommunityChallengeSection />
        <FreeContentSection />
        <PaidEbooksSection handleCtaClick={handleCtaClick} isCtaAnimating={isCtaAnimating} />
        <MediaSection />
      </main>

      {/* O Footer deve carregar normalmente, sem animação de entrada, para evitar flicker.
          Ele não está dentro de um 'Section' com 'animated' para garantir isso. */}
      <Footer />

      {/* Estilos globais para o wrapper (fora das seções) */}
      <style jsx>{`
        .main-content-wrapper {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 70px; /* Ajuste para a altura do cabeçalho fixo */
        }

        /* Efeito de Luz Aurora (definido aqui para ser global no main) */
        .aurora-light {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2000px;
          height: 2000px;
          background: radial-gradient(circle, 
                      rgba(91, 56, 236, 0.02),
                      rgba(37, 117, 252, 0.01),
                      rgba(0, 0, 0, 0) 70%);
          transform: translateX(-50%) translateY(-20%);
          animation: aurora-pulse 40s infinite ease-in-out alternate;
          z-index: 1;
          pointer-events: none;
        }
        @keyframes aurora-pulse {
            0% { transform: translateX(-50%) translateY(-20%) scale(1) rotate(0deg); opacity: 0.03; }
            50% { transform: translateX(-48%) translateY(-18%) scale(1.02) rotate(3deg); opacity: 0.05; }
            100% { transform: translateX(-50%) translateY(-20%) scale(1) rotate(0deg); opacity: 0.03; }
        }

        /* Classes de botões e animações compartilhadas globalmente */
        .cta-button {
            padding: 15px 25px;
            font-size: 1.05rem;
            text-transform: uppercase;
            position: relative;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            border-radius: 50px;
            background: var(--color-neon-gradient);
            color: white;
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-cta-button);
            overflow: hidden;
            margin-bottom: 8px;
            width: fit-content;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 0 25px var(--color-neon-blue), 0 0 50px var(--color-neon-purple);
        }

        .cta-button .button-text {
            position: relative;
            z-index: 2;
        }
        .cta-button .price-tag {
            font-size: 0.75rem;
            font-weight: 400;
            opacity: 0.9;
            position: relative;
            z-index: 2;
            text-transform: none;
        }
        .flying-book {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.5rem;
            opacity: 0;
            pointer-events: none;
            color: var(--color-neon-yellow);
        }
        .cta-button.animating .button-text,
        .cta-button.animating .price-tag {
            animation: fade-out 0.5s forwards;
        }
        .cta-button.animating .flying-book {
            animation: fly-to-cart 1.5s cubic-bezier(0.5, -0.5, 1, 1) forwards;
        }

        @keyframes fade-out {
            to { opacity: 0; transform: scale(0.8); }
        }

        @keyframes fly-to-cart {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            20% { transform: translate(-50%, -150%) scale(1.2) rotate(-15deg); }
            100% { opacity: 0; transform: translate(300px, -400px) scale(0) rotate(360deg); }
        }

        .whatsapp-cta-button {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px 30px;
            border-radius: 50px;
            background: #25D366;
            color: white;
            font-weight: 700;
            font-size: 1.05rem;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px -8px rgba(37, 211, 102, 0.6);
            width: fit-content;
            text-transform: uppercase;
        }
        .whatsapp-cta-button:hover {
            transform: translateY(-3px);
            background: #1DA851;
            box-shadow: 0 10px 25px -8px rgba(37, 211, 102, 0.8);
        }


        /* Responsividade para elementos globais */
        @media (max-width: 768px) {
            .main-content-wrapper {
                padding-top: 65px;
            }
            .cta-button {
                padding: 12px 25px;
                font-size: 1rem;
            }
            .whatsapp-cta-button {
                padding: 12px 25px;
                font-size: 1rem;
            }
        }

        @media (max-width: 480px) {
            .main-content-wrapper {
                padding-top: 60px;
            }
            .cta-button {
                padding: 10px 20px;
                font-size: 0.9rem;
            }
            .whatsapp-cta-button {
                padding: 10px 20px;
                font-size: 0.9rem;
            }
        }
      `}</style>
    </>
  );
}