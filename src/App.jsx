import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar";
import { partnersLogo } from "./data/partners.js";
import Slider from "./components/Slider";
import RoadMapSection from "./components/RoadMapSection";
import FeaturesSection from "./components/FeatureSection.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer.jsx"

function App() {
  

  return (
    <>
    <div className="w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none">
      <div className="absolute insert-0 bg-[url('/grid.svg')]
      opacity-25"></div>
      <img src="/mesh.svg" 
      className="opacity-15 absolute bottom-1 h-[600px] z-10"/>
      <div className="bg-gradient-to-c from-transparent via-transparent
      to-white absolute insert-0 z-20"></div>
    </div>
    <div className="relative z-20">
      <Navbar />
      <div className="container mx-auto">
        <HeroSection />
        <Slider images={partnersLogo}/>
        <RoadMapSection />
        <FeaturesSection />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </div>
    
   
    </>
  )
}

export default App
