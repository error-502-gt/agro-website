"use client";

import {
  Wheat,
  Sprout,
  Salad,
  TreePalm,
  Apple,
} from "lucide-react";
import type { ComponentType } from "react";
import type { Crop } from "../data/products";

/**
 * Custom coffee-bean glyph — Lucide ships a "Coffee" cup but no bean.
 * An ellipse rotated –20° with a curved central seam: the universally
 * recognised coffee bean silhouette.
 */
export function CoffeeBean({
  className,
  strokeWidth = 1.5,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="12" cy="12" rx="6" ry="9" transform="rotate(-20 12 12)" />
      <path
        d="M12 4 C 9 9 9 15 12 20"
        transform="rotate(-20 12 12)"
      />
    </svg>
  );
}

/** Loose component type that accommodates both Lucide icons and our custom SVG. */
export type CropIconComponent = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

/** One source of truth for the icon used to represent each crop across the UI. */
export const cropIcon: Record<Crop, CropIconComponent> = {
  maiz: Wheat as CropIconComponent,
  cafe: CoffeeBean,
  frijol: Sprout as CropIconComponent,
  hortalizas: Salad as CropIconComponent,
  cana: TreePalm as CropIconComponent,
  aguacate: Apple as CropIconComponent,
};
