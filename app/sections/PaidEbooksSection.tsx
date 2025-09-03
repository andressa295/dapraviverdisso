'use client';

import React, { useState, useEffect, useRef } from 'react';

// Hook para animação de entrada ao rolar.
// Adicionado um tipo genérico <T extends HTMLElement> para o elemento referenciado.
const useScrollAnimation = <T extends HTMLElement>(threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<T>(null);

  useEffect(() => {
    // Correção: `Intersection-Observer` alterado para `IntersectionObserver`
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [domRef, isVisible] as const;
};

// Interface para tipar as propriedades do componente.
interface PaidEbooksSectionProps {
  handleCtaClick: (link: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isCtaAnimating: boolean;
}

// Dados dos produtos para venda, incluindo os três novos combos.
const productsForSale = [
  {
    id: 'combo-mente-sem-limites',
    name: 'COMBO: MENTE SEM LIMITES',
    desc: 'O pacote definitivo para expandir sua consciência e dominar sua mente. Inclui 2 e-books principais, 3 de bônus e 1 e-book de atividades.',
    imgs: [
      '/images/poder.jpg',
      '/images/esperto.jpeg',
      '/images/sonho.jpg',
    ],
    priceFrom: 'de R$197,00',
    priceTo: 'por apenas R$39,90',
    installments: 'ou em até 6x de R$ 6,65',
    hotmartLink: 'https://pay.hotmart.com/O100603060L',
  },
  {
    id: 'combo-riqueza-sem-limites',
    name: 'COMBO: RIQUEZA SEM LIMITES',
    desc: 'Desbloqueie sua mentalidade de prosperidade e crie seu próprio caminho para a liberdade financeira. Inclui 2 e-books principais, 3 de bônus e 1 e-book de atividades.',
    imgs: [
      '/images/maisriico.webp',
      '/images/pairico.jpg',
      '/images/namente.jpg',
    ],
    priceFrom: 'de R$197,00',
    priceTo: 'por apenas R$39,90',
    installments: 'ou em até 6x de R$ 6,65',
    hotmartLink: 'https://pay.hotmart.com/K101699262G',
  },
  {
    id: 'combo-poder-e-influencia',
    name: 'COMBO: PODER E INFLUÊNCIA',
    desc: 'Domine a arte da persuasão e do carisma para alcançar seus objetivos pessoais e profissionais. Inclui 2 e-books principais, 3 de bônus e 1 e-book de atividades.',
    imgs: [
      '/images/48leis.jpg',
      '/images/fbi.jpg',
      '/images/reconexao.jpg',
    ],
    priceFrom: 'de R$197,00',
    priceTo: 'por apenas R$39,90',
    installments: 'ou em até 6x de R$ 6,65',
    hotmartLink: 'https://pay.hotmart.com/D100837353X',
  },
];

const PaidEbooksSection: React.FC<PaidEbooksSectionProps> = ({ handleCtaClick, isCtaAnimating }) => {
  const [domRef, isVisible] = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section
      id="PaidEbooksSection"
      ref={domRef}
      className={`paid-ebooks-section ${isVisible ? 'animated' : ''}`}
    >
      <div className="section-content-container">
        <h2 className="section-title">
          <span className="gradient-text">Nossos Combos Especiais</span>
        </h2>
        <p className="section-subtitle">
          Escolha o combo ideal para transformar sua vida e seus resultados.
        </p>

        <div className="product-cards-container">
          {productsForSale.map((product) => (
            <div key={product.id} className="product-card">
              <h3 className="offer-name">{product.name}</h3>
              <div className="offer-images-group">
                {product.imgs.map((imgSrc, index) => (
                  <div key={index} className="offer-image-wrapper">
                    <img
                      src={imgSrc}
                      alt={`Capa do E-book ${index + 1}`}
                      className="offer-image"
                      width={100}
                      height={133}
                    />
                  </div>
                ))}
              </div>
              <p className="offer-desc">{product.desc}</p>
              <div className="price-box">
                <p className="price-from">
                  <span>{product.priceFrom}</span>
                </p>
                <p className="price-to">{product.priceTo}</p>
                <p className="price-info">{product.installments}</p>
              </div>
              <a
                href={product.hotmartLink}
                onClick={handleCtaClick(product.hotmartLink)}
                className={`cta-button ${isCtaAnimating ? 'animating' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-text">GARANTA O SEU AGORA</span>
              </a>
              <p className="secure-purchase-text">
                Compra 100% segura. Acesso vitalício. 7 dias de garantia incondicional.
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');

        .paid-ebooks-section {
          background-color: #000000;
          padding: 60px 16px;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
          scroll-margin-top: 138px;
        }
        .section-content-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 25px;
          align-items: center;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 15px;
          text-transform: uppercase;
        }
        .gradient-text {
          background-image: linear-gradient(to right, #00F0FF, #007BFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .section-subtitle {
          margin-bottom: 25px;
          font-size: 1.1rem;
          color: #93c5fd;
        }
        .product-cards-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          width: 100%;
        }
        .product-card {
          flex: 1 1 350px; /* Aumenta a largura base dos cards */
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0px 0px 40px rgba(0, 123, 255, 0.2), 0px 0px 80px rgba(0, 123, 255, 0.1);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          max-width: 400px; /* Permite que os cards cresçam mais */
        }
        .offer-name {
          font-size: 1.2rem;
          color: #00BFFF;
          font-weight: 700;
          text-transform: uppercase;
        }
        .offer-images-group {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .offer-image-wrapper {
          width: 100px; /* Largura para a imagem de capa */
          height: 133px; /* Altura para a proporção 3:4 */
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
        }
        .offer-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .offer-desc {
          font-size: 0.95rem;
          white-space: pre-line;
          color: #bfdbfe;
          line-height: 1.5;
        }
        .price-box {
          background: rgba(0, 123, 255, 0.1);
          border-radius: 10px;
          padding: 15px;
          margin-bottom: 20px;
          width: 80%;
          max-width: 250px;
        }
        .price-from {
          text-decoration: line-through;
          color: #67e8f9;
          font-size: 0.9rem;
          margin: 0;
        }
        .price-to {
          font-size: 1.8rem;
          font-weight: 900;
          color: #00F0FF;
          margin: 5px 0;
        }
        .price-info {
          font-size: 0.85rem;
          color: #93c5fd;
        }
        .cta-button {
          padding: 16px 40px;
          background-image: linear-gradient(to right, #00BFFF, #1E90FF);
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 5700;
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
          animation: pulse 2s infinite ease-in-out;
        }
        .cta-button:hover {
          background-image: linear-gradient(to right, #1C86EE, #0000CD);
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .cta-button:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.75);
        }
        .secure-purchase-text {
          font-size: 0.75rem;
          color: #bfdbfe;
          margin-top: 20px;
        }

        /* Animação de entrada */
        .paid-ebooks-section.animated .section-content-container {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .section-content-container {
          opacity: 0;
          transform: translateY(20px);
        }

        /* Keyframes para o efeito de vibração */
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -5px rgba(0, 0, 0, 0.1);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        }

        /* Responsividade */
        @media (max-width: 1024px) {
          .section-title { font-size: 2rem; }
          .section-subtitle { font-size: 1rem; }
          .product-card { flex: 1 1 45%; max-width: none; }
          .offer-image-wrapper { width: 90px; height: 120px; }
          .offer-name { font-size: 1.1rem; }
          .offer-desc { font-size: 0.85rem; }
          .price-to { font-size: 1.6rem; }
          .cta-button { font-size: 1.3rem; padding: 14px 30px; }
        }

        @media (max-width: 768px) {
          .paid-ebooks-section { padding: 40px 16px; }
          .section-content-container { gap: 20px; }
          .section-title { font-size: 1.8rem; margin-bottom: 10px; }
          .section-subtitle { font-size: 0.9rem; margin-bottom: 20px; }
          .product-card { flex: 1 1 100%; padding: 25px; gap: 10px; max-width: 400px; }
          .offer-image-wrapper { width: 80px; height: 107px; }
          .offer-name { font-size: 1rem; }
          .offer-desc { font-size: 0.8rem; }
          .price-box { padding: 12px; width: 90%; }
          .price-to { font-size: 1.4rem; }
          .price-info { font-size: 0.7rem; }
          .cta-button { font-size: 1.1rem; padding: 12px 25px; }
          .secure-purchase-text { margin-top: 15px; font-size: 0.7rem; }
        }

        @media (max-width: 480px) {
          .paid-ebooks-section { padding: 30px 10px; }
          .section-content-container { gap: 15px; }
          .section-title { font-size: 1.5rem; margin-bottom: 8px; }
          .section-subtitle { font-size: 0.8rem; margin-bottom: 15px; }
          .product-card { padding: 20px; gap: 8px; max-width: 300px; }
          .offer-image-wrapper { width: 70px; height: 93px; }
          .offer-name { font-size: 0.9rem; }
          .offer-desc { font-size: 0.75rem; }
          .price-box { padding: 10px; width: 95%; }
          .price-to { font-size: 1.2rem; }
          .price-info { font-size: 0.65rem; }
          .cta-button { font-size: 1rem; padding: 10px 20px; }
          .secure-purchase-text { margin-top: 10px; font-size: 0.65rem; }
        }
      `}</style>
    </section>
  );
};

export default PaidEbooksSection;
