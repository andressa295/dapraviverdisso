'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 70) {
          clearInterval(interval)
          return 70
        }
        return old + 1
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  // Estilos responsivos
  const responsive = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 1.5rem',
      borderBottom: '1px solid #333',
      backgroundColor: '#121212',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      flexWrap: 'wrap',
    },
    logo: {
      fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
      fontWeight: 700,
      color: '#e50914',
      cursor: 'pointer',
      letterSpacing: '1px',
      userSelect: 'none',
    },
    progressWrap: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      width: 'clamp(140px, 40vw, 180px)',
      fontSize: '0.85rem',
      color: '#e50914',
      userSelect: 'none',
      marginTop: '1rem',
    },
    hero: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem 1rem',
      textAlign: 'center',
      maxWidth: '720px',
      margin: 'auto',
      gap: '1.2rem',
    },
    title: {
      fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
      fontWeight: 600,
      color: '#ddd',
      lineHeight: 1.4,
      margin: '0 auto 1rem',
      letterSpacing: '0.02em',
    },
    desc: {
      fontSize: 'clamp(0.9rem, 3vw, 1rem)',
      color: '#bbb',
      lineHeight: 1.6,
      margin: '0 auto 1.5rem',
    },
    button: {
      backgroundColor: '#e50914',
      color: 'white',
      padding: 'clamp(0.8rem, 2vw, 1rem) clamp(2rem, 5vw, 3rem)',
      borderRadius: '9999px',
      fontWeight: 700,
      fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 0 20px rgba(229, 9, 20, 0.9)',
      userSelect: 'none',
    },
    testimonials: {
      backgroundColor: '#121212',
      padding: '2rem 1rem',
      maxWidth: '720px',
      margin: '2rem auto',
      borderRadius: '8px',
      boxShadow: '0 0 15px rgba(229, 9, 20, 0.4)',
      color: 'white',
      textAlign: 'center',
    },
    h3: {
      fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
      marginBottom: '1.5rem',
      color: '#e50914',
      fontWeight: '700',
    },
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#000',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <header style={responsive.header}>
        <h1 style={responsive.logo} onClick={() => router.push('/')}>
          DapraViverDisso
        </h1>
        <div style={responsive.progressWrap}>
          <span style={{ marginBottom: '0.3rem', fontWeight: '600' }}>
            Seu progresso mental
          </span>
          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#333',
              borderRadius: '9999px',
              overflow: 'hidden',
              boxShadow: '0 0 5px #e50914',
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: '#e50914',
                borderRadius: '9999px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      </header>

      <section style={responsive.hero}>
        <h2 style={responsive.title}>
          🎯 DESCUBRA ONDE SUA MENTE ESTÁ AGORA E DESBLOQUEIE O CAMINHO PARA A SUA EVOLUÇÃO.
        </h2>
        <p style={responsive.desc}>
          RESPONDA 7 PERGUNTAS RÁPIDAS E RECEBA UM PLANO DE AÇÃO IDEAL PRO SEU MOMENTO. TOTALMENTE GRÁTIS.
        </p>
        <button
          onClick={() => router.push('/quiz')}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#b00611')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#e50914')}
          style={responsive.button}
        >
          Quero começar agora 🚀
        </button>
      </section>

      <section style={responsive.testimonials}>
        <h3 style={responsive.h3}>O que dizem por aí</h3>
        <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#ddd' }}>
          "Esse quiz mudou a forma como eu encaro meus desafios. Simples, direto e super eficaz!"
        </blockquote>
        <p style={{ fontWeight: '700', marginBottom: '2rem', color: '#e50914' }}>— João S.</p>

        <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#ddd' }}>
          "Adorei receber um plano de ação personalizado junto com o ebook. Recomendo demais!"
        </blockquote>
        <p style={{ fontWeight: '700', marginBottom: '2rem', color: '#e50914' }}>— Maria P.</p>

        <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#ddd' }}>
          "Conteúdo top, visual show e a experiência no site foi muito agradável."
        </blockquote>
        <p style={{ fontWeight: '700', color: '#e50914' }}>— Lucas M.</p>
      </section>

      <footer
        style={{
          padding: '2rem 1rem',
          backgroundColor: '#121212',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#888',
        }}
      >
        © {new Date().getFullYear()} PhandCo. Todos os direitos reservados.
      </footer>
    </main>
  )
}
