// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react'; // <--- Garanta que React está importado aqui

const Header = () => {
  // Data final da promoção (Exemplo: 2 dias a partir de agora).
  // Ajuste esta data para a sua data final real no formato 'YYYY-MM-DDTHH:mm:ss'.
  // Exemplo: '2025-07-04T23:59:59' para 4 de julho de 2025 às 23:59:59
  const promotionEndDate = new Date('2025-07-04T23:59:59').getTime(); // Data ajustada para um tempo razoável no futuro

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = promotionEndDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // CORREÇÃO AQUI: Use React.ReactNode[] para ser mais abrangente ou React.JSX.Element[]
  // O tipo 'React.ReactNode[]' é geralmente mais flexível para arrays de elementos JSX.
  const timerComponents: React.ReactNode[] = []; 

  Object.keys(timeLeft).forEach((interval) => {
    // A remoção dos @ts-ignore pode ser feita com um cast seguro se quiser ser mais rigoroso
    // Por exemplo: const value = timeLeft[interval as keyof typeof timeLeft];
    if (typeof timeLeft[interval as keyof typeof timeLeft] === 'number' && timeLeft[interval as keyof typeof timeLeft] >= 0) {
      timerComponents.push(
        <span key={interval} className="countdown-item">
          {String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')} {interval.charAt(0)}
        </span>
      );
    }
  });

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-placeholder">PHANDCO</div>
        <div className="countdown-container">
          <span className="countdown-text">A OFERTA TERMINA EM:</span>
          {timerComponents.length ? (
            <div className="countdown-timer">
              {timerComponents}
            </div>
          ) : (
            <span className="promotion-ended">PROMOÇÃO ENCERRADA!</span>
          )}
        </div>
      </div>

      <style jsx>{`
        .main-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          z-index: 1000;
          padding: 10px 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .header-content {
          width: 100%;
          max-width: 1100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-placeholder {
          font-size: 1.5rem;
          font-weight: 900;
          color: #FDD835;
          text-transform: uppercase;
        }
        .countdown-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .countdown-text {
          font-size: 0.9rem;
          color: #c0b8e0;
          font-weight: 600;
          text-transform: uppercase;
        }
        .countdown-timer {
          display: flex;
          gap: 5px;
        }
        .countdown-item {
          background-color: #333;
          color: #FDD835;
          padding: 5px 8px;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 700;
          min-width: 35px;
          text-align: center;
        }
        .promotion-ended {
          color: #ff6347;
          font-weight: 700;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .main-header {
            padding: 8px 15px;
          }
          .header-content {
            flex-direction: column;
            gap: 5px;
          }
          .logo-placeholder {
            font-size: 1.2rem;
          }
          .countdown-text {
            font-size: 0.75rem;
          }
          .countdown-item {
            font-size: 0.9rem;
            padding: 4px 6px;
            min-width: 30px;
          }
          .promotion-ended {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
            .header-content {
                flex-direction: column;
                gap: 5px;
                text-align: center;
            }
            .countdown-container {
                justify-content: center;
            }
            .logo-placeholder {
                font-size: 1rem;
            }
        }
      `}</style>
    </header>
  );
};

export default Header;