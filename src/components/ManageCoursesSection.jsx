import { Box, Stack } from "@mui/material";
import {
  CardsEffectSwiper,
  CircleBox,
  FeaturesDetailsBox,
  WaveBackground,
} from ".";

import manageIconsImg from "../assets/images/manage-icons.png";

import { manageSectionImages } from "../utils/constants";
const coursesFeaturesList = [
  { featureName: "LMS Admin UI/UX" },
  { featureName: "Lesson Types" },
  { featureName: "User Profile" },
  { featureName: "Teacher Profile" },
  { featureName: "Student Profile" },
  { featureName: "Course With Tab" },
  { featureName: "Lesson Pages" },
  { featureName: "Single Page Variation" },
  { featureName: "Quick Action" },
  { featureName: "Filter the Courses" },
  { featureName: "Course Wishlist" },
  { featureName: "Course Ratings" },
];

const ManageCoursesSection = () => {
  return (
    <Box pb={12} pt={8} position="relative" overflow="hidden" id="manage">
      <Stack gap={{ xs: 8, lg: 10 }} direction={{ md: "column", lg: "row" }}>
        <CardsEffectSwiper slides={manageSectionImages} />
        <FeaturesDetailsBox
          iconsImg={manageIconsImg}
          subtitle={"COURSE SHOWCASE"}
          title={"Manage your courses in an authentic way."}
          desc={
            "Create your website course layout by choosing from 12 layout options."
          }
          featuresHeader={"Courses Feature List :"}
          featuresList={coursesFeaturesList}
        />
      </Stack>
      {/* Pesudo Elements */}
      <WaveBackground />
      <CircleBox direction={"right"} />
    </Box>
  );
};

export default ManageCoursesSection;
