import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionFour from "./components/SectionFour/SectionFour";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
}

export default App;
