import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CourseBenefitsList from "./CourseBenefitsList";
import ShowMoreWrapper from "./ShowMoreWrapper";

const CourseRequirementsBox = ({ courseRequirementsList }) => {
  return (
    <Box p={4} bgcolor="white" borderRadius={2}>
      <Grid container spacing={3}>
        <Grid md={6}>
          <Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={3}
              sx={{
                pb: "8px",
                borderBottom: "2px solid #e6e3f14f",
              }}
            >
              Requirements
            </Typography>
            <ShowMoreWrapper maxHeight={252}>
              <CourseBenefitsList listItems={courseRequirementsList} />
            </ShowMoreWrapper>
          </Box>
        </Grid>
        {/* <Grid md={6}>
          <Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={3}
              sx={{
                pb: "8px",
                borderBottom: "2px solid #e6e3f14f",
              }}
            >
              Description
            </Typography>
            <CourseBenefitsList listItems={courseDescriptionList} />
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default CourseRequirementsBox;
