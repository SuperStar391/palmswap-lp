import { styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

const StyledCard = styled(Box)`
  flex: 1;
  padding: 16px;
  border: 1px solid #1b171f;
  background: #0a0911;
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
      {/* <GradientText sx={{ pb: "8px" }}>V1 States</GradientText>
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
          fontSize: isSmallScreen ? "13px" : "16px",
          lineHeight: "22px",
          opacity: "0.6",
          pb: "20px",
        }}
      >
        Trusted & built on feedback by thousands of traders
      </Typography> */}

      <Box
        display="flex"
        marginTop="20px"
        flexDirection={isSmallScreen ? "column" : "row"}
        sx={
          isSmallScreen
            ? {
                "&>div:first-child": {
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                },
                "&>div:last-child": {
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                },
              }
            : {
                "&>div:first-child": {
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                },
                "&>div:last-child": {
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                },
              }
        }
      >
        <StyledCard>
          <Typography
            sx={{ fontSize: isSmallScreen ? "13px" : "16px", opacity: "0.6" }}
          >
            Trading Volume
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "24px" : "40px", fontWeight: 700 }}
          >
            $4,036.92
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "13px" : "16px", opacity: "0.6" }}
          >
            All Time
          </Typography>
        </StyledCard>
        <StyledCard>
          <Typography
            sx={{ fontSize: isSmallScreen ? "13px" : "16px", opacity: "0.6" }}
          >
            Trading Volume
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "24px" : "40px", fontWeight: 700 }}
          >
            $4,036.92
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "13px" : "16px", opacity: "0.6" }}
          >
            Today
          </Typography>
        </StyledCard>
        <StyledCard>
          <Typography
            sx={{ fontSize: isSmallScreen ? "13px" : "16px", opacity: "0.6" }}
          >
            Cycle
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "24px" : "40px", fontWeight: 700 }}
          >
            1
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "13px" : "16px", opacity: "0.6" }}
          >
            Soon
          </Typography>
        </StyledCard>
      </Box>
    </Box>
  );
};

export default V1States;
