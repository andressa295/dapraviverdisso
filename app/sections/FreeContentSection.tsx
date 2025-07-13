'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

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


interface FreeContentSectionProps {
    // Se precisar de props no futuro
}

const FreeContentSection: React.FC<FreeContentSectionProps> = () => {
    const [domRef, isVisible] = useScrollAnimation(0.2);

    // Dados dos e-books gratuitos
    const freeEbooks = [
        { id: 'reconexao', title: 'RECONEXÃO', desc: 'A reconexão começa quando você aprende a desligar o mundo pra se ouvir de novo. Silêncio não é ausência de som. É presença de alma.', img: '/images/reconexao.jpg', downloadLink: 'https://drive.google.com/file/d/12y7vVXWDNaNlBNJIBrmJknGEOnlstfy9/view?usp=drive_link' },
        { id: 'desbloqueia-mente', title: 'DESBLOQUEIA, MENTE!', desc: 'Um guia prático para destravar o poder do seu subconsciente e treinar sua mente para atrair prosperidade e oportunidades no mundo digital.', img: '/images/desbloqueia-mente.jpg', downloadLink: 'https://drive.google.com/file/d/1XejaO1jijgvHiNma24qTPN5oemTk3NYQ/view?usp=drive_link' },
        { id: 'sonho-realidade', title: 'DO SONHO À REALIDADE: A ARTE DE AGIR', desc: 'Transforme suas visões em realidade. Entenda que a ação é a ponte entre o sonhar e o realizar, e descubra como a consistência diária é a chave para a vitória.', img: '/images/do-sonho-a-realidade.jpg', downloadLink: 'https://drive.google.com/file/d/1XG2-Eezd4wlJIbDJniRYU_UjxIBru9SJ/view?usp=drive_link' },
    ];

    return (
        <section id="gratuitos" ref={domRef} className={`section free-content-section ${isVisible ? 'animated' : ''}`}>
            {/* REMOVIDO: <div className="section-content-container">
                Os estilos de max-width, margin:auto, padding e flexbox agora estão na classe .section em globals.css */}
            <h2 className="section-title">
                sua <span className="highlight">biblioteca gratuita:</span> destrave seu poder mental agora!
            </h2>
            <p className="section-subtitle">
                Selecionei livros e e-books essenciais para você iniciar sua jornada de transformação. Faça o download e comece a reprogramar sua realidade hoje!
            </p>
            <div className="ebook-grid">
                {freeEbooks.map((ebook) => (
                    <div key={ebook.id} className="ebook-card glow-on-hover">
                        <Image 
                            src={ebook.img} 
                            alt={`Capa ${ebook.title}`} 
                            width={200} 
                            height={300} 
                            className="ebook-cover" 
                            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 200px"
                        />
                        <h3>{ebook.title}</h3>
                        <p>{ebook.desc}</p>
                        <a href={ebook.downloadLink} target="_blank" rel="noopener noreferrer" className="download-button">Download Grátis</a>
                    </div>
                ))}
            </div>

            <style jsx>{`
                /* A classe .section (em globals.css) agora gerencia o max-width, margin:auto, padding e flexbox. */
                .free-content-section {
                    /* Padding já definido na classe .section em globals.css */
                }
                
                /* Títulos e subtítulos da seção para se alinharem com o container (globalmente) */
                /* .section-title e .section-subtitle já têm estilos em globals.css */

                .ebook-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 40px;
                    width: 100%;
                    justify-content: center;
                    align-items: stretch;
                    max-width: 900px; /* Limita a largura do grid de ebooks */
                }
                .ebook-card {
                    background-color: rgba(var(--color-pure-black), 0.5);
                    border-radius: 10px;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    height: 100%;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.5);
                }
                .ebook-cover {
                    width: 100%;
                    height: auto;
                    max-width: 150px;
                    border-radius: 5px;
                    margin-bottom: 25px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                }
                .ebook-card h3 {
                    font-size: 1.1rem;
                    color: var(--color-neon-yellow);
                    margin-bottom: 15px;
                    text-transform: uppercase;
                    line-height: 1.3;
                }
                .ebook-card p {
                    font-size: 0.85rem;
                    color: var(--color-text-secondary);
                    flex-grow: 1;
                    margin-bottom: 30px;
                    line-height: 1.6;
                }
                .download-button {
                    display: inline-block;
                    background: var(--color-neon-gradient);
                    color: var(--color-text-light);
                    padding: 10px 20px;
                    border-radius: 30px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    transition: all 0.3s ease;
                    box-shadow: 0 5px 15px rgba(37, 117, 252, 0.2);
                    margin-top: auto;
                }
                .download-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 20px rgba(37, 117, 252, 0.4), 0 0 10px var(--color-neon-yellow);
                }

                /* Responsividade */
                @media (max-width: 1024px) { /* Tablets em paisagem e notebooks menores */
                    .ebook-grid {
                        gap: 30px;
                        max-width: 700px;
                    }
                    .ebook-card h3 {
                        font-size: 1.05rem;
                    }
                    .ebook-card p {
                        font-size: 0.8rem;
                    }
                }

                @media (max-width: 768px) {
                    /* Padding da seção já gerenciado por .section em globals.css */
                    /* Títulos e subtítulos já gerenciados por .section-title/.section-subtitle em globals.css */

                    .ebook-grid {
                        grid-template-columns: repeat(2, 1fr); /* 2 colunas para tablets */
                        gap: 25px;
                        max-width: 500px; /* Limita largura do grid no mobile */
                    }
                    .ebook-card {
                        padding: 20px;
                    }
                    .ebook-cover {
                        max-width: 120px;
                        margin-bottom: 15px;
                    }
                    .ebook-card h3 {
                        font-size: 0.95rem; /* Título menor para evitar corte */
                        margin-bottom: 10px;
                        line-height: 1.3;
                    }
                    .ebook-card p {
                        font-size: 0.7rem; /* Descrição menor para evitar corte */
                        margin-bottom: 20px;
                        line-height: 1.5;
                    }
                    .download-button {
                        font-size: 0.8rem;
                        padding: 8px 15px;
                    }
                }

                @media (max-width: 480px) {
                    /* Padding da seção já gerenciado por .section em globals.css */
                    /* Títulos e subtítulos já gerenciados por .section-title/.section-subtitle em globals.css */

                    .ebook-grid {
                        grid-template-columns: 1fr; /* 1 coluna para celulares pequenos */
                        gap: 20px;
                        max-width: 300px; /* Limita largura do grid no mobile */
                    }
                    .ebook-card {
                        padding: 15px;
                    }
                    .ebook-cover {
                        max-width: 100px;
                        margin-bottom: 10px;
                    }
                    .ebook-card h3 {
                        font-size: 0.85rem;
                        margin-bottom: 8px;
                        line-height: 1.2;
                    }
                    .ebook-card p {
                        font-size: 0.65rem;
                        margin-bottom: 15px;
                        line-height: 1.4;
                    }
                    .download-button {
                        font-size: 0.75rem;
                        padding: 6px 12px;
                    }
                }
            `}</style>
        </section>
    );
};

export default FreeContentSection;