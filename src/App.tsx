// import GridComponent from "./components/GridComponent";

import "./App.css";
import Scroll from "./components/scroll/scroll";

import Concept from "./section/concept/Concept";
import Decouvert from "./section/decouvert/Decouvert";
import Footer from "./section/footer/Footer";
import HeroScection from "./section/hero/HeroScection";
import Store from "./section/store/Store";

function App() {
  return (
    <>
      <HeroScection />
      <Concept />
      <Store />
      <Decouvert />
     <Scroll /> 
     <Footer />
    </>
  );
}

export default App;
