"use client";

import StepCard from "./StepCard";
import { HelpCircle } from "lucide-react";

export default function Card() {
  const steps = [
    {
      number: 1,
      title: "INQUIRY",
      description: "Lorem ipsum is simply dummy text of the printing industry.",
    },
    {
      number: 2,
      title: "Select Developers",
      description: "Lorem ipsum is simply dummy text of the printing industry..",
    },
    {
      number: 3,
      title: "Team Integration",
      description: "Lorem ipsum is simply dummy text of the printing industry.",
    },
    {
      number: 4,
      title: "Team Scaling",
      description: "Lorem ipsum is simply dummy text of the printing industry.",
    },
  ];

  return (
    <div className=" text-center mt-10 mb-5">
 <h1 className="font-bold text-5xl">Our Hiring Process</h1>
 <p className="mt-5">Take a look at our simple and straightforward process to hire software developers from ValueCoders.</p>

    <div className="relative w-full max-w-7xl mx-auto mt-20 px-4 ">

      {/* Decorative curve – appears only once */}
      <div className="hidden md:block absolute left-0 top-1/2 w-24 h-24 border-4 border-teal-200 rounded-full opacity-40" />

      {/* Step Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-10 place-items-center ">
        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            icon={
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <HelpCircle className="w-10 h-10 text-gray-600" strokeWidth={1.5} />
                </div>
                <div className="w-12 h-8 bg-gray-200 rounded-t-2xl" />
              </div>
            }
          />
        ))}
      </div>
    </div>
    </div>
  );
}
