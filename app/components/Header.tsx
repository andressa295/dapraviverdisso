'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5'; // Ícone de 'X'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Lógica para mudar o estilo do cabeçalho ao rolar a página
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Lógica para impedir a rolagem do corpo da página quando o menu mobile está aberto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Impede a rolagem
    } else {
      document.body.style.overflow = 'unset'; // Restaura a rolagem normal
    }

    // Função de limpeza do useEffect
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset'; // Garante que a rolagem seja restaurada ao desmontar o componente
    };
  }, [isMenuOpen]); // isMenuOpen é uma dependência, então o efeito roda quando ele muda

  // Alterna o estado do menu (abre/fecha)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fecha o menu explicitamente
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        {/* Logo que também serve para fechar o menu ao clicar */}
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Poder Mental Logo"
            width={100}
            height={90}
            priority // Prioriza o carregamento da logo
          />
        </Link>

        {/* Menu para telas maiores (Desktop) */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li><Link href="#inicio" className="nav-item">Início</Link></li>
            <li><Link href="#comunidade" className="nav-item">Comunidade</Link></li>
            <li><Link href="#gratuitos" className="nav-item">Conteúdos Gratuitos</Link></li>
            <li><Link href="#oferta" className="nav-item">E-books</Link></li>
            <li><Link href="#contato" className="nav-item">Contato</Link></li>
          </ul>
        </nav>

        {/* Botão de menu hamburguer para Mobile - agora ele apenas ABRE o menu */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação" // Melhor rótulo para acessibilidade
        >
          <GiHamburgerMenu size={28} /> {/* Sempre mostra o ícone de hambúrguer */}
        </button>

        {/* Menu Mobile (overlay de tela cheia) */}
        <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          {/* NOVO: Botão de Fechar DEDICADO, dentro do menu mobile */}
          <button
            className="close-menu-button"
            onClick={closeMenu}
            aria-label="Fechar menu de navegação" // Rótulo para acessibilidade
          >
            <IoCloseSharp size={32} /> {/* Ícone 'X' maior para fechar */}
          </button>

          <ul className="nav-list">
            {/* Os itens do menu mobile fecham o menu ao serem clicados */}
            <li><Link href="#inicio" className="nav-item" onClick={closeMenu}>Início</Link></li>
            <li><Link href="#comunidade" className="nav-item" onClick={closeMenu}>Comunidade</Link></li>
            <li><Link href="#gratuitos" className="nav-item" onClick={closeMenu}>Conteúdos Gratuitos</Link></li>
            <li><Link href="#oferta" className="nav-item" onClick={closeMenu}>E-books</Link></li>
            <li><Link href="#contato" className="nav-item" onClick={closeMenu}>Contato</Link></li>
          </ul>
        </nav>
      </div>

      {/* LINHA SEPARADORA DE DETALHE NEON (permanece como estava) */}
      <div className="neon-separator-line"></div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: var(--color-pure-black); /* CABEÇALHO PRETO PURO */
          backdrop-filter: blur(10px); /* Efeito de desfoque por trás */
          z-index: 1000; /* Garante que o cabeçalho fique acima de outros elementos */
          padding: 15px 25px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* Sombra suave */
          display: flex;
          flex-direction: column; /* Para a linha ficar abaixo do conteúdo do header */
          justify-content: center;
          align-items: center;
          box-sizing: border-box; /* Garante que padding e borda não aumentem a largura total */
          transition: background 0.3s ease, box-shadow 0.3s ease; /* Transição suave */
        }

        .header.scrolled {
          background: var(--color-pure-black); /* Fundo pode mudar ao rolar */
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Sombra mais intensa ao rolar */
        }
        
        .header-content {
          width: 100%;
          max-width: 1200px; /* Limita a largura do conteúdo interno do cabeçalho */
          display: flex;
          justify-content: space-between; /* Espaça logo e menu */
          align-items: center;
          gap: 20px;
        }

        /* Estilos da Logo (sem alterações funcionais aqui) */
        .logo-image {
            /* filter: brightness(0) invert(1); */ /* Exemplo se a logo preta precisar ficar branca em fundo escuro */
        }
        
        /* Menu Desktop (visível apenas em telas maiores) */
        .nav-desktop {
          display: flex;
        }

        .nav-list {
          list-style: none; /* Remove marcadores de lista */
          padding: 0;
          margin: 0;
          display: flex;
          gap: 25px; /* Espaçamento entre os itens do menu */
        }

        .nav-item {
          color: var(--color-text-light); /* Cor dos links */
          font-weight: 600;
          font-size: 1rem;
          position: relative; /* Para o efeito de sublinhado */
          transition: color 0.3s ease;
          text-decoration: none; /* Remove sublinhado padrão dos links */
        }

        /* Efeito de sublinhado ao passar o mouse */
        .nav-item::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0; /* Começa com largura zero */
          height: 2px;
          background: var(--color-neon-gradient); /* Gradiente neon para o sublinhado */
          transition: width 0.3s ease; /* Anima a largura */
        }

        .nav-item:hover {
          color: var(--color-neon-yellow); /* Cor ao passar o mouse */
        }
        
        .nav-item:hover::after {
          width: 100%; /* Sublinhado se expande ao passar o mouse */
        }

        /* Botão de Menu Hamburguer (visível apenas no mobile) */
        .menu-toggle {
          background: transparent;
          color: var(--color-text-light); /* Cor do ícone */
          border: none; /* Remove borda padrão de botões */
          cursor: pointer;
          font-size: 28px;
          display: none; /* Escondido por padrão (desktop), visível no mobile */
          z-index: 1001; /* Garante que esteja acima do menu mobile */
          padding: 0; /* Remove padding padrão do botão */
        }

        /* Menu Mobile (Overlay de tela cheia) */
        .nav-mobile {
          display: flex; /* Mantém como flex para a estrutura interna */
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh; /* Altura total da viewport */
          background: rgba(0, 0, 0, 0.95); /* Fundo escuro semitransparente */
          backdrop-filter: blur(20px); /* Efeito de desfoque */
          z-index: 999; /* Fica abaixo do cabeçalho principal, mas acima do conteúdo da página */
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0; /* Começa invisível */
          transform: translateY(-100%); /* Começa fora da tela (para cima) */
          transition: opacity 0.4s ease-out, transform 0.4s ease-out; /* Animação de entrada/saída */
          pointer-events: none; /* Impede cliques quando o menu está invisível/fechando */
        }

        .nav-mobile.open {
          opacity: 1; /* Torna visível */
          transform: translateY(0); /* Desliza para a tela */
          pointer-events: auto; /* Permite cliques quando o menu está aberto */
        }

        .nav-mobile .nav-list {
          flex-direction: column; /* Itens da lista em coluna */
          gap: 30px; /* Espaçamento entre os itens */
        }

        .nav-mobile .nav-item {
          font-size: 1.8rem; /* Tamanho da fonte dos links no mobile */
          font-weight: 700;
          color: var(--color-text-light);
          text-shadow: 0 0 10px var(--color-neon-blue), 0 0 20px var(--color-neon-purple); /* Sombra neon para o texto */
          text-decoration: none;
          transition: color 0.3s ease, text-shadow 0.3s ease; /* Transição para efeitos hover */
        }

        .nav-mobile .nav-item:hover {
          color: var(--color-neon-yellow); /* Cor ao passar o mouse */
          text-shadow: 0 0 15px var(--color-neon-yellow), 0 0 25px var(--color-neon-yellow-dark); /* Efeito de brilho mais intenso */
        }

        /* NOVO: Botão de Fechar DEDICADO no Mobile */
        .close-menu-button {
          position: absolute; /* Posicionado dentro do nav-mobile */
          top: 25px; /* Distância do topo */
          right: 25px; /* Distância da direita */
          background: transparent;
          color: var(--color-text-light); /* Cor do ícone 'X' */
          border: none;
          cursor: pointer;
          padding: 10px; /* Área de clique maior para facilitar */
          z-index: 1002; /* Garante que esteja acima de tudo no menu mobile */
          display: none; /* Escondido por padrão, visível apenas quando o menu mobile está aberto */
        }

        /* LINHA SEPARADORA DE DETALHE NEON (permanece como estava) */
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
        
        /* Adaptação para mobile (media query) */
        @media (max-width: 768px) {
          .nav-desktop {
            display: none; /* Esconde o menu desktop no mobile */
          }
          .menu-toggle {
            display: block; /* Mostra o botão hamburguer no mobile */
          }
          /* Mostra o botão de fechar quando o menu mobile está aberto */
          .nav-mobile.open .close-menu-button {
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