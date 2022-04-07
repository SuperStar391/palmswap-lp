import { useState } from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

interface Props {
  name: string;
  symbol: string;
  logo: string;
  price: number;
  graph: string;
}

const TokenCard = function ({ name, symbol, logo, price, graph }: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [isHover, setIsHover] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <Box
          sx={{
            p: "20px",
            background: "#0D0617",
            border: "1px solid #111015",
            borderRadius: "8px",
            minWidth: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <Box display="flex" gap="40px" flexDirection="row">
            <Box display="flex" gap="10px">
              <Box
                sx={{ width: isMediumScreen ? "35px" : "40px" }}
                component="img"
                src={logo}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: isMediumScreen ? "14px" : "16px",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: isSmallScreen ? "10px" : "12px",
                    lineHeight: "16px",
                    fontWeight: "400",
                    opacity: 0.6,
                  }}
                >
                  {symbol}
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: isMediumScreen ? "20px" : "24px",
                fontWeight: 600,
                lineHeight: isMediumScreen ? "27px" : "32px",
                letterSpacing: isMediumScreen ? "-0.43px" : "-0.5px",
              }}
            >
              ${price.toLocaleString()}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontSize: isSmallScreen ? "10px" : "12px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  opacity: 0.6,
                }}
              >
                24H Change (%):
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmallScreen ? "10px" : "12px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  opacity: 0.6,
                }}
              >
                24H Volume:
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmallScreen ? "10px" : "12px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  opacity: 0.6,
                }}
              >
                Funding APR (%):
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontSize: isSmallScreen ? "10px" : "12px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  opacity: 0.6,
                }}
              >
                0.33%
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmallScreen ? "10px" : "12px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  opacity: 0.6,
                }}
              >
                $2.515.641,95
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmallScreen ? "10px" : "12px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  opacity: 0.6,
                }}
              >
                -5%
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            p: "20px",
            background: "#0D0617",
            border: "1px solid #111015",
            borderRadius: "8px",
            minWidth: "350px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box display="flex" gap="30px" flex={1} flexDirection="column">
            <Box display="flex" gap="10px">
              <Box
                sx={{ width: isMediumScreen ? "35px" : "40px" }}
                component="img"
                src={logo}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: isMediumScreen ? "14px" : "16px",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: isSmallScreen ? "10px" : "12px",
                    lineHeight: "16px",
                    fontWeight: "400",
                    opacity: 0.6,
                  }}
                >
                  {symbol}
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: isMediumScreen ? "20px" : "24px",
                fontWeight: 600,
                lineHeight: isMediumScreen ? "27px" : "32px",
                letterSpacing: isMediumScreen ? "-0.43px" : "-0.5px",
              }}
            >
              ${price.toLocaleString()}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              background: "url('assets/stack.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  display: "inline-block",
                  padding: "4px",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  lineHeight: "16px",
                  fontWeight: "600",
                  color: "#0AD650",
                  background: "#0AD65019",
                  borderRadius: "4px",
                }}
              >
                +13.04%
              </Typography>
            </Box>
            <Box
              sx={{
                width: isMediumScreen ? "118px" : "140px",
                filter: "hue-rotate(85deg) saturate(80%) brightness(0.85)",
              }}
              component="img"
              src={graph}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TokenCard;
