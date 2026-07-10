import Image from "next/image";
import Button from "../atoms/Button";

export default function Hero() {
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
                  run great
                  tomorrow.
                </h1>
                <p className="mt-[2.5rem] text-white/90 text-[1.25rem] leading-[1.5rem] max-w-[32.5rem]">
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
            <div className="w-1/2 flex flex-col items-center justify-center">

  <div className="relative w-[34rem] h-[24rem] rounded-xl overflow-hidden shadow-xl">
    <Image
      src="/images/herobg.jpg"
      alt="Hero"
      fill
      priority
      className="object-cover"
    />
  </div>
  <div className="mt-6 flex items-center gap-3">
    <span className="h-4 w-4 rounded-full border-[3px] border-[#2D8CFF] bg-white"></span>

    <span className="h-3 w-3 rounded-full bg-gray-400"></span>

    <span className="h-3 w-3 rounded-full bg-gray-400"></span>
  </div>

</div>

          </div>

        </div>
      </section>
      <section className="bg-[#F3F5F7] border-t border-[#E5E7EB]">
  <div className="max-w-[80rem] mx-auto h-[5.5rem] px-8 flex items-center justify-center gap-14">

    <div className="relative w-[5.5rem] h-[2rem]">
      <Image
        src="/logos/herologo1.png"
        alt="Logo 1"
        fill
        className="object-contain"
      />
    </div>

    <div className="relative w-[6.5rem] h-[2.4rem]">
      <Image
        src="/logos/herologo2.png"
        alt="Logo 2"
        fill
        className="object-contain"
      />
    </div>

    <div className="relative w-[8.5rem] h-[2.6rem]">
      <Image
        src="/logos/herologo3.png"
        alt="Logo 3"
        fill
        className="object-contain"
      />
    </div>

    <div className="relative w-[8rem] h-[2.3rem]">
      <Image
        src="/logos/herologo4.png"
        alt="Logo 4"
        fill
        className="object-contain"
      />
    </div>

    <div className="relative w-[3rem] h-[3rem]">
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