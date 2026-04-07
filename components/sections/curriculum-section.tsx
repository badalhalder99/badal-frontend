"use client";

import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FiCheckCircle, FiPlay } from "react-icons/fi";
import { pricingFeatures } from "@/constants/content";

const modules = [
  {
    title: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        duration: "14:23",
        preview: true,
      },
      {
        title: "The Science Behind Deep Work",
        duration: "22:51",
      },
      {
        title: "Identifying Your Productivity Killers",
        duration: "34:42",
      },
      {
        title: "How to Strengthen Your Attention Span",
        duration: "27:08",
      },
    ],
  },
  {
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [
      {
        title: "Designing a Repeatable Focus Block",
        duration: "18:40",
      },
      {
        title: "Protecting Your Calendar",
        duration: "21:10",
      },
    ],
  },
  {
    title: "Module 3: Eliminating Procrastination",
    duration: "1.9h of video",
    lessons: [
      {
        title: "Turning Friction Into Action",
        duration: "25:18",
      },
      {
        title: "Building a Shutdown Ritual",
        duration: "20:45",
      },
    ],
  },
  {
    title: "Module 4: Advanced Focus & Productivity Hacks",
    duration: "1.2h of video",
    lessons: [
      {
        title: "Tracking Deep Work Output",
        duration: "16:12",
      },
      {
        title: "Compounding Weekly Improvements",
        duration: "23:07",
      },
    ],
  },
];

export function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="curriculum"
      className="overflow-hidden bg-black py-0 text-white small:py-20 light:bg-neutral-25"
    >
      <div className="mx-auto flex w-full max-w-[1360px] flex-col items-center">
        <div className="flex w-full flex-col items-center gap-8 px-4 pb-[60px] pt-[160px] small:px-10">
          <p className="gradient-badge inline-flex h-9 items-center justify-center gap-2 rounded-[12px] px-4 py-2 text-center text-[15px] font-normal leading-[1.35] text-[#D0D5D9] shadow-[0_8px_40px_rgba(36,102,242,0.15)] [--badge-bg:#171B21] light:[--badge-bg:#FFFFFF] light:text-neutral-700">
            <span className="size-2 rounded-full bg-[#2466F2] shadow-[0_2px_12px_rgba(36,102,242,0.5)]" />
            Course Curriculum
          </p>

          <div className="max-w-[348px] small:max-w-[401px] medium:max-w-[545px] large:max-w-[640px]">
            <h2 className="text-center text-[28px] font-medium leading-[1.15] text-[#E0E3E5] medium:text-[40px] light:text-neutral-950">
              Mastering Deep Work: A Structured Path to Peak Productivity
            </h2>
          </div>
        </div>

        <div className="flex w-full max-w-[380px] flex-col items-center gap-[60px] small:max-w-[481px] medium:max-w-[625px] large:max-w-[901px] large:flex-row large:items-start large:justify-center 2xlarge:max-w-[1280px]">
          <div className="w-full pt-[100px] medium:max-w-[560px] large:w-[420.5px] large:max-w-none 2xlarge:w-[560px]">
            <div className="flex w-full flex-col items-start">
              {modules.map((module, index) => {
                const isOpen = openIndex === index;
                const panelId = `curriculum-module-${index}`;
                const buttonId = `curriculum-button-${index}`;

                return (
                  <div
                    key={module.title}
                    className="w-full border-b border-[#171B21] last:border-b-0 light:border-neutral-200"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(90deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                    }}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center gap-10 px-6 py-8 text-left"
                    >
                      <span className="flex min-w-0 flex-1 flex-col items-start gap-2">
                        <span className="text-[20px] font-medium leading-[1.35] text-[#D0D5D9] light:text-neutral-950">
                          {module.title}
                        </span>
                        <span className="text-[15px] font-normal leading-[1.35] text-[#AAAEB2] light:text-neutral-600">
                          {module.duration}
                        </span>
                      </span>
                      <FaCaretDown
                        className={`size-8 shrink-0 text-white transition light:text-neutral-950 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col items-start px-6 pb-6">
                          {module.lessons.map((lesson) => (
                            <div
                              key={lesson.title}
                              className="flex w-full items-center gap-4 border-b border-transparent py-8 last:border-b-0"
                              style={{
                                borderImageSlice: 1,
                                borderImageSource:
                                  "linear-gradient(90deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                              }}
                            >
                              <span
                                className={`flex justify-center items-center size-8 rounded-full border-2 border-white/30 bg-white p-1.5 ${lesson.preview ? "text-[#2466F2]" : "text-[#171B21] opacity-20"}`}
                              >
                                <FiPlay className="ml-0.5 size-5 fill-current" />
                              </span>
                              <span className="min-w-0 flex-1 text-[17px] font-normal leading-[1.35] text-[#AAAEB2] light:text-neutral-700">
                                {lesson.title}
                              </span>
                              <span className="flex shrink-0 items-center gap-6">
                                {lesson.preview ? (
                                  <span className="inline-flex h-7 w-[82px] items-center justify-center rounded-full bg-[#171B21] px-4 py-1 text-[15px] font-normal leading-[1.35] text-[#669EFF]">
                                    Preview
                                  </span>
                                ) : null}
                                <span className="text-[17px] font-normal leading-[1.35] text-[#AAAEB2] light:text-neutral-700">
                                  {lesson.duration}
                                </span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full max-w-[481px] pt-10 small:pt-[60px] medium:max-w-[440px] large:w-[420.5px] large:max-w-none large:pt-[100px] 2xlarge:w-[440px]">
            <aside className="flex w-full flex-col items-start gap-16 rounded-[24px] bg-[#111214] px-8 pb-8 pt-10 light:bg-white light:shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <h3 className="text-[24px] font-medium leading-[1.15] text-[#D0D5D9] small:text-[28px] light:text-neutral-950">
                Not only video lessons!
              </h3>

              <div className="flex w-full flex-col items-start gap-6">
                {pricingFeatures.map((feature) => (
                  <div key={feature} className="flex w-full items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[radial-gradient(61.03%_66.18%_at_50%_50%,#2466F2_0%,rgba(36,102,242,0)_100%)] p-px shadow-[0_4px_32px_rgba(36,102,242,0.15)]">
                      <span className="grid size-full place-items-center rounded-full bg-[#171B21] p-2 text-white light:bg-primary-50 light:text-primary-500">
                      <FiCheckCircle className="size-4" />
                      </span>
                    </span>
                    <p className="text-[15px] font-normal leading-[1.35] text-[#AAAEB2] light:text-neutral-600">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#pricing"
                className="flex h-[47px] w-full items-center justify-center rounded-[12px] bg-[#2466F2] px-5 py-3 text-[17px] font-medium leading-[1.35] text-white transition hover:bg-primary-400"
              >
                Enroll now
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
