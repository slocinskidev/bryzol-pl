"use client";

import { cn } from "@workspace/ui/lib/utils";
import { type MotionProps, motion, useScroll } from "motion/react";
import React from "react";

interface ScrollProgressProps
	extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
	variant?: "default" | "brand";
}

export const ScrollProgress = React.forwardRef<
	HTMLDivElement,
	ScrollProgressProps
>(({ className, variant = "default", ...props }, ref) => {
	const { scrollYProgress } = useScroll();
	const gradientClass =
		variant === "brand"
			? "bg-gradient-to-r from-primary via-accent to-primary"
			: "bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]";

	return (
		<motion.div
			ref={ref}
			className={cn(
				"fixed inset-x-0 top-1 z-50 h-px origin-left",
				gradientClass,
				className,
			)}
			style={{
				scaleX: scrollYProgress,
			}}
			{...props}
		/>
	);
});

ScrollProgress.displayName = "ScrollProgress";
