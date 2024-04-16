import { Box, Container, Grid, Stack, Typography, Rating } from "@mui/material";
import { Star } from "@mui/icons-material";
import mainLandingImg from "../assets/images/landing-main.png";
import backgroundImg from "../assets/images/landing-background.png";
import landingBottomShape from "../assets/images/bottom-shape.svg";
import leftLandingImg from "../assets/images/left-shape.png";
import rightLandingImg from "../assets/images/right-shape.png";
import topLandingImg from "../assets/images/landing-up-img.png";
import smallImgOne from "../assets/images/back-img1.png";
import smallImgTwo from "../assets/images/back-img2.png";
import smallImgThree from "../assets/images/back-img3.png";
import smallImgFour from "../assets/images/back-img4.png";
import { FeatureBox, SlideAnimatedText } from ".";
import { featuresList } from "../utils/constants";
import { useState } from "react";
function clamp(valueToBeClamped, minValue, maxValue) {
  return Math.max(minValue, Math.min(valueToBeClamped, maxValue));
}
const LandingSection = () => {
  const [movement, setMovement] = useState({
    movementX: 0,
    movementY: 0,
  });

  return (
    <Box
      onMouseMove={(e) => {
        setMovement({
          ...movement,
          movementX: e.movementX,
          movementY: e.movementY,
        });
      }}
      onMouseLeave={() =>
        setMovement({
          ...movement,
          movementX: 0,
          movementY: 0,
        })
      }
      overflow="hidden"
      pt={15}
      pb="100px"
      position="relative"
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        position="absolute"
        fontSize="0"
        bottom="-2px"
        left="0"
        right="0"
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        zIndex="1"
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src={landingBottomShape}
        />
      </Box>
      <Box position="absolute" left={120} top={0}>
        <img src={topLandingImg} alt="" />
      </Box>
      <Container maxWidth="xl">
        <Stack direction="column" gap={10}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={2}
            alignItems="center"
          >
            <Stack direction="column" flex={1} sx={{ order: { xs: 2, md: 0 } }}>
              <Stack>
                <Box data-aos="fade-down" data-aos-duration="1000">
                  <Rating
                    name="text-feedback"
                    value={5}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Box>
                <Typography
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  fontWeight="bold"
                  letterSpacing={1.5}
                >
                  12500+ TRUST CUSTOMER
                </Typography>
              </Stack>
              <Stack direction="column">
                <Typography
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  fontWeight="bold"
                  fontSize={{ xs: 40, md: 75 }}
                  variant="h2"
                  color="colorDark"
                  maxWidth="600px"
                  my={3}
                >
                  Have your dream site in minutes for{" "}
                  <SlideAnimatedText
                    slidedContentList={[
                      "Online Course.",
                      "Like Udemy.",
                      "School.",
                      "University.",
                      "High School.",
                      "Kindergarden.",
                    ]}
                  />
                </Typography>
                <Typography
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  variant="body1"
                  fontSize={18}
                  color="colorGray"
                >
                  The most{" "}
                  <Typography
                    variant="caption"
                    fontSize="inherit"
                    fontWeight={"bold"}
                    sx={{
                      position: "relative",
                      "&::after": {
                        content: "''",
                        width: "100%",
                        height: "2px",
                        backgroundColor: "colorGray",
                        position: "absolute",
                        bottom: "-5px",
                        left: "0",
                        opacity: "0.3",
                      },
                    }}
                  >
                    powerful
                  </Typography>{" "}
                  yet the{" "}
                  <Typography
                    variant="caption"
                    fontSize="inherit"
                    fontWeight={"bold"}
                    sx={{
                      position: "relative",
                      "&::after": {
                        content: "''",
                        width: "100%",
                        height: "2px",
                        backgroundColor: "colorGray",
                        position: "absolute",
                        bottom: "0px",
                        left: "0",
                        opacity: "0.3",
                      },
                    }}
                  >
                    easiest
                  </Typography>{" "}
                  template ever.
                </Typography>
              </Stack>
            </Stack>
            <Box flex={1}>
              <Box position="relative">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  style={{
                    maxWidth: "100%",
                    position: "relative",
                    zIndex: "9",
                  }}
                  src={mainLandingImg}
                  alt="main landingimage"
                />
                <Box>
                  {/* BOX 1 */}
                  <Box
                    sx={{
                      transform: "translate3d(0px, 0px, 0px) rotate(0.0050deg)",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      position: "absolute",
                      pointerEvents: "none",
                      left: { xs: "50px", md: "100px" },
                      top: "0px",
                    }}
                  >
                    <span
                      style={{
                        transform: `translate3d(${clamp(
                          -movement.movementX,
                          -12,
                          12
                        )}px,${clamp(-movement.movementY, -10, 10)}px, 0px)`,
                        transition: "0.3s linear",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        position: "relative",
                        display: "block",
                        left: "0px",
                        top: "0px",
                      }}
                    >
                      <img
                        style={{ maxWidth: "100%" }}
                        src={smallImgOne}
                        alt=""
                      />
                    </span>
                  </Box>
                  {/* End Box 1 */}
                  {/* BOX 2 */}
                  <Box
                    sx={{
                      transform: "translate3d(0px, 0px, 0px) rotate(0.0050deg)",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      position: "absolute",
                      pointerEvents: "none",
                      right: "0",
                      top: "0",
                    }}
                  >
                    <span
                      style={{
                        transform: `translate3d(${clamp(
                          movement.movementX,
                          -15,
                          15
                        )}px,${clamp(movement.movementY, -15, 15)}px, 0px)`,
                        transition: "0.3s linear",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        position: "relative",
                        display: "block",
                        left: "0px",
                        top: "0px",
                      }}
                    >
                      <img
                        style={{ maxWidth: "100%" }}
                        src={smallImgTwo}
                        alt=""
                      />
                    </span>
                  </Box>
                  {/* End Box 2 */}
                  {/* Box 3 */}
                  <Box
                    sx={{
                      transform: "translate3d(0px, 0px, 0px) rotate(0.0050deg)",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      position: "absolute",
                      pointerEvents: "none",
                      left: { xs: "0px", md: "-100px" },
                      bottom: { xs: "0px", md: "100px" },
                    }}
                  >
                    <span
                      style={{
                        transform: `translate3d(${clamp(
                          -movement.movementX,
                          -34,
                          34
                        )}px,${clamp(-movement.movementY, -37, 37)}px, 0px)`,
                        transition: "0.3s linear",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        position: "relative",
                        display: "block",
                        left: "0px",
                        top: "0px",
                      }}
                    >
                      <img
                        style={{ maxWidth: "100%" }}
                        src={smallImgThree}
                        alt=""
                      />
                    </span>
                  </Box>
                  {/* End Box 3 */}
                  {/* BOX 4 */}
                  <Box
                    sx={{
                      transform: "translate3d(0px, 0px, 0px) rotate(0.0050deg)",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      position: "absolute",
                      pointerEvents: "none",
                      right: "20px",
                      bottom: "-130px",
                    }}
                  >
                    <span
                      style={{
                        transform: `translate3d(${clamp(
                          movement.movementX,
                          -47,
                          47
                        )}px,${clamp(movement.movementY, -47, 47)}px, 0px)`,
                        transition: "0.3s linear",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        position: "relative",
                        display: "block",
                        left: "0px",
                        top: "0px",
                      }}
                    >
                      <img
                        style={{ maxWidth: "100%" }}
                        src={smallImgFour}
                        alt=""
                      />
                    </span>
                  </Box>
                  {/* End Box 4 */}
                </Box>
              </Box>
            </Box>
          </Stack>
          <Box
            sx={{
              backdropFilter: "blur(15px)",
              backgroundImage:
                " linear-gradient(218.15deg, #b966e763 0%, #2f57ef4a 100%)",
            }}
            textAlign={{ xs: "center", md: "start" }}
            bgcolor={"rgba(39, 0, 255, 0.5)"}
            borderRadius={2}
            position="relative"
            zIndex={2}
          >
            <Grid container>
              {featuresList.map((feature, index) => (
                <Grid
                  data-aos={
                    index === 0
                      ? "fade-right"
                      : index === 3
                      ? "fade-left"
                      : index === 2
                      ? "fade-up"
                      : "fade-down"
                  }
                  data-aos-duration="1000"
                  key={feature.title}
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  sx={{
                    "&:not(:last-child)": {
                      borderRight: "1px solid #ffffff1a",
                    },
                    "& > *": {
                      height: "100%",
                    },
                  }}
                >
                  <FeatureBox
                    img={feature.img}
                    title={feature.title}
                    desc={feature.desc}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
      <Stack
        direction="row"
        position="absolute"
        left={0}
        right={0}
        bottom={-50}
      >
        <Box>
          <img
            style={{ position: "absolute", left: "-250px", bottom: "0" }}
            src={leftLandingImg}
            alt=""
          />
        </Box>
        <Box style={{ position: "absolute", bottom: "300px", right: "0" }}>
          <img src={rightLandingImg} alt="" width="100%" />
        </Box>
      </Stack>
    </Box>
  );
};
export default LandingSection;
