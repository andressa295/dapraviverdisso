'use client';

import React from 'react';

const MediaSection: React.FC = () => {
  // Função para lidar com a rolagem suave para a seção de destino
  const scrollToPaidEbooks = () => {
    const paidEbooksSection = document.getElementById('PaidEbooksSection');
    if (paidEbooksSection) {
      paidEbooksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // O container principal da seção, usando classes Tailwind para estilização
    // Certifique-se de que a fonte 'Poppins' esteja carregada globalmente (ex: em seu index.html ou arquivo CSS global)
    // Exemplo de link no <head> do seu HTML:
    // <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <section id="midia" className="min-h-screen flex items-center justify-center bg-black font-poppins p-4">
      <div className="section-content-container max-w-3xl mx-auto text-center space-y-8 py-16">
        {/* Título Principal */}
        <h2 className="text-5xl font-extrabold tracking-tight leading-tight md:text-6xl lg:text-7xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-600">
            Reset Mental
          </span>
        </h2>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl lg:text-3xl text-blue-300 font-light leading-relaxed px-4">
          Desbloqueie seu potencial ilimitado com a sabedoria dos maiores mestres do autoconhecimento.
        </p>

        {/* Breve Descrição */}
        <p className="text-lg md:text-xl text-blue-200 leading-relaxed px-4">
          Explore um acervo exclusivo com 13 ebooks transformadores, incluindo: <strong className="text-blue-400">As 48 Leis do Poder</strong>, <strong className="text-blue-400">Mais Esperto que o Diabo</strong>, <strong className="text-blue-400">O Poder do Subconsciente</strong>, <strong className="text-blue-400">Manual da Persuasão</strong>, <strong className="text-blue-400">Como Convencer Alguém em 90 Segundos</strong> e muitos outros.
        </p>

        {/* Botão de Chamada para Ação */}
        <button
          onClick={scrollToPaidEbooks}
          className="
            mt-10 px-10 py-4
            bg-gradient-to-r from-blue-500 to-blue-700
            hover:from-blue-600 hover:to-blue-800
            text-white text-2xl font-bold
            rounded-full shadow-lg
            transform transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-2xl
            focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75
          "
        >
          Quero Acessar os Ebooks!
        </button>
      </div>
    </section>
  );
};

export default MediaSection;
