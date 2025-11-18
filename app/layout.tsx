import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import LayoutClient from "@/components/layout-client";
import "./globals.css";

export const metadata: Metadata = {
  title: "FAAST - AMU's Premier FinTech Club",
  description: "Official website for FAAST, AMU's FinTech club showcasing events, teams, and initiatives.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-white">
       <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          strategy="afterInteractive"
        />
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}