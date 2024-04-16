import { Stack } from "@mui/material";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/lotties-animations/not-found.json";
import withHelmet from "../components/withHelmet";
const NotFoundPage = () => {
  return (
    <Stack height="87.9vh" justifyContent="center" alignItems="center" px={2}>
      <Lottie style={{ height: "800px" }} animationData={notFoundAnimation} />
    </Stack>
  );
};
const NotFound = withHelmet(NotFoundPage, "Not Found");
export default NotFound;
