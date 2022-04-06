import { styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

const StyledCard = styled(Box)`
  flex: 1;
  padding: 16px;
  border: 1px solid #1b171f;
  background: #0a0911;
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const V1States = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      textAlign="center"
      sx={{
        width: "100%",
        marginTop: isSmallScreen ? "30px" : isMediumScreen ? "50px" : "100px",
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
        V1 States
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
        All Big Things Start Small
      </Typography>
      <Typography
        sx={{
          fontSize: isSmallScreen ? "14px" : "17px",
          lineHeight: "22px",
          opacity: "0.6",
          pb: "20px",
        }}
      >
        Trusted & built on feedback by thousands of traders
      </Typography>

      <Box
        display="flex"
        marginTop="20px"
        flexDirection={isSmallScreen ? "column" : "row"}
      >
        <StyledCard>
          <Typography
            sx={{ fontSize: isSmallScreen ? "14px" : "17px", opacity: "0.6" }}
          >
            Trading Volume
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "24px" : "40px", fontWeight: 700 }}
          >
            $4,036.92
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "14px" : "17px", opacity: "0.6" }}
          >
            All Time
          </Typography>
        </StyledCard>
        <StyledCard>
          <Typography
            sx={{ fontSize: isSmallScreen ? "14px" : "17px", opacity: "0.6" }}
          >
            Trading Volume
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "24px" : "40px", fontWeight: 700 }}
          >
            $4,036.92
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "14px" : "17px", opacity: "0.6" }}
          >
            Today
          </Typography>
        </StyledCard>
        <StyledCard>
          <Typography
            sx={{ fontSize: isSmallScreen ? "14px" : "17px", opacity: "0.6" }}
          >
            Cycle
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "24px" : "40px", fontWeight: 700 }}
          >
            1
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "14px" : "17px", opacity: "0.6" }}
          >
            Soon
          </Typography>
        </StyledCard>
      </Box>
    </Box>
  );
};

export default V1States;
