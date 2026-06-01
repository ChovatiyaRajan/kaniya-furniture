import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Story', href: '#story' },
  { name: 'Features', href: '#features' },
  { name: 'Products', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Custom', href: '#custom' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Slight delay for mobile menu to close before scrolling
    setTimeout(() => {
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        window.scrollTo({
          top: elem.offsetTop - 80,
          behavior: 'smooth',
        });
        setActiveSection(targetId);
      }
    }, 100);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300',
          isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group relative flex flex-col z-50"
          >
            <h1 className={cn(
              "font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
              isScrolled ? "text-primary" : "text-white"
            )}>
              Kanaiya Furniture
            </h1>
            <h2 className={cn(
              "text-[10px] uppercase tracking-widest absolute -bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              isScrolled ? "text-accent" : "text-white/80"
            )}>
              Since 1991
            </h2>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => ( 
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors hover:text-accent',
                  isScrolled ? 'text-charcoal' : 'text-white/90',
                  activeSection === item.href.substring(1) && (isScrolled ? 'text-primary' : 'text-white')
                )}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent pointer-events-none"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden z-50 p-2 transition-colors",
              isScrolled || mobileMenuOpen ? "text-primary" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-white flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={cn(
                    'text-2xl font-serif transition-colors',
                    activeSection === item.href.substring(1) ? 'text-accent' : 'text-primary hover:text-accent'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="absolute bottom-12 text-center text-sm font-light text-charcoal/60">
              <p>Contact Us</p>
              <a href="tel:+916351133017" className="text-primary font-medium mt-1 inline-block">
                +91 6351 133 017
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
