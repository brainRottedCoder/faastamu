import React from "react";
import { Code, Sparkles, Terminal, BarChart2, BookOpen, Zap, TrendingUp, Cpu, Database, Shield } from "lucide-react";

const TeamSection = ({ title, icon: Icon, children }) => (
  <section className="mb-16">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {children}
    </div>
  </section>
);

const ProjectCard = ({ title, description, icon: Icon, iconColor = "text-cyan-400", tags = [], links = [] }) => (
  <div className="glass-panel rounded-2xl p-6 relative overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all h-full flex flex-col">
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/5 rounded-full blur-3xl" />
    
    <div className="flex items-start gap-4 mb-4">
      <div className={`p-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border ${iconColor.replace('text-', 'border-')}/20`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    
    <p className="text-gray-300 mb-4 flex-grow">{description}</p>
    
    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
    )}
    
    {links.length > 0 && (
      <div className="mt-auto pt-4 border-t border-cyan-500/10">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors group mr-4"
          >
            <span>{link.label}</span>
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        ))}
      </div>
    )}
  </div>
);

export default function Projects() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden mb-12">
        <div className="absolute inset-0 matrix-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-semibold">OUR WORK</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Projects & <span className="text-gradient">Research</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From blockchain development to financial research—explore FAAST innovative projects
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Quant and Crypto Team */}
        <TeamSection title="Quant & Crypto Team" icon={Cpu}>
          <ProjectCard
            title="FAAST Payment System"
            description="A Web3 wallet prototype built using React, Ethers.js v6, and Polygon Amoy Testnet, designed to deliver Phantom-grade user experience for decentralized transactions with real-time on-chain balance retrieval and secure ERC-20 transfers."
            icon={Code}
            tags={["Web3", "Blockchain", "React", "Ethers.js"]}
            links={[{ label: "View Project", url: "https://github.com/prabalvarshney21/faastpay-wallet" }]}
          />
          
          <ProjectCard
            title="FAAST QuantForge"
            icon={TrendingUp}
            iconColor="text-purple-400"
            description="A systematic trading platform that compares multiple strategies such as the Leverage Based Strategy, SMA Crossover Strategy, and others, with full backtesting capabilities and performance metrics evaluated against market benchmarks."
            tags={["Quantitative Finance", "Algorithmic Trading", "Backtesting"]}
            links={[
              { label: "Strategy 1", url: "https://colab.research.google.com/drive/11KZTnD4KXM90X_0GjxbCFawgGjF2Pj4_?usp=sharing" },
              { label: "Strategy 2", url: "https://colab.research.google.com/drive/1GvoV8Ft_pbW6MzeQPPuQsJt_Tb_cBLjs?usp=sharing" }
            ]}
          />
        </TeamSection>

        {/* Research and Analytics Team */}
        <TeamSection title="Research & Analytics" icon={BarChart2}>
          <ProjectCard
            title="Hybrid Modeling of Financial Volatility"
            description="A Hybrid EGARCH-TCN-Attention Model for daily portfolio risk assessment, combining volatility modeling, temporal feature extraction, and attention-based correlation analysis to estimate extreme negative returns."
            icon={BookOpen}
            iconColor="text-yellow-400"
            tags={["Machine Learning", "Risk Assessment", "Quantitative Analysis"]}
          />
          
          <ProjectCard
            title="Financial Time-Series Analysis"
            description="Comparative study of tabular and temporal models across different market regimes, enhanced with Genetic Algorithms and Artificial Rabbits Optimization for dynamic ensemble weighting."
            icon={Database}
            iconColor="text-green-400"
            tags={["Time Series", "Ensemble Learning", "Market Regimes"]}
          />
        </TeamSection>

        {/* Stock and Trading Team */}
        <TeamSection title="Trading & Competition" icon={Zap}>
          <ProjectCard
            title="24 Hour Blitz Competition"
            description="A real-time trading challenge where participants traded XAU/USD (Gold) using technical indicators like MACD and RSI, focusing on risk management and trading psychology."
            icon={TrendingUp}
            iconColor="text-red-400"
            tags={["Trading", "Technical Analysis", "Risk Management"]}
            links={[{ label: "View Report", url: "https://drive.google.com/file/d/1Jl0q5gY7VSUgJjIvOmJYXxDOVTn2LJLD/view" }]}
          />
        </TeamSection>

        {/* Case Study & Business Strategy Team */}
        <TeamSection title="Case Studies" icon={Shield}>
          <ProjectCard
            title="GameStop & Market Efficiency"
            description="Analysis of the GameStop phenomenon challenging the Efficient Market Hypothesis, exploring the role of social media and investor sentiment in modern financial markets."
            icon={BookOpen}
            iconColor="text-pink-400"
            tags={["Behavioral Finance", "Market Efficiency", "Social Trading"]}
          />
          
          <ProjectCard
            title="DeFi Accountability"
            description="Critical examination of accountability in decentralized finance systems, exploring the challenges of governance, responsibility, and trust in a trustless environment."
            icon={Shield}
            iconColor="text-blue-400"
            tags={["DeFi", "Governance", "Blockchain"]}
          />
        </TeamSection>
      </div>

      {/* CTA Section */}
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <div className="glass-panel rounded-2xl p-8 text-center relative overflow-hidden border border-yellow-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
              <Sparkles className="text-yellow-400" size={18} />
              <span className="text-yellow-400 font-medium text-sm">Get Involved</span>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}