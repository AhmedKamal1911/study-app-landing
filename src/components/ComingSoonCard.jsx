import { Box, Typography } from "@mui/material";

import comingSoonImg from "../assets/images/coming-soon.png";
const ComingSoonCard = ({ title }) => {
  return (
    <Box
      className="shadow-3"
      borderRadius={3}
      bgcolor={"white"}
      p={2.5}
      position="relative"
      sx={{
        paddingTop: "25px",
        transition: "0.6s",
        height: "100%",

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
      <Box>
        <img src={comingSoonImg} style={{ width: "100%" }} alt="" />
      </Box>
      <Box textAlign="center">
        <Typography
          variant="h6"
          fontWeight="bold"
          color="colorDark"
          fontSize="18px"
          sx={{
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

export default ComingSoonCard;
