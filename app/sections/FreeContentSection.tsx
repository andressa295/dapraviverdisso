'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

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

interface FreeContentSectionProps {}

const FreeContentSection: React.FC<FreeContentSectionProps> = () => {
  const [domRef, isVisible] = useScrollAnimation(0.2);

  const freeEbooks = [
    {
      id: 'reconexao',
      title: 'RECONEXÃO',
      desc:
        'A reconexão começa quando você aprende a desligar o mundo pra se ouvir de novo. Silêncio não é ausência de som. É presença de alma.',
      img: '/images/reconexao.jpg',
      downloadLink:
        'https://drive.google.com/file/d/12y7vVXWDNaNlBNJIBrmJknGEOnlstfy9/view?usp=drive_link',
    },
    {
      id: 'desbloqueia-mente',
      title: 'DESBLOQUEIA, MENTE!',
      desc:
        'Um guia prático para destravar o poder do seu subconsciente e treinar sua mente para atrair prosperidade e oportunidades no mundo digital.',
      img: '/images/desbloqueia-mente.jpg',
      downloadLink:
        'https://drive.google.com/file/d/1XejaO1jijgvHiNma24qTPN5oemTk3NYQ/view?usp=drive_link',
    },
    {
      id: 'sonho-realidade',
      title: 'DO SONHO À REALIDADE: A ARTE DE AGIR',
      desc:
        'Transforme suas visões em realidade. Entenda que a ação é a ponte entre o sonhar e o realizar, e descubra como a consistência diária é a chave para a vitória.',
      img: '/images/do-sonho-a-realidade.jpg',
      downloadLink:
        'https://drive.google.com/file/d/1XG2-Eezd4wlJIbDJniRYU_UjxIBru9SJ/view?usp=drive_link',
    },
  ];

  return (
    <section
      id="gratuitos"
      ref={domRef}
      className={`section free-content-section ${isVisible ? 'animated' : ''}`}
    >
      <h2 className="section-title">
        sua <span className="highlight">biblioteca gratuita:</span> destrave seu poder mental agora!
      </h2>
      <p className="section-subtitle">
        Selecionei livros e e-books essenciais para você iniciar sua jornada de transformação. Faça
        o download e comece a reprogramar sua realidade hoje!
      </p>

      <div className="ebook-grid">
        {freeEbooks.map((ebook) => (
          <div key={ebook.id} className="ebook-card glow-on-hover">
            <div className="image-wrapper">
              <Image
                src={ebook.img}
                alt={`Capa ${ebook.title}`}
                width={200}
                height={300}
                className="ebook-cover"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 200px"
                style={{ objectFit: 'contain' }}
              />
              <div className="glow-border"></div>
            </div>
            <h3>{ebook.title}</h3>
            <p>{ebook.desc}</p>
            <a
              href={ebook.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              Download Grátis
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        .free-content-section {
          color: var(--color-text-light);
        }

        .section-title {
          font-size: 1.8rem;
          margin-bottom: 15px;
          line-height: 1.3;
          text-align: center;
        }

        .section-subtitle {
          font-size: 1rem;
          margin-bottom: 35px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        .ebook-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 40px;
          max-width: 960px;
          margin: 0 auto;
          justify-content: center;
          align-items: stretch;
        }

        .ebook-card {
          position: relative;
          background: rgba(var(--color-pure-black), 0.65);
          border-radius: 18px;
          padding: 30px 25px 35px;
          text-align: center;
          box-shadow:
            0 0 10px rgba(var(--color-neon-purple), 0.3),
            0 0 20px rgba(var(--color-neon-blue), 0.2),
            0 10px 15px rgba(0, 0, 0, 0.8);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          user-select: none;
          overflow: visible;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          cursor: pointer;
        }
        .ebook-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow:
            0 0 20px rgba(var(--color-neon-purple), 0.6),
            0 0 40px rgba(var(--color-neon-blue), 0.5),
            0 20px 30px rgba(0, 0, 0, 0.9);
          z-index: 5;
        }

        .image-wrapper {
          position: relative;
          width: 180px;
          height: 270px;
          margin: 0 auto 20px;
          box-shadow:
            0 0 10px rgba(var(--color-neon-yellow), 0.7),
            0 0 25px rgba(var(--color-neon-yellow), 0.4);
          transition: box-shadow 0.3s ease;
          border-radius: 15px;
          overflow: visible;
        }
        .ebook-card:hover .image-wrapper {
          box-shadow:
            0 0 30px rgba(var(--color-neon-yellow), 1),
            0 0 50px rgba(var(--color-neon-yellow), 0.7);
        }

        .ebook-cover {
          border-radius: 15px;
          display: block;
          width: 100%;
          height: 100%;
        }

        .glow-border {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 20px;
          pointer-events: none;
          background: linear-gradient(
            45deg,
            rgba(var(--color-neon-purple), 0.6),
            rgba(var(--color-neon-blue), 0.6),
            rgba(var(--color-neon-yellow), 0.6)
          );
          filter: blur(10px);
          opacity: 0.5;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .ebook-card:hover .glow-border {
          opacity: 1;
          filter: blur(20px);
        }

        h3 {
          font-size: 1.1rem;
          color: var(--color-neon-yellow);
          margin: 15px 0 12px 0;
          text-transform: uppercase;
          letter-spacing: 1.1px;
          font-weight: 800;
          text-shadow: 0 0 6px rgba(var(--color-neon-yellow), 0.8);
          z-index: 3;
          word-break: break-word;
          hyphens: auto;
        }

        p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 30px;
          flex-grow: 1;
          z-index: 3;
          white-space: normal;
        }

        .download-button {
          background: linear-gradient(135deg, var(--color-neon-yellow), var(--color-neon-purple));
          color: var(--color-pure-black);
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          box-shadow:
            0 4px 8px rgba(var(--color-neon-yellow), 0.7),
            0 8px 16px rgba(var(--color-neon-purple), 0.6);
          transition: all 0.3s ease;
          text-decoration: none;
          user-select: none;
          display: inline-block;
          cursor: pointer;
          z-index: 3;
          border: none;
        }
        .download-button:hover {
          filter: brightness(1.15);
          box-shadow:
            0 6px 12px rgba(var(--color-neon-yellow), 0.9),
            0 12px 24px rgba(var(--color-neon-purple), 0.8);
          transform: translateY(-3px);
        }

        /* Responsividade */
        @media (max-width: 1024px) {
          .ebook-grid {
            max-width: 720px;
            gap: 30px;
          }
          .ebook-card {
            padding: 25px 20px 30px;
          }
          h3 {
            font-size: 1rem;
          }
          p {
            font-size: 0.85rem;
            margin-bottom: 25px;
          }
          .download-button {
            font-size: 0.9rem;
            padding: 10px 25px;
          }
        }

        @media (max-width: 768px) {
          .ebook-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 480px;
            gap: 20px;
          }
          .ebook-card {
            padding: 20px 15px 25px;
          }
          h3 {
            font-size: 0.95rem;
            margin-bottom: 12px;
          }
          p {
            font-size: 0.75rem;
            margin-bottom: 20px;
          }
          .download-button {
            font-size: 0.85rem;
            padding: 9px 20px;
          }
          .image-wrapper {
            width: 140px;
            height: 210px;
            margin-bottom: 20px;
            overflow: visible;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.3rem;
            margin-bottom: 12px;
          }
          .section-subtitle {
            font-size: 0.75rem;
            margin-bottom: 20px;
            max-width: 280px;
            margin-left: auto;
            margin-right: auto;
          }
          .ebook-grid {
            grid-template-columns: 1fr;
            max-width: 320px;
            gap: 18px;
          }
          .ebook-card {
            padding: 15px 12px 20px;
            flex-direction: column;
            align-items: center;
            text-align: center;
            overflow: visible;
          }
          h3 {
            font-size: 0.9rem;
            margin: 15px 0 10px 0;
            word-break: break-word;
            hyphens: auto;
          }
          p {
            font-size: 0.75rem;
            margin-bottom: 25px;
          }
          .download-button {
            font-size: 0.8rem;
            padding: 8px 18px;
          }
          .image-wrapper {
            width: 120px;
            height: 180px;
            margin-bottom: 25px;
            overflow: visible;
          }
        }
      `}</style>
    </section>
  );
};

export default FreeContentSection;
