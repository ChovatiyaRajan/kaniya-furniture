import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-screen w-full overflow-hidden bg-primary">
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
          alt="Luxury furniture factory" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-accent" />
            <span className="text-accent uppercase tracking-widest text-sm font-semibold">
              Premium Quality
            </span>
            <span className="h-[1px] w-12 bg-accent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-8">
            Crafting Quality <br/>
            <span className="text-secondary/90 italic font-normal">Furniture Since 1991</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mb-12">
            Kanaiya Furniture is a trusted manufacturer specializing in premium wooden furniture, custom solutions, sofas, beds, kabats, and interior furniture crafted with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#products"
              className="px-8 py-4 bg-accent text-white font-medium text-lg rounded hover:bg-accent/90 transition-all hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
            >
              View Products
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium text-lg rounded hover:bg-white hover:text-primary transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-20 hidden md:block"
      >
        <div className="container mx-auto px-6">
          <div className="flex bg-white/10 backdrop-blur-md border border-white/10 rounded-t-xl overflow-hidden divide-x divide-white/10">
            <div className="flex-1 py-6 px-8 text-center hover:bg-white/5 transition-colors">
              <p className="text-3xl font-serif text-accent mb-1">1991</p>
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider">Since</p>
            </div>
            <div className="flex-1 py-6 px-8 text-center hover:bg-white/5 transition-colors">
              <p className="text-xl font-medium text-white mb-2 leading-tight">Family Owned</p>
              <p className="text-white/70 text-sm uppercase tracking-wider">Business</p>
            </div>
            <div className="flex-1 py-6 px-8 text-center hover:bg-white/5 transition-colors">
              <p className="text-xl font-medium text-white mb-2 leading-tight">Premium Quality</p>
              <p className="text-white/70 text-sm uppercase tracking-wider">Furniture</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
