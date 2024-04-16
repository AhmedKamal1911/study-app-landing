import { Box, Typography } from "@mui/material";

const FeatureCard = ({ featureImg, featureName, featureType }) => {
  return (
    <Box textAlign="center" className="feature-card">
      <Box
        className="shadow-3"
        display="inline-block"
        borderRadius="50%"
        fontSize={0}
      >
        <img
          className="feature-card__img"
          width={150}
          src={featureImg}
          alt=""
        />
      </Box>
      <Typography my={1.5} variant="h6" fontWeight="bold">
        {featureName}
      </Typography>
      <Typography
        variant="body1"
        fontSize="14px"
        bgcolor="#F6F6F6"
        color="colorGray"
        display="inline-block"
        py={0.4}
        px={3}
        borderRadius="6px"
        sx={{ textWrap: "nowrap" }}
      >
        {featureType}
      </Typography>
    </Box>
  );
};

export default FeatureCard;
