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
    id: 'combo-poder-mental',
    name: 'combo poder mental: reprograme, haja, manifeste!',
    desc: 'Este é o arsenal completo que você precisa para dominar sua mente...',
    img: '/images/ebooks.png',
    priceFrom: 'de R$127,00',
    priceTo: 'por apenas R$47',
    installments: 'ou em até 6x de R$ 8,82',
    hotmartLink: 'https://pay.hotmart.com/O100603060L?checkoutMode=2',
  },
  {
    id: 'as-48-leis-do-poder',
    name: 'as 48 leis do poder: estratégias para dominar',
    desc: 'Desvende as leis universais da influência...',
    img: '/images/48-leis-poder.png',
    priceFrom: 'de R$99,90',
    priceTo: 'por apenas R$29,90',
    installments: 'ou em até 7x de R$ 9,50',
    hotmartLink: 'https://pay.hotmart.com/ID_HOTMART_48_LEIS_PODER',
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

        {/* MOBILE: produtos empilhados (scroll vertical) */}
        <div className="products-stack-mobile">
          {productsForSale.map((product) => (
            <div key={product.id} className="product-card glow-on-hover">
              <div className="offer-image-container">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="offer-image"
                  sizes="100vw"
                />
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
                <span className="flying-book" aria-hidden="true">
                  🧠
                </span>
              </a>
              <p className="secure-purchase-text">
                Compra 100% segura. Acesso vitalício. 7 dias de garantia incondicional.
              </p>
            </div>
          ))}
        </div>

        {/* DESKTOP: grid com ambos os produtos lado a lado */}
        <div className="products-grid-desktop">
          {productsForSale.map((product) => (
            <div key={product.id} className="product-card glow-on-hover">
              <div className="offer-image-container">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="offer-image"
                  sizes="300px"
                />
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
                <span className="flying-book" aria-hidden="true">
                  🧠
                </span>
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
          border-top: 1px solid rgba(var(--color-text-light), 0.1);
          border-bottom: 1px solid rgba(var(--color-text-light), 0.1);
          padding: 60px 15px;
          color: var(--color-text-light);
        }

        .section-title,
        .section-subtitle {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          padding: 0 10px;
        }

        .section-title {
          margin-bottom: 18px;
          font-size: 1.8rem;
          font-weight: 700;
        }

        .section-subtitle {
          margin-bottom: 30px;
          font-size: 1rem;
          color: var(--color-text-secondary);
        }

        .products-stack-mobile {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .product-card {
          max-width: 350px;
          background: linear-gradient(
            160deg,
            rgba(var(--color-neon-purple), 0.1),
            rgba(var(--color-neon-blue), 0.1)
          );
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          border: 1px solid rgba(var(--color-text-light), 0.2);
          box-shadow: 0 0 12px rgba(var(--color-neon-yellow), 0.1);
          box-sizing: border-box;
          user-select: none;
          margin: 0 auto;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .product-card:hover {
          box-shadow: 0 0 20px var(--color-neon-yellow);
          transform: scale(1.03);
        }

        .offer-image-container {
          position: relative;
          width: 140px;
          height: 180px;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
          margin: 0 auto 12px;
        }

        .offer-image {
          object-fit: cover;
          object-position: center;
          border-radius: 10px;
        }

        .offer-name {
          font-size: 1.1rem;
          color: var(--color-neon-yellow);
          font-weight: 700;
          margin-bottom: 6px;
          text-transform: uppercase;
          line-height: 1.3;
        }

        .offer-desc {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin-bottom: 8px;
          min-height: 42px;
        }

        .price-box {
          background: rgba(var(--color-neon-yellow), 0.1);
          border: 1px solid var(--color-neon-yellow);
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 12px;
          box-shadow: 0 0 8px rgba(var(--color-neon-yellow), 0.2);
          font-size: 1rem;
          display: inline-block;
          text-align: center;
        }

        .price-from {
          text-decoration: line-through;
          opacity: 0.7;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          margin: 0;
        }

        .price-to {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--color-neon-yellow);
          margin: 2px 0;
          text-shadow: 0 0 8px rgba(var(--color-neon-yellow), 0.5);
        }

        .price-info {
          font-weight: 600;
          font-size: 0.7rem;
          color: var(--color-text-secondary);
          margin: 0;
        }

        .cta-button {
          padding: 8px 24px;
          font-size: 0.9rem;
          text-transform: uppercase;
          position: relative;
          display: inline-flex;
          justify-content: center;
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
          margin-top: 8px;
          width: fit-content;
          line-height: 1;
          border: none;
          user-select: none;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 20px var(--color-neon-blue),
            0 0 40px var(--color-neon-purple);
        }

        .cta-button .button-text {
          position: relative;
          z-index: 2;
        }

        .flying-book {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.2rem;
          opacity: 0;
          pointer-events: none;
          color: var(--color-neon-yellow);
        }

        .cta-button.animating .button-text {
          animation: fade-out 0.5s forwards;
        }

        .cta-button.animating .flying-book {
          animation: fly-to-cart 1.5s cubic-bezier(0.5, -0.5, 1, 1) forwards;
        }

        @keyframes fade-out {
          to {
            opacity: 0;
            transform: scale(0.8);
          }
        }

        @keyframes fly-to-cart {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          20% {
            transform: translate(-50%, -150%) scale(1.2) rotate(-15deg);
          }
          100% {
            opacity: 0;
            transform: translate(300px, -400px) scale(0) rotate(360deg);
          }
        }

        .secure-purchase-text {
          font-size: 0.65rem;
          color: var(--color-text-tertiary);
          margin-top: 10px;
          text-align: center;
          padding: 0 5px;
        }

        /* DESKTOP GRID */
        .products-grid-desktop {
          display: none;
          gap: 30px;
          justify-content: center;
          flex-wrap: nowrap;
          margin-top: 40px;
        }

        @media (min-width: 769px) {
          .section-title {
            font-size: 2.2rem;
          }
          .section-subtitle {
            font-size: 1.2rem;
          }
          .offer-image-container {
            width: 300px;
            height: 250px;
          }
          .product-card {
            max-width: 320px;
            padding: 25px;
            gap: 15px;
          }
          .price-box {
            font-size: 1.2rem;
            padding: 12px 18px;
          }
          .price-from {
            font-size: 0.9rem;
          }
          .price-to {
            font-size: 2rem;
          }
          .price-info {
            font-size: 0.8rem;
          }
          .cta-button {
            font-size: 1.1rem;
            padding: 12px 36px;
          }
          .secure-purchase-text {
            font-size: 0.75rem;
            margin-top: 15px;
          }

          /* Esconder stack no desktop */
          .products-stack-mobile {
            display: none;
          }
          /* Mostrar grid no desktop */
          .products-grid-desktop {
            display: flex;
          }
        }
      `}</style>
    </section>
  );
};

export default PaidEbooksSection;
