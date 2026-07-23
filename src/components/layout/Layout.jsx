import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Skills from "../../sections/Skills/Skills";
import Experience from "../../sections/Experience/Experience";
import Projects from "../../sections/Projects/Projects";
import Certifications from "../../sections/Certifications/Certifications";
import Education from "../../sections/Education/Education";
import Contact from "../../sections/Contact/Contact";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="main-content">

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Certifications />

        <Education />

        <Contact />

      </main>
      <Footer />
    </>
  );
};

export default Layout;