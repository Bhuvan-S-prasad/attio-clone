import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import LogoWall from "./components/LogoWall"
import Features from "./components/Features"


function App() {

  return (
    <>
      <div className="position fixed top-0 left-0 right-0">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div className="my-20 p-5">
        <LogoWall />
      </div>
      <div>
        <Features />
      </div>
    </>
  )
}

export default App
