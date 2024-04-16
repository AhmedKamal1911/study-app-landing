import { Button, Stack } from "@mui/material";
const list = ["overview", "details", "instructor", "review"];
const CourseDetailsNavigation = ({
  currentShownSection,
  handleNavigationClick,
}) => {
  return (
    <Stack
      position="sticky"
      left="0"
      className="shadow-1"
      top="80px"
      zIndex={1000}
      direction={{ xs: "column", sm: "row" }}
      gap={1}
      p={2}
      bgcolor="white"
      borderRadius={2}
      justifyContent="center"
    >
      {list.map((n) => (
        <Button
          sx={{
            flex: { sm: 1 },
            borderRadius: "20px",
            fontWeight: "bold",
          }}
          key={n}
          variant={`${currentShownSection === n ? "contained" : "outlined"}`}
          onClick={() => handleNavigationClick(n)}
        >
          {n}
        </Button>
      ))}
    </Stack>
  );
};

export default CourseDetailsNavigation;
