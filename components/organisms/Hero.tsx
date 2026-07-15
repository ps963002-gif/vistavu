"use client";

import Image from "next/image";
import Button from "../atoms/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const heroImages = [
    "/images/herobg.jpg",
    "/images/manufacturing.jpg",
    "/images/wholesale.jpg",
  ];

  const logos = [
    "/logos/herologo1.png",
    "/logos/herologo2.png",
    "/logos/herologo3.png",
    "/logos/herologo4.png",
    "/logos/herologo5.png",
    "/logos/herologo1.png",
    "/logos/herologo2.png",
    "/logos/herologo3.png",
  ];

  return (
    <>
      
      <section className="relative w-full bg-[#F6F9FC] overflow-hidden">
        <div className="relative w-full h-[39rem]">
          
          <div className="absolute left-0 top-0 w-[58%] h-full bg-[#0D2D63]" />

          <div className="relative max-w-[90rem] mx-auto h-full flex">
            
            <div className="w-1/2 flex items-center">
              <div className="pl-24">
                <h1 className="text-white text-[3.5rem] leading-[4rem] font-bold max-w-[35rem]">
                  Innovate today,
                  <br />
                  run great tomorrow.
                </h1>

                <p className="mt-10 text-white/90 text-[1.25rem] leading-8 max-w-[32.5rem]">
                  Tailored to meet diverse business needs, we provide
                  solutions that empower businesses to optimize
                  processes, drive productivity, and elevate operations.
                </p>

                <div className="flex gap-6 mt-12">
                  <Button variant="primary">
                    Get In Touch
                  </Button>

                  <Button variant="secondary">
                    Browse Solutions
                  </Button>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col items-center justify-center">
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".hero-pagination",
                }}
                className="w-[34rem] h-[24rem] rounded-xl overflow-hidden shadow-xl"
              >
                {heroImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[24rem]">
                      <Image
                        src={image}
                        alt={`Hero ${index + 1}`}
                        fill
                        priority={index === 0}
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="hero-pagination mt-6 flex justify-center"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F5F7] border-t border-[#E5E7EB] py-6">
        <div className="max-w-[80rem] mx-auto px-8">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            loop
            slidesPerView={4}
            spaceBetween={40}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-16">
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={140}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}