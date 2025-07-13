// sections/MediaSection.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image'; // Importar Image se for usado para as imagens da galeria

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


interface MediaSectionProps {
    // Para props futuras
}

const MediaSection: React.FC<MediaSectionProps> = () => {
    const [domRef, isVisible] = useScrollAnimation(0.2);

    return (
        <section id="midia" ref={domRef} className={`section media-section ${isVisible ? 'animated' : ''}`}>
            {/* REMOVIDO: <div className="section-content-container">
                Os estilos de max-width, margin:auto, padding e flexbox agora estão na classe .section em globals.css */}
            <h2 className="section-title">
                poder mental em ação: <span className="highlight">inspiração e insights diários</span>
            </h2>
            <p className="section-subtitle">
                Assista a vídeos selecionados e explore imagens que vão aprofundar seu entendimento e manter sua mente no caminho do sucesso.
            </p>

            <div className="video-content-wrapper">
                <div className="video-item glow-on-hover">
                    <iframe
                        width="100%"
                        height="100%" /* Ocupa 100% da altura do pai (que tem padding-bottom para proporção) */
                        src="https://www.youtube.com/embed/3Tq666FaKwU" // **VERIFIQUE E SUBSTITUA PELO ID CORRETO DO SEU VÍDEO DO YOUTUBE**
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

                        
            <style jsx>{`
                /* A classe .section (em globals.css) agora gerencia o max-width, margin:auto, padding e flexbox. */
                .media-section {
                    /* Padding já definido na classe .section em globals.css */
                    background-color: var(--color-pure-black); /* Adicionado background para consistência */
                }
                /* Títulos e subtítulos da seção para se alinharem com o container (globalmente) */
                /* .section-title e .section-subtitle já têm estilos em globals.css */

                .video-content-wrapper {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    margin-bottom: 60px;
                    max-width: 900px; /* Largura máxima para o container do vídeo */
                }
                .video-item {
                    background-color: rgba(var(--color-pure-black), 0.5);
                    border-radius: 10px;
                    padding: 30px;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    width: 100%;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.5);
                }
                .video-item iframe {
                    display: block;
                    width: 100%;
                    height: 100%; /* Ocupa 100% da altura do pai */
                    aspect-ratio: 16 / 9; /* Mantém a proporção widescreen */
                    border-radius: 8px;
                    margin-bottom: 25px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
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
                    margin-bottom: 0;
                    line-height: 1.6;
                }
                .image-gallery {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 40px;
                    width: 100%;
                    max-width: 1100px;
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
                    box-shadow: 0 8px 25px rgba(0,0,0,0.5);
                }
                .image-item img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                }
                .image-caption {
                    font-style: italic;
                    font-size: 0.8rem;
                    color: var(--color-text-tertiary);
                    margin: 0;
                    line-height: 1.5;
                }

                /* Responsividade */
                @media (max-width: 1024px) { /* Tablets em paisagem e notebooks menores */
                    .video-content-wrapper {
                        max-width: 700px;
                    }
                    .video-item h3 {
                        font-size: 1.05rem;
                    }
                    .video-item p {
                        font-size: 0.8rem;
                    }
                    .image-gallery {
                        gap: 30px;
                        max-width: 900px;
                    }
                    .image-item {
                        padding: 25px;
                    }
                }

                @media (max-width: 768px) {
                    /* Padding da seção já gerenciado por .section em globals.css */
                    /* Títulos e subtítulos já gerenciados por .section-title/.section-subtitle em globals.css */

                    .video-content-wrapper {
                        margin-bottom: 50px;
                        max-width: 500px; /* Limita largura do vídeo no mobile */
                    }
                    .video-item {
                        padding: 20px;
                    }
                    .video-item h3 {
                        font-size: 0.95rem;
                        margin-bottom: 10px;
                        line-height: 1.3;
                    }
                    .video-item p {
                        font-size: 0.75rem;
                        line-height: 1.5;
                    }
                    .image-gallery {
                        grid-template-columns: 1fr;
                        gap: 25px;
                        margin-bottom: 50px;
                        max-width: 400px;
                    }
                    .image-item {
                        padding: 20px;
                    }
                    .image-item img {
                        margin-bottom: 15px;
                    }
                }

                @media (max-width: 480px) {
                    /* Padding da seção já gerenciado por .section em globals.css */
                    /* Títulos e subtítulos já gerenciados por .section-title/.section-subtitle em globals.css */

                    .video-content-wrapper {
                        margin-bottom: 30px;
                        max-width: 320px;
                    }
                    .video-item {
                        padding: 15px;
                    }
                    .video-item h3 {
                        font-size: 0.85rem;
                        margin-bottom: 8px;
                        line-height: 1.2;
                    }
                    .video-item p {
                        font-size: 0.7rem;
                        line-height: 1.4;
                    }
                    .image-gallery {
                        gap: 15px;
                        margin-bottom: 30px;
                        max-width: 300px;
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