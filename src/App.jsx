import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HeroPage from "./components/HomePage/HeroPage";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";

const App = () => {
  return (
    <div className="text-white font-kalam">
      <Navbar />
      <HeroPage />
      <Section2 />
      <Menu />
      <Contact />
      <Section3 />
      <Footer />
    </div>
  );
};

export default App;
