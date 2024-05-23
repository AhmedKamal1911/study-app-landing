import { Box } from "@mui/material";

import { RegisterForm } from "../components";
import fetchFromAPI from "../utils/constants/fetchFromApi";

import { useSnackbar } from "../contexts/SnackBarContext";
import withHelmet from "../components/withHelmet";
import studyBg from "../assets/images/studybg.jpg";
const RegisterPage = () => {
  const { openSnackbar } = useSnackbar();

  const onRegister = async (registerData, endPoint = "users") => {
    const userTypeSingular = endPoint.slice(0, endPoint.length - 1);
    try {
      await fetchFromAPI({
        url: `/${endPoint}`,
        method: "POST",

        data: registerData,
      });

      location.assign("https://histudy-dashboard.netlify.app/login");
      openSnackbar(`${userTypeSingular}, created successfully.`);
    } catch (e) {
      openSnackbar(`Failed to create ${userTypeSingular}`, "error");
    }
  };
  return (
    <Box
      bgcolor="background.default"
      sx={{
        minHeight: "100vh",
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${studyBg})`,
        backgroundSize: "cover",
        position: "relative",
        "&::before": {
          content: "''",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          position: "absolute",
        },
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          zIndex: "2",
          paddingBlock: "70px",
        }}
      >
        <RegisterForm onRegister={onRegister} />
      </div>
    </Box>
  );
};

export default withHelmet(RegisterPage, "Register");
