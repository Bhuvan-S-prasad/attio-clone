import { certifi } from "../lib"

const Certificate = () => {
    return (
        <div className="mt-20 flex items-center justify-center">
            <div className="p-5 lg:p-10 flex flex-col lg:flex-row border border-gray-200 items-center justify-center lg:w-[75%] gap-10">

                <div className="flex flex-col gap-5 flex-1 py-5">
                    <h1 className="text-3xl lg:text-4xl font-bold text-primary text-center lg:text-left">Scale with <span className="text-secondary">Security</span></h1>
                    <p className="text-xl lg:w-[80%] text-center lg:text-left">Attio is audited and certified by industry leading Third Party Standards.</p>
                    <div className="flex flex-row gap-5 items-center justify-center lg:justify-start">
                        <button className="bg-primary text-white p-3 rounded-xl">
                            Start for free
                        </button>
                        <button className="border border-gray-300 text-primary p-3 rounded-xl">
                            Talk to Sales
                        </button>

                    </div>

                </div>

                <div className="grid grid-cols-2 justify-items-center lg:flex lg:flex-row border-gray-200 items-center justify-center gap-5 lg:w-1/2 lg:py-10">
                    {certifi.map((item, index) => (
                        <img key={index} src={item.path} alt={item.title} height={80} width={80} />
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Certificate