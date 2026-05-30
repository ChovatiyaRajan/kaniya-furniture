import { motion } from 'motion/react';

const timeline = [
  { year: '1991', title: 'Foundation', description: 'Established by Maganbhai Khunt with a vision for premium quality.' },
  { year: '2000', title: 'Growth', description: 'Expanded operations and built customer trust locally.' },
  { year: '2010', title: 'Expanded Manufacturing', description: 'Introduced new machinery and larger production facility.' },
  { year: '2020', title: 'Modern Production', description: 'Advanced custom furniture capabilities and modern designs.' },
  { year: 'Today', title: 'Trusted Brand', description: 'Managed by Mayurbhai, Himatbhai, and Karan Khunt.' },
];

export default function Story() {
  return (
    <section id="story" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Our Journey Since 1991</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Founded by <strong className="text-primary font-semibold">Maganbhai Khunt</strong>, Kanaiya Furniture was established in 1991 with a vision of delivering durable and premium furniture crafted from quality materials and expert workmanship.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mt-4">
              Today, the legacy continues under the successful management of <strong className="text-primary font-semibold">Mayurbhai Khunt</strong> and <strong className="text-primary font-semibold">Himatbhai Khunt</strong>, while representing the next generation of modern manufacturing excellence through <strong className="text-primary font-semibold">Karan Khunt</strong>.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mt-4">
              For over three decades, our family-owned business has built an unwavering reputation for quality craftsmanship, customer trust, and furniture manufacturing excellence.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto mt-24">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-primary/20 -translate-y-1/2 hidden md:block" />
          
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-1 flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-0"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary flex items-center justify-center shadow-lg md:mb-6 shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-accent text-[10px] font-bold">{item.year}</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/5 flex-1 w-full relative">
                  <h3 className="text-lg font-serif text-primary font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{item.description}</p>
                  
                  {/* Subtle connector for mobile */}
                  {index < timeline.length - 1 && (
                    <div className="absolute bottom-[-2rem] left-8 w-[2px] h-8 bg-primary/20 md:hidden" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
