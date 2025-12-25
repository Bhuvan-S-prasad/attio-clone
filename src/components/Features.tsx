import { feat } from "../lib"

const Features = () => {
    return (

        <div className="p-10 lg:p-30 flex flex-col">
            <div className="flex flex-col">
                <div className="flex flex-col gap-5 w-full lg:w-[30%]">
                    <div className="flex flex-row gap-2">
                        <h1 className="text-3xl lg:text-5xl font-bold">A CRM created to be your own</h1>
                    </div>
                    <p className="text-muted-foreground text-lg">Tweak anything and everything to ensure Attio fits your business, not the other way around</p>
                </div>

                <div className="hidden md:block mt-5 p-10 pb-0 border border-gray-200 shadow-2xl rounded-3xl">

                    <div className="grid grid-cols-4 gap-8 mb-12">
                        {feat.map((feature) => (
                            <div key={feature.title} className="flex flex-col gap-5">
                                <div className="flex flex-row gap-2">
                                    {feature.icon}
                                    <h1 className="text-primary text-xl">{feature.title}</h1>
                                </div>

                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}

                    </div>

                    <div className="mt-15 flex items-center justify-center">
                        <img src="src/assets/feature1.png" alt="feature1" />


                    </div>
                </div>

                <div className="md:hidden lg:hidden mt-5">
                    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6">
                        {feat.map((feature) => (
                            <div
                                key={feature.title}
                                className="min-w-[90%] snap-center p-6 pb-0 border border-gray-100 shadow-lg rounded-3xl overflow-hidden"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    {feature.icon}
                                    <h1 className="text-primary text-lg font-medium">
                                        {feature.title}
                                    </h1>
                                </div>

                                <p className="text-muted-foreground text-sm mb-10">
                                    {feature.description}
                                </p>

                                <div className="relative h-[150px]">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="absolute bottom-0 left-full -translate-x-1/2 w-[180%] max-w-none"
                                    />
                                </div>
                            </div>

                        ))}
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Features