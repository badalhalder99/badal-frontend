import { FiCheckCircle, FiCpu, FiSun, FiZap } from "react-icons/fi";
import type { IconType } from "react-icons";

interface Benefit {
  icon: IconType;
  text: string;
}

const benefits: Benefit[] = [
  {
    icon: FiSun,
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    icon: FiCpu,
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    icon: FiCheckCircle,
    text: "Overcome procrastination & get more done.",
  },
  {
    icon: FiZap,
    text: "Build lasting habits for long-term success.",
  },
];

export function SystemSection() {
  return (
    <section className="bg-black py-20 text-white light:bg-neutral-25 light:text-neutral-950">
      <div className="mx-auto flex w-full max-w-[1360px] flex-col items-center">
        <div className="flex w-full flex-col items-center gap-8 px-4 py-[160px] small:px-10">
          <p className="inline-flex h-9 w-[205px] items-center justify-center gap-2 rounded-[12px] bg-[#171B21] px-4 py-2 text-center text-[15px] font-normal leading-[1.35] text-[#D0D5D9] shadow-[0_8px_40px_rgba(36,102,242,0.15)] light:bg-white light:text-neutral-700">
            <span className="size-2 rounded-full bg-[#2466F2] shadow-[0_2px_12px_rgba(36,102,242,0.5)]" />
            The Deep Work Blueprint
          </p>

          <div className="max-w-[348px] small:max-w-[401px] medium:max-w-[545px] large:max-w-[600px]">
            <h2 className="text-center text-[28px] font-medium leading-[1.15] text-[#E0E3E5] medium:text-[40px] light:text-neutral-950">
              A self-paced, results-driven course designed to help you
            </h2>
          </div>
        </div>

        <div className="flex w-full max-w-[380px] flex-col items-start gap-8 px-4 small:px-0">
          {benefits.map((benefit) => (
            <article
              key={benefit.text}
              className="flex min-h-[192px] w-full items-center gap-8 small:gap-[60px]"
            >
              <div className="flex min-h-[192px] w-5 shrink-0 flex-col items-center justify-center gap-8">
                <span className="size-5 rounded-full bg-[#2466F2] shadow-[0_0_44px_-3px_#2466F2]" />
                <span className="w-0.5 flex-1 bg-[linear-gradient(180deg,rgba(36,102,242,0)_0%,#2466F2_50%,rgba(36,102,242,0)_100%)]" />
              </div>

              <div className="flex flex-1 flex-col items-start gap-5 py-5">
                <span className="grid size-[68px] place-items-center rounded-full bg-[#171B21] p-5 text-white shadow-[0_8px_40px_rgba(36,102,242,0.15)] light:bg-white light:text-primary-500">
                  <benefit.icon className="size-7" />
                </span>

                <div className="max-w-[296px] small:max-w-[300px]">
                  <p className="text-[24px] font-normal leading-[1.35] text-[#D0D5D9] light:text-neutral-950">
                    {benefit.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
