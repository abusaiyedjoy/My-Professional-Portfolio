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
    <nav className="navbar bg-black flex justify-between items-center w-full">
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
        <button className="btn">Let's Talk</button>
      </div>

      {/* Navbar for tablets and larger devices */}
      <div className="hidden md:flex justify-between items-center w-full">
        <a className="text-xl font-bold">Abu Saiyed</a>
        <ul className="flex space-x-4">{navlinks}</ul>
        <button className="btn">Let's Talk</button>
      </div>
    </nav>
  );
};

export default Navbar;
