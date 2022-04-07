import { Typography, useMediaQuery, styled } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { tokenFeatures } from "config/tokenFeatures";
import { ITokenFeature } from "interfaces/ITokenFeature";
import Card from "./components/Card";

const GradientText = styled(Typography)`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 4px;
  font-weight: 500;
  background: linear-gradient(to right, #9d7be9 0%, #6f57d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  display: inline-block;
`;

const Palm = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      width="100%"
      sx={{
        py: "70px",
        textAlign: "center",
      }}
    >
      <GradientText sx={{ pb: "8px" }}>$PALM</GradientText>
      <Typography
        sx={{
          fontSize: isSmallScreen ? "24px" : isMediumScreen ? "30px" : "32px",
          lineHeight: "40px",
          letterSpacing: "-0.5px",
          fontWeight: "600",
          pb: "16px",
        }}
      >
        3 things you need to know about Palm token
      </Typography>
      <Box
        sx={{
          pt: "80px",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: isSmallScreen ? "85px" : isMediumScreen ? "20px" : "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          m: isSmallScreen ? "0 -10px 0 -20px" : "0px",
        }}
      >
        {tokenFeatures.map((feature: ITokenFeature, idx: number) => (
          <Card key={idx} {...feature} />
        ))}
      </Box>
    </Box>
  );
};

export default Palm;
