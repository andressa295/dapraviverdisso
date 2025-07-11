'use client';
import React from 'react';

// Pode-se adicionar outros ícones aqui ou criar um mapa de ícones
export const CheckIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="url(#gold-gradient)"/>
    <defs><linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="var(--color-neon-yellow)" /><stop offset="100%" stopColor="var(--color-neon-yellow-dark)"/></linearGradient></defs>
  </svg>
);

// Exemplo de outro ícone (pode adicionar vários ou um componente que receba o nome do ícone)
export const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.5 19V17H13.5V19C13.5 19.8284 12.8284 20.5 12 20.5C11.1716 20.5 10.5 19.8284 10.5 19ZM12 4C16.9706 4 21 7.13401 21 11C21 14.866 16.9706 18 12 18C7.02944 18 3 14.866 3 11C3 7.13401 7.02944 4 12 4ZM12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5Z" fill="currentColor"/>
  </svg>
);