'use client';

import React, { useState, useEffect, useRef } from 'react';

// Hook para animação de entrada ao rolar (incluído diretamente aqui para resolver o erro de resolução)
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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


interface PaidEbooksSectionProps {
  handleCtaClick: (link: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isCtaAnimating: boolean;
}

const productsForSale = [
  {
    id: 'combo-reset-mental',
    name: 'COMBO: RESET MENTAL',
    desc: `O pacote definitivo para sua transformação:`, // Descrição simplificada
    imgs: [
      // Recomenda-se que estas imagens tenham uma proporção de 3:4 (largura:altura), ex: 600x800px
      '/images/48-leis-poder.png',
      '/images/fbi-persuasion.png',
      '/images/diabo.png',
      '/images/ebooks.png', // Se esta for uma imagem de combo, certifique-se de que se encaixa na proporção 3:4
    ],
    priceFrom: 'de R$197,00', // Preço conforme solicitado
    priceTo: 'por apenas R$59',
    installments: 'ou em até 8x de R$ 8,58',
    hotmartLink: 'https://pay.hotmart.com/D100837353X?bid=1755660170903',
  },
];

const PaidEbooksSection: React.FC<PaidEbooksSectionProps> = ({
  handleCtaClick,
  isCtaAnimating,
}) => {
  const [domRef, isVisible] = useScrollAnimation(0.2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Efeito para trocar a imagem a cada 3 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productsForSale[0].imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const product = productsForSale[0];

  return (
    <section
      id="PaidEbooksSection" // ID mantido para compatibilidade com o HeroSection
      ref={domRef}
      className={`paid-ebooks-section ${isVisible ? 'animated' : ''}`}
    >
      <div className="section-content-container">
        {/* Título e subtítulo reformulados para o combo */}
        <h2 className="section-title">
          <span className="gradient-text">Combo: Reset Mental</span>
        </h2>
        <p className="section-subtitle">
          Transforme sua realidade com a sabedoria dos maiores mestres.
        </p>

        <div className="product-card">
          <div className="offer-image-container">
            <img
              key={currentImageIndex} // Key para forçar a re-renderização e transição
              src={product.imgs[currentImageIndex]}
              alt={product.name}
              className="offer-image"
              width={300} // Tamanho de referência para a proporção 3:4
              height={400} // Tamanho de referência para a proporção 3:4
            />
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
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');

        .paid-ebooks-section {
          background-color: #000000; /* Fundo preto sólido */
          padding: 20px 16px; /* Ajusta o padding lateral para margens externas */
          color: #fff;
          font-family: 'Poppins', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center; /* Centraliza o conteúdo verticalmente */
          min-height: 80vh; /* Garante que ocupa uma boa parte da altura da viewport */
        }
        .section-content-container {
            max-width: 768px; /* Largura máxima padrão para o conteúdo */
            width: 100%;
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 25px; /* Espaço entre os elementos principais da seção */
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
          background-image: linear-gradient(to right, #00F0FF, #007BFF); /* Gradiente azul/ciano */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .section-subtitle {
          margin-bottom: 25px;
          font-size: 1.1rem;
          color: #93c5fd; /* Azul claro consistente */
        }
        .product-card {
          background: rgba(255, 255, 255, 0.05); /* Fundo sutil */
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          /* Borda removida */
          box-shadow: 0 0 15px rgba(0, 123, 255, 0.1); /* Sombra consistente */
          max-width: 450px; /* Limita a largura do cartão em desktop */
          width: 100%;
          box-sizing: border-box; /* Garante que padding e borda sejam incluídos na largura */
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px; /* Espaço entre os elementos dentro do cartão */
        }
        .offer-image-container {
          position: relative;
          width: 100%;
          /* Proporção 3:4 (largura:altura) para imagens de livros. Ajuste aqui se as suas imagens tiverem outra proporção */
          aspect-ratio: 3 / 4;
          max-width: 300px; /* Largura máxima para a imagem */
          height: auto; /* A altura é definida pelo aspect-ratio */
          margin: 0 auto 10px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 123, 255, 0.3); /* Brilho sutil */
        }
        .offer-image {
          display: block; /* Garante que a imagem se comporte como bloco */
          width: 100%; /* Ocupa 100% da largura do contêiner */
          height: 100%; /* Ocupa 100% da altura do contêiner */
          object-fit: contain; /* Garante que a imagem inteira seja visível, sem cortes ou distorções */
          border-radius: 10px;
          transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* Transição suave para troca de imagens */
        }
        .offer-name {
          font-size: 1.2rem;
          color: #00BFFF; /* Deep Sky Blue para o nome do combo */
          font-weight: 700;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .offer-desc {
          font-size: 0.95rem;
          white-space: pre-line;
          color: #bfdbfe; /* Azul claro para a descrição */
          margin-bottom: 15px;
          line-height: 1.5;
        }
        .price-box {
          background: rgba(0, 123, 255, 0.1);
          border: 1px solid #007BFF;
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 20px;
          width: 80%;
          max-width: 250px;
        }
        .price-from {
          text-decoration: line-through;
          color: #67e8f9; /* Ciano claro para o preço original */
          font-size: 0.9rem;
          margin: 0;
        }
        .price-to {
          font-size: 1.8rem;
          font-weight: 900;
          color: #00F0FF; /* Aqua vibrante para o preço final */
          margin: 5px 0;
        }
        .price-info {
          font-size: 0.85rem;
          color: #93c5fd; /* Azul claro para info de parcelas */
        }
        .cta-button {
          padding: 16px 40px;
          background-image: linear-gradient(to right, #00BFFF, #1E90FF); /* Gradiente azul para o botão */
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 700;
          border-radius: 9999px; /* Formato oval */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          user-select: none;
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

        /* Animação de entrada (mantida) */
        .paid-ebooks-section.animated .section-content-container {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .section-content-container {
            opacity: 0;
            transform: translateY(20px);
        }

        /* Responsividade */
        @media (max-width: 1024px) {
            .section-title { font-size: 2rem; }
            .section-subtitle { font-size: 1rem; }
            .offer-image-container { max-width: 250px; }
            .offer-name { font-size: 1.1rem; }
            .offer-desc { font-size: 0.85rem; }
            .price-to { font-size: 1.6rem; }
            .cta-button { font-size: 1.3rem; padding: 14px 30px; }
        }

        @media (max-width: 768px) {
            .paid-ebooks-section { padding: 40px 16px; } /* Ajuste de padding lateral para mobile */
            .section-content-container { gap: 20px; }
            .section-title { font-size: 1.8rem; margin-bottom: 10px;}
            .section-subtitle { font-size: 0.9rem; margin-bottom: 20px;}
            .product-card { padding: 25px; gap: 10px; max-width: 350px; } /* Max-width para card em mobile */
            .offer-image-container { max-width: 220px; }
            .offer-name { font-size: 1rem; }
            .offer-desc { font-size: 0.8rem; }
            .price-box { padding: 12px; width: 90%; }
            .price-to { font-size: 1.4rem; }
            .price-info { font-size: 0.7rem; }
            .cta-button { font-size: 1.1rem; padding: 12px 25px; }
            .secure-purchase-text { margin-top: 15px; font-size: 0.7rem; }
        }

        @media (max-width: 480px) {
            .paid-ebooks-section { padding: 30px 10px; } /* Ajuste de padding lateral para telas pequenas */
            .section-content-container { gap: 15px; }
            .section-title { font-size: 1.5rem; margin-bottom: 8px;}
            .section-subtitle { font-size: 0.8rem; margin-bottom: 15px;}
            .product-card { padding: 20px; gap: 8px; max-width: 280px; } /* Max-width menor para cards em telas muito pequenas */
            .offer-image-container { max-width: 180px; }
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
