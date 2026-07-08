import Image from "next/image";
import Button from "../atoms/Button";

const navigationItems = [
  "Home",
  "Industries",
  "Business Needs",
  "Resources",
  "Company",
];

export default function Header() {
  return (
    <header className="w-full border-b border-[var(--color-border)] bg-white">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <Image
            src="/logos/vistavulogo.jpg"
            alt="VistaVu Logo"
            width={140}
            height={40}
            priority
            className="object-contain"
          />
        </div>
        <nav>
          <ul className="flex items-center gap-8">
            {navigationItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer text-[16px] font-medium text-[#111827] hover:text-[#0057B8]"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="primary">
          Get In Touch
        </Button>

      </div>
    </header>
  );
}