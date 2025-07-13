"use client"; // <--- ESTA DIRETIVA É OBRIGATÓRIA AQUI! Ela faz deste um Client Component.

import { useEffect } from 'react'; // <--- useEffect É IMPORTADO AQUI!

export default function FoucHandler() {
  useEffect(() => {
    // Adiciona a classe 'loaded' ao body após a montagem do componente no cliente.
    // Neste ponto, o CSS já deve ter sido carregado e aplicado.
    document.body.classList.add('loaded');

    // Opcional: Cleanup function caso o componente seja desmontado
    return () => {
      document.body.classList.remove('loaded');
    };
  }, []); // O array vazio assegura que o efeito rode apenas uma vez, na montagem

  return null; // Este componente não renderiza nenhum elemento HTML visível, apenas executa a lógica
}