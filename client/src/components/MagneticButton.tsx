'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function MagneticButton({
  children,
  onClick,
  className = '',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useTransform(x, (latest) => latest * 0.3);
  const ySpring = useTransform(y, (latest) => latest * 0.3);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const distance = Math.sqrt(distX ** 2 + distY ** 2);
      const maxDistance = 150;

      if (distance < maxDistance) {
        x.set(distX * 0.2);
        y.set(distY * 0.2);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    ref.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ref.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}
