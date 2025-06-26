"use client";

import { Button } from "@/app/components/ui/button";
import { AlignJustify } from "lucide-react";
import { HeaderContext } from "../../header-context";
import { useContext } from "react";

export default function NavButton() {
  const { toggleMobileMenu } = useContext(HeaderContext);
  return (
    <Button
      onClick={() => {
        toggleMobileMenu();
      }}
      className="!p-0.5 hidden"
      size="icon"
      variant={"ghost"}
    >
      <AlignJustify className="!h-6 !w-6" />
    </Button>
  );
}
