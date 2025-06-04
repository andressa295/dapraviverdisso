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

// Extra: botão com efeito de foco e acessibilidade reforçada + animação sutil no hover
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
        scrollBehavior: 'smooth',
      }}
    >
      <header
        style={{
          marginBottom: '3rem',
          textAlign: 'center',
          width: '100%',
          userSelect: 'none',
        }}
      >
        <h1
          style={{
            fontWeight: '700',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '800px',
          padding: '0 1rem',
          boxSizing: 'border-box',
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
              e.currentTarget.style.boxShadow = '0 20px 30px rgba(229, 9, 20, 0.8)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.7)';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 30px rgba(229, 9, 20, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.7)';
            }}
          >
          <div
  style={{
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  }}
>
  <div
  style={{
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #333',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#1a1a1a', // fundo dark
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    alignSelf: 'flex-start',
  }}
>
  <img
    src={cover}
    alt={`Capa do ebook ${title}`}
    style={{
      width: '100%',
      height: '240px', // Proporcional ao 600x900
      objectFit: 'cover',
      objectPosition: 'top',
      flexShrink: 0,
      backgroundColor: '#111', // fallback caso a imagem não carregue
    }}
    loading="lazy"
    decoding="async"
  />

  <div
    style={{
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }}
  >
    <h3
      style={{
        fontSize: '1rem',
        margin: 0,
        fontWeight: 600,
        color: '#fff', // texto claro no fundo escuro
      }}
    >
      {title}
    </h3>

    <p
      style={{
        fontSize: '0.875rem',
        margin: 0,
        color: '#aaa', // cinzinha pra descrição
        lineHeight: '1.4',
      }}
    >
      {description}
    </p>
  </div>
</div>

</div>

          </article>
        ))}
      </section>

      <section
        aria-label="Bônus exclusivos do combo"
        style={{
          marginTop: '3.5rem',
          padding: '1.8rem 2rem',
          backgroundColor: '#1a1a1a',
          borderRadius: '10px',
          boxShadow: '0 3px 10px rgba(0,0,0,0.6)',
          maxWidth: '600px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          userSelect: 'none',
        }}
      >
        <h3
          style={{
            color: '#E50914',
            marginBottom: '1.2rem',
            fontWeight: '700',
            fontSize: '1.5rem',
            letterSpacing: '0.05em',
          }}
        >
          BÔNUS EXCLUSIVOS:
        </h3>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            color: '#bbb',
            fontSize: '1.1rem',
            lineHeight: 1.6,
          }}
        >
          {bonus.map((item) => (
            <li
              key={item}
              style={{
                marginBottom: '0.8rem',
                paddingLeft: '2rem',
                position: 'relative',
                fontWeight: '600',
                userSelect: 'text',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#E50914',
                  fontWeight: '900',
                  fontSize: '1.3rem',
                  lineHeight: 1,
                  userSelect: 'none',
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
        aria-label="Depoimentos de clientes"
        style={{
          marginTop: '4.5rem',
          width: '100%',
          maxWidth: '900px',
          padding: '0 1rem',
          boxSizing: 'border-box',
        }}
      >
        <h2
          style={{
            color: '#E50914',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '2rem',
            letterSpacing: '0.05em',
          }}
        >
          Depoimentos
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '1.8rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            userSelect: 'none',
          }}
        >
          {testimonials.map(({ name, text }) => (
            <blockquote
              key={name}
              style={{
                backgroundColor: '#222',
                borderRadius: '12px',
                padding: '1.2rem 1.8rem',
                maxWidth: '320px',
                color: '#ddd',
                fontStyle: 'italic',
                boxShadow: '0 5px 15px rgba(0,0,0,0.75)',
                transition: 'transform 0.3s ease',
              }}
              tabIndex={0}
              onFocus={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onBlur={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              aria-label={`Depoimento de ${name}`}
            >
              <p>“{text}”</p>
              <footer
                style={{
                  marginTop: '0.8rem',
                  fontWeight: '700',
                  fontSize: '1rem',
                  color: '#E50914',
                  textAlign: 'right',
                }}
              >
                — {name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <button
        type="button"
        style={{
          marginTop: '4rem',
          backgroundColor: '#E50914',
          color: '#fff',
          padding: '1rem 3rem',
          border: 'none',
          borderRadius: '9999px',
          fontWeight: '700',
          fontSize: '1.3rem',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(229, 9, 20, 0.7)',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          userSelect: 'none',
          alignSelf: 'center',
          outline: 'none',
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = '0 0 15px 4px rgba(255, 255, 255, 0.7)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(229, 9, 20, 0.7)';
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#b0070f';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(176, 7, 15, 0.9)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#E50914';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(229, 9, 20, 0.7)';
        }}
        onClick={() => alert('Bora garantir seu combo eBooks!')}
        aria-label="Comprar combo de eBooks"
      >
        Quero meu combo agora!
      </button>
    </main>
  );
}
