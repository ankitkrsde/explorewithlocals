import Image from "next/image";
import React from "react";
import terms from "../../../public/terms.jpg";

export default function Terms() {
  return (
    <div className="w-full flex flex-col relative">
      <div className="h-[60vh] flex items-center justify-center bg-[url('/terms.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col gap-2 md:gap-4 items-center justify-center text-center">
          <div className="flex items-center gap-0 md:gap-4 font-poppins text-lg text-gray-700 font-medium">
            <span className="h-[2px] w-16 bg-purple-500"></span>
            <span className=" text-white md:text-gray-800 bg-none md:bg-gray-50 px-4 text-sm sm:text-lg md:text-xl text-center">
              Guidelines for a Better Experience
            </span>
            <span className="h-[2px] w-16 bg-purple-500"></span>
          </div>
          <div>
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-7xl font-semibold text-gray-50 leading-tight text-center">
              Term & Conditions
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
    </div>
  );
}
