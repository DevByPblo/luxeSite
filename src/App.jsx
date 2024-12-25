import NavHeroContainer from "./components/HeroNavContainer/NavHeroContainer";
import PriceSection from "./components/PriceSection/PriceSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div id="Home">
        <NavHeroContainer />
      </div>
      <div id="ServicesSection">
        <ServicesSection />
      </div>
      <div id="FAQ">
        <FAQ />
      </div>
      <div id="PriceSection">
        <PriceSection />
      </div>
      <div id="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
