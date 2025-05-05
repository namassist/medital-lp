import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

// Hero container variants
const heroVariants = cva("relative flex items-center bg-no-repeat bg-cover", {
  variants: {
    size: {
      default: "h-[calc(90vh)]",
      sm: "h-[50vh]",
      lg: "h-screen",
    },
    position: {
      default: "bg-center",
      left: "bg-left",
      right: "bg-right",
      centerLeft: "bg-[center_left_5rem]",
    },
    overlay: {
      none: "",
      light:
        "before:content-[''] before:absolute before:inset-0 before:bg-white/50",
      dark: "before:content-[''] before:absolute before:inset-0 before:bg-black/50",
      primary:
        "before:content-[''] before:absolute before:inset-0 before:bg-[#15063F]/50",
    },
  },
  defaultVariants: {
    size: "default",
    position: "default",
    overlay: "none",
  },
});

// Hero content container variants
const heroContentVariants = cva("container mx-auto relative z-10", {
  variants: {
    align: {
      left: "flex justify-start",
      center: "flex justify-center text-center",
      right: "flex justify-end text-right",
    },
  },
  defaultVariants: {
    align: "left",
  },
});

// Base Hero component props
interface HeroProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof heroVariants> {
  backgroundImage: string;
}

// Content container props
interface HeroContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroContentVariants> {
  width?: "sm" | "md" | "lg" | "xl" | "full";
}

// Title variants
const heroTitleVariants = cva("mb-2 leading-none", {
  variants: {
    size: {
      xs: "text-2xl",
      sm: "text-3xl",
      default: "text-4xl",
      lg: "text-5xl",
      xl: "text-6xl",
      "2xl": "text-7xl",
    },
    variant: {
      default: "text-[#15063F]",
      white: "text-white",
      primary: "text-[#5BB286]",
      gray: "text-[#898989]",
      black: "text-black",
      secondary: "text-[#15063F]",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
    weight: "semibold",
  },
});

// Subtitle variants
const heroSubtitleVariants = cva("mb-2 leading-none", {
  variants: {
    variant: {
      default: "text-2xl text-[#898989]",
      light: "text-2xl text-white/90",
      primary: "text-2xl text-[#5BB286]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Description variants
const heroDescriptionVariants = cva("mb-8", {
  variants: {
    variant: {
      default: "text-sm text-[#7A7A7A]",
      light: "text-sm text-white/80",
      primary: "text-sm text-[#5BB286]/90",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Button variants
const heroButtonVariants = cva(
  "font-semibold rounded-lg px-12 py-4 capitalize",
  {
    variants: {
      variant: {
        default: "bg-[#5BB286] border border-[#5BB286] text-white text-[18px]",
        secondary:
          "bg-[#15063F] border border-[#15063F] text-white text-[18px]",
        outline:
          "bg-transparent border border-[#5BB286] text-[#5BB286] text-[18px]",
        outlineLight:
          "bg-transparent border border-white text-white text-[18px]",
      },
      size: {
        default: "px-[60px] py-[16px]",
        sm: "px-8 py-3 text-[16px]",
        lg: "px-16 py-5 text-[20px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Props interfaces for subcomponents
interface HeroTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heroTitleVariants> {}

interface HeroSubtitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heroSubtitleVariants> {}

interface HeroDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof heroDescriptionVariants> {}

interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroButtonVariants> {}

// Root Hero component
const Hero = ({
  backgroundImage,
  size,
  position,
  overlay,
  className,
  children,
  ...props
}: HeroProps) => {
  return (
    <section
      className={cn(heroVariants({ size, position, overlay }), className)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      {...props}
    >
      {children}
    </section>
  );
};

// Content container component
const HeroContent = ({
  align,
  width = "md",
  className,
  children,
  ...props
}: HeroContentProps) => {
  // Width class mapping
  const widthClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "w-full",
  };

  return (
    <div className={cn(heroContentVariants({ align }), className)} {...props}>
      <div className={cn(widthClass[width])}>{children}</div>
    </div>
  );
};

// Title component
const HeroTitle = ({
  size,
  variant,
  weight,
  className,
  children,
  ...props
}: HeroTitleProps) => {
  return (
    <h1
      className={cn(heroTitleVariants({ size, variant, weight }), className)}
      {...props}
    >
      {children}
    </h1>
  );
};

// Subtitle component
const HeroSubtitle = ({
  variant,
  className,
  children,
  ...props
}: HeroSubtitleProps) => {
  return (
    <h4 className={cn(heroSubtitleVariants({ variant }), className)} {...props}>
      {children}
    </h4>
  );
};

// Description component
const HeroDescription = ({
  variant,
  className,
  children,
  ...props
}: HeroDescriptionProps) => {
  return (
    <p
      className={cn(heroDescriptionVariants({ variant }), className)}
      {...props}
    >
      {children}
    </p>
  );
};

// Button component
const HeroButton = ({
  variant,
  size,
  className,
  children,
  ...props
}: HeroButtonProps) => {
  return (
    <button
      className={cn(heroButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

// Export the composite component
export {
  Hero,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButton,
};
