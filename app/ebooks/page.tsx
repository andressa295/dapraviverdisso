'use client';

import React from 'react';

const ebooks = [
  {
    title: 'Tudo começa na mente',
    description: 'Descubra como sua mente pode ser o maior ativo para seu sucesso.',
    cover: '/covers/tudo-comeca-na-mente.jpg',
  },
  {
    title: 'Tudo começa na mente 2.0',
    description: 'Aprofunde sua mentalidade criativa e alcance novos patamares.',
    cover: '/covers/tudo-comeca-na-mente-2.jpg',
  },
  {
    title: 'Desbloqueia, mente!',
    description: 'Técnicas para desbloquear seu potencial e agir com foco.',
    cover: '/covers/desbloqueia-mente.jpg',
  },
  {
    title: 'Desbloqueia, mente! 2.0',
    description: 'Evolua sua mente e crie resultados extraordinários.',
    cover: '/covers/desbloqueia-mente-2.jpg',
  },
  {
    title: 'RECONEXÃO. Volte pra si, volte pro seu poder.',
    description: 'Um guia para reencontrar sua força interior e propósito.',
    cover: '/covers/reconexao.jpg',
  },
  {
    title: 'Mentalidade Alpha',
    description: 'Desenvolva a mentalidade dos líderes e vencedores.',
    cover: '/covers/mentalidade-alpha.jpg',
  },
  {
    title: 'Do sonho à realidade. A arte de agir.',
    description: 'Transforme suas ideias em ações concretas e resultados.',
    cover: '/covers/do-sonho-a-realidade.jpg',
  },
];

const bonus = [
  'E-BOOK: DÁ PRA VIVER DISSO',
  'PLANILHA DE PRECIFICAÇÃO',
  'LISTA DE FORNECEDORES',
  'PLANILHA FLUXO DE CAIXA',
];

const testimonials = [
  {
    name: 'João Silva',
    text: 'Esses ebooks mudaram completamente minha forma de pensar e agir. Recomendo demais!',
  },
  {
    name: 'Mariana Oliveira',
    text: 'A Phand. está de parabéns pelo conteúdo e pela experiência incrível.',
  },
  {
    name: 'Carlos Eduardo',
    text: 'Aprendi a desbloquear meu potencial e já estou vendo resultados reais!',
  },
];

export default function EbooksPage() {
  return (
    <main
      style={{
        backgroundColor: '#141414',
        color: '#fff',
        minHeight: '100vh',
        padding: '2rem 1rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: '100vw',
        margin: 0,
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <header style={{ marginBottom: '3rem', textAlign: 'center', width: '100%' }}>
        <h1 style={{ fontWeight: '700', fontSize: '2.5rem', marginBottom: '0.5rem', color: '#E50914' }}>
          COMBO E-BOOKS
        </h1>
        <p style={{ color: '#bbb', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Tudo o que você precisa para desbloquear sua mente e transformar sua realidade.
        </p>
      </header>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.8rem',
          width: '100%',
          maxWidth: '1200px',
          padding: '0 1rem',
          boxSizing: 'border-box',
        }}
      >
        {ebooks.map((ebook) => (
          <div
            key={ebook.title}
            style={{
              backgroundColor: '#222',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={ebook.cover}
              alt={ebook.title}
              style={{ width: '100%', height: '160px', objectFit: 'cover' }}
              loading="lazy"
            />
            <div style={{ padding: '1rem' }}>
              <h2 style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.3rem' }}>{ebook.title}</h2>
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{ebook.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section
        style={{
          marginTop: '3rem',
          padding: '1.5rem',
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          maxWidth: '600px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <h3 style={{ color: '#E50914', marginBottom: '1rem', fontWeight: '700' }}>
          BÔNUS EXCLUSIVOS:
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, color: '#bbb', fontSize: '1rem' }}>
          {bonus.map((item) => (
            <li
              key={item}
              style={{ marginBottom: '0.6rem', paddingLeft: '1.5rem', position: 'relative' }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#E50914',
                  fontWeight: '700',
                }}
              >
                ▶
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        style={{
          marginTop: '4rem',
          width: '100%',
          maxWidth: '800px',
          padding: '0 1rem',
          boxSizing: 'border-box',
        }}
      >
        <h2 style={{ color: '#E50914', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '700' }}>
          Depoimentos
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {testimonials.map(({ name, text }) => (
            <blockquote
              key={name}
              style={{
                backgroundColor: '#222',
                borderRadius: '8px',
                padding: '1rem 1.5rem',
                maxWidth: '320px',
                color: '#ddd',
                fontStyle: 'italic',
                boxShadow: '0 3px 8px rgba(0,0,0,0.7)',
              }}
            >
              <p>"{text}"</p>
              <footer
                style={{
                  marginTop: '0.75rem',
                  textAlign: 'right',
                  fontWeight: '700',
                  color: '#E50914',
                }}
              >
                — {name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <button
          style={{
            backgroundColor: '#E50914',
            border: 'none',
            padding: '1rem 3rem',
            borderRadius: '30px',
            fontWeight: '700',
            fontSize: '1.2rem',
            cursor: 'pointer',
            boxShadow: '0 4px 15px #E50914',
            transition: 'background-color 0.3s ease',
            color: '#fff',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b0060f')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E50914')}
        >
          QUERO DESBLOQUEAR MINHA MENTE AGORA
        </button>
      </div>

      <footer
        style={{
          marginTop: '5rem',
          padding: '2rem 1rem',
          width: '100%',
          backgroundColor: '#111',
          color: '#666',
          fontSize: '0.9rem',
          textAlign: 'center',
          borderTop: '1px solid #333',
          userSelect: 'none',
        }}
      >
        © 2025 PhandCo. — Todos os direitos reservados.
      </footer>
    </main>
  );
}
