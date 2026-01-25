import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/common/Footer";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      offset: 100, // offset from top to trigger
      easing: "ease-in-out",
      once: true, // animate only once
    });
  }, []);
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
