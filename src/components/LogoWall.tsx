
const compImg = [
    {
        title: "cocacola",
        path: "src/assets/cocacola.png"
    },
    {
        title: "openai",
        path: "src/assets/openai.png"
    },
    {
        title: "pallet",
        path: "src/assets/pallet.png"
    },
    {
        title: "causal",
        path: "src/assets/causal.png"
    },
    {
        title: "plain",
        path: "src/assets/plain.png"
    },
    {
        title: "passionfroot",
        path: "src/assets/passion.png"
    },
    {
        title: "dopt",
        path: "src/assets/dopt.png"
    },
    {
        title: "hyperline",
        path: "src/assets/hyperline.png"
    },
    {
        title: "ondeck",
        path: "src/assets/ondeck.png"
    },
    {
        title: "bravado",
        path: "src/assets/bravado.png"
    },
    {
        title: "beacons",
        path: "src/assets/beacons.png"
    },
    {
        title: "modal",
        path: "src/assets/modal.png"
    },

]

const LogoWall = () => {
    return (
        <div className="max-w-6xl mx-auto px-4">



            <div className="grid grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-center place-items-center">

                {compImg.map((img) => (
                    <img src={img.path} alt={img.title}
                        className="h-10 lg:h-10 object-contain" />
                ))}

            </div>

        </div >
    )
}

export default LogoWall;