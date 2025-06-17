'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Definindo as chaves para cada livro para a pontuação
const LIVROS = {
    LEIS_DO_PODER: 'leisDoPoder',
    MANUAL_FBI: 'manualFBI',
    MAIS_ESPERTO: 'maisEsperto',
    ARMAS_PERSUASAO: 'armasPersuasao',
    CONVENCER_90S: 'convencer90s',
    SUBCONSCIENTE: 'subconsciente',
    COMBO_EXCLUSIVOS: 'comboExclusivos',
};

// Interface para tipar os pontos de cada livro
interface BookScores {
    [key: string]: number; // Permite chaves dinâmicas com valores numéricos
}

// Interface para tipar os detalhes de cada livro
interface BookDetail {
    titulo: string;
    autor: string;
    link: string;
    descricao: string;
    emoji: string;
}

// Interface para tipar as opções das perguntas
interface QuizOption {
    texto: string;
    pontos: BookScores;
}

// Interface para tipar as perguntas
interface QuizQuestion {
    pergunta: string;
    opcoes: QuizOption[];
    key: string;
}

// Detalhes dos livros para a tela de resultado e "VEJA TAMBÉM"
const detalhesLivros: { [key: string]: BookDetail } = {
    [LIVROS.LEIS_DO_PODER]: {
        titulo: 'AS 48 LEIS DO PODER',
        autor: 'ROBERT GREENE',
        link: '/vendas/as-48-leis-do-poder',
        descricao: 'DOMINE A ARTE DA ESTRATÉGIA E INFLUÊNCIA PARA ASCENDER EM QUALQUER HIERARQUIA. ESTE LIVRO É UM MANUAL PARA A REALIDADE CRUA DO PODER.',
        emoji: '👑',
    },
    [LIVROS.MANUAL_FBI]: {
        titulo: 'MANUAL DE PERSUASÃO DO FBI',
        autor: 'JACK SCHAFER',
        link: '/vendas/manual-persuasao-fbi',
        descricao: 'APRENDA AS TÉCNICAS DE RAPPORT E INFLUÊNCIA USADAS POR AGENTES DO FBI PARA CONSTRUIR CONEXÕES E OBTER INFORMAÇÕES CRUCIAIS.',
        emoji: '🕵️‍♂️',
    },
    [LIVROS.MAIS_ESPERTO]: {
        titulo: 'MAIS ESPERTO QUE O DIABO',
        autor: 'NAPOLEON HILL',
        link: '/vendas/mais-esperto-que-o-diabo',
        descricao: 'LIBERTE-SE DAS CRENÇAS LIMITANTES E SUPERE O MEDO, INDECISÃO E PROCRASTINAÇÃO PARA ALCANÇAR SEU VERDADEIRO POTENCIAL.',
        emoji: '🧠',
    },
    [LIVROS.ARMAS_PERSUASAO]: {
        titulo: 'AS ARMAS DA PERSUASÃO 2.0',
        autor: 'ROBERT CIALDINI',
        link: '/vendas/as-armas-da-persuasao',
        descricao: 'OS 6 PRINCÍPIOS PSICOLÓGICOS QUE MOVEM AS PESSOAS A DIZEREM SIM. ESSENCIAL PARA VENDAS, MARKETING E INFLUÊNCIA EM MASSA.',
        emoji: '🎯',
    },
    [LIVROS.CONVENCER_90S]: {
        titulo: 'COMO CONVENCER ALGUÉM EM 90 SEGUNDOS',
        autor: 'NICHOLAS BOOTHMAN',
        link: '/vendas/como-convencer-alguem',
        descricao: 'CONSTRUA RAPPORT E CRIE UMA CONEXÃO SÓLIDA EM SEGUNDOS. DOMINE A ARTE DA PRIMEIRA IMPRESSÃO E DA INFLUÊNCIA RÁPIDA.',
        emoji: '⚡',
    },
    [LIVROS.SUBCONSCIENTE]: {
        titulo: 'LIBERTE O PODER DO SEU SUBCONSCIENTE',
        autor: 'JOSEPH MURPHY',
        link: '/vendas/liberte-o-poder',
        descricao: 'APRENDA A REPROGRAMAR SUA MENTE SUBCONSCIENTE PARA ATRAIR RIQUEZA, SAÚDE E FELICIDADE, MANIFESTANDO A VIDA DOS SEUS SONHOS.',
        emoji: '✨',
    },
    [LIVROS.COMBO_EXCLUSIVOS]: {
        titulo: 'COMBO E-BOOKS EXCLUSIVOS',
        autor: 'PHANDCO',
        link: '/ebooks',
        descricao: 'UM KIT COMPLETO DE CONHECIMENTO PARA SUA JORNADA DE DESENVOLVIMENTO PESSOAL E PROFISSIONAL, CRIADO PELA PHANDCO.',
        emoji: '🎁',
    },
};

