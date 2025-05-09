"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // shadcn/ui import
import { motion } from "framer-motion";

export type FilterOption = {
  label: string;
  value: string;
};

interface FilterProps {
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
}

export default function Filter({ value, onChange, options }: FilterProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="flex mx-auto gap-3"
      aria-label="Filter"
    >
      {options.map((option) => (
        <motion.div
          key={option.value}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors cursor-pointer
            ${value === option.value ? "bg-blue-50" : "hover:bg-gray-50"}
          `}
          onClick={() => onChange(option.value)}
        >
          <RadioGroupItem className="cursor-pointer" value={option.value} id={option.value} />
          <label className="cursor-pointer text-sm font-light" htmlFor={option.value}>{option.label}</label>
        </motion.div>
      ))}
    </RadioGroup>
  );
}
