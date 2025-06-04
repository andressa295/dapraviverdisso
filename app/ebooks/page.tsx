'use client';

import React from 'react';

const ebooks = [
  {
    title: 'Tudo começa na mente',
    description: 'Descubra como sua mente pode ser o maior ativo para seu sucesso.',
    cover: '/covers/tudo-comeca-na-mente.jpg',
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
    cover: '/covers/mentalidade-alpha.jpeg',
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
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        scrollBehavior: 'smooth',
      }}
    >
      <header style={{ marginBottom: '3rem', textAlign: 'center', width: '100%' }}>
        <h1
          style={{
            fontWeight: '500',
            fontSize: '2.75rem',
            marginBottom: '0.5rem',
            color: '#E50914',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          COMBO E-BOOKS
        </h1>
        <p
          style={{
            color: '#bbb',
            fontSize: '1.15rem',
            maxWidth: '400px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Tudo o que você precisa para desbloquear sua mente e transformar sua realidade.
        </p>
      </header>

      <section
        aria-label="Lista de ebooks disponíveis"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {ebooks.map(({ title, description, cover }) => (
          <article
            key={title}
            tabIndex={0}
            role="group"
            aria-label={`Ebook: ${title}`}
            style={{
              backgroundColor: '#222',
              borderRadius: '10px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.7)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(229, 9, 20, 0.8)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.7)';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(229, 9, 20, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.7)';
            }}
          >
            <img
              src={cover}
              alt={`Capa do ebook ${title}`}
              style={{
                width: '100%',
                height: '240px',
                objectFit: 'cover',
                objectPosition: 'top',
                backgroundColor: '#111',
              }}
              loading="lazy"
              decoding="async"
            />
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>{title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#aaa', lineHeight: '1.4' }}>{description}</p>
            </div>
          </article>
        ))}
      </section>

      <section
        aria-label="Bônus exclusivos do combo"
        style={{
          marginTop: '4rem',
          backgroundColor: '#1a1a1a',
          padding: '2rem',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '800px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
        }}
      >
        <h2 style={{ fontSize: '1.75rem', color: '#E50914', marginBottom: '1rem', textAlign: 'center' }}>
          BÔNUS EXCLUSIVOS
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {bonus.map((item) => (
            <li
              key={item}
              style={{
                padding: '0.75rem 1rem',
                marginBottom: '0.5rem',
                backgroundColor: '#2a2a2a',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '1rem',
                textAlign: 'center',
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-label="Depoimentos"
        style={{
          marginTop: '4rem',
          width: '100%',
          maxWidth: '1000px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#E50914' }}>DEPOIMENTOS</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            padding: '1rem 0',
          }}
        >
          {testimonials.map(({ name, text }) => (
            <blockquote
              key={name}
              style={{
                backgroundColor: '#1f1f1f',
                padding: '1.25rem',
                borderRadius: '10px',
                color: '#ccc',
                fontStyle: 'italic',
                boxShadow: '0 3px 12px rgba(0,0,0,0.3)',
              }}
            >
              <p style={{ marginBottom: '0.75rem' }}>"{text}"</p>
              <footer style={{ fontWeight: 'bold', color: '#fff' }}>— {name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
