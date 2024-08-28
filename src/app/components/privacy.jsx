import Image from "next/image";
import React from "react";
import privacy from "../../../public/privacy.jpg";

export default function Privacy() {
  return (
    <div className="w-full flex flex-col">
      <div className="h-[60vh] flex items-center justify-center bg-[url('/privacy.jpg')] bg-no-repeat bg-center bg-cover ">
        <div className="flex flex-col gap-2 md:gap-4 items-center justify-center text-center">
          <div className="flex items-center gap-0 md;gap-4 font-poppins text-lg text-gray-700 font-medium">
            <span className="h-[2px] w-16 bg-purple-500"></span>
            <span className=" text-white md:text-gray-800 bg-none md:bg-gray-50 px-4 text-sm sm:text-lg md:text-xl text-center">
              Your Privacy, Our Priority
            </span>
            <span className="h-[2px] w-16 bg-purple-500"></span>
          </div>
          <div>
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-7xl font-semibold text-gray-50 leading-tight text-center">
              Privacy Policy
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

      <div className="mt-16 px-10 lg:px-24">
        <div className=" mt-4">
          <p className=" text-gray-700 text-lg">
            At ExploreWithLocals,we are committed to protecting your personal
            information and respecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your information when
            you visit our website or use our services. By accessing our website
            and using our services, you agree to the practices described in this
            policy.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-16 px-10 lg:px-24">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 border-b-2 border-red-500 w-fit">
          Information We Collect
        </h3>
        <p className="text-gray-700">
          We collect various types of information to provide and improve our
          services:
        </p>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="font-semibold text-lg text-gray-800">
            Personal Information :{" "}
            <span className="font-normal text-base text-gray-700">
              When you book a tour, sign up for our newsletter, or contact us,
              we may collect personal information such as your name, email
              address, phone number, and payment details.
            </span>
          </li>
          <li className="font-semibold text-lg text-gray-800">
            Technical Information :{" "}
            <span className="font-normal text-base text-gray-700">
              We may collect technical data such as your IP address, browser
              type, operating system, and browsing behavior to help us
              understand how you interact with our website.
            </span>
          </li>
          <li className="font-semibold text-lg text-gray-800">
            CCookies :{" "}
            <span className="font-normal text-base text-gray-700">
              We use cookies and similar technologies to enhance your experience
              on our website. Cookies help us remember your preferences and
              personalize your visit. You can manage your cookie preferences
              through your browser settings.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
