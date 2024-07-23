import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaInstagram } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

function Navbar() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const displayMenu = () => {
    setIsVisible(true);
  };

  const hideMenu = () => {
    setIsVisible(false);
  };

  return (
    <>
      <nav className="navbar-desktop flex flex-col h-full w-[20%] bg-slate-600 max-md:hidden space-y-9 p-6 items-center">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/galerie">
          <button type="button">Galerie</button>
        </NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
        <NavLink to="https://www.instagram.com/madamebarbouille?igsh=bGF3ZzZncWhkNnoy">
          <FaInstagram size={35} />
        </NavLink>
      </nav>
      <nav className="navbar-mobile flex flex-col absolute top-4 left-4 md:hidden">
        <button type="button" onClick={displayMenu} className="">
          <MdMenu size={40} />
        </button>
      </nav>

      {isVisible && (
        <div className="sheet flex flex-col absolute top-0 left-0 h-screen w-screen bg-slate-300 ease-in-out z-10">
          <div className="sheet-header flex bg-slate-500 h-12 items-center justify-center">
            <p className="text-xl">Menu</p>
            <button type="button" onClick={hideMenu} className="absolute top-3 right-3">
              <IoClose size={25} />
            </button>
          </div>
          <div className="sheet-content flex flex-col items-center space-y-9 p-6 bg-slate-600 h-full">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/galerie">Galerie</NavLink>
            <NavLink to="/a-propos">À propos</NavLink>
            <NavLink to="https://www.instagram.com/madamebarbouille?igsh=bGF3ZzZncWhkNnoy">
              <FaInstagram size={35} />
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
