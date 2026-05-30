import { motion } from 'motion/react';
import { Ruler, Layout, Palette, Home, Building2, Armchair } from 'lucide-react';

const services = [
  { icon: Ruler, title: 'Custom Size Furniture', desc: 'Perfectly measured to fit your space.' },
  { icon: Layout, title: 'Custom Designs', desc: 'Bringing your unique ideas to life.' },
  { icon: Palette, title: 'Custom Finishes', desc: 'Wide range of colors, textures, and laminates.' },
  { icon: Home, title: 'Residential Projects', desc: 'Complete home furnishing solutions.' },
  { icon: Building2, title: 'Commercial Projects', desc: 'Robust furniture for offices and hotels.' },
  { icon: Armchair, title: 'Interior Furniture Work', desc: 'Collaborating with designers for turnkey setups.' },
];

export default function CustomFurniture() {
  return (
    <section id="custom" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary -z-10 rounded-l-[100px] hidden lg:block" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
              Custom Furniture <br/>
              <span className="text-accent italic">Designed For You</span>
            </h2>
            <div className="w-24 h-1 bg-accent mb-8 rounded-full" />
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              We provide tailored furniture manufacturing solutions according to specific customer requirements. From conceptualization to the final polish, we ensure your vision becomes reality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary shrink-0 mt-1">
                    <service.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{service.title}</h4>
                    <p className="text-sm text-charcoal/60">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <a href="#contact" className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1">
                Discuss Your Project
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80" 
              alt="Custom furniture design"
              className="rounded-xl shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent rounded-full border-[12px] border-white z-20 flex items-center justify-center hidden sm:flex">
                <span className="text-white font-serif font-bold text-center leading-tight text-xl">
                  100%<br/>Custom
                </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