const perguntasQuiz: QuizQuestion[] = [
    {
        pergunta: 'QUAL É O SEU MAIOR DESAFIO ATUAL?',
        opcoes: [
            { texto: 'Sinto que as pessoas me subestimam e não consigo ter a influência que gostaria.', pontos: { [LIVROS.LEIS_DO_PODER]: 3, [LIVROS.CONVENCER_90S]: 1 } },
            { texto: 'Tenho dificuldade em me expressar e criar conexões reais com os outros.', pontos: { [LIVROS.MANUAL_FBI]: 3, [LIVROS.CONVENCER_90S]: 2 } },
            { texto: 'Minha mente me sabota com medos e a procrastinação me impede de agir.', pontos: { [LIVROS.MAIS_ESPERTO]: 3, [LIVROS.SUBCONSCIENTE]: 2 } },
            { texto: 'Não consigo persuadir ou vender minhas ideias/produtos de forma eficaz.', pontos: { [LIVROS.ARMAS_PERSUASAO]: 3, [LIVROS.MANUAL_FBI]: 1 } },
        ],
        key: 'q1',
    },
    {
        pergunta: 'O QUE VOCÊ MAIS DESEJA CONQUISTAR?',
        opcoes: [
            { texto: 'Respeito e reconhecimento na minha área de atuação.', pontos: { [LIVROS.LEIS_DO_PODER]: 3, [LIVROS.CONVENCER_90S]: 1 } },
            { texto: 'Ser um mestre em construir relacionamentos e resolver conflitos.', pontos: { [LIVROS.MANUAL_FBI]: 3, [LIVROS.CONVENCER_90S]: 2 } },
            { texto: 'Total liberdade mental e a capacidade de manifestar meus sonhos.', pontos: { [LIVROS.SUBCONSCIENTE]: 3, [LIVROS.MAIS_ESPERTO]: 2 } },
            { texto: 'Influenciar massas e ter sucesso em vendas e marketing.', pontos: { [LIVROS.ARMAS_PERSUASAO]: 3, [LIVROS.LEIS_DO_PODER]: 1 } },
        ],
        key: 'q2',
    },
    {
        pergunta: 'COMO VOCÊ LIDA COM O MEDO E A DÚVIDA?',
        opcoes: [
            { texto: 'Eles frequentemente me paralisam.', pontos: { [LIVROS.MAIS_ESPERTO]: 3, [LIVROS.SUBCONSCIENTE]: 1 } },
            { texto: 'Eu os enfrento, mas é sempre uma luta.', pontos: { [LIVROS.MAIS_ESPERTO]: 2, [LIVROS.SUBCONSCIENTE]: 1 } },
            { texto: 'Consigo transformá-los em motivação.', pontos: { [LIVROS.MAIS_ESPERTO]: 1, [LIVROS.SUBCONSCIENTE]: 2 } },
        ],
        key: 'q3',
    },
    {
        pergunta: 'QUAL ASPECTO DA COMUNICAÇÃO VOCÊ ACHA MAIS IMPORTANTE?',
        opcoes: [
            { texto: 'Saber o que a outra pessoa realmente pensa (leitura fria).', pontos: { [LIVROS.MANUAL_FBI]: 3, [LIVROS.LEIS_DO_PODER]: 2 } },
            { texto: 'Causar uma excelente primeira impressão.', pontos: { [LIVROS.CONVENCER_90S]: 3, [LIVROS.MANUAL_FBI]: 1 } },
            { texto: 'Convencer as pessoas a agirem da forma que eu preciso.', pontos: { [LIVROS.ARMAS_PERSUASAO]: 3, [LIVROS.LEIS_DO_PODER]: 2 } },
        ],
        key: 'q4',
    },
    {
        pergunta: 'VOCÊ ACREDITA NO PODER DA MENTE PARA MOLDAR A REALIDADE?',
        opcoes: [
            { texto: 'Não muito, acho que a vida é mais sobre sorte.', pontos: { [LIVROS.MAIS_ESPERTO]: 1 } },
            { texto: 'Talvez, mas não sei como usar isso na prática.', pontos: { [LIVROS.SUBCONSCIENTE]: 3, [LIVROS.MAIS_ESPERTO]: 2 } },
            { texto: 'Com certeza! Minha mente é minha maior ferramenta.', pontos: { [LIVROS.SUBCONSCIENTE]: 2, [LIVROS.MAIS_ESPERTO]: 1 } },
        ],
        key: 'q5',
    },
    {
        pergunta: 'EM UMA NEGOCIAÇÃO, QUAL SEU OBJETIVO PRINCIPAL?',
        opcoes: [
            { texto: 'Garantir que eu saia com a maior vantagem possível.', pontos: { [LIVROS.LEIS_DO_PODER]: 3, [LIVROS.ARMAS_PERSUASAO]: 2 } },
            { texto: 'Construir um acordo justo que beneficie a todos.', pontos: { [LIVROS.MANUAL_FBI]: 3, [LIVROS.CONVENCER_90S]: 1 } },
            { texto: 'Influenciar a outra parte a ceder aos meus termos de forma sutil.', pontos: { [LIVROS.ARMAS_PERSUASAO]: 3, [LIVROS.LEIS_DO_PODER]: 2 } },
        ],
        key: 'q6',
    },
    {
        pergunta: 'VOCÊ SE SENTE SEGURO(A) AO SE APRESENTAR A NOVAS PESSOAS?',
        opcoes: [
            { texto: 'Nem um pouco, fico muito ansioso(a).', pontos: { [LIVROS.CONVENCER_90S]: 3, [LIVROS.MAIS_ESPERTO]: 1 } },
            { texto: 'Às vezes sim, às vezes não, depende da situação.', pontos: { [LIVROS.CONVENCER_90S]: 2, [LIVROS.MANUAL_FBI]: 1 } },
            { texto: 'Sempre! Conecto-me com facilidade.', pontos: { [LIVROS.CONVENCER_90S]: 1, [LIVROS.MANUAL_FBI]: 2 } },
        ],
        key: 'q7',
    },
    {
        pergunta: 'QUAL CENA TE ATRAI MAIS?',
        opcoes: [
            { texto: 'Um xadrez onde o mestre prevê 10 movimentos à frente.', pontos: { [LIVROS.LEIS_DO_PODER]: 3, [LIVROS.ARMAS_PERSUASAO]: 1 } },
            { texto: 'Um terapeuta ajudando um paciente a superar um trauma.', pontos: { [LIVROS.SUBCONSCIENTE]: 3, [LIVROS.MAIS_ESPERTO]: 2 } },
            { texto: 'Um palestrante hipnotizando a plateia com sua fala.', pontos: { [LIVROS.ARMAS_PERSUASAO]: 2, [LIVROS.MANUAL_FBI]: 3, [LIVROS.CONVENCER_90S]: 1 } },
        ],
        key: 'q8',
    },
    {
        pergunta: 'VOCÊ JÁ SENTIU QUE É MANIPULADO(A) POR OUTRAS PESSOAS?',
        opcoes: [
            { texto: 'Frequentemente, e não sei como me defender.', pontos: { [LIVROS.LEIS_DO_PODER]: 3, [LIVROS.MANUAL_FBI]: 2, [LIVROS.ARMAS_PERSUASAO]: 2 } },
            { texto: 'Às vezes, mas consigo identificar a intenção depois.', pontos: { [LIVROS.LEIS_DO_PODER]: 2, [LIVROS.MANUAL_FBI]: 1 } },
            { texto: 'Raramente, eu geralmente percebo antes que aconteça.', pontos: { [LIVROS.LEIS_DO_PODER]: 1, [LIVROS.MANUAL_FBI]: 0 } },
        ],
        key: 'q9',
    },
    {
        pergunta: 'SE VOCÊ PUDESSE MUDAR ALGO EM SUA VIDA IMEDIATAMENTE, O QUE SERIA?',
        opcoes: [
            { texto: 'Minha forma de pensar e meus padrões de comportamento.', pontos: { [LIVROS.MAIS_ESPERTO]: 3, [LIVROS.SUBCONSCIENTE]: 3 } },
            { texto: 'Minha capacidade de impactar e convencer as pessoas.', pontos: { [LIVROS.ARMAS_PERSUASAO]: 2, [LIVROS.CONVENCER_90S]: 2, [LIVROS.MANUAL_FBI]: 2 } },
            { texto: 'Minha posição de poder e reconhecimento social.', pontos: { [LIVROS.LEIS_DO_PODER]: 3 } },
            { texto: 'Ter acesso a um kit completo de desenvolvimento pessoal.', pontos: { [LIVROS.COMBO_EXCLUSIVOS]: 3 } },
        ],
        key: 'q10',
    },
];

