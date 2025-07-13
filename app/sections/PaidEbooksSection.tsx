// sections/PaidEbooksSection.tsx
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Mantido caso precise para navegação interna
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Hook para animação de entrada ao rolar
const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold });

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

// Dados dos produtos à venda para o Carrossel
const productsForSale = [
    {
      id: 'combo-poder-mental',
      name: 'combo poder mental: reprograme, haja, manifeste!',
      desc: 'Este é o arsenal completo que você precisa para dominar sua mente, criar hábitos inquebráveis e manifestar a vida dos seus sonhos. Inclui 3 e-books essenciais.',
      img: '/images/ebooks.png',
      priceFrom: 'de R$127,00',
      priceTo: 'por apenas R$47',
      installments: 'ou em até 6x de R$ 8,82',
      hotmartLink: "https://pay.hotmart.com/O100603060L?checkoutMode=2"
    },
    
    {
      id: 'as-48-leis-do-poder',
      name: 'as 48 leis do poder: estratégias para dominar',
      desc: 'Desvende as leis universais da influência e da estratégia para alcançar seus objetivos e proteger-se de manipulações. Um manual indispensável para o sucesso em qualquer área.',
      img: '/images/48-leis-poder.png',
      priceFrom: 'de R$99,90',
      priceTo: 'por apenas R$29,90',
      installments: 'ou em até 7x de R$ 9,50',
      hotmartLink: "https://pay.hotmart.com/ID_HOTMART_48_LEIS_PODER"
    },
];

