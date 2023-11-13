import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/90 text-center",
        success: "bg-success text-white hover:bg-success/90",
        secondary: "bg-secondary text-white hover:bg-secondary/90",
        danger: "bg-danger text-white hover:bg-danger/90",
        warning: "bg-warning text-white hover:bg-warning/90",
        "primary-outline":
          "bg-white text-primary border border-primary hover:bg-primary/90 hover:text-white",
        "success-outline":
          "bg-white text-success border border-success hover:bg-success/90 hover:text-white",
        "secondary-outline":
          "bg-white text-secondary border border-secondary hover:bg-secondary/90 hover:text-white",
        "warning-outline":
          "bg-white text-warning border border-warning hover:bg-warning/90 hover:text-white",
        "danger-outline":
          "bg-white text-danger border border-danger hover:bg-danger/90 hover:text-white",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 rounded-md px-4",
        lg: "h-14 rounded-md px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
