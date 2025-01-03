import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={cn(
        `peer h-5 w-5 shrink-0 rounded-sm border border-gray-600 
        ring-offset-background focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-blue-500 focus-visible:ring-offset-2 
        disabled:cursor-not-allowed disabled:opacity-50 
        data-[state=checked]:bg-blue-800 
        data-[state=checked]:border-blue-950 
        data-[state=checked]:text-white`,
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4 text-white" /> {/* White tick */}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };