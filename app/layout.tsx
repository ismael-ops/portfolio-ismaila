import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ismaila Sylla',
  description: 'Ingénieur Informatique. DevOps × Cloud.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
