import { useState } from "react"

const items = [
    {
        title: "Customers"
    },
    {
        title: "Changelog"
    },
    {
        title: "Help"
    },
    {
        title: "Carrers"
    },
    {
        title: "Pricing"
    }
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-5">
            <div className="flex flex-row justify-between gap-10">

                <div className="flex flex-row gap-15">

                    {/* logo */}
                    <img src="src/assets/attio_logo.png" alt="attio_logo" />

                    {/* items */}
                    <div className="flex flex-row items-center gap-10">
                        {items.map((item) => (
                            <p>{item.title}</p>
                        ))}
                    </div>

                </div>



                {/* Auth Buttons */}
                <div className="flex flex-row justify-end gap-5">

                    <button className="border border-gray-500 px-4 py-2 rounded-2xl">
                        Sign in
                    </button>

                    <button className="bg-primary text-secondary px-4 py-2 rounded-2xl">
                        Start for Free
                    </button>

                </div>

                {isOpen && (
                    <button>
                        
                    </button>
                )}
            </div>

        </nav>
    )
}

export default Navbar