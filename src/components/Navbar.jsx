import { Box, Button, Container, Stack, useMediaQuery } from "@mui/material";
import logoImg from "../assets/images/logo.png";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { Link, NavLink, useMatch } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useSectionNavigation from "../hooks/useSectionNavigation";

export const NAV_LINKS = [
  {
    linkName: "home",
    path: "/",
  },
  {
    linkName: "courses",
    path: "/courses",
  },
  {
    linkName: "contact us",
    path: "/contact",
  },
];
export const RELATIVE_LINKS = [
  {
    linkName: "why us",
    sectionId: "#whyus",
  },
  {
    linkName: "customize",
    sectionId: "#customize",
  },

  {
    linkName: "skills",
    sectionId: "#skills",
  },
  {
    linkName: "manage courses",
    sectionId: "#manage",
  },
  {
    linkName: "reviews",
    sectionId: "#reviews",
  },
  {
    linkName: "questions",
    sectionId: "#questions",
  },
];
export const slideIntoSection = (sectionId) => {
  document.getElementById(sectionId.slice(1)).scrollIntoView();
};
const NavbarRelativeLink = ({ linkName, relativePath }) => {
  const { handleSectionNavigation } = useSectionNavigation();
  return (
    <button
      key={linkName}
      className="nav-link"
      style={{
        color: "inherit",
        fontWeight: "inherit",
        border: "none",
        cursor: "pointer",
        fontSize: "inherit",
        backgroundColor: "transparent",
        padding: "0",
      }}
      onClick={() => handleSectionNavigation(relativePath)}
    >
      {linkName}
    </button>
  );
};

const NavbarLink = ({ linkName, path }) => (
  <NavLink
    to={path}
    className="nav-link"
    style={({ isActive }) => ({
      color: isActive ? "#0a8bc6" : "inherit",
      fontWeight: isActive ? "bold" : "",
      textDecoration: "none",
      fontSize: "inherit",
    })}
  >
    {linkName}
  </NavLink>
);

export const NavList = ({ direction = "row", showLoginLink = false }) => {
  const navLinks = NAV_LINKS.map((linkInfo) => (
    <NavbarLink
      key={linkInfo.linkName}
      linkName={linkInfo.linkName}
      path={linkInfo.path}
    />
  ));
  const relativeLinks = RELATIVE_LINKS.map(({ sectionId, linkName }) => (
    <NavbarRelativeLink
      key={linkName}
      linkName={linkName}
      relativePath={sectionId}
    />
  ));
  return (
    <div>
      <Stack
        direction={direction}
        alignItems="center"
        gap={3.5}
        color="colorDark"
        fontWeight="bold"
        fontSize={15}
        sx={{
          "& .nav-link": {
            position: "relative",
            background: "transparent",
            textTransform: "capitalize",
          },
          "& .nav-link::before": {
            content: "''",
            position: "absolute",
            height: "2px",
            bottom: -2,
            width: "100%",
            background: "#0a8bc6",
            zIndex: -10,
            transform: "scale(0)",
            transition: "0.3s ",
          },
          "& .nav-link:hover::before,& .nav-link.active::before": {
            transform: "scale(1)",
          },
        }}
      >
        {navLinks}
        {relativeLinks}
        {showLoginLink && (
          <Button
            component="a"
            sx={{
              textTransform: "capitalize",
            }}
            color="primary"
            size="large"
            variant="outlined"
            href="https://histudy-dashboard.netlify.app/login"
          >
            Login
          </Button>
        )}
      </Stack>
    </div>
  );
};

const Navbar = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1541px)");
  const match = useMatch("/");
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolledPercentage, setScrolledPercentage] = useState(0);
  const navbarIntersectionRef = useRef(null);
  const [showToTopBtn, setShowToTopBtn] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  useEffect(() => {
    if (
      location.pathname === "/" &&
      RELATIVE_LINKS.some(({ sectionId }) => sectionId === location.hash)
    ) {
      slideIntoSection(location.hash);
    }
    if (!navbarIntersectionRef.current) return;
    function observerHandler(entries) {
      if (entries[0].isIntersecting) {
        setShowNavbar(false);
        setShowToTopBtn(false);
      } else {
        setShowNavbar(true);
        setShowToTopBtn(true);
      }
    }

    // Navbar intersection
    const observer = new IntersectionObserver(observerHandler, {
      rootMargin: "62px 0px 0px 0px",
    });
    observer.observe(navbarIntersectionRef.current);
    function handleScrollSpyProgress() {
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollY / winHeightPx) * 100;
      setScrolledPercentage(scrolled);
    }
    window.addEventListener("scroll", handleScrollSpyProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollSpyProgress);
    };
  }, []);

  const slideIntoSection = (sectionId) => {
    document.getElementById(sectionId.slice(1)).scrollIntoView();
  };
  return (
    <>
      {/* Scroll to top button */}
      <Box
        onClick={scrollToTop}
        position={"fixed"}
        sx={{
          zIndex: 999,
          right: "20px",
          bottom: "20px",
          width: "50px",
          height: "50px",
          backgroundImage: `conic-gradient(#0085ff ${
            scrolledPercentage * 3.6
          }deg, #ebebeb  0deg)`,
          opacity: showToTopBtn ? "1" : "0",
          pointerEvents: showToTopBtn ? "auto" : "none",
          transform: showToTopBtn ? "translateY(0)" : "translateY(-50px)",
          transition: "0.3s",
          borderRadius: "50%",
        }}
      >
        <Box
          sx={{
            background: "white",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <KeyboardDoubleArrowUp
            sx={{ fontSize: "25px", color: "colorPrimary" }}
          />
        </Box>
      </Box>
      <div ref={navbarIntersectionRef} />

      {showNavbar && !match && (
        <div
          style={{
            height: "72.2px",
          }}
        />
      )}

      <Box
        zIndex={2000}
        width="100%"
        position={showNavbar ? "fixed" : !match ? "static" : "absolute"}
        bgcolor={showNavbar ? "white" : "transparent"}
        className={showNavbar ? "shadow-1" : undefined}
        sx={{
          top: "0",
          left: "0",
          animation: showNavbar ? "slide-down 0.3s both linear " : undefined,
          "@keyframes slide-down": {
            from: {
              transform: "translateY(-100%)",
            },
            to: {
              transform: "translateY(0)",
            },
          },
        }}
      >
        <div>
          <Container maxWidth={false}>
            <Stack
              py={1}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Link to="/">
                <img
                  style={{
                    maxheight: "50px",
                    width: "150px",
                  }}
                  src={logoImg}
                  alt="logo"
                />
              </Link>

              {isLargeScreen && (
                <>
                  <NavList />
                  <Button
                    component="a"
                    sx={{
                      textTransform: "capitalize",
                    }}
                    color="primary"
                    size="large"
                    variant="outlined"
                    href="https://histudy-dashboard.netlify.app/login"
                    target="_blank"
                  >
                    Login
                  </Button>
                </>
              )}
            </Stack>
          </Container>
        </div>
      </Box>
    </>
  );
};
export default Navbar;
