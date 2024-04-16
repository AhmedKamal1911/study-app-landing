import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    colorGray: "#6b7385",
    colorBlue: "#2f57ef",
    colorPrimary: "#2F57EA",
    colorDark: "#192335",
    colorOffWhite: "#FFFFFFAB",
    colorGradient1: "linear-gradient(90deg, #2f57ef, #b966e7)",
    colorGradient2: `linear-gradient(to right, rgba(255, 255, 255, 0.15), rgba(251, 199, 226, 0.15), rgba(220, 217, 254, 0.15))`,
    colorGradient3: `linear-gradient(270deg, #9e77ff 0%, #4460ff 100%)`,
    colorGradient4: `linear-gradient(218.15deg, #b966e7 0%, #2f57ef 100%)`,
  },
});

export default theme;
