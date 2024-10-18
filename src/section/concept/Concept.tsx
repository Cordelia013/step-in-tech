

function Concept() {
  return (
    <div className=" h-[810px] overflow-hidden font-futura bg-black  text-white ">
      <div className="m-10">
        <p className="text- w-2/12 z-20 absolute">
          A la croisée des industries, Louis Vuitton et Adobe s’associent pour
          créer des produits plus innovants et plus créatifs que jamais.
        </p>
        <div className=" grid grid-cols-6 w-full ">
          <div className=" "> </div>

          <img
            src="/src/assets/Rectangle 4.jpg"
            alt=""
            className="h-[45rem] col-span-1"
          />
          <div className=" flex w-[438px] font-medium leading-none mr-11 -rotate-90 text-red-400  text-[180px] laptop:text-[130px] relative top-36  left-28">
            STEP
            <video
              src="/src/assets/Anim logo LV x Adobe continue 2.mp4"
              autoPlay
              loop
              muted
              className="w-[150px] h-[150px] rounded-full object-cover ml-20"
            ></video>
          </div>
          <div className="w-[838px] font-medium origin-top-left -rotate-90 text-red-400 text-[160px] relative laptop:text-[130px] top-[36rem] laptop:top-128">
            IN TECH
          </div>
          {/* <div className="col-span-2 flex flex-col -rotate-90 relati      ve left-44 text-7xl">
            IN TECH
          </div> */}

          <img
            src="/src/assets/Rectangle 3.jpg"
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
