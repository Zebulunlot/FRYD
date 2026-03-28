'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  whatsappMessage: string;
}

const menuData: Record<string, MenuItem[]> = {
  burgers: [
    {
      id: 'burger-1',
      name: 'Signature Smash',
      description: 'Two crispy smashed patties with melted cheese, bacon, and our special sauce',
      price: '₨ 450',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455778448/AvePTygo3fVVEQHiZtmqu5/fryd-signature-smash-burger-WyyErddpUAQ42RH8wy3Vtb.webp',
      whatsappMessage: 'I want to order the Signature Smash Burger from FRYD!',
    },
    {
      id: 'burger-2',
      name: 'Classic Zinger',
      description: 'Crispy fried chicken breast with lettuce, tomato, and mayo',
      price: '₨ 380',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455778448/AvePTygo3fVVEQHiZtmqu5/fryd-signature-smash-burger-WyyErddpUAQ42RH8wy3Vtb.webp',
      whatsappMessage: 'I want to order the Classic Zinger from FRYD!',
    },
    {
      id: 'burger-3',
      name: 'The FRYD Special',
      description: 'Double patty with triple cheese, bacon, egg, and caramelized onions',
      price: '₨ 520',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455778448/AvePTygo3fVVEQHiZtmqu5/fryd-signature-smash-burger-WyyErddpUAQ42RH8wy3Vtb.webp',
      whatsappMessage: 'I want to order The FRYD Special from FRYD!',
    },
  ],
  fries: [
    {
      id: 'fries-1',
      name: 'Cheezy Blast',
      description: 'Crispy fries smothered in melted cheddar, bacon, and green onions',
      price: '₨ 320',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455778448/AvePTygo3fVVEQHiZtmqu5/fryd-loaded-fries-cheezy-blast-ev7yf9UBoAn7Epi2nUKtdj.webp',
      whatsappMessage: 'I want to order Cheezy Blast Loaded Fries from FRYD!',
    },
    {
      id: 'fries-2',
      name: 'Peri Peri Chicken',
      description: 'Golden fries topped with spiced peri peri chicken and fresh cilantro',
      price: '₨ 380',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455778448/AvePTygo3fVVEQHiZtmqu5/fryd-peri-peri-loaded-fries-2X8tmFnT6UbWuxSsUJnqN4.webp',
      whatsappMessage: 'I want to order Peri Peri Chicken Loaded Fries from FRYD!',
    },
    {
      id: 'fries-3',
      name: 'Garlic Mayo Fries',
      description: 'Crispy fries with roasted garlic mayo, parmesan, and fresh herbs',
      price: '₨ 280',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455778448/AvePTygo3fVVEQHiZtmqu5/fryd-loaded-fries-cheezy-blast-ev7yf9UBoAn7Epi2nUKtdj.webp',
      whatsappMessage: 'I want to order Garlic Mayo Fries from FRYD!',
    },
  ],
  shakes: [
    {
      id: 'shake-1',
      name: 'Lotus Biscoff',
      description: 'Creamy shake with crushed Lotus biscuits and caramel drizzle',
      price: '₨ 280',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455778448/AvePTygo3fVVEQHiZtmqu5/fryd-lotus-biscoff-shake-kcXHQHYo2jWvTunJ3QfQk2.webp',
      whatsappMessage: 'I want to order a Lotus Biscoff Shake from FRYD!',
    },
    {
      id: 'shake-2',
      name: 'Nutella Crunch',
      description: 'Rich Nutella shake with crushed hazelnuts and whipped cream',
      price: '₨ 300',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455778448/AvePTygo3fVVEQHiZtmqu5/fryd-lotus-biscoff-shake-kcXHQHYo2jWvTunJ3QfQk2.webp',
      whatsappMessage: 'I want to order a Nutella Crunch Shake from FRYD!',
    },
    {
      id: 'shake-3',
      name: 'Oreo Blast',
      description: 'Decadent chocolate shake with crushed Oreos and chocolate syrup',
      price: '₨ 290',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455778448/AvePTygo3fVVEQHiZtmqu5/fryd-oreo-blast-shake-cEMhxyGxv7YrUoUmq3hoq3.webp',
      whatsappMessage: 'I want to order an Oreo Blast Shake from FRYD!',
    },
  ],
};

const categories = [
  { id: 'burgers', label: 'Burgers', icon: '🍔' },
  { id: 'fries', label: 'Loaded Fries', icon: '🍟' },
  { id: 'shakes', label: 'Shakes', icon: '🥤' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('burgers');
  const items = menuData[activeCategory as keyof typeof menuData];

  const handleWhatsAppOrder = (message: string) => {
    const phoneNumber = '+923257767777';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="fryd-heading text-primary mb-4">The FRYD Menu Engine</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully crafted menu of bold, loaded flavors
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-muted'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <motion.div
                className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
              {/* Item Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                  {item.price}
                </div>
              </div>

              {/* Item Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>

                {/* Order Button */}
                <motion.button
                  onClick={() => handleWhatsAppOrder(item.whatsappMessage)}
                  className="w-full fryd-button flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                  Order via WhatsApp
                </motion.button>
              </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
