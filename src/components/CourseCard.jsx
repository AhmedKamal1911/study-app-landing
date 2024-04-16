import { Box, Typography } from "@mui/material";
import cardimg1 from "../assets/images/cardimg1.png";
import mobileImg1 from "../assets/images/mobilecard1.png";
import { Link } from "react-router-dom";

const CourseCard = ({ title, image, smallImg, slug }) => {
  return (
    <Box
      className="course-card shadow-3"
      borderRadius={3}
      bgcolor={"white"}
      p={2.5}
      position="relative"
      sx={{
        paddingTop: "25px",
        transition: "0.6s",
        "&::before": {
          position: "absolute",
          content: "''",
          top: "8px",
          left: "28px",
          backgroundColor: "red",
          height: "6px",
          width: "6px",
          borderRadius: "5px",
          boxShadow: "10px 0 0 #FACB34, 20px 0 0 #A7DF4B",
        },
      }}
    >
      <Box position="relative">
        <img
          src={image || cardimg1}
          style={{
            width: "100%",
            height: "448px",
            backgroundColor: "#B5C0D0",
            minHeight: "600px",
            objectFit: "cover",
          }}
          alt=""
          loading="lazy"
        />
        <Box
          display={{
            xs: "none",
            lg: "block",
          }}
          className="mobile shadow-3"
          bgcolor="white"
          p={1}
          pt={2}
          position="absolute"
          right="-100px"
          bottom="-20px"
          zIndex={2}
          border={"2px solid #FFFFFF"}
          borderRadius={2}
          sx={{
            transition: "0.4s",
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(7.5px)",
            "&::before": {
              position: "absolute",
              content: "''",
              width: "28px",
              height: "2px",
              borderRadius: "5px",
              left: "50%",
              transform: "translateX(-50%)",
              top: "10px",
              backgroundColor: "white",
            },
          }}
        >
          <img
            style={{
              width: "170px",
              height: "300px",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={smallImg || mobileImg1}
            alt=""
          />
        </Box>
      </Box>
      <Box textAlign="center">
        <Typography
          variant="h6"
          fontWeight="bold"
          color="colorDark"
          fontSize="18px"
          maxWidth="300px"
          marginInline="auto"
          display="block"
          whiteSpace="nowrap"
          overflow="hidden"
          title={title}
          to={`/courses/${slug}`}
          component={Link}
          sx={{
            textOverflow: "ellipsis",
            textDecoration: "none",
            "&::before": {
              content: "''",
              position: "absolute",

              inset: 0,
            },
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseCard;
