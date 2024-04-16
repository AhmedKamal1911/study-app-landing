import { Box, Button, Container, Typography } from "@mui/material";

import { AccordionList, SectionHeader } from ".";
import { East } from "@mui/icons-material";
import persons from "../assets/images/persons.png";
import nextLevelBackground from "../assets/images/next-level.png";
import linesImg from "../assets/images/lines.png";

const questionList = [
  {
    question: "what is histudy? how does it work?",
    answer:
      "Education HTML Template – Histudy is made for Education Website, Course School, Courses Hub, College, Academy, University, School, Kindergarten, Online School, Classic Lms, University Status, Instructor Portfolio, Language Academy, Gym Coaching, Online Course, Single Course, Marketplace, University Classic, Home Elegant, Home Technology etc.",
  },
  {
    question: "how can i get the customer support?",
    answer:
      "After purchasing the product need you any support you can share with us with create support ticket here: Support Center Our support team will contact with you soon",
  },
  {
    question: "can i get update regularly and For how long do i get updates?",
    answer:
      "Yes, We will get update the Histudy. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update.",
  },
  {
    question: "can i change elements as i like?",
    answer:
      "Yes, You can change any Elements as you like. And By the way you can build your website which you are choose",
  },
  {
    question: "can i build a complete project with this remplate?",
    answer:
      "Yes, Why not. You can build a project and complete website as you are like.More component are available include in this templete. And you can be use it following documentation.",
  },
  {
    question: "do you have an online documentation?",
    answer: "Yes, please go to our online documentation via click here.",
  },
  {
    question: "how can i remove unwanted plugins?",
    answer:
      "All third-party plugin JS files are located in src/assets/js/vendor and their CSS files are in src/assets/css/vendor. Just remove unwanted vendor JS / CSS files from vendor folders and then remove unwanted functions from src/assets/js/main.js.",
  },
  {
    question: "how can i remove unwanted CSS?",
    answer:
      "Bootstrap SCSS imports are located in src/assets/css/vendor/bootstrap.min.css and template SCSS imports are in src/assets/scss/style.scss. Remove or comment any unwanted import and recompile.",
  },
];
const QuestionsSection = () => {
  return (
    <Box id="questions">
      <Box py={10} pb={30} bgcolor={"colorDark"}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={8}>
            <Box mb={2} data-aos="fade-down" data-aos-duration="500">
              <img src={persons} alt="" />
            </Box>
            <SectionHeader
              subtitle={"CHECK OUT OUR FAQ SECTION TO SEE IF WE CAN HELP."}
              subTitleColor="#b966e7"
            ></SectionHeader>
            <Typography
              data-aos="fade-up"
              data-aos-duration="800"
              variant="h3"
              fontWeight="bold"
              fontSize={{ xs: 30, md: 40 }}
              sx={{ textTransform: "capitalize" }}
              color={"colorOffWhite"}
            >
              Do you have any questions
            </Typography>
          </Box>
          <Box>
            <AccordionList questions={questionList} />
          </Box>
        </Container>
      </Box>

      <Box
        data-aos="fade-right"
        data-aos-duration="600"
        marginInline="auto"
        position="relative"
        mt={-22}
        width={"85%"}
        borderRadius="16px"
        fontSize={0}
        p={{ xs: "30px", lg: "80px", xl: "110px" }}
        overflow="hidden"
        sx={{
          backgroundColor: "#273041",
        }}
      >
        <Box zIndex={9} position="relative">
          <Typography
            data-aos="fade-right"
            data-aos-duration="800"
            mb={5}
            maxWidth={{ xs: "100%", md: "32%" }}
            fontWeight="bold"
            fontSize={{ xs: "30px", md: "35px", lg: "45px" }}
            variant="h3"
            color="white"
          >
            Take your website to the next level!
          </Typography>
          <Button
            data-aos="fade-left"
            data-aos-duration="800"
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              my: 3,
              p: 2.5,
              gap: 1,
              backgroundImage:
                "linear-gradient(to right, #2F57EA,#2F57EA,#b966e7, #b966e7)",
              backgroundSize: "300% 100%",
              color: "white",
              fontWeight: "bold",
              transition: "all 0.8s ease-in-out",

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
              purchase now
            </span>
            <East
              className="right-arrow"
              sx={{
                fontSize: "18px",
                transition: "0.3s ",
              }}
            />
          </Button>
          <Typography variant="h6" color="colorOffWhite" fontSize="15px">
            <span style={{ fontWeight: "bold" }}>One-time</span> purchase. No
            additional fees or subscriptions.
          </Typography>
        </Box>
        <Box width="85%" position="absolute" left={0} bottom={0}>
          <img style={{ width: "100%" }} src={linesImg} alt="" />
        </Box>
        <Box
          position="absolute"
          right={{ md: "-400px", lg: "-200px" }}
          top={0}
          bottom={0}
          display={{ xs: "none", md: "block" }}
        >
          <img style={{ width: "105%" }} src={nextLevelBackground} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionsSection;
