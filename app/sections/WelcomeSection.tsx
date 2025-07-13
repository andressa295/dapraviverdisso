'use client';

import React, { useRef, useEffect, useState } from 'react';

// Hook para animação de entrada ao rolar
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
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return [domRef, isVisible] as const;
};

const WelcomeSection: React.FC = () => {
  const [domRef, isVisible] = useScrollAnimation(0.2);

  return (
    <section
      id="inicio"
      ref={domRef}
      className={`section welcome-section ${isVisible ? 'animated' : ''}`}
    >
      <div className="section-content-container">
        <h1 className="hero-title">
          sua mente te aguarda. <br />
          e você <span className="highlight">não está sozinho(a).</span>
        </h1>
        <p className="hero-subtitle">
          Recomeçar, Transformar, Vencer: Sua Mente É a Chave. Um convite para
          despertar o poder que já existe em você.
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/elJqW_5S0fo?si=dnbSFeNUpf6EEKp1"
            title="Sua Mensagem Pessoal"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <p className="welcome-text-intro">
          Nesta jornada, vamos juntos desvendar os segredos da sua mente para
          construir a vida que você merece. Conecte-se comigo.
        </p>
      </div>

      <style jsx>{`
        .welcome-section {
          padding-top: 100px;
          padding-bottom: 80px;
          background-color: var(--color-pure-black);
          color: var(--color-text-light);
        }

        .section-content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-title {
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1.2;
          text-transform: uppercase;
          margin-bottom: 25px;
          max-width: 900px;
          width: 100%;
          color: var(--color-text-light);
        }

        .hero-subtitle {
          margin-bottom: 50px;
          max-width: 800px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 1000px;
          padding-bottom: 56.25%; /* 16:9 */
          height: 0;
          background-color: #111;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(37, 117, 252, 0.15);
          margin: 0 auto 30px auto;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .welcome-text-intro {
          font-size: 1rem;
          max-width: 700px;
          line-height: 1.6;
          margin-top: 30px;
          color: var(--color-text-secondary);
        }

        /* DESKTOP */
        @media (min-width: 1025px) {
          .video-container {
            max-width: 1000px;
            padding-bottom: 56.25%;
          }
        }

        /* TABLET */
        @media (min-width: 769px) and (max-width: 1024px) {
          .video-container {
            max-width: 700px;
            padding-bottom: 56.25%;
          }
          .hero-title {
            font-size: 2.3rem;
            max-width: 750px;
          }
          .hero-subtitle {
            font-size: 1rem;
            max-width: 650px;
          }
        }

        /* CELULAR MÉDIO E GRANDE */
        @media (max-width: 768px) {
        .welcome-section {
        padding-top: 200px; /* Use um valor como 150px ou 160px. Teste para ver o melhor ajuste. */
        padding-bottom: 60px; /* Mantenha seu valor existente */
    }
          }
          .video-container {
            max-width: 450px;
            padding-bottom: 56.25%;
            margin-bottom: 25px;
          }
          .hero-title {
            font-size: 1.6rem;
            max-width: 100%;
            margin-bottom: 20px;
          }
          .hero-subtitle {
            font-size: 0.9rem;
            margin-bottom: 40px;
            max-width: 100%;
          }
          .welcome-text-intro {
            font-size: 0.85rem;
            max-width: 100%;
            margin-top: 20px;
          }
        }

        /* CELULAR PEQUENO */
        @media (max-width: 480px) {
          .welcome-section {
            padding-top: 60px;
            padding-bottom: 40px;
          }
          .video-container {
            max-width: 320px;
            padding-bottom: 56.25%;
            margin-bottom: 20px;
          }
          .hero-title {
            font-size: 1.3rem;
            margin-bottom: 15px;
            line-height: 1.3;
            max-width: 100%;
          }
          .hero-subtitle {
            font-size: 0.75rem;
            margin-bottom: 30px;
            max-width: 100%;
          }
          .welcome-text-intro {
            font-size: 0.75rem;
            margin-top: 15px;
            max-width: 100%;
          }
        }

        /* Destaque do span */
        .highlight {
          color: var(--color-neon-yellow);
          font-weight: 800;
        }
      `}</style>
    </section>
  );
};

export default WelcomeSection;
