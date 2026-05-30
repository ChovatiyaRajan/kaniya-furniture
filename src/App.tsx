import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Gallery from './components/Gallery';
import CustomFurniture from './components/CustomFurniture';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <Story />
        <WhyChooseUs />
        <Products />
        <Gallery />
        <CustomFurniture />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
