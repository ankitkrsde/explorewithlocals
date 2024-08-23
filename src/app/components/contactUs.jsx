import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="w-full flex flex-col relative">
        <div>
          {/* <Image
            src={aboutus}
            alt="aboutus-bg"
            width={1500}
            height={100}
            className="w-full object-cover brightness-50"
          /> */}
        </div>
        <div className="flex flex-col gap-4 items-center justify-center text-center mb-10 absolute md:top-24 md:left-96 top-10 left-12">
          <div className="flex items-center gap-4 font-poppins text-lg text-gray-700 font-medium">
            <span className="h-[2px] w-16 bg-purple-500"></span>
            <span className=" text-white md:text-gray-800 bg-none md:bg-gray-50 px-4 text-sm sm:text-lg md:text-xl text-center">
              Discover the World with ExploreWithLocals
            </span>
            <span className="h-[2px] w-16 bg-purple-500"></span>
          </div>
          <div>
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-7xl font-semibold text-gray-50 leading-tight text-center">
              Contact Us
            </h1>
          </div>

          {/* <h3 className="text-xl md:text-2xl text-gray-50">
            Discover the World with{" "}
            <span className="text-yellow-400 hover:underline hover:underline-offset-2">
              ExploreWithLocals
            </span>
          </h3> */}
        </div>
      </div>
    </>
  );
}
