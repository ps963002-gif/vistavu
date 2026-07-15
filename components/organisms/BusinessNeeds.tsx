"use client";

import {
  BarChart3,
  Lightbulb,
  Cloud,
  Settings,
  Bot,
  Network,
  ChartColumn,
  Workflow,
  ArrowRight,
} from "lucide-react";

export default function BusinessNeeds() {
  const cards = [
    {
      title: "Data & Analytics",
      description: "Get real-time insights to lead with confidence.",
      color: "bg-[#4A90E2]",
      icon: BarChart3,
    },
    {
      title: "Intelligent Integration",
      description:
        "Sync your systems for realtime data and seamless operations.",
      color: "bg-[#68A93D]",
      icon: Lightbulb,
    },
    {
      title: "Cloud",
      description:
        "Scale faster with flexible and low-maintenance cloud ERP.",
      color: "bg-[#39C48D]",
      icon: Cloud,
    },
    {
      title: "System Upgrades",
      description:
        "Move to modern cloud ERP with a fixed-cost plan designed for growth.",
      color: "bg-[#6AAE3A]",
      icon: Settings,
    },
    {
      title: "Artificial Intelligence",
      description:
        "Automate tasks and guide decisions with built-in intelligence.",
      color: "bg-[#8BCF32]",
      icon: Bot,
    },
    {
      title: "Inventory & Supply Chain",
      description:
        "Improve visibility and control across your supply chain.",
      color: "bg-[#33B9C9]",
      icon: Network,
    },
    {
      title: "Finance & Reporting",
      description:
        "Gain clarity, speed, and control over your financials.",
      color: "bg-[#6478E8]",
      icon: ChartColumn,
    },
    {
      title: "Process Automation",
      description:
        "Eliminate busywork with automated workflows and alerts.",
      color: "bg-[#4A90E2]",
      icon: Workflow,
    },
  ];

  return (
    <section className="bg-[#F6F8FB] py-24">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="mb-14">
          <h5 className="inline-block border-b border-[#2F80ED] pb-[1px] text-[21px] font-semibold uppercase tracking-[0.24em] text-[#2F80ED]">
            BUSINESS NEEDS
          </h5>

          <h2 className="mt-5 max-w-[560px] text-[62px] font-normal leading-[60px] tracking-[-0.045em] text-[#222222]">
            Capabilities of
            <br />
            Smarter Operations
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className={`${card.color} flex min-h-[300px] flex-col rounded-2xl p-8 text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <Icon
                  size={36}
                  strokeWidth={2}
                  className="mb-6 text-white"
                />

                <h3 className="text-[23px] font-bold leading-[30px] tracking-[-0.02em]">
                  {card.title}
                </h3>

                <p className="mt-2 flex-grow text-[16px] leading-[27px] text-white/90">
                  {card.description}
                </p>
                                <button className="mt-6 flex items-center gap-2 text-[15px] font-semibold text-white transition-all hover:gap-3">
                  Learn more
                  <ArrowRight
                    size={18}
                    strokeWidth={2.3}
                    className="mt-[1px]"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}