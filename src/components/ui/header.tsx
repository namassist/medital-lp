import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Header container variants
const headerVariants = cva("", {
  variants: {
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
  },
  defaultVariants: {
    align: "center",
  },
});

const titleVariants = cva("mb-4", {
  variants: {
    size: {
      small: "text-xl",
      default: "text-2xl",
      large: "text-3xl",
      xl: "text-4xl",
    },
    color: {
      default: "text-[#3a3a3a]",
      primary: "text-[#2575fc]",
      secondary: "text-[#5BB286]",
      dark: "text-[#15063F]",
      light: "text-[#898989]",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "default",
    color: "default",
    weight: "normal",
  },
});

const descriptionVariants = cva("", {
  variants: {
    size: {
      small: "text-sm",
      default: "text-base",
      large: "text-lg",
    },
    color: {
      default: "text-[#4b4f58]",
      primary: "text-[#2575fc]",
      secondary: "text-[#5BB286]",
      light: "text-[#898989]",
      dark: "text-[#15063F]",
    },
  },
  defaultVariants: {
    size: "default",
    color: "default",
  },
});

const dividerVariants = cva("flex items-center gap-2 mb-2", {
  variants: {
    align: {
      center: "justify-center",
      left: "justify-start",
      right: "justify-end",
    },
    style: {
      default: "",
      thick: "",
      thin: "",
    },
  },
  defaultVariants: {
    align: "center",
    style: "default",
  },
});

// Props interfaces
interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerVariants> {}

const Header = ({ align, className, children, ...props }: HeaderProps) => {
  return (
    <div className={cn(headerVariants({ align }), className)} {...props}>
      {children}
    </div>
  );
};

// 🧩 Title
const HeaderTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants>) => {
  return <h2 className={cn(titleVariants(props), className)}>{children}</h2>;
};

// 🧩 Description
const HeaderDescription = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof descriptionVariants>) => {
  return (
    <p className={cn(descriptionVariants(props), className)}>{children}</p>
  );
};

// 🧩 Divider
const HeaderDivider = ({
  dotCount = 3,
  color = "#2575fc",
  align,
  style,
  className,
  ...props
}: {
  dotCount?: number;
  color?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dividerVariants>) => {
  const dots = [];

  for (let i = 0; i < dotCount; i++) {
    dots.push(
      <span
        key={`dot-${i}`}
        className="w-1 h-1 rounded-full"
        style={{ backgroundColor: color }}
      />
    );
  }

  dots.push(
    <span
      key="bar"
      className="w-10 h-1 rounded-xl"
      style={{ backgroundColor: color }}
    />
  );

  return (
    <div
      className={cn(dividerVariants({ align, style }), className)}
      {...props}
    >
      {dots}
    </div>
  );
};

export { Header, HeaderTitle, HeaderDescription, HeaderDivider };
