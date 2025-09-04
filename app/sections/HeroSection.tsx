'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToPaidEbooksSection = () => {
    const paidEbooksSection = document.getElementById('PaidEbooksSection');
    if (paidEbooksSection) {
      // Pega a posição do elemento
      const yOffset = -80; // Ajuste este valor. É o espaço que você quer deixar acima da seção (para o cabeçalho fixo, se houver). Um valor de -80px a -120px costuma funcionar bem.
      const y = paidEbooksSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      console.log('Elemento PaidEbooksSection encontrado. A rolar para a posição Y:', y);
      
      // Usa o método window.scrollTo para ter mais controle
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.log('Elemento PaidEbooksSection NÃO encontrado. Verifique se o ID está correto e se o componente está renderizado.');
    }
  };

  return (
    <section 
      id="hero" 
      className="section hero-section" 
    >
      <div className="section-content-container">
        
        {/* Vídeo com a camuflagem */}
        <div className="video-wrapper">
          <video
            src="reset.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-video"
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
          {/* Overlay para o efeito de camuflagem */}
          <div className="video-overlay"></div>
        </div>

        {/* Texto e botão agora ficam embaixo do vídeo */}
        <p className="section-description">
          Explore um acervo exclusivo com 13 ebooks transformadores, incluindo: <strong className="highlight-text">As 48 Leis do Poder</strong>, <strong className="highlight-text">Mais Esperto que o Diabo</strong>, <strong className="highlight-text">O Poder do Subconsciente</strong>, <strong className="highlight-text">Manual da Persuasão</strong>, <strong className="highlight-text">Como Convencer Alguém em 90 Segundos</strong> e muitos outros.
        </p>

        <button onClick={scrollToPaidEbooksSection} className="cta-button">
          Quero Acessar os Ebooks!
        </button>
      </div>

      <style jsx>{`
        /* Importação da fonte Poppins */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');

        .hero-section {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000000;
          font-family: 'Poppins', sans-serif;
          padding: 0px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
          color: #ffffff;
          margin: 0 auto;
        }

        .section-content-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 0px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Container do vídeo expandido */
        .video-wrapper {
          position: relative;
          width: calc(100vw - 48px); /* Garante que ocupe a largura total, subtraindo o padding */
          max-width: 100vw; /* Permite que o wrapper se expanda além do container */
          padding-top: 56.25%; /* Mantém a proporção 16:9 */
          margin-bottom: 0px;
          overflow: hidden;
        }

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          z-index: 1;
        }

        /* Camuflagem com gradiente radial - AJUSTADO PARA CAMUFLAGEM COMPLETA */
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          /* Gradiente radial para mesclar todas as bordas com o fundo preto */
          background: radial-gradient(
            ellipse at center,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0) 40%, /* Início da camuflagem mais próximo do centro */
            rgba(0,0,0,1) 100% /* Camuflagem completa nas bordas */
          );
        }
        
        .section-description {
          font-size: 1.0rem;
          line-height: 1.7;
          color: #bfdbfe;
          padding: 0 12px;
        }

        .highlight-text {
          color: #67e8f9;
          font-weight: 600;
        }

        .cta-button {
          margin-top: 3px;
          padding: 18px 48px;
          background-image: linear-gradient(to right, #00BFFF, #1E90FF);
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 700;
          border-radius: 9999px;
          box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.2), 0 6px 10px -3px rgba(0, 0, 0, 0.1);
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          user-select: none;
          position: relative;
          overflow: hidden;
        }

        .cta-button:hover {
          background-image: linear-gradient(to right, #1C86EE, #0000CD);
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 25px 40px -8px rgba(0, 0, 0, 0.3), 0 15px 25px -8px rgba(0, 0, 0, 0.15);
        }
        
        .cta-button::after {
          content: '';
          position: absolute;
          width: 150%;
          height: 150%;
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent 70%);
          transform: rotate(45deg);
          top: -200%;
          left: -200%;
          transition: all 0.7s ease-in-out;
          opacity: 0;
        }

        .cta-button:hover::after {
          top: -50%;
          left: -50%;
          opacity: 1;
        }

        .cta-button:focus {
          outline: none;
          box-shadow: 0 0 0 5px rgba(96, 165, 250, 0.75), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
        }

        /* Media Queries para Responsividade */
        @media (min-width: 1025px) {
          .section-description { font-size: 1.0rem; }
          
        }
        
        @media (max-width: 768px) {
          .section-content-container { padding: 0 0px; gap: 20px; }
          .section-description { font-size: 1.0rem; }
          .cta-button { font-size: 1.3rem; padding: 14px 30px; }
        }

        @media (max-width: 480px) {
          .hero-section { padding: 0px 0; }
          .section-description { font-size: 0.9rem; }
          .cta-button { font-size: 1.1rem; padding: 12px 25px; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;