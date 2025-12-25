const TestimonyCard = () => {
  return (
    <div className="flex flex-col px-10 py-10 lg:px-96 text-left lg:text-center items-start lg:items-center justify-start lg:justify-center gap-6">
      <div>
        <img src="src/assets/Vector.png" alt="pfp" />
      </div>
      <div>
        <h1 className="text-3xl">"My team loves Attio's reporting system because it's so dynamic. We can splice our data in so many different  ways and combination"</h1>
      </div>
      <div className="text-gray-500">
        <p>DeGrasse Schrader</p>
        <p>chief of staff, Pallet</p>
      </div>

    </div>
  )
}

export default TestimonyCard