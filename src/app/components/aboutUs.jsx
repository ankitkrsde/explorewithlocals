import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="w-full px-10 lg:px-24 mt-16 flex flex-col ">
        <div className="flex flex-col gap-4 items-center justify-center mb-10">
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
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 border-b-2 border-red-500 w-fit">
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
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 border-b-2 border-red-500 w-fit">
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

        <div className="flex flex-col gap-4 mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 border-b-2 border-red-500 w-fit">
            Our Values
          </h3>
          <p className="text-gray-700">
            At ExploreWithLocals, we are driven by our core values of
            authenticity, passion, and respect. We strive to provide meaningful
            travel experiences that not only satisfy your wanderlust but also
            leave a positive impact on the destinations we visit.
          </p>
          <ul className="flex flex-col gap-4 mt-4">
            <li className="font-semibold text-lg text-gray-800">
              Authenticity :{" "}
              <span className="font-normal text-base text-gray-700">
                We believe in offering genuine experiences that showcase the
                true essence of each place.
              </span>
            </li>
            <li className="font-semibold text-lg text-gray-800">
              Passion :{" "}
              <span className="font-normal text-base text-gray-700">
                Our love for travel fuels everything we do, from planning
                itineraries to guiding tours.
              </span>
            </li>
            <li className="font-semibold text-lg text-gray-800">
              Respect :{" "}
              <span className="font-normal text-base text-gray-700">
                We are dedicated to promoting responsible tourism that honors
                local cultures and environments.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 border-b-2 border-red-500 w-fit">
            Why Choose Us?
          </h3>
          <ul className="flex flex-col gap-4 mt-4">
            <li className="font-semibold text-lg text-gray-800">
              Local Expertise :{" "}
              <span className="font-normal text-base text-gray-700">
                Our guides are natives who offer unparalleled knowledge and
                unique insights into their communities.
              </span>
            </li>
            <li className="font-semibold text-lg text-gray-800">
              Flexible Options :{" "}
              <span className="font-normal text-base text-gray-700">
                We offer a range of tours, from day trips to extended journeys,
                with options to customize your experience.
              </span>
            </li>
            <li className="font-semibold text-lg text-gray-800">
              Commitment to Quality :{" "}
              <span className="font-normal text-base text-gray-700">
                We are dedicated to providing high-quality services, from the
                moment you book to the end of your journey.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 ">
            Join Us on Your Next Adventure
          </h3>
          <p className="text-gray-700">
            Whether you’re exploring a bustling city, trekking through scenic
            landscapes, or discovering ancient ruins, ExploreWithLocals is here
            to make your journey one you’ll never forget. Let us guide you
            through the wonders of the world, one unforgettable experience at a
            time.
          </p>
        </div>
      </div>
    </>
  );
}
