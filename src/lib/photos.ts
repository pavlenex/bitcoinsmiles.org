import type { ImageMetadata } from 'astro';

// Photos are matched to patients by filename convention:
//   src/photos/after/<slug>.jpg   — required for every patient
//   src/photos/before/<slug>.jpg  — optional
const AFTER = import.meta.glob<{ default: ImageMetadata }>('../photos/after/*.jpg', {
  eager: true,
});
const BEFORE = import.meta.glob<{ default: ImageMetadata }>('../photos/before/*.jpg', {
  eager: true,
});

export function afterPhoto(slug: string): ImageMetadata {
  const mod = AFTER[`../photos/after/${slug}.jpg`];
  if (!mod) throw new Error(`Missing photo: src/photos/after/${slug}.jpg`);
  return mod.default;
}

export function beforePhoto(slug: string): ImageMetadata | undefined {
  return BEFORE[`../photos/before/${slug}.jpg`]?.default;
}
