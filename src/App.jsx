import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Review from "./Components/Review";
import Ready from "./Components/Ready";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Review />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;
