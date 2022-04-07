import { Typography, useMediaQuery, styled } from "@mui/material";
import { Box, useTheme } from "@mui/system";

interface IProp {
  title: string;
  subtitle: string;
}

const GradientText = styled(Typography)`
  font-size: 14px;
  letter-spacing: 4px;
  font-weight: 600;
  background: linear-gradient(to right, #9d7be9 0%, #6f57d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

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
          background: "url('assets/blogBackground.png')",
          height: "250px",
          borderRadius: "8px",
          marginBottom: "16px",
        }}
      >
        <GradientText sx={{ fontSize: "42px", fontWeight: "700" }}>
          {props.title}
        </GradientText>
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
          fontSize: isSmallScreen ? "13px" : "16px",
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
