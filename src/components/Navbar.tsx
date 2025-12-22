import { Menu, X } from "lucide-react";
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
        <nav className="p-4 lg:p-5 border-b border-gray-200">
            <div className="flex flex-row justify-between gap-10">

                <div className="flex flex-row gap-10">

                    {/* logo */}
                    <img src="src/assets/attio_logo.png" alt="attio_logo" />

                    {/* items */}
                    <ul className="hidden lg:flex flex-row items-center gap-10">
                        {items.map((item) => (
                            <li key={item.title}>
                                <a href="#">{item.title}</a>
                            </li>
                        ))}
                    </ul>

                </div>



                {/* Auth Buttons */}
                <div className="hidden lg:flex flex-row justify-end items-center gap-5">

                    <button className="border border-gray-500 px-4 py-2 rounded-2xl">
                        Sign in
                    </button>

                    <button className="bg-primary text-secondary px-4 py-2 rounded-2xl">
                        Start for Free
                    </button>

                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden rounded-full text-2xl hover:bg-gray-300">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>




            {isOpen && (
                <div className="lg:hidden mt-4 p-4 rounded-xl gap-4">
                    <div>
                        {items.map((item) => (
                            <a href="#" key={item.title} className="block text-base border-b border-gray-300 p-4">{item.title}</a>
                        ))}
                    </div>
                </div>

            )}

        </nav>
    )
}

export default Navbar