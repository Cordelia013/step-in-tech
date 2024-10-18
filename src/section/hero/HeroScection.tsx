// import Button from "../../ui-component/Button";

import NavBar from "../../components/nav/NavBar";

function HeroScection() {
  return (
    <>
      <div className="h-screen overflow-hidden mx-10 mt-5 font-futura ">
        <NavBar />

        <div className=" relative flex flex-col justify-center items-center destop:text-8xl laptop:text-5xl mobile:text-4xl ">
          <h1 className="relative laptop:top- tablet:top-44 mobile:top-24 -z-10">
            LOUIS VUITTON
          </h1>
          <img
            src="/src/assets/X LV 2 1heroHeader.png"
            alt="croix"
            className="ml-10 h-128"
          />
          <h1 className="relative laptop:bottom-40 tablet:bottom-36  mobile:bottom-16  -z-10">
            ADOBE
          </h1>
        </div>
      </div>
    </>
  );
}

export default HeroScection;
