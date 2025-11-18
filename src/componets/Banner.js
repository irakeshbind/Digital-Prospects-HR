"use client";
import React, { useState, FormEvent } from "react";

function ArrowIcon({ className = "w-4 h-4", ariaHidden = true }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HiringSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    projectBrief: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="min-h-screen px-6 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 items-start  bg-linear-to-r/longer from-red-700 to-green-900 ">
      {/* ---------------- LEFT HERO ---------------- */}
      <div className="flex-1 relative">
        {/* BG Decorations */}
        <div className="absolute top-20 left-8 w-24 h-24 bg-gradient-to-br from-[#1abc9c]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-0 w-32 h-32 bg-[#1abc9c]/10 rounded-full blur-3xl" />

        <p className="text-[#1abc9c] font-semibold text-sm md:text-base mb-3 flex items-center gap-3">
          <span>HIRE DEDICATED</span>
          <span className="w-12 h-[2px] bg-[#1abc9c] inline-block" />
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e3a4c] mb-4 leading-tight">
          DEVELOPERS
        </h1>

        <p className="text-lg font-semibold text-[#1e3a4c] mb-6">
          Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed max-w-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. It has survived not only five centuries, but also the leap
          into electronic typesetting.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b7a] text-white font-semibold rounded-lg hover:bg-[#ff5563] transition"
            onClick={() => (window.location.href = "/developers")}
          >
            View More <ArrowIcon />
          </button>

          <button
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1abc9c] text-[#1abc9c] font-semibold rounded-lg hover:bg-[#1abc9c]/5 transition"
            onClick={() => (window.location.href = "/contact")}
          >
            Get In Touch <ArrowIcon />
          </button>
        </div>
      </div>

{/* ---------------- RIGHT FORM (SHORT HEIGHT + WIDER) ---------------- */} 

<div className="flex-1 max-w-lg w-full  bg-white rounded-lg shadow-md p-7">
  <div className="text-center py-2">
    <h2 className="text-xl font-bold text-[#1e3a4c] mb-1">
    Create Your Team
  </h2>
  <p className="text-gray-500 text-xs mb-4">
    Lorem Ipsum is simply dummy text of the printing industry.
  </p>
  </div>

  <form onSubmit={handleSubmit} className="space-y-4">
    {/* Full Name + Email */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <label className="block text-xs font-semibold text-[#1e3a4c] mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Your Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-3 py-1.5 border border-gray-200 rounded-md bg-gray-50 text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1e3a4c] mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-1.5 border border-gray-200 rounded-md bg-gray-50 text-sm"
        />
      </div>
    </div>

    {/* Phone + Country */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <label className="block text-xs font-semibold text-[#1e3a4c] mb-1">
          Phone No.
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-1.5 border border-gray-200 rounded-md bg-gray-50 text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1e3a4c] mb-1">
          Country
        </label>
        <input
          type="text"
          name="country"
          placeholder="Enter Your Country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-3 py-1.5 border border-gray-200 rounded-md bg-gray-50 text-sm"
        />
      </div>
    </div>

    {/* Project Brief */}
    <div>
      <label className="block text-xs font-semibold text-[#1e3a4c] mb-1">
        Project Brief
      </label>
      <textarea
        name="projectBrief"
        placeholder="Enter Your Project Brief"
        value={formData.projectBrief}
        onChange={handleChange}
        rows={2}
        className="w-full px-3 py-1.5 border border-gray-200 rounded-md bg-gray-50 text-sm resize-none"
      />
    </div>

    <button
      type="submit"
      className="w-full py-2 bg-[#ff6b7a] text-white text-sm font-semibold rounded-md hover:bg-[#ff5563] flex items-center justify-center gap-2"
    >
      Hire Software Developer
      <ArrowIcon className="w-3 h-3" />
    </button>
  </form>
</div>


    </section>
  );
}
