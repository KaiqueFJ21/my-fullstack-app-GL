import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GameLink - Transformando Estatísticas em Gamificação',
  description: 'Plataforma competitiva para gamers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="app">
          <div className="bg-decor">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="rings"></div>
          </div>

          <Navbar />
          
          <main>{children}</main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
