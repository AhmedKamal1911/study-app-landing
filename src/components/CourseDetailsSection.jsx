import { CalendarToday, Language, WorkspacePremium } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Chip,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import defaultAvatar from "../assets/images/user.png";
import bgGradientImg from "../assets/images/bg-image-10.jpg";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import badgeImg from "../assets/images/card-icon-1.png";
import formatDate from "../utils/formatDate";
import formatNumber from "../utils/formatNumber";
import { useCourseData } from "../contexts/CourseDataContext";
import calculateReviewValue from "../utils/calculateReviewValue";
const CourseDetailsSection = () => {
  const { course } = useCourseData();
  const firstName = course?.courseCreator.fullName?.split(" ")[0];
  console.log(course);
  // const InstructorFirstName = course?.courseCreator.fullName.split(" ")?.[0];

  return (
    <>
      <Box
        py={9}
        sx={{
          backgroundImage: `url(${bgGradientImg})`,
          backgroundSize: "100% 100%",
        }}
      >
        {/* <div
        className="intersectionObserver"
        style={{
          position: "fixed",
          backgroundColor: "rgba(0,255,0,0.4)",
          inset: "100px  0 800px 0 ",
          zIndex: "10000000000",
        }}
      /> */}
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid md={8}>
              <Box>
                <Breadcrumbs aria-label="breadcrumb" mb={3} separator="›">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    color="inherit"
                    to="/"
                  >
                    Home
                  </Link>
                  <Typography color="text.primary" textTransform="capitalize">
                    {course?.category}
                  </Typography>
                </Breadcrumbs>
                <Typography
                  variant="h3"
                  fontSize={{ xs: "30px", md: "40px" }}
                  maxWidth="643px"
                  fontWeight="bold"
                  mb={3}
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {course?.title}
                </Typography>
                <Typography
                  variant="body2"
                  paragraph
                  fontSize={18}
                  maxWidth={800}
                  color="#192335"
                >
                  {course?.courseDescription}
                </Typography>
                <Stack
                  direction="row"
                  gap={1.5}
                  mb={3}
                  alignItems="center"
                  flexWrap="wrap"
                  justifyContent={{ xs: "center", md: "start" }}
                >
                  {course?.isBestSelling && (
                    <Chip
                      label="Best Seller"
                      icon={
                        <img
                          src={badgeImg}
                          style={{
                            width: "30px",
                          }}
                        />
                      }
                      size="large"
                      sx={{
                        ".MuiChip-label	": {
                          fontWeight: "bold",
                        },
                        py: 3,
                        px: 1,
                        borderRadius: "24px",
                      }}
                    />
                  )}

                  <Stack direction="row" gap={0.3} alignItems="center">
                    {course && (
                      <>
                        <Typography fontSize="14px">
                          {formatNumber(calculateReviewValue(course.reviews), {
                            minimumFractionDigits: 1,
                          })}
                        </Typography>
                        <Rating
                          name="read-only"
                          value={calculateReviewValue(course.reviews)}
                          readOnly
                        />
                      </>
                    )}
                  </Stack>
                  <Typography
                    bgcolor="#ffffff21"
                    fontSize="12px"
                    p={0.5}
                    borderRadius="10px"
                  >
                    {course &&
                      formatNumber(course.numberOfRatings, {
                        notation: "standard",
                      })}{" "}
                    rating
                  </Typography>
                  <Typography fontSize="14px" fontWeight="bold">
                    {course &&
                      formatNumber(course.numberOfStudents, {
                        notation: "standard",
                      })}{" "}
                    students
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  gap={1.5}
                  alignItems="center"
                  mb={3}
                  justifyContent={{ xs: "center", md: "start" }}
                >
                  <img
                    src={course?.courseCreator.avatar || defaultAvatar}
                    alt="avatar"
                    style={{
                      width: "40px",
                      aspectRatio: "1",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography color="colorGray" fontSize={14}>
                    By{" "}
                    <Typography
                      color="#192335"
                      fontWeight="600"
                      component={"span"}
                      fontSize="inherit"
                    >
                      {firstName}
                    </Typography>{" "}
                    In{" "}
                    <Typography
                      color="#192335"
                      fontWeight="600"
                      component={"span"}
                      fontSize="inherit"
                      textTransform="capitalize"
                    >
                      {course?.category}
                    </Typography>
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  gap={1.5}
                  alignItems="center"
                  flexWrap="wrap"
                  justifyContent={{ xs: "center", md: "start" }}
                  color="#192335"
                  fontSize={12}
                >
                  <Stack direction="row" gap={0.5} alignItems="inherit">
                    <CalendarToday fontSize="small" />
                    <Typography fontSize="inherit">
                      Last updated{" "}
                      {course &&
                        formatDate(course.updatedAt, {
                          month: "2-digit",
                          year: "numeric",
                        })}
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap={0.5} alignItems="inherit">
                    <Language fontSize="small" />
                    <Typography fontSize="inherit" textTransform="capitalize">
                      {course?.language}
                    </Typography>
                  </Stack>
                  {course?.isCertified && (
                    <Stack direction="row" gap={0.5} alignItems="inherit">
                      <WorkspacePremium fontSize="small" />
                      <Typography fontSize="inherit">
                        Certified Course
                      </Typography>
                    </Stack>
                  )}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CourseDetailsSection;
