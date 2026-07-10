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

  return (
    <section className="bg-white py-24">
      <div className="max-w-[80rem] mx-auto px-8">

        <div className="max-w-[42rem]">

          <h5 className="inline-block border-b-2 border-[#2D8CFF] pb-1 text-xs font-bold uppercase tracking-[3px] text-[#2D8CFF]">
            Industries
          </h5>

          <h2 className="mt-5 text-[3rem] leading-[3.4rem] font-bold text-[#202020]">
            Purpose-built solutions for your industry
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-[#666]">
            We work with mid-market leaders in industries where precision,
            efficiency, and visibility aren't optional. Our solutions are built
            to match the complexity of your operations with the speed and
            scalability of cloud ERP and deep industry expertise.
          </p>
        </div>

        <div className="mt-14">

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={3}
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
            {industries.map((industry) => (
              <SwiperSlide key={industry.title}>
                <div className="overflow-hidden rounded-xl border border-[#ECECEC] bg-[#F8F9FB] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                  <div className="relative h-[250px] w-full">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">

                    <h3 className="text-[30px] font-semibold text-[#202020]">
                      {industry.title}
                    </h3>

                    <p className="mt-4 text-[16px] leading-8 text-[#666]">
                      {industry.description}
                    </p>

                    <button className="mt-8 text-[15px] font-semibold text-[#2D8CFF] hover:underline">
                      Learn more →
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