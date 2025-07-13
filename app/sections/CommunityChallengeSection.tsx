// sections/CommunityChallengeSection.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { CheckIcon } from '../components/Icon'; // Assuming CheckIcon is defined elsewhere
import { FaWhatsapp } from 'react-icons/fa';

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


interface CommunityChallengeSectionProps {
    // Se precisar de props no futuro
}

const CommunityChallengeSection: React.FC<CommunityChallengeSectionProps> = () => {
    const [domRef, isVisible] = useScrollAnimation(0.2);

    return (
        <section id="comunidade" ref={domRef} className={`community-challenge-section-highlight section ${isVisible ? 'animated' : ''}`}>
            {/* REMOVIDO: <div className="section-content-container">
                Os estilos de max-width, margin:auto, padding e flexbox agora estão na classe .section em globals.css */}
            <h2 className="section-title community-title">
                sua virada começa aqui: <span className="highlight">desafio poder mental de 21 dias!</span>
            </h2>
            <p className="section-subtitle community-subtitle">
                Criei uma comunidade exclusiva e um desafio gratuito de 21 dias para você reprogramar sua mente, quebrar ciclos e ativar seu verdadeiro potencial. Junte-se a centenas de pessoas que estão transformando suas vidas, um passo por vez.
            </p>
            <div className="challenge-benefits-grid">
                <div className="benefit-item">
                    <CheckIcon />
                    <p>Desbloqueie crenças limitantes e descubra seu verdadeiro potencial.</p>
                </div>
                <div className="benefit-item">
                    <CheckIcon />
                    <p>Assuma o comando da sua mente e do seu dia com foco e clareza.</p>
                </div>
                <div className="benefit-item">
                    <CheckIcon />
                    <p>Crie hábitos poderosos que impulsionarão seu sucesso diariamente.</p>
                </div>
                <div className="benefit-item">
                    <CheckIcon />
                    <p>Receba conteúdo exclusivo e suporte contínuo da comunidade.</p>
                </div>
                <div className="benefit-item">
                    <CheckIcon />
                    <p>Transforme a procrastinação em ação e a ansiedade em paz interior.</p>
                </div>
                <div className="benefit-item">
                    <CheckIcon />
                    <p>Prepare-se para uma vida com mais prosperidade e oportunidades reais.</p>
                </div>
            </div>
            <a 
                href="https://chat.whatsapp.com/KN8ws56OUTFKXIvEfprqWr?mode=ac_t" 
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta-button"
            >
                <FaWhatsapp size={24} />
                <span className="button-text">quero entrar na comunidade grátis!</span>
            </a>

            <style jsx>{`
                /* A classe .section (em globals.css) agora gerencia o max-width, margin:auto, padding e flexbox. */
                .community-challenge-section-highlight {
                    background-color: #FFFFFF;
                    /* Padding já definido na classe .section em globals.css */
                    position: relative;
                    text-align: center;
                    overflow: hidden;
                    margin-top: 60px;
                    margin-bottom: 60px;
                }
                
                .community-challenge-section-highlight::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 15px;
                    background: var(--color-neon-gradient);
                    box-shadow: 0 0 30px rgba(37, 117, 252, 0.7);
                    animation: border-glow 2.5s infinite alternate ease-in-out;
                }
                .community-challenge-section-highlight::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 15px;
                    background: var(--color-neon-gradient);
                    box-shadow: 0 0 30px rgba(37, 117, 252, 0.7);
                    animation: border-glow 2.5s infinite alternate ease-in-out reverse;
                }

                @keyframes border-glow {
                    0% { opacity: 0.7; transform: scaleX(0.9); }
                    50% { opacity: 1; transform: scaleX(1); }
                    100% { opacity: 0.7; transform: scaleX(0.9); }
                }
                
                .community-challenge-section-highlight .community-title {
                    color: var(--color-dark-bg);
                    /* font-size e margin-bottom já definidos na classe .section-title em globals.css */
                }
                .community-challenge-section-highlight .community-subtitle {
                    color: #444;
                    /* font-size e margin-bottom já definidos na classe .section-subtitle em globals.css */
                }
                .community-challenge-section-highlight .highlight {
                    /* Estilo de highlight já definido em globals.css */
                }
                
                .challenge-benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                    width: 100%;
                    margin-bottom: 50px;
                    max-width: 900px; /* Limita a largura do grid de benefícios */
                }
                .benefit-item {
                    background-color: #F0F0F0;
                    border: 1px solid #DDD;
                    padding: 25px;
                    border-radius: 10px;
                    text-align: left;
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                    font-size: 1rem;
                    color: #333;
                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                }
                .benefit-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
                    border-color: var(--color-neon-blue);
                }
                .benefit-item svg {
                    flex-shrink: 0;
                    margin-top: 2px;
                    color: var(--color-neon-purple);
                }
                .benefit-item p {
                    margin: 0;
                    color: #333;
                    line-height: 1.4; /* Ajustado para melhor legibilidade */
                }
                /* Botão do WhatsApp CTA (estilos globais em app/page.tsx ou globals.css) */
                /* .whatsapp-cta-button já tem estilos globais, apenas ajustes específicos aqui */

                /* Responsividade */
                @media (max-width: 1024px) { /* Tablets em paisagem e notebooks menores */
                    .challenge-benefits-grid {
                        gap: 25px;
                        max-width: 700px;
                    }
                    .benefit-item {
                        font-size: 0.95rem;
                        padding: 20px;
                    }
                }

                @media (max-width: 768px) {
                    /* Padding da seção já gerenciado por .section em globals.css */
                    /* Títulos e subtítulos já gerenciados por .section-title/.section-subtitle em globals.css */

                    .challenge-benefits-grid {
                        grid-template-columns: 1fr; /* Uma coluna no mobile */
                        gap: 20px;
                        margin-bottom: 40px;
                        max-width: 400px; /* Limita largura do grid no mobile */
                    }
                    .benefit-item {
                        font-size: 0.9rem;
                        padding: 18px;
                    }
                }

                @media (max-width: 480px) {
                    /* Padding da seção já gerenciado por .section em globals.css */
                    /* Títulos e subtítulos já gerenciados por .section-title/.section-subtitle em globals.css */

                    .challenge-benefits-grid {
                        gap: 15px;
                        margin-bottom: 30px;
                    }
                    .benefit-item {
                        padding: 15px;
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default CommunityChallengeSection;