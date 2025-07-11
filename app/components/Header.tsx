// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image 
            src="/logo.png" 
            alt="Poder Mental Logo" 
            width={100}
            height={90}
            priority
            // A logo é branca, e o fundo será preto, então não precisa de filtro.
            // Se a logo tiver um fundo ou contorno preto, podemos ajustar para uma versão branca aqui.
            // Se a logo for branca e o fundo for branco, teríamos que filtrar.
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li><Link href="#inicio" className="nav-item">Início</Link></li>
            <li><Link href="#comunidade" className="nav-item">Comunidade</Link></li>
            <li><Link href="#gratuitos" className="nav-item">Conteúdos Gratuitos</Link></li>
            <li><Link href="#oferta" className="nav-item">E-books</Link></li>
            <li><Link href="#contato" className="nav-item">Contato</Link></li>
          </ul>
        </nav>

        {/* Botão de menu hamburguer para Mobile */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
          {isMenuOpen ? <IoCloseSharp size={28} /> : <GiHamburgerMenu size={28} />}
        </button>

        {/* Menu Mobile */}
        <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link href="#inicio" className="nav-item" onClick={closeMenu}>Início</Link></li>
            <li><Link href="#comunidade" className="nav-item" onClick={closeMenu}>Comunidade</Link></li>
            <li><Link href="#gratuitos" className="nav-item" onClick={closeMenu}>Conteúdos Gratuitos</Link></li>
            <li><Link href="#oferta" className="nav-item" onClick={closeMenu}>E-books</Link></li>
            <li><Link href="#contato" className="nav-item" onClick={closeMenu}>Contato</Link></li>
          </ul>
        </nav>
      </div>

      {/* LINHA SEPARADORA DE DETALHE NEON */}
      <div className="neon-separator-line"></div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: var(--color-pure-black); /* CABEÇALHO PRETO PURO */
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 15px 25px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* Sombra suave */
          display: flex;
          flex-direction: column; /* Para a linha ficar abaixo */
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .header.scrolled {
          background: var(--color-pure-black);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
        }
        
        .header-content {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .logo-image {
            /* Se sua logo PNG for branca e o fundo agora é preto, não precisa de filtro */
            /* Se for preta e precisar ficar branca, usaria: filter: brightness(0) invert(1); */
        }
        
        .nav-desktop {
          display: flex;
        }

        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 25px;
        }

        .nav-item {
          color: var(--color-text-light); /* LINKS BRANCOS NO CABEÇALHO PRETO */
          font-weight: 600;
          font-size: 1rem;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0;
          height: 2px;
          background: var(--color-neon-gradient);
          transition: width 0.3s ease;
        }

        .nav-item:hover {
          color: var(--color-neon-yellow);
        }
        
        .nav-item:hover::after {
          width: 100%;
        }

        .menu-toggle {
          background: transparent;
          color: var(--color-text-light); /* ÍCONE HAMBURGUER BRANCO */
          font-size: 28px;
          display: none;
        }

        .nav-mobile {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          z-index: 999;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: translateY(-100%);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }

        .nav-mobile.open {
          display: flex;
          opacity: 1;
          transform: translateY(0);
        }

        .nav-mobile .nav-list {
          flex-direction: column;
          gap: 30px;
        }

        .nav-mobile .nav-item {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-text-light);
          text-shadow: 0 0 10px var(--color-neon-blue), 0 0 20px var(--color-neon-purple);
        }

        .nav-mobile .nav-item:hover {
          color: var(--color-neon-yellow);
          text-shadow: 0 0 15px var(--color-neon-yellow), 0 0 25px var(--color-neon-yellow-dark);
        }

        /* LINHA SEPARADORA DE DETALHE NEON */
        .neon-separator-line {
            width: 100%;
            height: 3px; /* Altura da linha */
            background: var(--color-neon-gradient); /* Gradiente neon */
            box-shadow: 0 0 10px rgba(37, 117, 252, 0.5); /* Brilho suave */
            animation: neon-line-flow 8s infinite linear; /* Animação sutil de fluxo */
            margin-top: 15px; /* Espaçamento da linha para o conteúdo do header */
        }

        @keyframes neon-line-flow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
        }
        
        /* Adaptação para mobile */
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          .menu-toggle {
            display: block;
          }
          .neon-separator-line {
            height: 2px; /* Linha mais fina no mobile */
            margin-top: 10px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;