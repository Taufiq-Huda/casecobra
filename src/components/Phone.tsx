import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface phoneProps extends HTMLAttributes<HTMLElement> {
  imgSrc: string;
  dark?: boolean;
}
function Phone({ imgSrc, className, dark = false, ...props }: phoneProps) {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt="Phone Image"
      />

      <div className="absolute -z-10 inset-0">
        <img src={imgSrc} alt="overlaying phone image" className="object-cover" />
      </div>
    </div>
  );
}

export default Phone;
