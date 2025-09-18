"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

type FallbackImageProps = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc: string;
};

export default function FallbackImage({ src, fallbackSrc, alt, ...rest }: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}









