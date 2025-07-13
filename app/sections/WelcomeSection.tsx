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
            width="100%"
            height="100%"
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
        }

        .section-content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-title {
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1.2;
          color: var(--color-text-light);
          text-transform: uppercase;
          margin-bottom: 25px;
          max-width: 900px;
          width: 100%;
        }

        .hero-subtitle {
          margin-bottom: 50px;
          max-width: 800px;
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 1000px;
          padding-bottom: 56.25%;
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
          color: var(--color-text-secondary);
          max-width: 700px;
          line-height: 1.6;
          margin-top: 30px;
        }

        @media (max-width: 1200px) {
          .hero-title {
            font-size: 2.3rem;
            line-height: 1.25;
            max-width: 750px;
          }

          .video-container {
            max-width: 900px;
          }
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 1.9rem;
            line-height: 1.2;
            margin-bottom: 20px;
            max-width: 600px;
          }

          .hero-subtitle {
            font-size: 1rem;
            max-width: 650px;
          }

          .video-container {
            max-width: 800px;
          }
        }

        @media (max-width: 768px) {
          .welcome-section {
            padding-top: 80px;
            padding-bottom: 60px;
          }

          .hero-title {
            font-size: 1.6rem;
            margin-bottom: 20px;
            line-height: 1.2;
            max-width: 100%;
          }

          .hero-subtitle {
            font-size: 0.9rem;
            margin-bottom: 40px;
            line-height: 1.5;
            max-width: 100%;
          }

          .welcome-text-intro {
            margin-top: 20px;
            font-size: 0.85rem;
            line-height: 1.5;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .welcome-section {
            padding-top: 60px;
            padding-bottom: 40px;
          }

          .hero-title {
            font-size: 1.3rem;
            margin-bottom: 15px;
            line-height: 1.3;
          }

          .hero-subtitle {
            font-size: 0.75rem;
            margin-bottom: 30px;
            line-height: 1.4;
          }

          .welcome-text-intro {
            margin-top: 15px;
            font-size: 0.75rem;
            line-height: 1.4;
          }
        }
      `}</style>
    </section>
  );
};

export default WelcomeSection;
