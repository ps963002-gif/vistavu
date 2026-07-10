import Link from "next/link";
import Image from "next/image";
import {
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-[6rem]">
      <div className="bg-[#f5f5f5]">
        <div className="mx-auto flex max-w-[80rem] flex-col gap-[3rem] px-[2rem] py-[4rem] lg:flex-row lg:justify-between">
          <div className="max-w-[24rem]">
            <div className="mb-[2rem]">
             <Image
  src="/images/footerlogo.png"
  alt="VistaVu Logo"
  width={380}
  height={130}
  className="h-auto w-[18rem] lg:w-[20rem]"
  priority

              />
            </div>
            <p className="text-[1rem] leading-[1.8rem] text-gray-600">
              VistaVu creates solutions for your business. Innovative business
              solutions that drive growth and efficiency.
            </p>

            <p className="mt-[1.5rem] text-[1rem] text-gray-600">
              Call us at{" "}
              <span className="font-semibold text-[#2F80ED]">
                1-888-300-2727
              </span>{" "}
              ext.
              <span className="font-semibold text-[#2F80ED]"> 105</span>v
            </p>
          </div>
          <div>
            <h3 className="mb-[1.5rem] text-[1.25rem] font-semibold">
              Company
            </h3>

            <div className="flex flex-col gap-[0.5rem] text-gray-600">
              <Link href="#">About Us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Resources</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-[1.5rem] text-[1.25rem] font-semibold">
              Helpful Resources
            </h3>

            <div className="flex flex-col gap-[0.5rem] text-gray-600">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Cookies</Link>
              <Link href="#">FAQs</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-[1.5rem] text-[1.25rem] font-semibold">
              Follow Us
            </h3>
            <div className="flex gap-[1rem] text-[1.8rem] text-[#0B2B5B]">
              <FaYoutube className="cursor-pointer transition hover:text-[#2F80ED]" />
              <FaXTwitter className="cursor-pointer transition hover:text-[#2F80ED]" />
              <FaFacebookF className="cursor-pointer transition hover:text-[#2F80ED]" />
              <FaLinkedinIn className="cursor-pointer transition hover:text-[#2F80ED]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B2B5B]">
        <div className="mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-[1rem] px-[2rem] py-[1.4rem] text-[1rem] text-white lg:flex-row">
          <div className="flex gap-[2rem]">
            <Link href="#">Licenses</Link>
            <Link href="#">Terms of Use</Link>
          </div>

          <p>©2025. VistaVu.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}