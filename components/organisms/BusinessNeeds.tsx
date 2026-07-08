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
    <section className="py-24 bg-white">
      <div className="max-w-[1180px] mx-auto px-4">
        {/* Heading */}
        <p className="text-[#2F80ED] uppercase tracking-[2px] text-sm font-bold">
          BUSINESS NEEDS
        </p>

        <h2 className="mt-3 mb-14 max-w-[560px] text-[56px] leading-[64px] font-light text-[#222]">
          Capabilities of Smarter Operations
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-5">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className={`${card.color} rounded-2xl p-8 h-[240px] text-white flex flex-col transition-transform duration-300 hover:scale-105`}
              >
                {/* Icon */}
                <Icon
                  size={48}
                  strokeWidth={1.6}
                  className="text-white mb-8"
                />

                {/* Title */}
                <h3 className="text-[18px] font-semibold leading-7">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[15px] leading-7 text-white/90 flex-grow">
                  {card.description}
                </p>

                {/* Button */}
                <button className="mt-auto flex items-center gap-2 font-semibold text-[16px]">
                  Learn more
                  <ArrowRight size={18} strokeWidth={2} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}