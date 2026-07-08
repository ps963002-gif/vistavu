import Image from "next/image";
import Button from "../atoms/Button";

export default function Hero() {
  return (
    <>
  
      <section className="relative w-full bg-[#F6F9FC] overflow-hidden">
        <div className="relative w-full h-[45rem]">
          <div className="absolute left-0 top-0 w-[58%] h-full bg-[#0D2D63]" />

          <div className="relative max-w-[90rem] mx-auto h-full flex">
            <div className="w-1/2 flex items-center">
              <div className="pl-24">

                <h1 className="text-white text-[4.5rem] leading-[5.125rem] font-bold max-w-[35rem]">
                  Innovate today,
                  <br />
                  run great
                  <br />
                  tomorrow.
                </h1>

                <p className="mt-[2.5rem] text-white/90 text-[1.25rem] leading-[2.375rem] max-w-[32.5rem]">
                  Tailored to meet diverse business needs, we provide
                  solutions that empower businesses to optimize
                  processes, drive productivity, and elevate operations.
                </p>

                <div className="flex gap-[1.5rem] mt-[3rem]">
                  <Button variant="primary">
                    Get In Touch
                  </Button>

                  <Button variant="secondary">
                    Browse Solutions
                  </Button>
                </div>

              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">

              <div className="relative w-[40rem] h-[30rem] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/herobg.jpg"
                  alt="Hero"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </section>
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-[90rem] mx-auto h-[6.875rem] px-[4rem] flex items-center justify-between">

          <div className="relative w-[8.75rem] h-[2.8125rem]">
            <Image
              src="/logos/herologo1.png"
              alt="Logo 1"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-[10.625rem] h-[3.75rem]">
            <Image
              src="/logos/herologo2.png"
              alt="Logo 2"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-[13.75rem] h-[3.4375rem]">
            <Image
              src="/logos/herologo3.png"
              alt="Logo 3"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-[12.5rem] h-[3.125rem]">
            <Image
              src="/logos/herologo4.png"
              alt="Logo 4"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-[5.625rem] h-[5.625rem]">
            <Image
              src="/logos/herologo5.png"
              alt="Logo 5"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </section>
    </>
  );
}