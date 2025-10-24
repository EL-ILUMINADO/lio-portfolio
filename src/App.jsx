import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Preloader from "./utils/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Preloader */}
      <Preloader onFinish={() => setIsLoading(false)} />

      {/* Animate content fade-in */}
      <AnimatePresence mode="wait">
        {!isLoading && (
          <Motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <main>
              <Navbar />
              <HeroSection />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </main>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
