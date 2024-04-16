import useFetch from "./useFetch";

const useCourses = (params) => {
  const { responseData: courses, ...rest } = useFetch({
    url: "/courses",
    params: params,
  });
  return { courses, ...rest };
};

export default useCourses;
