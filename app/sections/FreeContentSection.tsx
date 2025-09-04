'use client';

import React from 'react';
import { Flame, Sparkles } from 'lucide-react'; // Importando ícones da biblioteca lucide-react

const EbookSummarySection: React.FC = () => {
  return (
    <section id="ebook-resumo" className="section ebook-summary-section">
      <div className="section-content-container">
        <h2 className="section-main-title">
          
        </h2>

        {/* Seção "Os Mais Conhecidos" */}
        <div className="category-section">
          <h3 className="category-title">
            <Flame className="icon-style" /> Os Mais Conhecidos
          </h3>
          <div className="ebook-list">
            <div className="ebook-item">
              <h4 className="ebook-title">As 48 Leis do Poder <span className="author">(Robert Greene)</span></h4>
              <p className="ebook-description">
                Um guia estratégico atemporal sobre influência, liderança e poder. Revela as leis que moldam relacionamentos, negociações e o jogo da vida.
              </p>
            </div>
            <div className="ebook-item">
              <h4 className="ebook-title">Mais Esperto que o Diabo <span className="author">(Napoleon Hill)</span></h4>
              <p className="ebook-description"> {/* Corrigido: className duplicado removido */}
                Uma entrevista imaginária com o “diabo” que expõe as armadilhas da mente humana, revelando como escapar do medo, da dúvida e da procrastinação.
              </p>
            </div>
            <div className="ebook-item">
              <h4 className="ebook-title">Manual de Persuasão do FBI <span className="author">(Jack Schafer)</span></h4>
              <p className="ebook-description">
                Técnicas práticas de um ex-agente para entender e influenciar pessoas. Um manual direto sobre linguagem corporal, persuasão e leitura emocional.
              </p>
            </div>
            <div className="ebook-item">
              <h4 className="ebook-title">O Poder do Subconsciente <span className="author">(Joseph Murphy)</span></h4>
              <p className="ebook-description">
                 Um clássico da educação financeira que mostra a diferença entre “trabalhar pelo dinheiro” e “fazer o dinheiro trabalhar para você”.</p>
            </div>
            <div className="ebook-item">
              <h4 className="ebook-title">Pai Rico, Pai Pobre <span className="author">(Robert Kiyosaki) </span></h4>
              <p className="ebook-description">
                Uma parábola encantadora que mostra como a sorte verdadeira não é acaso, mas consequência de preparação, atitude e ação consistente.
              </p>
            </div>
            <div className="ebook-item">
              <h4 className="ebook-title">O Homem Mais Rico da Babilônia <span className="author">(George S. Clason)</span></h4>
              <p className="ebook-description">
                Lições financeiras eternas contadas em parábolas simples. Um manual prático de prosperidade, disciplina e riqueza sustentável.
              </p>
            </div>
          </div>
        </div>

        {/* Seção "Outras Obras Exclusivas do Acervo" */}
        <div className="category-section">
          <h3 className="category-title">
            <Sparkles className="icon-style" /> Obras Exclusivas do Acervo
          </h3>
          <div className="ebook-list">
            <div className="ebook-item">
              <h4 className="ebook-title">Do Sonho à Realidade – A Arte de Agir</h4>
              <p className="ebook-description">
                O poder de transformar ideias em ação. Mostra como o primeiro passo é sempre o divisor entre quem sonha e quem realiza.
              </p>
            </div>
            <div className="ebook-item">
              <h4 className="ebook-title">Reconexão – Volte pra Si, Volte pro Seu Poder</h4>
              <p className="ebook-description">
                Um mapa para reencontrar sua essência em meio ao caos do mundo moderno. Um convite a silenciar, respirar e voltar para casa — dentro de si.
              </p>
            </div>
            <div className="ebook-item">
              <h4 className="ebook-title">Tudo Começa na Mente</h4>
              <p className="ebook-description">
                Um guia para entender como seus pensamentos moldam sua realidade. Ensina a trocar crenças limitantes por crenças fortalecedoras.
              </p>
            </div>
           
             
           
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');

        .ebook-summary-section {
          background-color: #000000;
          font-family: 'Poppins', sans-serif;
          color: #ffffff;
          /* Padding lateral agora será controlado pelo .section-content-container */
          padding: 30px 0;
          text-align: center;
        }

        .section-content-container {
          max-width: 960px;
          /* Define a largura para 100% e usa padding para margens internas */
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
          box-sizing: border-box; /* Inclui padding na largura total */
          padding: 0 16px; /* Adiciona padding lateral para o conteúdo */
        }

        .section-main-title {
          font-size: 2.0rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 40px;
          text-transform: uppercase;
        }

        .highlight-gradient {
          background-image: linear-gradient(to right, #00F0FF, #007BFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .category-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .category-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #67e8f9;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-align: center;
        }

        .icon-style {
          font-size: 1.5em;
          stroke-width: 2.5px;
        }

        .ebook-list {
          display: grid;
          /* Por padrão, uma coluna para telas pequenas. Ajustado nas media queries. */
          grid-template-columns: 1fr;
          gap: 25px;
          width: 100%;
          box-sizing: border-box;
        }

        .ebook-item {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 25px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border: 1px solid rgba(0, 123, 255, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 100%; /* Garante que o item ocupe a largura disponível na grid */
          box-sizing: border-box;
        }

        .ebook-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 123, 255, 0.3);
        }

        .ebook-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #00BFFF;
          margin-bottom: 5px;
          line-height: 1.4;
        }

        .ebook-title .author {
          font-size: 0.9em;
          font-weight: 400;
          color: #93c5fd;
        }

        .ebook-description {
          font-size: 0.95rem;
          color: #bfdbfe;
          line-height: 1.5;
          flex-grow: 1;
        }

        /* Responsividade */
        /* Desktop e Telas Maiores (>= 1024px) */
        @media (min-width: 1024px) {
          .section-main-title {
            font-size: 2.0rem;
            padding: 20px 10;
          }
          .category-title {
            font-size: 1.8rem;
          }
          .ebook-list {
            grid-template-columns: repeat(3, 1fr); /* 3 colunas para desktop */
            gap: 25px;
          }
          .ebook-item {
            padding: 25px;
          }
          .ebook-title {
            font-size: 1.2rem;
          }
          .ebook-description {
            font-size: 0.95rem;
          }
          .section-content-container {
            padding: 0 16px; /* Mantém o padding lateral padrão */
          }
        }

        /* Tablets (768px a 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .section-main-title {
            font-size: 2rem;
          }
          .category-title {
            font-size: 1.6rem;
            
          }
          .ebook-list {
            grid-template-columns: repeat(2, 1fr); /* 2 colunas para tablets */
            gap: 20px;
          }
          .ebook-item {
            padding: 20px;
          }
          .ebook-title {
            font-size: 1.1rem;
          }
          .ebook-description {
            font-size: 0.9rem;
          }
          .section-content-container {
            padding: 0 16px; /* Mantém o padding lateral padrão */
          }
        }

        /* Celular (<= 767px) */
        @media (max-width: 767px) {
          .ebook-summary-section {
            padding: 10px 0; /* Padding vertical apenas na seção */
          }
          .section-content-container {
            /* O padding horizontal (16px) já está na base, então o width fica calc(100% - 32px) */
            width: calc(100% - 32px); /* Garante que o container interno respeite 16px de margem em cada lado */
            padding: 0 16px; /* Adiciona o padding lateral para o conteúdo */
            gap: 30px;
          }
          .section-main-title {
            font-size: 1.8rem;
            margin-bottom: 20px;
            
          }
          .category-title {
            font-size: 1.2rem;
            gap: 5px;
          }
          .ebook-list {
            grid-template-columns: 1fr; /* Uma coluna para celulares */
            gap: 15px;
          }
          .ebook-item {
            padding: 15px;
          }
          .ebook-title {
            font-size: 1.05rem;
          }
          .ebook-description {
            font-size: 0.85rem;
          }
        }

        /* Celular muito pequeno (<= 480px) */
        @media (max-width: 480px) {
          .ebook-summary-section {
            padding: 0px 0; /* Padding vertical apenas na seção */
          }
          .section-content-container {
            /* O padding horizontal (10px) já está na base, então o width fica calc(100% - 20px) */
            width: calc(100% - 20px); /* Garante que o container interno respeite 10px de margem em cada lado */
            padding: 0 10px; /* Garante o padding lateral de 10px para telas muito pequenas */
            gap: 25px;
          }
          .section-main-title {
            font-size: 1.5rem;
            margin-bottom: 20px;
          }
          .category-title {
            font-size: 1.2rem;
            gap: 6px;
          }
          .ebook-item {
            padding: 15px;
          }
          .ebook-title {
            font-size: 0.95rem;
          }
          .ebook-description {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default EbookSummarySection;
