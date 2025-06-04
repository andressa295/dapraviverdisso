'use client'

import React, { useRef, useState, useEffect } from 'react' // Adicionado useEffect

const ebooks = [
  {
    title: 'Tudo começa na mente',
    description: 'Descubra como sua mente pode ser o maior ativo para seu sucesso.',
    cover: '/covers/tudo-comeca-na-mente.jpg',
  },
  {
    title: 'Desbloqueia, mente!',
    description: 'Técnicas para desbloquear seu potencial e agir com foco.',
    cover: '/covers/desbloqueia-mente.jpg',
  },
  {
    title: 'Desbloqueia, mente! 2.0',
    description: 'Evolua sua mente e crie resultados extraordinários.',
    cover: '/covers/desbloqueia-mente-2.jpg',
  },
  {
    title: 'RECONEXÃO. Volte pra si, volte pro seu poder.',
    description: 'Um guia para reencontrar sua força interior e propósito.',
    cover: '/covers/reconexao.jpg',
  },
  {
    title: 'Mentalidade Alpha',
    description: 'Desenvolva a mentalidade dos líderes e vencedores.',
    cover: '/covers/mentalidade-alpha.jpeg',
  },
  {
    title: 'Do sonho à realidade. A arte de agir.',
    description: 'Transforme suas ideias em ações concretas e resultados.',
    cover: '/covers/do-sonho-a-realidade.jpg',
  },
]

const bonus = [
  'E-BOOK: DÁ PRA VIVER DISSO',
  'PLANILHA DE PRECIFICAÇÃO',
  'LISTA DE FORNECEDORES',
  'PLANILHA FLUXO DE CAIXA',
]

const originalTestimonials = [
  {
    name: 'João Silva',
    text: 'Esses ebooks mudaram completamente minha forma de pensar e agir. Recomendo demais!',
    avatar: 'JS'
  },
  {
    name: 'Mariana Oliveira',
    text: 'A Phand. está de parabéns pelo conteúdo e pela experiência incrível.',
    avatar: 'MO'
  },
  {
    name: 'Carlos Eduardo',
    text: 'Aprendi a desbloquear meu potencial e já estou vendo resultados reais!',
    avatar: 'CE'
  },
]

const complementaryTestimonials = [
  {
    name: 'Ana Clara',
    text: 'Desde que comecei a aplicar os ensinamentos, sinto uma clareza mental que não tinha antes. Transformador!',
    avatar: 'AC',
  },
  {
    name: 'Ricardo Borges',
    text: 'O combo de e-books é um investimento que vale cada centavo. Conteúdo rico e prático.',
    avatar: 'RB',
  },
  {
    name: 'Sofia Lima',
    text: 'Finalmente encontrei um material que fala a minha língua e me impulsiona para frente. Obrigada!',
    avatar: 'SL',
  },
]

const allTestimonials = [...originalTestimonials, ...complementaryTestimonials];


