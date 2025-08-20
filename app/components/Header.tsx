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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
          />
        </Link>

        <nav className="nav-desktop">
          
        </nav>

        
        
      </div>

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
          padding: 0px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: background 0.3s ease, box-shadow 0.3s ease;
          margin: 0 auto;
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
          display: none;
          z-index: 1001;
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
          justify-content: flex-start;
          align-items: center;
          opacity: 0;
          transform: translateY(-100%);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
          pointer-events: none;
          padding-top: calc(15px + 90px + 15px + 3px + 10px + 20px);
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
          margin-top: 20px;
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

        .close-menu-button {
          position: fixed;
          top: 25px;
          right: 25px;
          background: transparent;
          color: var(--color-text-light);
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1002;
          display: none;
        }

        .nav-mobile.open + .menu-toggle {
          display: none;
        }
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
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          .menu-toggle {
            display: block;
          }
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
