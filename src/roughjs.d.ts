declare module "roughjs/bundled/rough.esm" {
  // Déclarez ici les types dont vous avez besoin
  export function svg(element: SVGSVGElement): {
    ellipse: (
      x: number,
      y: number,
      width: number,
      height: number,
      options?: Record<string, unknown>
    ) => SVGElement;
    // Ajoutez d'autres méthodes selon vos besoins
  };
}
