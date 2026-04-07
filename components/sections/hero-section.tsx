import Link from "next/link";
import { VideoCard } from "@/components/ui/video-card";

export function HeroSection() {
  return (
    <section
      id="overview"
      className="relative isolate flex h-[849.93px] flex-col items-end overflow-hidden bg-black p-0 text-white small:h-[910.79px] medium:h-[999.86px] large:h-[1279px] min-[981px]:max-[1439px]:h-[1187.24px] light:bg-neutral-25 light:text-neutral-950"
    >
      <div className="pointer-events-none absolute left-1/2 top-[638px] -z-10 h-[1282px] w-[1440px] -translate-x-1/2 bg-[#1245B3] blur-[200px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/image/texture.png')] bg-center bg-repeat opacity-70 mix-blend-overlay" />

      <div className="flex h-[560px] w-full flex-col items-center justify-end gap-6 px-7">
        <p className="gradient-badge inline-flex h-9 items-center justify-center gap-2 rounded-[12px] px-4 py-2 text-center text-[15px] font-normal leading-[1.35] text-[#D0D5D9] shadow-[0_8px_40px_rgba(36,102,242,0.15)] [--badge-bg:#171B21] light:[--badge-bg:#FFFFFF] light:text-neutral-700">
          <span className="size-2 shrink-0 rounded-full bg-[#2466F2] shadow-[0_2px_12px_rgba(36,102,242,0.5)]" />
          <span>30% off until 4d : 2h : 41m : 17s</span>
        </p>

        <div className="mt-[10px] flex w-full flex-col items-center gap-8 small:mt-0">
          <div className="flex w-full max-w-[460px] flex-col items-center gap-5 medium:max-w-[560px]">
            <h1 className="text-center text-[32px] font-medium leading-[1.15] text-[#E0E3E5] small:text-[44px] medium:text-[52px] light:text-neutral-950">
              Master Focus &amp; Get
              <br />
              More Done in Less Time
            </h1>
            <p className="max-w-[340px] text-center text-[17px] font-normal leading-[1.35] text-[#AAAEB2] small:max-w-[460px] light:text-neutral-600">
              A step-by-step system to eliminate procrastination, train your
              brain for deep work, and boost productivity effortlessly.
            </p>
          </div>

          <div className="flex h-[47px] w-[249px] items-center gap-3">
            <Link
              href="#pricing"
              className="inline-flex h-[47px] w-[116px] items-center justify-center rounded-[12px] bg-[#2466F2] px-5 py-3 text-[17px] font-medium leading-[1.35] text-white transition hover:bg-primary-400"
            >
              Enroll now
            </Link>
            <Link
              href="#curriculum"
              className="inline-flex h-[47px] w-[121px] items-center justify-center rounded-[12px] bg-[#171B21] px-5 py-3 text-[17px] font-medium leading-[1.35] text-white transition hover:bg-[#20242D]"
            >
              Curriculum
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-[3] flex h-[289.93px] w-full flex-col items-center justify-center gap-2 px-4 pb-4 pt-[60px] small:h-[350.79px] small:px-5 small:pb-5 medium:h-[439.86px] medium:px-7 medium:pb-7 large:h-[719px] large:px-10 large:pb-[60px] min-[981px]:max-[1439px]:h-[627.24px]">
        <VideoCard
          src="/image/hero.png"
          alt="Professional focused on a laptop during a deep work session"
          priority
          className="w-full max-w-[1064px] rounded-[24px] border-0 shadow-none [&>button]:size-[60px] [&>button]:border-[3px] [&>button]:p-4 [&>button]:backdrop-blur-[10px] [&_svg]:size-7 small:[&>button]:size-[88px] small:[&>button]:border-[6px] small:[&>button]:p-6 small:[&>button]:backdrop-blur-[20px] small:[&_svg]:size-10"
        />
      </div>
    </section>
  );
}
