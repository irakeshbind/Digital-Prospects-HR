"use client";
import React from "react";

function ArrowIcon({ className = "w-4 h-4", ariaHidden = true }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
    >
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HiringHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 py-16 lg:py-0 bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-8 w-24 h-24 bg-gradient-to-br from-[#1abc9c]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-0 w-32 h-32 bg-[#1abc9c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        {/* Accent row */}
        <p className="text-[#1abc9c] font-semibold text-sm md:text-base mb-3 flex items-center gap-3">
          <span className="tracking-wide">HIRE DEDICATED</span>
          <span className="w-12 h-[2px] bg-[#1abc9c] inline-block" />
        </p>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e3a4c] mb-4 leading-tight">
          DEVELOPERS
        </h1>

        {/* Subheading */}
        <p className="text-lg font-semibold text-[#1e3a4c] mb-6">
          Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
        </p>

        {/* Description */}
        <p className="text-gray-700 mb-8 leading-relaxed max-w-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. It has survived not only five centuries, but also the leap
          into electronic typesetting.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b7a] text-white font-semibold rounded-lg hover:bg-[#ff5563] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6b7a]/50"
            onClick={() => {
              // replace with your handler
              window.location.href = "/developers";
            }}
            aria-label="View more developers"
          >
            <span>View More</span>
            <ArrowIcon />
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1abc9c] text-[#1abc9c] font-semibold rounded-lg hover:bg-[#1abc9c]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1abc9c]/30"
            onClick={() => {
              // replace with your handler
              window.location.href = "/contact";
            }}
            aria-label="Get in touch"
          >
            <span>Get In Touch</span>
            <ArrowIcon />
          </button>
        </div>
      </div>

      {/* Optional subtle gradient/footer decoration */}
      <div className="absolute bottom-0 right-0 w-56 h-40 bg-gradient-to-tr from-[#fef3f4]/60 to-transparent rounded-tl-3xl pointer-events-none" />
    </section>
  );
}

// form wala

// 'use client'

// import { FormEvent, useState } from 'react'

// export function HiringForm() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     country: '',
//     projectBrief: '',
//   })

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//   }

//   return (
//     <section className="min-h-screen flex flex-col justify-center px-8 lg:px-12 py-16 lg:py-0 bg-white">
//       <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl mx-auto w-full">
//         {/* Form header */}
//         <h2 className="text-3xl font-bold text-[#1e3a4c] mb-2">
//           Create Your Team
//         </h2>
//         <p className="text-gray-500 text-sm mb-8">
//           Lorem Ipsum is simply dummy text of the printing industry.
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Full Name + Email */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-semibold text-[#1e3a4c] mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Enter Your Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50
//                 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2
//                 focus:ring-[#1abc9c]/50 transition-all"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-semibold text-[#1e3a4c] mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50
//                 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2
//                 focus:ring-[#1abc9c]/50 transition-all"
//               />
//             </div>
//           </div>

//           {/* Phone + Country */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Phone */}
//             <div>
//               <label className="block text-sm font-semibold text-[#1e3a4c] mb-2">
//                 Phone No.
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter Your Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50
//                 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2
//                 focus:ring-[#1abc9c]/50 transition-all"
//               />
//             </div>

//             {/* Country */}
//             <div>
//               <label className="block text-sm font-semibold text-[#1e3a4c] mb-2">
//                 Country
//               </label>
//               <input
//                 type="text"
//                 name="country"
//                 placeholder="Enter Your Country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50
//                 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2
//                 focus:ring-[#1abc9c]/50 transition-all"
//               />
//             </div>
//           </div>

//           {/* Project Brief */}
//           <div>
//             <label className="block text-sm font-semibold text-[#1e3a4c] mb-2">
//               Project Brief
//             </label>
//             <textarea
//               name="projectBrief"
//               placeholder="Enter Your Project Brief"
//               value={formData.projectBrief}
//               onChange={handleChange}
//               rows={4}
//               className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50
//               text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2
//               focus:ring-[#1abc9c]/50 transition-all resize-none"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-[#ff6b7a] text-white font-semibold rounded-lg
//             hover:bg-[#ff5563] transition-colors flex items-center justify-center gap-2 mt-8"
//           >
//             Hire Software Developer
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M5 12h14m-6-6 6 6-6 6"
//               />
//             </svg>
//           </button>
//         </form>
//       </div>
//     </section>
//   )
// }
