'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToPaidEbooksSection = () => {
    const paidEbooksSection = document.getElementById('PaidEbooksSection');
    if (paidEbooksSection) {
      console.log('Elemento PaidEbooksSection encontrado, a rolar para ele.');
      paidEbooksSection.scrollIntoView({ behavior: 'smooth' });
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
        <h2 className="section-title">
          <span className="gradient-text">
            Reset Mental
          </span>
        </h2>
        <p className="section-subtitle">
          Desbloqueie seu potencial ilimitado com a sabedoria dos maiores mestres do autoconhecimento.
        </p>
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
          padding: 80px 0; /* Aumentei o padding para mais respiro */
          text-align: center;
          position: relative;
          overflow: hidden; /* Para garantir que os pseudo-elementos fiquem dentro da seção */
          min-height: 100vh; /* Ocupa a altura total da tela */
        }
        
        /* Adicionando um background sutil de pontinhos */
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.3;
          z-index: 1; /* Garante que o padrão fique por baixo do conteúdo */
        }

        .section-content-container {
          max-width: 850px; /* Aumentei a largura máxima */
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          gap: 24px; /* Aumentei o espaçamento entre os elementos */
          align-items: center;
          position: relative;
          z-index: 2; /* Garante que o conteúdo fique acima do fundo */
        }
        
        .section-title {
          font-size: 3.5rem; /* Aumentei o tamanho da fonte para mais impacto */
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .gradient-text {
          background-image: linear-gradient(to right, #00F0FF, #007BFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .section-subtitle {
          font-size: 1.6rem;
          font-weight: 300;
          line-height: 1.6;
          color: #93c5fd;
          padding: 0 16px;
        }

        .section-description {
          font-size: 1.25rem; /* Aumentei um pouco o tamanho */
          line-height: 1.7;
          color: #bfdbfe;
          padding: 0 16px;
        }

        .highlight-text {
          color: #67e8f9;
          font-weight: 600;
        }

        .cta-button {
          margin-top: 30px;
          padding: 18px 48px;
          background-image: linear-gradient(to right, #00BFFF, #1E90FF);
          color: #ffffff;
          font-size: 1.6rem;
          font-weight: 700;
          border-radius: 9999px;
          box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.2), 0 6px 10px -3px rgba(0, 0, 0, 0.1); /* Sombra mais destacada */
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* Transição mais suave */
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
          transform: scale(1.05) translateY(-5px); /* Efeito de elevação */
          box-shadow: 0 25px 40px -8px rgba(0, 0, 0, 0.3), 0 15px 25px -8px rgba(0, 0, 0, 0.15);
        }
        
        /* Efeito de brilho no botão */
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
          box-shadow: 0 0 0 5px rgba(96, 165, 250, 0.75), inset 0 0 0 1px rgba(255, 255, 255, 0.5); /* Borda interna para foco */
        }

        /* Removi o Keyframes de 'pulse' porque o hover já é mais dinâmico. */

        /* Media Queries para Responsividade */
        @media (min-width: 1025px) {
          .section-title {
            font-size: 4rem;
          }
          .section-subtitle {
            font-size: 1.8rem;
          }
        }
        
        @media (max-width: 768px) {
          .section-content-container {
            padding: 0 16px;
            gap: 20px;
          }
          .section-title {
            font-size: 2.2rem;
            margin-bottom: 15px;
          }
          .section-subtitle {
            font-size: 1.2rem;
          }
          .section-description {
            font-size: 1rem;
          }
          .cta-button {
            font-size: 1.3rem;
            padding: 14px 30px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 60px 0;
          }
          .section-title {
            font-size: 1.8rem;
            margin-bottom: 10px;
            line-height: 1.2;
          }
          .section-subtitle {
            font-size: 1rem;
          }
          .section-description {
            font-size: 0.9rem;
          }
          .cta-button {
            font-size: 1.1rem;
            padding: 12px 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;