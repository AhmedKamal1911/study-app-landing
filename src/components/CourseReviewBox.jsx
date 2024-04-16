import { Box, Rating, Stack, Typography } from "@mui/material";
import CourseInfoWrapper from "./CourseInfoWrapper";
import RatingRow from "./RatingRow";
import formatNumber from "../utils/formatNumber";

const CourseReviewBox = ({ ratingInfo }) => {
  // FIXME: here
  return (
    <CourseInfoWrapper title="Review">
      <Stack direction={{ xs: "column", md: "row" }} gap={3.5}>
        <Box padding="10px 10px 22px" bgcolor="#ff8f3c14" textAlign="center">
          <Typography fontSize={55} fontWeight="bold" color="colorDark">
            {ratingInfo?.value &&
              formatNumber(ratingInfo.value, {
                minimumFractionDigits: 1,
              })}
          </Typography>
          <Rating
            readOnly
            value={ratingInfo?.value ?? 0}
            precision={0.5}
            sx={{
              color: "#FF8F3C",
            }}
          />
          <Typography color="#FF8F3C" fontWeight="bold">
            {" "}
            Course Rating
          </Typography>
        </Box>
        <Box flex={1} paddingTop={0.8}>
          <Stack gap={1}>
            {ratingInfo?.percentages.map(({ percentage, value }) => (
              <RatingRow
                key={value}
                ratingValue={value}
                percentage={percentage}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </CourseInfoWrapper>
  );
};

export default CourseReviewBox;
