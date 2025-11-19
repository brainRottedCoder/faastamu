"use client";

import React, { useState } from "react";
import { Bitcoin, LineChart, TrendingUp, Users } from "lucide-react";

export default function Teams() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = [
    {
      id: 1,
      name: "Quant & Crypto",
      icon: Bitcoin,
      color: "from-yellow-500 to-orange-600",
      glowColor: "shadow-yellow-500/50",
      description: "Specialized in quantitative analysis, cryptocurrency trading, and blockchain technology",
      responsibilities: [
        "Develop quantitative trading strategies and algorithms",
        "Research and analyze cryptocurrency markets",
        "Build blockchain-based applications and DeFi protocols",
        "Conduct technical analysis on crypto assets",
        "Create automated trading bots for crypto markets"
      ],
      skills: ["Python", "Blockchain", "Smart Contracts", "Quantitative Analysis", "Crypto Trading"]
    },
    {
      id: 2,
      name: "Research & Analytics",
      icon: LineChart,
      color: "from-cyan-500 to-blue-600",
      glowColor: "shadow-cyan-500/50",
      description: "Focused on market research, data analysis, and financial modeling",
      responsibilities: [
        "Conduct in-depth market research and competitor analysis",
        "Build predictive models for financial forecasting",
        "Analyze financial statements and company fundamentals",
        "Create data visualizations and dashboards",
        "Develop research papers on market trends"
      ],
      skills: ["Data Analysis", "Python/R", "Financial Modeling", "Statistics", "Excel"]
    },
    {
      id: 3,
      name: "Stocks & Trade",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600",
      glowColor: "shadow-green-500/50",
      description: "Active trading team managing portfolios and executing market strategies",
      responsibilities: [
        "Execute live trades in equity and derivative markets",
        "Manage virtual and real trading portfolios",
        "Analyze market trends and technical indicators",
        "Conduct trading sessions and competitions",
        "Mentor members on trading strategies and risk management"
      ],
      skills: ["Technical Analysis", "Risk Management", "Trading Platforms", "Portfolio Management", "Market Psychology"]
    },
    {
      id: 4,
      name: "PR & Events",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      glowColor: "shadow-purple-500/50",
      description: "Managing club communications, events, and community engagement",
      responsibilities: [
        "Organize workshops, seminars, and guest lectures",
        "Manage social media presence and content creation",
        "Coordinate with sponsors and industry partners",
        "Plan and execute club events and competitions",
        "Handle member recruitment and onboarding"
      ],
      skills: ["Event Management", "Social Media Marketing", "Public Speaking", "Design", "Networking"]
    },
    {
      id: 5,
      name: "Case Study & Business Strategy Team",
      icon: LineChart,
      color: "from-cyan-500 to-blue-600",
      glowColor: "shadow-cyan-500/50",
      description: "Explore business cases and financial models through case studies and competitive analysis",
      responsibilities: [
        "Analyze business cases and financial models",
        "Conduct in-depth market research and competitive analysis",
        "Build predictive models for financial forecasting",
        "Analyze financial statements and company fundamentals",
        "Create data visualizations and dashboards",
        "Develop research papers on market trends",
        "Apply financial analysis techniques to real-world problems",
        "Collaborate with teams to find optimal solutions"
      ],
      skills: ["Python", "Financial Modeling", "Data Analysis", "Statistics", "Excel"]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-semibold">OUR DIVISIONS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-gradient">Teams</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Five specialized divisions working together to build the future of FinTech at AMU
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {teams.map((team) => (
                <div
                  key={team.id}
                  onClick={() => setSelectedTeam(selectedTeam?.id === team.id ? null : team)}
                  className={`glass-panel rounded-xl p-8 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                    selectedTeam?.id === team.id ? 'glow-cyan ring-2 ring-cyan-500' : ''
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${team.color} flex items-center justify-center mb-6 transition-transform hover:scale-110 ${team.glowColor} shadow-lg`}>
                    <team.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-cyan-400">{team.name}</h3>
                  <p className="text-gray-300 mb-4">{team.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {team.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                    {team.skills.length > 3 && (
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm">
                        +{team.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="mt-6 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    {selectedTeam?.id === team.id ? 'Click to collapse ▲' : 'Click to learn more ▼'}
                  </div>
                </div>
              ))}
            </div>

            {/* Expanded Team Details */}
            {selectedTeam && (
              <div className="glass-panel rounded-xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-20 h-20 rounded-xl bg-linear-to-br ${selectedTeam.color} flex items-center justify-center ${selectedTeam.glowColor} shadow-xl`}>
                    <selectedTeam.icon className="text-white" size={40} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-cyan-400">{selectedTeam.name}</h2>
                    <p className="text-gray-400">Team Division</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Key Responsibilities</h3>
                    <ul className="space-y-3">
                      {selectedTeam.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-gray-300">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Required Skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedTeam.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-lg glass-panel border border-cyan-500/30 text-cyan-400 hover:scale-105 transition-transform"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 glass-panel rounded-lg p-6 bg-cyan-500/5">
                      <h4 className="font-bold text-lg mb-2 text-cyan-400">Interested in joining this team?</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        We&apos;re always looking for passionate members. Check out our recruitment process!
                      </p>
                      <a href="/joinus" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-20 bg-[#0a1f3c]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One Club, <span className="text-gradient">Multiple Paths</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              While each team has its specialization, all FAAST members collaborate on 
              projects, share knowledge, and support each other&apos;s growth. You&apos;re not just 
              joining a team—you&apos;re joining a family.
            </p>
            <div className="glass-panel rounded-xl p-8 inline-block">
              <p className="text-2xl font-bold text-gradient">
                &quot;Together we learn, together we grow, together we succeed.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}