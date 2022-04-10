import {
  TextField,
  Link,
  styled,
  Typography,
  useMediaQuery,
  Button,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/system";
import logo from "assets/logo.svg";
import medium from "assets/medium.svg";
import discord from "assets/discord.svg";
import { footerMenu } from "config/footerMenu";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const StyledButton = styled(Button)`
  border: none;
  padding: 8px 36px;
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  border-radius: 12px;
`;

const StyledIconButton = styled(IconButton)`
  background: #0d0717;
  color: #ffffff;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    background: #6f57d1;
  }
`;

const StyledTextField = styled(TextField)`
  border: 1px solid #111015;
  background: linear-gradient(30deg, #111015, #0d0617);
  border-radius: 16px;
  &.Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border: 0;
    }
  }
  &:hover {
    .MuiOutlinedInput-notchedOutline {
      border: 0;
    }
  }
`;

const Footer = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        flexDirection={isSmallScreen ? "column" : "row"}
        sx={{
          p: isSmallScreen
            ? "40px 25px"
            : isMediumScreen
            ? "50px  30px"
            : "80px  0px",
          display: "flex",
          flexWrap: "wrap",
          gap: isSmallScreen ? "30px" : "unset",
        }}
      >
        <Box flex={4} sx={{ pr: isSmallScreen ? "0" : "100px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: "600",
              letterSpacing: "0.05em",
              mb: isSmallScreen ? "30px" : "50px",
            }}
          >
            Receive latest news
          </Typography>
          <Box display="flex" gap="8px" marginBottom="30px">
            <StyledTextField
              type="email"
              placeholder="Enter your email address"
              sx={{ flex: 1 }}
            />
            <StyledButton variant="contained" sx={{ whiteSpace: "nowrap" }}>
              Get Started
            </StyledButton>
          </Box>
          <Typography
            sx={{ fontSize: isSmallScreen ? "13px" : "16px", opacity: "0.6" }}
          >
            *by entering your email address you confirming that you're agree to
            subscribe to our newsletter.
          </Typography>
        </Box>
        <Box
          flex={5}
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {Object.keys(footerMenu).map((submenu: string, idx: number) => (
            <Box
              key={idx}
              sx={{
                width: isSmallScreen
                  ? "50%"
                  : isMediumScreen
                  ? "107px"
                  : "200px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                mb: isSmallScreen ? "30px" : "0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: "600",
                  letterSpacing: "0.05em",
                  mb: "16px",
                }}
              >
                {submenu}
              </Typography>
              {footerMenu[submenu as keyof typeof footerMenu].map((item, idx) =>
                item[Object.keys(item)[0] as keyof typeof item] === "#" ? (
                  <Link
                    key={idx}
                    href={item[Object.keys(item)[0] as keyof typeof item]}
                    underline="none"
                  >
                    <Tooltip title="Coming soon" arrow>
                      <Typography
                        key={idx}
                        component="span"
                        sx={{
                          fontSize: isSmallScreen
                            ? "16px"
                            : isMediumScreen
                            ? "14px"
                            : "16px",
                          fontWeight: "400",
                          opacity: "0.6",
                          color: "white",
                          ":hover": {
                            opacity: 1,
                            color: "#6f57d1",
                          },
                        }}
                      >
                        {Object.keys(item)[0]}
                      </Typography>
                    </Tooltip>
                  </Link>
                ) : (
                  <Link
                    key={idx}
                    href={item[Object.keys(item)[0] as keyof typeof item]}
                    underline="none"
                  >
                    <Typography
                      key={idx}
                      sx={{
                        fontSize: isSmallScreen
                          ? "16px"
                          : isMediumScreen
                          ? "14px"
                          : "16px",
                        fontWeight: "400",
                        opacity: "0.6",
                        color: "white",
                        ":hover": {
                          opacity: 1,
                          color: "#6f57d1",
                        },
                      }}
                    >
                      {Object.keys(item)[0]}
                    </Typography>
                  </Link>
                )
              )}
            </Box>
          ))}
          <Box
            sx={{
              width: isSmallScreen ? "50%" : isMediumScreen ? "107px" : "200px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              mb: isSmallScreen ? "30px" : "0",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: "600",
                letterSpacing: "0.05em",
                mb: "16px",
              }}
            >
              Social Media
            </Typography>
            <Box
              display="flex"
              gap="16px"
              flex="0 0 30%"
              flexWrap={isSmallScreen ? "unset" : "wrap"}
            >
              <StyledIconButton
                onClick={() =>
                  (window.location.href = "https://twitter.com/Palmswaporg")
                }
              >
                <Twitter />
              </StyledIconButton>
              <StyledIconButton>
                <Facebook />
              </StyledIconButton>
              <StyledIconButton
                onClick={() =>
                  (window.location.href = "https://medium.com/@Palmswap")
                }
              >
                <Box component="img" src={medium} alt="medium" />
              </StyledIconButton>
              <StyledIconButton
                onClick={() =>
                  (window.location.href =
                    "https://discord.com/invite/B2EyhkQSZR")
                }
              >
                <Box component="img" src={discord} alt="discord" />
              </StyledIconButton>
              <StyledIconButton>
                <Instagram />
              </StyledIconButton>
              <StyledIconButton>
                <LinkedIn />
              </StyledIconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="20px 0"
        sx={{ borderTop: "1px solid #25232E" }}
      >
        <Box component="img" src={logo} height={35} alt="logo" />
        <Typography
          sx={{
            fontSize: isSmallScreen ? "13px" : "16px",
            lineHeight: "22px",
            opacity: "0.6",
            pb: "20px",
          }}
        >
          @2022 PalmSwap
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
