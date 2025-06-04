'use client';

import React, { useState } from 'react';

const perguntas = [
  {
    pergunta: 'COMO VOCÊ DESCREVERIA SEU ESTADO MENTAL ATUAL?',
    opcoes: [
      { texto: 'SEMPRE PREOCUPADO(A), CORRENDO ATRÁS DO TEMPO E APAGANDO INCÊNDIOS', valor: 1 },
      { texto: 'ÀS VEZES CONSIGO FOCAR NO FUTURO, MAS QUASE SEMPRE NO AUTOMÁTICO', valor: 2 },
      { texto: 'TENHO CLAREZA DOS MEUS OBJETIVOS E SINTO QUE CRIO MEU PRÓPRIO CAMINHO', valor: 3 },
    ],
  },
  {
    pergunta: 'VOCÊ SENTE QUE SUAS CRENÇAS LIMITANTES TE IMPEDEM DE AVANÇAR?',
    opcoes: [
      { texto: 'SIM, FREQUENTEMENTE ME PEGO PENSANDO QUE “NÃO SOU BOM O BASTANTE”', valor: 1 },
      { texto: 'ÀS VEZES, MAS TENTO NÃO DEIXAR ISSO ME DOMINAR', valor: 2 },
      { texto: 'NÃO, JÁ COMECEI A REPROGRAMAR MINHA MENTE PARA O SUCESSO', valor: 3 },
    ],
  },
  {
    pergunta: 'QUANDO PENSA NO SEU FUTURO, O QUE SENTE?',
    opcoes: [
      { texto: 'MEDO E INSEGURANÇA', valor: 1 },
      { texto: 'DÚVIDAS, MAS TAMBÉM UMA VONTADE DE MUDAR', valor: 2 },
      { texto: 'CONFIANÇA E ENTUSIASMO', valor: 3 },
    ],
  },
  {
    pergunta: 'VOCÊ ACHA QUE SUA MENTE ESTÁ MAIS FOCADA EM SOBREVIVER OU EM CRIAR?',
    opcoes: [
      { texto: 'SOBREVIVER — ESTOU SEMPRE APAGANDO INCÊNDIOS', valor: 1 },
      { texto: 'ÀS VEZES SOBREVIVO, ÀS VEZES CRIO', valor: 2 },
      { texto: 'CRIAR — ESTOU CONSTRUINDO MEU CAMINHO COM PROPÓSITO', valor: 3 },
    ],
  },
  {
    pergunta: 'QUAL DESSAS FRASES MAIS RESSOA COM VOCÊ?',
    opcoes: [
      { texto: '“DINHEIRO NÃO DÁ EM ÁRVORE”', valor: 1 },
      { texto: '“NÃO SOU TÃO SORTUDO(A) QUANTO OS OUTROS”', valor: 2 },
      { texto: '“EU POSSO ESCOLHER PENSAR E AGIR DIFERENTE PARA MUDAR MINHA VIDA”', valor: 3 },
    ],
  },
  {
    pergunta: 'VOCÊ JÁ PAROU PRA SE PERGUNTAR SE O QUE VIVE HOJE É OQUE VOCÊ REALMENTE QUER?',
    opcoes: [
      { texto: 'NÃO, SÓ SIGO O FLUXO E TENTO SOBREVIVER', valor: 1 },
      { texto: 'JÁ PENSEI NISSO, MAS NÃO SEI POR ONDE COMEÇAR', valor: 2 },
      { texto: 'SIM, E ESTOU PRONTO(A) PARA PLANTAR NOVAS SEMENTES', valor: 3 },
    ],
  },
  {
    pergunta: 'VOCÊ ESTÁ DISPOSTO(A) A MUDAR SUA FORMA DE PENSAR PARA TRANSFORMAR SUA REALIDADE?',
    opcoes: [
      { texto: 'AINDA TENHO MEDO, NÃO SEI SE CONSIGO', valor: 1 },
      { texto: 'QUERO, MAS NÃO SEI COMO FAZER ISSO SOZINHO (A)', valor: 2 },
      { texto: 'SIM, QUERO UM PASSO A PASSO PRA FAZER ACONTECER', valor: 3 },
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

  // Estilo padrão para botões oval
  const btnStyle: React.CSSProperties = {
  backgroundColor: '#E50914',
  border: 'none',
  borderRadius: '30px',
  color: '#fff',
  padding: '0.8rem 2rem',
  cursor: 'pointer',
  fontWeight: '700',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s ease',
  width: '100%',      // botão vai preencher todo o container pai
  maxWidth: '450px',  // mas nunca vai ultrapassar isso (ajuste se quiser)
  minWidth: '300px',  // largura mínima fixa para uniformidade
  textAlign: 'center',
  boxSizing: 'border-box',
};
  // Função para mudar cor no hover
  const hoverColor = '#b00610';

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
                style={btnStyle}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E50914')}
                aria-label={`Opção: ${texto}`}
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
            style={btnStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E50914')}
          >
            QUERO TRANSFORMAR MINHA MENTALIDADE
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
