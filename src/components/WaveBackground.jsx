import { Box } from "@mui/material";
import waveImg from "../assets/images/wave.svg";
const WaveBackground = () => {
  return (
    <Box
      position="absolute"
      top="0px"
      zIndex={-1}
      sx={{ opacity: "0.5" }}
      left="0px"
    >
      <img style={{ width: "100%" }} src={waveImg} alt="" />
    </Box>
  );
};

export default WaveBackground;
