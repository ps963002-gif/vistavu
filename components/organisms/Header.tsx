"use client";
import Image from "next/image";
import Button from "../atoms/Button";
import { FiSearch, FiChevronDown } from "react-icons/fi";
export default function Header() {
  return (
    <header className="w-full h-[82px] border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-8">
        <Image
          src="/logos/vistavulogo.jpg"
          alt="VistaVu"
          width={160}
          height={32}
          priority
        />
        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-10 text-[17px] font-medium text-[#222]">
              <li className="cursor-pointer hover:text-[#2D8CFF] transition">
                Home
              </li>
              <li className="cursor-pointer hover:text-[#2D8CFF] transition">
                Industries
              </li>
              <li className="flex cursor-pointer items-center gap-1 font-semibold text-[#2D8CFF]">
                Business Needs
                <FiChevronDown size={16} />
              </li>
              <li className="cursor-pointer hover:text-[#2D8CFF] transition">
                Resources
              </li>
              <li className="cursor-pointer hover:text-[#2D8CFF] transition">
                Company
              </li>

            </ul>
          </nav>
          <Button variant="primary">
            Get In Touch
          </Button>

          <FiSearch
            size={22}
            className="cursor-pointer text-[#222]"
          />

        </div>

      </div>
    </header>
  );
}