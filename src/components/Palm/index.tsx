import { Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { tokenFeatures } from "config/tokenFeatures";
import { ITokenFeature } from "interfaces/ITokenFeature";
import Card from "./components/card";

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
      <Typography
        color="textSecondary"
        sx={{
          fontSize: "12px",
          lineHeight: "20px",
          letterSpacing: "4px",
          pb: "8px",
          textTransform: "uppercase",
        }}
      >
        $PALM
      </Typography>
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
