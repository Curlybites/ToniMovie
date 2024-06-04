import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Loading from "./components/Loading";
import Home from "../src/admin/Home";
import Movies from "./admin/Movies";
import AddMovies from "./admin/AddMovies";

function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Movie/Add" element={<AddMovies/>} />
        </Routes>
  
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Movie" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

// function LoadingWrapper({ children }) {
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     setLoading(true);
//     const handleLoad = () => setLoading(false);

//     // Simulate a loading delay (remove this if not needed)
//     const loadTimeout = setTimeout(handleLoad, 1000);

//     // Cleanup timeout if component unmounts
//     return () => clearTimeout(loadTimeout);
//   }, [location]);

//   return <>{loading ? <Loading /> : children}</>;
// }

export default App;
