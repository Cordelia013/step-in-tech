function Concept() {
  return (
    <div
      id="concept"
      className=" h-[980px] overflow-hidden font-futura bg-black  text-white "
    >
      <div className="m-10 my-40">
        <p className="text-2xl px-14 z-20 absolute">
          A la croisée des industries, <br /> Louis Vuitton et Adobe <br />
          s’associent pour créer <br />
          des produits plus innovants <br /> et plus créatifs que jamais.
        </p>
        <div className=" grid grid-cols-6 w-full ">
          <div className="w-24 "> </div>

          <img
            src="/assets/Rectangle 4.jpg"
            alt=""
            className="h-[45rem] col-span-1 "
          />

          <div className=" flex w-[438px] align-baseline font-medium leading-none mr-11 -rotate-90 desktop:text-[200px] laptop:text-[130px] relative top-48  left-28">
            <div className="flex align-baseline mt-12"> STEP</div>
            <video
              src="/assets/Anim logo LV x Adobe continue 2.mp4"
              autoPlay
              loop
              muted
              className="w-[215px] h-[215px] rounded-full object-cover mt-14 ml-20"
            ></video>
          </div>
          <div className="w-[838px] mt-10 font-medium origin-top-left -rotate-90 desktop:text-[200px] relative laptop:text-[130px] laptop:top-144">
            IN TECH
          </div>
          {/* <div className="col-span-2 flex flex-col -rotate-90 relati      ve left-44 text-7xl">
            IN TECH
          </div> */}

          <img
            src="/assets/Rectangle 3.jpg"
            alt=""
            sizes="838px"
            className="h-[45rem] col-span-2 "
          />
        </div>
      </div>
    </div>
  );
}

export default Concept;
