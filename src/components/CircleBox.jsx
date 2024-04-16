import { Box } from "@mui/material";

const CircleBox = ({ direction }) => {
  return (
    <Box
      zIndex={1}
      position="absolute"
      top={96}
      right={direction === "right" ? -100 : undefined}
      left={direction === "left" ? -100 : undefined}
      sx={{
        width: "260px",
        height: "260px",
        borderRadius: "50%",

        background:
          "linear-gradient(200deg, #e4e2fa 100%, rgba(57, 78, 244, 0.03) 80%)",

        "&::before": {
          content: "''",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "white",
        },
      }}
    ></Box>
  );
};

export default CircleBox;
