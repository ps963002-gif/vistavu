import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    <section className="bg-[#F6F8FB] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="flex justify-between items-start gap-12">


          <div className="max-w-[560px]">

            <p className="inline-block border-b-2 border-[#2E6BFF] pb-1 text-[14px] font-bold uppercase tracking-[2px] text-[#2E6BFF]">
              ERP ADDONS
            </p>

            <h2 className="mt-5 text-[45px] leading-[55px] font-light text-[#222]">
              Developed by VistaVu to solve operational challenges beyond standard ERP.
            </h2>

            <p className="mt-7 text-[17px] leading-[30px] text-[#666666]">
              From advanced warehouse control to real-time field service
              visibility, these tools expand what your ERP can do without
              adding complexity. Designed for distributors, manufacturers,
              and asset-heavy teams who need more than just the basics.
            </p>

    

            <div className="mt-12 flex gap-4">

              <button className="w-12 h-12 rounded-full bg-[#CFCFCF] flex items-center justify-center hover:bg-[#BDBDBD] transition">
                <ArrowLeft size={22} />
              </button>

              <button className="w-12 h-12 rounded-full bg-[#2E6BFF] text-white flex items-center justify-center hover:bg-[#1D63E8] transition">
                <ArrowRight size={22} />
              </button>

            </div>

          </div>

      

          <div className="flex gap-5">

            {addons.map((item, index) => (
              <div
                key={index}
                className={`w-[290px] rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  item.dark ? "bg-[#102A56]" : "bg-white"
                }`}
              >
            

                <div className="relative h-[215px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

          

                <div className="p-6 flex flex-col h-[270px]">

                  <h3
                    className={`text-[24px] font-semibold ${
                      item.dark ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-4 text-[16px] leading-8 flex-grow ${
                      item.dark ? "text-white/80" : "text-[#666666]"
                    }`}
                  >
                    {item.title} enhances your ERP with tools for inventory
                    visibility, warehouse control, and planning. Designed for
                    distributors who need more precision and fewer manual
                    steps.
                  </p>

                  <button className="mt-8 flex items-center gap-2 text-[#2E6BFF] font-semibold hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight size={18} />
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