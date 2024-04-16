import { Box, Container, Typography } from "@mui/material";
import { SupportCard } from ".";
import { Link } from "react-router-dom";
import docImg from "../assets/images/doc.png";
import supportImg from "../assets/images/support.png";
import hireImg from "../assets/images/hire.png";
import { Check, East } from "@mui/icons-material";
import useThemeColorGradient from "../hooks/useThemeColorGradient";
const SUPPORT_FEATURES = [
  {
    img: docImg,
    title: "Online Documentation",
    desc: "Well organized and up to date",
    linkDetails: {
      title: "View Documentation",
      path: "/",
      color: "rgb(47, 87, 239)",
    },
    children: (
      <>
        {[
          { title: "changelog", path: "/" },
          { title: "download", path: "/" },
          { title: "Video Tutorial", path: "/" },
        ].map(({ title, path }) => (
          <Typography
            display="flex"
            alignItems="center"
            gap={1}
            mb={1}
            width="fit-content"
            textTransform="capitalize"
            component={Link}
            to={path}
            key={title}
            color="colorDark"
            sx={{
              textDecoration: "none",
              position: "relative",
              "&::before": {
                content: "''",
                transition: "0.3s",
                position: "absolute",
                height: "2px",
                width: "0%",
                backgroundColor: "black",
                right: "0",
                bottom: "-2px",
              },
              "&:hover::before": {
                left: "0",
                width: "100%",
                backgroundColor: "colorPrimary",
              },
              "&:hover": {
                color: "colorPrimary",
              },
            }}
          >
            {title}
            <East sx={{ fontSize: "16px" }} />
          </Typography>
        ))}
      </>
    ),
  },
  {
    img: supportImg,
    title: "Dedicated support",
    desc: "Need support ? Submit a ticket. We will be happy to assist you.",
    linkDetails: {
      title: "Get Support",
      path: "/",
      color: "rgb(185, 102, 231)",
    },
    children: (
      <>
        {[
          { time: "Support Time : ", timeInfo: "Monday - Friday" },
          { time: "Response Time : ", timeInfo: "Maximum 24 hours" },
        ].map(({ time, timeInfo }) => (
          <Typography key={time} mb={1} color="colorGray">
            {time}
            <Typography component="span" color="colorDark">
              {timeInfo}
            </Typography>
          </Typography>
        ))}
      </>
    ),
  },
  {
    img: hireImg,
    title: "Hire Developer & Designer",
    desc: "Just give us the details about the project our developer & designer will get it done faster, Better, and could possibly imagine.",
    linkDetails: {
      title: "Hire Experts",
      path: "/",
      color: "rgb(116, 226, 145)",
    },
    children: (
      <>
        {[
          { title: "Response Time : 2 Hours" },
          { title: "14-day money back guarantee" },
        ].map(({ title }) => (
          <Box
            textTransform="capitalize"
            key={title}
            color="white"
            display="flex"
            alignItems="center"
            gap={1}
            mb={1}
          >
            <Check
              sx={{
                bgcolor: "#ffffff21",
                borderRadius: "50%",
                fontSize: "20px",
                p: "2px",
              }}
            />
            {title}
          </Box>
        ))}
      </>
    ),
  },
];

const SupportSection = () => {
  const colorGradient2 = useThemeColorGradient("colorGradient2");

  return (
    <Box sx={{ backgroundImage: colorGradient2 }} py={15}>
      <Box width={{ xs: "95%", md: "85%", lg: "70%" }} marginInline="auto">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(auto-fit,minmax(300px,1fr))",
            },
            textAlign: { xs: "center", md: "left" },
          }}
          gap={4}
        >
          {SUPPORT_FEATURES.map((supportFeature, index) => (
            <SupportCard
              key={supportFeature.title}
              {...supportFeature}
              bgColor={
                index === SUPPORT_FEATURES.length - 1 ? "gradient" : undefined
              }
              border={index === SUPPORT_FEATURES.length - 1 ? false : undefined}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SupportSection;
