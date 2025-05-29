// import GridComponent from "./components/GridComponent";

import "./App.css";

import HeroScection from "./section/hero/HeroScection.tsx";
// import Scroll from "./components/scroll/scroll.tsx";

// import Concept from "./section/concept/Concept.tsx";
// import Decouvert from "./section/decouvert/Decouvert.tsx";
// import Footer from "./section/footer/Footer.tsx";

// import Store from "./section/store/Store.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen max-w-screen-3xl mx-auto px-4 scroll-smooth flex flex-col gap-y-4">
 <HeroScection />
      {/* <Concept />
      <Store />
      <Decouvert />
      <Scroll />
      <Footer /> */}

      </div>
     
    </>
  );
}

export default App;
