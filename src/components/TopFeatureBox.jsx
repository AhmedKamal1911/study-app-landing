import { Box, Chip, Stack, Typography } from "@mui/material";
const TopFeatureBox = ({
  bgcolor,
  pretitle,
  title,
  thumbnail,
  badges,
  glassImg,
}) => {
  return (
    <Box
      height="100%"
      sx={{
        zIndex: "1",
        position: "relative",
        background: bgcolor,
        p: 5,
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography color="white" fontWeight="600" mb={2}>
          {pretitle}
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "25px", md: "32px" }}
          color="white"
          fontWeight="bold"
        >
          {title}
        </Typography>
        <Box my={5}>
          <img style={{ maxWidth: "100%" }} src={thumbnail} alt="feature" />
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap={1}
        >
          {badges.map((badge) => (
            <Chip
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
              }}
              key={badge}
              label={badge}
              variant="filled"
            />
          ))}
          <Chip
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "white",
            }}
            label={"& More..."}
            variant="filled"
          />
        </Stack>
      </Box>
      <Box position="absolute" top="23px" right={0} zIndex={-1}>
        <img src={glassImg} alt="" />
      </Box>
    </Box>
  );
};

export default TopFeatureBox;
