// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Novo ícone de menu, talvez mais "limpo" (ou você pode trocar por outro)
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5'; 
// Se preferir o ícone GiHamburgerMenu, é só mudar IoMenuSharp de volta para GiHamburgerMenu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Impede rolagem do corpo da página quando o menu mobile está aberto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset'; // Garante reset ao desmontar
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link href="/" className="logo" onClick={closeMenu} aria-label="Voltar para o início">
          <Image
            src="/logo.png"
            alt="Poder Mental Logo"
            width={100}
            height={90}
            priority
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

        {/* Botão de menu hamburguer para Mobile - SEMPRE MOSTRA O ÍCONE DE ABRIR */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
        >
          <IoMenuSharp size={28} /> {/* Sugestão de ícone mais bonito. Mude para GiHamburgerMenu se preferir o anterior */}
        </button>

        {/* Menu Mobile (overlay de tela cheia) */}
        <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          {/* Botão de Fechar DEDICADO e CLARO dentro do menu mobile */}
          <button
            className="close-menu-button"
            onClick={closeMenu}
            aria-label="Fechar menu de navegação"
          >
            <IoCloseSharp size={32} /> {/* Ícone 'X' grande e visível para fechar */}
          </button>

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
          background: var(--color-pure-black);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 15px 25px; /* Altura do header: 15 (top) + 90 (logo) + 15 (bottom) + 3 (linha) + 15 (margem linha) = ~138px */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        /* Variável CSS para a altura do cabeçalho no mobile.
           Isso é crucial para o padding-top da Hero Section. */
        @media (max-width: 768px) {
            .header {
                /* Calcule a altura aqui: padding-top + height da logo + padding-bottom + height da linha + margin-top da linha */
                /* 15px (padding top) + 90px (altura logo) + 15px (padding bottom) = 120px + 2px (linha) + 10px (margin-top linha) = ~132px */
                /* Podemos arredondar ou ser mais exatos. Vamos usar um valor aproximado e ajustar o padding-top da hero. */
            }
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
          color: var(--color-text-light);
          font-weight: 600;
          font-size: 1rem;
          position: relative;
          transition: color 0.3s ease;
          text-decoration: none;
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
          color: var(--color-text-light);
          border: none;
          cursor: pointer;
          font-size: 28px;
          display: none; /* Escondido por padrão, visível apenas no mobile */
          z-index: 1001; /* Garante que esteja acima do nav-mobile quando o menu está aberto */
          padding: 0;
        }

        .nav-mobile {
          display: flex;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          z-index: 999;
          flex-direction: column;
          justify-content: flex-start; /* Alinha do topo */
          align-items: center; /* Centraliza horizontalmente */
          opacity: 0;
          transform: translateY(-100%);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
          pointer-events: none;
          
          /* CRUCIAL: Padding-top para descer o conteúdo do menu abaixo do cabeçalho fixo */
          /* (altura da logo + 2x padding do header + 2x margem/altura da linha) */
          padding-top: calc(90px + 2 * 15px + 3px + 10px + 30px); /* Altura da logo + paddings do header + linha + um espaço extra */
          box-sizing: border-box;
        }

        .nav-mobile.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .nav-mobile .nav-list {
          flex-direction: column;
          gap: 30px;
          margin-top: 20px; /* Espaçamento da lista de links em relação ao topo do overlay */
        }

        .nav-mobile .nav-item {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-text-light);
          text-shadow: 0 0 10px var(--color-neon-blue), 0 0 20px var(--color-neon-purple);
          text-decoration: none;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .nav-mobile .nav-item:hover {
          color: var(--color-neon-yellow);
          text-shadow: 0 0 15px var(--color-neon-yellow), 0 0 25px var(--color-neon-yellow-dark);
        }

        /* Botão de Fechar DEDICADO e CLARO no Mobile */
        .close-menu-button {
          position: fixed; /* Fixado na tela, acima do nav-mobile, mas abaixo do header principal */
          top: 25px; /* Distância do topo */
          right: 25px; /* Distância da direita */
          background: transparent;
          color: var(--color-text-light);
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1002; /* Acima do nav-mobile, mas abaixo do header em si (que é 1000) */
          display: none;
        }
        
        /* Quando o menu mobile está aberto, o botão de fechar é exibido */
        .nav-mobile.open .close-menu-button {
          display: block;
        }

        .neon-separator-line {
          width: 100%;
          height: 3px;
          background: var(--color-neon-gradient);
          box-shadow: 0 0 10px rgba(37, 117, 252, 0.5);
          animation: neon-line-flow 8s infinite linear;
          margin-top: 15px;
        }

        @keyframes neon-line-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        /* Adaptação para mobile (media query) */
        @media (max-width: 768px) {
          .nav-desktop {
            display: none; /* Esconde o menu desktop no mobile */
          }
          .menu-toggle {
            display: block; /* Mostra o botão hamburguer no mobile */
          }
          /* O botão de fechar é exibido pelo .nav-mobile.open .close-menu-button (acima) */
          
          .neon-separator-line {
            height: 2px;
            margin-top: 10px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;