import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Sections';
import TimberCalculator from '@/components/TimberCalculator';

export const metadata: Metadata = {
  title: 'Timber Treatment Calculator | Estimate Drying Time & Volume',
  description:
    'Free timber treatment estimator. Select your species and dimensions to get instant volume, drying time, and treatment recommendations. Then request an exact quote from St. Xavier Timber.',
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
