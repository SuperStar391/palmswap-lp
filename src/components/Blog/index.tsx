import { Button, styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import Card from "./components/Card";

const StyledButton = styled(Button)`
  border: none;
  padding: 12px 36px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  border-radius: 24px;
`;

const GradientText = styled(Typography)`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 4px;
  font-weight: 600;
  background: linear-gradient(to right, #9d7be9 0%, #6f57d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  display: inline-block;
`;

const Blog = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box textAlign="center" width="100%">
      <GradientText sx={{ pb: "8px" }}>PALMSWAP BLOG</GradientText>
      <Typography
        sx={{
          fontSize: isSmallScreen ? "24px" : isMediumScreen ? "30px" : "32px",
          lineHeight: "40px",
          letterSpacing: "-0.5px",
          fontWeight: "600",
          pb: "16px",
        }}
      >
        All About Palmswap Ecosystem & Future
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="16px"
        margin="30px 0 40px"
        flexDirection={isSmallScreen ? "column" : "row"}
      >
        <Card title="vAMM" subtitle="Dive deep into vAMM" />
        <Card title="Mainnet" subtitle="Mainnet release" />
        <Card title="Palm token" subtitle="Palm Tokenomics" />
      </Box>
      <StyledButton variant="contained" href="https://medium.com/@Palmswap">
        Browse Blog
      </StyledButton>
    </Box>
  );
};

export default Blog;
