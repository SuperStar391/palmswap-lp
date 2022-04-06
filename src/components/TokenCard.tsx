import * as React from "react";
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
  return (
    <Box
      sx={{
        p: "20px",
        background: "#0D0617",
        border: "1px solid #111015",
        borderRadius: "8px",
        minWidth: "350px",
      }}
    >
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
      <Box
        sx={{
          display: "flex",
          gap: "14px",
          mt: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: isMediumScreen ? "20px" : "24px",
            lineHeight: isMediumScreen ? "27px" : "32px",
            letterSpacing: isMediumScreen ? "-0.43px" : "-0.5px",
          }}
        >
          ${price.toLocaleString()}
        </Typography>
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
  );
};

export default TokenCard;
