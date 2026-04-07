"use client";

import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiPlay } from "react-icons/fi";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function ResultsSection() {
  const resultSlides = [
    {
      type: "text" as const,
      quote:
        "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
      author: "Alex Carter",
      role: "Freelance Designer",
      avatar: "/image/pexels-mizunokozuki-12903131.png",
    },
    {
      type: "video" as const,
      author: "Daniel Foster",
      role: "Content creator",
      avatar: "/image/pexels-a-darmel-7710219.png",
      image: "/image/pexels-a-darmel-7710219.png",
    },
    {
      type: "text" as const,
      quote:
        "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
      author: "Mark Davidson",
      role: "Software Developer",
      avatar: "/image/pexels-anthonyshkraba-production-8278849.png",
    },
    {
      type: "video" as const,
      author: "Tom David",
      role: "Entrepreneur",
      avatar: "/image/pexels-tima-miroshnichenko-4841703.png",
      image: "/image/pexels-yankrukov-7793987.png",
    },
    {
      type: "text" as const,
      quote:
        "Procrastination used to keep me stuck until this course showed me practical action steps. Now I start faster, stay focused, and finish the work that matters.",
      author: "James Lee",
      role: "Startup Operator",
      avatar: "/image/pexels-annushka-ahuja-8055837.png",
    },
  ];

  return (
    <section
      id="reviews"
      className="overflow-hidden bg-black py-10 text-white medium:py-20 light:bg-neutral-25"
    >
      <div className="mx-auto flex w-full max-w-[380px] flex-col items-center small:max-w-[481px] medium:max-w-[625px] large:max-w-[901px] 2xlarge:max-w-[1280px]">
        <div className="flex w-full flex-col items-center gap-8 px-4 py-[160px] small:px-10">
          <p className="inline-flex h-9 w-[126px] items-center justify-center gap-2 rounded-[12px] bg-[#171B21] px-4 py-2 text-center text-[15px] font-normal leading-[1.35] text-[#D0D5D9] shadow-[0_8px_40px_rgba(36,102,242,0.15)] light:bg-white light:text-neutral-700">
            <span className="size-2 rounded-full bg-[#2466F2] shadow-[0_2px_12px_rgba(36,102,242,0.5)]" />
            Testimonials
          </p>

          <div className="max-w-[348px] small:max-w-[400px]">
            <h2 className="text-center text-[40px] font-medium leading-[1.15] text-[#E0E3E5] small:text-[44px] medium:text-[52px] light:text-neutral-950">
              Real Results from Real People
            </h2>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-8">
          <div className="flex h-[60px] w-full items-center gap-10 px-6 small:justify-between">
            <p className="flex-1 text-[20px] font-medium leading-[1.15] text-[#D0D5D9] small:text-[24px] medium:text-[28px] light:text-neutral-950">
              Join with 5K other students
            </p>
            <div className="flex h-[60px] w-32 shrink-0 items-center gap-2">
              <button
                type="button"
                aria-label="Previous result"
                className="results-prev grid size-[60px] place-items-center rounded-full bg-[#171B21] p-4 text-white transition hover:bg-primary-500 light:bg-white light:text-neutral-800 light:shadow-[0_10px_30px_rgba(15,23,42,0.08)] light:hover:text-white"
              >
                <FiArrowLeft className="size-7" />
              </button>
              <button
                type="button"
                aria-label="Next result"
                className="results-next grid size-[60px] place-items-center rounded-full bg-[#171B21] p-4 text-white transition hover:bg-primary-500 light:bg-white light:text-neutral-800 light:shadow-[0_10px_30px_rgba(15,23,42,0.08)] light:hover:text-white"
              >
                <FiArrowRight className="size-7" />
              </button>
            </div>
          </div>

          <div className="h-[400px] w-full overflow-hidden">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".results-prev",
                nextEl: ".results-next",
              }}
              slidesPerView="auto"
              spaceBetween={16}
              slidesOffsetBefore={0}
              slidesOffsetAfter={0}
              className="!overflow-visible"
            >
              {resultSlides.map((slide) => (
                <SwiperSlide
                  key={slide.author}
                  className="!h-[400px] !w-[308px]"
                >
                  {slide.type === "text" ? (
                    <article className="flex h-[400px] w-[308px] flex-col items-start gap-6 rounded-[24px] bg-[#111214] px-6 py-8 light:bg-white light:shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                      <div className="flex flex-col items-start gap-6">
                        <Image
                          src={slide.avatar}
                          alt={slide.author}
                          width={40}
                          height={40}
                          className="size-10 rounded-full object-cover"
                        />
                        <p className="text-[17px] font-normal leading-[1.35] text-[#AAAEB2] light:text-neutral-600">
                          {slide.quote}
                        </p>
                      </div>
                      <div className="mt-auto flex flex-col items-start gap-1">
                        <h3 className="text-[20px] font-medium leading-[1.35] text-[#D0D5D9] light:text-neutral-950">
                          {slide.author}
                        </h3>
                        <p className="text-[15px] font-normal leading-[1.35] text-[#AAAEB2] light:text-neutral-500">
                          {slide.role}
                        </p>
                      </div>
                    </article>
                  ) : (
                    <article className="relative isolate flex h-[400px] w-[308px] flex-col items-start gap-6 overflow-hidden rounded-[24px] px-6 py-8">
                      <Image
                        src={slide.image}
                        alt={`${slide.author} result story`}
                        fill
                        sizes="(min-width: 1440px) 25vw, (min-width: 980px) 33vw, (min-width: 680px) 50vw, (min-width: 520px) 75vw, 85vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 z-0 bg-black/20" />
                      <Image
                        src={slide.avatar}
                        alt={slide.author}
                        width={40}
                        height={40}
                        className="relative z-10 size-10 rounded-full object-cover"
                      />
                      <button
                        type="button"
                        aria-label={`Play ${slide.author} result story`}
                        className="absolute left-1/2 top-1/2 z-10 grid size-[60px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-white/30 bg-white p-4 text-[#2466F2] backdrop-blur-[10px]"
                      >
                        <FiPlay className="ml-1 size-7 fill-current" />
                      </button>
                      <div className="relative z-10 mt-auto flex flex-col items-start gap-1">
                        <h3 className="text-[20px] font-medium leading-[1.35] text-[#F5F6F7]">
                          {slide.author}
                        </h3>
                        <p className="text-[15px] font-normal leading-[1.35] text-[#E0E3E5]">
                          {slide.role}
                        </p>
                      </div>
                    </article>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
