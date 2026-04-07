import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export function Footer() {
  const footerLinks = [
    { label: "Terms & conditions", href: "#" },
    { label: "Refund policy", href: "#" },
    { label: "Pricing", href: "#pricing" },
    { label: "Support", href: "#" },
  ];

  const students = [
    "/image/pexels-mizunokozuki-12903131.png",
    "/image/pexels-anthonyshkraba-production-8278849.png",
    "/image/pexels-annushka-ahuja-8055837.png",
  ];

  return (
    <footer className="bg-[#111214] px-4 text-[#E0E3E5] small:px-5 medium:px-7 large:px-10 light:bg-white light:text-neutral-950">
      <div className="mx-auto flex w-full max-w-[380px] flex-col small:max-w-[481px] medium:max-w-[625px] large:max-w-[901px] 2xlarge:max-w-[1280px]">
        <div className="flex w-full flex-col items-center justify-center gap-10 py-20 large:flex-row large:justify-between large:gap-10">
          <div className="flex w-full max-w-[355px] flex-col items-center gap-5 text-center large:items-start large:text-left">
            <h2 className="max-w-[260px] text-[32px] font-medium leading-[1.15] text-[#E0E3E5] small:text-[36px] medium:text-[40px] light:text-neutral-950">
              The Deep Work Blueprint
            </h2>
            <p className="text-[17px] font-normal leading-[1.35] text-[#AAAEB2] light:text-neutral-600">
              Master Focus &amp; Get More Done in Less Time
            </p>
          </div>

          <Link
            href="#pricing"
            className="group flex h-[180px] w-full max-w-[320px] flex-col justify-between rounded-[24px] bg-[#2466F2] p-5 text-white transition hover:bg-primary-400"
            aria-label="Join 5K other students"
          >
            <div className="flex w-full items-center justify-between gap-6">
              <div className="flex -space-x-2">
                {students.map((student, index) => (
                  <Image
                    key={student}
                    src={student}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 rounded-full border-2 border-[#2466F2] object-cover"
                    priority={index === 0}
                  />
                ))}
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#2466F2] backdrop-blur-[10px] transition group-hover:translate-x-1">
                <FiArrowRight className="size-6" />
              </span>
            </div>
            <p className="mx-auto text-[17px] font-normal leading-[1.35] text-white">
              Join with 5K other students
            </p>
          </Link>
        </div>

        <div className="flex w-full flex-col items-center gap-10 py-8 large:flex-row large:items-start large:justify-between large:gap-2 large:pb-[60px] large:pt-8">
          <p className="order-1 text-[15px] font-normal leading-[1.35] text-[#D0D5D9] large:order-none light:text-neutral-600">
            © Copyright 2024, All Rights Reserved
          </p>
          <nav
            aria-label="Footer navigation"
            className="order-0 flex w-full max-w-[480px] flex-wrap items-center justify-center gap-x-8 gap-y-6 px-10 text-center text-[15px] font-normal leading-[1.35] text-[#D0D5D9] large:order-none large:w-auto large:max-w-none large:flex-nowrap large:px-0 light:text-neutral-600"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-white light:hover:text-neutral-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
