"use client";

import { Wheat, Sprout, Salad } from "lucide-react";
import type { ComponentType } from "react";
import type { Crop } from "../data/products";

type GlyphProps = {
  className?: string;
  strokeWidth?: number;
};

/**
 * Custom coffee-bean glyph — Lucide ships a "Coffee" cup but no bean.
 * An ellipse rotated –20° with a curved central seam: the universally
 * recognised coffee bean silhouette.
 */
export function CoffeeBean({ className, strokeWidth = 1.5 }: GlyphProps) {
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
      <path d="M12 4 C 9 9 9 15 12 20" transform="rotate(-20 12 12)" />
    </svg>
  );
}

/**
 * Custom sugar-cane glyph. Lucide's TreePalm reads as a palm tree, not
 * a cane. This one shows a tall stalk with three segment rings and a
 * fan of leaves splaying from the top — classic sugar-cane silhouette.
 */
export function SugarCane({ className, strokeWidth = 1.5 }: GlyphProps) {
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
      {/* Stalk */}
      <path d="M12 22 L12 7" />
      {/* Three segment rings */}
      <path d="M9 17.5 L15 17.5" />
      <path d="M9 13 L15 13" />
      <path d="M9 8.5 L15 8.5" />
      {/* Fan of leaves splaying from the top */}
      <path d="M12 7 C 8 5 5 5 3 8" />
      <path d="M12 7 C 16 5 19 5 21 8" />
      <path d="M12 7 C 10 4 9 2 8 1.5" />
      <path d="M12 7 C 14 4 15 2 16 1.5" />
      <path d="M12 7 L12 2" />
    </svg>
  );
}

/**
 * Custom avocado glyph (cross-section). Pear-shaped flesh with the
 * characteristic round pit — Lucide's Apple reads as an apple, not a
 * Hass. Narrow neck up top, bulbous bottom, central pit, tiny stem.
 */
export function Avocado({ className, strokeWidth = 1.5 }: GlyphProps) {
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
      {/* Pear-shaped body: narrow up top, wider down below */}
      <path d="M12 3.5 C 13.5 3.5 14 5 14 6.5 C 14 8 16.5 9 16.5 13 C 16.5 17 14.5 20.5 12 20.5 C 9.5 20.5 7.5 17 7.5 13 C 7.5 9 10 8 10 6.5 C 10 5 10.5 3.5 12 3.5 Z" />
      {/* Pit */}
      <circle cx="12" cy="14" r="3" />
      {/* Tiny stem */}
      <path d="M12 3.5 L12 2" />
    </svg>
  );
}

/** Loose component type that accommodates both Lucide icons and our custom SVG. */
export type CropIconComponent = ComponentType<GlyphProps>;

/** One source of truth for the icon used to represent each crop across the UI. */
export const cropIcon: Record<Crop, CropIconComponent> = {
  maiz: Wheat as CropIconComponent,
  cafe: CoffeeBean,
  frijol: Sprout as CropIconComponent,
  hortalizas: Salad as CropIconComponent,
  cana: SugarCane,
  aguacate: Avocado,
};
