import {
  Autocomplete,
  Box,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import { CoursesFilter } from "../components";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCourses from "../hooks/useCourses";
import withHelmet from "../components/withHelmet";

const CoursesPage = () => {
  const [openAutoComplete, setOpenAutoComplete] = useState(false);
  const { courses } = useCourses();
  // FIXME: Loading data should be when the autocomplete is opened
  const loading = openAutoComplete && courses?.length === 0;
  const navigate = useNavigate();
  return (
    <Box py={3}>
      <Container maxWidth={false}>
        <Box mb={4}>
          <Container maxWidth="md">
            <Autocomplete
              id="search-courses"
              open={openAutoComplete}
              autoHighlight
              noOptionsText="Course Not Found"
              onChange={(_, value) => {
                const slug = value.title?.split(" ").join("-");

                navigate(`/courses/${slug}`);
              }}
              onOpen={() => {
                setOpenAutoComplete(true);
              }}
              onClose={() => {
                setOpenAutoComplete(false);
              }}
              getOptionLabel={(option) => option.title ?? option}
              isOptionEqualToValue={(option, value) => {
                console.log(option, "option");
                option.title === value.title;
              }}
              loading={loading}
              options={courses || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Courses"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </Fragment>
                    ),
                  }}
                />
              )}
            />
          </Container>
        </Box>

        <CoursesFilter />
      </Container>
    </Box>
  );
};

const Courses = withHelmet(CoursesPage, "Courses");
export default Courses;
