import React from "react";
import { ArrowRight } from "lucide-react";

export default function StepCard({ number, title, description, icon }) {
  return (
    <div className="relative flex flex-col items-center gap-7">
      {/* Circular Card */}
      <div className="relative">
        <div className="w-40 h-40 rounded-full border-8 border-teal-500 flex items-center justify-center bg-white shadow-md">
          {icon}
        </div>

        {/* Notification Number */}
        <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {number}
        </div>

        {/* Arrow */}
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden md:block">
          <ArrowRight className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
        </div>
      </div>

      {/* Text */}
      <div className="text-center space-y-2 max-w-xs">
       <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 uppercase">

          {title}
        </h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
