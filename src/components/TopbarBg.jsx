import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

export default function Topbar() {
  // const [navbar, setNavbar] = useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
            <h1 className="font-bold text-2xl lg:text-3xl hover:text-indigo-300 whitespace-nowrap">
              JIWON CHOI
            </h1>
          </Link>
          <button
            className="cursor-pointer text-2xl lg:text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:space-x-4 text-xl lg:text-2xl">
            <li className="nav-item">
              <Link to="/work/2">
                <h1 className="font-bold hover:text-indigo-300">
                  Work
                </h1>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/exibition">
                <h1 className="font-bold hover:text-indigo-300">
                  Exibition
                </h1>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/about">
                <h1 className="font-bold hover:text-indigo-300">
                  About
                </h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <h1 className="font-bold hover:text-indigo-300">
                  Contact
                </h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="https://www.instagram.com/ppingagain/" target="_blank">
                <h1 className="font-bold text-2xl hover:text-indigo-300 mt-2">
                  <BsInstagram />
                </h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
