import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import LogoWall from "./components/LogoWall"


function App() {

  return (
    <>
      <div className="position fixed top-0 left-0 right-0">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div className="my-20">
        <LogoWall />
      </div>
    </>
  )
}

export default App
