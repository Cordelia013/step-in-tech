import Carousel from "../../components/carousel/Carousel";


function Decouvert() {
  return (
    <div className="h-content overflow-hidden font-futura bg-black  text-white ">
      <p className="m-16 text-center ">
        La Maison aura le bonheur de vous accueillir au sein des galeries
        Harrods pour célébrer cette nouvelle collaboration avec vous. Venez
        découvrir, au sein de cette boutique effervescente, la nouvelle
        collection de sacs innovante et déguster de nouvelles pâtisseries
        confectionnés par de célèbres artisans tels que Cyril Lignac et Cédric
        Grolet.
      </p>
      <div className="relative">
        <div className="flex justify-between grayscale mt-36">
          <img
            src="/assets/assietteVuitton.png"
            alt=""
            className=" w-96 laptop:w-64 bg-black/60 origin-top-left rotate-[5.53deg]"
          />
          <img
            src="/assets/espace vuitton.png"
            alt=""
            className=" w-96 laptop:w-64 bg-black/60 origin-top-left rotate-[-4.98deg]"
          />
          <img
            src="/assets/table.png"
            alt=""
            className=" w-96 laptop:w-64 bg-black/60 origin-top-left rotate-[5.51deg]"
          />
        </div>
        <div className="flex relative justify-center max-h-screen ">
          <h2 className=" z-10 text-4xl w-8/12 text-center uppercase">
            DÉCOUVREZ cette COLLABORATION exclusive à partir du 18 nov.
          </h2>
        </div>
        <div className="flex justify-between">
          <p className="w-2/12">
            Galeries Harrods, 14 avenue des Champs élysées, Paris
          </p>
          <p className="">Du 18 au 23 Novembre 2024</p>
        </div>
      </div>
      <Carousel />

      <div className="flex justify-between">
        <p className="w-2/12">
          Souscrivez à la newsletter pour recevoir les dernières actualités de
          la maison
        </p>
        <p className="w-2/12">
          {" "}
          Service client disponible 7j/7, <br /> au +33 9 77 40 40 77, par Whatsapp ou
          par email.
        </p>
      </div>
    </div>
  );
}

export default Decouvert