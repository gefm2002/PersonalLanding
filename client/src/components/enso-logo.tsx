import ensoImage from "@assets/enso_1756691036417.png";

interface EnsoLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function EnsoLogo({ size = "md", className = "" }: EnsoLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-15 h-15",
    lg: "w-20 h-20"
  };

  return (
    <img 
      src={ensoImage}
      alt="Enso Logo"
      className={`${sizeClasses[size]} object-contain ${className}`}
      data-testid="enso-logo"
    />
  );
}
