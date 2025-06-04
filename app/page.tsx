'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


export function LogoPhandco() {
  return (
    <svg
      width="160"
      height="50"
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo Phandco"
    >
      <text
        x="0"
        y="38"
        fill="#E60023" // Vermelho intenso tipo "vermelho Phandco"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="40"
        letterSpacing="-2"
        style={{ filter: 'drop-shadow(0 2px 2px rgba(230, 0, 35, 0.5))' }}
      >
        Phandco
      </text>
    </svg>
  );
}



export default function Home() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  // Simula progresso animado
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

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#000000',
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
        <div onClick={() => router.push('/')} aria-label="Voltar para Home">
          <LogoPhandco />
        </div>

        {/* Widget progresso mental */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            width: '180px',
            fontSize: '0.9rem',
            color: '#e50914',
            userSelect: 'none',
            gap: '0.4rem', // espaçamento entre título e barra
            whiteSpace: 'nowrap', // impede quebra de linha no texto
          }}
        >
          <span style={{ fontWeight: '600' }}>Seu progresso mental</span>
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
            fontSize: '1.5rem',
            fontWeight: '600',
            lineHeight: 1.4,
            color: '#ddd',
            maxWidth: '620px',
            margin: '0 auto 1.2rem',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            letterSpacing: '0.02em',
            textAlign: 'center',
          }}
        >
          🎯 DESCUBRA ONDE SUA MENTE ESTÁ AGORA E DESBLOQUEIE O CAMINHO PARA A SUA
          EVOLUÇÃO.
        </h2>
        <p
          style={{
            fontSize: '1rem',
            color: '#bbb',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto 1.5rem',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: 'center',
          }}
        >
          RESPONDA 7 PERGUNTAS RÁPIDAS E RECEBA UM PLANO DE AÇÃO IDEAL PRO SEU
          MOMENTO. TOTALMENTE GRÁTIS.
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
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#b00611')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#e50914')}
        >
          Quero começar agora 🚀
        </button>
      </section>

      {/* Depoimentos */}
      <section
        style={{
          backgroundColor: '#121212',
          padding: '3rem 1.5rem',
          maxWidth: '720px',
          margin: '2rem auto',
          borderRadius: '8px',
          boxShadow: '0 0 15px rgba(229, 9, 20, 0.4)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontSize: '1.6rem',
            marginBottom: '1.5rem',
            color: '#e50914',
            fontWeight: '700',
          }}
        >
          O que dizem por aí
        </h3>

        <blockquote
          style={{
            fontStyle: 'italic',
            marginBottom: '1rem',
            color: '#ddd',
          }}
        >
          "Esse quiz mudou a forma como eu encaro meus desafios. Simples, direto e super
          eficaz!"
        </blockquote>
        <p style={{ fontWeight: '700', marginBottom: '2rem', color: '#e50914' }}>
          — João S.
        </p>

        <blockquote
          style={{
            fontStyle: 'italic',
            marginBottom: '1rem',
            color: '#ddd',
          }}
        >
          "Adorei receber um plano de ação personalizado junto com o ebook. Recomendo
          demais!"
        </blockquote>
        <p style={{ fontWeight: '700', marginBottom: '2rem', color: '#e50914' }}>
          — Maria P.
        </p>

        <blockquote
          style={{
            fontStyle: 'italic',
            marginBottom: '1rem',
            color: '#ddd',
          }}
        >
          "Conteúdo top, visual show e a experiência no site foi muito agradável."
        </blockquote>
        <p style={{ fontWeight: '700', color: '#e50914' }}>— Lucas M.</p>
      </section>

      {/* Rodapé */}
      <footer
        style={{
          backgroundColor: '#121212',
          padding: '1rem',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#666666',
          userSelect: 'none',
        }}
      >
        © {new Date().getFullYear()} PhandCo. — Sua mente no comando da sua vida
      </footer>
    </main>
  )
}
