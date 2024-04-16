import useFetch from "./useFetch";

const useReviews = (slug, params = {}) => {
  const { responseData: reviews, ...rest } = useFetch({
    url: `/courses/${slug}/reviews`,
    params,
  });

  return { reviews, ...rest };
};
export default useReviews;
