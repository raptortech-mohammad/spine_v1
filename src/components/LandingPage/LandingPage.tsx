import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Impact from "./Impact/Impact";
import OurProcess from "./OurProcess/OurProcess";
import Services from "./Services/Services";

const LandingPage: React.FC = () => {
  return (
    <>
      <main className="min-h-screen mt-19s">
        <Hero />
        <Services />
        <OurProcess />
        <About />
        <Impact />
        <Contact />
      </main>
    </>
  );
};

export default LandingPage;
