import Image from "next/image";
import { FiPlay } from "react-icons/fi";

interface VideoCardProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export function VideoCard({
  src,
  alt,
  priority = false,
  className = "",
}: VideoCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-neutral-900 shadow-card light:border-neutral-200 light:bg-white light:shadow-[0_18px_60px_rgba(15,23,42,0.10)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1064}
        height={599}
        priority={priority}
        className="aspect-[1064/599] h-auto max-h-[599px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]" />
      <button
        type="button"
        aria-label="Play course preview"
        className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-white/30 bg-white p-4 text-primary-500 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-[20px] transition group-hover:scale-105 group-hover:text-primary-400 small:size-[88px] small:p-6"
      >
        <FiPlay className="ml-1 size-8 fill-current small:size-10" />
      </button>
    </div>
  );
}
