import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { RecruiterProvider } from "@/lib/recruiter-context";
import BackgroundFX from "@/components/BackgroundFX";
import CommandPalette from "@/components/CommandPalette";
import AIAssistant from "@/components/AIAssistant";
import SecurityTerminal from "@/components/SecurityTerminal";
import RecruiterBanner from "@/components/RecruiterBanner";
import { profile } from "@/data/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jayasimha.dev"),
  title: `${profile.name} — ${profile.role}`,
  description: profile.sub,
  keywords: [
    "Jaya Simha",
    "Cybersecurity Analyst",
    "SOC Analyst",
    "SOC Analyst UAE",
    "Cybersecurity Analyst UAE",
    "Threat Detection",
    "Incident Response",
    "SOC Automation",
    "AI Cybersecurity",
  ],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    type: "website",
    images: ["/images/about.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
  },
  robots: { index: true, follow: true },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.sub,
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <RecruiterProvider>
          <RecruiterBanner />
          <BackgroundFX />
          <CommandPalette />
          {children}
          <AIAssistant />
          <SecurityTerminal />
        </RecruiterProvider>
      </body>
    </html>
  );
}
