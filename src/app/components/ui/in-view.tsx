"use client";

import useIsOnScreen from "@/hooks/use-is-on-screen";
import { cn } from "@/lib/utils";
import { HTMLAttributes, useRef } from "react";

export default function InView({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const isOnScreen = useIsOnScreen(ref);
  return (
    <div
      data-isonscreen={isOnScreen}
      className={cn(
        "data-[isonscreen=true]:opacity-0 data-[isonscreen=true]:animate-pix-fade-up data-[isonscreen=false]:animate-none,",
        className
      )}
      ref={ref}
      {...props}
    />
  );
}
