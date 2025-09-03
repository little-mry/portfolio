import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import CV from "./pages/CV";
import Contact from "./pages/Contact";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} errorElement={<div>Något gick fel</div>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />

           <Route path="*" element={<div>404 - Sidan hittas inte</div>} /> 
        </Route>
    )
)