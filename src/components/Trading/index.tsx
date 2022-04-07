import { Button, styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import logo from "assets/logoWithoutText.svg";

const StyledButton = styled(Button)`
  border: none;
  padding: 12px 36px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  border-radius: 24px;
`;

const Trading = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      textAlign="center"
      sx={{
        width: "100%",
        padding: isSmallScreen ? "20px" : isMediumScreen ? "30px" : "50px",
        background: "linear-gradient(90deg,#9D7BE9 0%,#6F57D1 100%)",
      }}
    >
      <Box
        component="img"
        src={logo}
        height={70}
        alt="logo"
        marginBottom="30px"
      />
      <Typography
        sx={{
          fontSize: isSmallScreen ? "24px" : isMediumScreen ? "30px" : "32px",
          lineHeight: "40px",
          letterSpacing: "-0.5px",
          fontWeight: "600",
          pb: "32px",
        }}
      >
        Start trading perpetuals on Palmswap today.
      </Typography>
      <StyledButton variant="contained" color="secondary">
        Trade Now
      </StyledButton>
    </Box>
  );
};

export default Trading;
