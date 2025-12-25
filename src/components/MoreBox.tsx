interface MoreProps {
    image: string;
    title: string;
    description: string;
}
const MoreBox = ({
    image,
    title,
    description
}: MoreProps) => {

    return (
        <div>
            <div className="flex flex-col border border-gray-800 bg-more-foreground p-5 lg:p-10 gap-3 lg:gap-5 rounded-2xl">
                <img src={image} alt="" className="h-30 w-auto object-contain" />
                <h1 className="text-white text-lg lg:text-2xl font-medium">{title}</h1>
                <p className="text-gray-400 text-sm lg:text-lg max-w-[60%] lg:max-w-full">{description}</p>
            </div>
        </div>
    )
}

export default MoreBox