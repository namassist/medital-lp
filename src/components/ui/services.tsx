import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Section container variants
const sectionVariants = cva("py-20", {
  variants: {
    size: {
      default: "py-20",
      compact: "py-12",
      spacious: "py-28",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

// Services grid variants
const servicesGridVariants = cva(
  "flex-col flex md:flex-row justify-start flex-wrap",
  {
    variants: {
      gap: {
        default: "gap-4",
        tight: "gap-2",
        wide: "gap-6",
      },
    },
    defaultVariants: {
      gap: "default",
    },
  }
);

// Service card variants
const serviceCardVariants = cva("p-3 pb-6", {
  variants: {
    layout: {
      default: "w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-11px)]",
      half: "w-full md:w-[calc(50%-8px)]",
      full: "w-full",
    },
  },
  defaultVariants: {
    layout: "default",
  },
});

// Service icon variants
const serviceIconVariants = cva("flex justify-center items-center", {
  variants: {
    shape: {
      circle: "rounded-full",
      square: "rounded-md",
    },
    size: {
      default: "p-5",
      small: "p-3",
      large: "p-6",
    },
  },
  defaultVariants: {
    shape: "circle",
    size: "default",
  },
});

// Types
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

// Props interfaces
interface ServicesSectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

interface ServicesGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof servicesGridVariants> {
  services: ServiceItem[];
}

interface ServiceCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof serviceCardVariants> {
  service: ServiceItem;
}

interface ServiceIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof serviceIconVariants> {
  color: string;
  icon: React.ReactNode;
}

const ServicesSection = ({
  size,
  className,
  children,
  ...props
}: ServicesSectionProps) => {
  return (
    <section className={cn(sectionVariants({ size }), className)} {...props}>
      <div className="container mx-auto space-y-20">{children}</div>
    </section>
  );
};

// Services grid component
const ServicesGrid = ({
  services,
  gap,
  className,
  children,
  ...props
}: ServicesGridProps) => {
  return (
    <div className={cn(servicesGridVariants({ gap }), className)} {...props}>
      {children ||
        services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
    </div>
  );
};

// Service card component
const ServiceCard = ({
  service,
  layout,
  className,
  ...props
}: ServiceCardProps) => {
  return (
    <div
      className={cn(serviceCardVariants({ layout }), className)}
      key={service.id}
      {...props}
    >
      <div className="flex gap-4 items-start">
        <ServiceIcon color={service.color} icon={service.icon} />
        <div>
          <h6
            className="text-xl font-semibold tracking-wide mb-1"
            style={{ color: service.color }}
          >
            {service.title}
          </h6>
          <p className="text-[#656565] text-[15px]">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

const ServiceIcon = ({
  color,
  icon,
  shape,
  size,
  className,
  ...props
}: ServiceIconProps) => {
  return (
    <div
      className={cn(serviceIconVariants({ shape, size }), className)}
      style={{ backgroundColor: color }}
      {...props}
    >
      {icon}
    </div>
  );
};

export { ServicesSection, ServicesGrid, ServiceCard, ServiceIcon };
