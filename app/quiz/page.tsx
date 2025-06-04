'use client';

import React, { useState } from 'react';

const perguntas = [
  {
    pergunta: 'Como você descreveria seu estado mental atual?',
    opcoes: [
      { texto: 'Sempre preocupado(a), correndo atrás do tempo e apagando incêndios', valor: 1 },
      { texto: 'Às vezes consigo focar no futuro, mas quase sempre no automático', valor: 2 },
      { texto: 'Tenho clareza dos meus objetivos e sinto que crio meu próprio caminho', valor: 3 },
    ],
  },
  {
    pergunta: 'Você sente que suas crenças limitantes te impedem de avançar?',
    opcoes: [
      { texto: 'Sim, frequentemente me pego pensando que “não sou bom o bastante”', valor: 1 },
      { texto: 'Às vezes, mas tento não deixar isso me dominar', valor: 2 },
      { texto: 'Não, já comecei a reprogramar minha mente para o sucesso', valor: 3 },
    ],
  },
  {
    pergunta: 'Quando pensa no seu futuro, o que sente?',
    opcoes: [
      { texto: 'Medo e insegurança', valor: 1 },
      { texto: 'Dúvidas, mas também uma vontade de mudar', valor: 2 },
      { texto: 'Confiança e entusiasmo', valor: 3 },
    ],
  },
  {
    pergunta: 'Você acha que sua mente está mais focada em sobreviver ou em criar?',
    opcoes: [
      { texto: 'Sobreviver — estou sempre apagando incêndios', valor: 1 },
      { texto: 'Às vezes sobrevivo, às vezes crio', valor: 2 },
      { texto: 'Criar — estou construindo meu caminho com propósito', valor: 3 },
    ],
  },
  {
    pergunta: 'Qual dessas frases mais ressoa com você?',
    opcoes: [
      { texto: '“Dinheiro não dá em árvore”', valor: 1 },
      { texto: '“Não sou tão sortudo(a) quanto os outros”', valor: 2 },
      { texto: '“Eu posso escolher pensar e agir diferente para mudar minha vida”', valor: 3 },
    ],
  },
  {
    pergunta: 'Você já parou pra se perguntar se o que vive hoje é o que você realmente quer?',
    opcoes: [
      { texto: 'Não, só sigo o fluxo e tento sobreviver', valor: 1 },
      { texto: 'Já pensei nisso, mas não sei por onde começar', valor: 2 },
      { texto: 'Sim, e estou pronto(a) para plantar novas sementes', valor: 3 },
    ],
  },
  {
    pergunta: 'Você está disposto(a) a mudar sua forma de pensar para transformar sua realidade?',
    opcoes: [
      { texto: 'Ainda tenho medo, não sei se consigo', valor: 1 },
      { texto: 'Quero, mas não sei como fazer isso sozinho(a)', valor: 2 },
      { texto: 'Sim, quero um passo a passo pra fazer acontecer', valor: 3 },
    ],
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const escolherOpcao = (valor: number) => {
    setPontuacao(pontuacao + valor);
    if (current + 1 < perguntas.length) {
      setCurrent(current + 1);
    } else {
      setFinalizado(true);
    }
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

  return (
    <main
      style={{
        backgroundColor: '#141414',
        color: '#fff',
        minHeight: '100vh',
        padding: '2rem 1rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontWeight: '700', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
          Descubra sua mentalidade
        </h1>
        <p style={{ color: '#bbb', maxWidth: '420px', fontSize: '1rem' }}>
          Responda ao quiz para entender onde está sua mente e como transformá-la
        </p>
      </header>

      {!finalizado ? (
        <section
          style={{
            backgroundColor: '#222',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '0 0 10px rgba(229, 9, 20, 0.6)',
          }}
        >
          <p
            style={{
              fontWeight: '600',
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
            }}
          >
            {perguntas[current].pergunta}
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {perguntas[current].opcoes.map(({ texto, valor }) => (
              <button
                key={texto}
                onClick={() => escolherOpcao(valor)}
                style={{
                  backgroundColor: '#E50914',
                  border: 'none',
                  borderRadius: '25px',
                  color: '#fff',
                  padding: '0.7rem 1.5rem',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = '#b00610')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = '#E50914')
                }
              >
                {texto}
              </button>
            ))}
          </div>

          <div
            style={{
              marginTop: '2rem',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: '#333',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${((current + 1) / perguntas.length) * 100}%`,
                height: '100%',
                backgroundColor: '#E50914',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </section>
      ) : (
        <>
          <section
            style={{
              backgroundColor: '#222',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 0 10px rgba(229, 9, 20, 0.6)',
              textAlign: 'center',
            }}
          >
            <h2 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '1.4rem' }}>
              Resultado do seu quiz
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#ddd' }}>{resultado()}</p>
          </section>

          <button
            onClick={() => {
              window.location.href = '/ebooks'; // muda para sua URL real
            }}
            style={{
              marginTop: '2rem',
              backgroundColor: '#E50914',
              color: '#fff',
              padding: '0.8rem 2.5rem',
              border: 'none',
              borderRadius: '30px',
              fontWeight: '700',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b00610')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E50914')}
          >
            Quero transformar minha mentalidade
          </button>
        </>
      )}

      <footer
        style={{
          marginTop: '3rem',
          color: '#555',
          fontSize: '0.85rem',
          textAlign: 'center',
        }}
      >
        PhandCo. Quiz &copy; {new Date().getFullYear()}
      </footer>
    </main>
  );
}
