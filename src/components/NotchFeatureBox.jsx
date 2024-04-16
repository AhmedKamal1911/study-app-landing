import { Box, Stack, Typography } from "@mui/material";

const NotchFeatureBox = ({
  featureImg,
  children,
  descColor,
  desc,
  order = -1,
  boxBgColor,
}) => {
  return (
    <Stack
      className="shadow-3"
      sx={{
        background: boxBgColor,
        height: "100%",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      <Box order={order} fontSize={0}>
        <img style={{ width: "100%" }} src={featureImg} alt="" />
      </Box>
      <Box p={3.5} flex={1}>
        <Typography
          variant="body1"
          fontSize="18px"
          display="block"
          maxWidth="310px"
          color={descColor}
        >
          {children}
          {desc}
        </Typography>
      </Box>
    </Stack>
  );
};

export default NotchFeatureBox;
