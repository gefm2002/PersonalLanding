interface EnsoLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function EnsoLogo({ size = "md", className = "" }: EnsoLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8 border-2",
    md: "w-15 h-15 border-3",
    lg: "w-20 h-20 border-4"
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        border-primary 
        rounded-full 
        border-t-transparent 
        transform 
        -rotate-45 
        ${className}
      `}
      data-testid="enso-logo"
    />
  );
}
