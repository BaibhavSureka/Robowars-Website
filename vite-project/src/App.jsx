import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Publications from "./components/Publications";
import Categories from "./components/Categories";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Timeline />
      <Publications />
      <Categories />
      <FAQ />
      <Sponsors />
      <Contact />
    </>
  );
}

export default App;
