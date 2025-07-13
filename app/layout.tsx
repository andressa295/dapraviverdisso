import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Poder Mental - Treine Sua Mente para a Prosperidade e Recomeços',
  description:
    'Desvende o poder da sua mente para atrair riqueza, saúde e sucesso. Participe da comunidade e acesse conteúdos exclusivos.',
  keywords: [
    'Poder Mental',
    'Reprogramação Mental',
    'Prosperidade',
    'Recomeços',
    'Sucesso',
    'Hábitos',
    'Lei da Atração',
    'Mente',
  ],
  openGraph: {
    title: 'Poder Mental - Treine Sua Mente para a Prosperidade e Recomeços',
    description:
      'Desvende o poder da sua mente para atrair riqueza, saúde e sucesso. Participe da comunidade e acesse conteúdos exclusivos.',
    url: 'https://www.podermnental.com.br',
    siteName: 'Poder Mental',
    images: [
      {
        url: 'https://www.podermnental.com.br/images/poder-mental-logo.png',
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
    description:
      'Desvende o poder da sua mente para atrair riqueza, saúde e sucesso. Participe da comunidade e acesse conteúdos exclusivos.',
    images: ['https://www.podermnental.com.br/images/poder-mental-logo.png'],
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
        <div className="main-layout-container">
          {children}
          <div className="aurora-light"></div>
        </div>

        
      </body>
    </html>
  );
}