export default function QuizPage() {
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState<BookScores>({
        [LIVROS.LEIS_DO_PODER]: 0,
        [LIVROS.MANUAL_FBI]: 0,
        [LIVROS.MAIS_ESPERTO]: 0,
        [LIVROS.ARMAS_PERSUASAO]: 0,
        [LIVROS.CONVENCER_90S]: 0,
        [LIVROS.SUBCONSCIENTE]: 0,
        [LIVROS.COMBO_EXCLUSIVOS]: 0,
    });
    const [quizFinished, setQuizFinished] = useState(false);
    const [animatingOut, setAnimatingOut] = useState(false);

    const handleAnswer = (pointsPerBook: BookScores) => {
        setAnimatingOut(true);
        setTimeout(() => {
            setScores(prevScores => {
                const newScores = { ...prevScores };
                for (const bookKey in pointsPerBook) {
                    newScores[bookKey] = (newScores[bookKey] || 0) + (pointsPerBook[bookKey] || 0);
                }
                return newScores;
            });

            if (currentQuestionIndex + 1 < perguntasQuiz.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                setQuizFinished(true);
            }
            setAnimatingOut(false);
        }, 300);
    };

    const getRecommendedBook = (): BookDetail => {
        let maxScore = -1;
        let recommendedBookKey: string = '';
        let tieBooks: string[] = [];

        for (const bookKey in scores) {
            if (scores[bookKey] > maxScore) {
                maxScore = scores[bookKey];
                recommendedBookKey = bookKey;
                tieBooks = [bookKey];
            } else if (scores[bookKey] === maxScore && maxScore > 0) {
                tieBooks.push(bookKey);
            }
        }

        if (tieBooks.length > 1) {
            if (tieBooks.includes(LIVROS.COMBO_EXCLUSIVOS)) return detalhesLivros[LIVROS.COMBO_EXCLUSIVOS];
            if (tieBooks.includes(LIVROS.ARMAS_PERSUASAO)) return detalhesLivros[LIVROS.ARMAS_PERSUASAO];
            if (tieBooks.includes(LIVROS.LEIS_DO_PODER)) return detalhesLivros[LIVROS.LEIS_DO_PODER];
            if (tieBooks.includes(LIVROS.SUBCONSCIENTE)) return detalhesLivros[LIVROS.SUBCONSCIENTE];
            
            return detalhesLivros[tieBooks[0]];
        }
        
        if (maxScore === 0) {
            return detalhesLivros[LIVROS.COMBO_EXCLUSIVOS]; 
        }

        return detalhesLivros[recommendedBookKey];
    };

    const recommendedBook = getRecommendedBook();
    
    const otherBooks = Object.values(detalhesLivros).filter(
        (book) => book.link !== recommendedBook.link
    );

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScores({
            [LIVROS.LEIS_DO_PODER]: 0,
            [LIVROS.MANUAL_FBI]: 0,
            [LIVROS.MAIS_ESPERTO]: 0,
            [LIVROS.ARMAS_PERSUASAO]: 0,
            [LIVROS.CONVENCER_90S]: 0,
            [LIVROS.SUBCONSCIENTE]: 0,
            [LIVROS.COMBO_EXCLUSIVOS]: 0,
        });
        setQuizFinished(false);
        setAnimatingOut(false);
    };
    
    const currentProgress = ((currentQuestionIndex + 1) / perguntasQuiz.length) * 100;

    return (
        <>
            <main className="quiz-page-main">
                <header className="quiz-header">
                    <button 
                        onClick={() => router.push('/')} 
                        className="back-to-home-button"
                        aria-label="Voltar para o Início"
                    >
                        VOLTAR PARA O INÍCIO
                    </button>
                    <h1 className="quiz-main-title">DESCUBRA SEU PRÓXIMO NÍVEL!</h1>
                    <p className="quiz-subtitle">
                        RESPONDA AO NOSSO QUIZ RÁPIDO E REVELE QUAL E-BOOK VAI ACELERAR SUA EVOLUÇÃO AGORA.
                    </p>
                </header>

                {!quizFinished ? (
                    <section className="quiz-card">
                        <div 
                            key={perguntasQuiz[currentQuestionIndex].key} 
                            className={`question-content ${animatingOut ? 'fade-out' : 'fade-in'}`}
                        >
                            <p className="question-text">
                                {perguntasQuiz[currentQuestionIndex].pergunta}
                            </p>
                            <div className="options-container">
                                {perguntasQuiz[currentQuestionIndex].opcoes.map((option) => (
                                    <button
                                        key={option.texto}
                                        onClick={() => handleAnswer(option.pontos)}
                                        className="option-button"
                                        aria-label={`Opção: ${option.texto}`}
                                    >
                                        {option.texto}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="progress-bar-container" 
                            role="progressbar" 
                            aria-valuenow={currentProgress} 
                            aria-valuemin={0} 
                            aria-valuemax={100}
                            aria-label={`Progresso do quiz: ${currentQuestionIndex + 1} de ${perguntasQuiz.length} perguntas`}
                        >
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${currentProgress}%` }}
                            />
                        </div>
                        <p className="progress-text">{currentQuestionIndex + 1} / {perguntasQuiz.length}</p>
                    </section>
                ) : (
                    <section className="results-card">
                        <h2 className="results-title">SEU E-BOOK RECOMENDADO É:</h2>
                        <div className="recommended-book-display">
                            <h3 className="recommended-book-title">
                                {recommendedBook.emoji} {recommendedBook.titulo}
                            </h3>
                            <p className="recommended-book-author">POR {recommendedBook.autor}</p>
                            <p className="recommended-book-description">{recommendedBook.descricao}</p>
                            <button
                                onClick={() => router.push(recommendedBook.link)}
                                className="cta-button"
                            >
                                <span role="img" aria-label="Foguete">🚀</span> ACESSE AGORA!
                            </button>
                        </div>

                        {otherBooks.length > 0 && (
                            <div className="other-books-section">
                                <h3 className="other-books-title">VEJA TAMBÉM:</h3>
                                <div className="other-books-grid">
                                    {otherBooks.map((book) => (
                                        <button
                                            key={book.link}
                                            onClick={() => router.push(book.link)}
                                            className="other-book-button"
                                        >
                                            {book.emoji} {book.titulo}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="results-actions">
                            <button
                                onClick={restartQuiz}
                                className="secondary-button"
                            >
                                REFAZER QUIZ
                            </button>
                        </div>
                    </section>
                )}

                <footer className="quiz-footer">
                    PHANDCO. QUIZ &copy; {new Date().getFullYear()}
                </footer>
            </main>

            <style jsx>{`
                .quiz-page-main {
                    background-color: #141414;
                    color: #fff;
                    min-height: 100vh;
                    padding: 2rem 1rem;
                    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    overflow-x: hidden;
                }

                .quiz-header {
                    margin-bottom: 2.5rem;
                    max-width: 600px;
                    width: 100%;
                    position: relative;
                    /* Adicionado padding-top para dar espaço ao botão de voltar */
                    padding-top: 2rem; /* Este padding vai empurrar o conteúdo para baixo */
                }
                .back-to-home-button {
                    position: absolute;
                    top: 1rem; /* Ajustado para ficar mais no topo */
                    left: 1rem; /* Ajustado para um pequeno espaçamento da borda */
                    background-color: transparent;
                    border: 1px solid #e50914;
                    color: #e50914;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    text-transform: uppercase;
                }
                .back-to-home-button:hover {
                    background-color: #e50914;
                    color: white;
                    box-shadow: 0 2px 8px rgba(229, 9, 20, 0.4);
                }
                .back-to-home-button:active {
                    transform: translateY(1px);
                }

                .quiz-main-title {
                    font-weight: 700;
                    font-size: 2.2rem;
                    margin-bottom: 0.75rem;
                    color: #E50914;
                    text-transform: uppercase;
                }
                .quiz-subtitle {
                    color: #bbb;
                    font-size: 1.1rem;
                    line-height: 1.5;
                    text-transform: uppercase;
                }

                .quiz-card, .results-card {
                    background-color: #1f1f1f;
                    border-radius: 12px;
                    padding: 2rem 1.5rem;
                    max-width: 600px;
                    width: 100%;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
                    margin-bottom: 2rem;
                }
                
                .question-content {
                    animation-duration: 0.3s;
                    animation-timing-function: ease-in-out;
                    animation-fill-mode: forwards;
                }

                .fade-in {
                    animation-name: fadeInAnimation;
                }

                .fade-out {
                    animation-name: fadeOutAnimation;
                }

                @keyframes fadeInAnimation {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeOutAnimation {
                    from { opacity: 1; transform: translateY(0); }
                    to { opacity: 0; transform: translateY(-10px); }
                }
                
                .question-text {
                    font-weight: 600;
                    font-size: 1.25rem;
                    margin-bottom: 2rem;
                    line-height: 1.5;
                    color: #f0f0f0;
                    text-transform: uppercase;
                }

                .options-container {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                }

                .option-button, .cta-button, .secondary-button {
                    background-color: #E50914;
                    border: none;
                    border-radius: 25px;
                    color: #fff;
                    padding: 0.9rem 1.5rem;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.03em;
                    transition: background-color 0.2s ease, transform 0.1s ease;
                    width: 100%;
                    box-sizing: border-box;
                    line-height: 1.4;
                    white-space: normal;
                    word-wrap: break-word;
                }
                .option-button:hover, .cta-button:hover {
                    background-color: #b00610;
                }
                .option-button:active, .cta-button:active {
                    transform: scale(0.98);
                }
                
                .secondary-button {
                    background-color: #333;
                    border: 1px solid #555;
                }
                .secondary-button:hover {
                    background-color: #444;
                }
                .secondary-button:active {
                    transform: scale(0.98);
                }


                .progress-bar-container {
                    margin-top: 2rem;
                    height: 10px;
                    border-radius: 5px;
                    background-color: #383838;
                    overflow: hidden;
                    width: 100%;
                }
                .progress-bar-fill {
                    height: 100%;
                    background-color: #E50914;
                    transition: width 0.4s ease-in-out;
                    border-radius: 5px;
                }
                .progress-text {
                    margin-top: 0.5rem;
                    font-size: 0.9rem;
                    color: #888;
                }

                .results-card {
                    padding: 2.5rem 2rem;
                }
                .results-title {
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    font-size: 1.8rem;
                    color: #E50914;
                    text-transform: uppercase;
                }
                
                .recommended-book-display {
                    background-color: #000;
                    padding: 1.8rem;
                    border-radius: 10px;
                    margin-bottom: 2.5rem;
                    border: 2px solid #E50914;
                    box-shadow: 0 4px 15px rgba(229, 9, 20, 0.4);
                    animation: fadeInAnimation 0.8s ease-in-out;
                }
                .recommended-book-title {
                    font-size: 1.7rem;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 0.8rem;
                    line-height: 1.2;
                    text-transform: uppercase;
                }
                .recommended-book-author {
                    font-size: 1rem;
                    color: #aaa;
                    font-weight: 400;
                    margin-bottom: 1rem;
                    text-transform: uppercase;
                }
                .recommended-book-description {
                    font-size: 1.05rem;
                    color: #ddd;
                    line-height: 1.6;
                    margin-bottom: 1.8rem;
                }
                .recommended-book-display .cta-button {
                    font-size: 1.1rem;
                    padding: 1rem 2rem;
                    max-width: 300px;
                }

                .other-books-section {
                    margin-top: 2.5rem;
                    padding-top: 2rem;
                    border-top: 1px dashed #444;
                }
                .other-books-title {
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: #E50914;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }
                .other-books-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    max-width: 450px;
                    margin: 0 auto;
                }
                .other-book-button {
                    background-color: #2a2a2a;
                    border: 1px solid #444;
                    border-radius: 20px;
                    color: #fff;
                    padding: 0.7rem 1.2rem;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 0.95rem;
                    text-transform: uppercase;
                    transition: background-color 0.2s ease, transform 0.1s ease;
                    width: 100%;
                    box-sizing: border-box;
                    line-height: 1.3;
                    white-space: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    min-height: 50px;
                }
                .other-book-button:hover {
                    background-color: #383838;
                }
                .other-book-button span[role="img"] {
                    font-size: 1.2em;
                    line-height: 1;
                }

                .results-actions {
                    margin-top: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    align-items: center;
                }
                .results-actions .cta-button,
                .results-actions .secondary-button {
                    max-width: 350px;
                }


                .quiz-footer {
                    margin-top: 3rem;
                    color: #555;
                    font-size: 0.8rem;
                    text-align: center;
                    text-transform: uppercase;
                }

                /* Media Queries para Responsividade */
                @media (min-width: 768px) {
                    .quiz-main-title {
                        font-size: 2.8rem;
                    }
                    .quiz-subtitle {
                        font-size: 1.3rem;
                    }
                    .quiz-card, .results-card {
                        padding: 3rem 2.5rem;
                    }
                    .question-text {
                        font-size: 1.4rem;
                    }
                    .option-button {
                        font-size: 1.05rem;
                        padding: 1rem 2rem;
                    }
                    .results-title {
                        font-size: 2.2rem;
                    }
                    .recommended-book-title {
                        font-size: 2.2rem;
                    }
                    .recommended-book-author {
                        font-size: 1.1rem;
                    }
                    .recommended-book-description {
                        font-size: 1.15rem;
                    }
                    .recommended-book-display .cta-button {
                        font-size: 1.2rem;
                        padding: 1.2rem 2.5rem;
                        max-width: 350px;
                    }
                    .other-books-title {
                        font-size: 1.6rem;
                    }
                    .other-books-grid {
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 1.2rem;
                        max-width: 100%;
                    }
                    .other-book-button {
                        max-width: 280px;
                        flex-grow: 1;
                        font-size: 0.95rem;
                        padding: 0.8rem 1.5rem;
                        min-height: auto;
                    }
                    .results-actions .cta-button,
                    .results-actions .secondary-button {
                        max-width: 300px;
                    }
                    /* Ajuste para o botão de voltar no desktop para não "sumir" */
                    .back-to-home-button {
                        top: 2rem; /* Mais espaçamento do topo */
                        left: 2rem; /* Mais espaçamento da lateral */
                    }
                }

                @media (max-width: 480px) {
                    .back-to-home-button {
                        top: 1rem; /* Ajuste a distância do topo */
                        left: 1rem; /* Ajuste a distância da esquerda */
                        font-size: 0.75rem;
                        padding: 0.4rem 0.8rem;
                    }
                    .quiz-main-title {
                        font-size: 1.8rem;
                    }
                    .quiz-subtitle {
                        font-size: 0.95rem;
                    }
                    .quiz-card, .results-card {
                        padding: 1.5rem 1rem;
                        margin-bottom: 1.5rem;
                    }
                    .question-text {
                        font-size: 1.1rem;
                        margin-bottom: 1.5rem;
                    }
                    .option-button {
                        padding: 0.75rem 1rem;
                        font-size: 0.85rem;
                        border-radius: 20px;
                    }
                    .progress-text {
                        font-size: 0.8rem;
                    }
                    .results-title {
                        font-size: 1.5rem;
                        margin-bottom: 1rem;
                    }
                    .recommended-book-title {
                        font-size: 1.5rem;
                    }
                    .recommended-book-author {
                        font-size: 0.9rem;
                    }
                    .recommended-book-description {
                        font-size: 0.95rem;
                        margin-bottom: 1.5rem;
                    }
                    .recommended-book-display .cta-button {
                        font-size: 1rem;
                        padding: 0.9rem 1.8rem;
                        max-width: 250px;
                    }
                    .other-books-title {
                        font-size: 1.2rem;
                        margin-bottom: 1rem;
                    }
                    .other-book-button {
                        font-size: 0.8rem;
                        padding: 0.6rem 1rem;
                        max-width: 100%;
                        min-height: 40px;
                    }
                    .results-actions .cta-button,
                    .results-actions .secondary-button {
                        max-width: 280px;
                        font-size: 0.9rem;
                        padding: 0.8rem 1.5rem;
                    }
                    .quiz-footer {
                        font-size: 0.7rem;
                    }
                }
            `}</style>
        </>
    );
}