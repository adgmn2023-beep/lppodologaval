export type GbpSummary = {
  averageRating: number;
  totalReviews: number;
};

export type GbpReview = {
  id: string;
  authorName: string;
  rating: number;
  relativeDate: string;
  text: string;
  ownerReply?: string;
};

export type GbpPost = {
  id: string;
  image: string;
  imageAlt: string;
  text: string;
  relativeDate: string;
  ctaLabel: string;
  ctaUrl: string;
};
