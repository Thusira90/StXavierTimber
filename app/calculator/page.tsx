import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import TimberCalculator from '@/components/TimberCalculator';

export const metadata: Metadata = {
  title: { absolute: 'Timber Treatment Calculator | Drying Time & Volume' },
  description:
    'Free timber treatment estimator: enter your species and dimensions for instant volume, drying time, and treatment recommendations.',
  alternates: { canonical: 'https://www.stxaviertimber.com/calculator' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'St. Xavier Timber — Kiln Drying & VPI Treatment Sri Lanka' }], url: 'https://www.stxaviertimber.com/calculator' },
};

export default function CalculatorPage() {
  return (
    <>
      <Navbar />
      <TimberCalculator />
      <Footer />
    </>
  );
}
