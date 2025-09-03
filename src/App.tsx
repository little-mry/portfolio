import { Outlet } from "react-router-dom";
import Container from "./components/global/Container";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import ThemeToggle from "./components/global/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-sky-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-400">
      <ThemeToggle className="fixed top-2 right-3 z-50" />

      <Container as="header" className="py-6  mt-10 md:mt-5">
        <Header />
      </Container>

      <Container as="main" className="flex-1 py-4">
        <Outlet />
      </Container>

      <Container as="footer" className="py-6">
        <Footer />
      </Container>
    </div>
  );
}

export default App;
