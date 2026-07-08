import Button from "@/components/atoms/Button";

export default function Testimonial() {
  return (
    <section className="py-[6rem]">
      <div className="mx-auto max-w-[80rem] rounded-[1rem] overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2">
        <div className="relative bg-[#edf4fc] px-[4rem] py-[5rem] flex flex-col justify-center">

          <div className="absolute bottom-0 left-0 w-full h-full opacity-10">
            <div className="absolute bottom-[-8rem] left-[6rem] w-[28rem] h-[28rem] rounded-full border-[4rem] border-[#8cb6f0]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-[3.6rem] leading-[4.6rem] font-semibold text-[#1b1b1b] max-w-[32rem]">
              Your success doesn't end at go-live, we're your partner for the
              long run.
            </h2>

            <div className="mt-[3rem] flex gap-[1.2rem]">
              <Button variant="primary">
                Explore Managed Services
              </Button>

              <Button variant="outline">
                About Us
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-[#0d2b61] px-[4rem] py-[4rem] flex flex-col justify-between">

          <div>

            <div className="text-[5rem] leading-none text-[#2f80ed]">
              ❝
            </div>

            <p className="mt-[2rem] text-[1.15rem] leading-[2rem] text-white">
              VistaVu had the accounting expertise that was critical for us.
              Their team helped us extract data from Excel to improve our
              inventory calculations and they've built custom reports so that
              our leaders can quickly access financial data in the right format
              to make decisions.
            </p>

            <div className="mt-[2rem] h-[0.25rem] w-[3rem] rounded-full bg-[#2f80ed]" />

            <div className="mt-[2rem]">
              <h4 className="text-[1.4rem] font-semibold text-white">
                Bill McGuire
              </h4>

              <p className="mt-[0.5rem] text-[1rem] text-gray-300">
                Business Systems Analyst, Carrington Farms
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}