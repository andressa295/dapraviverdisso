'use client';

import React, { useRef, useEffect, useState } from 'react';

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


interface MediaSectionProps {
    // Para props futuras
}

const MediaSection: React.FC<MediaSectionProps> = () => {
    const [domRef, isVisible] = useScrollAnimation(0.2);

    return (
        <section id="midia" ref={domRef} className={`section media-section ${isVisible ? 'animated' : ''}`}>
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
                        height="auto" // 'auto' aqui, mas o 'aspect-ratio' no CSS garante a proporção
                        src="https://www.youtube.com/embed/4ZhrM8ZUumM?si=UCDe_LsWllHkkbMU" // **LEMBRE-SE DE SUBSTITUIR 'SUA_VID_AQUI' PELO ID DO SEU VÍDEO DO YOUTUBE**
                        title="COMO OBTER PODER E INFLUÊNCIA (Inspirado em 'As 48 Leis do Poder')"
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
                .media-section {
                    padding-top: 80px;
                    padding-bottom: 80px;
                    text-align: center; /* Centraliza o conteúdo da seção: títulos, subtítulos */
                }
                .section-title, .section-subtitle {
                    max-width: 900px;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 0 20px;
                }
                .section-title {
                    margin-bottom: 20px;
                }
                .section-subtitle {
                    margin-bottom: 40px;
                }

                .video-content-wrapper {
                    display: flex;
                    justify-content: center; /* Centraliza o item de vídeo */
                    width: 100%;
                    margin-bottom: 60px;
                    padding: 0 20px; /* Adiciona padding para evitar que o vídeo cole nas bordas em telas maiores */
                    box-sizing: border-box; /* Garante que o padding não aumente a largura total */
                }
                .video-item {
                    background-color: rgba(var(--color-pure-black), 0.5);
                    border-radius: 10px;
                    padding: 30px;
                    text-align: left; /* Conteúdo do card de vídeo alinhado à esquerda */
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start; /* Alinha o conteúdo à esquerda dentro do card */
                    max-width: 800px; /* Largura máxima para o container do vídeo */
                    width: 100%; /* Ocupa 100% da largura disponível (até o max-width) */
                    box-shadow: 0 8px 25px rgba(0,0,0,0.5); /* Sombra para o card */
                }
                .video-item iframe {
                    display: block; /* Remove espaço extra abaixo do iframe */
                    width: 100%; /* O iframe ocupa a largura do pai */
                    height: auto; /* Altura automática para manter a proporção */
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
                }
                .video-item p {
                    font-size: 0.85rem;
                    color: var(--color-text-secondary);
                    margin-bottom: 0;
                }
                .image-gallery {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Galeria de 2 ou mais colunas, responsiva */
                    gap: 40px;
                    width: 100%;
                    max-width: 1100px; /* Limita a largura da galeria de imagens */
                    margin-left: auto; /* Centraliza a galeria */
                    margin-right: auto; /* Centraliza a galeria */
                    justify-content: center; /* Centraliza os itens dentro do grid */
                    padding: 0 20px; /* Adiciona padding para evitar que as imagens colem nas bordas */
                    box-sizing: border-box;
                }
                .image-item {
                    background-color: rgba(var(--color-pure-black), 0.5);
                    border-radius: 10px;
                    padding: 30px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.5); /* Sombra para o card da imagem */
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
                }

                /* Responsividade */
                @media (max-width: 768px) {
                    .video-content-wrapper {
                        margin-bottom: 50px;
                        padding: 0 15px; /* Mais padding no mobile */
                    }
                    .video-item {
                        padding: 20px;
                        max-width: 100%; /* Permite ocupar toda a largura disponível */
                        width: 100%; /* Ajusta para 100% da largura do wrapper */
                    }
                    .video-item iframe {
                        margin-bottom: 15px;
                    }
                    .video-item h3 {
                        margin-bottom: 10px;
                        font-size: 1rem;
                    }
                    .video-item p, .image-caption {
                        font-size: 0.8rem;
                    }
                    .image-gallery {
                        grid-template-columns: 1fr; /* Uma coluna no mobile */
                        gap: 25px;
                        margin-bottom: 50px;
                        padding: 0 15px; /* Mais padding no mobile */
                    }
                    .image-item {
                        padding: 20px;
                    }
                    .image-item img {
                        margin-bottom: 15px;
                    }
                }

                @media (max-width: 480px) {
                    .video-content-wrapper {
                        margin-bottom: 30px;
                        padding: 0 10px; /* Ainda mais padding em telas muito pequenas */
                    }
                    .video-item {
                        padding: 15px;
                    }
                    .video-item iframe {
                        margin-bottom: 10px;
                    }
                    .video-item h3 {
                        font-size: 0.9rem;
                    }
                    .video-item p {
                        font-size: 0.75rem;
                    }
                    .image-gallery {
                        gap: 15px;
                        margin-bottom: 30px;
                        padding: 0 10px; /* Ainda mais padding em telas muito pequenas */
                    }
                    .image-item {
                        padding: 15px;
                    }
                    .image-item img {
                        margin-bottom: 10px;
                    }
                    .image-caption {
                        font-size: 0.7rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default MediaSection;