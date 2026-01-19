"use client";

import { useEffect, useCallback } from "react";
import confetti from "canvas-confetti";

interface ConfettiCelebrationProps {
    duration?: number;
}

export default function ConfettiCelebration({ duration = 5000 }: ConfettiCelebrationProps) {
    const fireConfetti = useCallback(() => {
        const end = Date.now() + duration;

        const colors = ["#00e5ff", "#a855f7", "#facc15", "#22c55e", "#f43f5e", "#3b82f6"];

        const frame = () => {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 80,
                origin: { x: 0, y: 0.8 },
                colors: colors,
                shapes: ["circle", "square"],
                gravity: 0.8,
                scalar: 1.2,
                drift: 0.5,
            });

            confetti({
                particleCount: 3,
                angle: 120,
                spread: 80,
                origin: { x: 1, y: 0.8 },
                colors: colors,
                shapes: ["circle", "square"],
                gravity: 0.8,
                scalar: 1.2,
                drift: -0.5,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        // Initial burst from center
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { x: 0.5, y: 0.5 },
            colors: colors,
            shapes: ["circle", "square"],
            gravity: 0.6,
            scalar: 1.5,
        });

        frame();
    }, [duration]);

    useEffect(() => {
        // Small delay to let the page render first
        const timeout = setTimeout(() => {
            fireConfetti();
        }, 500);

        return () => clearTimeout(timeout);
    }, [fireConfetti]);

    return null;
}
