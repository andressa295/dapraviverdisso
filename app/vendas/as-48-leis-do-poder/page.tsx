'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

// Componente separado da logo (mantido do seu Home)
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

// Ícones SVG para os benefícios (ícones mais comuns e robustos, verificados)
const IconEye = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);
const IconTarget = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);
const IconShield = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);
const IconTrendingUp = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);
const IconBrain = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
        <path d="M12 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
        <path d="M12 12c-2.21 0-4-1.79-4-4s1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
        <path d="M12 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"></path>
    </svg>
);
const IconMask = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 17a4 4 0 00-4-4h8a4 4 0 00-4 4z"></path>
        <path d="M8 9.5a.5.5 0 100-1 .5.5 0 000 1z"></path>
        <path d="M16 9.5a.5.5 0 100-1 .5.5 0 000 1z"></path>
    </svg>
);
const IconBook = () => (
    <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>
    </svg>
);


export default function As48LeisDoPoder() {
    const router = useRouter()

    const synopsisIntro = "Você está pronto para decifrar a dinâmica do poder em todas as suas formas? 'As 48 Leis do Poder' não é apenas um livro, é um guia estratégico para navegar e dominar o cenário social e profissional. Esta obra seminal revela:"
    const synopsisBenefits = [
        { icon: <IconEye />, text: "Identificar manipuladores: Nunca mais seja uma vítima em jogos de poder." },
        { icon: <IconTrendingUp />, text: "Exercer influência: Faça com que as pessoas ajam em seu favor de forma natural." },
        { icon: <IconShield />, text: "Proteger sua reputação: Construa uma imagem inabalável e evite armadilhas." },
        { icon: <IconTarget />, text: "Dominar a arte da estratégia: Pense à frente, preveja movimentos e nunca seja pego desprevenido." },
        { icon: <IconMask />, text: "Transformar fraquezas em força: Aprenda a dissimular, seduzir e persuadir com maestria." },
        { icon: <IconBook />, text: "Ver o mundo como ele realmente é: Desfaça ilusões e entenda a verdadeira natureza humana." }
    ]

    const problemSolution = [
        {
            type: "problem",
            title: "O DESAFIO",
            description: "Você se sente à margem, suas ideias não são ouvidas, e a ascensão parece um mistério. Acreditamos que o mérito é tudo, mas a realidade do poder opera em outras regras, muitas vezes invisíveis."
        },
        {
            type: "solution",
            title: "A SOLUÇÃO",
            description: "'As 48 Leis do Poder' desmistifica essa realidade, fornecendo um mapa para você entender, prever e até mesmo orquestrar as interações sociais e profissionais ao seu redor. É o manual que você precisa para deixar de ser manipulado e começar a dominar."
        }
    ];

    const lawsInAction = [
        { title: "LEI 1: NUNCA OFUSQUE O MESTRE", description: "Sempre faça aqueles acima de você se sentirem confortavelmente superiores." },
        { title: "LEI 3: OCULTE SUAS INTENÇÕES", description: "Desorienta as pessoas e as mantém na escuridão, para que você não revele o propósito por trás de suas ações." },
        { title: "LEI 6: CHAME ATENÇÃO A QUALQUER CUSTO", description: "Tudo é julgado pela aparência; o que não é visto, não conta." },
        { title: "LEI 15: ANIQUILE TOTALMENTE SEU INIMIGO", description: "Mais problemas surgiriam se você deixar uma única brasa acesa." },
        { title: "LEI 33: DESCUBRA O PONTO FRACO DE CADA UM", description: "Todos têm um ponto fraco, uma brecha na muralha do castelo." },
        { title: "LEI 48: ASSUMA A AUSÊNCIA DE FORMA", description: "Ao ser flexível e adaptável, você garante sua sobrevivência e domínio." }
    ];

    const handlePurchase = () => {
        window.location.href = 'https://pay.kiwify.com.br/lApgMFf';
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
                        <span className="back-text">Voltar</span>
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
                        {/* Títulos em caixa alta, tamanho ajustado no CSS */}
                        <h1 className="product-title">AS 48 LEIS DO PODER: DOMINE O JOGO OCULTO DA VIDA.</h1>
                        <p className="product-subtitle">DESVENDE A ESTRATÉGIA ATEMPORAL PARA CONQUISTAR INFLUÊNCIA, RESPEITO E ASCENSÃO EM QUALQUER CENÁRIO.</p>
                        <button
                            onClick={handlePurchase}
                            className="buy-button-hero primary-button"
                        >
                            <span role="img" aria-label="Foguete">🚀</span> QUERO MEU PODER AGORA!
                        </button>
                    </div>
                </section>

                <section className="product-detail-section">
                    <div className="product-content-wrapper">
                        <div className="product-image-area">
                            <img
                                src="/images/as-48-leis-do-poder.png"
                                alt="Capa do e-book As 48 Leis do Poder"
                                className="ebook-cover"
                                loading="lazy"
                            />
                            <p className="product-author">Por **Robert Greene**</p>
                        </div>

                        <div className="product-description-area">
                            <h2 className="description-heading highlight-text">CHEGA DE SER MANIPULADO. APRENDA A DOMINAR.</h2>
                            <p className="description-paragraph intro-paragraph">{synopsisIntro}</p>

                            <ul className="product-benefits-list">
                                {synopsisBenefits.map((item, index) => (
                                    <li key={index} className="benefit-item">
                                        {item.icon}
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Bloco de Preço e CTA Otimizado */}
                            <div className="call-to-action minimal">
                                <div className="price-and-tag">
                                    <p className="price-tag">O CAMINHO PARA O PODER POR APENAS:</p>
                                    <p className="product-price"><span className="currency">R$</span> <span className="price-value">19,90</span></p>
                                </div>
                                <div className="urgency-banner-minimal">
                                    <span role="img" aria-label="Relógio">⏳</span>
                                    <p>OFERTA POR TEMPO LIMITADO!</p>
                                </div>
                                <button
                                    onClick={handlePurchase}
                                    className="buy-button primary-button pulse-effect"
                                >
                                    <span role="img" aria-label="Carrinho de compras">🛒</span> GARANTA SEU EXEMPLAR AGORA!
                                </button>
                                <p className="access-info">ACESSO IMEDIATO AO E-BOOK COMPLETO APÓS A COMPRA.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção: Problema e Solução com Visual */}
                <section className="problem-solution-section">
                    <h2 className="section-title">A VERDADE SOBRE O PODER: ENTENDA E CONQUISTE</h2>
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

                {/* Seção: As Leis em Ação (Exemplos Visuais) */}
                <section className="laws-in-action-section">
                    <h2 className="section-title highlight-text">ALGUMAS LEIS QUE VÃO MUDAR SUA PERCEPÇÃO</h2>
                    <div className="laws-grid">
                        {lawsInAction.map((law, index) => (
                            <div key={index} className="law-card">
                                <h3 className="law-card-title">{law.title}</h3>
                                <p className="law-card-description">{law.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="laws-note">E MUITO MAIS ESPERA POR VOCÊ NAS OUTRAS 42 LEIS!</p>
                </section>

                {/* Seção de depoimentos */}
                <section className="testimonials-section">
                    <h3 className="testimonials-title">
                        <span className="highlight-text">MESTRES E APRENDIZES:</span> O QUE NOSSOS LEITORES ALCANÇARAM
                    </h3>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <blockquote className="testimonial-quote">
                                "As 48 Leis do Poder não é apenas um livro, é um arsenal. Apliquei uma única lei em minha negociação e o resultado foi absolutamente transformador. É chocante ver como as pessoas reagem quando você entende a dinâmica do poder."
                            </blockquote>
                            <p className="testimonial-author">— Alexandre B., Empresário</p>
                        </div>
                        <div className="testimonial-card">
                            <blockquote className="testimonial-quote">
                                "Sempre me senti à mercê das decisões alheias. Depois de ler este e-book, minha percepção mudou. Comecei a prever movimentos e a agir com mais inteligência. Finalmente, sinto que tenho o controle."
                            </blockquote>
                            <p className="testimonial-author">— Sofia P., Líder de Equipe</p>
                        </div>
                        <div className="testimonial-card">
                            <blockquote className="testimonial-quote">
                                "Este livro é um divisor de águas. Ele me deu as ferramentas para identificar a inveja, neutralizar adversários e construir uma rede de aliados inabalável. Um manual indispensável para a vida moderna."
                            </blockquote>
                            <p className="testimonial-author">— Gabriel M., Consultor Estratégico</p>
                        </div>
                    </div>
                </section>

                {/* Seção: Final Call to Action - DESIGN REFEITO */}
                <section className="final-cta-section">
                    <div className="final-cta-content">
                        <h2 className="final-cta-title">SUA JORNADA AO DOMÍNIO COMEÇA AGORA.</h2>
                        <p className="final-cta-text">NÃO PERCA MAIS TEMPO SENDO UMA PEÇA NO JOGO DE OUTROS. ADQUIRA **AS 48 LEIS DO PODER** E TRANSFORME SUA REALIDADE.</p>
                        <div className="guarantee-box">
                            <span role="img" aria-label="Cadeado Seguro">🔒</span>
                            <p>COMPRA 100% SEGURA E ACESSO IMEDIATO. SEM RISCOS, APENAS RESULTADOS.</p>
                        </div>
                        <button
                            onClick={handlePurchase}
                            className="buy-button final-button primary-button pulse-effect"
                        >
                            <span role="img" aria-label="Mão Apontando">👉</span> QUERO MEU ACESSO INSTANTÂNEO!
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

                /* Banner de Destaque Visual */
                .hero-banner {
                    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/banner-power.jpg') center center/cover no-repeat;
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
                    padding: 1rem; /* Padding reduzido */
                    border-radius: 12px;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.6);
                    border: 2px solid #e50914;
                    max-width: 380px; /* Largura um pouco menor */
                    margin-top: 2.5rem; /* Ajuste do espaçamento superior */
                    gap: 0.8rem; /* Espaçamento entre os itens internos */
                }
                .price-and-tag {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.2rem;
                    margin-bottom: 0.5rem; /* Espaçamento antes do botão */
                }
                .price-tag {
                    font-size: 1.1rem; /* Reduzido */
                    color: #f0f0f0;
                    font-weight: 500;
                    text-transform: uppercase;
                }
                .product-price {
                    font-size: 2.2rem; /* Reduzido */
                    font-weight: 700;
                    color: #fff;
                    display: flex;
                    align-items: baseline;
                    gap: 0.4rem;
                    margin-bottom: 0; /* Removido margin-bottom para compactar */
                }
                .currency {
                    font-size: 1.4rem; /* Reduzido */
                    color: #e50914;
                }
                .price-value {
                    color: #e50914;
                    font-size: 2.8rem; /* Reduzido */
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
                    padding: 1rem 2rem; /* Padding ajustado */
                    border-radius: 50px;
                    width: 100%;
                    height: 55px; /* Altura ajustada */
                    font-weight: 700;
                    font-size: 1.1rem; /* Tamanho da fonte ajustado */
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
                    background-color: #333; /* Fundo cinza escuro mais sutil */
                    color: #e50914; /* Texto vermelho */
                    padding: 0.6rem 1rem;
                    border-radius: 6px;
                    font-size: 0.9rem; /* Reduzido */
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    justify-content: center;
                    width: calc(100% - 20px); /* Ajuste para não sair do bloco */
                    margin-bottom: 0.8rem; /* Espaço antes do botão */
                    text-transform: uppercase;
                    border: 1px dashed #e50914; /* Borda tracejada sutil */
                }
                .urgency-banner-minimal span {
                    font-size: 1.2rem; /* Reduzido */
                    vertical-align: middle;
                }
                .access-info {
                    font-size: 0.85rem; /* Reduzido */
                    color: #a0a0a0;
                    margin-top: 0.5rem; /* Reduzido */
                    text-transform: uppercase;
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

                /* Seção: As Leis em Ação */
                .laws-in-action-section {
                    background-color: #141414;
                    padding: 4rem 2rem;
                    text-align: center;
                    margin-top: 4rem;
                }
                .laws-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 2rem;
                    max-width: 1100px;
                    margin: 0 auto 2.5rem auto;
                }
                .law-card {
                    background-color: #2a2a2a;
                    padding: 1.8rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
                    text-align: left;
                    border-top: 4px solid #e50914;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .law-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.6);
                }
                .law-card-title {
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #fff;
                    margin-bottom: 0.8rem;
                    line-height: 1.3;
                    text-transform: uppercase;
                }
                .law-card-description {
                    font-size: 0.95rem;
                    color: #b0b0b0;
                    line-height: 1.5;
                }
                .laws-note {
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
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
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
                }

                /* Seção: Final Call to Action - DESIGN REFEITO */
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
                    background: url('/images/abstract-power.jpg') center center/cover no-repeat;
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
                        padding: 1.5rem 2rem; /* Mantido menor, mas com mais espaço lateral */
                        max-width: 450px; /* Um pouco mais largo no desktop */
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
                    .testimonials-title {
                        font-size: 2.8rem;
                    }
                    .final-cta-title {
                        font-size: 3.8rem;
                    }
                    .laws-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    .law-card-title {
                        font-size: 1.45rem;
                    }
                    .price-tag {
                        font-size: 1.2rem; /* Ligeiramente maior no desktop */
                    }
                    .product-price {
                        font-size: 2.5rem; /* Ligeiramente maior no desktop */
                    }
                    .currency {
                        font-size: 1.6rem;
                    }
                    .price-value {
                        font-size: 3.2rem; /* Ligeiramente maior no desktop */
                    }
                    .buy-button {
                        font-size: 1.2rem; /* Ligeiramente maior no desktop */
                        height: 60px;
                        padding: 1.2rem 2.5rem;
                    }
                    .urgency-banner-minimal {
                        font-size: 1rem; /* Ligeiramente maior no desktop */
                    }
                    .access-info {
                        font-size: 0.95rem; /* Ligeiramente maior no desktop */
                    }
                }

                @media (max-width: 768px) {
                    .product-title { font-size: 2.5rem; }
                    .product-subtitle { font-size: 1.2rem; }
                    .description-heading { font-size: 1.8rem; }
                    .section-title { font-size: 1.8rem; }
                    .testimonials-title { font-size: 2rem; }
                    .final-cta-title { font-size: 2.2rem; }
                    .laws-grid { grid-template-columns: 1fr; } /* Uma coluna em telas menores */
                    .law-card-title { font-size: 1.2rem; }

                    /* Ajustes específicos para o bloco de preço no mobile */
                    .call-to-action.minimal {
                        padding: 1rem; /* Reduzido ainda mais */
                        max-width: 320px; /* Mais compacto */
                        margin-left: auto;
                        margin-right: auto;
                        align-items: center; /* Centraliza no mobile */
                    }
                    .price-and-tag {
                        flex-direction: column; /* Garante que fique vertical */
                        align-items: center;
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
                    }
                    .urgency-banner-minimal {
                        font-size: 0.85rem;
                    }
                    .access-info {
                        font-size: 0.8rem;
                    }
                }

                @media (max-width: 480px) {
                    .product-title { font-size: 1.8rem; }
                    .product-subtitle { font-size: 1rem; }
                    .description-heading { font-size: 1.5rem; }
                    .section-title { font-size: 1.5rem; }
                    .testimonials-title { font-size: 1.6rem; }
                    .final-cta-title { font-size: 1.8rem; }
                    .law-card-title { font-size: 1rem; }

                    .call-to-action.minimal {
                        max-width: 280px; /* Ainda mais compacto para telas muito pequenas */
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
                    .access-info {
                        font-size: 0.75rem;
                    }
                }
            `}</style>
        </>
    )
}