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
            observer.unobserve(entry.target); // Deixa de observar depois que fica visível
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
    }, [threshold]); // Dependência threshold é importante

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
      installments: 'ou em até 6x de R$  8,82',
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

    // Usando useCallback para memoizar estas funções, prevenindo re-renders desnecessários
    const nextProduct = useCallback(() => {
        setCurrentProductIndex((prevIndex) => (prevIndex + 1) % productsForSale.length);
    }, []);

    const prevProduct = useCallback(() => {
        setCurrentProductIndex((prevIndex) => (prevIndex - 1 + productsForSale.length) % productsForSale.length);
    }, []);

    // Garante que currentProduct seja sempre válido usando .at() e um non-null assertion
    // .at() permite indexação com números negativos, mas % lida com isso.
    const currentProduct = productsForSale.at(currentProductIndex)!;

    return (
        <section id="oferta" ref={domRef} className={`section paid-ebooks-section ${isVisible ? 'animated' : ''}`}>
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
                                fill // Use fill para imagens responsivas dentro de um pai com tamanho definido
                                className="offer-image"
                                sizes="(max-width: 768px) 100vw, 320px" // Otimiza o carregamento da imagem para diferentes viewports
                            />
                        </div>
                        {/* O Título agora vem logo abaixo da imagem */}
                        <h3 className="offer-name">{currentProduct.name}</h3>
                        {/* A descrição foi removida, conforme sua solicitação */}
                        {/* <p className="offer-description">
                            {currentProduct.desc}
                        </p> */}
                        <div className="price-box">
                            <p className="price-from"><span>{currentProduct.priceFrom}</span></p>
                            <p className="price-to">{currentProduct.priceTo}</p>
                            <p className="price-info">{currentProduct.installments}</p>
                        </div>
                        <a
                            href={currentProduct.hotmartLink}
                            onClick={handleCtaClick(currentProduct.hotmartLink)}
                            className={`cta-button ${isCtaAnimating ? 'animating' : ''}`}
                            target="_blank" // Abre em uma nova aba
                            rel="noopener noreferrer" // Boa prática de segurança para target="_blank"
                        >
                            <span className="button-text">comprar agora</span>
                            <span className="flying-book" aria-hidden="true">🧠</span> {/* Adicionado aria-hidden para emojis decorativos */}
                        </a>
                        <p className="secure-purchase-text">Compra 100% segura. Acesso vitalício. 7 dias de garantia incondicional.</p>
                    </div>
                </div>
                <button className="carousel-arrow right" onClick={nextProduct} aria-label="Próximo produto">
                    <IoIosArrowForward size={40} />
                </button>
            </div>

            <style jsx>{`
                .paid-ebooks-section {
                    background-color: var(--color-pure-black);
                    border-top: 1px solid rgba(var(--color-text-light), 0.1);
                    border-bottom: 1px solid rgba(var(--color-text-light), 0.1);
                    padding-top: 80px;
                    padding-bottom: 80px;
                    display: flex;
                    flex-direction: column;
                    align-items: center; /* Centraliza conteúdo horizontalmente */
                }

                .section-title, .section-subtitle {
                    text-align: center;
                    max-width: 900px; /* Limita largura para legibilidade */
                    margin-left: auto;
                    margin-right: auto;
                    padding: 0 20px; /* Adiciona padding horizontal */
                }

                .section-title {
                    margin-bottom: 20px;
                }

                .section-subtitle {
                    margin-bottom: 40px;
                }

                .product-carousel-outer-wrapper {
                    position: relative;
                    width: 100%;
                    max-width: 1100px; /* Aumentado para dar espaço total à imagem */
                    display: flex;
                    align-items: center;
                    justify-content: space-between; /* Distribui setas e conteúdo central */
                    padding: 0 20px; /* Padding para garantir que as setas não fiquem na borda */
                    box-sizing: border-box;
                }
                .product-carousel-inner-content { /* CONTEÚDO CENTRAL DO CARROSSEL (O CARD) */
                    flex-grow: 1; /* Permite que o card ocupe o espaço restante */
                    display: flex;
                    justify-content: center; /* Centraliza o card dentro do espaço disponível */
                    align-items: center; /* Alinha verticalmente no centro */
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
                    margin: 0 20px; /* Espaçamento entre a seta e o conteúdo */
                    border: none; /* Remove borda padrão de botões */
                    cursor: pointer; /* Indica que é clicável */
                }
                .carousel-arrow:hover {
                    background: rgba(255, 255, 255, 0.2);
                    color: var(--color-neon-blue);
                }

                .carousel-item { /* O card individual dentro do carrossel */
                    display: flex;
                    flex-direction: column; /* Organiza os itens em coluna: imagem, título, preço, botão */
                    align-items: center; /* Centraliza os itens horizontalmente dentro do card */
                    gap: 15px; /* Espaçamento vertical entre os elementos do card */
                    background: linear-gradient(160deg, rgba(var(--color-neon-purple), 0.1), rgba(var(--color-neon-blue), 0.1));
                    border-radius: 15px;
                    padding: 30px; /* Padding interno do card */
                    width: 100%; /* Ocupa a largura disponível pelo max-width do container */
                    max-width: 400px; /* Largura máxima para o card em si */
                    text-align: center; /* Centraliza o texto do card */
                    box-sizing: border-box;
                    flex-shrink: 0;
                    border: 1px solid rgba(var(--color-text-light), 0.2); /* Borda sutil para o card */
                }
                .offer-image-container {
                    position: relative; /* Necessário para Next/Image fill */
                    width: 300px; /* Largura fixa para a imagem */
                    height: 250px; /* Altura fixa para a imagem (proporção 2:3, 200 * 1.25 = 250, ou 3/2 de 200 é 300 - aqui ajustei para 250px para ser mais compacto) */
                    overflow: hidden;
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3); /* Sombra mais suave */
                    margin-bottom: 15px; /* Espaço abaixo da imagem antes do título */
                }
                .offer-image {
                    object-fit: cover; /* Cobre o container mantendo a proporção */
                    object-position: center;
                }
                .offer-name {
                    font-size: 1.4rem; /* Tamanho da fonte menor para o título */
                    color: var(--color-neon-yellow);
                    font-weight: 700;
                    margin-bottom: 10px; /* Espaço abaixo do título */
                    text-align: center;
                    text-transform: uppercase;
                }
                .offer-description { /* Esta classe agora está invisível */
                    display: none;
                }
                .price-box {
                    background: rgba(var(--color-neon-yellow), 0.1);
                    border: 1px solid var(--color-neon-yellow); /* Borda mais fina */
                    padding: 10px 15px; /* Padding menor */
                    border-radius: 8px;
                    margin-bottom: 15px; /* Espaço abaixo da caixa de preço */
                    text-align: center;
                    width: fit-content;
                    align-self: center; /* Centraliza no card */
                    box-shadow: 0 0 10px rgba(var(--color-neon-yellow), 0.2); /* Sombra menor */
                }
                .price-from {
                    text-decoration: line-through;
                    opacity: 0.7;
                    font-size: 0.8rem;
                    color: var(--color-text-secondary);
                    margin: 0;
                }
                .price-to {
                    font-size: 1.8rem; /* Tamanho do preço principal ajustado */
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
                    padding: 10px 30px; /* Padding do botão menor */
                    font-size: 1rem;
                    text-transform: uppercase;
                    position: relative;
                    display: inline-flex; /* Para alinhar melhor o texto e o emoji */
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
                    margin-top: 10px; /* Espaçamento acima do botão */
                    width: fit-content;
                    line-height: 1;
                    align-self: center; /* Centraliza o botão no card */
                    border: none;
                }
                .cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 0 20px var(--color-neon-blue), 0 0 40px var(--color-neon-purple);
                }

                .cta-button .button-text {
                    position: relative;
                    z-index: 2;
                }
                .cta-button .price-tag {
                    display: none;
                }
                .flying-book {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 1.2rem; /* Ícone do livro menor */
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
                    to { opacity: 0; transform: scale(0.8); }
                }

                @keyframes fly-to-cart {
                    0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    20% { transform: translate(-50%, -150%) scale(1.2) rotate(-15deg); }
                    100% { opacity: 0; transform: translate(300px, -400px) scale(0) rotate(360deg); }
                }

                .paid-ebooks-section .secure-purchase-text {
                    font-size: 0.7rem; /* Texto de segurança menor */
                    color: var(--color-text-tertiary);
                    margin-top: 15px; /* Espaço acima do texto de segurança */
                    text-align: center;
                }

                /* Responsividade */
                /* Breakpoint intermediário para tablets maiores/laptops, não aplicável para o layout de card agora */
                @media (max-width: 992px) {
                    /* Não há necessidade de ajustes específicos aqui, o max-width do card já controla */
                }


                @media (max-width: 768px) {
                    .product-carousel-outer-wrapper {
                        padding: 0 15px; /* Ajusta padding lateral no mobile */
                    }
                    .carousel-arrow {
                        margin: 0 10px; /* Reduz espaço das setas no mobile */
                        padding: 8px; /* Setas um pouco menores */
                        size: 35px; /* Ajusta tamanho do ícone */
                    }
                    .carousel-item {
                        max-width: 300px; /* Largura máxima menor para o card no mobile */
                        padding: 20px; /* Padding interno do card no mobile */
                        gap: 10px; /* Espaçamento vertical reduzido */
                        border: 1px solid rgba(var(--color-text-light), 0.15); /* Borda mais suave no mobile */
                    }
                    .offer-image-container {
                        width: 150px; /* Imagem menor no mobile */
                        height: 190px; /* Altura ajustada para mobile (proporção similar à original) */
                        margin-bottom: 10px;
                        box-shadow: 0 3px 10px rgba(0,0,0,0.25);
                    }
                    .offer-name {
                        font-size: 1.2rem;
                        margin-bottom: 5px;
                    }
                    .price-box {
                        padding: 8px 12px;
                        margin-bottom: 10px;
                        box-shadow: 0 0 8px rgba(var(--color-neon-yellow), 0.15);
                    }
                    .price-to {
                        font-size: 1.6rem;
                    }
                    .cta-button {
                        font-size: 0.9rem;
                        padding: 8px 20px;
                        margin-top: 5px;
                    }
                    .paid-ebooks-section .secure-purchase-text {
                        margin-top: 10px;
                    }
                }

                @media (max-width: 480px) {
                    .carousel-item {
                        padding: 15px;
                    }
                    .offer-image-container {
                        width: 120px;
                        height: 150px;
                        margin-bottom: 8px;
                    }
                    .offer-name {
                        font-size: 1.1rem;
                    }
                    .price-to {
                        font-size: 1.4rem;
                    }
                    .cta-button {
                        font-size: 0.8rem;
                        padding: 6px 15px;
                    }
                    .paid-ebooks-section .secure-purchase-text {
                        font-size: 0.65rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default PaidEbooksSection;