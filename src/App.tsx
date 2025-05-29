// import GridComponent from "./components/GridComponent";

import "./App.css";
import "./lenis.css";


import HeroScection from "./section/hero/HeroScection.tsx";
import Concept from "./section/concept/Concept.tsx";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";


// import Scroll from "./components/scroll/scroll.tsx";
// import Decouvert from "./section/decouvert/Decouvert.tsx";
// import Footer from "./section/footer/Footer.tsx";

// import Store from "./section/store/Store.tsx";




function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <>
      <div className="min-h-screen max-w-screen-3xl mx-auto  scroll-smooth flex flex-col gap-y-4">
 <HeroScection />
      <Concept />
      {/* <Store />
      <Decouvert />
      <Scroll />
      <Footer /> */}

      </div>
     
    </>
  );
}

export default App;
