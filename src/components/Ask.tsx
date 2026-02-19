const Ask = () => {
  return (
    <div className="bg-ask">
      <div className="flex flex-col lg:flex-row gap-7">
        <div className="flex flex-col gap-5 p-5 lg:gap-10 lg:max-w-[50%] lg:p-20">
          <h1 className="text-white text-3xl lg:text-6xl font-bold">
            <span className="text-ask-text">Ready to build your team's</span>{" "}
            dream CRM?
          </h1>
          <div className="flex flex-row gap-5">
            <button className="p-3 bg-ask-button text-white border-ask-border rounded-xl text-lg">
              start for free
            </button>
            <button className="p-3 text-white border border-ask-border rounded-xl text-lg">
              Talk to sales
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center p-5 lg:p-0 lg:max-w-[50%] border border-ask-border m-5 lg:m-0 rounded-xl lg:border-none">
          <img
            src="https://ik.imagekit.io/wq68aygdr/attio/ask.png"
            alt="ask"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Ask;
