/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import React icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navlinks = (
    <>
      <li className="w-full text-center">
        <a className="block w-full">Home</a>
      </li>
      <li className="w-full text-center">
        <a className="block w-full">About</a>
      </li>
      <li className="w-full text-center">
        <a className="block w-full">Service</a>
      </li>
      <li className="w-full text-center">
        <a className="block w-full">Works</a>
      </li>
    </>
  );

  return (
    <nav className="navbar max-w-7xl mx-auto bg-black flex justify-between items-center w-full">
      <div className="flex justify-between items-center w-full md:hidden">
        <div className="flex items-center">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </div>

            {isMenuOpen && (
              <ul
                tabIndex={0}
                className={`fixed inset-0 flex justify-center items-center gap-3 z-50 flex-col p-2 shadow left-0 top-[60px] h-[35%] w-full bg-black`}
              >
                {navlinks}
              </ul>
            )}
          </div>
          <a className="text-xl font-bold">Abu Saiyed</a>
        </div>
        <button
          className="bg-[linear-gradient(#2E2E2E,#1E1E1E)] group inline-flex transition-all duration-300 overflow-visible p-2 rounded-full"
        >
          <div
            className="w-full h-full bg-[linear-gradient(to_top,#333,#1E1E1E)] overflow-hidden shadow-[0_0_4px_rgba(255,183,77,0.6)] p-1 rounded-full hover:shadow-[0_0_8px_rgba(255,183,77,0.9)] duration-300"
          >
            <div
              className="w-full h-full text-lg justify-center text-[#F4F4F9] bg-[linear-gradient(#3A3A3A,#1E1E1E)] duration-300 items-center font-medium inline-flex px-3 rounded-full group-hover:text-primary"
            >
              <span className="">Hire me</span>
            </div>
          </div>
        </button>
      </div>

      {/* Navbar for tablets and larger devices */}
      <div className="hidden md:flex justify-between items-center w-full">
        <a className="text-xl font-bold">Abu Saiyed</a>
        <ul className="flex space-x-4">{navlinks}</ul>
        <button
          className="bg-[linear-gradient(#2E2E2E,#1E1E1E)] group inline-flex transition-all duration-300 overflow-visible p-2 rounded-full"
        >
          <div
            className="w-full h-full bg-[linear-gradient(to_top,#333,#1E1E1E)] overflow-hidden shadow-[0_0_4px_rgba(255,183,77,0.6)] p-1 rounded-full hover:shadow-[0_0_8px_rgba(255,183,77,0.9)] duration-300"
          >
            <div
              className="w-full h-full text-lg justify-center text-[#F4F4F9] bg-[linear-gradient(#3A3A3A,#1E1E1E)] duration-300 items-center font-medium inline-flex px-3 rounded-full group-hover:text-[#d39e4f]"
            >
              <span className="">Hire me</span>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
