import React from "react";
import { Check } from "lucide-react";

export default function Page() {
  const menuItems = [
    "Benefits Of Hiring Developers",
    "Key Factors To Consider While Hiring",
    "Defining Your Project Requirements",
    "Choosing The Right Development Model",
    "Typical Challenges For Hiring Developers",
    "Hiring Freelancers Vs. Dedicated Developers",
    "Communication With Remote Developers",
  ];

  const benefits = [
    "Client-Centric Approach",
    "Best-In-Class Project Management",
    "Global Quality Standards",
    "Time-Zone Compatibility",
    "Cutting-Edge Infrastructure",
    "Agile Adaptability",
  ];

  return (
    <div className=" bg-white min-w-full mt-20 ">
      {/* Header */}
      <div className="bg-white py-12 px-4 md:px-8">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-slate-900">
          User Guide To Hire Dedicated Software Developers
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row bg-white shadow-2xl lg:mr-20 h-full gap-10">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-96 px-4 md:px-8 py-10 shadow-2xl lg:ml-20">
          <nav className="space-y-4 md:space-y-6">
            {menuItems.map((item) => (
              <div key={item}>
                <button
                  className={`w-full text-left py-3 px-4 font-medium text-sm md:text-base transition-colors ${
                    item === "Key Factors To Consider While Hiring"
                      ? "bg-emerald-500 text-white rounded"
                      : "text-slate-900 hover:text-emerald-600"
                  }`}
                >
                  {item}
                </button>
              </div>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-white px-4 md:px-12 py-12 shadow-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
            Benefits Of Hiring Developers
          </h2>

          <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting
            industry. Lorem ipsum Has Been The Industry's Standard Dummy Text
            Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
            And Scrambled It To Make A Type Specimen Book.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 mr-0 md:mr-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <Check className="w-6 h-6 text-emerald-500" strokeWidth={3} />
                <span className="text-slate-900 font-medium text-sm md:text-base">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative w-full h-48 sm:h-64 rounded overflow-hidden">
            <img
              src={require('../assets/im2.png')}
              alt="Developer working at computer"
              className="w-full h-full object-cover"
            />
          </div>
        </main>

      </div>
    </div>
  );
}
