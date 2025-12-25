
const BentoGrid2 = () => {
    return (
        <>
            <div className="p-10 lg:p-30 flex flex-col">


                <div className="flex flex-col">


                    <div className="flex flex-col gap-5 w-full lg:w-[35%]">
                        <div className="flex flex-row gap-2">
                            <h1 className="text-3xl lg:text-5xl font-bold">Designed for Multiplayers.</h1>
                        </div>
                        <p className="text-muted-foreground text-lg">The first trully Multiplayer CRM. After all, the best work doesnt come from silos.</p>
                    </div>

                </div>


                {/* bento grid */}

                <section className="max-w-7xl mx-auto py-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* top-grid left */}

                        <div className="lg:col-span-2 col-span-1 lg:row-span-2 rounded-2xl border border-gray-200 shadow-2xl">
                            <div className="flex flex-col lg:m-0 lg:p-0 lg:pb-0">
                                <div className="p-5 lg:p-10 lg:pb-0 w-[70%]">
                                    <h3 className="text-gray-700"><span className="font-semibold">Real time collaboration.</span> Collaborate with your whole team and nail every task the first time. see each other click, change and type in real-time</h3>
                                </div>
                                <div className="pt-6 lg:pt-10 w-[90%] self-end">
                                    <img src="src/assets/bento-grid/bento-grid-5.png" alt="pfp" className="left-0 lg:right-0 bottom-0 mb-0 rounded-xl rounded-bl-none rounded-tr-none rounded-br-xl border border-gray-200 shadow-2xl" />
                                </div>

                            </div>
                        </div>

                        {/* top right grid */}

                        <div className="lg:col-span-1 lg:row-span-2 rounded-2xl border border-gray-200 shadow-2xl">
                            <div className="flex flex-col">
                                <h3 className="p-5 lg:p-10">
                                    <span className="font-semibold">Build from anywhere.</span> our world-class mobile app lets you collaborate from anywhere without compromising your workflow.
                                </h3>
                                <div className="self-center m-0">
                                    <img src="src/assets/bento-grid/bento-grid-6.png" alt="pfp" className="rounded-xl" />
                                </div>

                            </div>
                        </div>

                        {/* bottom-left grid bottom */}

                        <div className="lg:col-span-1 lg:row-span-2 rounded-2xl border border-gray-200 shadow-2xl">
                            <div className="flex flex-col">
                                <h3 className="p-5 lg:p-10 text-xl"><span className="font-semibold">Permission Control.</span> Control how your team interacts with your business collections, views, and email</h3>
                                <div className="self-start">
                                    <img src="src/assets/bento-grid/bento-grid-7.png" alt="pfp" className="rounded-xl h-full w-auto bottom-0 p-0 m-0" />
                                </div>

                            </div>
                        </div>

                        {/* bottom-right grid top */}

                        <div className="lg:col-span-2 lg:row-span-2 rounded-2xl border border-gray-200 shadow-2xl">
                            <div className="flex flex-col p-5 lg:p-10">
                                <h3 className="lg:w-[60%] text-xl"><span className="font-semibold">Hold the Thought.</span> Never lose another idea with attio's real time collaborative note-taking features</h3>
                                <div className="self-center shadow-2xl border border-gray-200 rounded-2xl mt-5 lg:mt-7">
                                    <img src="src/assets/bento-grid/bento-grid-8.png" alt="pfp" className="rounded-xl" />
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

            </div>
        </>

    )
}

export default BentoGrid2