import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import useCourse from "../hooks/useCourse";
import { Loading } from "../components";
import { Helmet } from "react-helmet-async";

const CourseDataContext = createContext(null);
const CourseDataProvider = ({ children }) => {
  const { slug } = useParams();
  const { responseData: course, error, isLoading } = useCourse(slug);
  return (
    <CourseDataContext.Provider value={{ course }}>
      <Helmet>
        <title>{course?.title ? `HiStudy | ${course.title}` : "HiStudy"}</title>
      </Helmet>
      <Loading error={error} isLoading={isLoading} throwToErrorPage>
        {children}
      </Loading>
    </CourseDataContext.Provider>
  );
};
export const useCourseData = () => {
  const contextValue = useContext(CourseDataContext);
  if (!contextValue)
    throw new Error("context cannot be used without its provider");
  return contextValue;
};
export default CourseDataProvider;
