import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  PasswordField,
  CustomSelectField,
  CustomTextField,
  FieldError,
} from ".";
import registerFormSchema, {
  fileValidationSchema,
} from "../validations/registerFormSchema";
import { getFieldError, validateFile } from "../utils";
// React Component
const RegisterForm = ({ onRegister }) => {
  const inputFileRef = useRef(null);
  const formRef = useRef(null);
  const [showInstructorDescription, setShowInstructorDesc] = useState(false);
  const [userSelectedImageURL, setUserSelectedImageURL] = useState("");
  // Formik Inputs initialValues
  const formik = useFormik({
    initialValues: {
      file: null,
      username: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "users",
      instructorDescription: "",
      termsAgree: false,
    },
    validationSchema: registerFormSchema,
    onSubmit: async (values) => {
      const formData = new FormData(formRef.current);
      const unnecessaryInputNames = [
        "userType",
        "termsAgree",
        "confirmPassword",
      ];
      const trimmedFullName = values.fullName.trim();
      formData.set("fullName", trimmedFullName);
      unnecessaryInputNames.forEach((key) => formData.delete(key));
      if (values.userType === "users") formData.delete("instructorDescription");
      try {
        // Register Function
        await onRegister(formData, values.userType);
        URL.revokeObjectURL(userSelectedImageURL);
      } finally {
        formik.setSubmitting(false);
      }
    },
  });
  // Helper Function
  function hideUserImage() {
    URL.revokeObjectURL(userSelectedImageURL);
    setUserSelectedImageURL("");
  }
  // Helper Function
  function clearInputFileList() {
    inputFileRef.current.files = new DataTransfer().files;
  }
  // Helper Function
  function handleFileChange(file) {
    formik.setFieldValue("file", file ?? null);
    if (!file) return void (userSelectedImageURL && hideUserImage());
    // there is file and is valid
    if (validateFile(file, fileValidationSchema))
      return setUserSelectedImageURL(URL.createObjectURL(file));
    // there is file but not valid
    clearInputFileList();
    userSelectedImageURL && hideUserImage();
  }
  return (
    <Box
      bgcolor="background.paper"
      boxShadow="0 0 4px 1px #0000001c"
      p={3}
      borderRadius={2}
      width="100%"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        mb={2}
        py={2}
      >
        <Typography
          component={Link}
          to="https://histudy-app.netlify.app/"
          variant="h5"
          fontWeight="bold"
          color="primary.main"
          sx={{ textDecoration: "none" }}
        >
          HiStudy
        </Typography>
      </Stack>
      <Box color="black" mb={2}>
        <Typography fontWeight="bold" fontSize={24} color="primary.main">
          Adventure starts here 🚀
        </Typography>
        <Typography color="lightDark">
          Make your app management easy and fun!
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit} ref={formRef}>
        <Stack gap={2} mb={2}>
          <div>
            {userSelectedImageURL && (
              <img
                style={{
                  display: "block",
                  marginInline: "auto",
                  marginBottom: "20px",
                  width: "100%",
                  maxWidth: "200px",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src={userSelectedImageURL}
                alt="user"
              />
            )}
            <CustomTextField
              type="file"
              name="file"
              id="file"
              accept="image/*"
              inputRef={inputFileRef}
              onChange={(e) => handleFileChange(e.target.files[0])}
              onBlur={formik.handleBlur}
              fullWidth
            />
            <FieldError errorText={getFieldError(formik, "file")} />
          </div>
          <div>
            <CustomTextField
              name="username"
              id="username"
              label="Username"
              variant="outlined"
              placeholder="max9874"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
            />
            <FieldError errorText={getFieldError(formik, "username")} />
          </div>
          <div>
            <CustomTextField
              name="fullName"
              id="fullName"
              label="Full Name"
              variant="outlined"
              placeholder="max9874"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
            />
            <FieldError errorText={getFieldError(formik, "fullName")} />
          </div>
          <div>
            <CustomTextField
              name="email"
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              placeholder="example@gmail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              fullWidth
            />
            <FieldError errorText={getFieldError(formik, "email")} />
          </div>
          <div>
            <PasswordField
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Password"
              fullWidth
            />
            <FieldError errorText={getFieldError(formik, "password")} />
          </div>

          <div>
            <PasswordField
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Confirm Password"
              fullWidth
            />
            <FieldError errorText={getFieldError(formik, "confirmPassword")} />
          </div>
        </Stack>
        <div>
          <CustomSelectField
            name="userType"
            label="User Type"
            onChange={(e) => {
              formik.handleChange(e);
              setShowInstructorDesc(e.target.value === "instructors");
            }}
            onBlur={formik.handleBlur}
            value={formik.values.userType}
            controlled
          >
            <MenuItem value="users">Student</MenuItem>
            <MenuItem value="instructors">Instructor</MenuItem>
          </CustomSelectField>
          <FieldError errorText={getFieldError(formik, "userType")} />
        </div>

        <div
          style={{
            display: showInstructorDescription ? "block" : "none",
          }}
        >
          <CustomTextField
            id="instructorDescription"
            label="Instructor Description"
            name="instructorDescription"
            value={formik.values.instructorDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            placeholder="What is the instructor description?"
          />
          <FieldError
            errorText={getFieldError(formik, "instructorDescription")}
          />
        </div>

        <div>
          <FormControlLabel
            sx={{
              mt: 2,

              "& .MuiButtonBase-root": {
                color: "#9d95d9",
              },
            }}
            control={
              <Checkbox
                name="termsAgree"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.termsAgree}
              />
            }
            label={
              <Typography color="lightDark">
                I agree to{" "}
                <Typography component="span" color="rgb(105, 108, 255)">
                  privacy policy & terms
                </Typography>
              </Typography>
            }
          />
          <FieldError errorText={getFieldError(formik, "termsAgree")} />
        </div>

        <Button
          fullWidth
          sx={{
            mt: 2,
          }}
          variant="contained"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "SIGNING UP" : "SIGN UP"}
        </Button>
        <Typography p={3} color="lightDark">
          Already have an account?{" "}
          <Link
            to="https://histudy-dashboard.netlify.app/login"
            style={{
              textDecoration: "none",
              color: "rgb(105, 108, 255)",
            }}
          >
            Sign in instead
          </Link>{" "}
        </Typography>
      </form>
    </Box>
  );
};

export default RegisterForm;
