import * as React from "react"

import { cn } from "@/lib/utils"

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex  w-full rounded-[10px] border text-muted-foreground border-[#f2f4f7] dark:border-input bg-transparent  px-3 py-3 text-sm  transition-colors   placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container }