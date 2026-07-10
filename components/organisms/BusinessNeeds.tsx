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
          <h5 className="inline-block border-b-2 border-[#2F80ED] pb-1 text-[13px] font-bold uppercase tracking-[3px] text-[#2F80ED]">
            Business Needs
          </h5>

          <h2 className="mt-4 max-w-[560px] text-[56px] font-light leading-[64px] text-[#222]">
            Capabilities of Smarter Operations
          </h2>
        </div>

    
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className={`${card.color} flex min-h-[300px] flex-col rounded-2xl p-8 text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >
            
                <Icon
                  size={40}
                  strokeWidth={2}
                  className="mb-6 text-white"
                />

          
                <h3 className="text-[18px] font-bold leading-[24px]">
                  {card.title}
                </h3>

            
                <p className="mt-4 flex-grow text-[15px] leading-[22px] text-white/90">
                  {card.description}
                </p>

            
                <button className="mt-6 flex items-center gap-2 text-[16px] font-semibold transition-all hover:gap-3">
                  Learn more
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}