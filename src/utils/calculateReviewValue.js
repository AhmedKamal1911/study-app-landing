import sum from "./sum";

function calculateReviewValue(reviews) {
  return reviews.length > 0
    ? Math.ceil(sum(reviews, "rating") / reviews.length)
    : 0;
}
export default calculateReviewValue;
