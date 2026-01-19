"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  TrendingUp,
  Users,
  Calendar,
  Briefcase,
  BookOpen,

} from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import FloatingRegistrationButton from "@/components/FloatingRegistrationButton";
const navigationItems = [
  { title: "Home", href: "/", icon: TrendingUp },
  // { title: "About", href: "/about", icon: Info },
  { title: "Teams", href: "/teams", icon: Users },
  { title: "Events", href: "/events", icon: Calendar },
  { title: "Projects", href: "/projects", icon: Briefcase },
  { title: "Members", href: "/members", icon: Users },
  { title: "Blog", href: "/blog", icon: BookOpen },
  // { title: "Contact", href: "/contact", icon: Mail },
];

type TickerItem = {
  symbol: string;
  price: string;
  change: string;
};

type TickerResponse = {
  items: TickerItem[];
};

const StockTicker = () => {
  const [stocks, setStocks] = useState<TickerItem[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get<TickerResponse>("/api/ticker");
        const items = Array.isArray(res.data?.items) ? res.data.items : [];
        setStocks(items);
      } catch (error) {
        console.error("Failed to fetch cryptocurrency listings", error);
      }
    };

    fetchListings();
  }, []);

  useEffect(() => {
    if (!stocks.length) return;

    console.log(stocks);
  }, [stocks]);

  // const stocks = [
  //   { symbol: "BTC", price: "43,250", change: "+2.4%" },
  //   { symbol: "ETH", price: "2,280", change: "+1.8%" },
  //   { symbol: "NIFTY", price: "21,456", change: "+0.9%" },
  //   { symbol: "SENSEX", price: "71,234", change: "+1.2%" },
  //   { symbol: "NASDAQ", price: "15,890", change: "+0.7%" },
  //   { symbol: "GOLD", price: "2,045", change: "-0.3%" },
  // ];

  return (
    <div className="bg-[#0a1f3c] border-t border-cyan-500/20 py-2 overflow-hidden">
      <div className="flex animate-scroll">
        {[...stocks, ...stocks].map((stock, index) => (
          <div key={index} className="flex items-center gap-2 px-6 whitespace-nowrap">
            <span className="text-cyan-400 font-semibold">{stock.symbol}</span>
            <span className="text-white">{stock.price}</span>
            <span className={stock.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
              {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <style>{`
        :root {
          --primary-blue: #0a1f3c;
          --neon-cyan: #00e5ff;
          --gold: #ffbd00;
          --dark-bg: #030712;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .glass-panel {
          background: rgba(10, 31, 60, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 229, 255, 0.2);
        }
        
        .glow-cyan {
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #00e5ff 0%, #ffbd00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00e5ff, #ffbd00);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .matrix-bg {
          background-image: 
            linear-gradient(rgba(0, 229, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Logo styling */
        .logo-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(10, 31, 60, 0.6), rgba(0, 229, 255, 0.05));
          border: 1px solid rgba(0, 229, 255, 0.2);
          transition: all 0.3s ease;
        }

        .logo-wrapper:hover {
          background: linear-gradient(135deg, rgba(10, 31, 60, 0.8), rgba(0, 229, 255, 0.1));
          border-color: rgba(0, 229, 255, 0.4);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.3), 0 0 40px rgba(0, 229, 255, 0.1);
          transform: translateY(-2px);
        }

        .logo-wrapper img {
          display: block;
          height: 48px;
          width: auto;
          object-fit: contain;
          mix-blend-mode: screen;
          filter: brightness(1.1) contrast(1.1);
          transition: all 0.3s ease;
        }

        .logo-wrapper:hover img {
          filter: brightness(1.2) contrast(1.15) drop-shadow(0 0 8px rgba(0, 229, 255, 0.4));
          transform: scale(1.05);
        }

        @supports not (mix-blend-mode: screen) {
          .logo-wrapper img {
            filter: brightness(1.1) contrast(1.2) saturate(1.2);
          }
        }

        .footer-logo {
          height: 48px;
          width: auto;
          object-fit: contain;
          mix-blend-mode: screen;
          filter: brightness(1.1) drop-shadow(0 0 10px rgba(0, 229, 255, 0.2));
        }
      `}</style>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-panel glow-cyan" : "bg-linear-to-b from-[#030712] to-transparent"
          }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="logo-wrapper group" aria-label="FAAST Home">
              <Image src="/logo_faast.jpg" alt="FAAST Logo" width={140} height={48} priority />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`nav-link text-sm font-medium hover:text-cyan-400 transition-colors ${pathname === item.href ? "active text-cyan-400" : ""
                    }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <Link href="/joinus" className="hidden lg:block">
              <Button className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0">
                Join FAAST
              </Button>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-cyan-500/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden glass-panel border-t border-cyan-500/20 mt-2">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-cyan-500/10 transition-colors ${pathname === item.href ? "bg-cyan-500/20 text-cyan-400" : ""
                    }`}
                >
                  <item.icon size={20} />
                  {item.title}
                </Link>
              ))}
              <Link href="/joinus" className="mt-4">
                <Button className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0">
                  Join FAAST
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <div className="fixed top-[72px] left-0 right-0 z-40">
        <StockTicker />
      </div>

      <main className="pt-[120px]">{children}</main>

      <footer className="bg-[#0a1f3c] border-t border-cyan-500/20 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_faast.jpg"
                alt="FAAST Logo"
                className="footer-logo"
              />
              <p className="text-gray-400 text-sm">
                AMU&apos;s Premier FinTech Club - Empowering Tomorrows Leaders
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About Us
                </Link>
                <Link href="/teams" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Our Teams
                </Link>
                <Link href="/events" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Events
                </Link>
                <Link href="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Projects
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold mb-4">Connect</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/amu_faast_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/faast-amu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold mb-4">Location</h3>
              <p className="text-gray-400 text-sm">
                Aligarh, Uttar Pradesh
                <br />
                India
              </p>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 F.A.A.S.T. | Founded at Aligarh Muslim University</p>
          </div>
        </div>
      </footer>

      {/* Floating FAAST Week Registration Button */}
      <FloatingRegistrationButton registrationLink="https://linktr.ee/FAAST.AMU" />
    </div>
  );
}
