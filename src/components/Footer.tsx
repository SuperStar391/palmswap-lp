import {
  TextField,
  Link,
  styled,
  Typography,
  useMediaQuery,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/system";
import logo from "assets/logo.svg";
import medium from "assets/medium.svg";
import discord from "assets/discord.svg";
import { footerMenu } from "config/footerMenu";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const StyledButton = styled(Button)`
  border: none;
  padding: 8px 24px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  border-radius: 12px;
`;

const StyledIconButton = styled(IconButton)`
  background: #0d0717;
  color: #ffffff;
  opacity: 0.8;
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
        <Box flex={1}>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",
              letterSpacing: "0.05em",
              mb: isSmallScreen ? "30px" : "50px",
            }}
          >
            Receive latest news
          </Typography>
          <Box display="flex" gap="8px" marginBottom="30px">
            <TextField type="email" placeholder="Enter your email address" />
            <StyledButton variant="contained" sx={{ whiteSpace: "nowrap" }}>
              Get Started
            </StyledButton>
          </Box>
          <Typography
            sx={{ fontSize: isSmallScreen ? "14px" : "17px", opacity: "0.6" }}
          >
            *by entering your email address you confirming that you're agree to
            subscribe to our newsletter.
          </Typography>
        </Box>
        <Box
          flex={1}
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
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "600",
                  letterSpacing: "0.05em",
                  mb: "16px",
                }}
              >
                {submenu}
              </Typography>
              {footerMenu[submenu as keyof typeof footerMenu].map(
                (item, idx) => (
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
                fontSize: "14px",
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
              <StyledIconButton>
                <Twitter />
              </StyledIconButton>
              <StyledIconButton>
                <Facebook />
              </StyledIconButton>
              <StyledIconButton>
                <Box component="img" src={medium} alt="medium" />
              </StyledIconButton>
              <StyledIconButton>
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
