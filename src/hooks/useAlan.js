import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NAV_LINKS, NavList, RELATIVE_LINKS } from "../components/Navbar";
import useSectionNavigation from "./useSectionNavigation";
const useAlan = () => {
  const navigate = useNavigate();
  const { handleSectionNavigation } = useSectionNavigation();
  useEffect(() => {
    alanBtn({
      key: "03e568a0337a44426cdfe87a21a196d82e956eca572e1d8b807a3e2338fdd0dc/stage",

      left: "20px",
      bottom: "20px",
      zIndex: "99999",
      onCommand: ({ command, route }) => {
        switch (command) {
          case "navigate":
            {
              const navLinkItemIndex = NAV_LINKS.findIndex(
                ({ linkName }) => linkName === route
              );
              const relativeLinkItemIndex = RELATIVE_LINKS.findIndex(
                ({ linkName }) => linkName === route
              );

              if (navLinkItemIndex > -1) {
                // Handle Page Navigation
                console.log(navLinkItemIndex, "index");
                //TODO: create login logic
                const path = NAV_LINKS[navLinkItemIndex].path;
                navigate(path);
              } else {
                // Handle Section Navigation
                const sectionId =
                  RELATIVE_LINKS[relativeLinkItemIndex].sectionId;
                handleSectionNavigation(sectionId);
              }
            }
            break;
          case "login": {
            document.getElementById("loginBtn")?.click();
            break;
          }
          default:
            console.log("invalid command");
        }
      },
    });
  }, [handleSectionNavigation, navigate]);
};

export default useAlan;
