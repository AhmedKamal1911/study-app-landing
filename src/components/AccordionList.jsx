import { Box } from "@mui/material";
import QuestionsAccordion from "./QuestionsAccordion";
import { useState } from "react";

const AccordionList = ({ questions }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
  function setAccordionIndex(index) {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? -1 : index));
  }
  return (
    <Box>
      {questions.map((question, index) => (
        <QuestionsAccordion
          {...question}
          index={index}
          currentSelectedAccordionIndex={openAccordionIndex}
          key={index}
          onClick={() => setAccordionIndex(index)}
        />
      ))}
    </Box>
  );
};

export default AccordionList;
