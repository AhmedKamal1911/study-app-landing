import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => (
  <Box py={2} bgcolor="colorDark">
    <Container maxWidth={false}>
      <Typography color="colorOffWhite" variant="body1" textAlign="center">
        Histudy by{" "}
        <Typography
          position="relative"
          component={Link}
          color="white"
          sx={{
            textDecoration: "none",
            "&::before": {
              content: "''",
              transition: "0.3s",
              position: "absolute",
              height: "2px",
              width: "0%",
              backgroundColor: "white",
              right: "0",
              bottom: "-2px",
            },
            "&:hover::before": {
              left: "0",
              width: "100%",
            },
          }}
          to="/"
        >
          Rainbow-Themes.
        </Typography>{" "}
        © All rights reserved
      </Typography>
    </Container>

    {/*  <a href="http://localhost:3000/" target="_blank">
      Go to dashboard
</a>*/}
  </Box>
);

export default Footer;
