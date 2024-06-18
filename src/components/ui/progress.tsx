import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

type ProgressProps = Omit<
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
  "value"
> & { min?: number; max?: number; value: number | number[] };

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, min = 0, max = 100, ...props }, ref) => {
  const normalizedValue = Array.isArray(value) ? value : [min, value];
  const [valueA, valueB] = normalizedValue;

  const minValue = Math.min(valueA, valueB);
  const maxValue = Math.max(valueA, valueB);

  const progressValue = ((maxValue - minValue) / (max - min)) * 100;
  const progressOffset = ((minValue - min) / (max - min)) * 100;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn({
          "h-full flex-1 rounded-full bg-primary transition-all": true,
          "mx-auto": true,
        })}
        style={{
          marginLeft: `${progressOffset}%`,
          width: `${progressValue}%`,
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
