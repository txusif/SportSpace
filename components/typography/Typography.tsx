import { cn } from "@/lib/utils";

// Extracted props type for reuse
type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 md:text-4xl lg:text-6xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}

export function TypographyMutedBold({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-sm font-medium text-muted-foreground flex items-center gap-1",
        className
      )}
    >
      {children}
    </p>
  );
}
