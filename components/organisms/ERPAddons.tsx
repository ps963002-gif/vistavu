import Image from "next/image";

const addons = [
  {
    title: "Resolv",
    image: "/images/card1.jpg",
    dark: true,
  },
  {
    title: "FieldVu",
    image: "/images/herobg.jpg",
    dark: false,
  },
];

export default function ERPAddons() {
  return (
    <section className="bg-[#F7F7F7] py-24">
      <div className="max-w-[90rem] mx-auto px-8">

        <div className="flex justify-between items-start gap-16">
          <div className="max-w-[32rem]">

            <p className="text-[#2E6BFF] uppercase tracking-[0.12rem] text-[0.875rem] font-semibold">
              ERP ADDONS
            </p>

            <h2 className="mt-5 text-[3.5rem] leading-[4rem] font-semibold text-[#202020]">
              Developed by VistaVu to solve operational challenges beyond standard ERP.
            </h2>

            <p className="mt-8 text-[1.2rem] leading-[2.15rem] text-[#666666]">
              From advanced warehouse control to real-time field service
              visibility, these tools expand what your ERP can do without
              adding complexity. Designed for distributors, manufacturers,
              and asset-heavy teams who need more than just the basics.
            </p>

          </div>
          <div className="flex gap-8">

            {addons.map((item, index) => (
              <div
                key={index}
                className={`w-[20rem] rounded-xl overflow-hidden shadow-sm ${
                  item.dark ? "bg-[#102A56]" : "bg-white"
                }`}
              >
                <div className="relative w-full h-[16rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">

                  <h3
                    className={`text-[2rem] font-semibold ${
                      item.dark ? "text-white" : "text-[#202020]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-4 text-[1.08rem] leading-[1.9rem] ${
                      item.dark ? "text-white/80" : "text-[#666666]"
                    }`}
                  >
                    {item.title} enhances your ERP with tools for inventory
                    visibility, warehouse control, and planning. Designed for
                    distributors who need more precision and fewer manual
                    steps.
                  </p>

                  <button className="mt-8 text-[#2E6BFF] font-semibold text-[1rem]">
                    Learn more →
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}