"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Software Tools", href: "#" },
    { label: "Services", href: "#" },
    { label: "Technologies", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Company", href: "#" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-emerald-500" strokeWidth={2.5} />
          <span className="font-semibold text-gray-900">Logoipsum</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* CTA Button (hidden on very small screens) */}
          <button
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors text-sm font-medium"
            type="button"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile menu toggle */}
          <button
            className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-gray-700 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors text-sm font-medium"
              type="button"
              onClick={() => setMobileOpen(false)}
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
