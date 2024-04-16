import { Box, Typography } from "@mui/material";
import fade from "../utils/fade";
const SectionHeader = ({
  subtitle,
  children,
  alignment = "center",
  subTitleColor = "#2f57ef",
  subTitleAnimation = "fade-down",
  titleAnimation = "zoom-in-right",
  animationDuration = 1000,
}) => {
  return (
    <Box textAlign={alignment} mb={3.3}>
      <Typography
        data-aos={subTitleAnimation}
        data-aos-duration={animationDuration}
        component="span"
        display="inline-block"
        sx={{
          backgroundColor: fade(subTitleColor, 0.1),
          borderRadius: "24px",
          fontWeight: "bold",
          fontSize: "13px",
          p: 1.5,
          color: subTitleColor,
          textTransform: "uppercase",
        }}
      >
        {subtitle}
      </Typography>
      {/* first way but escape it please mf bitch */}
      <Typography
        data-aos={titleAnimation}
        data-aos-duration={animationDuration}
        fontSize={{ xs: 30, md: 55 }}
        mt={2}
        variant="h3"
        fontWeight="bold"
        color="colorDark"
      >
        {children}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
