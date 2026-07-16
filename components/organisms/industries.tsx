"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Industries() {
  const industries = [
    {
      title: "Manufacturing",
      image: "/images/manufacturing.jpg",
      description:
        "We work with mid-market leaders in industries where precision, efficiency, and visibility matter.",
    },
    {
      title: "Wholesale Distribution",
      image: "/images/wholesale.jpg",
      description:
        "We work with mid-market leaders in industries where precision, efficiency, and visibility matter.",
    },
    {
      title: "Aerospace & Defense",
      image: "/images/aerospace.jpg",
      description:
        "We work with mid-market leaders in industries where precision, efficiency, and visibility matter.",
    },
  ];

  const sliderData = [...industries, ...industries];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-10">

        {/* Heading */}
        <div className="max-w-[640px]">

          <h5 className="inline-block border-b border-[#2D8CFF] pb-[2px] text-[19px] font-semibold uppercase tracking-[0em] text-[#2D8CFF]">
            INDUSTRIES
          </h5>

          <h2 className="mt-4 text-[58px] font-bold leading-[60px] tracking-[-0.045em] text-[#222222]">
            Purpose-built solutions
            <br />
            for your industry
          </h2>

          <p className="mt-3 max-w-[560px] text-[19px] leading-[2.0rem] text-[#666666]">
            We work with mid-market leaders in industries where precision,
            efficiency, and visibility aren't optional. Our solutions are built
            to match the complexity of your operations, with the speed and
            scalability of cloud ERP and the deep industry knowledge to get it
            right the first time.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-16">

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".industries-prev",
              nextEl: ".industries-next",
            }}
            loop
            speed={700}
            grabCursor
            slidesPerView={3}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {sliderData.map((industry, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden rounded-xl border border-[#E8E8E8] bg-white shadow-sm">

                  {/* Image */}
                  <div className="relative h-[195px] w-full">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex h-[209px] flex-col px-7 pt-6 pb-6">

                    <h3 className="text-[21px] font-bold leading-[24px] tracking-[-0.03em] text-[#222222]">
                      {industry.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[15px] leading-[24px] text-[#666666]">
                      {industry.description}
                    </p>
                                        <button className="mt-auto flex items-center gap-2 text-[15px] font-semibold text-[#2D8CFF] transition-all duration-300 hover:gap-3">
                      Learn more
                      <span className="text-lg">→</span>
                    </button>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="mt-10 flex justify-end gap-4">
            <button className="industries-prev flex h-11 w-11 items-center justify-center rounded-full border border-[#D9D9D9] bg-white text-[#2D8CFF] shadow-sm transition-all hover:bg-[#2D8CFF] hover:text-white">
              ←
            </button>

            <button className="industries-next flex h-11 w-11 items-center justify-center rounded-full bg-[#2D8CFF] text-white shadow-sm transition-all hover:bg-[#1E74E8]">
              →
            </button>
          </div>
                  </div>
      </div>
    </section>
  );
}