// gym-supplements-frontend\app\page.tsx
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import MobileNavbar from "./components/MobileNavbar";
import Sponsors from "./components/Sponsors";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";

import  ProteinProducts from "./components/ProteinProducts" 
export default function Home() {
  return (
    <main>
      <Header />
      <MobileNavbar /> 
      <Hero />  
      <Cards />
      <WhyChooseUs />
      <ProteinProducts />
      <Sponsors />
      <Cta />
      <Footer />
    </main>
  );
}
