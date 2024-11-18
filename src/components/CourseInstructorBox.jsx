import { Box, Chip, Stack, Typography } from "@mui/material";
import { CourseInfoWrapper } from ".";
import {
  Facebook,
  Instagram,
  LinkedIn,
  People,
  Star,
  Twitter,
  VideoCall,
} from "@mui/icons-material";
import formatNumber from "../utils/formatNumber";
const CourseInstructorBox = ({
  fullName,
  jobTitle,
  description,
  totalReviews,
  coursesCount,
  studentsCount,
  rating,
  avatarImg,
}) => {
  return (
    <CourseInfoWrapper title="Instructor">
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "start" }}
        textAlign={{
          xs: "center",
          md: "start",
        }}
        gap={4}
      >
        <Box>
          <img
            src={avatarImg}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            alt="instructor"
          />
        </Box>
        <Stack gap={1}>
          <Typography textTransform="capitalize" variant="h6" fontWeight="bold">
            {fullName}
          </Typography>
          <Typography
            variant="body1"
            color="colorGray"
            textTransform="capitalize"
          >
            {jobTitle}
          </Typography>
          <Stack
            color="colorGray"
            direction="row"
            alignItems="center"
            gap={1}
            flexWrap="wrap"
            justifyContent={{
              xs: "center",
              md: "start",
            }}
            fontSize={14}
          >
            <Stack direction="row" gap={0.6} alignItems="center">
              <Star htmlColor="rgb(255, 143, 60)" />
              <Typography fontSize="inherit">
                {formatNumber(totalReviews, {
                  notation: "standard",
                })}{" "}
                Reviews
              </Typography>
            </Stack>
            <Chip
              label={`${rating} Rating`}
              sx={{
                color: "colorGray",
              }}
            />
            <Stack direction="row" gap={0.6} alignItems="center">
              <People />
              <Typography fontSize="inherit">
                {" "}
                {formatNumber(studentsCount, {
                  notation: "standard",
                })}{" "}
                Students
              </Typography>
            </Stack>
            <Stack direction="row" gap={0.6} alignItems="center">
              <VideoCall />
              <Typography fontSize="inherit">{coursesCount} Courses</Typography>
            </Stack>
          </Stack>
          <Typography
            fontSize={18}
            paragraph
            maxWidth={{ md: "420px" }}
            color="colorGray"
          >
            {description}
          </Typography>
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            alignSelf={{ xs: "center", md: "stretch" }}
          >
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
          </Stack>
        </Stack>
      </Stack>
    </CourseInfoWrapper>
  );
};

export default CourseInstructorBox;
