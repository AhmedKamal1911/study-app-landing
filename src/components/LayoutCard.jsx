import { Box, Typography } from "@mui/material";
import useThemeColorGradient from "../hooks/useThemeColorGradient";

const LayoutCard = ({ img, title }) => {
  const colorGradient1 = useThemeColorGradient("colorGradient1");

  return (
    <Box
      className="layout-card"
      overflow="hidden"
      borderRadius={{ xs: 0, md: "6px" }}
      sx={{
        userSelect: "none",
        filter: "grayscale(100%)",
        transition: "0.3s filter ease-in",
      }}
    >
      <Box fontSize={0}>
        <img style={{ width: "100%" }} src={img} alt="" />
      </Box>

      <Box
        p={{ xs: 1.5, sm: 2.2, lg: 3 }}
        sx={{ backgroundImage: colorGradient1 }}
        textAlign="center"
      >
        <Typography
          variant="h4"
          fontSize={{ xs: "22px", lg: "26px" }}
          color="white"
          fontWeight="bold"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default LayoutCard;
