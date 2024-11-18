import { Box, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { useRouteError } from "react-router-dom";
import badRequestAnimation from "../assets/lotties-animations/bad-request.json";
import withHelmet from "../components/withHelmet";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Stack height="87.9vh" justifyContent="center" alignItems="center" px={2}>
      <Box>
        <Lottie
          style={{ height: "550px" }}
          animationData={badRequestAnimation}
        />
        <Typography
          textTransform="capitalize"
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          color="Purple"
          mt={2}
          fontSize={{ xs: "30px", md: "45px" }}
        >
          {error?.response?.data?.message
            ? error?.response?.data?.message
            : error.message}
        </Typography>
      </Box>
    </Stack>
  );
};
const Error = withHelmet(ErrorPage, "Error");
export default Error;
