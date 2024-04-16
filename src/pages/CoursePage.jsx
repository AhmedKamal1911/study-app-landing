import { CourseDetailsSection, CourseOverviewSection } from "../components";
import { Box } from "@mui/material";

import CourseDataProvider from "../contexts/CourseDataContext";

const CoursePage = () => {
  return (
    <CourseDataProvider>
      <Box>
        <CourseDetailsSection />
        <CourseOverviewSection />
        {/* <SimilarCoursesSection courseId={id} /> */}
      </Box>
    </CourseDataProvider>
  );
};

export default CoursePage;
