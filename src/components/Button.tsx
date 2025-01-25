import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Button({ 
  size = "default", 
  children, 
  className = "", 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-violet-500 text-white hover:bg-violet-600";
  const sizeStyles = {
    default: "h-10 px-4 py-2",
    lg: "h-12 px-8 py-3 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}