import { Box, Typography } from "@mui/material";

const CourseInfoWrapper = ({ title, children }) => {
  return (
    <Box className="shadow-1" p={4} bgcolor="white" borderRadius={2}>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
        sx={{
          pb: "8px",
          borderBottom: "2px solid #e6e3f14f",
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default CourseInfoWrapper;
