// import GridComponent from "./components/GridComponent";

import "./App.css";
import Scroll from "./components/scroll/scroll.tsx";

import Concept from "./section/concept/Concept.tsx";
import Decouvert from "./section/decouvert/Decouvert.tsx";
import Footer from "./section/footer/Footer.tsx";
import HeroScection from "./section/hero/HeroScection.tsx";
import Store from "./section/store/Store.tsx";

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
