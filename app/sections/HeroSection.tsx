'use client';

import React from 'react';
const findScrollableParent = (el: HTMLElement | null): HTMLElement | (Document & HTMLElement) => {
  if (!el) return (document.scrollingElement as HTMLElement) || document.documentElement;
  let parent: HTMLElement | null = el.parentElement;
  while (parent) {
    const style = window.getComputedStyle(parent);
    const overflowY = style.overflowY;
    const canScroll =
      (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') &&
      parent.scrollHeight > parent.clientHeight;
    if (canScroll) return parent;
    parent = parent.parentElement;
  }
  return (document.scrollingElement as HTMLElement) || document.documentElement;
};


const smoothScrollTo = (el: HTMLElement, offset = 0, duration = 600) => {
  const scrollParent = findScrollableParent(el) as HTMLElement;
  const isDoc = (scrollParent === document.scrollingElement || scrollParent === document.documentElement);

  const start = isDoc ? window.scrollY || window.pageYOffset : (scrollParent as HTMLElement).scrollTop;
  const elRectTop = el.getBoundingClientRect().top;
  const parentRectTop = isDoc ? 0 : (scrollParent as HTMLElement).getBoundingClientRect().top;
  const target = Math.round(start + (elRectTop - parentRectTop) - offset);

  // tentativa nativa primeiro
  try {
    if (isDoc) window.scrollTo({ top: target, behavior: 'smooth' });
    else (scrollParent as HTMLElement).scrollTo({ top: target, behavior: 'smooth' });
  } catch (e) {
    /* ignorar se browser não suportar a opção behavior */
  }

  // fallback manual caso o navegador ignore a smooth nativa (ex: Safari mobile às vezes)
  setTimeout(() => {
    const current = isDoc ? (window.scrollY || window.pageYOffset) : (scrollParent as HTMLElement).scrollTop;
    if (Math.abs(current - target) > 5) {
      // animação manual com easing
      const initial = current;
      const distance = target - initial;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 0.5 - Math.cos(progress * Math.PI) / 2; // easeInOut
        const pos = Math.round(initial + distance * ease);
        if (isDoc) window.scrollTo(0, pos);
        else (scrollParent as HTMLElement).scrollTop = pos;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, 100);
};

const HeroSection: React.FC = () => {
  const scrollToPaidEbooksSection = () => {
    const el = document.getElementById('PaidEbooksSection') as HTMLElement | null;
    if (!el) {
      console.warn('PaidEbooksSection NÃO encontrado no DOM.');
      return;
    }

    // debug rápido no console (apague depois se quiser)
    console.log('[DEBUG] PaidEbooksSection rect:', el.getBoundingClientRect());
    console.log('[DEBUG] window.innerHeight:', window.innerHeight, 'document scrollHeight:', (document.scrollingElement || document.documentElement).scrollHeight);

    // ajuste de offset pro header fixo — ajuste o 138 conforme a altura real do seu header
    const headerOffset = 138;
    smoothScrollTo(el, headerOffset);

    // garante que o elemento possa receber foco (ajuda em alguns navegadores)
    try { el.focus({ preventScroll: true } as any); } catch (e) { /* noop */ }
  };

  return (
    <section 
      id="hero" 
      className="section hero-section" 
    >
      <div className="section-content-container">
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
          <div className="video-overlay"></div>
        </div>

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