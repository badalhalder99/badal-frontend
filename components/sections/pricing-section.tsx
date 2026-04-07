import Link from "next/link";
import { FiCheckCircle, FiPlusCircle } from "react-icons/fi";

const introItems = [
  "Bonus: 1:1 coaching session to boost focus.",
  "Discount: Save 30% when you enroll now!",
];

const pricingItems = [
  "6h of videos - Step-by-step deep work strategies.",
  "Templates & Trackers - Stay on track effortlessly.",
  "Live Q&As - Expert guidance & accountability.",
  "Exclusive Community - Connect with others.",
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-black py-[120px] text-white light:bg-neutral-25 light:text-neutral-950">
      <div className="mx-auto flex w-full max-w-[380px] flex-col items-center gap-4 small:max-w-[481px] medium:max-w-[625px] large:max-w-[901px] large:flex-row large:items-start large:justify-center 2xlarge:max-w-[1280px]">
        <article className="flex w-full flex-col items-start justify-center gap-[60px] rounded-[24px] bg-[#111214] px-8 py-10 small:p-[60px] medium:min-h-[570px] medium:max-w-[480px] medium:px-[60px] medium:py-10 large:max-w-none large:flex-1 large:self-stretch 2xlarge:w-[784px] 2xlarge:flex-none light:bg-white light:shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="flex w-full flex-col items-start gap-5">
            <p className="inline-flex h-9 w-[119px] items-center justify-center gap-2 rounded-[12px] bg-[#171B21] px-4 py-2 text-[15px] font-normal leading-[1.35] text-[#D0D5D9] shadow-[0px_8px_40px_rgba(36,102,242,0.15)] light:bg-primary-50 light:text-neutral-700">
              <span className="size-2 rounded-full bg-[#2466F2] shadow-[0px_2px_12px_rgba(36,102,242,0.5)]" />
              Introducing
            </p>

            <h2 className="text-[32px] font-medium leading-[1.15] text-[#E0E3E5] small:text-[36px] medium:text-[40px] light:text-neutral-950">
              The Deep Work Blueprint
            </h2>
            <p className="text-[17px] font-normal leading-[1.35] text-[#D0D5D9] light:text-neutral-600">
              What extra you will get if you enroll now
            </p>
          </div>

          <ul className="flex w-full flex-col items-start gap-6">
            {introItems.map((item) => (
              <li key={item} className="flex w-full items-center gap-3 text-[15px] font-normal leading-[1.35] text-[#AAAEB2] light:text-neutral-600">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[radial-gradient(61.03%_66.18%_at_50%_50%,#2466F2_0%,rgba(36,102,242,0)_100%)] p-px shadow-[0px_4px_32px_rgba(36,102,242,0.15)]">
                  <span className="grid size-full place-items-center rounded-full bg-[#171B21] text-white light:bg-primary-50 light:text-primary-500">
                    <FiPlusCircle className="size-4" />
                  </span>
                </span>
                <span className="min-w-0 flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="flex w-full flex-col items-start gap-16 rounded-[24px] bg-[#111214] px-8 pb-8 pt-10 small:w-[481px] medium:min-h-[570px] medium:w-[480px] large:w-auto large:flex-1 2xlarge:w-[480px] 2xlarge:flex-none light:bg-white light:shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="flex w-full flex-col items-start gap-10">
            <div className="flex w-full items-center justify-between gap-2">
              <div className="flex items-baseline gap-2 small:gap-3">
                <span className="text-[40px] font-medium leading-[1.15] text-[#D0D5D9] small:text-[44px] medium:text-[52px] light:text-neutral-950">
                  $349
                </span>
                <span className="relative text-[20px] font-medium leading-[1.15] text-[#AAAEB2] small:text-[24px] medium:text-[28px] light:text-neutral-500">
                  <span className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 rotate-[13deg] bg-[#FF1818]" />
                  $500
                </span>
              </div>
              <span className="inline-flex h-9 w-[83px] items-center justify-center rounded-[12px] bg-[#2466F2] px-4 py-2 text-center text-[15px] font-medium leading-[1.35] text-white">
                30% off
              </span>
            </div>

            <p className="text-[17px] font-normal leading-[1.35] text-[#D0D5D9] light:text-neutral-600">
              30% off until 4d : 2h : 41m : 17s
            </p>
          </div>

          <ul className="flex w-full flex-col items-start gap-6">
            {pricingItems.map((item) => (
              <li key={item} className="flex w-full items-center gap-3 text-[15px] font-normal leading-[1.35] text-[#AAAEB2] light:text-neutral-600">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[radial-gradient(61.03%_66.18%_at_50%_50%,#2466F2_0%,rgba(36,102,242,0)_100%)] p-px shadow-[0px_4px_32px_rgba(36,102,242,0.15)]">
                  <span className="grid size-full place-items-center rounded-full bg-[#171B21] text-white light:bg-primary-50 light:text-primary-500">
                    <FiCheckCircle className="size-4" />
                  </span>
                </span>
                <span className="min-w-0 flex-1">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#pricing"
            className="inline-flex h-[47px] w-full items-center justify-center rounded-[12px] bg-[#2466F2] px-5 py-3 text-[17px] font-medium leading-[1.35] text-white transition hover:bg-primary-400"
          >
            Enroll now
          </Link>
        </article>
      </div>
    </section>
  );
}
