import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navlinks from "./Navlinks";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Movie from "../components/Movies";
import { IoAddOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";


export default function AddMovies() {
  const location = useLocation(); // Add this line to use location
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "emerald"
  );

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
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}

        <div
          className={`${
            isScrolled
              ? "navbar bg-base-100 sticky top-0 left-0 right-0 z-20 drop-shadow-lg"
              : "navbar bg-base-100 sticky top-0 left-0 right-0 z-20 "
          }`}
        >
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex-1">
            <h1 className="text-xl font-bold">
              {Navlinks.map((navlink) =>
                location.pathname === navlink.url ? navlink.link : null
              )}
            </h1>
          </div>

          <div className="flex-none gap-4">
            <ThemeSwitcher setTheme={setTheme} />

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* page content start here */}
   
        <div className="container  flex items-end justify-end  ">
          <Link to="/Movie/Add" className="btn btn-outline btn-info mr-14 mt-5">
            <IoAddOutline /> Add Movie
          </Link>
        </div>

        <div className="w-full h-full flex flex-wrap justify-center p-4 relative">
          {Movie.map((movie, index) => (
            <div key={index} className="w-64 h-96 m-3 mb-14 relative">
              <div className="card bg-base-100 shadow-xl w-full h-full overflow-hidden transition duration-1000 ease-in-out transform hover:scale-y-110 hover:scale-x-110  hover:z-10 hover:drop-shadow-lg">
                <figure className="overflow-hidden w-full h-full">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-details opacity-0 bg-black bg-opacity-50 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300 hover:opacity-100">
                  <h2 className="card-title text-lg font-bold">
                    {movie.title}
                  </h2>
                  <p className="text-sm">{movie.category}</p>
                  <p className="text-sm">{movie.description}</p>
                  <button className="btn  btn-info mt-20 w-full">
                    <FaRegEdit /> Edit
                  </button>
                </div>
              </div>
              <div className="container flex flex-col items-start justify-between leading-3 mt-2">
                <h1 className=" font-bold mt-2 ">{movie.title}</h1>
                <p className=" mt-2 text-xs font-semibold">2024</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="drawer-side" style={{ overflowY: "hidden" }}>
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="sticky top-0 bg-base-200 text-base-content">
          <h1 className="text-center text-2xl font-bold py-3">toniMovie</h1>
        </div>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {Navlinks.map((navlink, index) => (
            <li key={index}>
              <Link
                to={navlink.url}
                className={
                  location.pathname === navlink.url
                    ? "active p-3 m-0.5"
                    : "p-3 m-0.5"
                }
              >
                <span className="text-xl">{navlink.icon}</span> {navlink.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
