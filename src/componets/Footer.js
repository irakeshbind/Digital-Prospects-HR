import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export function Footer() {
  return (
    <div>
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8  rounded-full flex items-center justify-center">
               <img src={require('../assets/im13.png')}/>
            </div>
            <h3 className="text-white font-bold text-lg">Logoisum</h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 pt-4 ">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className=" w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition"
              >
                <Icon size={18} className="text-green-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {[
              "Software Team",
              "Technologies",
              "Resources",
              "Company",
              "Contact us",
              "FAQ"
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-500 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg mb-6">Services</h3>
          <ul className="space-y-3">
            {[
              "Dedicated Development",
              "Staff Augmentation Services",
              "Software Development",
              "Development Center"
            ].map((service) => (
              <li key={service}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-500 transition"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>

          <div className="space-y-4">
            {/* Address */}
            <div className="flex gap-3 items-start">
              <MapPin size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div className="text-gray-400 text-sm">
                <p>Envato, Level 13, 2 Elizabeth</p>
                <p>Victoria 3000 India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-center">
              <Phone size={20} className="text-teal-500 flex-shrink-0" />
              <a
                href="tel:+918619441176"
                className="text-gray-400 hover:text-teal-500 transition text-sm"
              >
                +91 861 944 1176
              </a>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-center">
              <Mail size={20} className="text-teal-500 flex-shrink-0" />
              <a
                href="mailto:ezyago@gmail.com"
                className="text-gray-400 hover:text-teal-500 transition text-sm"
              >
                ezyago@gmail.com
              </a>
            </div>
          </div>
        </div>

      </div>
      
     
    </footer>
    <div className="bg-green-500 w-full h-full px-10 py-2 text-center text-cyan-50">


        <p>logoname. 2023. All rights reserved</p>
    </div>
    </div>
  );
}
