import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    cancel: true;
  }
}
// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1288,
      xl: 1536,
    },
  },
  palette: {
    background: {
      default: "#000000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#8568DB",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        containedPrimary: {
          background: "linear-gradient(90deg,#9D7BE9 0%,#6F57D1 100%)",
          ":hover": {
            opacity: 0.8,
          },
        },
        containedSecondary: {
          backgroundColor: "#ffffff",
          boxShadow: "none",
          color: "#000000",
          ":hover": {
            background: "#ffffff80",
          },
        },
      },
    },
  },
});
export default theme;
