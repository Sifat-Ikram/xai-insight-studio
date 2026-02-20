"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import Container from "../ui/Container";

const cardData = [
  {
    title: "Revenue",
    value: "$124,500",
    trend: "+12.5%",
  },
  {
    title: "Intelligence Accuracy",
    value: "99.2%",
    trend: "+2.1%",
  },
  {
    title: "Automation Rate",
    value: "84%",
    trend: "+18.4%",
  },
];

const tableRows = [
  {
    task: "Data Cleanup",
    status: "Completed",
    statusStyle: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    owner: "Alice",
    due: "Feb 21",
  },
  {
    task: "AI Model Training",
    status: "In Progress",
    statusStyle: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    owner: "Bob",
    due: "Feb 25",
  },
  {
    task: "Insight Report",
    status: "Pending",
    statusStyle: "text-rose-400 border-rose-500/20 bg-rose-500/5",
    owner: "Charlie",
    due: "Feb 28",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Analytics", "Automations", "Settings"];

  // Helper to render specific content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <motion.div
            key="overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {cardData.map((card, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl">
                  <span className="text-xs font-mono uppercase text-[var(--muted)]">
                    {card.title}
                  </span>
                  <p className="text-3xl font-bold">{card.value}</p>
                </div>
              ))}
            </div>
            {/* Table */}
            <div className="glass-panel rounded-2xl overflow-hidden">
              <table className="min-w-full text-left">
                <thead className="bg-white/5 font-mono text-[10px] uppercase">
                  <tr>
                    <th className="px-6 py-4">Task</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="px-6 py-4">{row.task}</td>
                      <td className="px-6 py-4">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case "Analytics":
        return (
          <motion.div
            key="analytics"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="glass-panel p-8 rounded-2xl h-64 flex items-end gap-2">
              {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="flex-1 bg-blue-500/40 rounded-t-sm border-t border-blue-400"
                />
              ))}
            </div>
            <p className="text-[var(--muted)] text-sm font-mono uppercase">
              Neural Network Processing Load — Last 7 Days
            </p>
          </motion.div>
        );

      case "Automations":
        return (
          <motion.div
            key="automations"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-4"
          >
            {["Email Classifier", "Lead Scraper", "Auto-Summarizer"].map(
              (item) => (
                <div
                  key={item}
                  className="glass-panel p-4 rounded-xl flex justify-between items-center"
                >
                  <span>{item}</span>
                  <span className="text-xs text-blue-500 font-mono">
                    ACTIVE
                  </span>
                </div>
              ),
            )}
          </motion.div>
        );

      case "Settings":
        return (
          <motion.div
            key="settings"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-panel p-8 rounded-2xl border-dashed border-white/10"
          >
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span>API Access</span>
                <span className="text-[var(--muted)]">v2.4.0</span>
              </div>
              <div className="flex justify-between">
                <span>Workspace Visibility</span>
                <span className="text-emerald-400">Public</span>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Section className="bg-[#0b0d10] border-t border-white/5">
      <Container>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className="hidden md:flex flex-col gap-6 w-48 text-sm border-r border-white/5 py-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left transition-colors ${activeTab === tab ? "text-blue-500 font-medium" : "text-[var(--muted)] hover:text-white"}`}
              >
                {tab}
              </button>
            ))}
          </aside>

          {/* Content Area */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold tracking-tight mb-10 text-white">
              {activeTab}
            </h2>
            <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
