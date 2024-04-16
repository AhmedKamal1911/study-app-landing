import useFetch from "./useFetch";

const useCourse = (slug) => {
  const requestInfo = useFetch({
    url: `/courses/${slug}`,
  });
  return requestInfo;
};

export default useCourse;
