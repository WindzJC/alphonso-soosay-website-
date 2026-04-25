import Image from "next/image";

import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  caption?: string;
  aspect?: "portrait" | "landscape" | "square";
  className?: string;
  frameClassName?: string;
  captionClassName?: string;
  src?: string;
  alt?: string;
};

export function PlaceholderImage({
  label,
  caption,
  aspect = "portrait",
  className,
  frameClassName,
  captionClassName,
  src,
  alt,
}: PlaceholderImageProps) {
  const isTokenImage = Boolean(src && src.startsWith("[") && src.endsWith("]"));
  const canRenderImage = Boolean(
    src &&
      !isTokenImage &&
      (src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://")),
  );
  const imageSrc = src ?? "";
  const placeholderText = isTokenImage ? imageSrc : "";

  if (canRenderImage) {
    return (
      <div className={cn("space-y-3", className)}>
        <div
          className={cn(
            "overflow-hidden rounded-[2rem] bg-transparent shadow-[0_24px_80px_rgba(0,0,0,0.28)]",
            aspect === "portrait" && "aspect-[4/5]",
            aspect === "landscape" && "aspect-[16/10]",
            aspect === "square" && "aspect-square",
            frameClassName,
          )}
        >
          <div className="relative h-full w-full">
            <Image src={imageSrc} alt={alt ?? label} fill className="object-contain object-center" />
          </div>
        </div>
        {caption ? (
          <p className={cn("text-sm leading-7 text-[var(--text-soft)]", captionClassName)}>{caption}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(145deg,rgba(19,19,20,0.98),rgba(37,36,34,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.34)]",
        aspect === "portrait" && "aspect-[4/5]",
        aspect === "landscape" && "aspect-[16/10]",
        aspect === "square" && "aspect-square",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,149,77,0.18),transparent_34%),radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.05),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
      <div className="relative flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-white/8 bg-black/20 p-6 text-center">
        {placeholderText ? (
          <p className="font-display text-2xl leading-tight text-[var(--text)] sm:text-3xl">
            {placeholderText}
          </p>
        ) : null}
        {caption ? <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-soft)]">{caption}</p> : null}
      </div>
    </div>
  );
}
