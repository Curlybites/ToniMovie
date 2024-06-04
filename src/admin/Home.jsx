import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navlinks from "../admin/Navlinks";
import ThemeSwitcher from "../components/ThemeSwitcher";


export default function Home() {
  const location = useLocation(); // Add this line to use location
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "emerald"
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <div className="navbar bg-base-100">
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
      </div>
      <div className="drawer-side" style={{ overflowY: "hidden" }}>
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="sticky top-0 bg-base-200 text-base-content">
          <h1 className="text-center text-2xl font-bold py-3 ">toniMovie</h1>
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
  );
}
