import { Button, styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import Card from "./components/card";

const StyledButton = styled(Button)`
  border: none;
  padding: 8px 24px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  border-radius: 24px;
`;

const Blog = function () {
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
        PALMSWAP BLOG
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
        All About Palmswap Ecosystem & Future
      </Typography>
      <Box display="flex" flexWrap="wrap" gap="16px" margin="30px 0">
        <Card />
        <Card />
        <Card />
      </Box>
      <StyledButton variant="contained">Browse Blog</StyledButton>
    </Box>
  );
};

export default Blog;
