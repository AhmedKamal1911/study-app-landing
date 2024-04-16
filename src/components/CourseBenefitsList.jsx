import { Box } from "@mui/material";

const CourseBenefitsList = ({ listItems }) => {
  return (
    <Box
      component="ul"
      padding={0}
      margin={0}
      sx={{
        "&": {
          listStyle: "none",
        },
        "& li::before": {
          content: "'✔'",
          color: "green",
          marginInlineEnd: "10px",
        },
      }}
      fontSize={18}
      color="grayColor"
    >
      {listItems?.map((text, index) => (
        <li key={`text-${index}`} style={{ textTransform: "capitalize" }}>
          {text}
        </li>
      ))}
    </Box>
  );
};

export default CourseBenefitsList;
