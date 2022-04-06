import { styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import TokenFeatureCard from "components/TokenFeatureCard";
import { tokenFeatures } from "config/tokenFeatures";
import { ITokenFeature } from "interfaces/ITokenFeature";
import governance from "assets/governance.png";
import numerous from "assets/numerous.png";
import deflation from "assets/deflation.png";
import Card from "./components/Card";

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
        <Card
          icon={governance}
          title="Governance"
          description="We love democracy. That’s why our platform is designed to be governed by you."
        />
        <Card
          icon={numerous}
          title="Numerous use cases"
          description="The ecosystem is centered around trading rewards, staking, and farms."
        />
        <Card
          icon={deflation}
          title="Deflation"
          description="The ecosystem is centered around trading rewards, staking, and farms."
        />
        {/* {tokenFeatures.map((feature: ITokenFeature, idx: number) => (
          <TokenFeatureCard key={idx} {...feature} />
        ))} */}
      </Box>
    </Box>
  );
};

export default Palm;
