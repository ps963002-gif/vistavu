"use client";
import { useRef } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
const testimonials = [
  {
    quote:
      "VistaVu had the accounting expertise that was critical for us. Their team helped us extract data from Excel to improve our inventory calculations and they've built custom reports so that our leaders can quickly access financial data in the right format to make decisions.",
    name: "Bill McGuire",
    role: "Business Systems Analyst, Carrington Farms",
    logo: "/logos/herologo1.png",
  },
  {
    quote:
      "VistaVu helped streamline our manufacturing processes and gave us complete visibility into operations. Their consultants understood our business and delivered exactly what we needed.",
    name: "John Carter",
    role: "Operations Manager",
    logo: "/logos/herologo2.png",
  },
];

export default function Testimonial() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-lg">
        <div className="grid h-[520px] lg:grid-cols-[47%_53%]">
          {/* LEFT */}
          <div className="relative overflow-hidden bg-[#EEF5FD] px-12 pt-14">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -bottom-44 -left-24 h-[340px] w-[340px] rounded-full border-[60px] border-[#D9E8FB]" />
              <div className="absolute -bottom-[170px] left-[120px] h-[420px] w-[420px] rotate-45 border-[60px] border-[#DCEAFB]" />
            </div>
            <div className="relative z-10">
              <h2 className="max-w-[360px] text-[31px] leading-[1.28] tracking-[-0.04em] text-[#222]">
                Your success doesn’t end at go-live, we’re your partner for the
                long run.
              </h2>

              <div className="mt-10 flex gap-4">
                <Button variant="primary">
                  Explore Managed Services
                </Button>
                <Button variant="outline">
                  About Us
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative bg-[#13386F] px-12 py-10">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              loop
              speed={700}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper: SwiperType) => {
                setTimeout(() => {
                  if (
                    swiper.params.navigation &&
                    typeof swiper.params.navigation !== "boolean"
                  ) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex h-[440px] flex-col">
                    <FaQuoteLeft
                      size={50}
                      className="text-[#2F80ED]"
                    />
                    <p className="mt-5 min-h-[150px] max-w-[470px] text-[17px] leading-[2] text-white">
                      {item.quote}
                    </p>
                    <div className="mt-6 h-[3px] w-[36px] rounded-full bg-[#0a3369]" />

                    <div className="mt-6">
                      <h4 className="text-[20px] font-bold text-white">
                        {item.name}
                      </h4>

                      <p className="mt-0 text-[13px] text-[#B7C3D7]">
                        {item.role}
                      </p>

                      <div className="relative mt-2 h-[48px] w-[120px]">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation */}
            <div className="absolute bottom-6 right-8 z-20 flex gap-3">
              <button
                ref={prevRef}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#AEB5C2] text-white transition hover:bg-[#929CAB]"
              >
                <FiArrowLeft size={18} />
              </button>

              <button
                ref={nextRef}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F80ED] text-white transition hover:bg-[#1E73E8]"
              >
                <FiArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}