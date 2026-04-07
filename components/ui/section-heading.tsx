interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-2xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 2xsmall:text-[32px] font-medium 2xsmall:leading-[37px] small:leading-[41px] medium:leading-[46px] tracking-[-0.045em] text-[#E0E3E5] small:text-[36px] medium:text-[40px] light:text-neutral-950">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-sm leading-6 text-white/55 light:text-neutral-600 small:text-base">
          {body}
        </p>
      ) : null}
    </div>
  );
}
