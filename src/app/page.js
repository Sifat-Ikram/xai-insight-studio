import Hero from "@/components/hero/Hero";
import InsightFlow from "@/components/insight-flow/InsightFlow";
import Dashboard from "@/components/dashboard/Dashboard";
import SignatureInteraction from "@/components/signature/SignatureInteraction";

export default function Home() {
  return (
    <main>
      <Hero />
      <InsightFlow />
      <Dashboard />
      <SignatureInteraction />
    </main>
  );
}
