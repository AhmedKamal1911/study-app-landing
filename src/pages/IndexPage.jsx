import { Box } from "@mui/material";
import {
  CustomizeSection,
  IncludedElementsSection,
  LandingSection,
  WhyUsSection,
  CoursesSection,
  CoreFeaturesSection,
  SupportSection,
  CampaignSection,
  ManageCoursesSection,
  EventOptionsSection,
  WorldClassSection,
  TopNotchFeaturesSection,
  QuestionsSection,
  ReviewsSection,
} from "../components";
import withHelmet from "../components/withHelmet";

const IndexPage = () => {
  return (
    <Box overflow="hidden">
      <LandingSection />
      <WhyUsSection />
      <CustomizeSection />
      <IncludedElementsSection />
      <CoursesSection />
      <CoreFeaturesSection />
      <ManageCoursesSection />
      <EventOptionsSection />
      <WorldClassSection />
      <CampaignSection />
      <TopNotchFeaturesSection />
      <ReviewsSection />
      <QuestionsSection />
      <SupportSection />
    </Box>
  );
};
const Index = withHelmet(IndexPage);
export default Index;
