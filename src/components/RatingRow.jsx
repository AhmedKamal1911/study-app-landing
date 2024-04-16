import { Box, Rating, Stack, Typography } from "@mui/material";

const RatingRow = ({
  ratingValue = 5,
  percentage = "80%",
  ratingColor = "#FF8F3C",
}) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems={"center"}
      gap={4}
    >
      <Rating
        readOnly
        value={ratingValue}
        sx={{
          color: ratingColor,
          order: { xs: 2, sm: -1 },
        }}
      />
      <Stack
        width="100%"
        flexDirection="row"
        alignItems="inherit"
        gap="inherit"
      >
        <Box
          width="100%"
          sx={{
            bgcolor: "#EEEEEE",
            height: "6px",
            position: "relative",
            "&::before": {
              content: "''",
              position: "absolute",
              top: "0",
              insetInlineStart: "0",
              bottom: "0",
              width: percentage,
              bgcolor: ratingColor,
            },
          }}
        />
        <Typography
          color="colorGray"
          fontWeight="bold"
          minWidth="42px"
          textAlign="end"
        >
          {percentage}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default RatingRow;
