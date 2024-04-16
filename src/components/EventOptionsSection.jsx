import { Box, Stack } from "@mui/material";

import { CardsEffectSwiper, CircleBox, FeaturesDetailsBox } from ".";

import eventIconsImg from "../assets/images/event-section-icons.png";
import { eventOptionsImages } from "../utils/constants";
const eventFeaturesList = [
  { featureName: " EMultiple Views" },
  { featureName: "Easy Events Classification" },
  { featureName: "Event Widgets" },
  { featureName: "Organizers & Venues" },
  { featureName: "Contact Organizer" },
  { featureName: "Google Maps" },
  { featureName: "Guest List" },
  { featureName: "Sell Tickets" },
  { featureName: "Attendee Information" },
];
const EventOptionsSection = () => {
  return (
    <Box
      mb={5}
      pb={12}
      pt={8}
      bgcolor="#F9F9FF"
      position="relative"
      overflow="hidden"
    >
      <Stack gap={10} direction={{ xs: "column-reverse", lg: "row" }}>
        <FeaturesDetailsBox
          iconsImg={eventIconsImg}
          subtitle={"Event options"}
          title={"Empower your event management skill with HiStudy"}
          desc={
            "Create event layouts, floor plans, event plans, and more with histudy. Get event layout templates, and more by our histudy template. You don't need to be a designer to create professional-looking results. Histudy event layout is perfect for event managemnt."
          }
          featuresHeader={"Courses Feature List :"}
          featuresList={eventFeaturesList}
        />
        <CardsEffectSwiper cardDirection="rtl" slides={eventOptionsImages} />
      </Stack>
      {/* Pesudo Elements */}

      <CircleBox direction={"left"} />
    </Box>
  );
};

export default EventOptionsSection;
