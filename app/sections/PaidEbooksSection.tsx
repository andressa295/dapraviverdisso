'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface PaidEbooksSectionProps {
  handleCtaClick: (link: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isCtaAnimating: boolean;
}

const productsForSale = [
  {
    id: 'combo-morte-renascimento',
    name: 'combo morte e renascimento',
    desc: `🔥 O pacote definitivo pra sua transformação:

Inclui os clássicos consagrados:
- As 48 Leis do Poder
- Manual de Persuasão do FBI
- Mais Esperto que o Diabo

E mais os best-sellers:
- Segredos do Subconsciente
- O Hábito de Vencer
- A Chave Mestra da Manifestação`,
    imgs: [
      '/images/48-leis-poder.png',
      '/images/fbi-persuasion.png',
      '/images/diabo.png',
      '/images/ebooks.png',
    ],
    priceFrom: 'de R$197,00',
    priceTo: 'por apenas R$59',
    installments: 'ou em até 8x de R$ 8,58',
    hotmartLink: 'https://SEU-LINK-HOTMART-AQUI',
  },
];

const PaidEbooksSection: React.FC<PaidEbooksSectionProps> = ({
  handleCtaClick,
  isCtaAnimating,
}) => {
  const [domRef, isVisible] = useScrollAnimation(0.2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productsForSale[0].imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const product = productsForSale[0];

  return (
    <section
      id="oferta"
      ref={domRef}
      className={`paid-ebooks-section ${isVisible ? 'animated' : ''}`}
    >
      <div className="section-content-container">
        <h2 className="section-title">
          seus guias para uma mente de poder e sucesso <span className="highlight">inevitável</span>
        </h2>
        <p className="section-subtitle">
          Aprofunde seu conhecimento e acelere sua jornada com nossos e-books exclusivos.
        </p>

        <div className="product-card">
          <div className="offer-image-container">
            <Image
              key={currentImageIndex}
              src={product.imgs[currentImageIndex]}
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
            <span className="flying-book" aria-hidden="true">🧠</span>
          </a>
          <p className="secure-purchase-text">
            Compra 100% segura. Acesso vitalício. 7 dias de garantia incondicional.
          </p>
        </div>
      </div>

      <style jsx>{`
        .paid-ebooks-section {
          background: linear-gradient(135deg, #1e0a3c 0%, #000000 100%);
          padding: 60px 15px;
          color: #fff;
        }
        .section-title,
        .section-subtitle {
          text-align: center;
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
          color: #aaa;
        }
        .product-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
          max-width: 100%;
          margin: 0 auto;
        }
        .offer-image-container {
          position: relative;
          width: 100%;
          max-width: 320px;
          height: 200px;
          margin: 0 auto 20px;
        }
        .offer-image {
          object-fit: cover;
          border-radius: 10px;
        }
        .offer-name {
          font-size: 1.1rem;
          color: #f0c420;
          font-weight: 700;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .offer-desc {
          font-size: 0.9rem;
          white-space: pre-line;
          color: #ccc;
          margin-bottom: 15px;
        }
        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid #f0c420;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 12px;
          font-size: 1rem;
        }
        .price-from {
          text-decoration: line-through;
          color: #999;
          font-size: 0.8rem;
          margin: 0;
        }
        .price-to {
          font-size: 1.5rem;
          font-weight: 900;
          color: #f0c420;
          margin: 5px 0;
        }
        .price-info {
          font-size: 0.75rem;
          color: #ccc;
        }
        .cta-button {
          padding: 10px 30px;
          font-size: 0.95rem;
          background: linear-gradient(45deg, #f0c420, #ff3cac);
          color: #000;
          border: none;
          border-radius: 50px;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .flying-book {
          font-size: 1.2rem;
        }
        .secure-purchase-text {
          font-size: 0.7rem;
          color: #888;
          margin-top: 10px;
        }
        @media (min-width: 768px) {
          .offer-image-container {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default PaidEbooksSection;