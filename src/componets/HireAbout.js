import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import Im5 from '../assets/im5.png'
import Im6 from '../assets/im6.png'
const features = [
  {
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    title: "Hire Silicon Valley Caliber At Half The Cost",
    desc: "Hire the top 1% of 15M+ developers from 150+ countries.",
  },
  {
    icon: (
      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
        +
      </div>
    ),
    title: "100+ Skills Available",
    desc: "Access engineers with deep expertise across modern technologies.",
  },
];

export default function HireAbout() {
  return (
    <div className="w-full px-6 py-16 md:px-4 lg:px-16 mt-1 bg-linear-to-r/longer from-red-700 to-green-900  ">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-4xl text-slate-900 mb-4">
          Why Hire Developers From Our Name
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Illustration */}
        <div className="flex justify-center">
        <img src={Im5}/>
        </div>

        {/* Hire Section Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            High Quality / Cost Ratio
          </h2>

          {features.map((item, index) => (
            <div key={index} className="flex gap-4 mb-6">
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------ */}
      {/* Rigorous Vetting Section */}
      {/* ------------------------ */}

      <section className="w-full px-6 py-0 md:px-12 lg:px-16 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Rigorous Vetting
            </h2>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <CheckCircle2 className="w-3 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    5+ Hours Of Tests And Interviews
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Hire The Top 1% Of 15 Million+ Developers From 150+ Countries.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <XCircle className="w-6 h-6 text-red-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Seniority Tests
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Hire The Top 1% Of 15 Million+ Developers From 150+ Countries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <img src={Im6}/>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
