import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="w-full px-10 lg:px-24 mt-24 flex flex-col ">
        <div className="flex flex-col gap-6 items-center justify-center mb-6">
          <h1 className="font-poppins text-5xl md:text-7xl font-semibold text-red-500 leading-tight">
            About Us
          </h1>
          <h3 className="text-xl md:text-2xl text-gray-600">
            Discover the World with{" "}
            <span className="text-purple-500 hover:underline hover:underline-offset-2">
              ExploreWithLocals
            </span>
          </h3>
        </div>
        <p className="mt-12 text-gray-700">
          At ExploreWithLocals, we believe that travel is not just about
          visiting new places — it's about experiencing the world in its most
          authentic and enriching form. Founded with a passion for exploration
          and a deep love for culture, our mission is to connect travelers with
          unforgettable experiences that go beyond the ordinary.
        </p>
        <div className="flex flex-col gap-4 mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            Who We Are
          </h3>
          <p className="text-gray-700">
            We are a team of seasoned travelers, adventure enthusiasts, and
            local experts who have come together to share our love for the
            world. With years of experience in the tourism industry, we
            understand what makes a journey truly memorable. Our guides are not
            just experts in their fields—they are storytellers, history buffs,
            and cultural ambassadors who bring each destination to life.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            What We Offer
          </h3>
          <p className="text-gray-700">
            Whether you're a solo traveler, a couple on a romantic getaway, or a
            family looking for an exciting adventure, ExploreWithLocals has
            something for everyone. Our carefully curated tours are designed to
            offer a unique perspective on each destination, highlighting hidden
            gems, local traditions, and authentic experiences that you won’t
            find in guidebooks.
          </p>
          <ul className="flex flex-col gap-4 mt-4">
            <li className="font-semibold text-lg text-gray-800">
              Personalized Tours :{" "}
              <span className="font-normal text-base text-gray-700">
                We tailor each experience to your interests, ensuring that every
                trip is as unique as you are.
              </span>
            </li>
            <li className="font-semibold text-lg text-gray-800">
              Expert Guides :{" "}
              <span className="font-normal text-base text-gray-700">
                Our guides are locals who know the ins and outs of their cities,
                offering insider knowledge and personalized recommendations.
              </span>
            </li>
            <li className="font-semibold text-lg text-gray-800">
              Cultural Immersion:{" "}
              <span className="font-normal text-base text-gray-700">
                We focus on experiences that allow you to connect with local
                communities, taste traditional cuisines, and participate in
                cultural practices.
              </span>
            </li>
            <li className="font-semibold text-lg text-gray-800">
              Sustainable Travel:{" "}
              <span className="font-normal text-base text-gray-700">
                We are committed to responsible tourism that respects the
                environment and supports local economies.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
