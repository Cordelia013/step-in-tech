function NavBar() {
  return (
    <>
      <nav className="w-full sticky">
        <div className="flex justify-between desktop:text-xl laptop:text-base font-medium ">
          <h2>LOUIS VUITTON</h2>
          <ul className="flex desktop:gap-10 desktop:flex-row  tablet:flex-row tablet:gap-4 mobile:gap-2  mobile:flex-col ">
            <li className="">Concept</li>
            <li className="">Popup store</li>
            <li className="">Collection</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar