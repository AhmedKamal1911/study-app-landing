import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { SectionHeader } from ".";
import { customizeInfo } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import useThemeColorGradient from "../hooks/useThemeColorGradient";
// Pros List
const pros = [
  "Learn How to create responsive designs",

  "Learn How to write with best practice",

  "Learn How to create high quality website",
];

const CustomizeSection = () => {
  const colorGradient1 = useThemeColorGradient("colorGradient1");
  const [slideIndex, setSlideIndex] = useState(0); // slideIndex = 4
  const [newInterval, setNewInterval] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    const intervalHandler = () => {
      setSlideIndex((prevSlide) => (prevSlide + 1) % customizeInfo.length);
    };
    intervalRef.current = setInterval(intervalHandler, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [newInterval]);
  const moveToSlide = (index) => {
    if (index === slideIndex) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setNewInterval(!newInterval);
      // start new interval
    }

    setSlideIndex(index);
  };
  return (
    <Box id="customize">
      <SectionHeader
        subtitle="YOU CAN CUSTOMIZE EVERYTHING"
        subTitleColor="#b966e7"
      >
        Take your Website to The{" "}
        <Typography
          variant="caption"
          fontWeight="bold"
          fontSize="inherit"
          className="gradient-text"
          sx={{ backgroundImage: colorGradient1 }}
        >
          Next Level!
        </Typography>
        <Typography color="colorGray" fontSize={18} variant="body2">
          An all-in-one template with powerful features.
        </Typography>
      </SectionHeader>

      <Container maxWidth={"xl"}>
        <Stack
          direction={{ md: "row", xs: "column" }}
          gap={5}
          p={{ xs: 3, md: 8 }}
          borderRadius={5}
          position="relative"
          sx={{
            "&::after": {
              position: "absolute",
              content: "''",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(240, 242, 255) 100%);",
              zIndex: "-1",
              borderRadius: "10px",
            },
          }}
        >
          <Box flex={1}>
            <SectionHeader alignment="left" subtitle="ALL IN ONE FOR EDUCATION">
              <Typography
                variant="caption"
                fontWeight="bold"
                fontSize={{ xs: "25px", md: "40px" }}
              >
                Layout Ready, Build Everything.
              </Typography>
            </SectionHeader>
            <Stack direction="column" gap={2}>
              {customizeInfo.map((button, index) => (
                <Button
                  onClick={() => moveToSlide(index)}
                  key={index}
                  className={slideIndex === index ? "active" : ""} // slideIndex 0 index 0
                  sx={[
                    {
                      position: "relative",
                      borderRadius: "8px",
                      fontWeight: "bolder",
                      fontSize: { xs: "14px", md: "18px" },
                      whiteSpace: "nowrap",
                      color: "black",
                      textTransform: "capitalize",
                      p: 3,
                      zIndex: 2,
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                      justifyContent: "flex-start",
                    },
                    (theme) => ({
                      "@keyframes left-right ": {
                        from: {
                          width: "0%",
                        },
                        to: {
                          width: "100%",
                        },
                      },

                      "&.active::before": {
                        position: "absolute",
                        content: "''",

                        left: 0,
                        top: 0,
                        bottom: 0,
                        height: "100%",
                        width: "20%,",
                        zIndex: -1,
                        backgroundColor: "#2f57ef21",

                        borderRadius: "8px",
                        animation: "left-right 3s forwards 1 ease-in-out",
                      },
                      [theme.breakpoints.up(900)]: {
                        "&.active::after": {
                          position: "absolute",
                          content: "''",
                          right: "-12px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          borderLeft: "12px solid rgba(0, 0, 0, 0.04)",
                          borderTop: "12px solid transparent",
                          borderBottom: "12px solid transparent",
                          animation: "fade 0.3s ease-in-out 1 forwards",
                        },
                      },
                    }),
                  ]}
                >
                  <img
                    src={button.buttonImg}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "8px",
                    }}
                    alt=""
                  />
                  {button.name}
                </Button>
              ))}
            </Stack>
          </Box>
          {customizeInfo.map((img, index) => (
            <Box
              flex={2}
              key={index}
              sx={{
                display: slideIndex === index ? "block" : "none",
                opacity: "0",
              }}
              className={slideIndex === index ? "fade" : ""}
            >
              <img
                key={img.name}
                style={{
                  maxWidth: "100%",
                  height: "844px",
                  objectFit: "contain",
                }}
                src={img.relatedImg}
                alt=""
              />
            </Box>
          ))}
        </Stack>
        <Stack
          justifyContent="center"
          alignSelf="center"
          direction={{ xs: "column", md: "row" }}
          gap={4}
        >
          {pros.map((prosName) => (
            <Typography
              key={prosName}
              display="flex"
              alignItems="center"
              color="colorGray"
              justifyContent={{ xs: "center" }}
            >
              <CheckCircle sx={{ marginRight: "5px", color: "#3EB75E" }} />
              {prosName}
            </Typography>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default CustomizeSection;
