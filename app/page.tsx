'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// Componente separado da logo (mantido)
function LogoPhandcoSvg() {
    return (
        <svg
            width="150"
            height="45"
            viewBox="0 0 160 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Logo Phandco"
            className="logo-svg"
        >
            <text
                x="0"
                y="38"
                fill="#E60023" // Vermelho da Phandco, próximo ao da Netflix
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontWeight="700"
                fontSize="40"
                letterSpacing="-2"
                style={{ filter: 'drop-shadow(0 1px 1px rgba(230, 0, 35, 0.4))' }}
            >
                Phandco
            </text>
        </svg>
    )
}

export default function Home() {
    const router = useRouter()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let intervalId = setInterval(() => {
            setProgress((old) => {
                if (old >= 70) {
                    clearInterval(intervalId)
                    return 70
                }
                return old + 1
            })
        }, 30)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <main className="home-main">
                <header className="page-header">
                    <div
                        onClick={() => router.push('/')}
                        className="logo-container"
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => e.key === 'Enter' && router.push('/')}
                        aria-label="Voltar para Home"
                    >
                        <LogoPhandcoSvg />
                    </div>

                    <div className="progress-widget">
                        <span className="progress-widget-label">Sua Jornada Phandco</span>
                        <div
                            className="progress-bar-container"
                            role="progressbar"
                            aria-valuenow={progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`Progresso geral da sua jornada: ${progress}%`}
                        >
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </header>

                <section className="portal-section">
                    <h2 className="portal-title">
                        <span className="highlight-text">Descubra</span> o conteúdo que vai acelerar sua evolução!
                    </h2>
                    <p className="portal-subtitle">
                        Mergulhe em nossos recursos exclusivos e desbloqueie seu potencial máximo.
                    </p>

                    <div className="links-grid">
                        <button
                            onClick={() => router.push('/quiz')}
                            className="portal-link-button primary-button"
                        >
                            <span role="img" aria-label="Alvo">🎯</span> Faça nosso quiz e receba seu plano!
                        </button>

                        <button
                            onClick={() => router.push('/ebooks')}
                            className="portal-link-button secondary-button"
                        >
                            <span role="img" aria-label="Livros">📚</span> Baixe nossos e-books exclusivos!
                        </button>

                        {/* Novos botões de livro com autores e links para páginas de venda */}
                        <button
                            onClick={() => router.push('/vendas/as-48-leis-do-poder')}
                            className="portal-link-button secondary-button"
                        >
                            <span role="img" aria-label="Livro">📖</span> As 48 leis do poder - Robert Greene
                        </button>

                        <button
                            onClick={() => router.push('/vendas/mais-esperto-que-o-diabo')}
                            className="portal-link-button secondary-button"
                        >
                            <span role="img" aria-label="Diabo">😈</span> Mais esperto que o diabo - Napoleon Hill
                        </button>

                        <button
                            onClick={() => router.push('/vendas/manual-persuasao-fbi')}
                            className="portal-link-button secondary-button"
                        >
                            <span role="img" aria-label="Agente">🕵️‍♂️</span> Manual de persuasão do FBI - Jack Schafer
                        </button>
                    </div>
                </section>

                {/* Seção de depoimentos - Sem alterações como solicitado */}
                <section className="testimonials-section">
                    <h3 className="testimonials-title">
                        <span className="highlight-text">O que dizem</span> sobre a Phandco
                    </h3>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <blockquote className="testimonial-quote">
                                "A Phandco transformou minha forma de aprender. O quiz é viciante e os e-books são ouro puro!"
                            </blockquote>
                            <p className="testimonial-author">— Ana C.</p>
                        </div>
                        <div className="testimonial-card">
                            <blockquote className="testimonial-quote">
                                "Conteúdo relevante e uma experiência de usuário impecável. Recomendo para todos que buscam evoluir."
                            </blockquote>
                            <p className="testimonial-author">— Bruno F.</p>
                        </div>
                        <div className="testimonial-card">
                            <blockquote className="testimonial-quote">
                                "A agilidade para encontrar o que preciso e a qualidade do material são impressionantes."
                            </blockquote>
                            <p className="testimonial-author">— Carla M.</p>
                        </div>
                    </div>
                </section>

                <footer className="site-footer">
                    <p>© 2025 Phandco. Todos os direitos reservados.</p>
                    <div className="footer-links">
                        <a href="/privacidade">Política de Privacidade</a>
                        <a href="/termos">Termos de Uso</a>
                        <a href="/ajuda">Ajuda</a>
                    </div>
                </footer>
            </main>

            <style jsx>{`
                .home-main {
                    min-height: 100vh;
                    background: #141414;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    font-weight: 400;
                }

                /* Header (mantido) */
                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.2rem 3rem;
                    background-color: #000;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
                }
                .logo-container {
                    cursor: pointer;
                    padding: 0.5rem 0;
                    border-radius: 4px;
                }
                .logo-container :global(.logo-svg text) {
                    transition: fill 0.2s ease-in-out;
                }
                .logo-container:hover :global(.logo-svg text),
                .logo-container:focus-visible :global(.logo-svg text) {
                    fill: #ff3352;
                }
                .logo-container:focus-visible {
                    outline: 2px solid #E60023;
                    outline-offset: 2px;
                }

                .progress-widget {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    width: clamp(120px, 20vw, 180px);
                    font-size: 0.85rem;
                    color: #aaa;
                    user-select: none;
                    gap: 0.4rem;
                    white-space: nowrap;
                }
                .progress-widget-label {
                    font-weight: 600;
                    color: #ccc;
                }
                .progress-bar-container {
                    width: 100%;
                    height: 5px;
                    background-color: #333;
                    border-radius: 3px;
                    overflow: hidden;
                    box-shadow: inset 0 1px 2px rgba(0,0,0,0.2);
                }
                .progress-bar-fill {
                    width: 0%;
                    height: 100%;
                    background-color: #e50914;
                    border-radius: 3px;
                    transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
                }

                /* Seção Portal */
                .portal-section {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 4rem 2rem;
                    text-align: center;
                    max-width: 900px;
                    margin: auto;
                    gap: 1.8rem;
                }
                .portal-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    line-height: 1.2;
                    color: #fff;
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.02em;
                }
                .highlight-text {
                    color: #e50914;
                }
                .portal-subtitle {
                    font-size: 1.2rem;
                    color: #a0a0a0;
                    line-height: 1.6;
                    max-width: 700px;
                    margin-bottom: 3rem;
                }

                .links-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    width: 100%;
                    max-width: 550px; /* Aumentado o max-width do container para os botões maiores */
                    align-items: center;
                }

                .portal-link-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.8rem;
                    padding: 1.2rem 2rem;
                    border-radius: 50px;
                    width: 100%;
                    max-width: 500px; /* Aumentado o max-width dos botões para acomodar nomes completos */
                    height: 60px; /* Altura fixa para todos os botões */

                    font-weight: 400;
                    font-size: 1rem;
                    text-transform: none;
                    white-space: nowrap; /* IMPEDE A QUEBRA DE LINHA */
                    overflow: hidden; /* Garante que o texto excedente seja escondido */
                    text-overflow: ellipsis; /* Adiciona "..." ao texto cortado */
                    line-height: 1.2;
                    text-align: center;

                    border: none;
                    cursor: pointer;
                    transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out, box-shadow 0.2s ease-in-out;
                    user-select: none;
                }

                /* Botão Primário (quiz) */
                .primary-button {
                    background-color: #e50914;
                    color: white;
                    box-shadow: 0 5px 15px rgba(229, 9, 20, 0.4);
                }
                .primary-button:hover {
                    background-color: #ff1a3c;
                    box-shadow: 0 8px 20px rgba(229, 9, 20, 0.6);
                    transform: translateY(-2px);
                }
                .primary-button:active {
                    transform: translateY(0px) scale(0.98);
                    box-shadow: 0 2px 10px rgba(229, 9, 20, 0.3);
                }
                .primary-button:focus-visible {
                    outline: 2px solid #ff7089;
                    outline-offset: 2px;
                }

                /* Botões Secundários (ebooks, blog, etc.) */
                .secondary-button {
                    background-color: #333;
                    color: #fff;
                    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
                }
                .secondary-button:hover {
                    background-color: #444;
                    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.4);
                    transform: translateY(-2px);
                }
                .secondary-button:active {
                    transform: translateY(0px) scale(0.98);
                    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
                }
                .secondary-button:focus-visible {
                    outline: 2px solid #666;
                    outline-offset: 2px;
                }

                /* Estilização dos ícones (emojis) dentro dos botões (mantido) */
                .portal-link-button span[role="img"] {
                    font-size: 1.3em;
                    line-height: 1;
                }


                /* Seção de depoimentos (mantido como está, sem alterações) */
                .testimonials-section {
                    background-color: #000;
                    padding: 3rem 2rem;
                    max-width: 900px;
                    margin: 3rem auto;
                    border-radius: 8px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
                    color: white;
                    text-align: center;
                }
                .testimonials-title {
                    font-size: 2rem;
                    margin-bottom: 2.5rem;
                    color: #fff;
                    font-weight: 700;
                    letter-spacing: 0.03em;
                }
                .testimonials-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }
                .testimonial-card {
                    background-color: #1a1a1a;
                    padding: 1.8rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
                    text-align: left;
                    border: 1px solid #222;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .testimonial-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
                }
                .testimonial-quote {
                    font-style: italic;
                    margin-bottom: 1rem;
                    color: #ccc;
                    font-size: 1rem;
                    line-height: 1.7;
                }
                .testimonial-quote::before, .testimonial-quote::after {
                    content: '“';
                    font-size: 2em;
                    color: #e50914;
                    margin-right: 0.05em;
                    line-height: 0;
                    vertical-align: middle;
                    display: inline-block;
                    transform: translateY(-0.1em);
                }
                .testimonial-quote::after {
                    content: '”';
                    margin-left: 0.05em;
                    transform: translateY(0.1em);
                }
                .testimonial-author {
                    font-weight: 600;
                    color: #e50914;
                    font-size: 0.95rem;
                    text-align: right;
                    margin-top: 1rem;
                }

                /* Rodapé estilo Netflix (mantido) */
                .site-footer {
                    background-color: #000;
                    padding: 2rem 3rem;
                    text-align: center;
                    color: #808080;
                    font-size: 0.9rem;
                    border-top: 1px solid #222;
                }
                .site-footer p {
                    margin-bottom: 1rem;
                }
                .footer-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                }
                .footer-links a {
                    color: #808080;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }
                .footer-links a:hover {
                    color: #e50914;
                }

                /* Media Queries */
                @media (max-width: 900px) {
                    .portal-section {
                        padding: 3rem 1.5rem;
                    }
                    .portal-title {
                        font-size: 2.2rem;
                    }
                    .portal-subtitle {
                        font-size: 1.1rem;
                    }
                    .links-grid {
                         max-width: 480px; /* Ajuste para telas menores */
                    }
                    .portal-link-button {
                        max-width: 450px; /* Ajuste para telas menores */
                        font-size: 0.95rem;
                    }
                }

                @media (max-width: 768px) {
                    .page-header {
                        padding: 1rem 1.5rem;
                    }
                    .logo-container :global(.logo-svg) {
                        width: 120px;
                        height: 36px;
                    }
                    .progress-widget {
                        width: clamp(100px, 22vw, 150px);
                        font-size: 0.75rem;
                    }
                    .portal-section {
                        padding: 2.5rem 1rem;
                        gap: 1.5rem;
                    }
                    .portal-title {
                        font-size: 2rem;
                    }
                    .portal-subtitle {
                        font-size: 1rem;
                        margin-bottom: 2rem;
                    }
                    .links-grid {
                        max-width: 400px;
                    }
                    .portal-link-button {
                        padding: 1rem 1.5rem;
                        font-size: 0.9rem;
                        height: 55px;
                        max-width: 380px;
                    }
                    .testimonials-section {
                        padding: 2rem 1.5rem;
                        margin: 2rem auto;
                    }
                    .testimonials-title {
                        font-size: 1.8rem;
                        margin-bottom: 2rem;
                    }
                    .testimonials-grid {
                        grid-template-columns: 1fr;
                    }
                    .testimonial-card {
                        padding: 1.5rem;
                    }
                    .testimonial-quote {
                        font-size: 0.95rem;
                    }
                    .site-footer {
                        padding: 1.5rem 1.5rem;
                    }
                    .footer-links {
                        flex-direction: column;
                        gap: 0.8rem;
                    }
                }

                @media (max-width: 480px) {
                    .page-header {
                        flex-direction: column;
                        gap: 0.8rem;
                        padding-bottom: 1rem;
                    }
                    .progress-widget {
                        width: clamp(150px, 50vw, 200px);
                        align-items: center;
                    }
                    .portal-title {
                        font-size: 1.8rem;
                    }
                    .portal-subtitle {
                        font-size: 0.9rem;
                    }
                    .links-grid {
                        max-width: 320px;
                    }
                    .portal-link-button {
                        font-size: 0.85rem;
                        padding: 0.9rem 1rem;
                        height: 50px;
                        max-width: 300px;
                    }
                    .testimonials-title {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </>
    )
}