// import './globals.css'; // Mantenha esta linha para seus estilos globais
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

// **Importe seus estilos globais AQUI**
import './globals.css';

// Configura a fonte Poppins com os pesos que você já usava
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// Metadados para SEO e o título da aba do navegador
export const metadata: Metadata = {
  title: 'Poder Mental - Treine Sua Mente para a Prosperidade e Recomeços',
  description: 'Desvende o poder da sua mente para atrair riqueza, saúde e sucesso. Participe da comunidade e acesse conteúdos exclusivos.',
  keywords: ['Poder Mental', 'Reprogramação Mental', 'Prosperidade', 'Recomeços', 'Sucesso', 'Hábitos', 'Lei da Atração', 'Mente'],
  openGraph: {
    title: 'Poder Mental - Treine Sua Mente para a Prosperidade e Recomeços',
    description: 'Desvende o poder da sua mente para atrair riqueza, saúde e sucesso. Participe da comunidade e acesse conteúdos exclusivos.',
    url: 'https://www.podermnental.com.br', // Substitua pelo seu domínio real
    siteName: 'Poder Mental',
    images: [
      {
        url: 'https://www.podermnental.com.br/images/poder-mental-logo.png', // Substitua pela URL da sua logo ou uma imagem de capa otimizada
        width: 800,
        height: 600,
        alt: 'Poder Mental - Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poder Mental - Treine Sua Mente para a Prosperidade e Recomeços',
    description: 'Desvende o poder da sua mente para atrair riqueza, saúde e sucesso. Participe da comunidade e acesse conteúdos exclusivos.',
    images: ['https://www.podermnental.com.br/images/poder-mental-logo.png'], // Substitua pela URL da sua logo
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        {/* NOVO CONTAINER PRINCIPAL */}
        <div className="main-layout-container">
          {children}
        </div>
      </body>
    </html>
  );
}