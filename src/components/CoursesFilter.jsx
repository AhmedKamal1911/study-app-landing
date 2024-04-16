import { Box, Button, Chip, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { coursesCategories } from "../utils/constants";
import { useRef, useState } from "react";
import { CourseCard, Loading } from ".";
import { ComingSoonCard } from ".";
import usePaginateList from "../hooks/usePaginateList";
import useCourses from "../hooks/useCourses";
const CoursesFilter = ({ coursesShowLimit = 6 }) => {
  const comingSoonElementRef = useRef(null);
  const [currentTab, setCurrentTab] = useState("");

  const { courses, error, isLoading } = useCourses(
    currentTab && {
      type: currentTab,
    }
  );

  const {
    dataToShowList: coursesDataToShow,
    handleNextPage,
    setPaginationPage,
  } = usePaginateList(courses, coursesShowLimit);

  function handleTabClick(categoryName) {
    setCurrentTab(categoryName);
    setPaginationPage(1);
  }
  function getMoreCourses() {
    handleNextPage();
    if (!comingSoonElementRef.current) return;

    comingSoonElementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }

  return (
    <Box>
      <Stack direction="row" gap={2} flexWrap="wrap" mb={6}>
        {coursesCategories.map(({ categoryName, key }, index) => (
          <Chip
            key={index}
            className="shadow-3"
            sx={{
              textTransform: "capitalize",
              p: 3,
              py: 3.5,
              borderRadius: "30px",
              fontSize: "20px",
              backgroundColor: currentTab === key ? "colorBlue" : "white",
              color: currentTab === key ? "white" : "colorGray",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "colorBlue",
                color: "white",
              },
            }}
            disabled={Boolean(error)}
            label={categoryName}
            onClick={() => handleTabClick(key)}
          />
        ))}
      </Stack>

      <Loading isLoading={isLoading} error={error}>
        <Grid container spacing={{ xs: 2, lg: 5 }} justifyContent="center">
          {coursesDataToShow?.map(({ id, thumbnails, title, slug }) => (
            <Grid
              key={id}
              md={6}
              lg={4}
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Box
                sx={{
                  pr: { lg: "65px" },
                }}
              >
                <CourseCard
                  image={thumbnails}
                  smallImg={thumbnails}
                  slug={slug}
                  id={id}
                  title={title}
                />
              </Box>
            </Grid>
          ))}
          {new Array(3).fill().map((_, index) => (
            <Grid
              key={index}
              md={6}
              lg={4}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Box
                ref={index === 0 ? comingSoonElementRef : undefined}
                sx={{
                  pr: { lg: "65px" },
                }}
              >
                <ComingSoonCard title={`Coming Soon 0${index + 1}`} />
              </Box>
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          {courses && courses.length !== coursesDataToShow.length && (
            <Button variant="contained" onClick={() => getMoreCourses()}>
              Show more
            </Button>
          )}
        </div>
      </Loading>
    </Box>
  );
};

export default CoursesFilter;
