import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    const message = `Hello Kanaiya Furniture,%0A%0AI would like to inquire about your furniture products.%0A%0A*Name*: ${formData.name}%0A*Phone*: ${formData.phone}%0A*City*: ${formData.city}%0A*Interested Product*: ${formData.product}%0A*Message*: ${formData.message}%0A%0APlease contact me regarding my inquiry.`;

    // Redirect to WhatsApp
    window.open(`https://wa.me/916351133017?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Let's Build Something Beautiful Together
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Get in touch with us for product inquiries, custom requirements,
              or corporate orders.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl overflow-hidden shadow-xl shadow-primary/5 border border-primary/5">
          <div className="w-full lg:w-2/5 bg-primary text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Contact Information
              </h3>
              <p className="text-white/70 mb-12">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <a
                      href="tel:+916351133017"
                      className="text-white/80 hover:text-white transition-colors block mt-1"
                    >
                      +91 6351 133 017
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg">Business</h4>
                    <p className="text-white/80 mt-1">Kanaiya Furniture</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-accent mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-white/80 mt-1 leading-relaxed">
                      Rajkot, Gujarat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.770893712493!2d70.845458!3d22.172791399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39584b0004139d21%3A0x70ec7430b87ba459!2sKanaiya%20furniture!5e0!3m2!1sen!2sin!4v1780121156356!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="w-full lg:w-3/5 p-8 md:p-12">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-8">
              Send an Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal/80">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded bg-secondary/50 border border-transparent focus:border-accent focus:bg-white focus:outline-none transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal/80">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded bg-secondary/50 border border-transparent focus:border-accent focus:bg-white focus:outline-none transition-colors"
                    placeholder="+91 ...."
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal/80">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded bg-secondary/50 border border-transparent focus:border-accent focus:bg-white focus:outline-none transition-colors"
                    placeholder="Rajkot"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal/80">
                    Product Interest
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded bg-secondary/50 border border-transparent focus:border-accent focus:bg-white focus:outline-none transition-colors text-charcoal"
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                  >
                    <option value="">Select a Product</option>
                    <option value="Beds">Beds</option>
                    <option value="Sofas">Sofas</option>
                    <option value="Kabats">Kabats (Wardrobes)</option>
                    <option value="PLB Furniture">PLB Furniture</option>
                    <option value="Plywood Furniture">Plywood Furniture</option>
                    <option value="Custom Solutions">Custom Solutions</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-charcoal/80">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded bg-secondary/50 border border-transparent focus:border-accent focus:bg-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-lg w-full md:w-auto"
              >
                Send via WhatsApp
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
