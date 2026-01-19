"use client";

import { useState, useEffect } from "react";
import { X, Calendar, PartyPopper, ExternalLink, Sparkles, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RegistrationModalProps {
    registrationLink: string;
    delayMs?: number;
}

export default function RegistrationModal({
    registrationLink,
    delayMs = 2000
}: RegistrationModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

    useEffect(() => {
        // Check if user has already dismissed this modal in the session
        const dismissed = sessionStorage.getItem("faast-modal-dismissed");
        if (dismissed) {
            setHasBeenDismissed(true);
            return;
        }

        const timeout = setTimeout(() => {
            setIsOpen(true);
        }, delayMs);

        return () => clearTimeout(timeout);
    }, [delayMs]);

    const handleClose = () => {
        setIsOpen(false);
        setHasBeenDismissed(true);
        sessionStorage.setItem("faast-modal-dismissed", "true");
    };

    if (!isOpen || hasBeenDismissed) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="relative z-10 max-w-lg w-full mx-4 animate-scale-up">
                <div className="glass-panel rounded-2xl p-8 border-2 border-cyan-500/40 shadow-2xl overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-yellow-500/20 to-green-500/20 rounded-full blur-3xl" />

                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                    >
                        <X size={24} />
                    </button>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                        {/* Celebration icon */}
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-6 animate-bounce shadow-lg">
                            <PartyPopper className="text-white" size={40} />
                        </div>

                        {/* Badge */}
                        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-green-500/20 border border-yellow-500/30">
                            <span className="text-yellow-400 text-sm font-semibold flex items-center gap-2">
                                <Sparkles size={16} /> FAAST WEEK 2026 <Sparkles size={16} />
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            🎉 <span className="text-gradient">Celebrate</span> with Us!
                        </h2>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Join the biggest FinTech festival at AMU! Workshops, hackathons, competitions, and more await you.
                        </p>

                        {/* Event highlights */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="glass-panel rounded-lg p-3 border border-cyan-500/20">
                                <Calendar className="text-cyan-400 mx-auto mb-1" size={20} />
                                <p className="text-cyan-400 font-bold text-sm">Jan 25-28</p>
                                <p className="text-gray-400 text-xs">Event Dates</p>
                            </div>
                            <div className="glass-panel rounded-lg p-3 border border-purple-500/20">
                                <Trophy className="text-purple-400 mx-auto mb-1" size={20} />
                                <p className="text-purple-400 font-bold text-md">4 Events</p>
                                <p className="text-gray-400 text-xs">To Explore</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                            >
                                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-6 text-lg glow-cyan">
                                    Register Now
                                    <ExternalLink className="ml-2" size={18} />
                                </Button>
                            </a>
                            <Button
                                variant="outline"
                                onClick={handleClose}
                                className="flex-1 border-gray-600 text-gray-900 hover:bg-white/10 py-6"
                            >
                                Maybe Later
                            </Button>
                        </div>

                        <p className="text-gray-500 text-sm mt-4">
                            Don't miss out — limited slots available!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
