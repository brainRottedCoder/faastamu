import React from "react";
import { Calendar, Sparkles, TrendingUp, Code, Trophy, Briefcase, Users, Lightbulb } from "lucide-react";

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

            {/* FINCRAFT Workshop Event */}
            <div className="glass-panel rounded-2xl p-8 mb-8 relative overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                <span className="text-green-400 text-xs font-semibold">UPCOMING</span>
              </div>

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="md:w-1/3">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-xl p-6 flex items-center justify-center">
                    <TrendingUp className="text-blue-400 w-16 h-16" />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3">
                    <span className="text-blue-400 text-sm font-medium">Workshop</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">FINCRAFT Workshop – FAAST Week 2026</h3>
                  <p className="text-gray-300 mb-4">
                    FINCRAFT is a one-day hands-on workshop focused on real-world financial decision-making. The session connects core finance concepts with practical analysis through data-driven tools, guided case studies, and interactive learning.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-medium">📅 Duration:</span>
                      <span className="text-gray-300">One Day</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-medium">📍 Venue:</span>
                      <span className="text-gray-300">TPO Auditorium, ZHCET, AMU</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="glass-panel p-3 rounded-lg border border-blue-500/10 bg-blue-500/5">
                      <h4 className="text-blue-400 font-medium mb-1 text-sm">📚 What You'll Learn</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Financial systems, markets, and risk–return concepts</li>
                        <li>• Financial, operational metrics and valuation basics</li>
                        <li>• Case study approach, structuring, and presentation</li>
                        <li>• Strategy building, basic backtesting, and analysis</li>
                        <li>• Trading psychology, discipline, and ethics</li>
                      </ul>
                    </div>
                    <div className="glass-panel p-3 rounded-lg border border-blue-500/10 bg-blue-500/5">
                      <h4 className="text-blue-400 font-medium mb-1 text-sm">🛠️ Tools Used</h4>
                      <p className="text-gray-300 text-sm">Python, analytics & ML libraries, data visualization, real market data</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">Financial Systems</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">Case Studies</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">Trading Psychology</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">Python</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">Data Visualization</span>
                  </div>

                  <a
                    href="https://drive.google.com/file/d/1v1vnYzQQtXvFq4F6bKXrLx6Q9dx35ILA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <span className="font-medium">View Workshop Details (PDF)</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Case Study Competition Event */}
            <div className="glass-panel rounded-2xl p-8 mb-8 relative overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl" />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                <span className="text-green-400 text-xs font-semibold">UPCOMING</span>
              </div>

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="md:w-1/3">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-pink-500/10 to-rose-600/10 rounded-xl p-6 flex items-center justify-center">
                    <Briefcase className="text-pink-400 w-16 h-16" />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 mb-3">
                    <span className="text-pink-400 text-sm font-medium">Competition</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">Case Study Competition</h3>
                  <p className="text-gray-300 mb-4">
                    Solve a challenging finance/tech case study with clear, practical solutions. Showcase your problem-solving skills and innovative thinking.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="glass-panel p-3 rounded-lg border border-pink-500/10 bg-pink-500/5">
                      <h4 className="text-pink-400 font-medium mb-1 text-sm">Format</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Round 1: 3-4 slide solution deck</li>
                        <li>• Round 2: Live presentation & Q&A</li>
                      </ul>
                    </div>
                    <div className="glass-panel p-3 rounded-lg border border-pink-500/10 bg-pink-500/5">
                      <h4 className="text-pink-400 font-medium mb-1 text-sm">Evaluation</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Problem Understanding (20%)</li>
                        <li>• Analysis Depth (25%)</li>
                        <li>• Feasibility (20%) & Innovation (15%)</li>
                        <li>• Presentation & Q&A (20%)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400 font-medium">📅 Rounds:</span>
                      <span className="text-gray-300">Jan 26-28 (Live/Online)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400 font-medium">📝 Register:</span>
                      <span className="text-gray-300">Jan 12-25</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400 font-medium">💰 Fee:</span>
                      <span className="text-gray-300">₹99 per member</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400 font-medium">📜 Perk:</span>
                      <span className="text-gray-300">Certificate for All</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 border-t border-pink-500/10 pt-4">
                    <div>
                      <span className="text-pink-400 font-bold block text-lg">₹1250</span>
                      <span className="text-gray-400 text-xs">1st Prize</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-bold block text-lg">₹750</span>
                      <span className="text-gray-400 text-xs">2nd Prize</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-bold block text-lg">Commendation</span>
                      <span className="text-gray-400 text-xs">3rd Prize</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm">Strategy</span>
                    <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm">Innovation</span>
                    <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm">Problem Solving</span>
                  </div>

                  <a
                    href="https://drive.google.com/file/d/1v1vnYzQQtXvFq4F6bKXrLx6Q9dx35ILA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-pink-400 hover:text-pink-300 transition-colors group"
                  >
                    <span className="font-medium">View Competition Details (PDF)</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

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

            {/* FAASTHON Fintech Hackathon Event */}
            <div className="glass-panel rounded-2xl p-8 mb-8 relative overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl" />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                <span className="text-green-400 text-xs font-semibold">UPCOMING</span>
              </div>

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="md:w-1/3">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-xl p-6 flex items-center justify-center">
                    <Code className="text-orange-400 w-16 h-16" />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-3">
                    <span className="text-orange-400 text-sm font-medium">Fintech Hackathon</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">FAASTHON – Fintech Hackathon | FAAST Week 2026</h3>
                  <p className="text-gray-300 mb-4">
                    Step into the world of quantitative finance and algorithmic trading at FAASTHON, a 48-hour fintech hackathon where participants transform real-world financial data into actionable trading strategies. Open to all bonafide UG & PG students of AMU.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 font-medium">📅 Duration:</span>
                      <span className="text-gray-300">48 Hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 font-medium">📍 Venue:</span>
                      <span className="text-gray-300">TPO Auditorium, ZHCET, AMU</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 font-medium">🏆 1st Prize:</span>
                      <span className="text-gray-300">₹1250</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 font-medium">🥈 2nd Prize:</span>
                      <span className="text-gray-300">₹750</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="glass-panel p-3 rounded-lg border border-orange-500/10 bg-orange-500/5">
                      <h4 className="text-orange-400 font-medium mb-1 text-sm">What You Will Do</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Explore financial data and market behaviour</li>
                        <li>• Build algorithmic trading models</li>
                        <li>• Backtest strategies and analyse risk</li>
                      </ul>
                    </div>
                    <div className="glass-panel p-3 rounded-lg border border-orange-500/10 bg-orange-500/5">
                      <h4 className="text-orange-400 font-medium mb-1 text-sm">Problem Statement</h4>
                      <p className="text-gray-300 text-sm">
                        Design and backtest a trading strategy for a given stock or commodity. The dataset will be revealed at the beginning of the event.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="glass-panel p-3 rounded-lg border border-orange-500/10 bg-orange-500/5">
                      <h4 className="text-orange-400 font-medium mb-1 text-sm">🛠️ Tools You May Use</h4>
                      <p className="text-gray-300 text-sm">Python, Pine Script, Excel, R</p>
                    </div>
                    <div className="glass-panel p-3 rounded-lg border border-orange-500/10 bg-orange-500/5">
                      <h4 className="text-orange-400 font-medium mb-1 text-sm">📊 Evaluation Criteria</h4>
                      <p className="text-gray-300 text-sm">Strategy Performance, Analytical Insight, Innovation & Backtesting, Live Validation</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm">Algorithmic Trading</span>
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm">Backtesting</span>
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm">Quantitative Finance</span>
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm">Python</span>
                  </div>

                  <a
                    href="https://drive.google.com/file/d/1v1vnYzQQtXvFq4F6bKXrLx6Q9dx35ILA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-orange-400 hover:text-orange-300 transition-colors group"
                  >
                    <span className="font-medium">View Hackathon Details (PDF)</span>
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