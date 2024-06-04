import  { useState, useEffect } from "react";
import google from "../assets/icons8-google-48.png";
import { BsArrowLeft } from "react-icons/bs";
import ThemeSwitcher from "../components/ThemeSwitcher";
import {Link} from "react-router-dom";
 
function Login() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "emerald");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const buttonClass = theme === "emerald" ? "btn  flex items-center justify-center w-80 hover:border-black" : "btn border-1 border-white flex items-center justify-center w-80 hover:border-black";

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1"> 
        <div className="tooltip tooltip-right" data-tip="Back to Home Page?">
        <Link to="/"  className="btn btn-circle text-2xl hover:border-black hover:bg-transparent hover:text-black" > <BsArrowLeft /></Link>
        </div>
       
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </button>
        </div>
      </div>
      <form
        action=""
        className="h-90vh w-full flex flex-col items-center justify-center"
      >
        <h1 className="text-2xl font-bold mb-3">Log In</h1>
        <input
          type="email"
          placeholder="Email"
          className="input w-full max-w-xs border-inherit mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input w-full max-w-xs border-inherit mb-5"
          required
        />
        <button className="btn  btn-neutral w-80 mb-5 hover:btn-secondary hover:border-1">
          Log In
        </button>
        <h1 className="mb-5">or</h1>
        <button className={buttonClass}>
          <img src={google} className="h-6" />
          <span className="ml-1">Sign In with Gmail</span>
        </button> 
        <Link to="/Register" className="mt-5 text-blue-600/100 hover:text-primary hover:underline">Register</Link>
      </form>
    </div>
  );
}

export default Login;
