import Hero from "../components/home/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Services from "../components/services/Services";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
function HomePage() {
  return (
    <>
      <Hero />
        <About />
         <Skills />
         <Projects />
         <Services />
          <Testimonials />
          <Contact />
    </>
  );
}

export default HomePage;
