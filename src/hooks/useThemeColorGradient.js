import { useTheme } from "@emotion/react";

const useThemeColorGradient = (gradientColor = "colorGradient1") => {
  const { palette } = useTheme();
  return palette[gradientColor];
};

export default useThemeColorGradient;
