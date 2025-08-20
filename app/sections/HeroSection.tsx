'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  // Função para rolar suavemente a página até a seção de ebooks pagos
  const scrollToPaidEbooksSection = () => {
    const paidEbooksSection = document.getElementById('PaidEbooksSection');
    
    // Adicionado console.log para depuração
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
        /* Importação da fonte Poppins - você pode adicionar isso no seu CSS global ou no <head> do seu HTML */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');

        .hero-section {
          display: flex;
          align-items: center; /* centraliza verticalmente */
          justify-content: center;
          background-color: #000000;
          font-family: 'Poppins', sans-serif;
          padding: 60px 0; /* controla o espaço superior/inferior */
          text-align: center;
        }

        .section-content-container {
          max-width: 768px;
          margin: 0 auto;
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }
        .section-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        /* Estilo para o gradiente de texto no título */
        .gradient-text {
          background-image: linear-gradient(to right, #00F0FF, #007BFF); /* Aqua vibrante para Azul forte */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent; /* Fallback */
        }

        .section-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.6;
          color: #93c5fd; /* blue-light */
          padding: 0 16px;
        }

        .section-description {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #bfdbfe; /* blue-lighter */
          padding: 0 16px;
        }

        /* Cor destacada para os títulos dos ebooks */
        .highlight-text {
          color: #67e8f9; /* cyan-light */
          font-weight: 600;
        }

        .cta-button {
          margin-top: 15px;
          padding: 16px 40px;
          background-image: linear-gradient(to right, #00BFFF, #1E90FF); /* Deep Sky Blue para Dodger Blue */
          color: #ffffff; /* white */
          font-size: 1.5rem;
          font-weight: 700;
          border-radius: 9999px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          user-select: none;
          animation: pulse 2s infinite ease-in-out; /* Adicionado efeito de vibração */
        }

        .cta-button:hover {
          background-image: linear-gradient(to right, #1C86EE, #0000CD); /* Azul mais escuro para o hover */
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .cta-button:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.75);
        }

        /* Keyframes para o efeito de vibração */
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          50% {
            transform: scale(1.02); /* Levemente maior */
            box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -5px rgba(0, 0, 0, 0.1);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        }

        /* Media Queries para Responsividade */

        /* Tablet */
        @media (min-width: 769px) and (max-width: 1024px) {
          .section-content-container {
            padding-top: 30px; /* Mantém o padding top ajustado */
          }
          .section-title {
            font-size: 2.3rem;
          }
          .section-subtitle {
            font-size: 1rem;
          }
          .section-description {
            font-size: 0.9rem;
          }
          .cta-button {
            font-size: 1.3rem;
            padding: 14px 30px;
          }
        }

        /* Celular médio e grande */
        @media (max-width: 768px) and (min-width: 481px) {
          .hero-section {
            margin-top: 10px; /* Mantém a compensação */
            padding-top: 10px; /* Mantém o padding para o conteúdo */
          }
          .section-content-container {
            padding: 10px 16px; /* Ajustado para celular */
            gap: 16px;
          }
          .section-title {
            font-size: 1.6rem;
            margin-bottom: 10px;
          }
          .section-subtitle {
            font-size: 0.9rem;
          }
          .section-description {
            font-size: 0.85rem;
          }
          .cta-button {
            font-size: 1.1rem;
            padding: 12px 25px;
            margin-top: 20px;
          }
        }

        /* Celular pequeno */
        @media (max-width: 480px) {
          .hero-section {
            margin-top: 10px; /* Mantém a compensação */
            padding-top: 10px; /* Mantém o padding para o conteúdo */
          }
          .section-content-container {
            padding: 5px 16px; /* Ajustado para celular pequeno */
            gap: 12px;
          }
          .section-title {
            font-size: 1.3rem;
            margin-bottom: 8px;
            line-height: 1.3;
          }
          .section-subtitle {
            font-size: 0.75rem;
          }
          .section-description {
            font-size: 0.75rem;
          }
          .cta-button {
            font-size: 1rem;
            padding: 10px 20px;
            margin-top: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
