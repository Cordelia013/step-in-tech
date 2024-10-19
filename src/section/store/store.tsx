import Carousel from "../../components/carousel/Carousel";

function Store() {
  return (
    <>
      <div
        id="store"
        className="flex flex-col min-h-144 overflow-hidden font-futura bg-black text-white"
      >
        <Carousel />
        <div className="text-2xl flex justify-center relative top-64 left-10 text-[#E50E2E] font-bold uppercase ">
          lv <br /> x <br /> adobe
        </div>
        <img
          src="/public/assets/POPUP_ANIM.gif"
          alt="naimationGif"
          className=" relative z-30"
        />

        <img
          src="/public/assets/Rectangle 3.jpg"
          alt="rect"
          className=" relative -top-16"
        />
      </div>
    </>
  );
}

export default Store;
