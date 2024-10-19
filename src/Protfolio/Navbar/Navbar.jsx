/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from './navbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [active, setActive] = useState("");

  return (
    <nav className="navbar roboto max-w-7xl mx-auto bg-black flex justify-between items-center w-full">
      <div className="flex-col justify-center items-start w-full md:hidden">
        <div className="flex justify-between w-full items-center">
          {/* Mobile Dropdown */}
          <div className="flex justify-center items-center">
            <div className="dropdown ">
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
            </div>
            <a href='/' className="text-xl font-bold text-gray-200">Abu Saiyed</a>
          </div>
          <button
            className="bg-[linear-gradient(#2E2E2E,#1E1E1E)] group inline-flex transition-all duration-300 overflow-visible p-2 rounded-full"
          >
            <Link to={"/contact"}
              className="w-full h-full bg-[linear-gradient(to_top,#333,#1E1E1E)] overflow-hidden shadow-[0_0_4px_rgba(255,183,77,0.6)] p-1 rounded-full hover:shadow-[0_0_8px_rgba(255,183,77,0.9)] duration-300"
            >
              <div
                className="w-full h-full text-lg justify-center text-[#F4F4F9] bg-[linear-gradient(#3A3A3A,#1E1E1E)] duration-300 items-center font-medium inline-flex px-3 rounded-full group-hover:text-primary"
              >
                <span className="">Hire me</span>
              </div>
            </Link>
          </button>
        </div>
        {isMenuOpen && (
          <ul className='list-none flex-col z-30 justify-center bg-secondary p-5 rounded-xl items-center'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-white-300 hover:text-primary relative group text-[20px] font-medium cursor-pointer mb-3"
                onClick={() => {
                  setActive(nav.title);
                  setIsMenuOpen(false);
                }}
              >
                <Link to={`/${nav.id}`} className={`${active === nav.title ? "text-primary" : "text-white-300"}`}>{nav.title}</Link>
                <span className={`${active === nav.title ? "mt-[3px] absolute left-0 bottom-0 h-[4px] z-10 rounded-full bg-primary w-[65%]"
                  : "mt-[3px] w-0 absolute left-0 bottom-0 h-[4px] z-10 rounded-full bg-primary transition-all duration-300 group-hover:w-full"
                  }`}></span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Navbar for tablets and larger devices */}
      <div className="hidden md:flex justify-between items-center w-full">
        <a href='/' className="text-2xl font-bold text-gray-200">Abu Saiyed</a>
        <ul className='list-none flex justify-center items-center gap-5'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-white-300 hover:text-primary relative group text-[20px] font-medium cursor-pointer"
              onClick={() => setActive(nav.title)}
            >

              <Link to={`/${nav.id}`} className={`${active === nav.title ? "text-primary" : "text-white-300"}`}>{nav.title}</Link>
              <span className={`${active === nav.title ? "mt-[3px] absolute left-0 bottom-0 h-[4px] z-10 rounded-full bg-primary w-full"
                : "mt-[3px] w-0 absolute left-0 bottom-0 h-[4px] z-10 rounded-full bg-primary transition-all duration-300 group-hover:w-full"
                }`}></span>
            </li>
          ))}
        </ul>
        <button
          className="bg-[linear-gradient(#2E2E2E,#1E1E1E)] group inline-flex transition-all duration-300 overflow-visible p-2 rounded-full"
        >
          <Link to={"/contact"}
            className="w-full h-full bg-[linear-gradient(to_top,#333,#1E1E1E)] overflow-hidden shadow-[0_0_4px_rgba(255,183,77,0.6)] p-1 rounded-full hover:shadow-[0_0_8px_rgba(255,183,77,0.9)] duration-300"
          >
            <div
              className="w-full h-full text-lg justify-center text-[#F4F4F9] bg-[linear-gradient(#3A3A3A,#1E1E1E)] duration-300 items-center font-medium inline-flex px-3 rounded-full group-hover:text-primary"
            >
              <span className="">Hire me</span>
            </div>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
