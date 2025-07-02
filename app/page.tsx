'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';
import { Poppins } from 'next/font/google';

// Importa o componente Header
import Header from './components/Header'; // Ajuste o caminho se necessário

// Configura a fonte Poppins
const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// Componente de Ícone
const CheckIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="url(#gold-gradient)"/>
    <defs><linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{stopColor: '#FDD835'}} /><stop offset="100%" style={{stopColor: '#E9B400'}}/></linearGradient></defs>
  </svg>
);

export default function ComboPoderMentalPage() {
  const [isAnimating, setIsAnimating] = useState(false);
  const hotmartLink = "https://pay.hotmart.com/O100603060L?checkoutMode=2";

  const handleBuyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isAnimating) return;

    setIsAnimating(true);
    
    setTimeout(() => {
      window.location.href = hotmartLink;
    }, 1500);
    
    setTimeout(() => {
        setIsAnimating(false);
    }, 2000);
  };

  return (
    <>
      <Head>
        <link 
          rel="stylesheet" 
          type="text/css" 
          href="https://static.hotmart.com/css/hotmart-fb.min.css" 
        />
      </Head>

      <Header />

      <main className={`main-container ${poppins.className}`}>
        {/* EFEITO DE LUZ DE FUNDO */}
        <div className="aurora-light"></div>
        
        {/* SEÇÃO 1: HERO - A GRANDE PROMESSA */}
        <section className="hero-section">
          <h1 className="hero-title">Sua Mente Cria Sua Realidade.<br/>Aprenda a Comandá-la.</h1>
          <p className="hero-subtitle">
            Desbloqueie prosperidade, foco e uma nova versão de si mesmo com o método definitivo para reprogramar sua mente.
          </p>
          <div className="cta-container">
            <a href={hotmartLink} onClick={handleBuyClick} className={`cta-button ${isAnimating ? 'animating' : ''}`}>
              <span className="button-text">QUERO TRANSFORMAR MINHA VIDA AGORA</span>
              <span className="price-tag">DE R$127 POR APENAS R$67</span>
              <span className="flying-book">🧠</span>
            </a>
            <p className="secure-purchase-text">Compra 100% segura. Acesso vitalício.</p>
          </div>
        </section>

        {/* SEÇÃO 2: DOR - CONEXÃO COM O CLIENTE */}
        <section className="pain-section">
          <h2>Você se identifica com algum destes sinais?</h2>
          <div className="pain-points-grid">
            <div className="pain-point">A procrastinação vence você todos os dias.</div>
            <div className="pain-point">Sente que está preso em um ciclo de autossabotagem.</div>
            <div className="pain-point">A ansiedade e o cansaço mental dominam sua rotina.</div>
            <div className="pain-point">Seus sonhos parecem cada vez mais distantes e impossíveis.</div>
          </div>
          <p className="pain-solution-text">Isso não é falta de capacidade. É a sua programação mental que precisa de um upgrade.</p>
        </section>
        
        {/* SEÇÃO 3: APRESENTAÇÃO DA SOLUÇÃO */}
        <section className="solution-section">
            <div className="solution-image-container">
                <Image 
                  src="/images/ebooks.png" 
                  alt="Combo Poder Mental: E-books de Reprogramação Mental, Hábitos e Manifestação" 
                  width={400} 
                  height={400} 
                  layout="responsive" 
                  className="solution-image"
                  priority 
                />
            </div>
            <div className="solution-text-container">
                <h2 className="section-title">O Mapa Completo Para Sua <span className="highlight">Evolução</span></h2>
                <p>Este não é mais um curso de "pensamento positivo". O <strong>Combo Poder Mental</strong> é um arsenal de ferramentas práticas, reunindo 3 e-books essenciais que se complementam para criar uma transformação real e duradoura.</p>
                <p>Você vai aprender a reprogramar seu subconsciente, forjar hábitos de alta performance e usar o poder da manifestação para construir a vida que você realmente deseja.</p>
            </div>
        </section>

        {/* SEÇÃO 4: O QUE VOCÊ VAI APRENDER */}
        <section className="learning-section">
            <h2 className="section-title">O Que Você Vai Dominar</h2>
            <div className="learning-grid">
                <div className="learning-card">
                    <h3>Reprogramação do Subconsciente</h3>
                    <p>Instale novas crenças de riqueza, saúde e confiança para que sua mente trabalhe por você, 24/7.</p>
                </div>
                <div className="learning-card">
                    <h3>Criação de Hábitos Poderosos</h3>
                    <p>O passo a passo para criar rotinas de sucesso que funcionam no piloto automático, mesmo com TDAH ou falta de foco.</p>
                </div>
                <div className="learning-card">
                    <h3>A Fórmula da Manifestação</h3>
                    <p>Alinhe pensamento, emoção e ação para atrair oportunidades e resultados de forma acelerada.</p>
                </div>
                <div className="learning-card">
                    <h3>Técnicas Comprovadas</h3>
                    <p>Domine afirmações, visualizações, empilhamento de hábitos e a fé prática para vencer qualquer desafio.</p>
                </div>
            </div>
        </section>

        {/* SEÇÃO 5: VANTAGENS (BENEFÍCIOS) */}
        <section className="benefits-section">
            <h2 className="section-title">Uma Transformação em Todas as Áreas da Sua Vida</h2>
            <ul className="benefits-list">
                <li><CheckIcon /> <strong>Método 100% Prático:</strong> Chega de teorias. Ferramentas fáceis de aplicar no seu dia a dia.</li>
                <li><CheckIcon /> <strong>Resultados Reais:</strong> Impacto direto na sua prosperidade, saúde, carreira e autoestima.</li>
                <li><CheckIcon /> <strong>Desbloqueio Emocional:</strong> Elimine crenças limitantes e padrões negativos que travam sua vida.</li>
                <li><CheckIcon /> <strong>Você no Controle:</strong> Pare de depender da sorte e aprenda a criar sua própria realidade.</li>
                <li><CheckIcon /> <strong>Economia Inteligente:
                </strong> Leve 3 e-books pelo preço de um, com acesso vitalício para consultar sempre.</li>
            </ul>
        </section>
        
        {/* SEÇÃO 6: CHAMADA PARA AÇÃO FINAL (OFERTA) */}
        <section className="final-cta-section">
            <h2 className="offer-title">Sua jornada de transformação começa agora.</h2>
            <div className="price-box">
                <p className="price-from">de <span>R$127,00</span></p>
                <p className="price-to">Por apenas <strong>R$67</strong></p>
                <p className="price-info">ou em até 9x de R$ 8,60</p>
            </div>

            <div className="cta-container">
                <a href={hotmartLink} onClick={handleBuyClick} className={`cta-button ${isAnimating ? 'animating' : ''}`}>
                  <span className="button-text">QUERO GARANTIR MEU ACESSO COM DESCONTO!</span>
                  <span className="price-tag">OFERTA POR TEMPO LIMITADO</span>
                  <span className="flying-book">🧠</span>
                </a>
                <p className="secure-purchase-text">Ambiente seguro Hotmart. 7 dias de garantia incondicional.</p>
            </div>
        </section>

        {/* SEÇÃO 7: FOOTER */}
        <footer className="site-footer">
            <p>© 2025 PHANDCO. TODOS OS DIREITOS RESERVADOS.</p>
            <p>Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.</p>
        </footer>

      </main>

      {/* Script da Hotmart carregado de forma otimizada */}
      <Script
        id="hotmart-widget-script"
        src="https://static.hotmart.com/checkout/widget.min.js"
        strategy="lazyOnload"
      />

      {/* Estilos globais e locais com styled-jsx */}
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          background-color: #0c0a15;
          color: #EAEAEA;
          scroll-behavior: smooth;
        }
      `}</style>
      <style jsx>{`
        .main-container {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 0px; /* Altura do cabeçalho fixo */
        }

        section {
            width: 100%;
            max-width: 1100px;
            padding: 30px 20px; /* Padding vertical entre as seções */
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            z-index: 2;
        }

        .section-title {
            font-size: 2.0rem;
            font-weight: 400;
            margin-bottom: 20px;
            color: #fff;
        }
        .section-title .highlight {
            background: linear-gradient(90deg, #FDD835, #E9B400);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .aurora-light {
            position: absolute;
            top: 0;
            left: 50%;
            width: 1200px;
            height: 1200px;
            background: radial-gradient(circle, rgba(91, 56, 236, 0.25) 0%, rgba(12, 10, 21, 0) 60%);
            transform: translateX(-50%);
            animation: aurora-glow 20s infinite linear;
            z-index: 1;
            pointer-events: none;
        }

        @keyframes aurora-glow {
            0% { transform: translateX(-50%) translateY(-20%) rotate(0deg); }
            50% { transform: translateX(-40%) translateY(0%) rotate(180deg); }
            100% { transform: translateX(-50%) translateY(-20%) rotate(360deg); }
        }

        .hero-section {
            min-height: calc(100vh - 50px);
            justify-content: center;
            gap: 15px;
            padding-top: 0;
            padding-bottom: 30px;
        }
        .hero-title {
            font-size: 2.5rem;
            font-weight: 600;
            line-height: 1.2;
            color: #fff;
            letter-spacing: -1.5px;
            text-shadow: 0 0 30px rgba(91, 56, 236, 0.5);
            margin-bottom: 10px;
        }
        .hero-subtitle {
            font-size: 1.1rem;
            max-width: 600px;
            color: #c0b8e0;
            margin-bottom: 25px;
        }
        .secure-purchase-text {
            font-size: 0.7rem;
            color: #9c92c5;
            margin-top: 5px;
        }

        .pain-section {
            background-color: rgba(255,255,255, 0.03);
            border-top: 1px solid rgba(255,255,255, 0.1);
            border-bottom: 1px solid rgba(255,255,255, 0.1);
            padding: 30px 20px;
        }
        .pain-section h2 {
            font-size: 2.2rem;
            margin-bottom: 25px;
        }
        .pain-points-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 10px;
            width: 100%;
            margin-bottom: 20px;
        }
        .pain-point {
            background: rgba(12, 10, 21, 0.5);
            padding: 12px;
            border-radius: 8px;
            border: 1px solid rgba(255,255,255, 0.1);
            font-weight: 600;
            font-size: 0.9rem;
        }
        .pain-solution-text {
            font-size: 0.95rem;
            color: #FDD835;
            font-weight: 600;
        }

        .solution-section {
            flex-direction: row;
            text-align: left;
            align-items: center;
            gap: 25px;
            padding: 40px 20px;
        }
        .solution-image-container {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .solution-image {
            border-radius: 15px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            max-width: 100%;
            height: auto;
        }
        .solution-text-container {
            flex: 1.5;
        }
        .solution-text-container p {
            font-size: 0.95rem;
            line-height: 1.5;
            color: #c0b8e0;
            margin-bottom: 10px;
        }
        .solution-text-container h2 {
            font-size: 2rem;
            margin-bottom: 15px;
        }

        .learning-section {
            padding: 40px 20px;
        }
        .learning-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            width: 100%;
            margin-bottom: 15px;
        }
        .learning-card {
            background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0));
            border: 1px solid rgba(255,255,255, 0.1);
            padding: 18px;
            border-radius: 10px;
            text-align: left;
            transition: all 0.3s ease;
        }
        .learning-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.25);
        }
        .learning-card h3 {
            font-size: 1.2rem;
            color: #FDD835;
            margin-top: 0;
            margin-bottom: 8px;
        }
        .learning-card p {
            color: #c0b8e0;
            line-height: 1.4;
            font-size: 0.9rem;
        }

        .benefits-section {
            padding: 40px 20px;
        }
        /* AJUSTES AQUI PARA O BLOCO DE BENEFÍCIOS */
        .benefits-list {
            list-style: none;
            padding: 0;
            text-align: left;
            display: flex;
            flex-direction: column;
            gap: 8px; /* Reduzindo o espaçamento entre os itens da lista */
            max-width: 800px;
        }
        .benefits-list li {
            font-size: 1rem;
            display: flex;
            align-items: center;
            /* AJUSTE AQUI: Reduzindo o padding interno dos itens da lista */
            padding: 8px 12px; /* Reduzido de 10px 12px para 8px 12px */
            border-radius: 8px;
            background: rgba(255,255,255, 0.03); /* Mantido, mas você pode ajustar a opacidade se quiser */
            gap: 6px; /* Reduzido de 8px para 6px */
        }

        .final-cta-section {
            background: #000;
            padding: 40px 20px;
        }
        .offer-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 20px;
        }
        .price-box {
            background: rgba(255,255,255,0.05);
            border: 2px solid #FDD835;
            padding: 20px;
            border-radius: 15px;
            margin-bottom: 20px;
            max-width: 350px;
            width: 100%;
        }
        .price-from {
            text-decoration: line-through;
            opacity: 0.7;
            font-size: 0.95rem;
        }
        .price-to {
            font-size: 2.2rem;
            font-weight: 900;
            color: #FDD835;
            margin: 5px 0;
        }
        .price-info {
            font-weight: 600;
            font-size: 0.85rem;
        }

        .cta-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .cta-button {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          padding: 12px 25px;
          border-radius: 50px;
          border: none;
          background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px -8px rgba(37, 117, 252, 0.4);
          overflow: hidden;
          margin-bottom: 8px;
        }
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -8px rgba(37, 117, 252, 0.6);
        }
        .cta-button .price-tag {
            font-size: 0.65rem;
            font-weight: 400;
            opacity: 0.9;
        }
        .flying-book {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.3rem;
          opacity: 0;
          pointer-events: none;
        }
        .cta-button.animating .button-text,
        .cta-button.animating .price-tag {
          animation: fade-out 0.5s forwards;
        }
        .cta-button.animating .flying-book {
          animation: fly-to-cart 1.5s cubic-bezier(0.5, -0.5, 1, 1) forwards;
        }

        @keyframes fade-out {
          to { opacity: 0; transform: scale(0.8); }
        }

        @keyframes fly-to-cart {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          20% { transform: translate(-50%, -150%) scale(1.2) rotate(-15deg); }
          100% { opacity: 0; transform: translate(300px, -400px) scale(0) rotate(360deg); }
        }

        /* AJUSTES DO RODAPÉ */
        .site-footer {
            background: #000;
            font-size: 0.75rem;
            color: #A0A0A0;
            /* AJUSTE AQUI: Padding vertical do rodapé */
            padding: 20px 20px; /* Reduzindo um pouco mais o padding de 25px para 20px */
            text-align: center; /* Garante que o texto esteja centralizado */
            line-height: 1.5;
            border-top: 1px solid rgba(255,255,255, 0.1);
            position: relative; /* Pode ajudar se houver problemas de posicionamento */
            width: 100%; /* Ocupa toda a largura */
            box-sizing: border-box; /* Garante que padding e border sejam incluídos na largura/altura */
        }
        .site-footer p {
            /* AJUSTE AQUI: Margem entre os parágrafos do rodapé */
            margin: 3px 0; /* Reduzindo um pouco mais de 4px para 3px */
            white-space: normal; /* Permite que o texto quebre linha normalmente */
        }


        /* RESPONSIVIDADE */
        @media (max-width: 768px) {
            .main-container {
                padding-top: 50px;
            }
            section {
                padding: 25px 25px;
            }
            .section-title, .pain-section h2, .offer-title {
                font-size: 1.6rem;
                margin-bottom: 15px;
            }
            .hero-section {
                min-height: calc(100vh - 50px);
                padding-bottom: 25px;
                gap: 10px;
            }
            .hero-title {
                font-size: 2rem;
                letter-spacing: -0.5px;
                margin-bottom: 8px;
            }
            .hero-subtitle { font-size: 0.95rem; margin-bottom: 15px; }
            .secure-purchase-text { font-size: 0.65rem; margin-top: 3px; }

            .pain-section {
                padding: 20px 25px;
            }
            .pain-section h2 { font-size: 1.5rem; margin-bottom: 18px; }
            .pain-points-grid { min-width: 180px; gap: 8px; margin-bottom: 15px; }
            .pain-point { font-size: 0.8rem; padding: 10px; }
            .pain-solution-text { font-size: 0.9rem; }

            .solution-section { gap: 15px; padding: 25px 25px; }
            .solution-text-container p { font-size: 0.85rem; margin-bottom: 8px; }
            .solution-text-container h2 { font-size: 1.6rem; margin-bottom: 12px; }

            .learning-section { padding: 25px 25px; }
            .learning-grid { gap: 10px; margin-bottom: 10px; }
            .learning-card { padding: 15px; }
            .learning-card h3 { font-size: 1rem; margin-bottom: 6px; }
            .learning-card p { font-size: 0.8rem; }

            .benefits-section { padding: 25px 25px; } /* Mantém o padding horizontal */
            /* AJUSTES AQUI PARA O BLOCO DE BENEFÍCIOS NO MOBILE */
            .benefits-list {
                gap: 6px; /* Reduzido de 8px para 6px */
            }
            .benefits-list li { 
                font-size: 0.85rem; 
                padding: 6px 10px; /* Reduzindo de 8px 10px para 6px 10px */
                gap: 5px; /* Reduzido de 6px para 5px */
            }

            .final-cta-section { padding: 30px 25px; }
            .offer-title { font-size: 1.8rem; margin-bottom: 15px; }
            .price-box { padding: 18px; margin-bottom: 18px; max-width: 320px; }
            .price-from { font-size: 0.8rem; }
            .price-to { font-size: 1.8rem; margin: 3px 0; }
            .price-info { font-size: 0.7rem; }
            .cta-button { padding: 10px 20px; font-size: 0.8rem; margin-bottom: 6px; }
            .cta-button .price-tag { font-size: 0.6rem; }
            .flying-book { font-size: 1rem; }
            
            .site-footer { 
                font-size: 0.68rem; 
                padding: 15px 25px; /* Mantém 15px 25px */
                line-height: 1.4; 
            }
            .site-footer p {
                margin: 2px 0;
            }
        }

        @media (max-width: 480px) {
            section {
                padding: 20px 20px;
            }
            .section-title, .pain-section h2, .offer-title { font-size: 1.4rem; }
            .hero-title { font-size: 1.7rem; }
            .hero-subtitle { font-size: 0.85rem; }
            .cta-button { font-size: 0.75rem; padding: 8px 15px; }
            .price-to { font-size: 1.5rem; }
            .pain-point { font-size: 0.7rem; }
            .learning-card h3 { font-size: 0.95rem; }
            .learning-card p { font-size: 0.75rem; }
            .benefits-list li { font-size: 0.78rem; }
            
            .site-footer {
                padding: 12px 15px; /* Padding bem menor para telas minúsculas */
                font-size: 0.6rem; /* Fonte ainda menor */
                line-height: 1.3;
            }
            .site-footer p {
                margin: 1px 0;
            }
        }
      `}</style>
    </>
  )
}