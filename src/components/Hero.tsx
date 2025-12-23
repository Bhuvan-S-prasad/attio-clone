
const Hero = () => {
    return (
        <div className="p-5 mt-40 lg:mt-52 flex flex-col items-center justify-center">
            {/* pill */}
            <div className="rounded-2xl ">
                <p className="bg-muted p-1.5 pl-0 rounded-2xl text-xs lg:text-sm "><span className="bg-primary text-secondary px-3 py-2 rounded-2xl m-0">New</span> How Pallet uses Attio to power their GTM </p>
            </div>

            {/* headline */}
            <div className="p-5 lg:px-100">
                <div className="mt-2 items-center justify-center text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold">Customer relationship magic.</h1>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xl text-muted-foreground">Poweful, flexible and data-driven, Attio makes it easy to build the exact CRM your business needs</p>
                </div>

                {/* buttons */}
                <div className="mt-10 flex flex-row gap-5 items-center justify-center">
                    <button className="bg-primary text-secondary px-4 py-2 rounded-xl">
                        Start for free
                    </button>

                    <button className="border border-muted-foreground px-4 py-2 rounded-xl">
                        Talk to sales
                    </button>
                </div>

                {/* image */}
                <div className="mt-15 lg:mt-36">
                    <img src="src/assets/hero.png" alt="hero" />
                </div>

            </div>


        </div>
    )
}

export default Hero