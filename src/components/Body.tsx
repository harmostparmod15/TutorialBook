import Feature from "./Feature";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const Body = () => {
  return (
    <div className="font-jakarta overflow-hidden">
      <Hero />

      <Feature />

      <Testimonials />
    </div>
  );
};

export default Body;
