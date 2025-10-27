import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Portfolio from '@/components/Portfolio';
import OurClients from '@/components/OurClients';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BookCall from '@/components/BookCall';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1119]">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Portfolio />
      <OurClients />
      <Testimonials />
      <FAQ />
      <BookCall />
      <Contact />
      <Footer />
    </div>
  );
}
