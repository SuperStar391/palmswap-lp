import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";

const App = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      maxWidth="lg"
      sx={{
        px: isSmallScreen
          ? "20px!important"
          : isMediumScreen
          ? "50px!important"
          : "24px",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
