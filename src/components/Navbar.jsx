import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar({ Theme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isScrolled ? "fixed top-3  px-10 z-50  transition-all duration-300" : "sticky top-0  left-0 right-0 z-50 transition-all duration-300"} ${Theme === 'emerald'? 'sticky top-0 left-0 right-0 z-50 transition-all duration-300': 'sticky top-0 left-0 right-0 z-50 transition-all duration-300'}`}>
 <div
  className={`navbar w-full transition-all duration-300 ${
    isScrolled ? "backdrop-blur-lg" : ""
  } ${Theme === "emerald" ? "bg-white/70 rounded-2xl" : "bg-neutral/70 rounded-2xl "}`}
>
        <div className="flex-1 ">
          <div className="tooltip tooltip-bottom" data-tip="toniUi">
            <Link
              className="btn btn-ghost text-xl hover:text-blue-500 hover:bg-transparent"
              to="/"
            >
              toniMovie
            </Link>
          </div>
        </div>

        <label className="input input-bordered flex items-center gap-2 w-3/12">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="tooltip tooltip-bottom" data-tip="Going Home?">
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <div className="tooltip tooltip-bottom" data-tip="Check Post?">
                <Link to="/Post">Post</Link>
              </div>
            </li>
            <li>
              <div
                className="tooltip tooltip-bottom"
                data-tip="Need more info?"
              >
                <Link to="/About">About</Link>
              </div>
            </li>
            <li>
              <div
                className="tooltip tooltip-bottom"
                data-tip="Ready to proceed?"
              >
                <Link to="/Login">Log In</Link>
              </div>
            </li>
            <li>
              <ThemeSwitcher Theme={Theme} setTheme={setTheme} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
