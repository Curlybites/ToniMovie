import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
// import UseState from "../exercise/UseState";
import Movie from "../Pages/Movie";
import Loading from "../components/Loading"; // Ensure Loading is imported

function Homepage() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "emerald"
  );

  function LoadingWrapper({ children }) {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
      setLoading(true);
      const handleLoad = () => setLoading(false);

      // Simulate a loading delay (remove this if not needed)
      const loadTimeout = setTimeout(handleLoad, 1000);

      // Cleanup timeout if component unmounts
      return () => clearTimeout(loadTimeout);
    }, [location]);

    return <>{loading ? <Loading /> : children}</>;
  }

  return (
    <div>
      <Navbar Theme={theme} setTheme={setTheme} />
      <Carousel />
      <Movie />
      <Footer />
    </div>
  );
}

export default Homepage;
