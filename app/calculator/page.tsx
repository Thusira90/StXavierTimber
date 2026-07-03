import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import TimberCalculator from '@/components/TimberCalculator';

export const metadata: Metadata = {
  title: 'Timber Treatment Calculator | Estimate Drying Time & Volume',
  description:
    'Estimate the volume, drying time, and recommended treatment for your timber. Enter your species, dimensions, and quantity to get an instant guide — then request an exact quote from St. Xavier Timber.',
  alternates: { canonical: 'https://www.stxaviertimber.com/calculator' },
  openGraph: { url: 'https://www.stxaviertimber.com/calculator' },
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
