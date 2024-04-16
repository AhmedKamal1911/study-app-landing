import { useNavigate } from "react-router-dom";
import { slideIntoSection } from "../components/Navbar";
const useSectionNavigation = () => {
  const navigate = useNavigate();
  function handleSectionNavigation(sectionId) {
    if (location.pathname === "/") {
      // scroll the section into view
      slideIntoSection(sectionId);
      navigate(`/${sectionId}`);
    } else {
      // navigate to baseUrl
      // scroll the section into view
      navigate(`/${sectionId}`);
      setTimeout(() => {
        slideIntoSection(sectionId);
      }, 0);
    }
  }
  return { handleSectionNavigation };
};
export default useSectionNavigation;
