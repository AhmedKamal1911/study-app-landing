import { Box, Container, Stack, Typography } from "@mui/material";
import arrowDown from "../assets/images/arrow-down.webp";
import { CoursesFilter } from ".";
import useThemeColorGradient from "../hooks/useThemeColorGradient";

const Courses = () => {
  const colorGradient1 = useThemeColorGradient("colorGradient1");

  const colorGradient2 = useThemeColorGradient("colorGradient2");
  return (
    <Box py={10} sx={{ backgroundImage: colorGradient2 }}>
      <Container maxWidth={"xl"}>
        <Stack
          alignItems="center"
          direction="column"
          gap={3}
          my={5}
          position="relative"
        >
          <Typography
            textAlign="center"
            fontWeight="bold"
            maxWidth="650px"
            fontSize={{ xs: "40px", md: "80px" }}
            variant="h2"
            className="gradient-text"
            sx={{ backgroundImage: colorGradient1 }}
          >
            World-Class Stunning Demos
          </Typography>
          <Typography
            variant="h3"
            fontSize={{ xs: "25px", md: "35px" }}
            lineHeight={1.4}
            fontWeight="bold"
            maxWidth="850px"
            textAlign="center"
          >
            Best-in-class designs to get you started.
            <span style={{ color: "#19233550" }}>
              Use any demo or template for education website. You can mix and
              match all the demos and templates.
            </span>
          </Typography>

          <Typography
            variant="h6"
            color="colorGray"
            maxWidth="650px"
            textAlign="center"
          >
            Create a complete education website with a lots of demo page and
            250+ section blocks to create a unique site.
          </Typography>
          <Box
            position="absolute"
            left="50%"
            top="50%"
            fontSize={{ xs: "200px", md: "500px" }}
            zIndex="-2"
            fontWeight="bold"
            color="#f4f5f7"
            sx={{
              transform: "translate(-50%,-50%)",
              background:
                "linear-gradient(180deg, #e4e2fa 0%, rgba(57, 78, 244, 0.03) 80%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "rgba(255,255,255,0.001)",
            }}
          >
            15+
          </Box>
          <Box>
            <img
              className="arrow"
              style={{ height: "70px", width: "70px", borderRadius: "50%" }}
              src={arrowDown}
              alt="arrow down"
            />
          </Box>
        </Stack>
        <CoursesFilter />
      </Container>
    </Box>
  );
};
export default Courses;
