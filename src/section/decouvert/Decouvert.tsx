import Carousel1 from "../../components/carousel/Carousel1";
import EffectText from "../../components/effectText/effectText";

function Decouvert() {
  return (
    <div
      id="collection"
      className="h-content overflow-hidden text-xl bg-black  text-white "
    >
      <p className="m-16 ml-48 text-center w-9/12 ">
        La Maison aura le bonheur de vous accueillir au sein des galeries
        Harrods pour célébrer cette nouvelle collaboration avec vous. Venez
        découvrir, au sein de cette boutique effervescente, la nouvelle
        collection de sacs innovante et déguster de nouvelles pâtisseries
        confectionnés par de célèbres artisans tels que Cyril Lignac et Cédric
        Grolet.
      </p>
      <div className="relative ">
        <div className="flex justify-between grayscale mt-36">
          <img
            src="/assets/assietteVuitton.png"
            alt=""
            className=" w-[423.02px] h-[529.82px] opacity-55 bg-black origin-top-left rotate-[5.53deg]"
          />
          <img
            src="/assets/espace vuitton.png"
            alt=""
            className="w-[425.27px] h-[531.99px] opacity-55 bg-black/60 origin-top-left rotate-[-4.98deg]"
          />
          <img
            src="/assets/table.png"
            alt=""
            className=" w-[434.87px] h-[534.96px] opacity-55 ml-20 bg-black/60 origin-top-left rotate-[5.51deg]"
          />
        </div>

        <EffectText />
        <div className="flex justify-between mb-40 mt-20 mx-12">
          <p className="w-2/12">
            Galeries Harrods, 14 avenue des Champs élysées, Paris
          </p>
          <p className="">Du 18 au 23 Novembre 2024</p>
        </div>
      </div>

      <Carousel1 />

      <div className="flex justify-between">
        <p className="w-3/12 px-12">
          <span className="underline">Souscrivez à la newsletter</span> pour
          recevoir les dernières actualités de la maison
        </p>

        <p className="w-3/12 text-base">
          Service client disponible 7j/7, <br /> au +33 9 77 40 40 77, par
          Whatsapp ou par email.
        </p>
      </div>
    </div>
  );
}

export default Decouvert;
