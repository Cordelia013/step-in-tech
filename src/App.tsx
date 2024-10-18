// import GridComponent from "./components/GridComponent";

import "./App.css";

import Concept from "./section/concept/concept";
import Decouvert from "./section/decouvert/decouvert";
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
     <Footer />
    </>
  );
}

export default App;
