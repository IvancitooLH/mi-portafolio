import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Technologies from "./sections/Technologies";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
