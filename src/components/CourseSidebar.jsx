import { East, Phone, PlayArrow } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import useThemeColorGradient from "../hooks/useThemeColorGradient";
import videoImg from "../assets/images/video-01.jpg";
import ShowMoreWrapper from "./ShowMoreWrapper";
import formatNumber from "../utils/formatNumber";

const CourseSidebarListItem = ({ title, value }) => (
  <Stack
    component="li"
    key={title}
    color="colorGray"
    fontWeight="bold"
    direction="row"
    justifyContent="space-between"
    py={1}
  >
    <Typography textTransform="capitalize">{title}</Typography>
    <Typography
      borderRadius={2}
      bgcolor="#F6F6F6"
      p={0.8}
      fontSize="12px"
      textTransform="capitalize"
    >
      {value}
    </Typography>
  </Stack>
);

const CourseSidebar = ({
  isCertified,
  totalStudents,
  language,
  passPercentage,
  skillLevel,
}) => {
  const colorGradient1 = useThemeColorGradient("colorGradient1");

  return (
    <Box
      p={2.5}
      sx={{
        backgroundImage: colorGradient1,
        borderRadius: "14px",
        position: "relative",
        zIndex: "1",
        "&::before": {
          content: "''",
          position: "absolute",
          inset: "4px",
          zIndex: "-1",
          bgcolor: "white",
          borderRadius: "10px",
        },
      }}
    >
      <Box
        display="block"
        mb={3}
        position="relative"
        borderRadius="8px"
        overflow="hidden"
        sx={{
          "&::before": {
            content: "''",
            position: "absolute",
            inset: "20px 0 0 0",
            backgroundImage:
              "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6895133053221288) 43%)",
          },
        }}
      >
        <Box fontSize={0}>
          <img
            src={videoImg}
            alt="video thumbnail"
            style={{
              width: "100%",
            }}
          />
        </Box>

        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "90px",
            aspectRatio: 1,
            borderRadius: "50%",
            bgcolor: "white",
            "@keyframes ripple": {
              "0%": {
                transform: "scale(0.9)",
                opacity: "1",
              },
              "100%": {
                transform: "scale(2)",
                opacity: "0",
              },
            },
            "&::before,&::after": {
              position: "absolute",
              content: "''",
              inset: "0",
              border: "1.5px solid white",
              borderRadius: "50%",
            },
            "&::after": {
              animation: "ripple 2s infinite linear",
            },
            "&::before": {
              animation: "ripple 2s  linear 1s infinite",
            },
          }}
        >
          <PlayArrow fontSize="large" color="primary" />
        </Box>
      </Box>
      <Button
        component="a"
        href="https://histudy-app.netlify.app/login"
        target="_blank"
        rel="noopener noreferrer"
        fullWidth
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          my: 3,
          p: 2.5,
          gap: 1,
          backgroundImage:
            "linear-gradient(to right, #2F57EA,#2F57EA,#b966e7, #b966e7)",
          backgroundSize: "300% 100%",
          color: "white",
          fontWeight: "bold",
          transition: "all 0.8s ease-in-out",

          "&:hover": {
            backgroundPosition: "100% -100%",
          },
          "&:hover .left-arrow": {
            opacity: "1",
            transform: "translateX(10px)",
          },
          "&:hover .right-arrow": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "&:hover .btn-text": {
            transform: "translateX(15px)",
          },
        }}
      >
        <East
          className="left-arrow"
          sx={{
            fontSize: "18px",
            opacity: "0",
            transition: "0.5",
          }}
        />
        <span
          className="btn-text"
          style={{
            transition:
              "transform 0.6s 0.125s cubic-bezier(0.1, 0.75, 0.25, 1)",
          }}
        >
          Enroll Now
        </span>
        <East
          className="right-arrow"
          sx={{
            fontSize: "18px",
            transition: "0.3s ",
          }}
        />
      </Button>
      <Stack
        gap={1}
        component="ul"
        p={0}
        sx={{
          marginTop: "20px",
          "&  li:not(:last-child)": {
            borderBottom: "1px solid #e6e3f1",
          },
        }}
      >
        <ShowMoreWrapper maxHeight={160}>
          <CourseSidebarListItem
            title="enrolled"
            value={formatNumber(totalStudents, {
              notation: "standard",
            })}
          />
          <CourseSidebarListItem title="skill level" value={skillLevel} />
          <CourseSidebarListItem
            title="certificate"
            value={isCertified ? "yes" : "no"}
          />
          <CourseSidebarListItem title="language" value={language} />
          <CourseSidebarListItem
            title="pass percentage"
            value={passPercentage}
          />
        </ShowMoreWrapper>
      </Stack>
      <Box px={2}>
        <Box textAlign="center" pt={1}>
          <Typography color="colorGray" mb={1}>
            For details about the course
          </Typography>
          <Button
            LinkComponent="a"
            href="tel:+444555666777"
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "16px",
              flexWrap: "wrap",
            }}
          >
            <Phone
              sx={{
                marginInlineEnd: "10px",
              }}
            />
            Call us:{" "}
            <span
              style={{
                marginInlineStart: "5px",
                fontWeight: "bold",
              }}
            >
              +444 555 666 777
            </span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseSidebar;
