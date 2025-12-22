import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <div className="position fixed top-0 left-0 right-0">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </>
  )
}

export default App
