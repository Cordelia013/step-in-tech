import {  useRef, useState } from "react";

function Carousel1() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [items] = useState([
    {
      type: "text",
      content: "La maison",
      image: { type: "image", src: "/assets/Arrow top right.svg" },
    },
    { type: "image", src: "/assets/X LV 2 1heroHeader.png" },
    {
      type: "text",
      content: "Collection",
      image: { type: "image", src: "/assets/Arrow top right.svg" },
    },
    { type: "image", src: "/assets/X LV 2 1heroHeader.png" },
    {
      type: "text",
      content: "Popup store",
      image: { type: "image", src: "/assets/Arrow top right.svg" },
    },
    { type: "image", src: "/assets/X LV 2 1heroHeader.png" },
    {
      type: "text",
      content: "Faq",
      image: { type: "image", src: "/assets/Arrow top right.svg" },
    },
    // { type: "image", src: "/assets/X LV 2 1heroHeader.png" },
  ]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (carouselRef.current) {
  //       const firstItem = carouselRef.current.firstChild as HTMLElement;
  //       const itemWidth = firstItem.offsetWidth + 69; // 69px pour le gap

  //       carouselRef.current.style.transition = "transform 0.5s ease-in-out";
  //       carouselRef.current.style.transform = `translateX(-${itemWidth}px)`;

  //       setTimeout(() => {
  //         carouselRef.current!.style.transition = "none";
  //         carouselRef.current!.style.transform = "translateX(0)";
  //         setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  //       }, 500);
  //     }
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="overflow-hidden  ">
      <div
        ref={carouselRef}
        className=" mx-12 flex justify-between mb-12 items-center transition-transform duration-500 ease-in-out"
      >
        {items.map((item, index) =>
          item.type === "text" ? (
            <div
              key={index}
              className="px-[30px] py-2.5 rounded-[25px] gap-10 border border-white flex-shrink-0"
            >
              <div className="text-white text-sm font-medium uppercase flex gap-3">
                {item.content} <img src={item.image?.src} />
              </div>
            </div>
          ) : (
            <img
              key={index}
              className="w-28 h-[78px] flex-shrink-0"
              src={item.src}
              alt="LV"
            />
          )
        )}
      </div>
    </div>
  );
}

export default Carousel1;
