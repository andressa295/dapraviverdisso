'use client'

import React, { useEffect, useState } from 'react'
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

export default function MaisEspertoQueODiabo() {
    const router = useRouter()
    const [progress, setProgress] = useState(0) // Mantido para consistência, se não usar pode remover

    // Sinopse do livro com trechos impactantes
    const synopsis = [
        "Desvende os segredos que aprisionam a mente humana e a impedem de prosperar.",
        "Descubra as táticas do medo, da indecisão e da procrastinação, e aprenda a combatê-las.",
        "Este livro revela a filosofia por trás do sucesso, ensinando a identificar e dominar o 'Diabo' interno que sabota seus objetivos.",
        "Uma leitura fundamental para quem busca libertar seu potencial e alcançar a maestria sobre a própria vida.",
        "Através de uma narrativa envolvente, Napoleon Hill expõe os métodos para transformar adversidades em oportunidades e pensamentos limitantes em ações poderosas.",
        "Liberte-se das correntes invisíveis e tome as rédeas do seu destino com sabedoria e estratégia."
    ]

    // Trecho do useEffect da Home, mantido caso queira usar a barra de progresso.
    // Se não for usar barra de progresso nesta página, pode remover todo o useEffect.
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

    // Função para lidar com a compra - AQUI VOCÊ ADICIONARÁ O LINK DE PAGAMENTO
    const handlePurchase = () => {
        // *** IMPORTANTE: SUBSTITUA 'SEU_LINK_DE_PAGAMENTO_AQUI' PELO LINK REAL DO SEU CHECKOUT ***
        // Exemplo: window.location.href = 'https://seusite.com/checkout/mais-esperto-que-o-diabo';
        // Ou se for um link de afiliado: window.open('https://hotmart.com/produto/mais-esperto-que-o-diabo', '_blank');
        alert('Redirecionando para o checkout! (Este é um placeholder)') // Apenas para testar
        // window.location.href = 'SEU_LINK_DE_PAGAMENTO_AQUI'; // Descomente e substitua quando tiver o link real
    }

    return (
        <>
            <main className="product-main">
                <header className="page-header">
                    <div
                        onClick={() => router.push('/')} // Botão de voltar para a Home
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

                <section className="product-detail-section">
                    <div className="product-content-wrapper">
                        <div className="product-image-area">
                            {/* IMAGEM DO E-BOOK - Substitua 'SEU_LINK_DA_IMAGEM_AQUI.jpg' pelo caminho real da sua imagem */}
                            <img
                                src="/images/mais-esperto-que-o-diabo.png" // Exemplo: Certifique-se que a imagem está em /public/images
                                alt="Capa do e-book Mais Esperto que o Diabo"
                                className="ebook-cover"
                            />
                            <h1 className="product-title">+ ESPERTO QUE O DIABO</h1>
                            <p className="product-author">Napoleon Hill</p>
                        </div>

                        <div className="product-description-area">
                            <h2 className="description-heading highlight-text">Liberte Sua Mente: O Confronto Final com o Medo</h2>
                            {synopsis.map((paragraph, index) => (
                                <p key={index} className="description-paragraph">
                                    {paragraph}
                                </p>
                            ))}

                            <div className="call-to-action">
                                <p className="product-price">Por apenas: <span className="price-value">R$ 9,90</span></p>
                                <button
                                    onClick={handlePurchase} // Chamada para a nova função handlePurchase
                                    className="buy-button primary-button"
                                >
                                    <span role="img" aria-label="Carrinho de compras">🛒</span> Quero meu exemplar agora!
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção de depoimentos (mantido do Home, pode remover se não quiser aqui) */}
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
                        <a href="/privacidade">Desenvolvido por PhandCo.</a>
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
                }

                /* Header (adaptado para a página de produto) */
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

                /* Estilo do botão de voltar */
                .back-button-container {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #e50914; /* Cor do ícone e texto */
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

                /* Seção de Detalhes do Produto */
                .product-detail-section {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 3rem 2rem;
                    max-width: 1000px; /* Largura máxima para a seção de detalhes */
                    margin: auto;
                    gap: 2rem;
                    text-align: center; /* Centraliza o conteúdo por padrão */
                }

                .product-content-wrapper {
                    display: flex;
                    flex-direction: column; /* Padrão mobile */
                    gap: 3rem;
                    width: 100%;
                    align-items: center; /* Centraliza items em mobile */
                }

                .product-image-area {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .ebook-cover {
                    width: 100%;
                    max-width: 300px; /* Tamanho da imagem do e-book */
                    border-radius: 8px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .ebook-cover:hover {
                    transform: scale(1.02);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.9);
                }

                .product-title {
                    font-size: 2.2rem;
                    font-weight: 500;
                    color: #fff;
                    margin-top: 1.5rem;
                    line-height: 1.2;
                }
                .product-author {
                    font-size: 1.4rem;
                    color: #a0a0a0;
                    font-style: italic;
                    margin-top: 0.5rem;
                    font-weight: 400; /* Removido negrito para o nome do autor */
                }

                .product-description-area {
                    text-align: left; /* Alinha o texto da descrição à esquerda */
                    max-width: 600px;
                }
                .description-heading {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    color: #fff;
                    text-align: center; /* Centraliza o título da descrição */
                }
                .highlight-text {
                    color: #e50914;
                }
                .description-paragraph {
                    font-size: 1.1rem;
                    font-weight: 400; /* Removido negrito */
                    line-height: 1.6; /* Ajustado para diminuir o espaçamento */
                    color: #ccc;
                    margin-bottom: 1rem;
                    text-align: justify; /* Justifica o texto para melhor leitura */
                }
                .description-paragraph:last-child {
                    margin-bottom: 0;
                }

                .call-to-action {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    margin-top: 3rem;
                    width: 100%;
                    max-width: 400px; /* Limita a largura do botão de compra */
                    margin-left: auto;
                    margin-right: auto;
                }

                .product-price {
                    font-size: 1.8rem;
                    font-weight: 600;
                    color: #fff;
                    display: flex;
                    align-items: baseline;
                    gap: 0.5rem;
                }
                .price-value {
                    color: #e50914;
                    font-size: 2.2rem;
                    font-weight: 700;
                }

                .buy-button {
                    /* Estilos do botão oval e proporcional, semelhantes aos da Home */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.8rem;
                    padding: 1.2rem 2rem;
                    border-radius: 50px;
                    width: 100%;
                    height: 60px;
                    font-weight: 600; /* Mantido um pouco de destaque aqui */
                    font-size: 1.1rem;
                    text-transform: none;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: none;
                    cursor: pointer;
                    transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out, box-shadow 0.2s ease-in-out;
                    user-select: none;
                    background-color: #e50914; /* Cor primária de destaque */
                    color: white;
                    box-shadow: 0 5px 15px rgba(229, 9, 20, 0.4);
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

                /* Seção de depoimentos (mantido do Home, pode remover se não quiser aqui) */
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
                @media (min-width: 769px) {
                    .product-content-wrapper {
                        flex-direction: row; /* Layout em linha para telas maiores */
                        text-align: left;
                        align-items: flex-start; /* Alinha no topo quando em linha */
                    }
                    .product-image-area {
                        flex: 0 0 auto; /* Não cresce nem encolhe */
                        margin-right: 3rem; /* Espaço entre imagem e texto */
                        align-items: flex-start; /* Alinha o título e autor da imagem à esquerda */
                        text-align: left;
                    }
                    .product-description-area {
                        flex: 1; /* Ocupa o restante do espaço */
                    }
                    .description-heading {
                        text-align: left; /* Alinha o título da descrição à esquerda */
                    }
                    .call-to-action {
                        margin-left: 0; /* Desfaz centralização automática para alinhamento à esquerda */
                        margin-right: auto;
                    }
                }

                @media (max-width: 900px) {
                    .page-header {
                        padding: 1.2rem 2rem;
                    }
                    .product-title {
                        font-size: 2.5rem;
                    }
                    .product-author {
                        font-size: 1.3rem;
                    }
                    .description-heading {
                        font-size: 1.8rem;
                    }
                    .description-paragraph {
                        font-size: 1rem;
                    }
                    .product-price {
                        font-size: 1.6rem;
                    }
                    .price-value {
                        font-size: 2rem;
                    }
                    .buy-button {
                        font-size: 1rem;
                        height: 55px;
                        max-width: 350px;
                    }
                }

                @media (max-width: 768px) {
                    .page-header {
                        padding: 1rem 1.5rem;
                        flex-direction: row; /* Mantém em linha */
                        justify-content: space-between;
                    }
                    .back-button-container {
                        font-size: 0.9rem;
                        padding: 0.4rem 0.8rem;
                    }
                    .back-arrow {
                        width: 20px;
                        height: 20px;
                    }
                    .logo-container :global(.logo-svg) {
                        width: 120px;
                        height: 36px;
                    }
                    .product-detail-section {
                        padding: 2rem 1.5rem;
                    }
                    .product-content-wrapper {
                        gap: 2rem;
                    }
                    .ebook-cover {
                        max-width: 250px;
                    }
                    .product-title {
                        font-size: 2.2rem;
                    }
                    .product-author {
                        font-size: 1.2rem;
                    }
                    .description-heading {
                        font-size: 1.6rem;
                    }
                    .description-paragraph {
                        font-size: 0.95rem;
                    }
                    .product-price {
                        font-size: 1.5rem;
                    }
                    .price-value {
                        font-size: 1.8rem;
                    }
                    .buy-button {
                        font-size: 0.95rem;
                        height: 50px;
                        max-width: 300px;
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
                }

                @media (max-width: 480px) {
                    .page-header {
                        flex-direction: column; /* Volta a empilhar em telas muito pequenas */
                        gap: 0.8rem;
                        padding-bottom: 1rem;
                    }
                    .back-button-container {
                        align-self: flex-start; /* Alinha o botão de voltar à esquerda */
                        margin-left: 1.5rem; /* Ajuste para não ficar colado */
                    }
                    .product-detail-section {
                        padding: 1.5rem 1rem;
                    }
                    .ebook-cover {
                        max-width: 200px;
                    }
                    .product-title {
                        font-size: 2rem;
                    }
                    .product-author {
                        font-size: 1.1rem;
                    }
                    .description-heading {
                        font-size: 1.4rem;
                    }
                    .description-paragraph {
                        font-size: 0.9rem;
                    }
                    .product-price {
                        font-size: 1.4rem;
                    }
                    .price-value {
                        font-size: 1.6rem;
                    }
                    .buy-button {
                        font-size: 0.9rem;
                        height: 45px;
                        max-width: 280px;
                    }
                }
            `}</style>
        </>
    )
}