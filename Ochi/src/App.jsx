import Landingpage from "./components/Landingpage/Landingpage"
import Marquee from "./components/Marquee/Marquee"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Eyes from "./components/EyesAnimation/Eyes"
import Featured from "./components/Featured/Featured"
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer"
import LocomotiveScroll from 'locomotive-scroll';
function App() {
 

  const locomotiveScroll = new LocomotiveScroll();
  

  return (
  
  <div className="w-full m-h-screen bg-zinc-900 text-white"> 
  <Navbar />  
  <Landingpage />
  <Marquee />
  <About />
  <Eyes />
  <Featured />
  <Cards />
  <Footer />
  </div>

  )
}

export default App
