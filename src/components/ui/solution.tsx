import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Section container variants
const sectionVariants = cva("py-20", {
  variants: {
    size: {
      default: "pt-20 pb-10",
      compact: "pt-10 pb-5",
      spacious: "pt-24 pb-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

// solution grid variants
const solutionsGridVariants = cva("flex-col flex md:flex-row justify-around", {
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
});

// Solution card variants
const solutionCardVariants = cva("p-3 pb-6", {
  variants: {
    layout: {
      default: "w-full lg:w-4/12 py-[60px] px-[20px]",
      half: "w-full md:w-[calc(50%-16px)]",
      full: "w-full",
    },
  },
  defaultVariants: {
    layout: "default",
  },
});

// Types
interface SolutionItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Props interfaces
interface SolutionsSectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

interface SolutionsGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof solutionsGridVariants> {
  solutions: SolutionItem[];
}

interface SolutionCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof solutionCardVariants> {
  solution: SolutionItem;
}

const SolutionsSection = ({
  size,
  className,
  children,
  ...props
}: SolutionsSectionProps) => {
  return (
    <section className={cn(sectionVariants({ size }), className)} {...props}>
      <div className="container mx-auto space-y-10">{children}</div>
    </section>
  );
};

const SolutionsGrid = ({
  solutions,
  gap,
  className,
  children,
  ...props
}: SolutionsGridProps) => {
  return (
    <div className={cn(solutionsGridVariants({ gap }), className)} {...props}>
      {children ||
        solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
    </div>
  );
};

const SolutionCard = ({
  solution,
  layout,
  className,
  ...props
}: SolutionCardProps) => {
  return (
    <div
      className={cn(solutionCardVariants({ layout }), className)}
      key={solution.id}
      {...props}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src={solution.image}
          alt="Medital"
          width={500}
          height={500}
          className="mb-10 transition-transform duration-300 hover:scale-110"
        />
        <h6 className="text-lg font-bold mb-4 capitalize">{solution.name}</h6>
        <p className="text-center text-[#656565] text-[15px]">
          {solution.description}
        </p>
      </div>
    </div>
  );
};

export { SolutionsSection, SolutionsGrid, SolutionCard };
