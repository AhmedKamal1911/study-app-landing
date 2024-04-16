import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const ShowMoreToggler = ({ showMore = false, handleShowMore }) => {
  return (
    <Box
      component="button"
      sx={[
        {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          position: "relative",
        },
        !showMore && {
          "&::before": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            transform: "translateY(-100%)",
            height: "75px",
            width: "100%",
            backgroundImage:
              "linear-gradient(180deg, rgba(254,254,254,0) 6%, rgba(255,255,255,0.9360119047619048) 45%)",
          },
        },
      ]}
      onClick={() => handleShowMore()}
    >
      <Typography color="blue" fontWeight="bold">
        {showMore ? "Show Less" : "Show More"}
      </Typography>
      {showMore ? <ExpandLess /> : <ExpandMore />}
    </Box>
  );
};

export default ShowMoreToggler;
