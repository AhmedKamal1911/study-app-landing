import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import { useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useDimensions } from "../hooks/use-dimensions";
import { NavList } from "./Navbar";
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 250px 37px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1541px)");
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    !isLargeScreen && (
      <>
        <ToggleButton
          open={open}
          handleClick={() => setOpen((prevOpen) => !prevOpen)}
        />
        <motion.div
          custom={height}
          ref={containerRef}
          initial={false}
          animate={open ? "open" : "closed"}
          className={open ? "shadow-1" : ""}
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            zIndex: 5000,
            pointerEvents: open ? "auto" : "none",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
              height: "100vh",
              background: "white",
            }}
            variants={variants}
          >
            <NavList direction="column" showLoginLink />
          </motion.div>
        </motion.div>
      </>
    )
  );
};

export default Sidebar;
