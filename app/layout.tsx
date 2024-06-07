import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './Providers';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileNav from './components/layout/MobileNav';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Casul | Web',
  description: 'Frene seguro, frene Casul, la mejor calidad en frenos y sistemas hidraulicos en el mercado.',
  keywords: 'frenos, sistemas hidraulicos, calidad, seguridad, confianza, casul, autopartes, refacciones,cilindros ,beta-autopartes, betaautopartes, frene seguro, frene casul, balatas, discos, tambores, cilindros, bombas, frenos de disco, frenos de tambor, frenos de disco y tambor, aceite de frenos, liquido de frenos, frenos de aire, frenos de potencia, frenos de emergencia, frenos de estacionamiento, frenos de servicio, frenos de seguridad, frenos de repuesto, frenos de calidad, frenos de confianza, frenos de marca, banda de frenos, zapatas de frenos, pastillas de frenos, discos de frenos, tambores de frenos, cilindros de frenos, bombas de frenos, frenos de disco y tambor, frenos de disco y zapata, frenos de disco y banda, frenos de disco y zapatas, frenos de disco y bandas, frenos de disco y pastillas, frenos de disco y discos, frenos de disco y tambores, frenos de disco y cilindros, frenos de disco y bombas, frenos de disco y balatas, frenos de disco y discos, frenos de disco y tambores, frenos de disco y cilindros, frenos de disco y bombas, kit de frenos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <MobileNav />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
