import Image from "next/image";

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
    <section className="bg-white py-[6rem]">
      <div className="max-w-[80rem] mx-auto px-[2rem] lg:px-[3rem]">

        <div className="max-w-[38.75rem]">
          <p className="text-[#2E6BFF] uppercase tracking-[0.125rem] text-[0.875rem] font-semibold">
            INDUSTRIES
          </p>

          <h2 className="mt-[1.25rem] text-[3.5rem] leading-[4rem] font-semibold text-[#202020]">
            Purpose-built solutions for your industry
          </h2>

          <p className="mt-[1.5rem] text-[1.125rem] leading-[2.125rem] text-[#666666]">
            We work with mid-market leaders in industries where precision,
            efficiency, and visibility aren’t optional. Our solutions are built
            to match the complexity of your operations, with the speed and
            scalability of cloud ERP and the deep industry knowledge to get it
            right the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] mt-[4rem]">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="relative h-[15.625rem] w-full">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-[1.5rem]">
                <h3 className="text-[1.375rem] font-semibold text-[#1F1F1F]">
                  {industry.title}
                </h3>

                <p className="mt-[1rem] text-[1.0625rem] leading-[1.875rem] text-[#666666]">
                  {industry.description}
                </p>

                <button className="mt-[2rem] text-[#2E6BFF] font-semibold hover:underline">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}