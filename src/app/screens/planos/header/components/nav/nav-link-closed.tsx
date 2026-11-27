import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavLinkClosed({
  label,
  href,
  isLast,
}: {
  label: string;
  href: string;
  isLast: boolean;
}) {
  return (
    <li className="text-nowrap snap-start first:pl-5 last:pr-5 last:rounded-full">
      <Link
        href={href}
        className={cn(
          "w-full h-full text-xs",
          isLast &&
            "p-[0.1875rem_0.4375rem] bg-white text-primary rounded-full font-bold"
        )}
      >
        {label}
      </Link>
    </li>
  );
}
