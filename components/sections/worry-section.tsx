import Image from "next/image";

export function WorrySection() {
  const avatars = [
    "/image/pexels-yankrukov-7793987.png",
    "/image/pexels-anthonyshkraba-production-8278849.png",
    "/image/pexels-mizunokozuki-12903131.png",
  ];

  const stackImages = [
    {
      src: "/image/pexels-mizunokozuki-12903252.png",
      alt: "Professional focused on laptop work",
    },
    {
      src: "/image/pexels-annushka-ahuja-8055837.png",
      alt: "Professional thinking at a desk",
    },
    {
      src: "/image/jozsef-hocza-hhASRAL_1io-unsplash 1.png",
      alt: "Professional working at a laptop",
    },
  ];

  return (
    <section className="bg-black px-4 py-0 text-white small:px-5 medium:px-7 large:px-10 light:bg-neutral-25 light:text-neutral-950">
      <div className="mx-auto flex w-full max-w-[380px] items-center gap-4 small:max-w-[481px] medium:max-w-[625px] large:max-w-[1280px] min-[981px]:max-w-[901px] 2xlarge:max-w-[1280px]">
        <div className="relative hidden h-[642px] max-w-[526px] flex-1 overflow-hidden rounded-[24px] large:block">
          <Image
            src="/image/pexels-mizunokozuki-12903252.png"
            alt="Professional training focus while working on a laptop"
            width={526}
            height={642}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-h-[617.69px] flex-1 flex-col items-start gap-20 rounded-[24px] bg-[#111214] px-8 py-10 small:min-h-[605px] small:p-10 large:min-h-[642px] large:min-w-[520px] large:justify-between large:gap-[118px] light:bg-white light:shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="flex w-full flex-col items-start gap-6 small:flex-row small:justify-between">
            <p className="gradient-badge inline-flex h-9 items-center justify-center gap-2 rounded-[12px] px-4 py-2 text-center text-[15px] font-normal leading-[1.35] text-[#D0D5D9] shadow-[0_8px_40px_rgba(36,102,242,0.15)] [--badge-bg:#171B21] light:[--badge-bg:#EAF2FF] light:text-neutral-700">
              <span className="size-2 rounded-full bg-[#2466F2] shadow-[0_2px_12px_rgba(36,102,242,0.5)]" />
              No worries
            </p>

            <div className="flex flex-col items-start gap-[9px] small:items-end">
              <div className="flex w-[104px] items-center">
                {avatars.map((avatar) => (
                  <Image
                    key={avatar}
                    src={avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="-mr-2 size-10 rounded-full border-2 border-[#111214] object-cover last:mr-0 light:border-white"
                  />
                ))}
              </div>
              <p className="text-[15px] font-normal leading-[1.35] text-[#D0D5D9] light:text-neutral-700">
                Join with 5K other students
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-center gap-10 small:flex-row small:items-center">
            <div className="flex flex-col items-start gap-[34px] small:min-h-[376px] small:flex-1 small:justify-end small:pb-[60px]">
              <div className="max-w-[200px]">
                <p className="text-[17px] font-normal leading-[1.35] text-[#AAAEB2] light:text-neutral-600">
                  The ability to concentrate deeply is the ultimate
                  productivity hack
                </p>
              </div>
              <div className="max-w-[240px]">
                <h2 className="text-[24px] font-medium leading-[1.15] text-[#D0D5D9] small:text-[28px] light:text-neutral-950">
                  And fortunately it&apos;s a skill you can train &amp; develop.
                </h2>
              </div>
            </div>

            <div className="flex w-full items-center gap-2 small:w-[118px] small:flex-col">
              {stackImages.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={118}
                  height={120}
                  className="h-[101.69px] min-w-0 flex-1 rounded-[12px] object-cover small:h-[120px] small:w-[118px] small:flex-none"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
