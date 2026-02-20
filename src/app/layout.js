import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Xai — Intelligence Workspace",
  description:
    "Transform raw data into structured intelligence and actionable insights with AI-powered automations.",
  openGraph: {
    title: "Xai — Intelligence Workspace",
    description: "The premium workspace for AI-driven data transformation.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0b0d10] text-white selection:bg-[#4f7fff] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
