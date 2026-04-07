import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/button-link";

export function FinalCta() {
  return (
    <section id="faq" className="px-4 py-16 small:px-6 small:py-24 large:px-8">
      <div className="mx-auto max-w-[1110px] overflow-hidden rounded-[34px] border border-white/10 bg-neutral-900 light:border-neutral-200 light:bg-white">
        <div className="grid items-center gap-8 p-6 small:p-10 large:grid-cols-[1fr_0.8fr] large:p-12">
          <div>
            <p className="eyebrow">Start today</p>
            <h2 className="mt-4 2xsmall:text-[32px] font-medium 2xsmall:leading-[37px] small:leading-[41px] medium:leading-[46px] tracking-[-0.045em] text-[#E0E3E5] small:text-[36px] medium:text-[40px] light:text-neutral-950">
              The Deep Work Blueprint
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/56 light:text-neutral-600">
              Replace scattered effort with a practical weekly system for
              planning, protecting, and measuring focused work.
            </p>
            <div className="mt-7 flex flex-col gap-3 small:flex-row">
              <ButtonLink href="#pricing">
                Enroll in the course <FiArrowRight className="ml-2 size-4" />
              </ButtonLink>
              <ButtonLink href="#curriculum" variant="secondary">
                Review modules
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-h-[250px] overflow-hidden rounded-[28px] border border-white/10 bg-primary-500 p-5 light:border-neutral-200">
            <div className="absolute inset-0 opacity-20 [background-image:url('/image/texture.png')]" />
            <div className="relative z-10 rounded-3xl bg-white p-5 text-neutral-950 shadow-2xl">
              <div className="flex -space-x-3">
                {[
                  "/image/pexels-mizunokozuki-12903131.png",
                  "/image/pexels-annushka-ahuja-8055837.png",
                  "/image/pexels-tima-miroshnichenko-4841694.png",
                ].map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={42}
                    height={42}
                    className="size-11 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="mt-6 text-2xl font-medium tracking-[-0.035em]">
                2,500+ operators are rebuilding focus with PPA.
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Join the next cohort and install your deep work rhythm this
                week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
