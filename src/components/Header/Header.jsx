import { IoSearch } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <header className="max-w-[1170px] mx-auto px-[15px]">
      {/* Desktop view */}
      <nav className="flex justify-between items-center w-full py-3 max-sm:hidden">
        <h1 className="text-[24px] text-[#666] font-[300]">Shapely Demo</h1>
        <div className="items-center gap-8 hidden md:flex">
          <NavLinks />
          <IoSearch className="cursor-pointer border-none bg-transparent text-[17px] font-bold leading-[53px] opacity-100 text-[#3a52bf]" />
        </div>
      </nav>

      {/* Mobile view */}
      <nav className="max-sm:flex hidden justify-between items-center w-full py-3 relative">
        <h1 className="text-[24px] text-[#666] font-[300]">Shapely Demo</h1>
        {toggleDropdown ? (
          <IoMdClose
            onClick={() => setToggleDropdown((prevState) => !prevState)}
            className="flex md:hidden cursor-pointer border-none bg-transparent text-[17px] font-bold leading-[53px] opacity-100 text-[#3a52bf]"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => setToggleDropdown((prevState) => !prevState)}
            className="flex md:hidden cursor-pointer border-none bg-transparent text-[17px] font-bold leading-[53px] opacity-100 text-[#3a52bf]"
          />
        )}
        {toggleDropdown && (
          <div className="dropdown">
            <NavLinks setToggleDropdown={setToggleDropdown} />
            {/* <IoSearch className="cursor-pointer border-none bg-transparent text-[17px] font-bold leading-[53px] opacity-100 text-[#3a52bf]" /> */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
