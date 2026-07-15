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
  },
  {
    title: "FieldVu",
    image: "/images/herobg.jpg",
  },
  {
    title: "WarehousePro",
    image: "/images/manufacturing.jpg",
  },
];

export default function ERPAddons() {
  return (
    <section className="border-t border-[#D9E1EA] bg-[#EDF1F5] pt-16 pb-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 lg:flex-row lg:justify-between">

        {/* Left Content */}
        <div className="max-w-[560px]">
          <p className="inline-block border-b-2 border-[#2E6BFF] pb-1 text-[19px] font-bold uppercase tracking-[1px] text-[#2E6BFF]">
            ERP ADDONS
          </p>

          <h2 className="mt-5 text-[45px] font-light leading-[55px] text-[#222]">
            Developed by VistaVu to solve operational
            challenges beyond standard ERP.
          </h2>

          <p className="mt-7 text-[17px] leading-[30px] text-[#666666]">
            From advanced warehouse control to real-time field
            service visibility, these tools expand what your ERP
            can do without adding complexity. Designed for
            distributors, manufacturers, and asset-heavy teams
            who need more than just the basics.
          </p>

          <div className="mt-12 flex gap-4">
            <button className="erp-prev flex h-12 w-12 items-center justify-center rounded-full bg-[#D9D9D9] transition hover:bg-[#BFBFBF]">
              <ArrowLeft size={20} />
            </button>

            <button className="erp-next flex h-12 w-12 items-center justify-center rounded-full bg-[#2E6BFF] text-white transition hover:bg-[#1F5BE5]">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards Slider */}
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
                <div className="group flex min-h-[580px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#102A56] hover:shadow-xl">

                  {/* Image */}
                  <div className="relative h-[220px] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">

                    <h3 className="text-[24px] font-semibold text-[#111] transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 flex-1 text-[16px] leading-6 text-[#666666] transition-colors duration-300 group-hover:text-white/80">
                      {item.title} enhances your ERP with tools for
                      inventory visibility, warehouse control, and
                      planning. Designed for distributors who need
                      more precision and fewer manual steps.
                    </p>
                      <button className="mt-auto flex items-center gap-2 pt-6 font-semibold text-[#2E6BFF] transition-all duration-300 hover:gap-3 group-hover:text-white">
                      Learn More
                      <ArrowRight size={18} />
                    </button>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}