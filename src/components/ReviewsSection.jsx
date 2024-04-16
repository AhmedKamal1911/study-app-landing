import { Box, Button, Stack, Typography } from "@mui/material";
import InfiniteSlider from "./InfiniteSlider";
import { ReviewBox, SectionHeader, SlideAnimatedText } from ".";
import { East } from "@mui/icons-material";
import lineShape from "../assets/images/lineshape.png";
const testimonialsList = [
  {
    id: 1,
    text: "<b>The design Quality is perfect!</b> Customer Support is the best so far. Thank you!",
    user: "stepahnie prungne",
  },
  {
    id: 2,
    text: "I needed support on a issue to install the theme demo, the CS team is super efficient, they <b>fixed the issue in few hours. Thank you!</b>",
    user: "hamid",
  },
  {
    id: 3,
    text: "The theme itself suits my needs, but the support is the superstar that earns this theme and the team behind <b>it a 5 stars rating. Kudos!</b>",
    user: "ziad",
  },
  {
    id: 4,
    text: "<b>Awesome Customer support.</b> Fixed issues in less than 24 Hours. Very professional and prompt.",
    user: "sayed",
  },
  {
    id: 5,
    text: "This theme is beautiful, well crafted elements and the support is top notch! This team deserve everything! <b>I recommend this 100%.</b>",
    user: "hamed",
  },
  {
    id: 6,
    text: "<b>Great support,</b> we have an issue with the theme and they solve it in the same day!! Thanks so much!!",
    user: "mohamed",
  },
  {
    id: 7,
    text: "A really great theme and a great design at a low price. <b>All in all Excellent.</b> Best. Best wishes for rainbow team.",
    user: "ahmed",
  },
  {
    id: 8,
    text: "The design Quality is perfect! Customer Support is the best so far. Thank you!",
    user: "medhat",
  },
  {
    id: 9,
    text: "I have zero experience with web design and found this template super easy to use. Very helpful support team too.",
    user: "ismael",
  },
  {
    id: 10,
    text: "They assist me very well and did everything I asked ! Quick answer to So yes <b>I recommand :)</b>",
    user: "ibrahim",
  },
  {
    id: 11,
    text: "they was so kindly and replay so fast and they fixed all what i want, thank you so much !",
    user: "hossam",
  },
  {
    id: 12,
    text: "They are really amazing, the customization is really dope, and Support is really awesome",
    user: "mitchel",
  },
  {
    id: 13,
    text: "One of the best support and clean code on codecanyon! Highly recommended!",
    user: "max",
  },
  {
    id: 14,
    text: "Responsive and competent support. They perfectly answer the questions of use and the various problems that one can have. A big thank-you !",
    user: "roy",
  },
  {
    id: 15,
    text: "This theme is beautiful, well crafted elements and the support is top notch! This team deserve everything!<b>I recommend this 100%.</b>",
    user: "sara",
  },
  {
    id: 16,
    text: "One of the best support and clean code on codecanyon! Highly recommended!",
    user: "max",
  },
  {
    id: 17,
    text: "Responsive and competent support. They perfectly answer the questions of use and the various problems that one can have. A big thank-you !",
    user: "roy",
  },
  {
    id: 18,
    text: "This theme is beautiful, well crafted elements and the support is top notch! This team deserve everything!<b>I recommend this 100%.</b>",
    user: "sara",
  },
];
const ReviewsSection = () => {
  return (
    <Box
      id="reviews"
      position="relative"
      sx={{
        "&::before": {
          position: "absolute",
          content: "''",
          height: "70%",
          width: "100%",
          zIndex: 2,
          left: 0,
          bottom: "-5px",
          background: "linear-gradient(rgba(0, 0, 0, 0) 10%, #192335 80%)",
        },
      }}
    >
      <Box maxWidth="700px" marginInline="auto" px={1}>
        <SectionHeader subtitle="YOU CAN CUSTOMIZE EVERYTHING">
          What People Are Saying About{" "}
          <SlideAnimatedText
            animationType="zoom"
            slidedContentList={["Skilled Instructors.", "Valuable Courses."]}
          />
        </SectionHeader>
      </Box>

      <Stack direction="column" gap={1}>
        <Box>
          {[...Array(3).keys()].map((value) => (
            <InfiniteSlider
              gap={6}
              speed={120}
              direction={value === 1 ? "ltr" : "rtl"}
              disableShadows
              key={value}
            >
              {testimonialsList
                .slice(6 * value, 6 * (value + 1))
                .map((testimonial, index) => (
                  <ReviewBox
                    key={testimonial.id}
                    user={testimonial.user}
                    gradient={index % 2 === 0}
                  >
                    {testimonial.text}
                  </ReviewBox>
                ))}
            </InfiniteSlider>
          ))}
        </Box>
      </Stack>
      <Box
        position="absolute"
        textAlign="center"
        left="50%"
        bottom="100px"
        zIndex={3}
        sx={{ transform: "translateX(-50%)" }}
      >
        <Typography
          fontSize={{ xs: "25px", md: "32px" }}
          maxWidth="500px"
          variant="h4"
          color="white"
          fontWeight="bold"
        >
          Our Fantastic Envato Customers Reviews
        </Typography>
        <Button
          sx={{
            display: "flex",
            marginInline: "auto",
            alignItems: "center",
            textAlign: "center",
            my: 3,
            p: { xs: 1.5, md: 5 },
            gap: 1,
            backgroundImage:
              "linear-gradient(to right, #2F57EA,#2F57EA,#b966e7, #b966e7)",
            backgroundSize: "300% 100%",
            color: "white",
            fontWeight: "bold",
            transition: "all 0.6s ease-in-out",
            fontSize: { xs: "17px", md: "27px" },
            textTransform: "capitalize",
            "&:hover": {
              backgroundPosition: "100% -100%",
            },
            "&:hover .left-arrow": {
              opacity: "1",
              transform: "translateX(10px)",
            },
            "&:hover .right-arrow": {
              opacity: "0",
              transform: "translateX(10px)",
            },
            "&:hover .btn-text": {
              transform: "translateX(15px)",
            },
          }}
        >
          <East
            className="left-arrow"
            sx={{
              fontSize: "18px",
              opacity: "0",
              transition: "0.5",
            }}
          />
          <span
            className="btn-text"
            style={{
              transition:
                "transform 0.6s 0.125s cubic-bezier(0.1, 0.75, 0.25, 1)",
            }}
          >
            Read More Reviews
          </span>
          <East
            className="right-arrow"
            sx={{
              fontSize: "18px",
              transition: "0.3s ",
            }}
          />
        </Button>
        <Typography
          fontWeight="bold"
          maxWidth="200px"
          marginInline="auto"
          display="block"
          fontSize={14}
          color="white"
          sx={{ opacity: "0.5" }}
          variant="caption"
        >
          4.85 AVERAGE BASED ON 300+ RATINGS.
        </Typography>
      </Box>
      <Box
        position="absolute"
        left="50%"
        bottom={0}
        zIndex={9}
        sx={{ transform: "translateX(-50%)" }}
      >
        <img style={{ width: "100%" }} src={lineShape} alt="" />
      </Box>
    </Box>
  );
};

export default ReviewsSection;
