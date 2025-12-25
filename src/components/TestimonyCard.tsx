interface TestiomonyProps {
  image: string;
  quote: string;
  name: string;
  position: string;
}

const  TestimonyCard = ({
  image,
  quote,
  name,
  position
}: TestiomonyProps) => {
  return (
    <div className="flex flex-col px-10 py-10 lg:px-96 text-left lg:text-center items-start lg:items-center justify-start lg:justify-center gap-6">
      <div>
        <img src={image} alt="pfp" />
      </div>
      <div>
        <h1 className="text-3xl">{quote}</h1>
      </div>
      <div className="text-gray-500">
        <p>{name}</p>
        <p>{position}</p>
      </div>

    </div>
  )
}

export default TestimonyCard