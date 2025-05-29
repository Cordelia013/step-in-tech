// import Button from "../../ui-component/Button";

import NavBar from "../../components/nav/NavBar";

function HeroScection() {
  return (
    <>
      <div className="w-full relative min-h-svh ">
        <NavBar />

        <div className=" relative flex flex-col justify-center mb-10 items-center desktop:text-7xl laptop:text-5xl mobile:text-3xl mobile:mt-40">
          <h1 className="">
            LOUIS VUITTON
          </h1>
          <img
            src="/assets/X LV 2 1heroHeader.png"
            alt="croix"
            className="ml-10 h-128 mobile:h-40 laptop:h-80 desktop:h-96"
          />
          <h1 className="relative ">
            ADOBE
          </h1>
        </div>
      </div>
    </>
  );
}

export default HeroScection;
