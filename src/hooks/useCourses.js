import useFetch from "./useFetch";

const useCourses = (params) => {
  const { responseData: courses, ...rest } = useFetch({
    url: "/courses",
    params: params,
  });
  // console.log(courses);
  return { courses, ...rest };
};

export default useCourses;
