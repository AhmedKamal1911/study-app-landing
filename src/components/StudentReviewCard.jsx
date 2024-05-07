import { Box, Rating, Stack, Typography } from "@mui/material";

const StudentReviewCard = ({
  studentFullName,
  studentAvatar,
  reviewValue,
  reviewText,
}) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={{ xs: 1, md: 3 }}
      alignItems={{ xs: "center", md: "flex-start" }}
    >
      <Box fontSize={0}>
        <img
          src={studentAvatar}
          alt="avatar"
          style={{
            width: "95px",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Box>
        <Stack
          gap={0.5}
          alignItems={{
            xs: "center",
            md: "start",
          }}
          textAlign={{
            xs: "center",
            md: "start",
          }}
        >
          <Typography
            textTransform="capitalize"
            fontSize={18}
            fontWeight="bold"
          >
            {studentFullName}
          </Typography>
          <Rating
            value={reviewValue}
            precision={0.5}
            sx={{
              color: "#FF8F3C",
            }}
            readOnly
          />
          <Typography paragraph color="colorGray" fontSize={18} mb={0}>
            {reviewText}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default StudentReviewCard;
