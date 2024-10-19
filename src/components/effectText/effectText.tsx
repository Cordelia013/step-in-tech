import React, { useEffect, useRef } from "react";
import rough from "roughjs/bundled/rough.esm";


const EffectText: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const drawHandDrawnOval = () => {
      if (!svgRef.current || !highlightRef.current) return;

      const svgContainer = svgRef.current;
      const highlightText = highlightRef.current;
      const rc = rough.svg(svgContainer);

      const boundingBox = highlightText.getBoundingClientRect();
      const svgRect = svgContainer.getBoundingClientRect();
      const xOffset = boundingBox.left - svgRect.left + 5;
      const yOffset = boundingBox.top - svgRect.top + 5;

      const width = boundingBox.width;
      const height = boundingBox.height;

      svgContainer.innerHTML = "";
      const node = rc.ellipse(
        xOffset + width / 2,
        yOffset + height / 2,
        width * 1.2,
        height * 1.6,
        {
          roughness: 3,
          stroke: "red",
          strokeWidth: 4,
        }
      );

      

      svgContainer.appendChild(node);
    };

    drawHandDrawnOval();
    window.addEventListener("resize", drawHandDrawnOval);

    return () => {
      window.removeEventListener("resize", drawHandDrawnOval);
    };
  }, []);

  return (
    <div className="flex absolute justify-center self-center top-56  ">
      <p className=" z-10 text-6xl w-7/12 text-center uppercase font-bold ">
        Découvrez cette collaboration exclusive à partir du{" "}
        <span className="relative inline-block px-2.5 wave-animation" ref={highlightRef}>
          18 NOV. {/* Ajout de la classe d'animation */}
        </span>
      </p>
      <svg
        ref={svgRef}
        className="absolute z-40 -top-1.25 -left-1.25 w-[calc(100%+10px)] h-[calc(100%+20px)] pointer-events-none"
      ></svg>
    </div>
  );
};

export default EffectText;
