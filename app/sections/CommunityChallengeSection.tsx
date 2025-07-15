// sections/CommunityChallengeSection.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { CheckIcon } from '../components/Icon';
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
    }, [threshold]);
  
    return [domRef, isVisible] as const;
  };


interface CommunityChallengeSectionProps {
    // Se precisar de props no futuro
}

const CommunityChallengeSection: React.FC<CommunityChallengeSectionProps> = () => {
    const [domRef, isVisible] = useScrollAnimation(0.2);

    return (
        <section id="comunidade" ref={domRef} className={`community-challenge-section-highlight ${isVisible ? 'animated' : ''}`}> {/* Aplicando 'animated' */}
            <div className="section-content-wrapper">
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
                    href="https://whatsapp.com/channel/0029VbBCoSoG8l5KntZDyS0P/100" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-cta-button"
                >
                    <FaWhatsapp size={24} />
                    <span className="button-text">quero entrar na comunidade grátis!</span>
                </a>
            </div>

            <style jsx>{`
                .community-challenge-section-highlight {
                    width: 100%;
                    background-color: #FFFFFF;
                    padding: 80px 25px;
                    box-sizing: border-box;
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

                .community-challenge-section-highlight .section-content-wrapper {
                    max-width: 1100px;
                    margin: 0 auto;
                    color: var(--color-dark-bg);
                }
                .community-challenge-section-highlight .community-title {
                    color: var(--color-dark-bg);
                    font-size: 2.5rem;
                    margin-bottom: 30px;
                }
                .community-challenge-section-highlight .community-subtitle {
                    color: #444;
                    font-size: 1.1rem;
                    margin-bottom: 50px;
                }
                .community-challenge-section-highlight .highlight {
                    background: var(--color-neon-gradient);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .challenge-benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                    width: 100%;
                    margin-bottom: 50px;
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
                }
                /* Botão do WhatsApp CTA */
                .whatsapp-cta-button {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 15px 30px;
                    border-radius: 50px;
                    background: #25D366;
                    color: white;
                    font-weight: 700;
                    font-size: 1.05rem;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 20px -8px rgba(37, 211, 102, 0.6);
                    width: fit-content;
                    text-transform: uppercase;
                }
                .whatsapp-cta-button:hover {
                    transform: translateY(-3px);
                    background: #1DA851;
                    box-shadow: 0 10px 25px -8px rgba(37, 211, 102, 0.8);
                }

                /* Responsividade */
                @media (max-width: 768px) {
                    .community-challenge-section-highlight {
                        padding: 60px 20px;
                        margin-top: 40px;
                        margin-bottom: 40px;
                    }
                    .community-challenge-section-highlight .community-title {
                        font-size: 1.8rem;
                        margin-bottom: 25px;
                    }
                    .community-challenge-section-highlight .community-subtitle {
                        font-size: 1rem;
                        margin-bottom: 30px;
                    }
                    .challenge-benefits-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                        margin-bottom: 40px;
                    }
                    .benefit-item {
                        font-size: 0.9rem;
                        padding: 20px;
                    }
                    .whatsapp-cta-button {
                        padding: 12px 25px;
                        font-size: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .community-challenge-section-highlight {
                        padding: 40px 15px;
                        margin-top: 30px;
                        margin-bottom: 30px;
                    }
                    .community-challenge-section-highlight .community-title {
                        font-size: 1.4rem;
                        margin-bottom: 20px;
                    }
                    .community-challenge-section-highlight .community-subtitle {
                        font-size: 0.85rem;
                        margin-bottom: 25px;
                    }
                    .challenge-benefits-grid {
                        gap: 10px;
                        margin-bottom: 25px;
                    }
                    .benefit-item {
                        padding: 15px;
                        font-size: 0.8rem;
                    }
                    .whatsapp-cta-button {
                        padding: 10px 20px;
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default CommunityChallengeSection;