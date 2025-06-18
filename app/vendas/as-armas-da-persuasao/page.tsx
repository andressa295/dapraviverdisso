'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

// Componente da logo (mantido)
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
                fill="#E60023" // Vermelho da Phandco
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

// Ícones SVG para os benefícios (temáticos para este livro)
const IconHandshake = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 15L17 21L23 15"></path>
        <path d="M4 11V17C4 18.1046 4.89543 19 6 19H17"></path>
        <path d="M17 19L11 13L5 19"></path>
        <path d="M17 19V5C17 3.89543 16.1046 3 15 3H4"></path>
    </svg>
); // Reciprocidade/Acordo
const IconUsers = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
        <path d="M16 3.13a4 4 0 010 7.75"></path>
    </svg>
); // Prova Social/Grupo
const IconShield = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
); // Autoridade/Credibilidade
const IconHeart = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
    </svg>
); // Afeição/Simpatia
const IconClock = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
); // Escassez/Urgência
const IconZap = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
); // Impacto/Poder de Persuasão


export default function AsArmasDaPersuasao() {
    const router = useRouter()

    const synopsisIntro = "Robert Cialdini, o maior especialista em persuasão do mundo, revela os 6 princípios psicológicos que influenciam o comportamento humano. Este e-book é o seu guia definitivo para entender a mente de seus clientes, colegas e amigos, e persuadi-los de forma ética e eficaz."
    const synopsisBenefits = [
        { icon: <IconHandshake />, text: "APLICAR os princípios da RECIPROCIDADE e gerar obrigações duradouras." },
        { icon: <IconUsers />, text: "UTILIZAR a PROVA SOCIAL para influenciar decisões e comportamentos." },
        { icon: <IconShield />, text: "CONSTRUIR AUTORIDADE e credibilidade para que suas ideias sejam aceitas." },
        { icon: <IconHeart />, text: "DESENVOLVER AFEIÇÃO e simpatia para criar conexões e persuadir com facilidade." },
        { icon: <IconClock />, text: "CRIAR o senso de ESCASEZ e urgência para motivar a ação imediata." },
        { icon: <IconZap />, text: "DOMINAR a consistência para levar as pessoas a COMPROMETEREM-SE com suas ideias." },
    ]

    const problemSolution = [
        {
            type: "problem",
            title: "O DESAFIO: IDEIAS NÃO ACEITAS?",
            description: "Você já se sentiu frustrado ao tentar convencer alguém, seja na venda de um produto, na defesa de uma ideia ou em um relacionamento? O poder de persuasão não é um dom, é uma ciência que poucos dominam."
        },
        {
            type: "solution",
            title: "A SOLUÇÃO: PERSUASÃO CIENTÍFICA!",
            description: "Este e-book desvenda a psicologia por trás do 'sim'. Com os princípios científicos de Cialdini, você aprenderá a aplicar estratégias testadas para influenciar, vender e negociar de forma ética, transformando a forma como as pessoas reagem a você."
        }
    ];

    const whatYouWillMaster = [
        { title: "MÓDULO 1: RECIPROCIDADE: DÊ PARA RECEBER", description: "Entenda como a tendência humana de retribuir favores pode ser usada para sua vantagem em qualquer interação." },
        { title: "MÓDULO 2: COMPROMISSO E COERÊNCIA: O PODER DO SIM", description: "Descubra como pequenos compromissos podem levar a grandes ações, e a importância da consistência no comportamento humano." },
        { title: "MÓDULO 3: PROVA SOCIAL: A SABEDORIA DA MULTIDÃO", description: "Aprenda a usar a influência do grupo para persuadir, mostrando que muitos outros já fizeram a mesma escolha." },
        { title: "MÓDULO 4: AUTORIDADE: A VOZ QUE CONVENCE", description: "Construa e projete sua credibilidade para ser percebido como um especialista, tornando suas sugestões irresistíveis." },
        { title: "MÓDULO 5: AFEIÇÃO: A CONEXÃO QUE ATRAI", description: "Explore como a simpatia e as semelhanças podem abrir portas e gerar aceitação, mesmo em situações desafiadoras." },
        { title: "MÓDULO 6: ESCASSEZ: O VALOR DO QUE É RARO", description: "Descubra como a percepção de falta ou exclusividade pode motivar a ação imediata, transformando a hesitação em decisão." }
    ];

    const handlePurchase = () => {
        window.location.href = 'https://go.hotmart.com/U100347824B';
    }

    return (
        <>
            <main className="product-main">
                <header className="page-header">
                    <div
                        onClick={() => router.push('/')}
                        className="back-button-container"
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => e.key === 'Enter' && router.push('/')}
                        aria-label="Voltar para a página inicial"
                    >
                        <svg className="back-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="back-text">VOLTAR</span>
                    </div>
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
                </header>

                {/* Banner de Destaque Visual */}
                <section className="hero-banner">
                    <div className="hero-content">
                        <h1 className="product-title">AS ARMAS DA PERSUASÃO: A CIÊNCIA POR TRÁS DO "SIM".</h1>
                        <p className="product-subtitle">DESCUBRA OS 6 PRINCÍPIOS PSICOLÓGICOS QUE MOTIVAM AS PESSOAS A DIZEREM SIM, DIRETAMENTE DO MESTRE ROBERT CIALDINI.</p>
                        <button
                            onClick={handlePurchase}
                            className="buy-button-hero primary-button"
                        >
                            <span role="img" aria-label="Alvo">🎯</span> DOMINE AS ARMAS DA PERSUASÃO AGORA!
                        </button>
                    </div>
                </section>

                <section className="product-detail-section">
                    <div className="product-content-wrapper">
                        <div className="product-image-area">
                            <img
                                src="/images/as-armas-da-persuasao.png"
                                alt="Capa do e-book As Armas da Persuasão"
                                className="ebook-cover"
                                loading="lazy"
                            />
                            <p className="product-author">POR ROBERT CIALDINI</p>
                        </div>

                        <div className="product-description-area">
                            <h2 className="description-heading highlight-text">NÃO APENAS CONVENÇA, INFLUENÇIE!</h2>
                            <p className="description-paragraph intro-paragraph">{synopsisIntro}</p>

                            <ul className="product-benefits-list">
                                {synopsisBenefits.map((item, index) => (
                                    <li key={index} className="benefit-item">
                                        {item.icon}
                                        <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                                    </li>
                                ))}
                            </ul>

                            {/* Bloco de Preço e CTA Otimizado */}
                            <div className="call-to-action minimal">
                                <div className="price-and-tag">
                                    <p className="price-tag">O CONHECIMENTO CIENTÍFICO POR APENAS:</p>
                                    <p className="product-price"><span className="currency">R$</span> <span className="price-value">25,00</span></p>
                                </div>
                                <div className="urgency-banner-minimal">
                                    <span role="img" aria-label="Relógio">⏳</span>
                                    <p>OFERTA EXCLUSIVA POR TEMPO LIMITADO!</p>
                                </div>
                                <button
                                    onClick={handlePurchase}
                                    className="buy-button primary-button pulse-effect"
                                >
                                    <span role="img" aria-label="Mão apontando">👉</span> QUERO MINHAS ARMAS DA PERSUASÃO!
                                </button>
                                <p className="access-info-small">ACESSO IMEDIATO AO E-BOOK COMPLETO APÓS A COMPRA.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção: Problema e Solução com Visual */}
                <section className="problem-solution-section">
                    <h2 className="section-title">A VERDADE POR TRÁS DO "SIM": ENTENDA E APLIQUE.</h2>
                    <div className="problem-solution-grid">
                        {problemSolution.map((item, index) => (
                            <div key={index} className={`ps-card ${item.type}`}>
                                <h3 className="ps-card-title">
                                    {item.type === 'problem' ? (
                                        <span role="img" aria-label="Ponto de Interrogação">❓</span>
                                    ) : (
                                        <span role="img" aria-label="Lâmpada Acesa">💡</span>
                                    )}
                                    {item.title}
                                </h3>
                                <p className="ps-card-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Nova Seção: O Que Você Irá Dominar (Conteúdo) */}
                <section className="modules-section">
                    <h2 className="section-title highlight-text">O QUE VOCÊ IRÁ DOMINAR NESTE LIVRO:</h2>
                    <div className="modules-grid">
                        {whatYouWillMaster.map((item, index) => (
                            <div key={index} className="module-card">
                                <h3 className="module-card-title">{item.title}</h3>
                                <p className="module-card-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="modules-note">APRENDA A INFLUENCIAR DE FORMA ÉTICA E COMPROVADA!</p>
                </section>

                {/* Seção de depoimentos */}
                <section className="testimonials-section">
                    <h3 className="testimonials-title">
                        <span className="highlight-text">RESULTADOS REAIS:</span> O QUE NOSSOS LEITORES COMPARTILHAM.
                    </h3>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <blockquote className="testimonial-quote">
                                "Apliquei o princípio da reciprocidade em minhas vendas e o resultado foi imediato! Cialdini é um gênio, este e-book é essencial para qualquer profissional."
                            </blockquote>
                            <p className="testimonial-author">— ROBERTA V., CONSULTORA DE VENDAS</p>
                        </div>
                        <div className="testimonial-card">
                            <blockquote className="testimonial-quote">
                                "Este livro me ajudou a entender por que algumas pessoas dizem sim e outras não. Minha comunicação e poder de convencimento melhoraram drasticamente."
                            </blockquote>
                            <p className="testimonial-author">— GUSTAVO S., PROFISSIONAL DE MARKETING</p>
                        </div>
                        <div className="testimonial-card">
                            <blockquote className="testimonial-quote">
                                "As 'armas' de Cialdini são ferramentas poderosas. Aprendi a construir autoridade e a usar a prova social de forma ética para o bem do meu negócio."
                            </blockquote>
                            <p className="testimonial-author">— CAMILA F., LÍDER DE EQUIPE</p>
                        </div>
                    </div>
                </section>

                {/* Seção: Final Call to Action */}
                <section className="final-cta-section">
                    <div className="final-cta-content">
                        <h2 className="final-cta-title">TORNE-SE UM MESTRE DA INFLUÊNCIA.</h2>
                        <p className="final-cta-text">NÃO APENAS CONVENÇA, MAS ENTENDA A CIÊNCIA POR TRÁS DO COMPORTAMENTO HUMANO. ADQUIRA **AS ARMAS DA PERSUASÃO** E TRANSFORME SUA CAPACIDADE DE INFLUENCIAR.</p>
                        <div className="guarantee-box">
                            <span role="img" aria-label="Cadeado Seguro">🔒</span>
                            <p>COMPRA 100% SEGURA E ACESSO IMEDIATO. SEUS RESULTADOS COMEÇAM AGORA!</p>
                        </div>
                        <button
                            onClick={handlePurchase}
                            className="buy-button final-button primary-button pulse-effect"
                        >
                            <span role="img" aria-label="Mão Apontando">✨</span> SIM, QUERO SER MAIS PERSUASIVO!
                        </button>
                    </div>
                </section>

                <footer className="site-footer">
                    <p>© 2025 PHANDCO. TODOS OS DIREITOS RESERVADOS.</p>
                    <div className="footer-links">
                        <a href="/privacidade">DESENVOLVIDO POR PHANDCO.</a>
                    </div>
                </footer>
            </main>

            <style jsx>{`
                .product-main {
                    min-height: 100vh;
                    background: #141414;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    font-weight: 400;
                    overflow-x: hidden;
                }

                /* Header */
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
                .back-button-container {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #e50914;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: color 0.2s ease;
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                }
                .back-button-container:hover {
                    color: #ff3352;
                }
                .back-button-container:focus-visible {
                    outline: 2px solid #e50914;
                    outline-offset: 2px;
                }
                .back-arrow {
                    width: 24px;
                    height: 24px;
                    stroke: currentColor;
                }
                .back-text {
                    text-transform: uppercase;
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

                /* Banner de Destaque Visual */
                .hero-banner {
                    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/banner-armas-persuasao.jpg') center center/cover no-repeat; /* Nova imagem de fundo */
                    min-height: 50vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 4rem 2rem;
                    color: white;
                    position: relative;
                    overflow: hidden;
                    border-bottom: 3px solid #e50914;
                    box-shadow: inset 0 -10px 20px rgba(0,0,0,0.8);
                }
                .hero-banner::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.6);
                    z-index: 0;
                }
                .hero-content {
                    max-width: 900px;
                    z-index: 1;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .product-title {
                    font-size: 3.2rem;
                    font-weight: 700;
                    color: #fff;
                    margin-top: 1rem;
                    line-height: 1.1;
                    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
                    text-transform: uppercase;
                }
                .product-subtitle {
                    font-size: 1.5rem;
                    font-weight: 400;
                    color: #a0a0a0;
                    margin-top: 1.5rem;
                    line-height: 1.4;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                    text-transform: uppercase;
                    order: 1;
                }
                .buy-button-hero {
                    margin-top: 2.5rem;
                    padding: 1.5rem 3rem;
                    font-size: 1.4rem;
                    height: auto;
                    border-radius: 50px;
                    box-shadow: 0 8px 20px rgba(229, 9, 20, 0.5);
                    animation: pulse 2s infinite ease-in-out;
                    text-transform: uppercase;
                    order: 2;
                    max-width: 350px;
                }
                .buy-button-hero:hover {
                    box-shadow: 0 12px 25px rgba(229, 9, 20, 0.7);
                    transform: translateY(-3px);
                }

                /* Seção de Detalhes do Produto */
                .product-detail-section {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 3rem 2rem;
                    max-width: 1200px;
                    margin: auto;
                    gap: 4rem;
                    text-align: center;
                    background-color: #1a1a1a;
                    border-radius: 8px;
                    margin-top: -50px;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
                }
                .product-content-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                    width: 100%;
                    align-items: center;
                }
                .product-image-area {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
                .ebook-cover {
                    width: 100%;
                    max-width: 320px;
                    border-radius: 12px;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.9);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .ebook-cover:hover {
                    transform: scale(1.03);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 1);
                }
                .product-author {
                    font-size: 1.5rem;
                    color: #e0e0e0;
                    font-style: normal;
                    margin-top: 0.8rem;
                    font-weight: 500;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
                    text-transform: uppercase;
                }
                .product-description-area {
                    text-align: left;
                    max-width: 700px;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .description-heading {
                    font-size: 2.2rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    color: #fff;
                    text-align: center;
                    line-height: 1.2;
                    text-transform: uppercase;
                }
                .highlight-text {
                    color: #e50914;
                }
                .description-paragraph {
                    font-size: 1.15rem;
                    font-weight: 400;
                    line-height: 1.7;
                    color: #ccc;
                    margin-bottom: 1rem;
                    text-align: justify;
                }
                .intro-paragraph {
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: #f0f0f0;
                    text-align: center;
                    margin-bottom: 2rem;
                }

                /* Lista de Benefícios com Ícones */
                .product-benefits-list {
                    list-style: none;
                    padding: 0;
                    margin: 2rem 0;
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.2rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .benefit-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    font-size: 1.1rem;
                    color: #e0e0e0;
                    line-height: 1.5;
                    background-color: #2a2a2a;
                    padding: 1rem 1.5rem;
                    border-radius: 6px;
                    border-left: 4px solid #e50914;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    font-weight: 500;
                }
                .benefit-item:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
                }
                .benefit-item :global(.benefit-icon) {
                    width: 28px;
                    height: 28px;
                    min-width: 28px;
                    color: #e50914;
                    margin-top: 2px;
                }

                /* Bloco de Preço e CTA Otimizado */
                .call-to-action.minimal {
                    background-color: #000;
                    padding: 1rem;
                    border-radius: 12px;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.6);
                    border: 2px solid #e50914;
                    max-width: 380px;
                    margin-top: 2.5rem;
                    gap: 0.8rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .price-and-tag {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.2rem;
                    margin-bottom: 0.5rem;
                }
                .price-tag {
                    font-size: 1.1rem;
                    color: #f0f0f0;
                    font-weight: 500;
                    text-transform: uppercase;
                    white-space: nowrap;
                }
                .product-price {
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #fff;
                    display: flex;
                    align-items: baseline;
                    gap: 0.4rem;
                    margin-bottom: 0;
                }
                .currency {
                    font-size: 1.4rem;
                    color: #e50914;
                }
                .price-value {
                    color: #e50914;
                    font-size: 2.8rem;
                    font-weight: 900;
                    text-shadow: 0 0 15px rgba(229, 9, 20, 0.6);
                }

                /* Efeito de pulsação no botão */
                @keyframes pulse {
                    0% { transform: scale(1); box-shadow: 0 5px 15px rgba(229, 9, 20, 0.4); }
                    50% { transform: scale(1.02); box-shadow: 0 8px 20px rgba(229, 9, 20, 0.6); }
                    100% { transform: scale(1); box-shadow: 0 5px 15px rgba(229, 9, 20, 0.4); }
                }
                .buy-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.8rem;
                    padding: 1rem 2rem;
                    border-radius: 50px;
                    width: 100%;
                    height: 55px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    text-transform: uppercase;
                    border: none;
                    cursor: pointer;
                    background-color: #e50914;
                    color: white;
                    box-shadow: 0 5px 15px rgba(229, 9, 20, 0.4);
                    transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out, box-shadow 0.2s ease-in-out;
                }
                .buy-button:hover {
                    background-color: #ff1a3c;
                    box-shadow: 0 8px 20px rgba(229, 9, 20, 0.6);
                    transform: translateY(-2px);
                }
                .buy-button:active {
                    transform: translateY(0px) scale(0.98);
                    box-shadow: 0 2px 10px rgba(229, 9, 20, 0.3);
                }
                .buy-button:focus-visible {
                    outline: 2px solid #ff7089;
                    outline-offset: 2px;
                }

                /* Urgency Banner Minimal (dentro do bloco de preço) */
                .urgency-banner-minimal {
                    background-color: #333;
                    color: #e50914;
                    padding: 0.6rem 1rem;
                    border-radius: 6px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    justify-content: center;
                    width: calc(100% - 20px);
                    margin-bottom: 0.8rem;
                    text-transform: uppercase;
                    border: 1px dashed #e50914;
                    text-align: center;
                }
                .urgency-banner-minimal span {
                    font-size: 1.2rem;
                    vertical-align: middle;
                }
                /* Acesso imediato: Pequeno e discreto, abaixo do botão */
                .access-info-small {
                    font-size: 0.75rem;
                    color: #a0a0a0;
                    margin-top: 0.5rem;
                    text-transform: uppercase;
                    text-align: center;
                    line-height: 1.2;
                }

                /* Seção: Problema e Solução */
                .problem-solution-section {
                    background-color: #000;
                    padding: 4rem 2rem;
                    text-align: center;
                    margin-top: 4rem;
                    box-shadow: inset 0 10px 30px rgba(0,0,0,0.6), inset 0 -10px 30px rgba(0,0,0,0.6);
                }
                .section-title {
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 3.5rem;
                    line-height: 1.2;
                    text-shadow: 0 2px 5px rgba(0,0,0,0.5);
                    text-transform: uppercase;
                }
                .problem-solution-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2.5rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .ps-card {
                    background-color: #1a1a1a;
                    padding: 2.5rem;
                    border-radius: 12px;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.5);
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 1px solid #333;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .ps-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.7);
                }
                .ps-card.problem {
                    border-left: 5px solid #ffcc00;
                }
                .ps-card.solution {
                    border-left: 5px solid #00bfff;
                }
                .ps-card-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 1.2rem;
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    justify-content: center;
                    text-transform: uppercase;
                }
                .ps-card-title span {
                    font-size: 2.2rem;
                }
                .ps-card.problem .ps-card-title span { color: #ffcc00; }
                .ps-card.solution .ps-card-title span { color: #00bfff; }
                .ps-card-description {
                    font-size: 1.1rem;
                    color: #ccc;
                    line-height: 1.6;
                }

                /* Nova Seção: O Que Você Irá Dominar (Conteúdo) */
                .modules-section {
                    background-color: #1a1a1a;
                    padding: 4rem 2rem;
                    text-align: center;
                    margin-top: 4rem;
                    border-top: 3px solid #e50914;
                }
                .modules-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 2rem;
                    max-width: 1100px;
                    margin: 0 auto 2.5rem auto;
                }
                .module-card {
                    background-color: #2a2a2a;
                    padding: 1.8rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
                    text-align: left;
                    border-left: 4px solid #e50914;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .module-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.6);
                }
                .module-card-title {
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #fff;
                    margin-bottom: 0.8rem;
                    line-height: 1.3;
                    text-transform: uppercase;
                }
                .module-card-description {
                    font-size: 0.95rem;
                    color: #b0b0b0;
                    line-height: 1.5;
                }
                .modules-note {
                    font-size: 1.1rem;
                    color: #aaa;
                    margin-top: 1.5rem;
                    font-style: italic;
                    text-transform: uppercase;
                }

                /* Seção de depoimentos */
                .testimonials-section {
                    background-color: #000;
                    padding: 3rem 2rem;
                    max-width: 1200px;
                    margin: 4rem auto;
                    border-radius: 8px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
                    color: white;
                    text-align: center;
                    border: 1px solid #222;
                }
                .testimonials-title {
                    font-size: 2.2rem;
                    margin-bottom: 2.8rem;
                    color: #fff;
                    font-weight: 700;
                    letter-spacing: 0.03em;
                    line-height: 1.2;
                    text-transform: uppercase;
                }
                .testimonials-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.8rem;
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
                    box-shadow: 0 8px 20px rgba(0,0,0,0.6);
                }
                .testimonial-quote {
                    font-style: italic;
                    margin-bottom: 1rem;
                    color: #ccc;
                    font-size: 1.05rem;
                    line-height: 1.7;
                }
                .testimonial-quote::before, .testimonial-quote::after {
                    content: '“';
                    font-size: 2.2em;
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
                    font-size: 1rem;
                    text-align: right;
                    margin-top: 1rem;
                    text-transform: uppercase;
                }

                /* Seção: Final Call to Action */
                .final-cta-section {
                    background: #141414;
                    border: 3px solid #e50914;
                    box-shadow: 0 0 30px rgba(229,9,20,0.6), inset 0 0 30px rgba(229,9,20,0.4);
                    padding: 4rem 2rem;
                    text-align: center;
                    color: white;
                    margin-top: 4rem;
                    border-radius: 12px;
                    max-width: 900px;
                    margin-left: auto;
                    margin-right: auto;
                    position: relative;
                    overflow: hidden;
                }
                .final-cta-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('/images/abstract-armas-persuasao-power.jpg') center center/cover no-repeat; /* Nova imagem de fundo */
                    opacity: 0.15;
                    z-index: 0;
                }
                .final-cta-content {
                    max-width: 700px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }
                .final-cta-title {
                    font-size: 2.8rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                    text-shadow: 0 3px 6px rgba(0,0,0,0.4);
                    text-transform: uppercase;
                }
                .final-cta-text {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    margin-bottom: 2.5rem;
                    font-weight: 400;
                    color: #f0f0f0;
                }
                .guarantee-box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    background-color: rgba(0,0,0,0.4);
                    padding: 1.2rem 2rem;
                    border-radius: 8px;
                    margin-bottom: 3rem;
                    border: 1px solid rgba(255,255,255,0.2);
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                    font-size: 1.1rem;
                    font-weight: 500;
                    text-transform: uppercase;
                }
                .guarantee-box span {
                    font-size: 1.8rem;
                }
                .buy-button.final-button {
                    background-color: #000;
                    color: #e50914;
                    border: 2px solid #e50914;
                    font-size: 1.5rem;
                    padding: 1.5rem 3.5rem;
                    text-transform: uppercase;
                }
                .buy-button.final-button:hover {
                    background-color: #222;
                    color: #ff3352;
                    border-color: #ff3352;
                }

                /* Rodapé */
                .site-footer {
                    background-color: #000;
                    padding: 2rem 3rem;
                    text-align: center;
                    color: #808080;
                    font-size: 0.9rem;
                    border-top: 1px solid #222;
                    text-transform: uppercase;
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
                    text-transform: uppercase;
                }
                .footer-links a:hover {
                    color: #e50914;
                }

                /* Media Queries */
                @media (min-width: 769px) {
                    .product-content-wrapper {
                        flex-direction: row;
                        text-align: left;
                        align-items: flex-start;
                    }
                    .product-image-area {
                        flex: 0 0 auto;
                        margin-right: 4rem;
                        align-items: flex-start;
                        text-align: left;
                    }
                    .product-description-area {
                        flex: 1;
                        max-width: none;
                    }
                    .description-heading {
                        text-align: left;
                    }
                    .call-to-action.minimal {
                        margin-left: 0;
                        margin-right: auto;
                        align-items: flex-start;
                        padding: 1.5rem 2rem;
                        max-width: 450px;
                    }
                    .product-benefits-list {
                        grid-template-columns: repeat(2, 1fr);
                        max-width: none;
                    }
                    .product-title {
                        font-size: 4.2rem;
                    }
                    .product-subtitle {
                        font-size: 2rem;
                    }
                    .description-heading {
                        font-size: 2.8rem;
                    }
                    .section-title {
                        font-size: 3.2rem;
                    }
                    .modules-section .section-title {
                        font-size: 2.8rem;
                    }
                    .testimonials-title {
                        font-size: 2.8rem;
                    }
                    .final-cta-title {
                        font-size: 3.8rem;
                    }
                    .modules-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    .module-card-title {
                        font-size: 1.45rem;
                    }
                    .price-tag {
                        font-size: 1.2rem;
                    }
                    .product-price {
                        font-size: 2.5rem;
                    }
                    .currency {
                        font-size: 1.6rem;
                    }
                    .price-value {
                        font-size: 3.2rem;
                    }
                    .buy-button {
                        font-size: 1.2rem;
                        height: 60px;
                        padding: 1.2rem 2.5rem;
                    }
                    .urgency-banner-minimal {
                        font-size: 1rem;
                    }
                    .access-info-small {
                        font-size: 0.95rem;
                    }
                    .hero-content {
                        flex-direction: column;
                        align-items: center;
                    }
                    .buy-button-hero {
                        order: 2;
                        max-width: none;
                    }
                }

                @media (max-width: 768px) {
                    .back-button-container {
                        font-size: 0.9rem;
                        padding: 0.4rem 0.8rem;
                        align-self: flex-start;
                        margin-left: 1.5rem;
                    }
                    .hero-content {
                        flex-direction: column;
                        align-items: center;
                    }
                    .product-title {
                        font-size: 2.5rem;
                        order: 0;
                    }
                    .product-subtitle {
                        font-size: 1.2rem;
                        order: 1;
                    }
                    .buy-button-hero {
                        font-size: 1.1rem;
                        padding: 1rem 2rem;
                        max-width: 300px;
                        order: 2;
                        margin-top: 1.5rem;
                    }

                    .product-detail-section {
                        padding: 2.5rem 1.5rem;
                    }
                    .ebook-cover {
                        max-width: 250px;
                    }
                    .product-author {
                        font-size: 1.3rem;
                    }
                    .description-heading {
                        font-size: 1.8rem;
                    }
                    .intro-paragraph {
                        font-size: 1.1rem;
                    }
                    .description-paragraph {
                        font-size: 1rem;
                    }
                    .product-benefits-list {
                        gap: 1rem;
                    }
                    .benefit-item {
                        font-size: 1rem;
                        padding: 0.8rem 1.2rem;
                    }
                    .benefit-item :global(.benefit-icon) {
                        width: 24px;
                        height: 24px;
                        min-width: 24px;
                    }
                    .call-to-action.minimal {
                        padding: 1rem;
                        max-width: 320px;
                    }
                    .price-tag {
                        font-size: 1rem;
                    }
                    .product-price {
                        font-size: 2rem;
                    }
                    .currency {
                        font-size: 1.3rem;
                    }
                    .price-value {
                        font-size: 2.5rem;
                    }
                    .buy-button {
                        font-size: 1rem;
                        height: 50px;
                        padding: 0.9rem 1.8rem;
                        width: 100%;
                    }
                    .urgency-banner-minimal {
                        font-size: 0.85rem;
                        padding: 0.5rem 0.8rem;
                    }
                    .urgency-banner-minimal span {
                        font-size: 1.2rem;
                    }
                    .access-info-small {
                        font-size: 0.8rem;
                    }
                    .section-title {
                        font-size: 1.8rem;
                        margin-bottom: 2.5rem;
                    }
                    .problem-solution-grid {
                        gap: 1.5rem;
                    }
                    .ps-card {
                        padding: 2rem;
                    }
                    .ps-card-title {
                        font-size: 1.6rem;
                    }
                    .ps-card-description {
                        font-size: 1rem;
                    }
                    .modules-grid {
                        gap: 1.5rem;
                        grid-template-columns: 1fr;
                    }
                    .module-card-title {
                        font-size: 1.2rem;
                    }
                    .module-card-description {
                        font-size: 0.9rem;
                    }
                    .modules-note {
                        font-size: 1rem;
                    }
                    .testimonials-section {
                        padding: 2.5rem 1.5rem;
                        margin: 3rem auto;
                    }
                    .testimonials-title {
                        font-size: 2rem;
                        margin-bottom: 2.5rem;
                    }
                    .testimonial-quote {
                        font-size: 1rem;
                    }
                    .testimonial-quote::before, .testimonial-quote::after {
                        font-size: 2em;
                    }
                    .testimonial-author {
                        font-size: 0.9rem;
                    }
                    .final-cta-section {
                        padding: 3rem 1.5rem;
                    }
                    .final-cta-title {
                        font-size: 2.2rem;
                    }
                    .final-cta-text {
                        font-size: 1rem;
                    }
                    .guarantee-box {
                        font-size: 0.9rem;
                        padding: 1rem 1.5rem;
                    }
                    .buy-button.final-button {
                        font-size: 1.2rem;
                        padding: 1.2rem 2.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .back-button-container {
                        font-size: 0.8rem;
                        padding: 0.3rem 0.6rem;
                        margin-left: 1rem;
                    }
                    .product-title {
                        font-size: 1.8rem;
                    }
                    .product-subtitle {
                        font-size: 1rem;
                    }
                    .buy-button-hero {
                        font-size: 0.9rem;
                        padding: 0.7rem 1.5rem;
                        max-width: 250px;
                    }
                    .product-detail-section {
                        padding: 1.5rem 1rem;
                    }
                    .ebook-cover {
                        max-width: 200px;
                    }
                    .product-author {
                        font-size: 1.1rem;
                    }
                    .description-heading {
                        font-size: 1.5rem;
                    }
                    .intro-paragraph {
                        font-size: 1rem;
                    }
                    .description-paragraph {
                        font-size: 0.9rem;
                    }
                    .product-benefits-list {
                        gap: 0.8rem;
                    }
                    .benefit-item {
                        font-size: 0.95rem;
                        padding: 0.8rem 1rem;
                    }
                    .benefit-item :global(.benefit-icon) {
                        width: 22px;
                        height: 22px;
                        min-width: 22px;
                    }
                    .call-to-action.minimal {
                        max-width: 280px;
                        padding: 0.8rem;
                    }
                    .price-tag {
                        font-size: 0.9rem;
                    }
                    .product-price {
                        font-size: 1.6rem;
                    }
                    .currency {
                        font-size: 1.1rem;
                    }
                    .price-value {
                        font-size: 2rem;
                    }
                    .buy-button {
                        font-size: 0.9rem;
                        height: 45px;
                        padding: 0.7rem 1.5rem;
                    }
                    .urgency-banner-minimal {
                        font-size: 0.8rem;
                    }
                    .urgency-banner-minimal span {
                        font-size: 1rem;
                    }
                    .access-info-small {
                        font-size: 0.7rem;
                    }
                    .section-title {
                        font-size: 1.5rem;
                    }
                    .problem-solution-grid {
                        gap: 1.2rem;
                    }
                    .ps-card {
                        padding: 1.5rem;
                    }
                    .ps-card-title {
                        font-size: 1.3rem;
                    }
                    .ps-card-description {
                        font-size: 0.85rem;
                    }
                    .modules-grid {
                        gap: 1.2rem;
                    }
                    .module-card-title {
                        font-size: 1.1rem;
                    }
                    .module-card-description {
                        font-size: 0.85rem;
                    }
                    .modules-note {
                        font-size: 0.9rem;
                    }
                    .testimonials-section {
                        padding: 1.8rem 1rem;
                    }
                    .testimonials-title {
                        font-size: 1.6rem;
                    }
                    .testimonial-quote {
                        font-size: 0.9rem;
                    }
                    .testimonial-quote::before, .testimonial-quote::after {
                        font-size: 1.8em;
                    }
                    .testimonial-author {
                        font-size: 0.85rem;
                    }
                    .final-cta-section {
                        padding: 2.5rem 1rem;
                    }
                    .final-cta-title {
                        font-size: 1.8rem;
                    }
                    .final-cta-text {
                        font-size: 0.9rem;
                    }
                    .guarantee-box {
                        font-size: 0.8rem;
                        padding: 0.8rem 1.2rem;
                    }
                    .buy-button.final-button {
                        font-size: 1rem;
                        padding: 1rem 2rem;
                    }
                }
            `}</style>
        </>
    )
}