"use client";

import { useState } from "react";
import { CalendarDays, X, ExternalLink, Sparkles } from "lucide-react";

interface FloatingRegistrationButtonProps {
    registrationLink: string;
}

export default function FloatingRegistrationButton({
    registrationLink
}: FloatingRegistrationButtonProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    if (isDismissed) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Expanded Card */}
            {isExpanded && (
                <div className="animate-scale-up glass-panel rounded-2xl p-5 border-2 border-cyan-500/40 shadow-2xl max-w-xs relative overflow-hidden">
                    {/* Decorative glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />

                    {/* Close button */}
                    <button
                        onClick={() => setIsDismissed(true)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                        aria-label="Dismiss"
                    >
                        <X size={16} />
                    </button>

                    <div className="relative z-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 text-xs font-semibold">LIVE NOW</span>
                        </div>

                        <h3 className="text-lg font-bold mb-1 text-white flex items-center gap-2">
                            <Sparkles className="text-yellow-400" size={18} />
                            FAAST Week 2026
                        </h3>

                        <p className="text-gray-300 text-sm mb-4">
                            Jan 25-28 • Workshops, Hackathons & Competitions
                        </p>

                        <a
                            href={registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/30"
                        >
                            Register Now
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`group relative flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 ${isExpanded ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#030712]" : ""
                    }`}
                style={{
                    boxShadow: "0 0 30px rgba(0, 229, 255, 0.4), 0 0 60px rgba(0, 229, 255, 0.2)"
                }}
            >
                {/* Pulse animation ring */}
                <span className="absolute inset-0 rounded-full animate-ping bg-cyan-400 opacity-20"></span>

                <CalendarDays size={22} className="relative z-10" />
                <span className="relative z-10 hidden sm:inline">FAAST Week</span>

                {/* Live indicator dot */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
                </span>
            </button>
        </div>
    );
}
