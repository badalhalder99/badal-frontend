import Image from "next/image";

export function AboutSection() {
  const thumbnails = [
    {
      src: "/image/pexels-tima-miroshnichenko-4841703.png",
      alt: "Professional overwhelmed while working at a desk",
    },
    {
      src: "/image/pexels-a-darmel-7710219.png",
      alt: "Professional feeling distracted at a laptop",
    },
    {
      src: "/image/pexels-anthonyshkraba-production-8278849.png",
      alt: "Professional working at a laptop in an office",
    },
  ];

  return (
    <section className="bg-black px-4 py-[160px] text-white small:px-10 medium:py-[200px] light:bg-neutral-25 light:text-neutral-950">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 text-center">
        <p className="inline-flex h-9 w-[268px] items-center justify-center gap-2 rounded-[12px] bg-[#171B21] px-4 py-2 text-[15px] font-normal leading-[1.35] text-[#D0D5D9] shadow-[0_8px_40px_rgba(36,102,242,0.15)] light:bg-white light:text-neutral-700">
          <span className="size-2 rounded-full bg-[#2466F2] shadow-[0_2px_12px_rgba(36,102,242,0.5)]" />
          Are Distractions Holding You Back?
        </p>

        <h2 className="max-w-[348px] text-[28px] font-normal leading-[1.15] text-[#E0E3E5] small:max-w-[401px] medium:max-w-[545px] medium:text-[40px] large:max-w-[928px] large:text-[52px] light:text-neutral-950">
          If you struggle to focus, feel overwhelmed by end
          <span className="text-[#DFE2E54D] light:text-neutral-950">
            less tasks, or procrastinate instead of making progress, you’re not
            alone.
          </span>
        </h2>

        <div className="flex w-full max-w-[348px] items-center justify-center gap-2 small:max-w-[370px]">
          {thumbnails.map((thumbnail) => (
            <Image
              key={thumbnail.src}
              src={thumbnail.src}
              alt={thumbnail.alt}
              width={118}
              height={120}
              className="h-[112.54px] w-[110.67px] flex-1 rounded-[12px] object-cover small:h-[120px] small:w-[118px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