const PaidEbooksSection: React.FC<PaidEbooksSectionProps> = ({ handleCtaClick, isCtaAnimating }) => {
    const [domRef, isVisible] = useScrollAnimation(0.2);
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    const nextProduct = useCallback(() => {
        setCurrentProductIndex((prevIndex) => (prevIndex + 1) % productsForSale.length);
    }, []);

    const prevProduct = useCallback(() => {
        setCurrentProductIndex((prevIndex) => (prevIndex - 1 + productsForSale.length) % productsForSale.length);
    }, []);

    const currentProduct = productsForSale.at(currentProductIndex)!;

    return (
        <section id="oferta" ref={domRef} className={`section paid-ebooks-section ${isVisible ? 'animated' : ''}`}>
            {/* REMOVIDO: <div className="section-content-container">
                Os estilos de max-width, margin:auto, padding e flexbox agora estão na classe .section em globals.css */}
            <h2 className="section-title">
                seus guias para uma mente de poder e sucesso <span className="highlight">inevítavel</span>
            </h2>
            <p className="section-subtitle">
                Aprofunde seu conhecimento e acelere sua jornada com nossos e-books exclusivos, criados para te guiar passo a passo na sua transformação.
            </p>
            <div className="product-carousel-outer-wrapper">
                <button className="carousel-arrow left" onClick={prevProduct} aria-label="Produto anterior">
                    <IoIosArrowBack size={40} />
                </button>
                <div className="product-carousel-inner-content">
                    <div className="product-offer-card glow-on-hover carousel-item">
                        <div className="offer-image-container">
                            <Image
                                src={currentProduct.img}
                                alt={currentProduct.name}
                                fill
                                className="offer-image"
                                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 320px"
                            />
                        </div>
                        <h3 className="offer-name">{currentProduct.name}</h3>
                        <div className="price-box">
                            <p className="price-from"><span>{currentProduct.priceFrom}</span></p>
                            <p className="price-to">{currentProduct.priceTo}</p>
                            <p className="price-info">{currentProduct.installments}</p>
                        </div>
                        <a
                            href={currentProduct.hotmartLink}
                            onClick={handleCtaClick(currentProduct.hotmartLink)}
                            className={`cta-button ${isCtaAnimating ? 'animating' : ''}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="button-text">comprar agora</span>
                            <span className="flying-book" aria-hidden="true">🧠</span>
                        </a>
                        <p className="secure-purchase-text">Compra 100% segura. Acesso vitalício. 7 dias de garantia incondicional.</p>
                    </div>
                </div>
                <button className="carousel-arrow right" onClick={nextProduct} aria-label="Próximo produto">
                    <IoIosArrowForward size={40} />
                </button>
            </div>

            <style jsx>{`
                /* A classe .section (em globals.css) agora gerencia o max-width, margin:auto, padding e flexbox. */
                .paid-ebooks-section {
                    background-color: var(--color-pure-black);
                    border-top: 1px solid rgba(var(--color-text-light), 0.1);
                    border-bottom: 1px solid rgba(var(--color-text-light), 0.1);
                    /* Padding já definido na classe .section em globals.css */
                    /* display, flex-direction, align-items já definidos na classe .section em globals.css */
                }

                /* Títulos e subtítulos da seção para se alinharem com o container (globalmente) */
                /* .section-title e .section-subtitle já têm estilos em globals.css */

                .product-carousel-outer-wrapper {
                    position: relative;
                    width: 100%;
                    max-width: 1100px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 20px;
                    box-sizing: border-box;
                }
                .product-carousel-inner-content {
                    flex-grow: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .carousel-arrow {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    padding: 10px;
                    color: var(--color-neon-yellow);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.3s ease, color 0.3s ease;
                    z-index: 10;
                    flex-shrink: 0;
                    margin: 0 20px;
                    border: none;
                    cursor: pointer;
                }
                .carousel-arrow:hover {
                    background: rgba(255, 255, 255, 0.2);
                    color: var(--color-neon-blue);
                }

                .carousel-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    background: linear-gradient(160deg, rgba(var(--color-neon-purple), 0.1), rgba(var(--color-neon-blue), 0.1));
                    border-radius: 15px;
                    padding: 30px;
                    width: 100%;
                    max-width: 400px;
                    text-align: center;
                    box-sizing: border-box;
                    flex-shrink: 0;
                    border: 1px solid rgba(var(--color-text-light), 0.2);
                }
                .offer-image-container {
                    position: relative;
                    width: 200px;
                    height: 250px;
                    overflow: hidden;
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                    margin-bottom: 15px;
                }
                .offer-image {
                    object-fit: cover;
                    object-position: center;
                }
                .offer-name {
                    font-size: 1.4rem;
                    color: var(--color-neon-yellow);
                    font-weight: 700;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    line-height: 1.3;
                }
                .offer-description {
                    display: none;
                }
                .price-box {
                    background: rgba(var(--color-neon-yellow), 0.1);
                    border: 1px solid var(--color-neon-yellow);
                    padding: 10px 15px;
                    border-radius: 8px;
                    margin-bottom: 15px;
                    text-align: center;
                    width: fit-content;
                    align-self: center;
                    box-shadow: 0 0 10px rgba(var(--color-neon-yellow), 0.2);
                }
                .price-from {
                    text-decoration: line-through;
                    opacity: 0.7;
                    font-size: 0.8rem;
                    color: var(--color-text-secondary);
                    margin: 0;
                }
                .price-to {
                    font-size: 1.8rem;
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
                /* cta-button e flying-book já têm estilos globais em app/page.tsx ou globals.css */
                .paid-ebooks-section .secure-purchase-text {
                    font-size: 0.7rem;
                    color: var(--color-text-tertiary);
                    margin-top: 15px;
                    text-align: center;
                }

                /* Responsividade */
                @media (max-width: 1024px) { /* Tablets em paisagem e notebooks menores */
                    .product-carousel-outer-wrapper {
                        max-width: 900px;
                    }
                    .carousel-item {
                        padding: 25px;
                        gap: 12px;
                        max-width: 350px;
                    }
                    .offer-image-container {
                        width: 180px;
                        height: 225px; /* 2:3 ratio of 180px width */
                    }
                    .offer-name {
                        font-size: 1.3rem;
                    }
                    .price-to {
                        font-size: 1.7rem;
                    }
                }

                @media (max-width: 768px) {
                    /* Padding da seção já gerenciado por .section em globals.css */
                    /* Títulos e subtítulos já gerenciados por .section-title/.section-subtitle em globals.css */

                    .product-carousel-outer-wrapper {
                        flex-direction: column;
                        gap: 25px;
                        padding: 0; /* Removido padding lateral aqui, gerenciado por .section */
                    }
                    .carousel-arrow {
                        position: static;
                        margin: 0;
                        padding: 8px;
                        size: 35px;
                    }
                    .product-carousel-inner-content {
                        order: 1; /* Garante que o card fique no meio entre as setas no mobile */
                    }
                    .carousel-arrow.left {
                        order: 2;
                    }
                    .carousel-arrow.right {
                        order: 3;
                    }
                    .carousel-item {
                        max-width: 300px;
                        padding: 20px;
                        gap: 10px;
                        border: 1px solid rgba(var(--color-text-light), 0.15);
                    }
                    .offer-image-container {
                        width: 150px;
                        height: 190px;
                        margin-bottom: 10px;
                        box-shadow: 0 3px 10px rgba(0,0,0,0.25);
                    }
                    .offer-name {
                        font-size: 1.1rem;
                        margin-bottom: 5px;
                        line-height: 1.3;
                    }
                    .price-box {
                        padding: 8px 12px;
                        margin-bottom: 10px;
                        box-shadow: 0 0 8px rgba(var(--color-neon-yellow), 0.15);
                    }
                    .price-to {
                        font-size: 1.5rem;
                    }
                    .price-info {
                        font-size: 0.7rem;
                    }
                    /* cta-button já gerenciado globalmente */
                    .paid-ebooks-section .secure-purchase-text {
                        margin-top: 10px;
                        font-size: 0.7rem;
                    }
                }

                @media (max-width: 480px) {
                    /* Padding da seção já gerenciado por .section em globals.css */
                    /* Títulos e subtítulos já gerenciados por .section-title/.section-subtitle em globals.css */

                    .carousel-item {
                        padding: 15px;
                    }
                    .offer-image-container {
                        width: 120px;
                        height: 150px;
                        margin-bottom: 8px;
                    }
                    .offer-name {
                        font-size: 1rem;
                    }
                    .price-to {
                        font-size: 1.3rem;
                    }
                    .price-info {
                        font-size: 0.65rem;
                    }
                    /* cta-button já gerenciado globalmente */
                    .paid-ebooks-section .secure-purchase-text {
                        font-size: 0.65rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default PaidEbooksSection;