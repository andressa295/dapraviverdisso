'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// Componente separado da logo
function LogoPhandcoSvg() {
  return (
    <svg
      width="150" // Levemente ajustado para responsividade
      height="45" // Levemente ajustado
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo Phandco"
      className="logo-svg" // Adicionada classe para estilização via styled-jsx
    >
      <text
        x="0"
        y="38"
        fill="#E60023"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="40"
        letterSpacing="-2"
        // O filtro drop-shadow via CSS pode ser mais controlável com media queries se necessário,
        // mas mantido aqui por simplicidade, já que é um estilo do próprio SVG.
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
    let intervalId = setInterval(() => { // Renomeado para intervalId para clareza
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
            role="button" // Adicionado role para indicar que é clicável
            tabIndex={0} // Adicionado para ser focável
            onKeyPress={(e) => e.key === 'Enter' && router.push('/')} // Para acessibilidade de teclado
            aria-label="Voltar para Home"
          >
            <LogoPhandcoSvg />
          </div>

          <div className="progress-widget">
            <span className="progress-widget-label">Seu progresso mental</span>
            <div 
              className="progress-bar-container"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100} // Mesmo parando em 70, o max conceitual pode ser 100
              aria-label={`Progresso mental atual: ${progress}%`}
            >
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </header>

        <section className="hero-section">
          <h2 className="hero-title">
            🎯 DESCUBRA ONDE SUA MENTE ESTÁ AGORA E DESBLOQUEIE O CAMINHO PARA A SUA EVOLUÇÃO.
          </h2>
          <p className="hero-subtitle">
            RESPONDA 7 PERGUNTAS RÁPIDAS E RECEBA UM PLANO DE AÇÃO IDEAL PRO SEU MOMENTO. TOTALMENTE GRÁTIS.
          </p>
          <button
            onClick={() => router.push('/quiz')}
            className="cta-button"
          >
            Quero começar agora 🚀
          </button>
        </section>

        <section className="testimonials-section">
          <h3 className="testimonials-title">
            O que dizem por aí
          </h3>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                "Esse quiz mudou a forma como eu encaro meus desafios. Simples, direto e super eficaz!"
              </blockquote>
              <p className="testimonial-author">— João S.</p>
            </div>
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                "Adorei receber um plano de ação personalizado junto com o ebook. Recomendo demais!"
              </blockquote>
              <p className="testimonial-author">— Maria P.</p>
            </div>
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                "Conteúdo top, visual show e a experiência no site foi muito agradável."
              </blockquote>
              <p className="testimonial-author">— Rafael L.</p>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .home-main {
          min-height: 100vh;
          background: #0a0a0a; /* Um preto um pouco menos absoluto que #000 */
          color: white;
          display: flex;
          flex-direction: column;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /* Stack de fontes mais moderno */
        }

        /* Header */
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem; /* Padding ajustado */
          border-bottom: 1px solid #222; /* Borda mais sutil */
          background-color: #121212;
          position: sticky;
          top: 0;
          z-index: 1000; /* Z-index alto para garantir que fique por cima */
        }

        .logo-container {
          cursor: pointer;
          padding: 0.5rem 0; /* Área de clique um pouco maior */
          border-radius: 4px; /* Para feedback visual do foco */
        }
        .logo-container :global(.logo-svg text) { /* Estilizando o texto dentro do SVG via classe global */
            transition: fill 0.2s ease-in-out;
        }
        .logo-container:hover :global(.logo-svg text),
        .logo-container:focus-visible :global(.logo-svg text) {
            fill: #ff3352; /* Cor de hover/foco um pouco mais clara */
        }
         .logo-container:focus-visible {
            outline: 2px solid #E60023;
            outline-offset: 2px;
        }


        .progress-widget {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          width: clamp(120px, 25vw, 180px); /* Largura responsiva com clamp */
          font-size: 0.8rem; /* Reduzido */
          color: #e50914;
          user-select: none;
          gap: 0.3rem; /* Espaço entre label e barra */
          white-space: nowrap;
        }
        .progress-widget-label {
          font-weight: 600;
          color: #aaa; /* Cor mais suave para o label */
        }
        .progress-bar-container {
          width: 100%;
          height: 6px; /* Mais fina */
          background-color: #333;
          border-radius: 3px; /* Ajustado */
          overflow: hidden;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.2), 0 0 3px rgba(229, 9, 20, 0.5); /* Sombra interna e externa sutil */
        }
        .progress-bar-fill {
          width: 0%; /* Começa em 0, atualizado por style prop */
          height: 100%;
          background-color: #e50914;
          border-radius: 3px;
          transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1); /* Transição mais suave */
        }

        /* Hero Section */
        .hero-section {
          flex: 1; /* Ocupa o espaço restante */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem 1.5rem; /* Padding lateral */
          text-align: center;
          max-width: 700px; /* Max-width ajustado */
          margin: auto; /* Centraliza */
          gap: 1rem; /* Espaço entre elementos */
        }
        .hero-title {
          font-size: 1.4rem; /* Ajustado */
          font-weight: 700; /* Mais forte */
          line-height: 1.3;
          color: #f0f0f0; /* Cor mais clara */
          max-width: 600px; /* Ajustado */
          margin: 0 auto 0.8rem; /* Margem inferior */
          letter-spacing: 0.01em; /* Suave */
        }
        .hero-subtitle {
          font-size: 0.95rem; /* Ajustado */
          color: #b0b0b0; /* Cor ajustada */
          line-height: 1.6;
          max-width: 580px; /* Ajustado */
          margin: 0 auto 1.2rem; /* Margem inferior */
        }
        .cta-button {
          background-color: #e50914;
          color: white;
          padding: 0.9rem 2.5rem; /* Padding ajustado */
          border-radius: 50px; /* Pill shape */
          font-weight: 700;
          font-size: 1.1rem; /* Ajustado */
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(229, 9, 20, 0.35); /* Sombra suavizada */
          transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out, box-shadow 0.2s ease-in-out;
          user-select: none;
          text-transform: uppercase; /* Para dar mais impacto */
          letter-spacing: 0.03em;
        }
        .cta-button:hover {
          background-color: #ff1a3c; /* Cor mais viva no hover */
          box-shadow: 0 6px 18px rgba(229, 9, 20, 0.5);
          transform: translateY(-1px);
        }
        .cta-button:active {
          transform: translateY(0px) scale(0.98);
          box-shadow: 0 2px 8px rgba(229, 9, 20, 0.3);
        }
        .cta-button:focus-visible {
            outline: 2px solid #ff7089; /* Cor de foco mais clara */
            outline-offset: 2px;
        }


        /* Testimonials Section */
        .testimonials-section {
          background-color: #121212; /* Mesmo fundo do header para consistência */
          padding: 2.5rem 1.5rem; /* Padding ajustado */
          max-width: 720px; /* Mantido */
          margin: 2rem auto 3rem; /* Adicionado margin-bottom */
          border-radius: 10px; /* Borda um pouco maior */
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); /* Sombra mais escura e sutil */
          color: white;
          text-align: center;
        }
        .testimonials-title {
          font-size: 1.5rem; /* Ajustado */
          margin-bottom: 2rem; /* Mais espaço */
          color: #e50914;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .testimonials-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem; /* Espaço entre cards */
        }
        .testimonial-card {
          background-color: #1f1f1f; /* Fundo do card sutilmente diferente */
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* Sombra sutil para cada card */
          text-align: left; /* Alinhamento para melhor leitura */
          border-left: 4px solid #e50914; /* Detalhe visual */
        }
        .testimonial-quote {
          font-style: italic;
          margin-bottom: 0.8rem;
          color: #ccc; /* Cor mais clara */
          font-size: 0.95rem; /* Ajustado */
          line-height: 1.6;
        }
        .testimonial-quote::before { /* Adiciona aspas estilizadas */
            content: '“';
            font-size: 1.5em;
            color: #e50914;
            margin-right: 0.1em;
            line-height: 0;
        }
        .testimonial-quote::after {
            content: '”';
            font-size: 1.5em;
            color: #e50914;
            margin-left: 0.1em;
            line-height: 0;
        }
        .testimonial-author {
          font-weight: 600; /* Menos peso que o título da seção */
          color: #e50914;
          font-size: 0.9rem; /* Ajustado */
          text-align: right; /* Alinha autor à direita */
        }

        /* Media Queries */
        @media (max-width: 768px) {
          .page-header {
            padding: 0.8rem 1rem;
          }
          .logo-container :global(.logo-svg) { /* Ajustando o SVG diretamente */
            width: 120px;
            height: 36px;
          }
          .progress-widget {
             width: clamp(100px, 22vw, 150px);
             font-size: 0.75rem;
          }
          .hero-section {
            padding: 1.5rem 1rem;
            gap: 0.8rem;
          }
          .hero-title {
            font-size: 1.2rem;
            margin-bottom: 0.6rem;
          }
          .hero-subtitle {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }
          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
          .testimonials-section {
            padding: 2rem 1rem;
            margin: 1.5rem auto 2.5rem;
          }
          .testimonials-title {
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
          }
          .testimonial-card {
            padding: 1.2rem;
          }
          .testimonial-quote {
            font-size: 0.9rem;
          }
           .testimonial-quote::before, .testimonial-quote::after {
            font-size: 1.3em;
           }
          .testimonial-author {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .page-header {
            flex-direction: column; /* Empilha logo e progresso */
            gap: 0.8rem;
            padding-bottom: 1rem;
          }
          .progress-widget {
             width: clamp(150px, 50vw, 200px); /* Mais largo quando empilhado */
             align-items: center; /* Centraliza quando empilhado */
          }
          .progress-widget-label {
            font-size: 0.8rem;
          }
          .hero-title {
            font-size: 1.1rem;
          }
          .hero-subtitle {
            font-size: 0.8rem;
          }
          .cta-button {
            width: 100%; /* Ocupa largura total no mobile bem pequeno */
            max-width: 300px;
            padding: 0.9rem 1.5rem;
            font-size: 0.95rem;
          }
           .testimonials-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  )
}