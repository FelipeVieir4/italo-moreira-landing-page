import raw from "@/data/google-reviews.json";
import { site } from "@/lib/site";

export interface GoogleReview {
  author: string;
  authorUrl: string | null;
  authorPhoto: string | null;
  rating: number | null;
  text: string;
  relativeTime: string | null;
  publishTime: string | null;
  reviewUrl: string | null;
}

export interface GoogleReviewsData {
  placeId: string | null;
  name: string | null;
  rating: number | null;
  userRatingCount: number | null;
  mapsUrl: string | null;
  reviewsUrl: string | null;
  writeReviewUrl: string | null;
  fetchedAt: string | null;
  reviews: GoogleReview[];
}

/** Dados gerados por scripts/fetch-google-reviews.mjs no momento do build. */
export const googleReviews = raw as unknown as GoogleReviewsData;

export const hasRating = typeof googleReviews.rating === "number" && (googleReviews.userRatingCount ?? 0) > 0;
export const hasReviews = hasRating && googleReviews.reviews.length > 0;

export const reviewsPageUrl = googleReviews.reviewsUrl ?? googleReviews.mapsUrl ?? site.mapsLink;

export const formatRating = (n: number) => n.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
