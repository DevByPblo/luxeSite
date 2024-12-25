import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import "./NavHeroContainer.css";

function NavHeroContainer() {
  return (
    <div className="nav-hero-container">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default NavHeroContainer;
