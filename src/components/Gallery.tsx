import { motion } from "motion/react";
import crfting from "../images/factory-toor/crafting.jpg";
import machinery from "../images/factory-toor/mashinary.webp";
import storage from "../images/factory-toor/wood-storage.jpg";
import factory from "../images/factory-toor/factory1.jpg";

const galleryImages = [
  {
    id: 1,
    src: factory,
    title: "Factory Setup",
    span: "md:col-span-2 md:row-span-2",
    height: "h-[400px]",
  },
  {
    id: 2,
    src: storage,
    title: "Material Storage",
    span: "col-span-1",
    height: "h-[200px]",
  },
  {
    id: 3,
    src: machinery,
    title: "Machinery",
    span: "col-span-1",
    height: "h-[200px]",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    title: "Finished Products",
    span: "col-span-1",
    height: "h-[250px]",
  },
  {
    id: 5,
    src: crfting,
    title: "Furniture Crafting",
    span: "col-span-1",
    height: "h-[250px]",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-charcoal text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Inside Our Manufacturing Unit
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A glimpse into our state-of-the-art facility where raw materials
              are transformed into masterpieces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-lg bg-white/5 ${img.span} ${img.height || "h-full"}`}
            >
              <motion.img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-serif text-xl font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
