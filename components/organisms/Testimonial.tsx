import Image from "next/image";
import Button from "@/components/atoms/Button";

export default function Testimonial() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-2">

     
        <div className="relative bg-[#edf4fc] px-12 py-14 flex flex-col justify-center">

      
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute -bottom-36 left-10 w-[28rem] h-[28rem] rounded-full border-[4rem] border-[#7ba8eb]" />
          </div>

          <div className="relative z-10">
            <h2 className="max-w-[28rem] text-[3rem] leading-[2.7rem] font-medium text-[#1b1b1b]">
              Your success doesn't end at go-live, we're your partner for the
              long run.
            </h2>

            <div className="mt-10 flex gap-5">
              <Button variant="primary">
                Explore Managed Services
              </Button>

              <Button variant="outline">
                About Us
              </Button>
            </div>
          </div>
        </div>


        <div className="bg-[#12346b] px-10 py-10 flex flex-col justify-between">

          <div>

            <div className="text-[#2F80ED] text-6xl leading-none">
              ❝
            </div>

            <p className="mt-6 text-white text-lg leading-7 max-w-[30rem]">
              VistaVu had the accounting expertise that was critical for us.
              Their team helped us extract data from Excel to improve our
              inventory calculations and they've built custom reports so that
              our leaders can quickly access financial data in the right format
              to make decisions.
            </p>

            <div className="mt-8 h-1 w-12 rounded-full bg-[#2F80ED]" />

            <div className="mt-8">
              <h4 className="text-white text-2xl font-semibold">
                Bill McGuire
              </h4>

              <p className="mt-2 text-gray-300 text-base">
                Business Systems Analyst, Carrington Farms
              </p>

      
              <div className="mt-6">
                <Image
                  src="/images/aerospace.jpg"
                  alt="Aerospace"
                  width={110}
                  height={60}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>

  
          <div className="mt-10 flex justify-end gap-4">

            <button className="w-12 h-12 rounded-full bg-gray-400 text-white flex items-center justify-center text-xl hover:bg-gray-500 transition">
              ←
            </button>

            <button className="w-12 h-12 rounded-full bg-[#2F80ED] text-white flex items-center justify-center text-xl hover:bg-blue-600 transition">
              →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}