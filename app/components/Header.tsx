// components/Header.tsx
'use client'; 

import React, { useState, useEffect } from 'react';

const Header = () => {
  // Data final da promoção (Exemplo: 2 dias a partir de agora).
  // AJUSTE ESTA DATA para a sua data final REAL no formato 'YYYY-MM-DDTHH:mm:ss'.
  const promotionEndDate = new Date('2025-07-04T23:59:59').getTime(); 

  const [hasMounted, setHasMounted] = useState(false); 
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setHasMounted(true);

    const calculateAndUpdateTime = () => {
      const now = new Date().getTime();
      const difference = promotionEndDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateAndUpdateTime(); 

    const timer = setInterval(calculateAndUpdateTime, 1000);

    return () => clearInterval(timer);
  }, [promotionEndDate]); 

  const timerComponents: React.ReactNode[] = [];

  if (hasMounted) {
    if (promotionEndDate > new Date().getTime()) {
      Object.keys(timeLeft).forEach((interval) => {
        const value = timeLeft[interval as keyof typeof timeLeft];
        if (typeof value === 'number' && value >= 0) {
          timerComponents.push(
            <span key={interval} className="countdown-item">
              {String(value).padStart(2, '0')} {interval.charAt(0)}
            </span>
          );
        }
      });
    } else {
      timerComponents.push(
        <span key="days" className="countdown-item">00d</span>,
        <span key="hours" className="countdown-item">00h</span>,
        <span key="minutes" className="countdown-item">00m</span>,
        <span key="seconds" className="countdown-item">00s</span>
      );
    }
  }

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-placeholder">PHANDCO</div> 
        <div className="countdown-container">
          {hasMounted ? ( 
            <>
              <span className="countdown-text">A OFERTA TERMINA EM:</span>
              {timerComponents.length ? ( 
                <div className="countdown-timer">
                  {timerComponents}
                </div>
              ) : (
                <span className="promotion-ended">PROMOÇÃO ENCERRADA!</span>
              )}
            </>
          ) : (
            <span className="countdown-text placeholder-countdown">
              Carregando oferta...
            </span>
          )}
        </div>
      </div>

      <style jsx>{`
        .main-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.9); /* Um pouco menos transparente para melhorar contraste */
          backdrop-filter: blur(10px); /* Mais desfoque */
          z-index: 1000;
          padding: 12px 25px; /* Aumenta um pouco o padding para maior "presença" */
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4); /* Sombra mais visível */
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box; /* Garante que padding não aumente a largura total */
        }
        .header-content {
          width: 100%;
          max-width: 1200px; /* Aumenta um pouco o max-width para dar mais espaço */
          display: flex;
          justify-content: space-between; /* Mantém logo e contagem nas extremidades */
          align-items: center;
          gap: 20px; /* Adiciona um gap para evitar que se encostem em telas médias */
        }
        .logo-placeholder {
          font-size: 1.6rem; /* Aumenta levemente o logo */
          font-weight: 900;
          color: #FDD835;
          text-transform: uppercase;
          flex-shrink: 0; /* Evita que o logo encolha demais */
        }
        .countdown-container {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 1; /* Permite que a contagem encolha se necessário */
          flex-wrap: nowrap; /* Tenta manter a contagem na mesma linha */
        }
        .countdown-text {
          font-size: 0.85rem; /* Levemente maior */
          color: #c0b8e0;
          font-weight: 600;
          text-transform: uppercase;
          white-space: nowrap; /* Evita que o texto quebre */
        }
        .placeholder-countdown {
            color: #9c92c5; 
        }
        .countdown-timer {
          display: flex;
          gap: 6px; /* Aumenta um pouco o gap entre os números */
        }
        .countdown-item {
          background-color: #333;
          color: #FDD835;
          padding: 6px 9px; /* Aumenta um pouco o padding interno */
          border-radius: 4px;
          font-size: 1.05rem; /* Levemente maior */
          font-weight: 700;
          min-width: 40px; /* Garante largura mínima para 2 dígitos e 'd', 'h', etc. */
          text-align: center;
          box-sizing: border-box;
        }
        .promotion-ended {
          color: #ff6347;
          font-weight: 700;
          font-size: 1rem;
          white-space: nowrap;
        }

        /* Responsividade para o cabeçalho */
        @media (max-width: 768px) {
          .main-header {
            padding: 10px 20px; /* Ajusta padding para mobile */
          }
          .header-content {
            flex-direction: row; /* Mantém em linha até onde for possível */
            justify-content: space-between;
            gap: 10px; /* Reduz gap para mobile */
          }
          .logo-placeholder {
            font-size: 1.3rem; /* Ajusta logo para mobile */
          }
          .countdown-container {
            flex-wrap: wrap; /* Permite quebrar linha se não couber */
            justify-content: flex-end; /* Alinha à direita se quebrar */
            text-align: right;
          }
          .countdown-text {
            font-size: 0.7rem; /* Reduz texto da contagem */
            white-space: normal; /* Permite quebrar se necessário */
            width: 100%; /* Ocupa a linha toda se quebrar */
            text-align: right;
          }
          .countdown-timer {
            justify-content: flex-end; /* Alinha os itens da contagem à direita */
            width: 100%; /* Ocupa a linha toda se quebrar */
          }
          .countdown-item {
            font-size: 0.85rem; /* Ajusta tamanho do número */
            padding: 4px 7px;
            min-width: 32px;
          }
          .promotion-ended {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
            .main-header {
                padding: 8px 15px; /* Reduz padding para telas muito pequenas */
            }
            .logo-placeholder {
                font-size: 1.1rem;
            }
            .countdown-text {
                font-size: 0.65rem;
            }
            .countdown-item {
                font-size: 0.75rem;
                padding: 3px 5px;
                min-width: 28px;
            }
            .promotion-ended {
                font-size: 0.75rem;
            }
            /* Se ainda ficar muito apertado, pode forçar flex-direction: column no header-content aqui */
            .header-content {
                flex-direction: column;
                justify-content: center;
                gap: 5px;
            }
            .countdown-container {
                justify-content: center;
            }
            .countdown-text {
                text-align: center;
            }
            .countdown-timer {
                justify-content: center;
            }
        }
      `}</style>
    </header>
  );
};

export default Header;