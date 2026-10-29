"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const RootContext = React.createContext<
  React.InputHTMLAttributes<HTMLInputElement>
>({});

const Root = React.forwardRef<
  HTMLDivElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean;
  }
>(({ className, error, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        error &&
          "has-[input:focus]:border-destructive border-destructive",
        !error &&
          "has-[input:focus]:border-brand border-input",
        "flex  bg-input-background has-[input:focus]:bg-input-background-focus transition-all items-center border px-3 rounded-sm",
        className
      )}
    >
      <RootContext.Provider value={{ ...props }}>
        {children}
      </RootContext.Provider>
    </div>
  );
});
Root.displayName = "InputWithIconRoot";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const rootContext = React.useContext(RootContext);

  return (
    <input
      ref={ref}
      className={cn(
        "flex text-input-text h-10 w-full  bg-transparent py-3 text-sm outline-none placeholder:text-input-placeholder disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...rootContext}
      {...props}
    />
  );
});
Input.displayName = "InputWithIconInput";

interface AdornmentProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}
const Adornment = React.forwardRef<HTMLDivElement, AdornmentProps>(
  ({ className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        className={cn(
          "[&_svg]:h-5 [&_svg]:w-5 [&_svg]:shrink-0 flex items-center",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Adornment.displayName = "InputWithIconAdornment";

export { Root, Input, Adornment };
