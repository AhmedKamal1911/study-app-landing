import { Box, Stack, Typography } from "@mui/material";
import SectionHeader from "./SectionHeader";
import { Check } from "@mui/icons-material";
import fade from "../utils/fade";

const FeaturesDetailsBox = ({
  iconsImg,
  title,
  subtitle,
  desc,
  featuresHeader,
  featuresList,
}) => {
  const featuresToShow1 =
    featuresList.length < 6 ? featuresList : featuresList.slice(0, 6);
  const featuresToShow2 =
    featuresList.length > 6
      ? featuresList.slice(6, featuresList.length)
      : undefined;

  return (
    <Box flex={1} px={3} pl={{ xs: 3, lg: 10 }} zIndex={2}>
      <SectionHeader alignment="left" subtitle={subtitle}>
        <Typography
          data-aos="fade-left"
          data-aos-duration="800"
          component={"span"}
          display="block"
          fontWeight="bold"
          fontSize={{ xs: "25px", lg: "37px" }}
          maxWidth="600px"
        >
          {title}
        </Typography>
      </SectionHeader>
      <Typography maxWidth="800px" variant="h6" color="colorGray" mb={3}>
        {desc}
      </Typography>
      {iconsImg && (
        <Box data-aos="fade-up" data-aos-duration="800">
          <img style={{ maxWidth: "100%" }} src={iconsImg} alt="" />
        </Box>
      )}

      <Box>
        <Typography mb={3} variant="h6" color="colorDark" fontWeight="bold">
          {featuresHeader}
        </Typography>
        <Stack
          alignItems="flex-start"
          direction={{ md: "column", xl: "row" }}
          gap={{ md: 2, xl: 10 }}
        >
          <Stack direction="column" gap={1}>
            {featuresToShow1.map(({ featureName }) => (
              <Box
                data-aos="fade-down"
                data-aos-duration="600"
                key={featureName}
                display="flex"
                alignItems="center"
                gap={1}
                color="colorGray"
              >
                <Check
                  sx={{
                    fontSize: "23px",
                    p: "3px",
                    color: fade("#2F57EA", 1),
                    bgcolor: fade("#2F57EA", 0.1),
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  sx={{ textWrap: "nowrap" }}
                  variant="body1"
                  color="colorGray"
                >
                  {featureName}
                </Typography>
              </Box>
            ))}
          </Stack>
          {featuresToShow2 && (
            <Stack direction="column" gap={1}>
              {featuresToShow2.map(({ featureName }) => (
                <Box
                  data-aos="fade-up"
                  data-aos-duration="600"
                  key={featureName}
                  display="flex"
                  alignItems="center"
                  gap={1}
                  color="colorGray"
                >
                  <Check
                    sx={{
                      fontSize: "23px",
                      p: "3px",
                      color: fade("#2F57EA", 1),
                      bgcolor: fade("#2F57EA", 0.1),
                      borderRadius: "50%",
                    }}
                  />
                  <Typography
                    sx={{ textWrap: "nowrap" }}
                    variant="body1"
                    color="colorGray"
                  >
                    {featureName}
                  </Typography>
                </Box>
              ))}
            </Stack>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default FeaturesDetailsBox;
