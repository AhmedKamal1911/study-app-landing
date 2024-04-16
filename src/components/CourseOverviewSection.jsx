import { Box, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  CourseDetailsNavigation,
  CourseInstructorBox,
  CourseRequirementsBox,
  CourseReviewBox,
  CourseSidebar,
  FeaturedReviewBox,
  WhatYouLearnCard,
} from ".";
import defaultAvatar from "../assets/images/user.png";
import { useCallback, useEffect, useRef, useState } from "react";
import { useCourseData } from "../contexts/CourseDataContext";

import calculateReviewValue from "../utils/calculateReviewValue";
const CourseOverviewSection = () => {
  const { course } = useCourseData();

  const [currentVisibleSection, setCurrentVisibleSection] = useState("");
  const isClickedInteractionRef = useRef(false);
  const intersectionObserverRef = useRef(null);
  const courseDetailsElementsRef = useRef([]);
  function observeSections() {
    courseDetailsElementsRef.current.forEach((node) => {
      intersectionObserverRef.current.observe(node);
    });
  }
  function handleSpyBtnClick(btnRelatedSection) {
    if (
      !courseDetailsElementsRef.current.length ||
      !intersectionObserverRef.current
    )
      return;
    setCurrentVisibleSection(btnRelatedSection);
    isClickedInteractionRef.current = true;
    const targetSection = courseDetailsElementsRef.current.find(
      (node) => node.dataset.section === btnRelatedSection
    );
    if (!targetSection) return;
    window.scrollTo(0, targetSection.offsetTop - 120);
    intersectionObserverRef.current.disconnect();
    setTimeout(() => {
      observeSections();
    }, 700);
  }
  const refCallback = useCallback(
    (index) => (node) => {
      if (node) {
        courseDetailsElementsRef.current[index] = node;
      }
    },
    []
  );

  useEffect(() => {
    if (!courseDetailsElementsRef.current.length) return;
    if (intersectionObserverRef.current) return;
    function handleIntersection(elements) {
      if (elements[0].isIntersecting) {
        setCurrentVisibleSection(elements[0].target.dataset.section);
      }
    }
    intersectionObserverRef.current = new IntersectionObserver(
      handleIntersection,
      {
        rootMargin: "-100px 0px -800px 0px ",
      }
    );
    observeSections();
    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
        intersectionObserverRef.current = null;
      }
    };
  }, []);

  const calculateRatingPercentage = (ratingValueOfPercentage) => {
    const percentage =
      course && course.reviews.length > 0
        ? (course.reviews.filter(
            ({ rating }) => rating === ratingValueOfPercentage
          ).length /
            course.reviews.length) *
          100
        : 0;
    return Math.trunc(percentage);
  };
  const percentages = Array.from({ length: 5 }).map((_, index) => ({
    value: index + 1,
    percentage: `${calculateRatingPercentage(index + 1)}%`,
  }));

  const ratingInfo = {
    value: course ? calculateReviewValue(course.reviews) : 0,
    percentages: percentages,
  };

  return (
    <>
      <Box py={5} bgcolor="#F7F7F7">
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid xs={12} md={8}>
              <Stack gap={3}>
                <Box
                  className="shadow-1"
                  p={4}
                  bgcolor="white"
                  borderRadius={2}
                  fontSize={0}
                >
                  {/* TODO: DEFAULT IMAGE */}
                  <img
                    src={course?.thumbnails || ""}
                    width="100%"
                    style={{
                      height: "600px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <CourseDetailsNavigation
                  currentShownSection={currentVisibleSection}
                  handleNavigationClick={handleSpyBtnClick}
                />
                <Box data-section="overview" ref={refCallback(0)}>
                  <WhatYouLearnCard
                    learningList={course?.whatYouWillLearn.split("\r\n")}
                  />
                </Box>
                {/* <Box data-section="course content" ref={refCallback(1)}>
                <CourseContentCard />
              </Box> */}
                <Box data-section="details" ref={refCallback(1)}>
                  <CourseRequirementsBox
                    // courseDescriptionList={course?.prerequisites.split("\r\n")}
                    courseRequirementsList={course?.prerequisites.split("\r\n")}
                  />
                </Box>
                <Box data-section="instructor" ref={refCallback(2)}>
                  <CourseInstructorBox
                    avatarImg={course?.courseCreator.avatar || defaultAvatar}
                    coursesCount={course?.courseCreator.coursesCount}
                    description={course?.courseCreator.instructorDescription}
                    fullName={course?.courseCreator.fullName}
                    jobTitle={`${course?.category} Developer`}
                    rating={course?.courseCreator.rating || 3}
                    studentsCount={course?.courseCreator.studentsCount}
                    totalReviews={course?.courseCreator.ratingsCount}
                  />
                </Box>
                <Box data-section="review" ref={refCallback(3)}>
                  {course && <CourseReviewBox ratingInfo={ratingInfo} />}
                </Box>
                {/* FIXME: fix that shit */}

                <FeaturedReviewBox />
              </Stack>
            </Grid>
            <Grid xs={12} md={4}>
              <Box
                sx={(theme) => ({
                  [theme.breakpoints.up("md")]: {
                    marginTop: "-490px",
                    position: "sticky",
                    top: "80px",
                  },
                })}
              >
                <CourseSidebar
                  language={course?.language}
                  isCertified={course?.isCertified}
                  passPercentage={course?.passPercentage}
                  skillLevel={course?.skillLevel}
                  totalStudents={course?.numberOfStudents}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CourseOverviewSection;
