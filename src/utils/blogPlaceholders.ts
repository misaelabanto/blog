const PLACEHOLDER_IMAGES = [
        '/blog-placeholder-1.jpg',
        '/blog-placeholder-2.jpg',
        '/blog-placeholder-3.jpg',
        '/blog-placeholder-4.jpg',
        '/blog-placeholder-5.jpg',
] as const;

/**
 * Returns a deterministic placeholder image based on the provided publication date.
 * Using the publication date ensures the same post consistently reuses the same fallback image
 * across listings, social previews, and localized pages.
 */
export const getBlogPlaceholderImage = (date: Date): string => {
        if (!(date instanceof Date) || Number.isNaN(date.valueOf())) {
                // In the unlikely event the date is invalid, return the first placeholder.
                return PLACEHOLDER_IMAGES[0];
        }

        const dayOfYear = Math.floor(
                (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
                        Date.UTC(date.getFullYear(), 0, 0)) /
                        86400000,
        );

        const index = (dayOfYear - 1 + PLACEHOLDER_IMAGES.length) % PLACEHOLDER_IMAGES.length;
        return PLACEHOLDER_IMAGES[index];
};
