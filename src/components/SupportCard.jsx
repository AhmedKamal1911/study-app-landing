import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { East } from "@mui/icons-material";
import fade from "../utils/fade";
import useThemeColorGradient from "../hooks/useThemeColorGradient";

const SupportCard = ({
  img,
  title,
  desc,
  linkDetails,
  children,
  bgColor = "white",
  border = true,
}) => {
  const colorGradient4 = useThemeColorGradient("colorGradient4");
  return (
    <Box
      data-aos="zoom-out-up"
      data-aos-duration="800"
      borderRadius={2}
      className="shadow-3"
      flex={1}
      border={border ? "3px dashed #e6e3f1" : ""}
      p={3.5}
      sx={{
        transition: "0.6s",
        backgroundImage: bgColor === "gradient" ? colorGradient4 : undefined,
        "&:hover": {
          transform: "translateY(-10px)",
        },
      }}
      bgcolor={bgColor !== "gradient" ? bgColor : undefined}
    >
      <Box>
        <img style={{ width: "50px" }} src={img} alt="" />
      </Box>
      <Box my={3}>
        <Typography
          variant="h5"
          color={bgColor === "gradient" ? "white" : undefined}
        >
          {title}
        </Typography>
        <Typography
          my={2}
          variant="body1"
          color={bgColor === "gradient" ? "white" : "colorGray"}
        >
          {desc}
        </Typography>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            my: 3,
            p: 2.5,
            gap: 1,
            backgroundColor: fade(linkDetails.color, 0.1),
            color: linkDetails.color,
            fontWeight: "bold",
            transition: "0.3s",
            "&:hover": {
              color: "white",
              bgcolor: linkDetails.color,
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
          LinkComponent={Link}
          to={linkDetails.path}
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
            {linkDetails.title}
          </span>
          <East
            className="right-arrow"
            sx={{
              fontSize: "18px",
              transition: "0.3s ",
            }}
          />
        </Button>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default SupportCard;
