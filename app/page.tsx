'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #000000 0%, #1a1a2e 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Cabeçalho */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2.5rem',
          borderBottom: '1px solid #333',
          backgroundColor: '#121212',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <h1
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            color: '#e50914', // Vermelho Netflix
            userSelect: 'none',
          }}
          onClick={() => router.push('/')}
        >
          DapraViverDisso
        </h1>
        <button
          onClick={() => router.push('/quiz')}
          style={{
            backgroundColor: '#e50914',
            color: 'white',
            padding: '0.8rem 2.4rem',
            borderRadius: '9999px',
            fontWeight: '700',
            fontSize: '1rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(229, 9, 20, 0.7)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#b00611')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#e50914')}
        >
          Começar Quiz
        </button>
      </header>

      {/* Hero */}
      <section
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          textAlign: 'center',
          maxWidth: '720px',
          margin: 'auto',
          gap: '1.2rem',
        }}
      >
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            lineHeight: 1.3,
            color: '#fff',
          }}
        >
          🎯 Descubra onde sua mente está agora e desbloqueie o caminho para a sua verdadeira evolução.
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#b3b3b3',
            lineHeight: 1.5,
          }}
        >
          Responda 7 perguntas rápidas e receba um plano de ação + ebook ideal pro seu momento. Totalmente grátis.
        </p>
        <button
          onClick={() => router.push('/quiz')}
          style={{
            backgroundColor: '#e50914',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '9999px',
            fontWeight: '700',
            fontSize: '1.2rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(229, 9, 20, 0.9)',
            transition: 'background-color 0.3s ease',
            userSelect: 'none',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#b00611')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#e50914')}
        >
          Quero começar agora 🚀
        </button>
      </section>

      {/* Rodapé */}
      <footer
        style={{
          backgroundColor: '#121212',
          padding: '1rem',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#666',
          userSelect: 'none',
        }}
      >
        © {new Date().getFullYear()} DapraViverDisso — Sua mente no comando da sua vida
      </footer>
    </main>
  )
}
