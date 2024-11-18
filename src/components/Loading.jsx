import { Stack, Typography } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loading = ({
  children,
  isLoading,
  error,
  errorElement,
  throwToErrorPage = false,
  loadingElement = (
    <Stack justifyContent="center" alignItems="center" minHeight="87.9vh">
      <InfinitySpin visible={true} color="#d65fec" ariaLabel="puff-loading" />
    </Stack>
  ),
}) => {
  if (isLoading) return loadingElement;

  if (error) {
    if (throwToErrorPage) throw error;
    return !errorElement ? (
      <Stack justifyContent="center" alignItems="center" minHeight="86.5vh">
        <Typography color="red" variant="h4">
          {error?.response?.data?.message
            ? error.response.data.message
            : error.message}
        </Typography>
      </Stack>
    ) : (
      errorElement
    );
  }

  return children;
};

export default Loading;
