import { Box, Stack, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const QuestionsAccordion = ({
  question,
  answer,
  onClick,
  index,
  currentSelectedAccordionIndex,
}) => {
  return (
    <Box>
      <Stack
        gap={1}
        onClick={() => onClick()}
        flexDirection="row"
        py={2}
        sx={{
          cursor: "pointer",
          justifyContent: "space-between",
          borderBottom: "2px solid #e6e3f14f",
        }}
      >
        <Typography
          color={
            index === currentSelectedAccordionIndex ? "white" : "colorOffWhite"
          }
          variant="h6"
          fontSize={{ xs: 16, md: 20 }}
          textTransform="capitalize"
        >
          {question}
        </Typography>
        {index === currentSelectedAccordionIndex ? (
          <RemoveIcon sx={{ color: "colorOffWhite", fontSize: "20px" }} />
        ) : (
          <AddIcon sx={{ color: "colorOffWhite", fontSize: "20px" }} />
        )}
      </Stack>
      <Box
        sx={{
          display: "grid",

          transition: "0.3s all ease-in-out",

          gridTemplateRows:
            index === currentSelectedAccordionIndex ? "1fr" : "0fr",
        }}
      >
        <Typography
          sx={{
            overflow: "hidden",
            padding: "20px 20px 0px 0px",
            color: "colorOffWhite",
            fontSize: "18px",
          }}
        >
          {answer}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuestionsAccordion;
