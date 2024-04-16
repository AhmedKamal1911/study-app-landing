import { Box, Container } from "@mui/material";
import { coreFeatures } from "../utils/constants";
import Grid from "@mui/material/Unstable_Grid2";
import FeatureCard from "./FeatureCard";
import SectionHeader from "./SectionHeader";

const CoreFeaturesSection = () => {
  return (
    <Box py={12} id="skills">
      <Box mb={15}>
        <SectionHeader subtitle="CORE FEATURES">
          Histudy Exclusive Features
        </SectionHeader>
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          gap={{ xs: 3, sm: 0 }}
          spacing={{ sm: 4, xl: 6 }}
          justifyContent="center"
        >
          {coreFeatures.map((coreFeature) => (
            <Grid
              key={coreFeature.featureName}
              xs={12}
              sm={6}
              md={3}
              lg={2}
              justifyContent="center"
              sx={(theme) => ({
                [theme.breakpoints.only("xs")]: {
                  "& .feature-card__img": {
                    width: "80px",
                  },
                },
                [theme.breakpoints.up("md")]: {
                  "&:nth-of-type(odd) .feature-card": {
                    pt: 4,
                  },
                  "&:nth-of-type(even) .feature-card__img": {
                    width: "100px",
                  },
                },
              })}
            >
              <Box data-aos="fade-down" data-aos-duration="900">
                <FeatureCard {...coreFeature} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreFeaturesSection;
