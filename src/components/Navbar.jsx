import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Ribbon */}
      <div className="bg-[#11261B] text-[#E8EFEA] text-xs font-medium py-2 px-4 border-b border-[#1D3B2B]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>Fort Mill, SC · Serving Enterprise Leaders Across Charlotte & the Carolinas Corridor</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-[#A3B8AD]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              100% Senior Delivery Model
            </span>
            <span>|</span>
            <a href="mailto:hello@aarkinn.com" className="hover:text-white transition-colors">hello@aarkinn.com</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E8E4] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-[#0E5E3A] flex items-center justify-center text-white font-display font-bold text-xl shadow-sm group-hover:bg-[#0A472C] transition-colors">
                A
              </div>
              <div>
                <span className="block font-display font-bold text-xl tracking-tight text-[#11261B]">
                  AARK Innovations
                </span>
                <span className="block text-[10px] font-semibold tracking-wider uppercase text-[#526E60]">
                  Enterprise Systems · Data & AI
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#practices" className="text-sm font-semibold text-[#374151] hover:text-[#0E5E3A] transition-colors">
                Practices
              </a>
              <a href="#ecosystem" className="text-sm font-semibold text-[#374151] hover:text-[#0E5E3A] transition-colors">
                Platforms
              </a>
              <a href="#diagnostic" className="text-sm font-semibold text-[#374151] hover:text-[#0E5E3A] transition-colors">
                Why AARK
              </a>
              <a href="#calculator" className="text-sm font-semibold text-[#0E5E3A] flex items-center gap-1.5 px-3 py-1 bg-[#EEF5F1] rounded-full hover:bg-[#E1EDE6] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E5E3A]"></span>
                ROI Calculator
              </a>
              <a href="#engagement" className="text-sm font-semibold text-[#374151] hover:text-[#0E5E3A] transition-colors">
                Engagement Models
              </a>
              <a href="#faq" className="text-sm font-semibold text-[#374151] hover:text-[#0E5E3A] transition-colors">
                FAQ
              </a>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0E5E3A] hover:bg-[#0A472C] text-white text-sm font-semibold shadow-sm transition-all"
              >
                <span>Book Working Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#11261B] hover:bg-[#F1F5F2]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#E2E8E4] bg-[#FFFFFF] px-4 pt-3 pb-6 space-y-3">
            <a
              href="#practices"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-[#11261B] hover:bg-[#F8FAF9]"
            >
              Practices
            </a>
            <a
              href="#ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-[#11261B] hover:bg-[#F8FAF9]"
            >
              Platforms & Ecosystem
            </a>
            <a
              href="#diagnostic"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-[#11261B] hover:bg-[#F8FAF9]"
            >
              Why AARK (Diagnostic)
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-[#0E5E3A] bg-[#EEF5F1]"
            >
              ROI & Time Calculator
            </a>
            <a
              href="#engagement"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-[#11261B] hover:bg-[#F8FAF9]"
            >
              Engagement Models
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-[#11261B] hover:bg-[#F8FAF9]"
            >
              FAQ
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0E5E3A] text-white text-base font-semibold"
              >
                <span>Book Working Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
