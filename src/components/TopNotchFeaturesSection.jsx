import { Box, Container, Stack, Typography } from "@mui/material";
import { NotchFeatureBox, SectionHeader } from ".";
import useThemeColorGradient from "../hooks/useThemeColorGradient";
import notchImg1 from "../assets/images/top-notch1.png";
import notchImg2 from "../assets/images/top-notch2.png";
import notchImg3 from "../assets/images/top-notch3.png";
import notchImg4 from "../assets/images/top-notch4.jpg";
import notchImg5 from "../assets/images/top-notch5.png";
import notchImg6 from "../assets/images/top-notch6.png";
import notchImg7 from "../assets/images/top-notch7.png";
import notchImg8 from "../assets/images/top-notch8.png";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const TopNotchFeaturesSection = () => {
  const colorGradient1 = useThemeColorGradient("colorGradient1");
  // TODO create array and dont repeat ur self
  return (
    <Box py={12}>
      <Box sx={{ px: 2, mb: 10 }}>
        <SectionHeader subtitle={"TOP-NOTCH FEATURES"} subTitleColor="#DB7093">
          <Typography
            variant="caption"
            fontWeight="bold"
            fontSize="inherit"
            className="gradient-text"
            sx={{ backgroundImage: colorGradient1 }}
          >
            Everything
          </Typography>{" "}
          you need to succeed
          <Typography
            mt={2}
            color="colorGray"
            fontSize={20}
            marginInline="auto"
            maxWidth="700px"
            variant="body2"
            textAlign="center"
          >
            Histudy comes with interactive design tools and features that could
            leave you feeling like a pro after just a few clicks.
          </Typography>
        </SectionHeader>
      </Box>
      <Container maxWidth={"xl"}>
        <Box>
          <Grid container justifyContent="center" spacing={{ xs: 3, md: 5 }}>
            {/* Row 1 */}
            <Grid
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <NotchFeatureBox
                order={1}
                featureImg={notchImg1}
                desc={
                  "A complete education package for build any type of education website."
                }
                descColor={"#ffffffd5"}
                boxBgColor={"linear-gradient(90deg, #8DA9FC 0%, #B48DD5 100%)"}
              >
                <Typography
                  component={"span"}
                  style={{
                    textTransform: "capitalize",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  complete education package.
                </Typography>
              </NotchFeatureBox>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <NotchFeatureBox
                featureImg={notchImg2}
                desc={
                  "Have a lots of course layout options for creating a online education website."
                }
                descColor={"colorGray"}
                boxBgColor={
                  "linear-gradient(180deg, #EEDEFD 0%, #FFFFFF 100%) !important"
                }
              >
                <Typography
                  variant="caption"
                  component={"span"}
                  sx={{
                    textTransform: "capitalize",
                    color: "colorDark",
                    fontWeight: "bold",
                    fontSize: "18px",
                    mr: "5px",
                  }}
                >
                  Amazing Courses
                </Typography>
              </NotchFeatureBox>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <NotchFeatureBox
                featureImg={notchImg3}
                desc={
                  "The tamplate has Sass available for css. You can Change css by sass."
                }
                descColor={"colorGray"}
                boxBgColor={
                  "linear-gradient(180deg, #EEDEFD 0%, #FFFFFF 100%) !important"
                }
              >
                <Typography
                  variant="caption"
                  component={"span"}
                  sx={{
                    textTransform: "capitalize",
                    color: "colorDark",
                    fontWeight: "bold",
                    fontSize: "18px",
                    mr: "5px",
                  }}
                >
                  Sass Available.
                </Typography>
              </NotchFeatureBox>
            </Grid>
            {/* Row 2 */}
            <Grid
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <NotchFeatureBox
                featureImg={notchImg4}
                desc={
                  "Have a lots of course layout options for creating a online education website."
                }
                descColor={"#ffffffd5"}
                boxBgColor={"#111113"}
              >
                <Typography
                  variant="caption"
                  component={"span"}
                  sx={{
                    textTransform: "capitalize",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    mr: "5px",
                  }}
                >
                  Amazing Courses
                </Typography>
              </NotchFeatureBox>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={8}
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                flex={3}
                className="shadow-3"
                borderRadius={"8px"}
                alignItems="center"
                height="100%"
              >
                <Box p={{ xs: 3, md: 8 }} flex={1}>
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    fontSize={{ xs: "25px", md: "35px" }}
                    maxWidth="300px"
                    mb={2}
                    className="gradient-text"
                    sx={{ backgroundImage: colorGradient1, textWrap: "wrap" }}
                  >
                    Fast Loading Speed.
                  </Typography>
                  <Typography
                    maxWidth="465px"
                    fontSize="18px"
                    color="colorGray"
                  >
                    Histudy is faster loading speed. Histudy create your
                    template so much faster.
                  </Typography>
                </Box>
                <Box fontSize={0} textAlign="right">
                  <img style={{ maxWidth: "100%" }} src={notchImg5} alt="" />
                </Box>
              </Stack>
            </Grid>
            {/* Row 3 */}
            <Grid
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <NotchFeatureBox
                featureImg={notchImg6}
                desc={
                  "Have a lots of course layout options for creating a online education website."
                }
                descColor={"colorGray"}
                boxBgColor={
                  "linear-gradient(180deg, #EEDEFD 0%, #FFFFFF 100%) !important"
                }
              >
                <Typography
                  variant="caption"
                  component={"span"}
                  sx={{
                    textTransform: "capitalize",
                    color: "colorDark",
                    fontWeight: "bold",
                    fontSize: "18px",
                    mr: "5px",
                  }}
                >
                  Amazing Courses
                </Typography>
              </NotchFeatureBox>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <NotchFeatureBox
                order={1}
                featureImg={notchImg7}
                desc={
                  "Have a lots of course layout options for creating a online education website."
                }
                descColor={"#ffffffd5"}
                boxBgColor={"linear-gradient(180deg, #6827FF 0%, #E3F0FF 100%)"}
              >
                <Typography
                  variant="caption"
                  component={"span"}
                  sx={{
                    textTransform: "capitalize",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    mr: "5px",
                  }}
                >
                  Amazing Courses
                </Typography>
              </NotchFeatureBox>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <NotchFeatureBox
                featureImg={notchImg8}
                desc={
                  "Have a lots of course layout options for creating a online education website."
                }
                descColor={"#ffffffd5"}
                boxBgColor={"#3B3B46"}
              >
                <Typography
                  variant="caption"
                  component={"span"}
                  sx={{
                    textTransform: "capitalize",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    mr: "5px",
                  }}
                >
                  Amazing Courses
                </Typography>
              </NotchFeatureBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TopNotchFeaturesSection;
