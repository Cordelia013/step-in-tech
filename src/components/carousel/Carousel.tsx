import { useEffect, useRef, useState } from "react";

function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState([
    { type: "text", content: "INNOVATION" },
    { type: "image", src: "/assets/X LV 2 1heroHeader.png" },
    { type: "text", content: "Créativité" },
    { type: "image", src: "/assets/X LV 2 1heroHeader.png" },
    { type: "text", content: "résonnance" },
    { type: "image", src: "/assets/X LV 2 1heroHeader.png" },
    { type: "text", content: "fantaisie" },
    { type: "image", src: "/assets/X LV 2 1heroHeader.png" },
    { type: "text", content: "vibrance" },
    { type: "image", src: "/assets/X LV 2 1heroHeader.png" },
    { type: "text", content: "iconique" },
    { type: "image", src: "/assets/X LV 2 1heroHeader.png" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstItem = carouselRef.current.firstChild as HTMLElement;
        const itemWidth = firstItem.offsetWidth + 40; // 40px pour le gap

        carouselRef.current.style.transition = "transform 0.5s ease-in-out";
        carouselRef.current.style.transform = `translateX(${itemWidth}px)`;

        setTimeout(() => {
          carouselRef.current!.style.transition = "none";
          carouselRef.current!.style.transform = "translateX(0)";
          setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
        }, 500);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={carouselRef}
        className=" mb-12 mt-28 flex items-center gap-10 transition-transform duration-500 ease-in-out"
      >
        {items.map((item, index) =>
          item.type === "text" ? (
            <div
              key={index}
              className="px-[30px] py-2.5 rounded-[25px] border border-white flex-shrink-0"
            >
              <div className="text-white text-sm font-medium font-['Futura'] uppercase">
                {item.content}
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

export default Carousel;
