// page.js
import Dashboard from "@/components/dashboard/Dashboard";
import Hero from "@/components/hero/Hero";
import InsightFlow from "@/components/insight-flow/InsightFlow";
import SignatureInteraction from "@/components/signature/SignatureInteraction";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    // Added bg-color here as a fallback to prevent white flashes during heavy 3D rendering
    <main className="bg-[#0b0d10] min-h-screen">
      <Header />
      <Hero />
      <InsightFlow />
      <Dashboard />
      <SignatureInteraction />

      <Footer />
    </main>
  );
}
