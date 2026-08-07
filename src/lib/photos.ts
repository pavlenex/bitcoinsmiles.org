import type { ImageMetadata } from 'astro';

// Photos are matched to patients by filename convention:
//   src/photos/after/<slug>.jpg
const AFTER = import.meta.glob<{ default: ImageMetadata }>('../photos/after/*.jpg', {
  eager: true,
});

export function afterPhoto(slug: string): ImageMetadata {
  const mod = AFTER[`../photos/after/${slug}.jpg`];
  if (!mod) throw new Error(`Missing photo: src/photos/after/${slug}.jpg`);
  return mod.default;
}
