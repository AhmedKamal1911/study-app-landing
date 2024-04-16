import { Box, Stack, Typography } from "@mui/material";

const FeatureBox = ({ img, title, desc }) => {
  return (
    <Box
      position="relative"
      p={2}
      sx={{
        transition: "0.3s ease",
        zIndex: "1",
        "&::after": {
          position: "absolute",
          content: "''",
          width: "80%",
          height: "50%",
          left: "50%",
          bottom: "0",
          zIndex: "-1",
          transform: "translateX(-50%)",
          backgroundColor: "colorDark",
          filter: "blur(15px)",
          transition: "0.3s",
          opacity: "0",
        },
        "&:hover::after": {
          opacity: "1",
        },
        "&:hover": {
          transform: "  translateY(-20px) scale(1.03)",
        },
        "&:hover::before": {
          opacity: "1",
        },

        "&::before": {
          opacity: "0",
          transition: "0.3s all",
          content: "''",
          position: "absolute",
          inset: "0",
          backgroundColor: "colorDark",
          borderRadius: 1.5,
          zIndex: "5",
        },
      }}
    >
      <Stack
        direction="column"
        gap={1}
        p={3}
        px={6}
        position="relative"
        zIndex={5}
      >
        <Box>
          <img style={{ maxWidth: "60px" }} src={img} alt="" />
        </Box>
        <Typography variant="h5" fontSize="22px" color="white">
          {title}
        </Typography>
        <Typography variant="body1" color="#ffffffb3">
          {desc}
        </Typography>
      </Stack>
    </Box>
  );
};
export default FeatureBox;
