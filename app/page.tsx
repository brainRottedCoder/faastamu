"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
// import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, LineChart, Code2, BarChart3 } from "lucide-react";
import { TrendingUp, Code, BarChart, DollarSign, Zap } from "lucide-react";
import { Mail, MapPin, Phone, Instagram, Linkedin, Send, MessageSquare, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ConfettiCelebration from "@/components/ConfettiCelebration";
import RegistrationModal from "@/components/RegistrationModal";


// Premium Finance-Themed Animated Background with 3D Crypto Elements
const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    let animationFrameId: number;

    function animate() {
      if (!canvas) return;
      ctx.fillStyle = 'rgba(3, 7, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)';
      ctx.lineWidth = 1;

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.fillStyle = 'rgba(0, 229, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();

        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = window.requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};


export default function Home() {
  const acronym = [
    { letter: "F", word: "Finance", icon: DollarSign, description: "Master the fundamentals of financial markets, ethical trading, and investment strategies" },
    { letter: "A", word: "Algorithm", icon: Code, description: "Develop algorithmic trading systems and quantitative analysis tools" },
    { letter: "A", word: "Analytics", icon: BarChart, description: "Deep dive into data analytics, market research, and financial modeling" },
    { letter: "S", word: "Stocks", icon: TrendingUp, description: "Learn stock market operations, portfolio management, and ethical trading techniques" },
    { letter: "T", word: "Trade", icon: Zap, description: "Get hands-on experience with live ethical trading and real-world market scenarios" }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, you'd send the form data to a server here.
    // For this example, we just simulate success after a delay.
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/amu_faast_official/",
      handle: "@faast.amu",
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/faast-amu",
      handle: "faast-amu",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "amu.faast.official@gmail.com",
      link: "mailto:amu.faast.official@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 76518 46537",
      link: "tel:+91 76518 46537"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Aligarh Muslim University, Aligarh, UP",
      link: null
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030712] via-[#0a1628] to-[#030712]">
      {/* Confetti Celebration */}
      <ConfettiCelebration duration={5000} />

      {/* Registration Modal */}
      <RegistrationModal
        registrationLink="https://linktr.ee/FAAST.AMU"
        delayMs={3000}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-500/20 rounded-full float-animation blur-sm" />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-500/20 rounded-lg float-animation-delayed blur-sm rotate-45" />
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-yellow-500/20 rounded-full float-animation blur-sm" />
        <div className="absolute bottom-20 right-40 w-12 h-12 border-2 border-cyan-500/20 rounded-lg float-animation-delayed blur-sm rotate-12" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-cyan-500/30 shimmer">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider">🚀 AMU&apos;S PREMIER FINTECH CLUB</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Empowering <span className="text-gradient">Tomorrow&apos;s</span><br />
              <span className="text-gradient">FinTech Leaders</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Finance • Algorithm • Analytics • Stocks • Trade
            </p>

            {/* Club Motto */}
            <div className="mb-6">
              <div className="inline-block px-6 py-3 rounded-lg glass-panel border border-yellow-500/30 bg-linear-to-r from-yellow-500/10 to-green-500/10">
                <p className="text-lg md:text-xl font-bold">
                  <span className="text-red-400">Bear</span>{' '}
                  <span className="text-cyan-400">Bytes</span>{' '}
                  <span className="text-gray-400">n</span>{' '}
                  <span className="text-green-400">Bullish</span>{' '}
                  <span className="text-yellow-400">Rise</span>
                </p>
              </div>
            </div>

            <p className="text-sm text-cyan-400/80 mb-8 font-mono">
              F.A.A.S.T. — Aligarh Muslim University&#39;s official FinTech club, founded in 2025.
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Join AMU&apos;s most dynamic community where finance meets technology.
              Build, trade, analyze, and innovate with the best minds in FinTech.
            </p>

            <div className="flex flex-col sm:flex-row  mb-4 gap-4 justify-center">
              <Link href="/joinus">
                <Button className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 text-lg px-8 py-6 glow-cyan">
                  Join FAAST Now
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-6">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="premium-card glass-panel rounded-xl p-6 glow-cyan">
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-gray-300 font-medium">Active Members</div>
              </div>
              <div className="premium-card glass-panel rounded-xl p-6 glow-purple">
                <div className="text-4xl font-bold text-gradient mb-2">1+</div>
                <div className="text-gray-300 font-medium">Events Hosted</div>
              </div>
              <div className="premium-card glass-panel rounded-xl p-6 glow-gold">
                <div className="text-4xl font-bold text-gradient mb-2">0</div>
                <div className="text-gray-300 font-medium">Competitions Won</div>
              </div>
              <div className="premium-card glass-panel rounded-xl p-6 glow-cyan">
                <div className="text-4xl font-bold text-gradient mb-2">5</div>
                <div className="text-gray-300 font-medium">Specialized Teams</div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a1628]/50 via-[#1e1b4b]/30 to-transparent relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              What We <span className="text-gradient">Do</span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              We&apos;re not just a club – we&apos;re a launchpad for future innovators in finance and technology
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: LineChart,
                  title: "Algorithmic Trading",
                  description: "Master quantitative strategies and automated ethical trading systems",
                  gradient: "from-cyan-500 to-blue-600"
                },
                {
                  icon: BarChart3,
                  title: "Market Analytics",
                  description: "Deep dive into financial data analysis and market research",
                  gradient: "from-blue-500 to-purple-600"
                },
                {
                  icon: Code2,
                  title: "FinTech Development",
                  description: "Build cutting-edge financial technology solutions",
                  gradient: "from-purple-500 to-pink-600"
                },
                {
                  icon: TrendingUp,
                  title: "Live ethical Trading",
                  description: "Real-world trading experience with mentorship",
                  gradient: "from-yellow-500 to-orange-600"
                }
              ].map((item, index) => (
                <div key={index} className="premium-card glass-panel rounded-xl p-6 group">
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-r ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="text-white" size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Why Join <span className="text-gradient">FAAST?</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Elite Community",
                  description: "Network with passionate students, alumni, and industry professionals in FinTech"
                },
                {
                  icon: Award,
                  title: "Real Achievements",
                  description: "Participate in hackathons, competitions, and real-world projects with proven success"
                },
                {
                  icon: Zap,
                  title: "Hands-On Learning",
                  description: "From ethical trading workshops to coding bootcamps – learn by doing, not just listening"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:glow-cyan transition-all duration-300">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-purple-500/10 to-blue-600/10" />
        <div className="absolute inset-0 matrix-bg opacity-20" />

        {/* Floating crypto symbols */}
        <div className="absolute top-10 left-20 text-6xl opacity-10 float-animation">₿</div>
        <div className="absolute bottom-10 right-20 text-6xl opacity-10 float-animation-delayed">Ξ</div>
        <div className="absolute top-1/2 left-10 text-4xl opacity-10 float-animation">$</div>
        <div className="absolute top-1/3 right-10 text-4xl opacity-10 float-animation-delayed">€</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center glass-panel rounded-2xl p-12 glow-cyan">
            <div className="inline-block mb-4">
              <div className="px-6 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                <span className="text-cyan-400 text-sm font-semibold tracking-wider">✨ JOIN THE REVOLUTION</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Level Up Your <span className="text-gradient">FinTech Game?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The clock&apos;s ticking — Join FAAST and be part of something extraordinary
            </p>
            <Link href="/joinus">
              <Button className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 text-lg px-10 py-7 glow-cyan transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Join Now
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
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
                  <div className="w-16 h-16 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
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
                  <div className="w-16 h-16 rounded-full bg-linear-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-6">
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
                        <div className="w-16 h-16 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform">
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
                      <div className="w-8 h-8 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
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

      {/* Contact Section */}
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 matrix-bg opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border border-cyan-500/30">
                <span className="text-cyan-400 text-sm font-semibold">GET IN TOUCH</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Connect with <span className="text-gradient">FAAST</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Have questions? Want to collaborate? We&apos;d love to hear from you!
              </p>
            </div>
          </div>
        </section>

        {/* Social Links - Featured Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="glass-panel rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="text-gradient">Follow Us</span> on Social Media
                </h2>
                <p className="text-gray-400 mb-6">
                  We&apos;d love to connect — reach out to us through our social handles.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:scale-105 hover:glow-cyan transition-all group"
                    >
                      <div className={`w-14 h-14 rounded-full bg-linear-to-r ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                        <social.icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-bold text-cyan-400 text-lg">{social.name}</p>
                        <p className="text-sm text-gray-400">{social.handle}</p>
                      </div>
                      <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass-panel rounded-xl p-6 hover:scale-105 hover:glow-cyan transition-all text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-gray-300 hover:text-cyan-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="glass-panel rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="text-cyan-400" size={28} />
                  <h2 className="text-3xl font-bold">Send Us a Message</h2>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <Send className="w-16 h-16 mx-auto mb-4 text-green-400" />
                    <h3 className="text-2xl font-bold mb-2 text-green-400">Message Sent!</h3>
                    <p className="text-gray-300">We&apos;ll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-cyan-400">Your Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="bg-[#0a1f3c]/50 border-cyan-500/30 focus:border-cyan-500"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-cyan-400">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="bg-[#0a1f3c]/50 border-cyan-500/30 focus:border-cyan-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-cyan-400">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className="bg-[#0a1f3c]/50 border-cyan-500/30 focus:border-cyan-500"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-cyan-400">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="bg-[#0a1f3c]/50 border-cyan-500/30 focus:border-cyan-500 min-h-[150px]"
                        placeholder="Tell us more..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-6 text-lg glow-cyan"
                    >
                      <Send className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map/Location Section */}
        <section className="py-20 bg-[#0a1f3c]/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <MapPin className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
                <h2 className="text-4xl font-bold mb-4">
                  Find Us on the Map <span className="text-gradient">🗺</span>
                </h2>
                <p className="text-xl text-gray-300 mb-2">
                  Visit us at Aligarh Muslim University
                </p>
                <p className="text-gray-400">
                  Aligarh Muslim University<br />
                  Aligarh, Uttar Pradesh 202002<br />
                  India
                </p>
              </div>

              {/* Google Map Embed */}
              <div className="glass-panel rounded-2xl p-4 hover:glow-cyan transition-all">
                <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14201.742689654789!2d78.08204!3d27.89786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5d3e117d6a9%3A0x6fccdc5766d0e9e5!2sAligarh%20Muslim%20University!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                    title="Aligarh Muslim University Location"
                  />
                </div>
              </div>

              <div className="text-center mt-8">
                <a
                  href="https://maps.app.goo.gl/bpZXxao3Hw7vi9iv7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white">
                    <MapPin className="mr-2" size={20} />
                    Open in Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}