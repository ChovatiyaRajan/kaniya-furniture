import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import plb1 from "../images/plb/plb1.jpeg";
import plb2 from "../images/plb/plb2.jpeg";
import plb3 from "../images/plb/plb3.jpeg";
import plb4 from "../images/plb/plb4.jpeg";
import plb5 from "../images/plb/plb5.jpeg";

import plywood1 from "../images/plywood/plywood1.jpeg";
import plywood2 from "../images/plywood/plywood2.jpeg";
import plywood3 from "../images/plywood/plywood3.jpeg";
import plywood4 from "../images/plywood/plywood4.jpeg";
import plywood5 from "../images/plywood/plywood5.jpeg";
import plywood6 from "../images/plywood/plywood6.jpeg";
import plywood7 from "../images/plywood/plywood7.jpeg";
import plywood8 from "../images/plywood/plywood8.jpeg";

// bed
import bed1 from "../images/bed/bed1.webp";

// sofa
import sofa1 from "../images/sofa/sofa1.jpg";
import sofa2 from "../images/sofa/sofa2.webp";
import sofa3 from "../images/sofa/sofa3.webp";
import sofa4 from "../images/sofa/sofa4.webp";
import sofa5 from "../images/sofa/sofa5.jpg";
import sofa6 from "../images/sofa/sofa6.jpg";

// kabat
import kabat1 from "../images/kabat/kabat1.webp";
import kabat2 from "../images/kabat/kabat2.jpg";
import kabat3 from "../images/kabat/kabat3.jpg";

const categories = ["All", "PLB Furniture", "Plywood Furniture", "Sofas"];

const products = [
  {
    id: 1,
    name: "Premium Plywood Bed",
    category: "Plywood Furniture",
    type: "Beds",
    image: plywood1,
    desc: "Premium plywood bed with elegant finish and durability.",
  },
  {
    id: 2,
    name: "Modern Plywood Sofa",
    category: "Plywood Furniture",
    type: "Beds",
    image: plywood2,
    desc: "Comfortable and stylish plywood sofa design.",
  },
  {
    id: 3,
    name: "Plywood Kabat",
    category: "Plywood Furniture",
    type: "Beds",
    image: plywood3,
    desc: "Spacious storage solution with premium plywood construction.",
  },
  {
    id: 4,
    name: "Designer Plywood Bed",
    category: "Plywood Furniture",
    type: "Beds",
    image: plywood4,
    desc: "Modern bedroom furniture crafted from quality plywood.",
  },
  {
    id: 5,
    name: "Luxury Plywood Bed",
    category: "Plywood Furniture",
    type: "Beds",
    image: plywood5,
    desc: "Elegant sofa design for homes and offices.",
  },
  {
    id: 6,
    name: "Premium Bed",
    category: "Plywood Furniture",
    type: "Beds",
    image: plywood6,
    desc: "Durable wardrobe with premium finish.",
  },

  {
    id: 7,
    name: "PLB Bed Design",
    category: "PLB Furniture",
    type: "Beds",
    image: plb1,
    desc: "Affordable and durable PLB bed solution.",
  },
  {
    id: 8,
    name: "PLB Bed Design",
    category: "PLB Furniture",
    type: "Beds",
    image: plb2,
    desc: "Modern PLB sofa crafted for comfort.",
  },
  {
    id: 9,
    name: "PLB Bed",
    category: "PLB Furniture",
    type: "Beds",
    image: plb3,
    desc: "Functional storage furniture with elegant finish.",
  },
  {
    id: 10,
    name: "PLB Bedroom Furniture",
    category: "PLB Furniture",
    type: "Beds",
    image: plb4,
    desc: "Modern PLB furniture for bedrooms.",
  },
  {
    id: 11,
    name: "PLB Custom Bed",
    category: "PLB Furniture",
    type: "Beds",
    image: plb5,
    desc: "Custom furniture solutions using PLB material.",
  },
  {
    id: 13,
    name: "Luxury King Size Bed",
    category: "Plywood Furniture",
    type: "Beds",
    image: bed1,
    desc: "Premium king size bed with elegant modern design.",
  },

  {
    id: 14,
    name: "Modern Corner Sofa",
    category: "Plywood Furniture",
    type: "Sofas",
    image: sofa1,
    desc: "Stylish corner sofa designed for modern living spaces.",
  },
  {
    id: 15,
    name: "Premium Family Sofa",
    category: "PLB Furniture",
    type: "Sofas",
    image: sofa2,
    desc: "Comfortable family sofa with premium finishing.",
  },
  {
    id: 16,
    name: "Luxury Designer Sofa",
    category: "Plywood Furniture",
    type: "Sofas",
    image: sofa3,
    desc: "Elegant designer sofa crafted for comfort and style.",
  },

  {
    id: 17,
    name: "Sliding Door Kabat",
    category: "Plywood Furniture",
    type: "Kabats",
    image: kabat1,
    desc: "Modern sliding wardrobe with spacious storage.",
  },
  {
    id: 18,
    name: "Premium Storage Kabat",
    category: "PLB Furniture",
    type: "Kabats",
    image: kabat2,
    desc: "Durable storage cabinet with elegant finish.",
  },
  {
    id: 19,
    name: "Luxury Wooden Wardrobe",
    category: "Plywood Furniture",
    type: "Kabats",
    image: kabat3,
    desc: "Premium wardrobe designed for modern interiors.",
  },
  {
    id: 20,
    name: "Aesthetic L-Shaped Sofa",
    category: "Plywood Furniture",
    type: "Sofas",
    image: sofa4,
    desc: "Contemporary L-shaped sofa with premium comfort and elegant aesthetics for modern interiors.",
  },
  {
    id: 21,
    name: "Modern Luxury Sofa",
    category: "PLB Furniture",
    type: "Sofas",
    image: sofa5,
    desc: "Sophisticated luxury sofa featuring refined craftsmanship and exceptional seating comfort.",
  },
  {
    id: 22,
    name: "Premium Designer Sofa",
    category: "Plywood Furniture",
    type: "Sofas",
    image: sofa6,
    desc: "Elegant designer sofa crafted to elevate living spaces with style, comfort, and durability.",
  },         
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    if (activeCategory === "All") {
      return true;
    }

    if (
      activeCategory === "PLB Furniture" ||
      activeCategory === "Plywood Furniture"
    ) {
      return product.category === activeCategory;
    }

    if (
      activeCategory === "Beds" ||
      activeCategory === "Sofas" ||
      activeCategory === "Kabats"
    ) {
      return product.type === activeCategory;
    }

    return true;
  });

  return (
    <section id="products" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />

            <div className="max-w-2xl mx-auto mb-8">
              {activeCategory === "PLB Furniture" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-charcoal/70"
                >
                  Furniture manufactured using high-quality PLB material
                  offering durability, affordability, and modern aesthetics.
                </motion.p>
              )}
              {activeCategory === "Plywood Furniture" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-charcoal/70"
                >
                  Premium plywood furniture designed for strength, longevity,
                  and superior finishing.
                </motion.p>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                    activeCategory === cat
                      ? "text-white"
                      : "text-primary hover:bg-primary/5",
                  )}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="product-tab-bg"
                      className="absolute inset-0 bg-primary rounded-full z-0"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-black/5 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-secondary">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1 rounded text-primary tracking-wide">
                    {product.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-semibold px-3 py-1 rounded tracking-wide">
                    {product.category.split(" ")[0]}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-6 flex-1">
                    {product.desc}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center w-full py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    Inquire Now
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
