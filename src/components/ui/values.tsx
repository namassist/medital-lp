// import Image from "next/image";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

// Section container variants
const valuesSectionVariants = cva("w-full", {
  variants: {
    padding: {
      default: "pt-20 pb-10",
      sm: "pt-10 pb-5",
      lg: "pt-32 pb-16",
      none: "",
    },
    background: {
      default: "bg-white",
      light: "bg-gray-50",
      dark: "bg-gray-900",
    },
  },
  defaultVariants: {
    padding: "default",
    background: "default",
  },
});

// Container variants
const valuesContainerVariants = cva("container mx-auto", {
  variants: {
    spacing: {
      default: "space-y-10",
      sm: "space-y-6",
      lg: "space-y-16",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

// Header section variants
const valuesHeaderVariants = cva("", {
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

// Title variants
const valuesTitleVariants = cva("mb-4", {
  variants: {
    size: {
      sm: "text-2xl",
      default: "text-[28px]",
      lg: "text-3xl",
      xl: "text-4xl",
    },
    variant: {
      default: "text-[#3a3a3a]",
      primary: "text-[#2575fc]",
      white: "text-white",
      dark: "text-gray-900",
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
    variant: "default",
    weight: "medium",
  },
});

// Description variants
const valuesDescriptionVariants = cva("", {
  variants: {
    variant: {
      default: "text-[#4b4f58]",
      light: "text-gray-400",
      primary: "text-[#2575fc]",
    },
    size: {
      sm: "text-sm",
      default: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

// Divider variants
const valuesDividerVariants = cva("flex items-center gap-2 mb-2", {
  variants: {
    align: {
      center: "justify-center",
      left: "justify-start",
      right: "justify-end",
    },
    color: {
      default: "[&>span]:bg-[#2575fc]",
      primary: "[&>span]:bg-[#2575fc]",
      secondary: "[&>span]:bg-[#3a3a3a]",
      white: "[&>span]:bg-white",
    },
  },
  defaultVariants: {
    align: "center",
    color: "default",
  },
});

// Values grid variants
const valuesGridVariants = cva("flex flex-col md:flex-row gap-[16px]", {
  variants: {
    layout: {
      default: "justify-around",
      start: "justify-start",
      center: "justify-center",
      evenly: "justify-evenly",
      between: "justify-between",
    },
    columns: {
      "2": "md:[&>*]:w-[calc(50%-8px)]",
      "3": "md:[&>*]:w-4/12",
      "4": "md:[&>*]:w-3/12",
    },
  },
  defaultVariants: {
    layout: "default",
    columns: "3",
  },
});

// Value item variants
const valueItemVariants = cva("w-full border rounded-sm", {
  variants: {
    padding: {
      default: "py-[60px] px-[20px]",
      sm: "py-8 px-4",
      lg: "py-20 px-8",
    },
    variant: {
      default: "border-[#f5f5f5] bg-white",
      bordered: "border-[#2575fc] bg-white",
      filled: "border-transparent bg-[#f5f5f5]",
      primary: "border-transparent bg-[#2575fc] text-white",
    },
    hover: {
      none: "",
      scale: "transition-transform hover:scale-105",
      shadow: "transition-shadow hover:shadow-lg",
      border: "transition-colors hover:border-[#2575fc]",
    },
  },
  defaultVariants: {
    padding: "default",
    variant: "default",
    hover: "none",
  },
});

// Value item title variants
const valueItemTitleVariants = cva("", {
  variants: {
    size: {
      sm: "text-base",
      default: "text-lg",
      lg: "text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    variant: {
      default: "text-[#3a3a3a]",
      primary: "text-[#2575fc]",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "default",
    weight: "bold",
    variant: "default",
  },
});

// Value item description variants
const valueItemDescriptionVariants = cva("text-center text-[15px]", {
  variants: {
    variant: {
      default: "text-[#656565]",
      primary: "text-[#2575fc]",
      white: "text-white",
      dark: "text-gray-800",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Interface definitions
interface ValueItemProps {
  id: number | string;
  title: string;
  description: string;
  icon?: string;
}

interface ValuesSectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof valuesSectionVariants> {}

interface ValuesContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof valuesContainerVariants> {}

interface ValuesHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof valuesHeaderVariants> {}

interface ValuesTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof valuesTitleVariants> {}

interface ValuesDividerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof valuesDividerVariants> {}

interface ValuesDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof valuesDescriptionVariants> {}

interface ValuesGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof valuesGridVariants> {}

interface ValueItemComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof valueItemVariants> {
  item: ValueItemProps;
  iconSize?: number;
}

// Component implementations
const ValuesSection = ({
  padding,
  background,
  className,
  children,
  ...props
}: ValuesSectionProps) => {
  return (
    <section
      className={cn(valuesSectionVariants({ padding, background }), className)}
      {...props}
    >
      {children}
    </section>
  );
};

const ValuesContainer = ({
  spacing,
  className,
  children,
  ...props
}: ValuesContainerProps) => {
  return (
    <div
      className={cn(valuesContainerVariants({ spacing }), className)}
      {...props}
    >
      {children}
    </div>
  );
};

const ValuesHeader = ({
  align,
  className,
  children,
  ...props
}: ValuesHeaderProps) => {
  return (
    <div className={cn(valuesHeaderVariants({ align }), className)} {...props}>
      {children}
    </div>
  );
};

const ValuesTitle = ({
  size,
  variant,
  weight,
  className,
  children,
  ...props
}: ValuesTitleProps) => {
  return (
    <h2
      className={cn(valuesTitleVariants({ size, variant, weight }), className)}
      {...props}
    >
      {children}
    </h2>
  );
};

const ValuesDivider = ({
  align,
  color,
  className,
  ...props
}: ValuesDividerProps) => {
  return (
    <div
      className={cn(valuesDividerVariants({ align, color }), className)}
      {...props}
    >
      <span className="w-1 h-1 rounded-full"></span>
      <span className="w-1 h-1 rounded-full"></span>
      <span className="w-1 h-1 rounded-full"></span>
      <span className="w-10 h-1 rounded-xl"></span>
    </div>
  );
};

const ValuesDescription = ({
  variant,
  size,
  className,
  children,
  ...props
}: ValuesDescriptionProps) => {
  return (
    <p
      className={cn(valuesDescriptionVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </p>
  );
};

const ValuesGrid = ({
  layout,
  columns,
  className,
  children,
  ...props
}: ValuesGridProps) => {
  return (
    <div
      className={cn(valuesGridVariants({ layout, columns }), className)}
      {...props}
    >
      {children}
    </div>
  );
};

const ValueItem = ({
  item,
  padding,
  variant,
  hover,
  className,
  ...props
}: ValueItemComponentProps) => {
  return (
    <div
      className={cn(valueItemVariants({ padding, variant, hover }), className)}
      key={item.id}
      {...props}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src="/info-box-icon-21.png"
          alt={item.title}
          className="w-auto h-auto max-w-full max-h-full mb-6"
        />
        {/* <Image
          src="/info-box-icon-21.png"
          alt={item.title}
          width={iconSize}
          height={iconSize}
          className="mb-6"
        /> */}
        <h6 className={cn(valueItemTitleVariants())}>{item.title}</h6>
        <p className={cn(valueItemDescriptionVariants())}>{item.description}</p>
      </div>
    </div>
  );
};

export {
  ValuesSection,
  ValuesContainer,
  ValuesHeader,
  ValuesTitle,
  ValuesDivider,
  ValuesDescription,
  ValuesGrid,
  ValueItem,
  type ValueItemProps,
};
