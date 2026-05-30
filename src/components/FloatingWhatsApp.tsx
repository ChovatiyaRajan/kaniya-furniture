import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const number = "+916351133017";
  const message = "Hello Kanaiya Furniture, I visited your website and would like to know more about your furniture products.";
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-[#25D366]/30 hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-charcoal px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  );
}
