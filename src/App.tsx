import Container from "./components/global/Container";
import Header from "./components/global/Header";

import Home from "./sections/Home";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Skillset from "./sections/Skillset";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-zinc-900 bg-zinc-100 dark:bg-zinc-900 dark:text-stone-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-zinc-900 focus:rounded"
      >
        Hoppa till innehåll
      </a>

      <Container as="header" className="w-full pt-4 sticky top-0 z-20 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm">
        <Header />
      </Container>

      <Container as="main" id="main-content" className="flex-1">
        <section id="home" className="scroll-mt-32">
          <Home />
        </section>


        <section id="skillset" className="scroll-mt-16 mt-16 md:mt-32">
          <Skillset />
        </section>

        <section id="portfolio" className="scroll-mt-16 mt-16">
          <Portfolio />
        </section>
        <section id="about" className="scroll-mt-16 mt-16">
          <About />
        </section>

       {/*  <section id="cv" className="scroll-mt-8 mt-16">
          <CV />
        </section> */}

        <section id="contact" className="scroll-mt-16 mt-16">
          <Contact />
        </section>
      </Container>

    </div>
  );
}

export default App;
