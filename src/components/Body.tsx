import Faq from "./Faq";
import Feature from "./Feature";
import Footer from "./Footer";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const Body = () => {
  return (
    <div className="font-jakarta overflow-hidden">
      <Hero />

      <Feature />

      <Testimonials />

      <Faq />

      <Footer />
    </div>
  );
};

export default Body;
