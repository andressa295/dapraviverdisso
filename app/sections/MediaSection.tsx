'use client';

import React, { useRef, useEffect, useState } from 'react';

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
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return [domRef, isVisible] as const;
};

const MediaSection: React.FC = () => {
  const [domRef, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="midia" ref={domRef} className={`section media-section ${isVisible ? 'animated' : ''}`}>
      <div className="section-content-container">
        <h2 className="section-title">
          poder mental em ação: <span className="highlight">inspiração e insights diários</span>
        </h2>
        <p className="section-subtitle">
          Assista a vídeos selecionados e explore imagens que vão aprofundar seu entendimento e manter sua mente no caminho do sucesso.
        </p>

        <div className="video-content-wrapper">
          <div className="video-item glow-on-hover">
            <iframe
              src="https://www.youtube.com/embed/3Tq666FaKwU?si=6L9eMJoms8ZvMeYF"
              title="AS 48 LEIS DO PODER | RESUMO COMPLETO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3>como obter poder e influência</h3>
            <p>
              Para você que busca assumir o controle em qualquer situação, "As 48 Leis do Poder" nos ensina que a habilidade de influenciar e se posicionar é fundamental. Este vídeo explora estratégias mentais para você não ser manipulado e conquistar a autoridade que merece em sua vida.
            </p>
          </div>
        </div>

        
      </div>

      <style jsx>{`
        .media-section {
          padding: 80px 0;
          text-align: center;
        }

        .section-title,
        .section-subtitle {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          margin-bottom: 20px;
        }

        .section-subtitle {
          margin-bottom: 40px;
        }

        .video-content-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 60px;
        }

        .video-item {
          background-color: rgba(var(--color-pure-black), 0.5);
          border-radius: 10px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 800px;
          width: 100%;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
          text-align: left;
        }

        .video-item iframe {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 8px;
          margin-bottom: 25px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .video-item h3 {
          font-size: 1.1rem;
          color: var(--color-neon-yellow);
          margin-bottom: 15px;
          text-transform: uppercase;
          line-height: 1.3;
        }

        .video-item p {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .image-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          justify-content: center;
        }

        .image-item {
          background-color: rgba(var(--color-pure-black), 0.5);
          border-radius: 10px;
          padding: 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
        }

        .image-item img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .image-caption {
          font-style: italic;
          font-size: 0.8rem;
          color: var(--color-text-tertiary);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .video-content-wrapper {
            margin-bottom: 50px;
          }

          .video-item {
            padding: 20px;
            max-width: 100%;
          }

          .video-item iframe {
            margin-bottom: 15px;
          }

          .video-item h3 {
            font-size: 1rem;
            margin-bottom: 10px;
          }

          .video-item p {
            font-size: 0.8rem;
            line-height: 1.5;
          }

          .image-gallery {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-bottom: 50px;
          }

          .image-item {
            padding: 20px;
          }

          .image-item img {
            margin-bottom: 15px;
          }

          .image-caption {
            font-size: 0.8rem;
            line-height: 1.5;
          }
        }

        @media (max-width: 480px) {
          .video-content-wrapper {
            margin-bottom: 30px;
          }

          .video-item {
            padding: 15px;
          }

          .video-item iframe {
            margin-bottom: 10px;
          }

          .video-item h3 {
            font-size: 0.9rem;
            line-height: 1.2;
          }

          .video-item p {
            font-size: 0.75rem;
            line-height: 1.4;
          }

          .image-gallery {
            gap: 15px;
            margin-bottom: 30px;
          }

          .image-item {
            padding: 15px;
          }

          .image-item img {
            margin-bottom: 10px;
          }

          .image-caption {
            font-size: 0.7rem;
            line-height: 1.3;
          }
        }
      `}</style>
    </section>
  );
};

export default MediaSection;
