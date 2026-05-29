import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.stxaviertimber.com',
  },
};
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import {
  Process,
  Industries,
  CeyPall,
  FAQ,
  Contact,
  Footer,
} from '@/components/Sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Industries />
        <CeyPall />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
