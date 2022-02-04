import React from "react";

function Hero() {
  return (
    <>
      <div className="mt-8 pb-20 relative">
        <img
          src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg"
          alt="Camp Stay"
          className="w-full"
        />
        <div className="flex flex-col items-center absolute left-2/4 top-3/4 center-content w-full">
          <div>
            <h1 className="lg:text-5xl font-medium text-2xl">Not sure where to go? Perfect.</h1>
          </div>
          <div className="lg:mt-6">
            <button className="bg-white lg:text-lg font-semibold lg:p-4 lg:px-6 text-sm p-3 rounded-full text-fuchsia-800">I'm flexible</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
