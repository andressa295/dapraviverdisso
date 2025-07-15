'use client';

import React from 'react';
import Image from 'next/image';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface PaidEbooksSectionProps {
  handleCtaClick: (link: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isCtaAnimating: boolean;
}

const productsForSale = [
  {
    id: 'combo-morte-renascimento',
    name: 'combo: poder mental - morte e renascimento',
    desc: `🔥 O pacote definitivo pra sua transformação:\n\nInclui os clássicos consagrados:\n- As 48 Leis do Poder\n- Manual de Persuasão do FBI\n- Mais Esperto que o Diabo\n\nE mais os best-sellers:\n- Segredos do Subconsciente\n- O Hábito de Vencer\n- A Chave Mestra da Manifestação`,
    img: [
      '/images/48-leis-poder.png',
      '/images/fbi-persuasion.png',
      '/images/diabo.png',
      '/images/ebooks.png',
    ],
    priceFrom: 'de R$197,00',
    priceTo: 'por apenas R$59',
    installments: 'ou em até 8x de R$ 8,58',
    hotmartLink: 'https://pay.hotmart.com/D100837353X',
  },
];

const PaidEbooksSection: React.FC<PaidEbooksSectionProps> = ({
  handleCtaClick,
  isCtaAnimating,
}) => {
  const [domRef, isVisible] = useScrollAnimation(0.2);

  return (
    <section
      id="oferta"
      ref={domRef}
      className={`section paid-ebooks-section ${isVisible ? 'animated' : ''}`}
    >
      <div className="section-content-container">
        <h2 className="section-title">
          seus guias para uma mente de poder e sucesso{' '}
          <span className="highlight">inevitável</span>
        </h2>
        <p className="section-subtitle">
          Aprofunde seu conhecimento e acelere sua jornada com nossos e-books exclusivos.
        </p>

        <div className="products-grid-desktop">
          {productsForSale.map((product) => (
            <div key={product.id} className="product-card glow-on-hover">
              <div className="offer-image-container">
                {Array.isArray(product.img) ? (
                  <div className="carousel-container">
                    {product.img.map((src, index) => (
                      <div key={index} className={`carousel-slide slide-${index + 1}`}>
                        <Image
                          src={src}
                          alt={`${product.name} - ${index}`}
                          fill
                          className="carousel-img"
                          sizes="300px"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="offer-image"
                    sizes="300px"
                  />
                )}
              </div>

              <h3 className="offer-name">{product.name}</h3>
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
                <span className="button-text">comprar agora</span>
                <span className="flying-book" aria-hidden="true">🧠</span>
              </a>
              <p className="secure-purchase-text">
                Compra 100% segura. Acesso vitalício. 7 dias de garantia incondicional.
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .paid-ebooks-section {
          background-color: var(--color-pure-black);
          padding: 60px 15px;
          color: var(--color-text-light);
        }

        .section-title, .section-subtitle {
          text-align: center;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .section-subtitle {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: var(--color-text-secondary);
        }

        .products-grid-desktop {
          display: flex;
          justify-content: center;
        }

        .product-card {
          max-width: 400px;
          background: linear-gradient(160deg, rgba(var(--color-neon-purple), 0.1), rgba(var(--color-neon-blue), 0.1));
          border-radius: 15px;
          padding: 25px;
          text-align: center;
          border: 1px solid rgba(var(--color-text-light), 0.2);
          box-shadow: 0 0 12px rgba(var(--color-neon-yellow), 0.1);
        }

        .offer-image-container {
          position: relative;
          width: 350px;
          height: 250px;
          margin: 0 auto 12px;
          border-radius: 10px;
          overflow: hidden;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .carousel-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          animation: fadeLoop 16s infinite ease-in-out;
          transition: opacity 1s ease-in-out;
        }

        .slide-1 { animation-delay: 0s; }
        .slide-2 { animation-delay: 4s; }
        .slide-3 { animation-delay: 8s; }
        .slide-4 { animation-delay: 12s; }

        .carousel-img {
          object-fit: cover;
          object-position: center;
          border-radius: 10px;
        }

        @keyframes fadeLoop {
          0%   { opacity: 0; }
          5%   { opacity: 1; }
          25%  { opacity: 1; }
          30%  { opacity: 0; }
          100% { opacity: 0; }
        }

        .offer-name {
          font-size: 1.4rem;
          font-weight: bold;
          text-transform: uppercase;
          color: var(--color-neon-yellow);
          margin: 10px 0;
        }

        .offer-desc {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          white-space: pre-line;
          margin-bottom: 12px;
        }

        .price-box {
          background: rgba(var(--color-neon-yellow), 0.1);
          border: 1px solid var(--color-neon-yellow);
          padding: 12px 18px;
          border-radius: 8px;
          margin-bottom: 12px;
          box-shadow: 0 0 8px rgba(var(--color-neon-yellow), 0.2);
        }

        .price-from {
          text-decoration: line-through;
          font-size: 0.9rem;
          opacity: 0.6;
        }

        .price-to {
          font-size: 2rem;
          font-weight: 900;
          color: var(--color-neon-yellow);
        }

        .price-info {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
        }

        .cta-button {
          padding: 12px 36px;
          font-size: 1rem;
          border-radius: 50px;
          background: var(--color-neon-gradient);
          color: white;
          font-weight: 700;
          cursor: pointer;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 10px;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 20px var(--color-neon-blue), 0 0 40px var(--color-neon-purple);
        }

        .flying-book {
          font-size: 1.4rem;
          color: var(--color-neon-yellow);
        }

        .secure-purchase-text {
          margin-top: 12px;
          font-size: 0.8rem;
          color: var(--color-text-tertiary);
        }
      `}</style>
    </section>
  );
};

export default PaidEbooksSection;
