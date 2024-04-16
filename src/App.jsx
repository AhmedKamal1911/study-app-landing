import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import ErrorPage from "./pages/ErrorPage";
import IndexPage from "./pages/IndexPage";
import CoursePage from "./pages/CoursePage";
import NotFoundPage from "./pages/NotFoundPage";
import CoursesPage from "./pages/CoursesPage";
import ContactUs from "./pages/ContactUs";
import SnackBarProvider from "./contexts/SnackBarContext";
import { Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScreenLoader from "./components/ScreenLoader";
import { HelmetProvider } from "react-helmet-async";

const RootLayout = lazy(() => import("./layouts/RootLayout"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<ScreenLoader />}>
          <RootLayout />
        </Suspense>
      }
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<IndexPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CoursePage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SnackBarProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
        <CssBaseline />
      </SnackBarProvider>
    </ThemeProvider>
  );
}

export default App;
