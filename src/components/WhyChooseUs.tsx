import { motion } from 'motion/react';
import { ShieldCheck, Target, Hammer, PenTool, Factory, CheckCircle2, Truck, Smile, Users } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Since 1991 Experience', desc: 'Over 3 decades of manufacturing excellence.' },
  { icon: Target, title: 'Premium Material Selection', desc: 'We only use top-grade PLB and Plywood.' },
  { icon: Hammer, title: 'Skilled Craftsmanship', desc: 'Expert artisans with years of furniture making experience.' },
  { icon: PenTool, title: 'Custom Solutions', desc: 'Tailored designs to fit your exact requirements.' },
  { icon: Factory, title: 'Modern Manufacturing', desc: 'State-of-the-art facility ensuring precision and scale.' },
  { icon: CheckCircle2, title: 'Quality Assurance', desc: 'Rigorous checks at every stage of production.' },
  { icon: Truck, title: 'Timely Delivery', desc: 'Committed to delivering your furniture on schedule.' },
  { icon: Smile, title: 'Customer Satisfaction', desc: 'Building long-term relationships through trust.' },
  { icon: Users, title: 'Family Business Values', desc: 'Integrity and personal touch in every piece.' },
];

export default function WhyChooseUs() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Why Choose Us</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Our commitment to excellence makes us the preferred furniture manufacturer.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-secondary/30 p-8 rounded-xl border border-primary/5 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-accent transition-colors duration-300 text-primary">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
