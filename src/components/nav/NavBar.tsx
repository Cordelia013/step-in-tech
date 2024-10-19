function NavBar() {
  return (
    <>
      <nav className="w-full animate-tipsy">
        <div className="flex justify-between desktop:text-xl laptop:text-base font-medium ">
          <h2>LOUIS VUITTON</h2>
          <ul className="flex desktop:gap-10 desktop:flex-row  tablet:flex-row tablet:gap-4 mobile:gap-2  mobile:flex-col ">
            <li className="">
              <a href="#concept">Concept</a>
            </li>
            <li className="">
              <a href="#store">Popup store</a>
            </li>
            <li className="">
              <a href="#Collection">Collection</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar