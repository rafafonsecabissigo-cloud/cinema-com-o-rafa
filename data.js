import reviews from "../data/reviews.json";
import lists from "../data/lists.json";

const reviewOrder = [
  "the-cameraman",
  "oasis-familiar-to-millions",
  "seven-chances",
  "a-short-film-about-love",
  "ace-in-the-hole",
  "the-darjeeling-limited",
  "whiplash",
  "cinema-paradiso",
  "shithouse",
  "casa-de-imagem",
  "bicycle-thieves"
];

export function getReviews() {
  return [...reviews].sort((a, b) => {
    const indexA = reviewOrder.indexOf(a.slug);
    const indexB = reviewOrder.indexOf(b.slug);
    const safeA = indexA === -1 ? 999 : indexA;
    const safeB = indexB === -1 ? 999 : indexB;
    return safeA - safeB;
  });
}

export function getReviewBySlug(slug) {
  return reviews.find((review) => review.slug === slug);
}

export function getLists() {
  return [...lists];
}

export function getListBySlug(slug) {
  return lists.find((list) => list.slug === slug);
}

export function normalizeImagePath(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return path.startsWith("/") ? path : `/${path}`;
}
