import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ContactBox, FieldError, SectionHeader } from "../components";
import { East, Headphones, LocationOn, MailOutline } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import { styled } from "@mui/system";
import { useFormik } from "formik";
const contactInfo = [
  {
    contactIcon: <Headphones color="primary" sx={{ fontSize: "40px" }} />,
    contactTitle: "Contact Phone Number",
    contactDetails: [
      {
        detail: (
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="tel:+444 555 666 777"
          >
            +444 555 666 777
          </a>
        ),
      },
      {
        detail: (
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="tel:+222 222 222 333"
          >
            +222 222 222 333
          </a>
        ),
      },
    ],
  },
  {
    contactIcon: <MailOutline color="primary" sx={{ fontSize: "40px" }} />,
    contactTitle: "Our Email Address",
    contactDetails: [
      {
        detail: (
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="mailto:admin@gmail.com"
          >
            admin@gmail.com
          </a>
        ),
      },
      {
        detail: (
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="mailto:example@gmail.com"
          >
            example@gmail.com
          </a>
        ),
      },
    ],
  },
  {
    contactIcon: <LocationOn color="primary" sx={{ fontSize: "40px" }} />,
    contactTitle: "Our Location",
    contactDetails: [
      { detail: "5678 Bangla Main Road, cities 580" },
      { detail: "GBnagla, example 54786" },
    ],
  },
];
import contactImg from "../assets/images/contact.jpg";
import { useSnackbar } from "../contexts/SnackBarContext";
import { useRef } from "react";
const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  "& .MuiInputBase-root": {
    padding: "8px 0px",
    color: "#2f57ef",
  },

  "& .MuiInputBase-root::before": {
    borderBottom: "2px solid #e6e3f1",
  },
  "& .MuiFormLabel-root": {
    fontSize: { xs: "15px", md: "18px" },
  },
});
import * as Yup from "yup";
import withHelmet from "../components/withHelmet";
const ContactUs = () => {
  const { openSnackbar } = useSnackbar();
  const form = useRef();

  //  YUP SCHEMA
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(35, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    subject: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    message: Yup.string()
      .min(2, "Too Short!")

      .required("Message is Required"),
  });

  // FORMIK
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactSchema,
    validateOnBlur: true,

    onSubmit: (_, { resetForm }) => {
      emailjs
        .sendForm("service_nxpuqeq", "template_0ihxiza", form.current, {
          publicKey: "iUwcDkXUsqrfT70kx",
        })
        .then(
          () => {
            openSnackbar("Message Sent Successfully");
          },
          () => {
            openSnackbar("Failed to send message", "error");
          }
        )
        .finally(() => {
          resetForm();
        });
    },
  });

  return (
    <Box
      py={10}
      sx={{
        background:
          "linear-gradient(180deg, #EEDEFD 0%, #FFFFFF 100%) !important",
      }}
    >
      <Container maxWidth="lg">
        <Box mb={4}>
          <SectionHeader subtitle={"Contact Us"} subTitleColor="#b966e7">
            <Typography
              variant="body1"
              lineHeight="1.2"
              fontSize={{ xs: "27px", sm: "32px", md: "45px" }}
              fontWeight="bold"
              maxWidth="600px"
              marginInline="auto"
            >
              Histudy Course Contact can join with us.
            </Typography>
          </SectionHeader>
          <Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={3}
              justifyContent="center"
            >
              {contactInfo.map((info) => (
                <ContactBox key={info.contactTitle} {...info} />
              ))}
            </Stack>
          </Box>
        </Box>
        {/* Contact Sec */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="stretch"
          gap={2}
        >
          {/* Img */}
          <Box flex={1}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "8px" }}
              src={contactImg}
              alt=""
            />
          </Box>
          {/* Form */}
          <Stack
            onSubmit={formik.handleSubmit}
            ref={form}
            direction="column"
            gap={2}
            component="form"
            flex={1}
            bgcolor="white"
            p={{ xs: 5, md: 6 }}
            className="shadow-1"
            borderRadius="8px"
          >
            <SectionHeader alignment="left" subtitle={"EDUCATION FOR EVERYONE"}>
              <Typography
                variant="body1"
                lineHeight="1.2"
                fontSize={{ xs: "22px", md: "27px", lg: "30px" }}
                fontWeight="bold"
                maxWidth="600px"
                marginInline={{ xs: "0px", md: "auto" }}
              >
                Get a Free Course You Can Contact With Me
              </Typography>
            </SectionHeader>
            <StyledTextField
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              id="standard-basic"
              name="name"
              label="Name"
              variant="standard"
            />
            <FieldError
              errorText={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null
              }
            />

            <StyledTextField
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              name="email"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <FieldError
              errorText={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            />

            <StyledTextField
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              id="standard-basic"
              label="Your Subject"
              variant="standard"
              name="subject"
            />
            <FieldError
              errorText={
                formik.touched.subject && formik.errors.subject
                  ? formik.errors.subject
                  : null
              }
            />

            <StyledTextField
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="standard-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="standard"
              name="message"
            />
            <FieldError
              errorText={
                formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : null
              }
            />

            <Button
              type="submit"
              disabled={formik.isSubmitting}
              sx={{
                display: "flex",

                textAlign: "center",

                p: 1,
                gap: 1,
                backgroundImage:
                  "linear-gradient(to right, #2F57EA,#2F57EA,#b966e7, #b966e7)",
                backgroundSize: "300% 100%",
                color: "white",
                fontWeight: "bold",
                transition: "all 0.6s ease-in-out",
                fontSize: "17px",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundPosition: "100% -100%",
                },
                "&:hover .left-arrow": {
                  opacity: "1",
                  transform: "translateX(10px)",
                },
                "&:hover .right-arrow": {
                  opacity: "0",
                  transform: "translateX(10px)",
                },
                "&:hover .btn-text": {
                  transform: "translateX(15px)",
                },
              }}
            >
              <East
                className="left-arrow"
                sx={{
                  fontSize: "18px",
                  opacity: "0",
                  transition: "0.5",
                }}
              />
              <span
                className="btn-text"
                style={{
                  transition:
                    "transform 0.6s 0.125s cubic-bezier(0.1, 0.75, 0.25, 1)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {formik.isSubmitting ? (
                  <CircularProgress
                    sx={{
                      width: "26px !important",
                      height: "26px !important",
                      color: "#29e1a9",
                      marginRight: "10px",
                    }}
                  />
                ) : (
                  ""
                )}
                {formik.isSubmitting ? "Loading..." : "Get it Now"}
              </span>
              <East
                className="right-arrow"
                sx={{
                  fontSize: "18px",
                  transition: "0.3s ",
                }}
              />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
const ContactUsPage = withHelmet(ContactUs, "Contact Us");
export default ContactUsPage;
