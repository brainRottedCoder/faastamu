import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Trophy, Zap, Lock, Bell, Instagram, Linkedin } from "lucide-react";

export default function JoinUs() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Real-World Experience",
      description: "Work on live projects and trading with actual market data"
    },
    {
      icon: Users,
      title: "Elite Network",
      description: "Connect with industry professionals and passionate peers"
    },
    {
      icon: Trophy,
      title: "Competition Opportunities",
      description: "Participate in hackathons and win prizes"
    },
    {
      icon: Zap,
      title: "Skill Development",
      description: "Learn cutting-edge FinTech tools and technologies"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-red-500/30">
              <span className="text-red-400 text-sm font-semibold">⏰ APPLICATIONS CLOSED</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join the <span className="text-gradient">FAAST Family</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Be part of AMU&apos;s most dynamic FinTech community
            </p>
          </div>
        </div>
      </section>

      {/* Closed Notice */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass-panel rounded-2xl p-12 text-center relative overflow-hidden border-2 border-red-500/20">
              {/* Animated background */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500/20 to-orange-600/20 border-2 border-red-500/30 flex items-center justify-center">
                  <Lock className="text-red-400" size={48} />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Applications for the <span className="text-gradient">2025 Session</span> are Now Closed
                </h2>

                <p className="text-xl text-gray-300 mb-8">
                  Thank you for your interest in joining F.A.A.S.T.!
                </p>

                <div className="glass-panel rounded-xl p-6 mb-8 bg-cyan-500/5 border border-cyan-500/20">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Bell className="text-cyan-400 animate-pulse" size={24} />
                    <p className="text-cyan-400 text-lg font-semibold">Stay Connected</p>
                  </div>
                  <p className="text-gray-300 text-base">
                    Stay connected through our social channels for the next recruitment drive.
                  </p>
                </div>

                {/* Social Links */}
                <div className="space-y-4 mb-8">
                  <p className="text-gray-400">Follow us on social media for updates:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://www.instagram.com/amu_faast_official/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl glass-panel hover:scale-105 hover:glow-cyan transition-all group"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Instagram className="text-white" size={20} />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-cyan-400">Instagram</p>
                        <p className="text-sm text-gray-400">@faast.amu</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/company/faast-amu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl glass-panel hover:scale-105 hover:glow-cyan transition-all group"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Linkedin className="text-white" size={20} />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-cyan-400">LinkedIn</p>
                        <p className="text-sm text-gray-400">faast-amu</p>
                      </div>
                    </a>
                  </div>
                </div>

                <Button 
                  disabled
                  className="bg-gray-600 text-gray-400 cursor-not-allowed opacity-50 py-6 text-lg px-8"
                >
                  <Lock className="mr-2" size={20} />
                  Applications Closed
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0a1f3c]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              What You&apos;ll Get When You <span className="text-gradient">Join FAAST</span>
            </h2>
            <p className="text-gray-400 text-center mb-12">Benefits waiting for our next cohort</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass-panel rounded-xl p-6 hover:scale-105 hover:glow-cyan transition-all text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <benefit.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Recruitment CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-panel rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4">
              Don&apos;t Miss <span className="text-gradient">Next Time!</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be the first to know when applications open for the next session
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center text-gray-400">
              <Bell className="text-cyan-400" size={20} />
              <span>Follow our social media for recruitment announcements</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}