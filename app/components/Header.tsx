// components/Header.tsx
'use client'; // Necessário para usar hooks como useState e useEffect

import React, { useState, useEffect } from 'react';

const Header = () => {
  // Data final da promoção (Exemplo: 2 dias a partir de agora).
  // AJUSTE ESTA DATA para a sua data final REAL no formato 'YYYY-MM-DDTHH:mm:ss'.
  // Use um ano futuro para testes, ex: 2025-07-04T23:59:59
  const promotionEndDate = new Date('2025-07-04T23:59:59').getTime(); 

  // Estado para controlar se o componente já foi montado no cliente
  const [hasMounted, setHasMounted] = useState(false); 
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Marca o componente como montado no cliente (após a hidratação)
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
        // Se a promoção acabou, zera o tempo
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calcula o tempo imediatamente na montagem
    calculateAndUpdateTime(); 

    // Atualiza a cada segundo
    const timer = setInterval(calculateAndUpdateTime, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, [promotionEndDate]); // A dependência promotionEndDate é importante aqui

  const timerComponents: React.ReactNode[] = []; // Use React.ReactNode[] para flexibilidade

  // Lógica para preencher timerComponents APENAS SE hasMounted for true
  if (hasMounted) {
    // Se a promoção ainda está ativa, mostra a contagem real
    if (promotionEndDate > new Date().getTime()) {
      Object.keys(timeLeft).forEach((interval) => {
        const value = timeLeft[interval as keyof typeof timeLeft];
        if (typeof value === 'number' && value >= 0) { // Garantir que é um número não negativo
          timerComponents.push(
            <span key={interval} className="countdown-item">
              {String(value).padStart(2, '0')} {interval.charAt(0)}
            </span>
          );
        }
      });
    } else {
      // Se a promoção já terminou, exibe 00:00:00 no cliente
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
        <div className="logo-placeholder">PHANDCO</div> {/* Pode ser uma imagem de logo */}
        <div className="countdown-container">
          {/* RENDERIZAÇÃO CONDICIONAL PARA EVITAR HYDRATION ERROR */}
          {hasMounted ? ( // Se já montou no cliente, mostra o conteúdo real da contagem
            <>
              <span className="countdown-text">A OFERTA TERMINA EM:</span>
              {timerComponents.length ? ( // Verifica se há componentes de timer para renderizar
                <div className="countdown-timer">
                  {timerComponents}
                </div>
              ) : (
                <span className="promotion-ended">PROMOÇÃO ENCERRADA!</span>
              )}
            </>
          ) : (
            // NO SERVIDOR OU ANTES DA HIDRATAÇÃO NO CLIENTE, SEMPRE MOSTRA UM PLACEHOLDER FIXO
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
        .placeholder-countdown {
            color: #9c92c5; /* Cor mais suave para o placeholder */
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