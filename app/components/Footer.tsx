// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Logo do Poder Mental no rodapé, branca no fundo preto */}
          
        </div>

        

        <div className="social-icons">
          <a href="https://www.instagram.com/mentaliidadesalpha/?next=%2F" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://chat.whatsapp.com/KN8ws56OUTFKXIvEfprqWr?mode=ac_t" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp size={24} />
          </a>
        </div>

        <div className="footer-info">
          <p>© {new Date().getFullYear()} Poder Mental. Todos os direitos reservados.</p>
          <p className="disclaimer">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.</p>
          <div className="developed-by">
              <p>Desenvolvido por</p>
              <Image 
                src="/logo1.png" 
                alt="Logo da Sua Empresa de Desenvolvimento" 
                width={90} 
                height={30} 
              />
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          width: 100%;
          background-color: var(--color-pure-black); /* RODAPÉ PRETO SÓLIDO */
          padding: 50px 25px 30px;
          border-top: 1px solid rgba(var(--color-text-light), 0.1);
          text-align: center;
          color: var(--color-text-tertiary);
          font-size: 0.8rem;
          box-sizing: border-box;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-logo {
          margin-bottom: 10px;
        }

        .footer-nav {
          margin-bottom: 15px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-link {
          color: var(--color-text-secondary);
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--color-neon-yellow);
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
        }

        .social-icons a {
          color: var(--color-text-secondary);
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .social-icons a:hover {
          color: var(--color-neon-blue);
          transform: translateY(-3px);
        }

        .footer-info {
          line-height: 1.4;
        }

        .disclaimer {
          font-size: 0.7rem;
          opacity: 0.8;
          margin-top: 10px;
        }

        .developed-by {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
            gap: 5px;
        }
        .developed-by p {
            margin: 0;
            font-size: 0.7rem;
            color: var(--color-text-tertiary);
        }


        @media (max-width: 768px) {
          .site-footer {
            padding: 40px 20px;
          }
          .footer-links {
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .site-footer {
            padding: 30px 15px;
            font-size: 0.7rem;
          }
          .footer-logo {
            margin-bottom: 5px;
          }
          .footer-nav {
            margin-bottom: 10px;
          }
          .footer-links {
            gap: 10px;
          }
          .disclaimer {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;