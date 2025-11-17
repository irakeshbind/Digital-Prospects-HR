import React from "react";

const Soft = () => {
  return (
    <div className="bg-red-300 w-full py-16">
      {/* Heading */}
      <h3 className=" text-3xl md:text-5xl font-bold mb-12 px-40 leading-tight">
        Why Hire Software Developers <br /> in India?
      </h3>

      {/* List */}
      <div className=" text-right space-y-3 text-lg md:text-xl font-medium px-40 ">
        <div className="">
          <p>
            English Speaking Programmers
            <hr className="text-right space-y-3 text-lg md:text-xl font-medium px-40"></hr>
          </p>

          <p>Flexible Work Hours</p>

          <p>Rapid Onboarding Process</p>

          <p>Expertise in Top Technologies</p>

          <p>Reliable Partner Credentials</p>
        </div>
      </div>
    </div>
  );
};

export default Soft;
