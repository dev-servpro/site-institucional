"use client";

import { CardTitle } from "../../../components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";

export default function PlanosCardTitle({ title }: { title: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <CardTitle
            id={`${title}-id`}
            className="text-xl uppercase font-bold max-w-full text-center py-0 text-primary-darker text-nowrap text-ellipsis overflow-hidden"
          >
            {title}
          </CardTitle>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-white font-semibold">{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
