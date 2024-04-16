import { Typography } from "@mui/material";
import useThemeColorGradient from "../hooks/useThemeColorGradient";
import { useCallback, useEffect, useRef, useState } from "react";
const SlideAnimatedText = ({ slidedContentList, animationType = "slide" }) => {
  const colorGradient1 = useThemeColorGradient("colorGradient1");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [slideWrapperWidth, setSliderWrapperWidth] = useState(0);
  const textElementsRef = useRef([]);
  const textRefCallback = useCallback(
    (index) => (node) => {
      if (node) {
        textElementsRef.current[index] = node;
      }
    },
    []
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevTextIdx) => (prevTextIdx + 1) % slidedContentList.length
      );
    }, 2000);
    if (!textElementsRef.current.length) return;
    const observer = new ResizeObserver((resizeEntries) => {
      resizeEntries.forEach((resizeEntry) => {
        setSliderWrapperWidth(resizeEntry.contentRect.width);
      });
    });
    let biggestWidthElementIndex = 0;
    let biggestWidth = 0;
    textElementsRef.current.forEach((element, index) => {
      if (element.offsetWidth > biggestWidth) {
        biggestWidth = element.offsetWidth;
        biggestWidthElementIndex = index;
      }
    });
    observer.observe(textElementsRef.current[biggestWidthElementIndex]);
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [slidedContentList.length]);
  return (
    <Typography
      display="inline-block"
      fontSize={0}
      component="span"
      sx={{
        verticalAlign: "middle",
      }}
    >
      <Typography
        component="span"
        position="relative"
        display="inline-block"
        overflow="hidden"
        width={slideWrapperWidth}
        sx={{
          perspective: animationType === "zoom" ? "300px" : "none",
          "@keyframes slide-in": {
            "0%": {
              transform: "translateY(-100%)",
            },
            "60%": {
              transform: "translateY(10%)",
            },
            "100%": {
              transform: "translateY(0%)",
            },
          },
          "@keyframes slide-out": {
            "0%": {
              opacity: 0.5,
            },
            "60%": {
              transform: "translateY(120%)",
            },
            "100%": {
              opacity: 0,
              transform: "translateY(100%)",
            },
          },
          "@keyframes zoom-in": {
            to: {
              opacity: 0,
              transform: "translateZ(100px)",
            },
            from: {
              opacity: 1,
              transform: "translateZ(0)",
            },
          },
          "@keyframes zoom-out": {
            to: {
              opacity: 1,
              transform: "translateZ(0)",
            },
            from: {
              opacity: 0,
              transform: "translateZ(-100px)",
            },
          },
        }}
      >
        <Typography
          aria-hidden="true"
          fontSize={{ xs: 35, md: 55 }}
          variant="caption"
          component="span"
          fontWeight="bolder"
          whiteSpace="nowrap"
          sx={{
            visibility: "hidden",
          }}
        >
          H
        </Typography>
        {slidedContentList.map((text, index) => (
          <Typography
            ref={textRefCallback(index)}
            key={index}
            position="absolute"
            left={0}
            top={0}
            fontSize={{ xs: 35, md: 55 }}
            variant="caption"
            component="span"
            fontWeight="bolder"
            className="gradient-text"
            whiteSpace="nowrap"
            sx={{
              animation: `${
                currentTextIndex === index
                  ? `${animationType}-in`
                  : `${animationType}-out`
              } 0.6s ease forwards`,
              backgroundImage: colorGradient1,
            }}
          >
            {text}
          </Typography>
        ))}
      </Typography>
    </Typography>
  );
};

export default SlideAnimatedText;
