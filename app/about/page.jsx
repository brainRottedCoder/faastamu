import React from "react";
import { TrendingUp, Code, BarChart, DollarSign, Zap } from "lucide-react";

export default function About() {
  const acronym = [
    { letter: "F", word: "Finance", icon: DollarSign, description: "Master the fundamentals of financial markets, trading, and investment strategies" },
    { letter: "A", word: "Algorithm", icon: Code, description: "Develop algorithmic trading systems and quantitative analysis tools" },
    { letter: "A", word: "Analytics", icon: BarChart, description: "Deep dive into data analytics, market research, and financial modeling" },
    { letter: "S", word: "Stocks", icon: TrendingUp, description: "Learn stock market operations, portfolio management, and trading techniques" },
    { letter: "T", word: "Trade", icon: Zap, description: "Get hands-on experience with live trading and real-world market scenarios" }
  ];

  return (
    <div className="min-h-screen">
    {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 matrix-bg opacity-20" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-cyan-500/30">
                  <span className="text-cyan-400 text-sm font-semibold">ABOUT FAAST</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Who We <span className="text-gradient">Are</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  FAAST is Aligarh Muslim University premier FinTech club, bringing together 
                  passionate students who want to master the intersection of finance and technology.
                </p>
              </div>
            </div>
          </section>
    
          {/* Mission & Vision */}
          <section className="py-20 bg-[#0a1f3c]/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass-panel rounded-xl p-8 hover:glow-cyan transition-all">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                      <TrendingUp className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-cyan-400">Our Mission</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      To empower students with practical knowledge, hands-on experience, and a 
                      strong network in the FinTech ecosystem. We bridge the gap between academic 
                      learning and industry demands, preparing members for successful careers in 
                      finance and technology.
                    </p>
                  </div>
    
                  <div className="glass-panel rounded-xl p-8 hover:glow-cyan transition-all">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
                      <Zap className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-purple-400">Our Vision</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      To become India`&apos;`s leading student-driven FinTech community, fostering 
                      innovation, research, and excellence. We aspire to create a generation of 
                      tech-savvy financial professionals who will shape the future of global markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* What FAAST Stands For */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                  What <span className="text-gradient">FAAST</span> Stands For
                </h2>
                <p className="text-xl text-gray-400 text-center mb-16">
                  Each letter represents a core pillar of our club expertise
                </p>
    
                <div className="space-y-6">
                  {acronym.map((item, index) => (
                    <div 
                      key={index} 
                      className="glass-panel rounded-xl p-6 hover:scale-[1.02] hover:glow-cyan transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform">
                            {item.letter}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <item.icon className="text-cyan-400" size={24} />
                            <h3 className="text-2xl font-bold text-cyan-400">{item.word}</h3>
                          </div>
                          <p className="text-gray-300 text-lg">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
    
          {/* Our Story */}
          <section className="py-20 bg-[#0a1f3c]/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                  Our <span className="text-gradient">Story</span>
                </h2>
                
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Founded at Aligarh Muslim University, FAAST emerged from a simple idea that students passionate about finance and technology deserve a platform to learn, collaborate, and innovate together.
    
                  </p>
                  
                  <p>
                   What began as a small group of enthusiasts has grown into AMU’s most dynamic FinTech community, with over 200 participants, multiple ongoing projects, and real case study work strengthening our practical understanding of modern finance.
    
    FAAST is now an interdisciplinary club, bringing together students from engineering, business studies, commerce, management, law, economics, statistics, and others. This diverse mix of talent allows us to explore financial innovation from every perspective.
    
                  </p>
                  
                  <p>
                    Today, we operate through five specialized teams: Quant and Crypto, Research and Analytics, Stocks and Trade, Case Studies and Business Strategy, and PR and Events. Together, these teams work toward our mission of developing well rounded and future ready FinTech professionals.
                  </p>
                  
                  <div className="glass-panel rounded-xl p-6 border border-cyan-500/30 mt-8">
                    <p className="text-cyan-400 font-semibold text-xl mb-2">
                      We&apos;re not just learning about the future of finance—we&apos;re building it.
                    </p>
                    <p className="text-gray-400 text-base font-mono mt-4">
                      F.A.A.S.T. was founded in 2025 with the vision to integrate Finance, Algorithmic Thinking, 
                      Analytics, Stocks, and ethical Trading into one student-driven initiative at AMU.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* What Members Do */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                  What Our <span className="text-gradient">Members Do</span>
                </h2>
    
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Participate in live ethical trading sessions with real market data",
                    "Develop algorithmic trading bots and backtesting systems",
                    "Analyze financial datasets and create predictive models",
                    "Attend workshops on blockchain, crypto, and DeFi",
                    "Compete in national and international hackathons",
                    "Build FinTech applications and tools",
                    "Network with industry professionals and alumni",
                    "Conduct research on emerging market trends",
                    "Organize events, seminars, and guest lectures"
                  ].map((activity, index) => (
                    <div 
                      key={index} 
                      className="glass-panel rounded-xl p-6 hover:scale-105 hover:glow-cyan transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-300">{activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
  );
}