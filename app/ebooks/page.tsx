'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
// IMPORTANTE: Quando o componente LogoPhandcoSvg estiver em app/components/LogoPhandcoSvg.tsx
// Descomente a linha abaixo e ajuste o caminho se necessário:
// import LogoPhandcoSvg from '../components/LogoPhandcoSvg';

// Dados (ebooks, bonus, allTestimonials)
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
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Para feedback do botão

  const [isConnectionVisible, setIsConnectionVisible] = useState(false);
  const connectionSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsConnectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
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

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Inicia o estado de envio
    const formData = {
      email: email,
      _subject: "Nova inscrição na lista de E-books Phandco!",
    };

    try {
      const response = await fetch('https://formspree.io/f/movwvwrk', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        const responseData = await response.json();
        console.error('Erro ao enviar para o Formspree:', responseData);
        alert('Houve um problema ao enviar seu e-mail. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro de rede ao enviar para o Formspree:', error);
      alert('Erro de rede. Verifique sua conexão e tente novamente.');
    } finally {
      setIsSubmitting(false); // Finaliza o estado de envio
    }
  };

  const mobileBreakpoint = '768px';
  const smallMobileBreakpoint = '480px';

  return (
    <>
      <main className="ebooks-page-main">
        <header className="page-header">
          <div
            className="logo-area-ebooks"
            onClick={() => router.push('/')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push('/')}}
            aria-label="Ir para a página inicial Phandco"
          >
            {/* <LogoPhandcoSvg /> */}
            <span className="logo-placeholder-text">Phandco</span>
          </div>
          <div className="title-area-ebooks">
            <h1 className="main-title">COMBO E-BOOKS</h1>
            <p className="subtitle">
              Tudo o que você precisa para desbloquear sua mente e transformar sua realidade.
            </p>
          </div>
        </header>

        <section aria-label="Lista de ebooks em carrossel" className="ebook-carousel-section">
          <button
            aria-label="Scroll para esquerda"
            onClick={() => scrollBy(-190)} // Ajustado para nova largura do card + gap
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
            onClick={() => scrollBy(190)} // Ajustado para nova largura do card + gap
            className="carousel-arrow right-arrow"
          >
            ❯
          </button>
        </section>

        {/* Restante do conteúdo da página ... (seções bônus, conexão, etc.) */}
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
              disabled={isSubmitting || isSubmitted}
            />
            <button type="submit" className="email-submit-button" disabled={isSubmitting || isSubmitted}>
              {isSubmitting ? 'Enviando...' : (isSubmitted ? 'Inscrito!' : 'Quero Receber!')}
            </button>
          </form>
          {isSubmitted && !isSubmitting && ( // Mostra feedback apenas se submetido e não enviando
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
            onClick={() => {
              window.location.href = 'https://pay.kiwify.com.br/rKUTm2V';
            }}
          >
            BAIXAR E-BOOKS!&nbsp;➔
          </button>
        </section>

        <footer className="page-footer">
          <h3 className="footer-title">Phand E-books ✨</h3>
          <div className="footer-links">
            {/* Links do footer como estavam no seu último código */}
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
        /* Estilos gerais e de outras seções ... */
        .ebooks-page-main { background-color: #141414; color: #fff; min-height: 100vh; padding: 0 0 2rem; /* Removido padding lateral aqui, controlado por seções */ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100vw; overflow-x: hidden; display: flex; flex-direction: column; align-items: center; scroll-behavior: smooth; }
        .section-title { color: #E50914; text-transform: uppercase; text-align: center; font-weight: 500; letter-spacing: 0.05em; }
        .page-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 15px; width: 100%; max-width: 1200px; margin: 0 auto 2rem; box-sizing: border-box; border-bottom: 1px solid #222; }
        .logo-area-ebooks { cursor: pointer; display: flex; align-items: center; border-radius: 4px; }
        .logo-area-ebooks:focus-visible { outline: 2px solid #E50914; outline-offset: 2px; }
        .logo-area-ebooks :global(.logo-svg text) { transition: fill 0.2s ease-in-out; }
        .logo-area-ebooks:hover :global(.logo-svg text),
        .logo-area-ebooks:focus-visible :global(.logo-svg text) { fill: #ff3352; }
        .logo-placeholder-text { font-size: 1.5rem; font-weight: bold; color: #E50914; }
        .title-area-ebooks { flex-grow: 1; text-align: center; padding: 0 10px; /* Para não colar no logo em mobile */ }
        .main-title { font-weight: 500; font-size: 2rem; margin-bottom: 0.25rem; color: #E50914; letter-spacing: 0.08em; text-transform: uppercase; }
        .subtitle { color: #bbb; font-size: 0.9rem; max-width: 550px; margin: 0 auto; line-height: 1.5; }

        /* === CARROSSEL DE E-BOOKS AJUSTADO === */
        .ebook-carousel-section {
          position: relative;
          width: 100%;
          max-width: 1200px; 
          margin: 2rem auto 3rem;
          padding: 0 40px; /* Espaço para as setas em desktop */
          box-sizing: border-box;
        }
        .ebook-carousel-container {
          display: flex;
          gap: 1rem; 
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-top: 0.5rem; 
          padding-bottom: 1rem; /* Mais espaço para sombra */
          margin: 0; /* Removida margem negativa */
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .ebook-carousel-container::-webkit-scrollbar { display: none; }

        .ebook-card {
          min-width: 180px; /* Ebook mais 'fino' */
          max-width: 190px;
          flex: 0 0 auto; 
          scroll-snap-align: start;
          background-color: #222; /* Tom um pouco diferente */
          border-radius: 6px; /* Menos arredondado */
          box-shadow: 0 3px 10px rgba(0,0,0,0.4);
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex; 
          flex-direction: column;
        }
        .ebook-card:hover {
          transform: translateY(-5px) scale(1.03); /* Efeito de elevação */
          box-shadow: 0 6px 20px rgba(229, 9, 20, 0.3);
        }
        .ebook-cover {
          width: 100%;
          height: 270px; /* Proporção ~2:3 (largura 180px) */
          object-fit: cover; 
          background-color: #111;
          /* border-bottom: 2px solid #E50914; Removida borda para visual mais limpo da capa */
        }
        .ebook-info {
          padding: 0.75rem; 
          flex-grow: 1; 
          display: flex;
          flex-direction: column;
          justify-content: flex-start; /* Começa o texto de cima */
        }
        .ebook-title {
          font-size: 0.85rem; 
          color: #f0f0f0; /* Mais claro */
          margin-bottom: 0.3rem; 
          line-height: 1.3;
          font-weight: 600; 
        }
        .ebook-description {
          font-size: 0.7rem; 
          color: #999; /* Mais suave */
          line-height: 1.4;
        }

        /* Setas do Carrossel */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20; 
          background: rgba(18, 18, 18, 0.7); /* Fundo mais escuro e sutil */
          border: none;
          color: #b0b0b0; /* Cor da seta mais suave */
          font-size: 1.8rem; 
          cursor: pointer;
          padding: 1rem 0.3rem; /* Estreito horizontalmente, alto verticalmente */
          line-height: 0; /* Ajuda a centralizar o caractere da seta */
          transition: background 0.2s ease, color 0.2s ease, opacity 0.2s ease;
          border-radius: 4px;
          opacity: 0.8; /* Levemente transparente por padrão */
        }
        .carousel-arrow:hover {
          background: #E50914;
          color: #fff;
          opacity: 1;
        }
        .left-arrow { 
          left: 5px; /* Dentro do padding da seção */
        } 
        .right-arrow { 
          right: 5px; /* Dentro do padding da seção */
        }
        /* === FIM DOS AJUSTES CARROSSEL === */

        /* Outras seções (estilos base como antes) */
        .bonus-section { margin-top: 4rem; background-color: #1a1a1a; padding: 2rem; border-radius: 10px; width: 100%; max-width: 750px; box-shadow: 0 6px 20px rgba(0,0,0,0.4); }
        .bonus-title { font-size: 1.6rem; margin-bottom: 1.5rem; }
        .bonus-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem;  grid-template-columns: repeat(2, 1fr);  }
        .bonus-item { background-color: #272727; padding: 0.8rem 1rem; border-radius: 6px; font-size: 0.9rem; color: #fff; display: flex; align-items: center; gap: 0.6rem; border-left: 3px solid #E50914; transition: transform 0.2s ease, background-color 0.2s ease; }
        .bonus-item:hover { transform: translateX(4px); background-color: #303030; }
        .bonus-icon { color: #E50914; font-size: 1.3rem; }
        .connection-section { margin-top: 4rem; text-align: center; max-width: 750px; width: 100%; padding: 2rem; background-color: #1a1a1a; border-radius: 10px; box-shadow: 0 6px 20px rgba(0,0,0,0.4); opacity: 0;  transform: translateY(30px);  transition: opacity 0.7s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1); }
        .connection-section.is-visible { opacity: 1; transform: translateY(0); }
        .connection-title { font-size: 1.6rem; margin-bottom: 1rem; }
        .connection-text { font-size: 1rem; color: #ccc; line-height: 1.7; margin-bottom: 1rem; }
        .connection-text:last-child { margin-bottom: 0; }
        .testimonials-section { margin-top: 4rem; text-align: center; max-width: 900px; width: 100%; }
        .testimonials-main-title { font-size: 1.6rem; margin-bottom: 2rem; }
        .testimonials-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .testimonial-card { background-color: #1e1e1e; padding: 1.5rem; border-radius: 10px; box-shadow: 0 6px 20px rgba(0,0,0,0.5); color: #ddd; font-size: 0.95rem; line-height: 1.6; display: flex; flex-direction: column; align-items: center; text-align: center; border-top: 3px solid #E50914; }
        .testimonial-avatar { width: 60px; height: 60px; border-radius: 50%; background-color: #333; color: #E50914; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; border: 2px solid #E50914; }
        .testimonial-text { font-style: italic; margin-bottom: 1rem; color: #bbb; }
        .testimonial-name { color: #E50914; font-size: 1rem; }
        .email-capture-section { margin-top: 4rem; padding: 2rem; background-color: #1a1a1a; border-radius: 10px; width: 100%; max-width: 650px; box-shadow: 0 6px 20px rgba(0,0,0,0.4); text-align: center; }
        .email-capture-title { font-size: 1.5rem; margin-bottom: 0.8rem; }
        .email-capture-subtitle { color: #bbb; margin-bottom: 1.5rem; font-size: 0.9rem; line-height: 1.6; }
        .email-capture-form { display: flex; flex-direction: column; gap: 0.8rem; align-items: center; max-width: 400px; margin: 0 auto; }
        .email-input { padding: 0.7rem 0.9rem; border-radius: 5px; border: 1px solid #333; background-color: #222; color: #fff; font-size: 0.9rem; width: 100%; box-sizing: border-box; transition: border-color 0.3s ease; }
        .email-input:focus { border-color: #E50914; outline: none; }
        .email-submit-button { padding: 0.7rem 1.3rem; border-radius: 5px; border: none; background-color: #E50914; color: #fff; font-size: 1rem; font-weight: bold; cursor: pointer; transition: background-color 0.3s ease, opacity 0.3s ease; width: 100%; }
        .email-submit-button:hover { background-color: #c40812; }
        .email-submit-button:disabled { background-color: #555; cursor: not-allowed; opacity: 0.7; }
        .submission-feedback.success { color: #4CAF50; margin-top: 0.8rem; font-size: 0.85rem; }
        .privacy-text { font-size: 0.75rem; color: #888; margin-top: 0.8rem; }
        .guarantee-section { margin-top: 4rem; padding: 2rem; background-color: #1e1e1e; border-radius: 10px; width: 100%; max-width: 750px; box-shadow: 0 6px 20px rgba(0,0,0,0.4); text-align: center; display: flex; flex-direction: column; align-items: center; gap: 1.2rem; }
        .guarantee-main-title { font-size: 1.6rem; margin-bottom: 0.3rem; }
        .guarantee-seal { width: 100px; height: 100px; border-radius: 50%; background-color: #E50914; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: bold; font-size: 1rem; line-height: 1.2; border: 3px solid #fff; box-shadow: 0 0 12px rgba(229, 9, 20, 0.6); }
        .guarantee-subtitle { font-size: 1.3rem; color: #fff; font-weight: 500; }
        .guarantee-text { font-size: 1rem; color: #ccc; line-height: 1.7; max-width: 580px; }
        .final-cta-section { margin-top: 4rem; padding: 3rem; background-color: #E50914; border-radius: 12px; width: 100%; max-width: 800px; box-shadow: 0 10px 30px rgba(229, 9, 20, 0.4); text-align: center; }
        .final-cta-title { font-size: 2rem; color: #fff; margin-bottom: 1rem; font-weight: 700; line-height: 1.3; }
        .final-cta-subtitle { font-size: 1.1rem; color: #ffe0e3; line-height: 1.7; margin: 0 auto 2rem auto; max-width: 650px; }
        .final-cta-button { padding: 0.9rem 2.2rem; border-radius: 8px; border: 2px solid #fff; background-color: #fff; color: #E50914; font-size: 1.15rem; font-weight: 700; cursor: pointer; text-transform: uppercase; letter-spacing: 0.03em; transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
        .final-cta-button:hover { background-color: #101010; color: #fff; box-shadow: 0 6px 20px rgba(0,0,0,0.3); }
        .final-cta-button:active { transform: scale(0.97); }
        .page-footer { margin-top: 5rem; padding: 2.5rem 1rem; text-align: center; color: #888; font-size: 0.85rem; width: 100%; background-color: #0a0a0a; border-top: 1px solid #222; }
        .footer-title { font-size: 1.3rem; color: #E50914; margin-bottom: 1rem; }
        .footer-links { margin-bottom: 1.2rem; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 15px; }
        .copyright-text { font-size: 0.85rem; margin-bottom: 0.5rem; }
        .copyright-notice { font-size: 0.75rem; color: #666; margin-top: 0.3rem; }

        /* Media Queries */
        @media (max-width: ${mobileBreakpoint}) { /* 768px */
          .ebooks-page-main { padding: 0 10px 1.5rem; }
          .page-header { padding: 1rem 10px; margin-bottom: 1.5rem; flex-direction: row; justify-content: space-between; align-items: center; gap: 1rem; }
          .logo-area-ebooks :global(.logo-svg) { width: 100px; height: auto; }
          .logo-placeholder-text { font-size: 1.1rem; }
          .title-area-ebooks { text-align: right; }
          .main-title { font-size: 1.3rem; letter-spacing: 0.06em; }
          .subtitle { display: none; }

          .ebook-carousel-section {
            padding: 0; /* Setas coladas nas bordas da tela */
          }
          .carousel-arrow {
            font-size: 1.2rem; 
            padding: 0.6rem 0.15rem; /* Muito estreito horizontalmente */
            background: rgba(20, 20, 20, 0.8); /* Mais opaco para visibilidade */
            box-shadow: none;
            line-height: 1; /* Tenta centralizar o ícone melhor */
          }
          .left-arrow { left: 3px; } 
          .right-arrow { right: 3px; }
          
          .ebook-card {
            min-width: 140px; 
            max-width: 150px;
          }
          .ebook-cover {
            height: 210px; /* Proporção 2:3 para 140px de largura */
          }
          .ebook-title { font-size: 0.8rem; min-height: auto; margin-bottom: 0.25rem; }
          .ebook-description { font-size: 0.7rem; line-height: 1.3; }
          
          .bonus-section, .connection-section, .email-capture-section, .guarantee-section, .final-cta-section { padding: 1.5rem; margin-top: 3rem; }
          .bonus-title, .connection-title, .testimonials-main-title, .email-capture-title, .guarantee-main-title { font-size: 1.4rem; }
          .section-title { margin-bottom: 1rem; }
          .bonus-list { grid-template-columns: 1fr; gap: 0.7rem; }
          .bonus-item { font-size: 0.85rem; }
          .connection-text, .guarantee-text { font-size: 0.9rem; }
          .testimonials-grid { grid-template-columns: 1fr; gap: 1.2rem; }
          .testimonial-card { padding: 1.2rem; font-size: 0.9rem; }
          .testimonial-avatar { width: 50px; height: 50px; font-size: 1.3rem; }
          .testimonial-name { font-size: 0.95rem; }
          .email-capture-subtitle { font-size: 0.85rem; }
          .email-capture-form { max-width: 100%; }
          .email-input, .email-submit-button { font-size: 0.85rem; }
          .privacy-text { font-size: 0.7rem; }
          .guarantee-seal { width: 80px; height: 80px; font-size: 0.9rem; }
          .guarantee-subtitle { font-size: 1.1rem; }
          .final-cta-section { padding: 2rem 1.5rem; }
          .final-cta-title { font-size: 1.6rem; margin-bottom: 0.8rem; }
          .final-cta-subtitle { font-size: 0.95rem; margin-bottom: 1.5rem; }
          .final-cta-button { font-size: 1rem; padding: 0.8rem 1.8rem; }
          .footer-title { font-size: 1.1rem; }
          .footer-links { gap: 8px 10px; }
          .footer-link { font-size: 0.8rem; }
          .copyright-text { font-size: 0.8rem; }
          .copyright-notice { font-size: 0.7rem; }
        }
        
        @media (max-width: ${smallMobileBreakpoint}) { /* 480px */
          .page-header { 
            padding: 0.8rem 10px; 
            flex-direction: column; 
            gap: 0.3rem; 
          }
          .logo-area-ebooks :global(.logo-svg), .logo-placeholder-text { 
            width: 90px !important; 
            height: auto !important;
            font-size: 1.1rem !important; 
          }
          .title-area-ebooks { text-align: center; }
          .main-title { font-size: 1.1rem; margin-bottom: 0.1rem; } 
          .subtitle { display: block; font-size: 0.75rem; } 
          
          .ebook-carousel-section {
             padding: 0 20px; /* Aumenta um pouco o padding para as setas não sumirem na borda */
          }
          .carousel-arrow {
            font-size: 1rem; 
            padding: 0.4rem 0.1rem; /* Padding vertical para toque, quase nada horizontal */
            background: rgba(20, 20, 20, 0.65);
          }
          .left-arrow { left: 0px; } /* Coladas no padding da seção */
          .right-arrow { right: 0px; }
          
          .ebook-card {
            min-width: 100px; /* Card ainda menor */
            max-width: 110px;
          }
          .ebook-cover {
            height: 150px; /* Proporção 2:3 para 100px de largura */
          }
          .ebook-title { font-size: 0.65rem; font-weight: 500; }
          .ebook-description { display: none; } 

          .bonus-title, .connection-title, .testimonials-main-title, .email-capture-title, .guarantee-main-title { font-size: 1.1rem; }
          .connection-text, .guarantee-text, .testimonial-card { font-size: 0.8rem; }
          .testimonial-avatar { width: 40px; height: 40px; font-size: 1.1rem; }
          .final-cta-title { font-size: 1.3rem; }
          .final-cta-subtitle { font-size: 0.85rem; }
        }
      `}</style>
    </>
  )
}
