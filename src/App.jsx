import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Intro from "./components/Intro"; // 🔥 TAMBAH INI
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500); // durasi intro
  }, []);

  return (
    <>
      {loading && <Intro />}

      {!loading && (
        <div className="bg-slate-900">
          <Cursor />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;