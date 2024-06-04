import "../index.css";
import { useState, useEffect } from "react";
import google from "../assets/icons8-google-48.png";
import { BsArrowLeft } from "react-icons/bs";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Registration() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "emerald"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const buttonClass =
    theme === "emerald"
      ? "btn flex items-center justify-center w-80 hover:border-black"
      : "btn border-1 border-white flex items-center justify-center w-80 hover:border-black";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [isMatch, setIsMatch] = useState(true);

  useEffect(() => {
    if (
      (password && confirm_password) ||
      (password && confirm_password === 0)
    ) {
      if (password !== confirm_password) {
        setIsMatch(false);
      } else {
        setIsMatch(true);
      }
    }
  }, [password, confirm_password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMatch) {
      axios
        .post("http://localhost:5000/Register", { email, password })
        .then((result) => {
          console.log(result.data);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Registered successfully",
          });
        })
        .catch((err) => console.log("error: " + err));
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="tooltip tooltip-right" data-tip="Back to Home Page?">
            <Link
              to="/"
              className="btn btn-circle text-2xl hover:border-black hover:bg-transparent hover:text-black"
            >
              <BsArrowLeft />
            </Link>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <ThemeSwitcher setTheme={setTheme} />
          </button>
        </div>
      </div>
      <form
        className="h-90vh w-full flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-3">Registration</h1>
        <input
          type="email"
          placeholder="Email"
          className="input w-full max-w-xs border-inherit mb-3"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="form-control w-full max-w-xs ">
          <input
            type="password"
            placeholder="Password"
            className={`input form-control w-full max-w-xs  ${
              isMatch ? "border-inherit" : "input-bordered input-error"
            }`}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="label">
            <span
              className={`label-text-alt ${
                isMatch ? "text-success" : "text-error"
              }`}
            >
              {isMatch ? " " : "Password not matched"}
            </span>
          </div>
        </label>

        <label className="form-control w-full max-w-xs mb-3">
          <input
            type="password"
            placeholder="Confirm Password"
            className={`input form-control w-full max-w-xs  ${
              isMatch ? "border-inherit" : "input-bordered input-error"
            }`}
            name="password"
            onChange={(e) => setConfirm_password(e.target.value)}
            required
          />
          <div className="label">
            <span
              className={`label-text-alt ${
                isMatch ? "text-success" : "text-error"
              }`}
            >
              {isMatch ? " " : "Password not matched"}
            </span>
          </div>
        </label>
        <button
          type="submit"
          className="btn btn-neutral w-80 mb-5 hover:btn-secondary hover:border-1"
        >
          Register
        </button>
        <h1 className="mb-5">or</h1>
        <button className={buttonClass}>
          <img src={google} className="h-6" alt="Google Icon" />
          <span className="ml-1">Register with Gmail</span>
        </button>
        <Link
          className="mt-5 text-blue-600 hover:text-primary hover:underline"
          to="/Login"
        >
          Sign In
        </Link>
      </form>
    </div>
  );
}

export default Registration;
