import { MoreGrid } from "../lib"
import MoreBox from "./MoreBox"

const More = () => {
    return (
        <div className="bg-more mt-40">
            <div className="py-4 px-8 lg:px-30 lg:py-30">
                <h1 className="text-white text-3xl lg:text-6xl font-bold"><span className="text-gray-400">And so</span> much more...</h1>
                <p className="text-white leading-relaxed text-xl lg:text-2xl font-light mt-5">your customers are always connected. <br />Why should your CRM be any different?</p>

                <div className="hidden mt-10 lg:grid grid-cols-3 grid-rows-2 gap-10">

                    {MoreGrid.map((item, index) => (
                        <MoreBox key={index} image={item.image} title={item.title} description={item.description} />
                    ))}

                </div>

                {/* mobile display */}

                <div className="lg:hidden md:hidden mt-5">
                    <div className="flex flex-row gap-5 overflow-x-auto snap-x snap-mandatory pb-4">
                        {MoreGrid.map((item, index) => (
                            <div key={index} className="min-w-[75%] snap-center shrink-0">
                                <MoreBox image={item.image} title={item.title} description={item.description} />
                            </div>
                        ))}
                    </div>

                </div>


            </div>
        </div>

    )
}

export default More 