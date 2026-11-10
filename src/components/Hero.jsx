import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, MapPin, Sparkles, Clock, Layers, Users } from 'lucide-react';

export default function Hero({ onSelectPractice }) {
  const practiceTags = [
    { label: "Oracle Fusion & EBS", id: "oracle" },
    { label: "Databricks & Snowflake", id: "data-ai" },
    { label: "AWS & Azure Multi-Cloud", id: "cloud" },
    { label: "Document AI & Automation", id: "data-ai" },
  ];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-[#F8FAF9] bg-grid-subtle border-b border-[#E2E8E4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#DCE4DF] shadow-sm mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0E5E3A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0E5E3A]"></span>
            </span>
            <span className="text-xs font-semibold text-[#11261B] tracking-wide">
              Fort Mill, SC · Working across Charlotte & the Carolinas
            </span>
          </div>

          {/* Headline - Solid unique color, strictly NO gradient */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#11261B] tracking-tight leading-[1.08] mb-6">
            Enterprise systems that run your business, <span className="text-[#0E5E3A]">not the other way around.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#526E60] leading-relaxed mb-10 max-w-3xl mx-auto font-normal">
            AARK Innovations is a premier consulting firm helping mid-market and enterprise teams modernise how they operate — from <span className="font-semibold text-[#11261B]">Oracle ERP</span> implementations to <span className="font-semibold text-[#11261B]">Data & AI</span> platforms on AWS, Microsoft Azure, Databricks and Snowflake. Senior consultants, accountable delivery, measurable outcomes.
          </p>

          {/* Dual CTAs - Solid colors */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#0E5E3A] hover:bg-[#0A472C] text-white font-semibold text-base shadow-sm transition-all"
            >
              <span>Book a 30-minute working session</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#FFFFFF] hover:bg-[#F3F6F4] text-[#11261B] border border-[#DCE4DF] font-semibold text-base transition-colors"
            >
              <Calculator className="w-4 h-4 text-[#0E5E3A]" />
              <span>Calculate Reclaimed Hours</span>
            </a>
          </div>

          {/* Quick Filter Pills */}
          <div className="pt-2 pb-6 border-t border-[#E8EEEA] max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#6B8576] mb-3">
              Explore Specialized Capability:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {practiceTags.map((tag, idx) => (
                <a
                  key={idx}
                  href="#practices"
                  onClick={() => onSelectPractice && onSelectPractice(tag.id)}
                  className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[#FFFFFF] hover:bg-[#EEF5F1] text-[#11261B] hover:text-[#0E5E3A] border border-[#DCE4DF] transition-all flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E5E3A]"></span>
                  {tag.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Stat Metric Bar */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-xl bg-[#FFFFFF] border border-[#DCE4DF] shadow-sm">
            <div className="p-4 border-r-0 lg:border-r border-b lg:border-b-0 border-[#E8EEEA]">
              <div className="text-3xl sm:text-4xl font-display font-bold text-[#0E5E3A] mb-1">
                20+ hrs
              </div>
              <div className="text-sm font-semibold text-[#11261B]">Returned weekly</div>
              <div className="text-xs text-[#526E60] mt-0.5">To typical client operational team</div>
            </div>

            <div className="p-4 border-r-0 sm:border-r-0 lg:border-r border-b lg:border-b-0 border-[#E8EEEA]">
              <div className="text-3xl sm:text-4xl font-display font-bold text-[#11261B] mb-1">
                4–8 wks
              </div>
              <div className="text-sm font-semibold text-[#11261B]">Time to production</div>
              <div className="text-xs text-[#526E60] mt-0.5">Average for first automated workflow</div>
            </div>

            <div className="p-4 border-r-0 lg:border-r border-b sm:border-b-0 border-[#E8EEEA]">
              <div className="text-3xl sm:text-4xl font-display font-bold text-[#11261B] mb-1">
                15+ yrs
              </div>
              <div className="text-sm font-semibold text-[#11261B]">Cloud & data tenure</div>
              <div className="text-xs text-[#526E60] mt-0.5">Senior architect career average</div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-display font-bold text-[#D97706] mb-1">
                100%
              </div>
              <div className="text-sm font-semibold text-[#11261B]">Senior practitioners</div>
              <div className="text-xs text-[#526E60] mt-0.5">Zero outsourced junior analyst billing</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
