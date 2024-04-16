import { Box } from "@mui/material";
import ShowMoreToggler from "./ShowMoreToggler";
import { useEffect, useRef, useState } from "react";

const ShowMoreWrapper = ({ children, maxHeight = 352 }) => {
  const [showMore, setShowMore] = useState(false);
  const [showToggler, setShowToggler] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    if (!wrapperRef.current) return;
    const wrapperContentHeight = wrapperRef.current.scrollHeight;
    const wrapperHeight = wrapperRef.current.clientHeight;
    setShowToggler(wrapperContentHeight > wrapperHeight);
  }, []);

  function handleShowMore() {
    setShowMore((prevShowMore) => !prevShowMore);
  }
  return (
    <>
      <Box
        ref={wrapperRef}
        maxHeight={showMore ? null : maxHeight}
        overflow="hidden"
      >
        {children}
      </Box>
      {showToggler && (
        <ShowMoreToggler showMore={showMore} handleShowMore={handleShowMore} />
      )}
    </>
  );
};

export default ShowMoreWrapper;
