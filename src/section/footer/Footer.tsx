function Footer() {
  return (
    <div className="flex p-20 justify-between  overflow-hidden font-futura bg-black  text-white">
      <div className=" flex gap-10">
        <p>Plan du site</p>
        <p>Cookies</p>
        <p>Mention légales</p>
      </div>
      <div className="text-xl text-[#E50E2E] font-bold uppercase ">louis vuitton x adobe</div>
      <div className="flex gap-8 ">
        <img
          src="/assets/rs/instagram.png"
          alt="instaIcon"
          className="w-6 h-6"
        />
        <img
          src="/assets/rs/facebook.png"
          alt="facebookIcon"
          className="w-6 h-6"
        />
        <img
          src="/assets/rs/youtube.png"
          alt="youtubeIcon"
          className="w-6 h-6"
        />
        <img
          src="/assets/rs/linkedin.png"
          alt="linkdinIcon"
          className="w-6 h-6"
        />
        <img
          src="/assets/rs/dribbble.png"
          alt="dribbleIcon"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}

export default Footer;
