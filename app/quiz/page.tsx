'use client';

import React, { useState, useEffect } from 'react';

const perguntas = [
  {
    pergunta: 'COMO VOCÊ DESCREVERIA SEU ESTADO MENTAL ATUAL?',
    opcoes: [
      { texto: 'SEMPRE PREOCUPADO(A), CORRENDO ATRÁS DO TEMPO E APAGANDO INCÊNDIOS', valor: 1 },
      { texto: 'ÀS VEZES CONSIGO FOCAR NO FUTURO, MAS QUASE SEMPRE NO AUTOMÁTICO', valor: 2 },
      { texto: 'TENHO CLAREZA DOS MEUS OBJETIVOS E SINTO QUE CRIO MEU PRÓPRIO CAMINHO', valor: 3 },
    ],
    key: 'q1' // Chave única para animação
  },
  {
    pergunta: 'VOCÊ SENTE QUE SUAS CRENÇAS LIMITANTES TE IMPEDEM DE AVANÇAR?',
    opcoes: [
      { texto: 'SIM, FREQUENTEMENTE ME PEGO PENSANDO QUE “NÃO SOU BOM O BASTANTE”', valor: 1 },
      { texto: 'ÀS VEZES, MAS TENTO NÃO DEIXAR ISSO ME DOMINAR', valor: 2 },
      { texto: 'NÃO, JÁ COMECEI A REPROGRAMAR MINHA MENTE PARA O SUCESSO', valor: 3 },
    ],
    key: 'q2'
  },
  {
    pergunta: 'QUANDO PENSA NO SEU FUTURO, O QUE SENTE?',
    opcoes: [
      { texto: 'MEDO E INSEGURANÇA', valor: 1 },
      { texto: 'DÚVIDAS, MAS TAMBÉM UMA VONTADE DE MUDAR', valor: 2 },
      { texto: 'CONFIANÇA E ENTUSIASMO', valor: 3 },
    ],
    key: 'q3'
  },
  {
    pergunta: 'VOCÊ ACHA QUE SUA MENTE ESTÁ MAIS FOCADA EM SOBREVIVER OU EM CRIAR?',
    opcoes: [
      { texto: 'SOBREVIVER — ESTOU SEMPRE APAGANDO INCÊNDIOS', valor: 1 },
      { texto: 'ÀS VEZES SOBREVIVO, ÀS VEZES CRIO', valor: 2 },
      { texto: 'CRIAR — ESTOU CONSTRUINDO MEU CAMINHO COM PROPÓSITO', valor: 3 },
    ],
    key: 'q4'
  },
  {
    pergunta: 'QUAL DESSAS FRASES MAIS RESSOA COM VOCÊ?',
    opcoes: [
      { texto: '“DINHEIRO NÃO DÁ EM ÁRVORE”', valor: 1 },
      { texto: '“NÃO SOU TÃO SORTUDO(A) QUANTO OS OUTROS”', valor: 2 },
      { texto: '“EU POSSO ESCOLHER PENSAR E AGIR DIFERENTE PARA MUDAR MINHA VIDA”', valor: 3 },
    ],
    key: 'q5'
  },
  {
    pergunta: 'VOCÊ JÁ PAROU PRA SE PERGUNTAR SE O QUE VIVE HOJE É OQUE VOCÊ REALMENTE QUER?',
    opcoes: [
      { texto: 'NÃO, SÓ SIGO O FLUXO E TENTO SOBREVIVER', valor: 1 },
      { texto: 'JÁ PENSEI NISSO, MAS NÃO SEI POR ONDE COMEÇAR', valor: 2 },
      { texto: 'SIM, E ESTOU PRONTO(A) PARA PLANTAR NOVAS SEMENTES', valor: 3 },
    ],
    key: 'q6'
  },
  {
    pergunta: 'VOCÊ ESTÁ DISPOSTO(A) A MUDAR SUA FORMA DE PENSAR PARA TRANSFORMAR SUA REALIDADE?',
    opcoes: [
      { texto: 'AINDA TENHO MEDO, NÃO SEI SE CONSIGO', valor: 1 },
      { texto: 'QUERO, MAS NÃO SEI COMO FAZER ISSO SOZINHO (A)', valor: 2 },
      { texto: 'SIM, QUERO UM PASSO A PASSO PRA FAZER ACONTECER', valor: 3 },
    ],
    key: 'q7'
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false); // Para animação de saída da pergunta

  const escolherOpcao = (valor: number) => {
    setAnimatingOut(true); // Inicia animação de saída
    setTimeout(() => {
      setPontuacao(prevPontuacao => prevPontuacao + valor);
      if (current + 1 < perguntas.length) {
        setCurrent(current + 1);
      } else {
        setFinalizado(true);
      }
      setAnimatingOut(false); // Reseta estado da animação para a próxima pergunta
    }, 300); // Tempo da animação de saída
  };

  const resultado = () => {
    if (pontuacao <= 9) {
      return 'Sua mente está mais na sobrevivência. Hora de abrir espaço para a criatividade florescer!';
    } else if (pontuacao <= 15) {
      return 'Você está no meio termo, equilibrando sobrevivência e criação. Bora evoluir!';
    } else {
      return 'Parabéns! Sua mente criativa está no comando e você está construindo seu futuro com propósito!';
    }
  };

  const refazerQuiz = () => {
    setCurrent(0);
    setPontuacao(0);
    setFinalizado(false);
    setAnimatingOut(false);
  };
  
  const currentProgress = ((current + 1) / perguntas.length) * 100;

  return (
    <>
      <main className="quiz-page-main">
        <header className="quiz-header">
          <h1 className="quiz-main-title">DESCUBRA SUA MENTALIDADE</h1>
          <p className="quiz-subtitle">
            Responda ao quiz para entender onde está sua mente e como transformá-la.
          </p>
        </header>

        {!finalizado ? (
          <section className="quiz-card">
            <div 
              key={perguntas[current].key} 
              className={`question-content ${animatingOut ? 'fade-out' : 'fade-in'}`}
            >
              <p className="question-text">
                {perguntas[current].pergunta}
              </p>
              <div className="options-container">
                {perguntas[current].opcoes.map(({ texto, valor }) => (
                  <button
                    key={texto}
                    onClick={() => escolherOpcao(valor)}
                    className="option-button"
                    aria-label={`Opção: ${texto}`}
                  >
                    {texto}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="progress-bar-container" 
                 role="progressbar" 
                 aria-valuenow={currentProgress} 
                 aria-valuemin={0} 
                 aria-valuemax={100}
                 aria-label={`Progresso do quiz: ${current + 1} de ${perguntas.length} perguntas`}
            >
              <div
                className="progress-bar-fill"
                style={{ width: `${currentProgress}%` }}
              />
            </div>
             <p className="progress-text">{current + 1} / {perguntas.length}</p>
          </section>
        ) : (
          <section className="results-card">
            <h2 className="results-title">Resultado do seu quiz</h2>
            <p className="results-message">{resultado()}</p>
            <div className="results-actions">
              <button
                onClick={() => {
                  window.location.href = '/ebooks'; // TODO: muda para sua URL real dos ebooks
                }}
                className="cta-button"
              >
                QUERO TRANSFORMAR MINHA MENTALIDADE
              </button>
              <button
                onClick={refazerQuiz}
                className="secondary-button"
              >
                Refazer Quiz
              </button>
            </div>
          </section>
        )}

        <footer className="quiz-footer">
          PhandCo. Quiz &copy; {new Date().getFullYear()}
        </footer>
      </main>

      <style jsx>{`
        .quiz-page-main {
          background-color: #141414;
          color: #fff;
          min-height: 100vh;
          padding: 2rem 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .quiz-header {
          margin-bottom: 2.5rem; /* Ajustado */
          max-width: 500px;
          width: 100%;
        }
        .quiz-main-title {
          font-weight: 700;
          font-size: 1.9rem; /* Levemente aumentado */
          margin-bottom: 0.75rem; /* Ajustado */
          color: #E50914; /* Cor de destaque */
        }
        .quiz-subtitle {
          color: #bbb;
          font-size: 1rem;
          line-height: 1.5;
        }

        .quiz-card, .results-card {
          background-color: #1f1f1f; /* Tom mais escuro para o card */
          border-radius: 12px;
          padding: 2rem 1.5rem; /* Padding ajustado */
          max-width: 550px; /* MaxWidth aumentado um pouco */
          width: 100%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); /* Sombra mais suave */
          margin-bottom: 2rem; /* Espaço antes do footer ou próximo botão */
        }
        
        .question-content {
          /* Estilos para animação */
          animation-duration: 0.3s;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }

        .fade-in {
          animation-name: fadeInAnimation;
        }

        .fade-out {
          animation-name: fadeOutAnimation;
        }

        @keyframes fadeInAnimation {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeOutAnimation {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-10px); }
        }
        
        .question-text {
          font-weight: 600;
          font-size: 1.15rem; /* Levemente aumentado */
          margin-bottom: 2rem; /* Mais espaço antes das opções */
          line-height: 1.5;
          color: #f0f0f0; /* Cor de texto mais clara */
        }

        .options-container {
          display: flex;
          flex-direction: column;
          gap: 0.8rem; /* Espaço entre botões */
        }

        .option-button, .cta-button, .secondary-button {
          background-color: #E50914;
          border: none;
          border-radius: 25px; /* Mais ovalado */
          color: #fff;
          padding: 0.8rem 1.5rem; /* Padding ajustado */
          cursor: pointer;
          font-weight: 600; /* Ajustado */
          font-size: 0.95rem; /* Ajustado */
          text-transform: uppercase; /* Para consistência */
          letter-spacing: 0.03em;
          transition: background-color 0.2s ease, transform 0.1s ease;
          width: 100%;
          box-sizing: border-box;
          line-height: 1.4; /* Para textos maiores */
        }
        .option-button:hover, .cta-button:hover, .secondary-button:hover {
          background-color: #b00610; /* Tom mais escuro no hover */
        }
        .option-button:active, .cta-button:active, .secondary-button:active {
          transform: scale(0.98);
        }
        
        .secondary-button { /* Botão de refazer */
            background-color: #333; /* Cor diferente para secundário */
            border: 1px solid #555;
        }
        .secondary-button:hover {
            background-color: #444;
        }


        .progress-bar-container {
          margin-top: 2rem;
          height: 10px; /* Mais espesso */
          border-radius: 5px; /* Cantos arredondados */
          background-color: #383838; /* Fundo da barra mais escuro */
          overflow: hidden;
          width: 100%;
        }
        .progress-bar-fill {
          height: 100%;
          background-color: #E50914;
          transition: width 0.4s ease-in-out; /* Transição mais suave */
          border-radius: 5px;
        }
        .progress-text {
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: #888;
        }

        .results-card {
          padding: 2rem 1.5rem; /* Ajustado */
        }
        .results-title {
          font-weight: 700;
          margin-bottom: 1rem;
          font-size: 1.6rem; /* Aumentado */
          color: #E50914;
        }
        .results-message {
          font-size: 1.1rem;
          color: #ddd;
          line-height: 1.6;
          margin-bottom: 2rem; /* Mais espaço antes dos botões */
        }
        .results-actions {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            align-items: center; /* Centraliza os botões */
        }
        .results-actions .cta-button,
        .results-actions .secondary-button {
            max-width: 400px; /* Limita largura dos botões no resultado */
        }


        .quiz-footer {
          margin-top: 3rem;
          color: #555;
          font-size: 0.8rem; /* Reduzido */
          text-align: center;
        }

        /* Media Queries para Responsividade */
        @media (max-width: 600px) {
          .quiz-header {
            margin-bottom: 2rem;
          }
          .quiz-main-title {
            font-size: 1.6rem;
          }
          .quiz-subtitle {
            font-size: 0.9rem;
          }
          .quiz-card, .results-card {
            padding: 1.5rem 1rem;
             margin-bottom: 1.5rem;
          }
          .question-text {
            font-size: 1.05rem;
            margin-bottom: 1.5rem;
          }
          .option-button, .cta-button, .secondary-button {
            padding: 0.9rem 1rem; /* Padding melhor para toque */
            font-size: 0.9rem;
          }
          .results-title {
            font-size: 1.4rem;
          }
          .results-message {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
