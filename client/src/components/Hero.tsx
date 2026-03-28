import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HERO_VIDEO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455778448/AvePTygo3fVVEQHiZtmqu5/mixkit-cheeseburger-with-dark-background-47191-hd-ready_04ae97ae.mp4';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark Overlay (0.3 opacity) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <motion.div
        className="relative z-10 container flex flex-col items-center justify-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1
          className="fryd-heading text-white mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          BOLD FLAVORS.<br />NO REGRETS.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="fryd-subheading text-white/90 mb-12 max-w-2xl drop-shadow-md"
          variants={itemVariants}
        >
          The Ultimate Loaded Experience in Kasur
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="fryd-button mb-16 text-lg font-bold shadow-lg hover:shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const menuSection = document.getElementById('menu');
            menuSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Menu
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/80" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
