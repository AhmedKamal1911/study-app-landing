import Lottie from "lottie-react";
import web from "../assets/lotties-animations/web.json";

import { Box, Stack } from "@mui/material";
const ScreenLoader = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Stack alignItems="center" justifyContent="center">
        <Box width={{ xs: "80%", md: "55%" }}>
          <Lottie
            style={{
              width: "100%%",
            }}
            animationData={web}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ScreenLoader;
