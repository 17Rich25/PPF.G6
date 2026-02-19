import React, { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, HTMLMotionProps } from "motion/react";

// Utility for merging tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 1. Wireframe Container (Box)
interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  dashed?: boolean;
  thick?: boolean;
}

export const WBox: React.FC<BoxProps> = ({
  children,
  className,
  dashed,
  thick,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-zinc-900 border-black dark:border-zinc-200 transition-all",
        dashed ? "border-dashed" : "border-solid",
        thick ? "border-2" : "border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// 2. Wireframe Image Placeholder
export const WImage: React.FC<{
  className?: string;
  label?: string;
  aspect?: string;
}> = ({ className, label = "IMAGE", aspect = "aspect-video" }) => {
  return (
    <div
      className={cn(
        "relative w-full bg-gray-50 border border-black overflow-hidden flex items-center justify-center group",
        aspect,
        className
      )}
    >
      {/* The "X" */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full text-gray-200 stroke-1"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" stroke="currentColor" />
          <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" stroke="currentColor" />
        </svg>
      </div>
      <span className="relative z-10 font-mono text-sm text-gray-400 bg-white/80 px-2 py-1 border border-gray-200">
        {label}
      </span>
    </div>
  );
};

// 3. Wireframe Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export const WButton: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 border-black",
    secondary: "bg-white text-black hover:bg-gray-100 border-black",
    ghost: "bg-transparent text-black hover:bg-gray-100 border-transparent",
  };

  return (
    <button
      className={cn(
        "px-6 py-2 font-mono text-sm font-medium border transition-colors active:translate-y-[1px]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 4. Wireframe Text Placeholder (Simulates skeleton loading or generic text)
export const WText: React.FC<{
  lines?: number;
  className?: string;
  width?: string;
}> = ({ lines = 3, className, width = "w-full" }) => {
  return (
    <div className={cn("space-y-2", className, width)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-3 bg-gray-200 rounded-sm",
            i === lines - 1 ? "w-2/3" : "w-full"
          )}
        />
      ))}
    </div>
  );
};

// 5. Section Wrapper
export const WSection: React.FC<{
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
}> = ({ children, id, className, title }) => {
  return (
    <section
      id={id}
      className={cn("py-20 px-6 md:px-12 border-b border-dashed border-gray-300 dark:border-zinc-800 relative bg-white dark:bg-black transition-colors duration-300", className)}
    >
      {title && (
        <div className="absolute top-4 left-0 w-full flex justify-center pointer-events-none opacity-20">
             <span className="font-mono text-9xl font-bold uppercase tracking-tighter text-gray-200 dark:text-zinc-800 select-none">
                {title}
             </span>
        </div>
      )}
      <div className="max-w-7xl mx-auto relative z-10">{children}</div>
    </section>
  );
};

// 6. Annotation (Sticky Note style)
export const Annotation: React.FC<{
  text: string;
  position?: string;
  rotate?: string;
}> = ({ text, position = "top-0 right-0", rotate = "rotate-3" }) => {
  return (
    <div
      className={cn(
        "hidden lg:flex absolute z-50 bg-yellow-100 border border-yellow-300 text-yellow-800 p-3 shadow-md max-w-[200px] font-handwriting text-xs leading-tight pointer-events-none",
        position,
        rotate
      )}
    >
      <span className="font-bold mr-1">NOTE:</span> {text}
    </div>
  );
};
