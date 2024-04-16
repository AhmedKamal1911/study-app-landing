import { Box, Container, Stack, Typography } from "@mui/material";
import useThemeColorGradient from "../hooks/useThemeColorGradient";
import mapImg from "../assets/images/map.png";
import recycle from "../assets/images/recycle.png";
import techSupport from "../assets/images/techsupport.png";
import highSpeed from "../assets/images/highspeed.png";
import diamond from "../assets/images/diamond.png";
import code from "../assets/images/code.png";
const CampaignSection = () => {
  const colorGradient3 = useThemeColorGradient("colorGradient3");
  const features = [
    {
      featureImg: recycle,
      featureName: "Free Lifetime Update",
    },
    {
      featureImg: techSupport,
      featureName: "Premium Support 6 Month Free",
    },
    {
      featureImg: highSpeed,
      featureName: "High Speed Performance",
    },
    {
      featureImg: diamond,
      featureName: "We Provided Premium Plugins (Enjoy)",
    },
    {
      featureImg: code,
      featureName: "Developer Friendly Code & Design",
    },
  ];
  return (
    <Box
      zIndex={1}
      sx={{
        backgroundImage: colorGradient3,
      }}
      py={10}
      position="relative"
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Box mb={10}>
            <Typography
              variant="h2"
              fontSize={{ xs: "25px", md: "60px" }}
              fontWeight="bold"
              color="white"
            >
              Globally trusted by hundreds of thousands of customers.
            </Typography>
            <Typography
              my={2}
              variant="h5"
              fontSize={{ xs: "18px", md: "25px" }}
              color="white"
            >
              Work Smarter ☕ Create Better ⭐ Build Faster ⚡
            </Typography>

            <Typography my={2} variant="h6" fontSize={13} color="#ffffff">
              HOW WILL HISTUDY BENEFIT ME?
            </Typography>
          </Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={5}
            justifyContent="center"
          >
            {features.map(({ featureImg, featureName }, index) => (
              <Box
                data-aos={
                  index === 0
                    ? "fade-down"
                    : index === 1
                    ? "fade-up"
                    : index === 2
                    ? "fade-up"
                    : index === 3
                    ? "fade-up"
                    : "fade-down"
                }
                data-aos-duration="800"
                key={featureName}
              >
                <Box>
                  <img style={{ width: "50px" }} src={featureImg} alt="" />
                </Box>
                <Typography my={2} variant="h6" fontSize={15} color="#ffffff">
                  {featureName}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
      <Box
        position="absolute"
        width="70%"
        left="50%"
        top="0px"
        sx={{ transform: "translateX(-50%)", zIndex: -2 }}
      >
        <img style={{ maxWidth: "100%" }} src={mapImg} alt="" />
      </Box>
    </Box>
  );
};

export default CampaignSection;
