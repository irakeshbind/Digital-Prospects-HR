import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Soft() {
  const benefits = [
    "English Speaking Programmers",
    "Flexible Work Hours",
    "Rapid Onboarding Process",
    "Expertise In Top Technologies",
    "Reliable Partner Credentials",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900">
      <div className="px-6 py-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <div>
          <h1 className="w-full text-3xl lg:text-5xl font-bold text-white mb-10 leading-tight text-balance ">
            Why Hire Software Developers in India?
          </h1>

          <div className="relative w-full h-72 lg:h-96 rounded-lg overflow-hidden ">
            <img
              src={require("../assets/f33.png")}
              alt="Developers working"
              className="w-full h-full object-cover opacity-80 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900/40 to-transparent" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-start lg:justify-end w-full">
          <ul className="w-full max-w-sm space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="group">
                <div className="flex items-center justify-between py-3 cursor-pointer">
                  <span className="text-lg text-white font-medium group-hover:text-blue-300 transition-colors">
                    {benefit}
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:text-blue-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="w-full h-px bg-white/20 group-hover:bg-blue-300/40 transition-colors" />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </main>
  );
}
