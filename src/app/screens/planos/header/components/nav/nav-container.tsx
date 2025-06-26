import { cn } from "@/lib/utils";

export default function NavContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <nav
      style={{
        scrollbarWidth: "none",
      }}
      className={cn("bg-primary text-primary-foreground", className)}
    >
      {children}
    </nav>
  );
}
