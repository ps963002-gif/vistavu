"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
  {
    title: "WarehousePro",
    image: "/images/manufacturing.jpg",
    dark: false,
  },
];

export default function ERPAddons() {
  return (
   <section className="bg-[#EDF1F5] border-t border-[#D9E1EA] pt-16 pb-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Left Content */}
          <div className="max-w-[560px]">
            <p className="inline-block border-b-2 border-[#2E6BFF] pb-1 text-[14px] font-bold uppercase tracking-[2px] text-[#2E6BFF]">
              ERP ADDONS
            </p>

            <h2 className="mt-5 text-[45px] font-light leading-[55px] text-[#222]">
              Developed by VistaVu to solve operational challenges beyond
              standard ERP.
            </h2>

            <p className="mt-7 text-[17px] leading-[30px] text-[#666666]">
              From advanced warehouse control to real-time field service
              visibility, these tools expand what your ERP can do without
              adding complexity. Designed for distributors, manufacturers, and
              asset-heavy teams who need more than just the basics.
            </p>

          
            <div className="mt-12 flex gap-4">
              <button className="erp-prev flex h-12 w-12 items-center justify-center rounded-full bg-[#D9D9D9] transition hover:bg-[#bfbfbf]">
                <ArrowLeft size={20} />
              </button>

              <button className="erp-next flex h-12 w-12 items-center justify-center rounded-full bg-[#2E6BFF] text-white transition hover:bg-[#1f5be5]">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="w-full max-w-[620px]">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".erp-prev",
                nextEl: ".erp-next",
              }}
              loop={true}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {addons.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
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

                    <div className="flex h-[270px] flex-col p-6">
                      <h3
                        className={`text-[24px] font-semibold ${
                          item.dark ? "text-white" : "text-[#111111]"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`mt-4 flex-grow text-[16px] leading-8 ${
                          item.dark ? "text-white/80" : "text-[#666666]"
                        }`}
                      >
                        {item.title} enhances your ERP with tools for inventory
                        visibility, warehouse control, and planning. Designed
                        for distributors who need more precision and fewer
                        manual steps.
                      </p>

                      <button className="mt-8 flex items-center gap-2 font-semibold text-[#2E6BFF] transition-all hover:gap-3">
                        Learn more
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}