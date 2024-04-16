import { Box, Container } from "@mui/material";

import { topFeaturesList } from "../utils/constants";
import { TopFeatureBox, SectionHeader } from ".";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
const WhyUsSection = () => {
  return (
    <Box pb={16} id="whyus">
      <SectionHeader
        subtitle="all in one template"
        // Good Color
        subTitleColor="#b966e7"
      >
        Why Choose Histudy.
      </SectionHeader>
      <Container maxWidth={"xl"}>
        <Grid container gap={3} justifyContent="center">
          {topFeaturesList.map((topFeature, index) => (
            <Grid
              data-aos={
                index === 1
                  ? "fade-up"
                  : index === 0
                  ? "fade-right"
                  : "fade-left"
              }
              data-aos-duration="1000"
              xs={12}
              sm={8}
              md={5}
              lg={3.5}
              key={topFeature.pretitle}
            >
              <TopFeatureBox key={topFeature.pretitle} {...topFeature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default WhyUsSection;
