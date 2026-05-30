export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-accent mb-4">
              Kanaiya Furniture
            </h2>
            <p className="text-white/60 mb-6 max-w-sm">
              Crafting Quality Furniture Since 1991. Specializing in premium
              wooden furniture, custom solutions, sofas, beds, and kabats.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Home",
                "Story",
                "Products",
                "Gallery",
                "Custom Furniture",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link === "Story" ? "story" : link === "Custom Furniture" ? "custom" : link.toLowerCase()}`}
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {[
                "Beds",
                "Sofas",
                "Kabats",
                "PLB Furniture",
                "Plywood Furniture",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#products"
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-white/60">
              <li>
                <a
                  href="tel:+916351133017"
                  className="hover:text-accent transition-colors"
                >
                  +91 6351 133 017
                </a>
              </li>
              <li>Rajkot, Gujarat, India</li>
              <li className="mt-4 pt-4 border-t border-white/10">
                <a
                  href="https://maps.app.goo.gl/RHuym7rahkCLBTCv5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white transition-colors underline object-offset-4"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm font-light">
            © 2026 Kanaiya Furniture. All Rights Reserved.
          </p>

          <a
            href="https://srtechsolution.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full border border-accent/30 bg-accent/5 px-5 py-2.5 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="relative flex items-center gap-2">
              <span className="text-white/50 text-xs uppercase tracking-widest">
                Designed & Developed By
              </span>

              <span className="font-semibold text-accent group-hover:text-white transition-colors duration-300">
                SR Tech Solution
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5h5m0 0v5m0-5L10 14"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
