import { compImg } from "../lib";


const LogoWall = () => {
    return (
        <div className="max-w-6xl mx-auto px-4">

            <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-7 lg:gap-10 items-center justify-center place-items-center">

                {compImg.map((img) => (
                    <img src={img.path} alt={img.title}
                        className="h-10 lg:h-10 object-contain" />
                ))}

            </div>

        </div >
    )
}

export default LogoWall;