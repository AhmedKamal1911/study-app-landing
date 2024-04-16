import { Box, Typography } from "@mui/material";
const ContactBox = ({ contactIcon, contactTitle, contactDetails }) => {
  return (
    <Box bgcolor="white" p={4} borderRadius="8px" flex={1} className="shadow-1">
      <Box>{contactIcon}</Box>
      <Typography my={1.1} variant="h5" fontWeight="bold">
        {contactTitle}
      </Typography>
      <Box>
        {contactDetails.map(({ detail }, index) => (
          <Typography
            variant="h6"
            key={index}
            fontSize="19px"
            color="colorGray"
          >
            {detail}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ContactBox;
