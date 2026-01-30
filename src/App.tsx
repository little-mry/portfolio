import Container from "./components/global/Container";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import ThemeToggle from "./components/global/ThemeToggle";

import Home from "./sections/Home";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import CV from "./sections/CV";
import Contact from "./sections/Contact";
import Skillset from "./sections/Skillset";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-sky-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-400">
      
      <Container as="header" className="pt-6 mt-10 md:mt-5">
        <Header />
      </Container>

      <Container as="main" className="flex-1 py-4">
        <section id="home" className="scroll-mt-32">
          <Home />
        </section>


        <section id="skillset" className="scroll-mt-32 mt-16">
          <Skillset />
        </section>
        <section id="about" className="scroll-mt-32 mt-16">
          <About />
        </section>

        <section id="portfolio" className="scroll-mt-32 mt-16">
          <Portfolio />
        </section>

        <section id="cv" className="scroll-mt-32 mt-16">
          <CV />
        </section>

        <section id="contact" className="scroll-mt-32 mt-16">
          <Contact />
        </section>
      </Container>

      <Container as="footer" className="py-6">
        <Footer />
      </Container>
    </div>
  );
}

export default App;
