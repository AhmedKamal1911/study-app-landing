import { Box, Stack } from "@mui/material";
import { Children, cloneElement } from "react";

const InfiniteSlider = ({
  pauseSlider,
  disableShadows = false,
  children,
  direction = "rtl",
  speed = 25,
  gap = 5,
}) => {
  const childrenClone = Children.map(children, (child) =>
    cloneElement(child, {
      "aria-hidden": true,
    })
  );
  return (
    <Box
      sx={{
        overflow: "hidden",
        WebkitMaskImage: disableShadows
          ? ""
          : "linear-gradient(90deg,transparent, #fff 10%, #fff 80%,transparent)",
        "&:hover .slider__inner": {
          animationPlayState: pauseSlider ? "paused" : "running",
        },
      }}
    >
      <Stack
        className="slider__inner"
        py={2}
        direction="row"
        gap={gap}
        sx={{
          "@keyframes slide": {
            to: {
              transform: ({ spacing }) =>
                `translateX(calc(-50% - ${spacing(gap)} / 2))`,
            },
          },
          animation: `slide ${speed}s infinite ${
            direction === "rtl" ? "normal" : "reverse"
          } linear`,
          "& > *": {
            flexShrink: 0,
          },
        }}
        width="max-content"
      >
        {children}
        {childrenClone}
      </Stack>
    </Box>
  );
};

export default InfiniteSlider;
