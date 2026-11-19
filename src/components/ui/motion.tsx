import * as React from "react";
import { cn } from "@/lib/utils";

export const FadeIn = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <div
    className={cn("animate-fadeInUp motion-reduce:animate-none", className)}
    style={delay ? { animationDelay: `${delay}s` } : undefined}
  >
    {children}
  </div>
);

export const StaggerContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

export const StaggerItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("animate-fadeInUp motion-reduce:animate-none", className)}>
    {children}
  </div>
);
