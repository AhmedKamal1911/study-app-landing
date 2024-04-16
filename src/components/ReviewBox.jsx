import { Star } from "@mui/icons-material";
import { Box, Rating, Stack, Typography } from "@mui/material";
import clientImg from "../assets/images/client-img.png";
import useThemeColorGradient from "../hooks/useThemeColorGradient";

const ReviewBox = ({ gradient = true, children, user }) => {
  const colorGradient4 = useThemeColorGradient("colorGradient4");
  return (
    <Box
      py={10}
      px={4}
      flex={1}
      textAlign="center"
      borderRadius="6px"
      sx={{ background: gradient ? colorGradient4 : "white" }}
      className="shadow-3"
    >
      <Box mb={1.5}>
        <Rating
          name="text-feedback"
          value={5}
          readOnly
          precision={0.5}
          emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Box>
      <Typography
        mb={2}
        display="block"
        maxWidth="440px"
        variant="caption"
        fontSize="19px"
        color={gradient ? "white" : "colorGray"}
        dangerouslySetInnerHTML={{ __html: children }}
      ></Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <Box border="1px solid #c5c5c5" borderRadius="50%">
          <Box
            overflow="hidden"
            height="35px"
            border="2px solid white"
            borderRadius="50%"
            minWidth="35px"
          >
            <img style={{ width: "35px" }} src={clientImg} alt="" />
          </Box>
        </Box>
        <Typography
          variant="body1"
          color={gradient ? "colorOffWhite" : "colorDark"}
          fontWeight="bold"
          fontSize="16px"
        >
          {user}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ReviewBox;
