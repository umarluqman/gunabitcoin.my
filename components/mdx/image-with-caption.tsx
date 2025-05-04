import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
}

export function ImageWithCaption({
  src,
  alt,
  caption,
  width,
  height,
  className,
  imageClassName,
  captionClassName,
}: ImageWithCaptionProps) {
  return (
    <figure className={cn("my-4", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("rounded-md object-contain mx-auto", imageClassName)}
      />
      <figcaption
        className={cn(
          "mt-2 text-sm text-center text-muted-foreground",
          captionClassName
        )}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