export default function EbooksPage() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Para a animação da seção de conexão
  const [isConnectionVisible, setIsConnectionVisible] = useState(false);
  const connectionSectionRef = useRef<HTMLElement | null>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsConnectionVisible(true);
          observer.unobserve(entry.target); // Para a animação ocorrer apenas uma vez
        }
      },
      {
        root: null, // Observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.1 // Pelo menos 10% da seção visível
      }
    );

    if (connectionSectionRef.current) {
      observer.observe(connectionSectionRef.current);
    }

    return () => {
      if (connectionSectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(connectionSectionRef.current);
      }
    };
  }, []);


  const scrollBy = (offset: number) => {
    scrollContainerRef.current?.scrollBy({ left: offset, behavior: 'smooth' })
  }

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const mobileBreakpoint = '768px';

  return (
    <>
      <main className="ebooks-page-main">
        <header className="page-header">
          <h1 className="main-title">COMBO E-BOOKS</h1>
          <p className="subtitle">
            Tudo o que você precisa para desbloquear sua mente e transformar sua realidade, passo a passo, com clareza e direção.
          </p>
        </header>

        <section aria-label="Lista de ebooks em carrossel" className="ebook-carousel-section">
          <button
            aria-label="Scroll para esquerda"
            onClick={() => scrollBy(-270)}
            className="carousel-arrow left-arrow"
          >
            ❮
          </button>
          <div
            ref={scrollContainerRef}
            className="ebook-carousel-container"
            onWheel={(e) => {
              if (e.deltaY !== 0 && scrollContainerRef.current) {
                e.preventDefault()
                scrollContainerRef.current.scrollLeft += e.deltaY * 1.5;
              }
            }}
          >
            {/* RECOMENDAÇÃO DE PERFORMANCE (next/image):
              Se as imagens de capa estiverem na pasta /public do seu projeto Next.js, 
              considere usar o componente <Image> do Next.js para otimização automática,
              lazy loading e melhor performance. Você precisaria importar o Image from 'next/image'.
              Exemplo de uso (ajuste width, height e layout conforme necessário):

              <Image 
                src={cover} 
                alt={`Capa do ebook ${title}`} 
                width={220} // Largura da imagem (baseada no min-width do .ebook-card)
                height={300} // Altura da imagem (baseada na altura do .ebook-cover)
                layout="responsive" // Ou "intrinsic", "fixed". "Responsive" se adapta ao container.
                className="ebook-cover" 
                objectFit="cover" // Pode ser necessário para manter o aspecto como na tag img
              />
              
              Para layout="responsive" ou "intrinsic", width e height definem a proporção.
              Para layout="fill", o elemento pai precisa ter position: relative.
              Verifique a documentação do Next.js para <Image> para mais detalhes.
            */}
            {ebooks.map(({ title, description, cover }) => (
              <div key={title} className="ebook-card">
                <img src={cover} alt={`Capa do ebook ${title}`} className="ebook-cover" />
                <div className="ebook-info">
                  <h3 className="ebook-title">{title}</h3>
                  <p className="ebook-description">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Scroll para direita"
            onClick={() => scrollBy(270)}
            className="carousel-arrow right-arrow"
          >
            ❯
          </button>
        </section>

        <section aria-label="Bônus exclusivos do combo" className="bonus-section">
          <h2 className="section-title bonus-title">E AINDA TEM MAIS: BÔNUS EXCLUSIVOS!</h2>
          <ul className="bonus-list">
            {bonus.map((item, index) => (
              <li key={index} className="bonus-item">
                <span className="bonus-icon">🎁</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-label="Conecte-se com a transformação"
          className={`connection-section ${isConnectionVisible ? 'is-visible' : ''}`}
          ref={connectionSectionRef}
        >
          <h2 className="section-title connection-title">Sua Jornada de Transformação Começa Agora</h2>
          <p className="connection-text">
            Imagine por um instante ter as chaves para destravar o potencial ilimitado que reside em você. Nossos e-books não são apenas guias; são companheiros de jornada, elaborados com a experiência de quem já trilhou o caminho e a paixão de quem acredita no seu poder de mudança.
          </p>
          <p className="connection-text">
            Aqui, você encontrará mais do que teoria: descobrirá ferramentas práticas e insights profundos para reprogramar sua mentalidade, superar bloqueios e construir a realidade que você sempre sonhou. Dê o primeiro passo em direção à sua melhor versão.
          </p>
        </section>

        <section aria-label="Depoimentos de leitores transformados" className="testimonials-section">
          <h2 className="section-title testimonials-main-title">Quem Já Desbloqueou a Mente e Aprovou</h2>
          <div className="testimonials-grid">
            {allTestimonials.map(({ name, text, avatar }, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-avatar">
                  {avatar || name.substring(0, 2).toUpperCase()}
                </div>
                <p className="testimonial-text">“{text}”</p>
                <strong className="testimonial-name">— {name}</strong>
              </div>
            ))}
          </div>
        </section>

        <section aria-label="Receba conteúdos exclusivos" className="email-capture-section">
          <h2 className="section-title email-capture-title">Receba Conteúdos Exclusivos no Seu E-mail!</h2>
          <p className="email-capture-subtitle">
            Junte-se à nossa comunidade e tenha acesso a dicas, insights e novidades que vão impulsionar ainda mais sua jornada de desenvolvimento.
          </p>
          <form onSubmit={handleEmailSubmit} className="email-capture-form">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <button type="submit" className="email-submit-button">
              Quero Receber!
            </button>
          </form>
          {isSubmitted && (
            <p className="submission-feedback success">
              Obrigado por se inscrever! Fique de olho no seu e-mail.
            </p>
          )}
          <p className="privacy-text">
            Não enviamos spam. Prometemos. Respeitamos sua privacidade.
          </p>
        </section>

        <section aria-label="Nossa Garantia" className="guarantee-section">
          <h2 className="section-title guarantee-main-title">Sua Satisfação é Nossa Prioridade!</h2>
          <div className="guarantee-seal">
            <span>100%</span>
            <span>Garantia</span>
          </div>
          <h3 className="guarantee-subtitle">Garantia de Satisfação Incondicional</h3>
          <p className="guarantee-text">
            Estamos tão confiantes na transformação que este combo de e-books pode proporcionar que oferecemos uma garantia especial: você tem <strong>7 dias</strong> para explorar todo o conteúdo. Se por qualquer motivo você não sentir que este material é para você, ou se não ficar completamente satisfeito, basta nos enviar um e-mail e nós conversaremos para encontrar a melhor solução, seja ela o reembolso completo ou um suporte adicional. Seu investimento é 100% seguro. Queremos que você se sinta totalmente à vontade para dar esse passo rumo ao seu desenvolvimento.
          </p>
        </section>

        <section aria-label="Chamada final para ação" className="final-cta-section">
          <h2 className="final-cta-title">VOCÊ CHEGOU ATÉ AQUI POR UM MOTIVO.</h2>
          <p className="final-cta-subtitle">
            Essa pode ser a virada de chave que sua mente e sua vida estavam esperando. Não deixe para depois a transformação que você pode começar hoje.
          </p>
          <button
            className="final-cta-button"
            onClick={() => { alert('Levar para o Checkout!'); }}
          >
            BAIXAR E-BOOKS!&nbsp;➔
          </button>
        </section>

        <footer className="page-footer">
          <h3 className="footer-title">Phand E-books ✨</h3>
          <div className="footer-links">
            <a href="#contato" className="footer-link">Contato</a>
            <a href="#termos" className="footer-link">Termos de Uso</a>
            <a href="#instagram" className="footer-link">Instagram</a>
          </div>
          <p className="copyright-text">
            © {new Date().getFullYear()} PhandCo. Todos os direitos reservados.
          </p>
          <p className="copyright-notice">
            Conteúdo protegido por direitos autorais. Proibida a reprodução ou distribuição não autorizada.
          </p>
        </footer>
      </main>

      <style jsx>{`
        .ebooks-page-main {
          background-color: #141414;
          color: #fff;
          min-height: 100vh;
          padding: 2rem 15px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 100vw;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          scroll-behavior: smooth;
        }

        .section-title {
          color: #E50914;
          text-transform: uppercase;
          text-align: center;
          font-weight: 500;
          letter-spacing: 0.05em;
        }
        
        .page-header {
          margin-bottom: 3rem;
          text-align: center;
          width: 100%;
        }
        .main-title {
          font-weight: 500;
          font-size: 2.25rem;
          margin-bottom: 0.5rem;
          color: #E50914;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .subtitle {
          color: #bbb;
          font-size: 1rem;
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .ebook-carousel-section {
          position: relative;
          width: 100%;
          max-width: 1200px;
          overflow: hidden;
          margin: 2rem auto 3rem;
        }
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(20, 20, 20, 0.7);
          border: none;
          color: #fff;
          font-size: 1.8rem;
          cursor: pointer;
          padding: 0.4rem 0.8rem;
          transition: background 0.3s ease, color 0.3s ease;
          border-radius: 8px;
        }
        .carousel-arrow:hover {
          background: #E50914;
          color: #fff;
        }
        .left-arrow { left: 5px; border-radius: 0 8px 8px 0;}
        .right-arrow { right: 5px; border-radius: 8px 0 0 8px;}

        .ebook-carousel-container {
          display: flex;
          gap: 1.25rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 1rem 0.5rem;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .ebook-carousel-container::-webkit-scrollbar {
          display: none;
        }
        .ebook-card {
          min-width: 220px;
          flex: 0 0 auto;
          scroll-snap-align: start;
          background-color: #1f1f1f;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.6);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ebook-card:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 25px rgba(229, 9, 20, 0.4);
        }
        .ebook-cover {
          width: 100%;
          height: 300px;
          object-fit: cover;
          background-color: #111;
          border-bottom: 2px solid #E50914;
        }
        .ebook-info {
          padding: 0.8rem 1rem;
        }
        .ebook-title {
          font-size: 1rem;
          color: #fff;
          margin-bottom: 0.4rem;
          min-height: 3em;
          line-height: 1.3;
        }
        .ebook-description {
          font-size: 0.8rem;
          color: #aaa;
          line-height: 1.5;
        }

        .bonus-section {
          margin-top: 4rem;
          background-color: #1a1a1a;
          padding: 2rem;
          border-radius: 10px;
          width: 100%;
          max-width: 750px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        }
        .bonus-title {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
        }
        .bonus-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 1rem; /* Aumentado um pouco o gap para o grid 2x2 */
          grid-template-columns: repeat(2, 1fr); /* Alterado para 2 colunas em desktop */
        }
        .bonus-item {
          background-color: #272727;
          padding: 0.8rem 1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          border-left: 3px solid #E50914;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .bonus-item:hover {
          transform: translateX(4px);
          background-color: #303030;
        }
        .bonus-icon {
          color: #E50914;
          font-size: 1.3rem;
        }

        /* Connection Section with Animation */
        .connection-section {
          margin-top: 4rem;
          text-align: center;
          max-width: 750px;
          width: 100%;
          padding: 2rem;
          background-color: #1a1a1a;
          border-radius: 10px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
          opacity: 0; /* Inicialmente invisível para animação */
          transform: translateY(30px); /* Inicialmente um pouco abaixo para animação */
          transition: opacity 0.7s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .connection-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .connection-title {
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }
        .connection-text {
          font-size: 1rem;
          color: #ccc;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .connection-text:last-child {
          margin-bottom: 0;
        }
        
        .testimonials-section {
          margin-top: 4rem;
          text-align: center;
          max-width: 900px;
          width: 100%;
        }
        .testimonials-main-title {
          font-size: 1.6rem;
          margin-bottom: 2rem;
        }
        .testimonials-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        .testimonial-card {
          background-color: #1e1e1e;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.5);
          color: #ddd;
          font-size: 0.95rem;
          line-height: 1.6;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-top: 3px solid #E50914;
        }
        .testimonial-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #333;
          color: #E50914;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          border: 2px solid #E50914;
        }
        .testimonial-text {
          font-style: italic;
          margin-bottom: 1rem;
          color: #bbb;
        }
        .testimonial-name {
          color: #E50914;
          font-size: 1rem;
        }

        .email-capture-section {
          margin-top: 4rem;
          padding: 2rem;
          background-color: #1a1a1a;
          border-radius: 10px;
          width: 100%;
          max-width: 650px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
          text-align: center;
        }
        .email-capture-title {
          font-size: 1.5rem;
          margin-bottom: 0.8rem;
        }
        .email-capture-subtitle {
          color: #bbb;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .email-capture-form {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          align-items: center;
          max-width: 400px;
          margin: 0 auto;
        }
        .email-input {
          padding: 0.7rem 0.9rem;
          border-radius: 5px;
          border: 1px solid #333;
          background-color: #222;
          color: #fff;
          font-size: 0.9rem;
          width: 100%;
          box-sizing: border-box;
          transition: border-color 0.3s ease;
        }
        .email-input:focus {
          border-color: #E50914;
          outline: none;
        }
        .email-submit-button {
          padding: 0.7rem 1.3rem;
          border-radius: 5px;
          border: none;
          background-color: #E50914;
          color: #fff;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          width: 100%;
        }
        .email-submit-button:hover {
          background-color: #c40812;
        }
        .email-submit-button:active {
          transform: scale(0.98);
        }
        .submission-feedback.success {
          color: #4CAF50;
          margin-top: 0.8rem;
          font-size: 0.85rem;
        }
        .privacy-text {
          font-size: 0.75rem;
          color: #888;
          margin-top: 0.8rem;
        }

        .guarantee-section {
          margin-top: 4rem;
          padding: 2rem;
          background-color: #1e1e1e;
          border-radius: 10px;
          width: 100%;
          max-width: 750px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
        }
        .guarantee-main-title {
          font-size: 1.6rem;
          margin-bottom: 0.3rem;
        }
        .guarantee-seal {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: #E50914;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1rem;
          line-height: 1.2;
          border: 3px solid #fff;
          box-shadow: 0 0 12px rgba(229, 9, 20, 0.6);
        }
        .guarantee-subtitle {
          font-size: 1.3rem;
          color: #fff;
          font-weight: 500;
        }
        .guarantee-text {
          font-size: 1rem;
          color: #ccc;
          line-height: 1.7;
          max-width: 580px;
        }

        /* Final CTA Section - Melhorias */
        .final-cta-section {
          margin-top: 4rem;
          padding: 3rem; /* Aumentado padding para mais respiro */
          background-color: #E50914;
          border-radius: 12px; /* Um pouco mais arredondado */
          width: 100%;
          max-width: 800px;
          box-shadow: 0 10px 30px rgba(229, 9, 20, 0.4); /* Sombra mais pronunciada */
          text-align: center;
        }
        .final-cta-title {
          font-size: 2rem; /* Aumentado em desktop */
          color: #fff;
          margin-bottom: 1rem; /* Aumentado margin bottom */
          font-weight: 700; /* Mais peso */
          line-height: 1.3;
        }
        .final-cta-subtitle {
          font-size: 1.1rem;
          color: #ffe0e3;
          line-height: 1.7;
          margin: 0 auto 2rem auto; /* Aumentado margin bottom */
          max-width: 650px;
        }
        .final-cta-button {
          padding: 0.9rem 2.2rem; /* Aumentado padding */
          border-radius: 8px; /* Mais arredondado */
          border: 2px solid #fff;
          background-color: #fff;
          color: #E50914;
          font-size: 1.15rem; /* Um pouco maior */
          font-weight: 700; /* Mais peso */
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .final-cta-button:hover {
          background-color: #101010; /* Um preto um pouco mais suave */
          color: #fff;
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        .final-cta-button:active {
          transform: scale(0.97);
        }

        .page-footer {
          margin-top: 5rem;
          padding: 2.5rem 1rem;
          text-align: center;
          color: #888;
          font-size: 0.85rem;
          width: 100%;
          background-color: #0a0a0a;
          border-top: 1px solid #222;
        }
        .footer-title {
          font-size: 1.3rem;
          color: #E50914;
          margin-bottom: 1rem;
        }
        .footer-links {
          margin-bottom: 1.2rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 15px;
        }
        .footer-link {
          color: #aaa;
          margin: 0 5px;
          text-decoration: none;
          transition: color 0.2s ease;
          font-size: 0.9rem;
        }
        .footer-link:hover {
          color: #E50914;
        }
        .copyright-text {
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }
        .copyright-notice {
          font-size: 0.75rem;
          color: #666;
          margin-top: 0.3rem;
        }

        @media (max-width: ${mobileBreakpoint}) {
          .ebooks-page-main {
            padding: 1.5rem 10px;
          }
          .main-title {
            font-size: 1.8rem;
            letter-spacing: 0.06em;
          }
          .subtitle {
            font-size: 0.9rem;
            max-width: 90%;
          }

          .carousel-arrow {
            font-size: 1.5rem;
            padding: 0.3rem 0.6rem;
          }
          .left-arrow { left: 2px; }
          .right-arrow { right: 2px; }
          
          .ebook-card {
            min-width: 180px;
          }
          .ebook-cover {
            height: 250px;
          }
          .ebook-title {
            font-size: 0.9rem;
            min-height: 2.8em;
          }
          .ebook-description {
            font-size: 0.75rem;
          }

          .bonus-section, .connection-section, .email-capture-section, .guarantee-section, .final-cta-section {
            padding: 1.5rem;
            margin-top: 3rem;
          }
          .bonus-title, .connection-title, .testimonials-main-title, .email-capture-title, .guarantee-main-title { /* .final-cta-title tratado abaixo */
            font-size: 1.4rem;
          }
           .section-title {
             margin-bottom: 1rem;
          }

          .bonus-list {
            grid-template-columns: 1fr;
            gap: 0.7rem;
          }
          .bonus-item {
            font-size: 0.85rem;
          }
          
          .connection-text, .guarantee-text {
            font-size: 0.9rem;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          .testimonial-card {
            padding: 1.2rem;
            font-size: 0.9rem;
          }
          .testimonial-avatar {
            width: 50px;
            height: 50px;
            font-size: 1.3rem;
          }
          .testimonial-name {
            font-size: 0.95rem;
          }
          
          .email-capture-subtitle {
            font-size: 0.85rem;
          }
          .email-capture-form {
            max-width: 100%;
          }
          .email-input, .email-submit-button {
            font-size: 0.85rem;
          }
          .privacy-text {
            font-size: 0.7rem;
          }

          .guarantee-seal {
            width: 80px;
            height: 80px;
            font-size: 0.9rem;
          }
          .guarantee-subtitle {
            font-size: 1.1rem;
          }

          .final-cta-section {
            padding: 2rem 1.5rem; /* Padding mobile ajustado */
          }
          .final-cta-title {
            font-size: 1.6rem; /* Ajustado para mobile */
            margin-bottom: 0.8rem;
          }
          .final-cta-subtitle {
            font-size: 0.95rem; /* Ajustado para mobile */
            margin-bottom: 1.5rem;
          }
          .final-cta-button {
            font-size: 1rem; /* Ajustado para mobile */
            padding: 0.8rem 1.8rem; /* Ajustado para mobile */
          }

          .footer-title {
            font-size: 1.1rem;
          }
          .footer-links {
            gap: 8px 10px;
          }
          .footer-link {
            font-size: 0.8rem;
          }
          .copyright-text {
            font-size: 0.8rem;
          }
          .copyright-notice {
            font-size: 0.7rem;
          }
        }
        
        @media (max-width: 480px) {
            .main-title {
                font-size: 1.6rem;
            }
            .subtitle {
                font-size: 0.85rem;
            }
            .ebook-card {
                min-width: 160px; 
            }
            .ebook-cover {
                height: 220px;
            }
             .bonus-title, .connection-title, .testimonials-main-title, .email-capture-title, .guarantee-main-title {
                font-size: 1.25rem; 
            }
            .connection-text, .guarantee-text, .testimonial-card {
                font-size: 0.85rem;
            }
            .final-cta-title {
              font-size: 1.4rem;
            }
            .final-cta-subtitle {
              font-size: 0.9rem;
            }
        }
      `}</style>
    </>
  )
}