import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import LogoWall from "./components/LogoWall"
import Features from "./components/Features"
import TestimonyCard from "./components/TestimonyCard"
import BentoGrid from "./components/BentoGrid"
import BentoGrid2 from "./components/BentoGrid2"
import Certificate from "./components/Certificate"
import More from "./components/More"


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
      <div>
        <TestimonyCard
          image="src/assets/profile/profile-1.png"
          quote="Attio is an incredibley flexible product, you can build anything on it. it gives you the tools you need to build a CRM that's exactly right to your business. your data and your process"
          name="Flip Mark"
          position="chief of staff, Passionfroot" />

      </div>
      <div>
        <BentoGrid2 />
      </div>
      <div>
        <TestimonyCard
          image="src/assets/profile/profile-1.png"
          quote="Attio has played a crucial role in scaling out and evolving our go-to market model. it allows my team to easily stay on top of everything"
          name="Alan Bartur"
          position="Co-founder & CEO, Dopt" />
      </div>
      <div className="m-5">
        <Certificate />
      </div>
      <div>
        <More />
      </div>
    </>
  )
}

export default App
