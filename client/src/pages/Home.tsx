import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import FeaturedDeal from '@/components/FeaturedDeal';
import Footer from '@/components/Footer';

/**
 * FRYD Flagship Website
 * 
 * Design Philosophy: Bold, High-Contrast, Motion-Driven
 * - Palette: Deep Charcoal (#121212), Neon Yellow (#E6FF00), Crisp White
 * - Motion Intensity: 8 (Cinematic/Magic Physics)
 * - Typography: Outfit (Headlines), Satoshi (Body)
 * - Animations: Staggered reveals, magnetic effects, glassmorphism
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Menu />
      <FeaturedDeal />
      <Footer />
    </div>
  );
}
