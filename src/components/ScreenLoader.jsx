import Lottie from "lottie-react";
import web from "../assets/lotties-animations/web.json";

import { Stack } from "@mui/material";
const ScreenLoader = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Stack alignItems="center" justifyContent="center">
        <Stack
          justifyContent="center"
          alignItems="center"
          width={{ xs: "80%", md: "55%" }}
        >
          <Lottie
            style={{
              width: "350px",
            }}
            animationData={web}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ScreenLoader;
