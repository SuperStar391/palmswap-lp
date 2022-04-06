import { Button, styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

const StyledButton = styled(Button)`
  border: none;
  padding: 8px 24px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  border-radius: 24px;
`;

const RewardsCycle = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box textAlign="center" width="100%">
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
        Trading
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
        Trading Rewards and Tradingcycles
      </Typography>
      <Box display="flex" gap="32px" width="100%" margin="30px 0 100px">
        <Box
          flex={1}
          sx={{
            padding: isSmallScreen ? "24px" : isMediumScreen ? "40px" : "80px",
            border: "1px solid #111111",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: isSmallScreen
                ? "24px"
                : isMediumScreen
                ? "30px"
                : "32px",
              lineHeight: "40px",
              letterSpacing: "-0.5px",
              fontWeight: "600",
              pb: "16px",
            }}
          >
            Retroactive Rewards
          </Typography>
          <Typography sx={{ fontSize: "16px", marginBottom: "24px" }}>
            Secure tokens before TGE through Retroactive Trading Rewards within
            the first 30 days after launch.
          </Typography>
          <StyledButton variant="contained" color="secondary">
            Learn How
          </StyledButton>
        </Box>
        <Box
          flex={1}
          sx={{
            padding: isSmallScreen ? "24px" : isMediumScreen ? "40px" : "80px",
            border: "1px solid #111111",
            borderRadius: "8px",
            background: "linear-gradient(90deg,#9D7BE9 0%,#6F57D1 100%)",
          }}
        >
          <Typography
            sx={{
              fontSize: isSmallScreen
                ? "24px"
                : isMediumScreen
                ? "30px"
                : "32px",
              lineHeight: "40px",
              letterSpacing: "-0.5px",
              fontWeight: "600",
              pb: "16px",
            }}
          >
            Tradingcycles
          </Typography>
          <Typography sx={{ fontSize: "16px", marginBottom: "24px" }}>
            Every week a new Tradingcycle starts that rewards traders on the DEX
            with PALM tokens.
          </Typography>
          <StyledButton variant="contained" color="secondary">
            Learn More
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default RewardsCycle;