import { Box, Chip, Container, Typography, styled } from "@mui/material";

import { InfiniteSlider, SectionHeader } from ".";
import useThemeColorGradient from "../hooks/useThemeColorGradient";
import {
  ArrowCircleRight,
  AttachMoney,
  Attachment,
  Camera,
  CameraAlt,
  ChatBubble,
  Circle,
  Code,
  Collections,
  CopyAll,
  CreditCard,
  Description,
  Favorite,
  FlipCameraAndroid,
  FormatAlignCenter,
  KeyboardCommandKey,
  Layers,
  LiveTv,
  LocalPostOffice,
  Logout,
  MoreHoriz,
  People,
  Percent,
  PieChart,
  Public,
  Redeem,
  Search,
  SignalCellularAlt,
  Tag,
  Timer,
  ToggleOff,
  Twitter,
  Videocam,
  ViewInAr,
  ViewSidebar,
  Watch,
  Widgets,
  WorkspacePremium,
} from "@mui/icons-material";
const includedElements1 = [
  {
    name: "Call To Action",
    icon: <Logout />,
  },
  {
    name: "Counter",
    icon: <Tag />,
  },
  {
    name: "Categories",
    icon: <Widgets />,
  },
  {
    name: "Newsletter",
    icon: <LocalPostOffice />,
  },
  {
    name: "Team",
    icon: <People />,
  },
  {
    name: "Social",
    icon: <Twitter />,
  },
  {
    name: "Gallery",
    icon: <Collections />,
  },
  {
    name: "Pricing",
    icon: <AttachMoney />,
  },
  {
    name: "Progressbar",
    icon: <Percent />,
  },
  {
    name: "Testimonial",
    icon: <ChatBubble />,
  },
  {
    name: "Card",
    icon: <Layers />,
  },
  {
    name: "Badge",
    icon: <WorkspacePremium />,
  },
  {
    name: "Brand",
    icon: <Favorite />,
  },
];
const includedElements2 = [
  {
    name: "Language Switcher",
    icon: <Public />,
  },

  {
    name: "Offer Banner",
    icon: <Redeem />,
  },
  {
    name: "Video Popup",

    icon: <Videocam />,
  },
  {
    name: "Group Image",
    icon: <Camera />,
  },
  {
    name: "Fancy Image",
    icon: <CameraAlt />,
  },
  {
    name: "Flip Box",
    icon: <FlipCameraAndroid />,
  },
  {
    name: "Time Line",
    icon: <Timer />,
  },
  {
    name: "Circle Badge",
    icon: <Circle />,
  },
  {
    name: "Crousel Testimonial",
    icon: <Code />,
  },
  {
    name: "Creative Badge",
    icon: <ToggleOff />,
  },
  {
    name: "Animated Button",
    icon: <Attachment />,
  },
  {
    name: "Slider",
    icon: <ArrowCircleRight />,
  },
  {
    name: "Section Title",
    icon: <FormatAlignCenter />,
  },
];
const includedElements3 = [
  {
    name: "Exam preparation",
    icon: <Description />,
  },
  {
    name: "Modal",
    icon: <ViewInAr />,
  },
  {
    name: "Single Pricing",
    icon: <SignalCellularAlt />,
  },
  {
    name: "Pricing Switcher",
    icon: <CopyAll />,
  },
  {
    name: "Countdown Timer",
    icon: <Watch />,
  },
  {
    name: "Contact Form",
    icon: <MoreHoriz />,
  },
  {
    name: "Tuition & Fees Table",
    icon: <CreditCard />,
  },
  {
    name: "Radial Progress",
    icon: <PieChart />,
  },
  {
    name: "Offer Badge",
    icon: <Favorite />,
  },
  {
    name: "Paralax",
    icon: <KeyboardCommandKey />,
  },
  {
    name: "Advanced Search",
    icon: <Search />,
  },
  {
    name: "Content Box",
    icon: <LiveTv />,
  },
  {
    name: "SideBar",
    icon: <ViewSidebar />,
  },
];
const CustomChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.colorGray,
  backgroundColor: "white",
  padding: theme.spacing(4.5),

  borderRadius: "40px",
  fontSize: "25px",
  transition: "0.3s",
  userSelect: "none",
  "&:hover > *": {
    color: "white",
  },
  "&:hover": {
    backgroundColor: theme.palette.colorBlue,
    transform: "scale(1.1)",
  },
}));
const IncludedElementsSection = () => {
  const colorGradient1 = useThemeColorGradient("colorGradient1");
  return (
    <Box py={10}>
      <SectionHeader subtitle="YOU DON'T NEED ANY EXTERNAL PLUGINS.">
        <Typography
          variant="caption"
          fontWeight="bolder"
          fontSize="45px"
          className="gradient-text"
          sx={{ backgroundImage: colorGradient1 }}
        >
          100+
        </Typography>{" "}
        Elements included.
      </SectionHeader>
      <Container maxWidth="xl">
        <Box>
          <InfiniteSlider
            direction="rtl"
            pauseSlider={true}
            sideShadows
            speed={80}
            gap={5}
          >
            {includedElements1.map(({ icon, name }) => (
              <CustomChip
                key={name}
                icon={icon}
                label={name}
                className=" shadow-3"
              />
            ))}
          </InfiniteSlider>
          <InfiniteSlider pauseSlider={true} direction="ltr" speed={80} gap={5}>
            {includedElements2.map(({ icon, name }) => (
              <CustomChip
                key={name}
                icon={icon}
                label={name}
                className=" shadow-3"
              />
            ))}
          </InfiniteSlider>
          <InfiniteSlider direction="rtl" speed={80} gap={5}>
            {includedElements3.map(({ icon, name }) => (
              <CustomChip
                key={name}
                icon={icon}
                label={name}
                className="shadow-3"
              />
            ))}
          </InfiniteSlider>
        </Box>
        <Typography
          component="span"
          display="block"
          fontWeight="500"
          width="fit-content"
          marginInline="auto"
          mt={5}
          fontSize={12}
          sx={{
            opacity: "0.5",
          }}
          color="colorGray"
        >
          SAVE YOUR TIME AND MONEY BY USING READY ELEMENTS
        </Typography>
      </Container>
    </Box>
  );
};

export default IncludedElementsSection;
