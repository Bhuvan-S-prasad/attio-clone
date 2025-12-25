
const BentoGrid = () => {
  return (
    <>
      <div className="p-10 lg:p-30 flex flex-col">


        <div className="flex flex-col">


          <div className="flex flex-col gap-5 w-full lg:w-[35%]">
            <div className="flex flex-row gap-2">
              <h1 className="text-3xl lg:text-5xl font-bold">Modeled around your data and workflows</h1>
            </div>
            <p className="text-muted-foreground text-lg">A CRM should go beyond your deals. Attio is built for any business process</p>
          </div>

        </div>


        {/* bento grid */}

        <section className="max-w-7xl mx-auto py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* top-grid */}

            <div className="lg:col-span-2 col-span-1 lg:row-span-3 rounded-2xl border border-gray-200 shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:m-0 lg:p-0 lg:pb-0">
                <div className="p-5 lg:p-10">
                  <h3 className="text-gray-700"><span className="font-semibold">Always Connected to your data.</span> Continually sync your products, billing, and relationships data into your workspace.</h3>
                </div>
                <div className="pt-6 lg:pt-10 w-[90%]">
                  <img src="src/assets/bento-grid/bento-grid-1.png" alt="pfp" className="left-0 lg:right-0 bottom-0 mb-0 lg:items-end lg:w-full lg:justify-end rounded-xl rounded-br-none lg:rounded-bl-none lg:rounded-br-xl border border-gray-200 shadow-2xl" />
                </div>

              </div>
            </div>

            {/* bottom-left grid */}

            <div className="lg:col-span-1 lg:row-span-3 rounded-2xl border border-gray-200 shadow-2xl">
              <div className="flex flex-col">
                <h3 className="p-5 lg:p-10">
                  <span className="font-semibold">A CRM for any use case.</span> Easily create custom objects that match your business unique data structure.
                </h3>
                <img src="src/assets/bento-grid/bento-grid-2.png" alt="pfp" className="left-0 lg:right-0 bottom-0 rounded-xl " />

              </div>
            </div>

            {/* bottom-right grid top */}

            <div className="lg:col-span-1 lg:row-span-2 p-6 rounded-2xl border border-gray-200 shadow-2xl">
              <img src="src/assets/bento-grid/bento-grid-3.png" alt="pfp" className="left-0 lg:right-0 bottom-0 rounded-xl " />
            </div>

            {/* bottom-right grid bottom */}

            <div className="lg:col-span-1 row-span-1 p-6 rounded-2xl border border-gray-200 shadow-2xl">
              <div className="flex flex-row">
                <img src="src/assets/bento-grid/bento-grid-4.png" alt="pfp" className="rounded-xl " />

              </div>
            </div>

          </div>
        </section>

      </div>
    </>

  )
}

export default BentoGrid