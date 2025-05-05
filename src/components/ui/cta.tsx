import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Section container variants
const sectionVariants = cva("mb-28", {
  variants: {
    spacing: {
      default: "py-0",
      compact: "py-2",
      spacious: "py-10",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

// CTA container variants
const ctaVariants = cva(
  "p-5 flex flex-col space-y-6 lg:flex-row justify-between items-center lg:space-y-0 border-l-5 border-[#82EEA6] shadow-[29px_29px_60px_0px_rgba(0,0,0,0.2)]",
  {
    variants: {
      variant: {
        default: "bg-white",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
      size: {
        default: "py-20 mb-5",
        sm: "py-10 mb-3",
        lg: "py-24 mb-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Text container variants
const textContainerVariants = cva("space-y-10", {
  variants: {
    width: {
      default: "w-full lg:w-4/6",
      half: "w-full lg:w-1/2",
      full: "w-full",
    },
  },
  defaultVariants: {
    width: "default",
  },
});

// Button container variants
const buttonContainerVariants = cva("flex", {
  variants: {
    width: {
      default: "w-full lg:w-2/6",
      half: "w-full lg:w-1/2",
      auto: "w-auto",
    },
    align: {
      default: "justify-center lg:justify-end",
      center: "justify-center",
      end: "justify-end",
    },
  },
  defaultVariants: {
    width: "default",
    align: "default",
  },
});

// Button variants
const buttonVariants = cva(
  "font-bold rounded-full py-[21px] px-[55px] uppercase shadow-[19px_19px_40px_rgba(0,0,0,0.1)] cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#5BB286] text-white transition-color duration-300 hover:bg-[#2575fc]",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
      size: {
        default: "py-[21px] px-[55px]",
        sm: "py-4 px-10",
        lg: "py-6 px-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Props interfaces
interface CTASectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

interface CTAContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ctaVariants> {}

interface CTATextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textContainerVariants> {
  title: string;
  description?: string;
  highlight?: string;
}

interface CTAButtonContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonContainerVariants> {}

interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

// Root CTA section component
const CTASection = ({
  spacing,
  className,
  children,
  ...props
}: CTASectionProps) => {
  return (
    <section className={cn(sectionVariants({ spacing }), className)} {...props}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

// CTA container component
const CTAContainer = ({
  variant,
  size,
  className,
  children,
  ...props
}: CTAContainerProps) => {
  return (
    <div className={cn(ctaVariants({ variant, size }), className)} {...props}>
      {children}
    </div>
  );
};

// CTA text component
const CTAText = ({
  title,
  description,
  highlight,
  width,
  className,
  ...props
}: CTATextProps & { highlight?: string }) => {
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return <h3 className="font-medium text-3xl text-[#3a3a3a]">{title}</h3>;
    }

    const parts = title.split(highlight);
    return (
      <h3 className="font-semibold text-3xl text-[#3a3a3a]">
        {parts[0]}
        <span className="text-[#ffcc03]">{highlight}</span>
        {parts.slice(1).join(highlight)}
      </h3>
    );
  };

  return (
    <div className={cn(textContainerVariants({ width }), className)} {...props}>
      {renderTitle()}
      {description && <p>{description}</p>}
    </div>
  );
};

// CTA button container component
const CTAButtonContainer = ({
  width,
  align,
  className,
  children,
  ...props
}: CTAButtonContainerProps) => {
  return (
    <div
      className={cn(buttonContainerVariants({ width, align }), className)}
      {...props}
    >
      {children}
    </div>
  );
};

// CTA button component
const CTAButton = ({
  variant,
  size,
  className,
  href,
  children,
  ...props
}: CTAButtonProps) => {
  const buttonClass = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href}>
        <button className={buttonClass} {...props}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export { CTASection, CTAContainer, CTAText, CTAButtonContainer, CTAButton };
