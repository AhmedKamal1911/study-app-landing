import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const withHelmet = (PageComponent, pageTitle) => {
  // i can't use hooks because im in normal function
  function NewComponent() {
    // i can use hooks  because im inside functional component
    const { pathname } = useLocation();
    return (
      <>
        <Helmet>
          <title>
            {pathname === "/" ? "HiStudy" : `HiStudy | ${pageTitle}`}
          </title>
        </Helmet>
        <PageComponent />
      </>
    );
  }
  return NewComponent;
};
export default withHelmet;
