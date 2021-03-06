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
          position: "relative",
          height: "250px",
          borderRadius: "8px",
          marginBottom: "16px",
          border: "1px solid #111111",
          background: "linear-gradient(to right, #0B0D15 0%, #0F0618 100%)",
          "&:hover": {
            "& p": {
              background: "none",
              "-webkit-background-clip": "border-box",
              "-webkit-text-fill-color": "white",
              zIndex: 1,
            },
            "&>div": {
              opacity: 1,
            },
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            border: "1px solid #111111",
            top: 0,
            left: 0,
            right: 0,
            bottom: "-1px",
            borderRadius: "6px",
            background: "linear-gradient(to right, #9d7be9 0%, #6f57d1 100%)",
            opacity: 0,
            transition: "0.3s",
          }}
        ></Box>
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
