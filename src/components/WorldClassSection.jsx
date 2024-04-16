import { Box, Stack } from "@mui/material";
import {
  CardsEffectSwiper,
  CircleBox,
  FeaturesDetailsBox,
  WaveBackground,
} from ".";

import { shopImages } from "../utils/constants";
const shopFeatures = [
  { featureName: " Pixel-Perfect Interface" },
  { featureName: " Perfect Product Layouts" },
  { featureName: " Single Product Variation" },
  { featureName: " Offcanvas for Mini Cart" },
  { featureName: " One Page Checkout" },
  { featureName: " Wishlist Page" },
];

const WorldClassSection = () => {
  return (
    <Box pb={12} pt={8} position="relative" overflow="hidden">
      <Stack gap={{ xs: 8, lg: 10 }} direction={{ md: "column", lg: "row" }}>
        <CardsEffectSwiper slides={shopImages} />
        <FeaturesDetailsBox
          subtitle={"WORLD-CLASS DESIGN"}
          title={"Create a Stunning Store in Minutes with HiStudy!"}
          desc={
            "Create a beautiful online Book store (Sale Anything) using powerful histudy template and start selling right away!"
          }
          featuresHeader={"Top Notech Shop Feature:"}
          featuresList={shopFeatures}
        />
      </Stack>
      {/* Pesudo Elements */}
      <WaveBackground />
      <CircleBox direction={"right"} />
    </Box>
  );
};

export default WorldClassSection;
