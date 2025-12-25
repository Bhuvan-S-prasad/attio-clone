import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import LogoWall from "./components/LogoWall"
import Features from "./components/Features"
import TestimonyCard from "./components/TestimonyCard"
import BentoGrid from "./components/BentoGrid"


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
      <div>
        <TestimonyCard
          image="src/assets/profile/profile-1.png"
          quote="My team loves Attio's reporting system because it's so dynamic. We can splice our data in so many different  ways and combination"
          name="DeGrasse Schrader"
          position="chief of staff, Pallet" />
      </div>
      <div>
        <BentoGrid />
      </div>
      <TestimonyCard
        image="src/assets/profile/profile-1.png"
        quote="Attio is an incredibley flexible product, you can build anything on it. it gives you the tools you need to build a CRM that's exactly right to your business. your data and your process"
        name="Flip Mark"
        position="chief of staff, Passionfroot" />
    </>
  )
}

export default App
