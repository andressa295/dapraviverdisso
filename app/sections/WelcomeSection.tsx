'use client';

import React, { useRef, useEffect, useState } from 'react';


// Hook para animação de entrada ao rolar - CORRIGIDO
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { // <-- CORREÇÃO AQUI: 'entries' como parâmetro do callback
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Deixa de observar depois que fica visível
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
  }, [threshold]); // isVisible removido daqui, pois a lógica de unobserve já controla

  return [domRef, isVisible] as const;
};


interface WelcomeSectionProps {
    // Se precisar de props no futuro
}

const WelcomeSection: React.FC<WelcomeSectionProps> = () => {
    // Esta seção não usa a animação `animated` por padrão para evitar flicker.
    // Ela aparece imediatamente com opacidade total.
    const [domRef] = useScrollAnimation(0.2); // useScrollAnimation vai ser só para o `ref`

    return (
        <section id="inicio" ref={domRef} className={`section welcome-section`}>
            <h1 className="hero-title">
                sua mente te aguarda. <br/>e você <span className="highlight">não está sozinho(a).</span>
            </h1>
            <p className="hero-subtitle">
                Recomeçar, Transformar, Vencer: Sua Mente É a Chave. Um convite para despertar o poder que já existe em você.
            </p>
            <div className="video-container">
                <iframe
                    width="100%"
                    height="auto"
                    src="https://www.youtube.com/embed/elJqW_5S0fo?si=HI4sJBkYo7jDuy6d" // SUBSTITUA PELO ID DO SEU VÍDEO
                    title="Sua Mensagem Pessoal"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="video-overlay">
                    <p>Assista ao meu vídeo e descubra como o Poder Mental pode ser o seu próximo passo.</p>
                </div>
            </div>
            <p className="welcome-text-intro">
                Nesta jornada, vamos juntos desvendar os segredos da sua mente para construir a vida que você merece. Conecte-se comigo.
            </p>

            <style jsx>{`
                .welcome-section {
                    padding-top: 100px;
                    padding-bottom: 80px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .hero-title {
                    font-size: 2.8rem;
                    font-weight: 900;
                    line-height: 1.2;
                    color: var(--color-text-light);
                    text-transform: uppercase;
                    margin-bottom: 25px;
                }
                .hero-subtitle {
                    margin-bottom: 50px;
                }
                .video-container {
                    position: relative;
                    width: 80%;
                    max-width: 800px;
                    padding-bottom: 45%; 
                    height: 0;
                    background-color: #111;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 0 30px rgba(37, 117, 252, 0.15);
                    margin-bottom: 30px;
                }
                .video-container iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: none;
                }
                .video-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));
                    padding: 20px 10px 10px;
                    color: var(--color-text-light);
                    font-size: 0.9rem;
                    text-shadow: 0 0 5px rgba(0,0,0,0.5);
                    pointer-events: none;
                }
                .welcome-text-intro {
                    font-size: 1rem;
                    color: var(--color-text-secondary);
                    max-width: 700px;
                    line-height: 1.5;
                    margin-top: 30px;
                }

                @media (max-width: 768px) {
                    .welcome-section {
                        padding-top: 80px;
                        padding-bottom: 60px;
                    }
                    .hero-title {
                        font-size: 2rem;
                        margin-bottom: 20px;
                    }
                    .hero-subtitle {
                        font-size: 0.9rem;
                        margin-bottom: 40px;
                    }
                    .video-container {
                        width: 95%;
                    }
                    .welcome-text-intro {
                        margin-top: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .welcome-section {
                        padding-top: 60px;
                        padding-bottom: 40px;
                    }
                    .hero-title {
                        font-size: 1.4rem;
                        margin-bottom: 15px;
                    }
                    .hero-subtitle {
                        font-size: 0.8rem;
                        margin-bottom: 30px;
                    }
                    .video-container {
                        width: 100%;
                    }
                    .welcome-text-intro {
                        margin-top: 15px;
                    }
                }
            `}</style>
        </section>
    );
};

export default WelcomeSection;