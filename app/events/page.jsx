import React from "react";
import { Calendar, Sparkles } from "lucide-react";

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-semibold">EVENTS & HACKATHONS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn, Compete, <span className="text-gradient">Excel</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From workshops to hackathons, we host events that push boundaries and create opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-gradient">Upcoming & Past Events</span>
            </h2>

            {/* FAAST Research Competition Event */}
            <div className="glass-panel rounded-2xl p-8 mb-8 relative overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                <span className="text-green-400 text-xs font-semibold">UPCOMING</span>
              </div>

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="md:w-1/3">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl p-6 flex items-center justify-center">
                    <Calendar className="text-purple-400 w-16 h-16" />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-3">
                    <span className="text-purple-400 text-sm font-medium">Research Competition</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">FAAST Research Competition – FAAST Week 2026</h3>
                  <p className="text-gray-300 mb-4">
                    Submit your original unpublished research and defend it with a PPT presentation! Open to all bonafide students of AMU, participate individually or in teams (max 3 members). Papers must be in IEEE format (max 6 pages).
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-medium">📅 Date:</span>
                      <span className="text-gray-300">27-28 January, 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-medium">📍 Venue:</span>
                      <span className="text-gray-300">TPO Auditorium, ZHCET, AMU</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-medium">🏆 1st Prize:</span>
                      <span className="text-gray-300">₹1250</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-medium">🥈 Runner Up:</span>
                      <span className="text-gray-300">₹750</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">
                    <span className="text-purple-400 font-medium">Themes:</span> Data Science & Analytics, AI/ML Applications, Economics & Policy, Sustainability & ESG, Technology & Society, Interdisciplinary Research
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">Research</span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">AI/ML</span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">Data Science</span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">IEEE Format</span>
                  </div>

                  <a
                    href="/FAAST Research Competition (1).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-purple-400 hover:text-purple-300 transition-colors group"
                  >
                    <span className="font-medium">View Competition Details (PDF)</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 24 Hour Blitz Competition Event */}
            <div className="glass-panel rounded-2xl p-8 mb-8 relative overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl" />

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="md:w-1/3">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-6 flex items-center justify-center">
                    <Calendar className="text-cyan-400 w-16 h-16" />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
                    <span className="text-cyan-400 text-sm font-medium">Competition</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">24 Hour Blitz Competition</h3>
                  <p className="text-gray-300 mb-4">
                    The Fintech Club conducted a 24-hour real-time trading challenge where participants traded XAU/USD (Gold) using a virtual $5,000 balance and a maximum lot size of 0.1. The event emphasized strategic decision-making supported by technical indicators like MACD and RSI, while focusing on risk management, emotional discipline, and trading psychology.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">Trading</span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">Finance</span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">Workshop</span>
                  </div>

                  <a
                    href="https://drive.google.com/file/d/1Jl0q5gY7VSUgJjIvOmJYXxDOVTn2LJLD/view"
                    className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    <span className="font-medium">View Event Report</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* More Events Coming Soon */}
            <div className="glass-panel rounded-2xl p-8 text-center relative overflow-hidden border border-yellow-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
                  <Sparkles className="text-yellow-400" size={18} />
                  <span className="text-yellow-400 font-medium text-sm">Stay Tuned</span>
                </div>
                <h3 className="text-xl font-bold mb-2">More Exciting Events Coming Soon</h3>
                <p className="text-gray-400 mb-4">
                  We&apos;re working on bringing you more workshops, competitions, and learning opportunities.
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping delay-75" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping delay-150" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}