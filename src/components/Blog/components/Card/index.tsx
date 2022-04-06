import { Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

interface IProp {
  title: string;
  subtitle: string;
}

const Card = function (props: IProp) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box textAlign="center" flex={1}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#040507",
          height: "250px",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      >
        <Typography
          color="textSecondary"
          sx={{
            fontSize: "42px",
            fontWeight: "700",
            color: "#6F57D1",
          }}
        >
          {props.title}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: isSmallScreen ? "16px" : isMediumScreen ? "18px" : "20px",
          lineHeight: "40px",
          letterSpacing: "-0.5px",
          fontWeight: "600",
          pb: "8px",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        sx={{
          fontSize: isSmallScreen ? "10px" : "16px",
          lineHeight: "24px",
          opacity: "0.6",
        }}
      >
        {props.subtitle}
      </Typography>
    </Box>
  );
};

export default Card;
