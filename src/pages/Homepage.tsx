import { useEffect, useState } from "react";
import { Button, Link, styled, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import TokenCard from "components/TokenCard";
import RoadmapCard from "components/RoadmapCard";
import TokenFeatureCard from "components/TokenFeatureCard";
import OnChainStatCard from "components/OnChainStatCard";

import { roadmap } from "config/roadmap";
import { tokenFeatures } from "config/tokenFeatures";
import { onChainStats } from "config/onChainStats";
import { investors } from "config/investors";

import ethLogo from "assets/ethLogo.png";
import btcLogo from "assets/btcLogo.png";
import dappImg from "assets/dapp.svg";
import dappMobileImg from "assets/dapp.png";

import { IRoadmap } from "interfaces/IRoadmap";
import { ITokenFeature } from "interfaces/ITokenFeature";
import { IOnChainStat } from "interfaces/IOnChainStat";
import { IInvestor } from "interfaces/IInvestor";

import V1States from "../components/V1States";
import Trading from "../components/Trading";
import Blog from "../components/Blog";
import RewardsCycle from "../components/RewardsCycle";

const StyledButton = styled(Button)`
  border: none;
  padding: 8px 24px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border-radius: 24px;
`;

const Homepage = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [cryptoPrices, setCryptoPrices] = useState({
    BTC: { USD: 38538.72 },
    ETH: { USD: 2562.33 },
  });

  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD"
    )
      .then((res) => res.json())
      .then((json) => {
        setCryptoPrices(json);
      });
  }, []);

  return (
    <Box
      sx={{
        pt: "48px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/*  */}
      <Box
        sx={{
          maxWidth: isSmallScreen
            ? "inherit"
            : isMediumScreen
            ? "525px"
            : "623px",
          textAlign: "center",
        }}
      >
        <Typography
          color="textSecondary"
          sx={{
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "4px",
            pb: "8px",
          }}
        >
          TESTNET NOW LIVE
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? "40px" : isMediumScreen ? "72px" : "52px",
            lineHeight: isSmallScreen ? "45.3px" : "64px",
            letterSpacing: isSmallScreen ? "-0.27px" : "-0.5px",
            fontWeight: "600",
            pb: "20px",
          }}
        >
          Perpetuals Decentralized
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? "14px" : "18px",
            lineHeight: "24px",
            opacity: "0.6",
            pb: "20px",
          }}
        >
          Trade perpetuals decentralized with up to 10x leverage and earn tokens
          while trading trough Tradingcycles.
        </Typography>
        <StyledButton
          href="https://testnet.palmswap.org"
          variant="contained"
          sx={{ marginBottom: "20px" }}
        >
          Visit Testnet
        </StyledButton>
        <Link
          href="https://docs.palmswap.org"
          target="_blank"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
            fontSize: isSmallScreen ? "14px" : "16px",
          }}
        >
          Documentation
          <OpenInNewIcon fontSize="medium" sx={{ pl: "8px" }} />
        </Link>
      </Box>

      {/* dapp image */}
      <Box
        sx={{
          maxWidth: isMediumScreen ? "100%" : "900px",
          mt: isSmallScreen ? "53px" : "80px",
          display: "flex",
          alignItems: "center",
        }}
        component="img"
        src={isSmallScreen ? dappMobileImg : dappImg}
      />
      <V1States />
      <Box
        sx={{
          pt: isSmallScreen ? "30px" : isMediumScreen ? "50px" : "100px",
        }}
      >
        {/* Market part */}
        <Box sx={{ textAlign: "center" }}>
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
            MARKETS
          </Typography>
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
            Trade Perpetuals With Us
          </Typography>
          <Typography
            sx={{
              fontSize: isSmallScreen ? "14px" : "17px",
              lineHeight: "22px",
              opacity: "0.6",
              pb: "20px",
            }}
          >
            More Markets will be added gradually.
          </Typography>
        </Box>

        {/* ETH/BTC data */}
        <Box display="flex" gap="24px" flexDirection="column">
          <Box
            display="flex"
            gap="24px"
            flexWrap="wrap"
            justifyContent="center"
          >
            <TokenCard
              name="Ethereum"
              symbol="ETH"
              logo={ethLogo}
              price={cryptoPrices.ETH.USD}
              graph="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg"
            />
            <TokenCard
              name="Bitcoin"
              symbol="BSC"
              logo={btcLogo}
              price={cryptoPrices.BTC.USD}
              graph="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg"
            />
          </Box>
          <Box
            display="flex"
            gap="24px"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Box
              sx={{
                p: "20px",
                background: "#0D0617",
                border: "1px solid #111015",
                borderRadius: "8px",
                width: isSmallScreen ? "100%" : "50%",
                textAlign: "center",
              }}
            >
              <StyledButton
                variant="contained"
                sx={{
                  width: "40px",
                  padding: "8px",
                  minWidth: "auto",
                  marginBottom: "10px",
                }}
              >
                +
              </StyledButton>
              <Typography sx={{ fontSize: isMediumScreen ? "14px" : "16px" }}>
                Stay Tuned
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmallScreen ? "10px" : "12px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  opacity: 0.6,
                }}
              >
                More Coming Soon!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box py={isSmallScreen ? "20px" : isMediumScreen ? "40px" : "70px"}>
        {/* why palmswap */}
        <Box
          sx={{
            textAlign: "center",
            // maxWidth: isSmallScreen ? "306px" : "inherit",
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
            ADVANTAGES
          </Typography>
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
            Why Palmswap Protocol?
          </Typography>
          <Typography
            sx={{
              fontSize: isSmallScreen ? "14px" : "17px",
              lineHeight: "22px",
              opacity: "0.6",
              pb: "20px",
            }}
          >
            In order to meet the needs of all traders we rely on Multi-protocol.
          </Typography>
        </Box>

        {/* Roadmap */}
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {roadmap.map((r: IRoadmap, idx: number) => (
            <RoadmapCard key={idx} {...r} />
          ))}
        </Box>
      </Box>

      {/* $PALM */}
      <Box
        sx={{
          py: isSmallScreen ? "30px" : isMediumScreen ? "50px" : "100px",
          textAlign: "center",
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
          $PALM
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
          3 things you need to know about Palm token
        </Typography>
        <Box
          sx={{
            pt: "50px",
            display: "flex",
            gap: isSmallScreen ? "25px" : isMediumScreen ? "20px" : "48px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            m: isSmallScreen ? "0 -10px 0 -20px" : "0px",
          }}
        >
          {tokenFeatures.map((feature: ITokenFeature, idx: number) => (
            <TokenFeatureCard key={idx} {...feature} />
          ))}
        </Box>
      </Box>
      <RewardsCycle />
      <Blog />
      {/* investors */}
      <Box
        sx={{
          py: isSmallScreen ? "30px" : isMediumScreen ? "50px" : "100px",
          textAlign: "center",
          width: "100%",
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
          backed by
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? "24px" : isMediumScreen ? "30px" : "32px",
            lineHeight: "40px",
            letterSpacing: "-0.5px",
            fontWeight: "600",
          }}
        >
          Significant investors
        </Typography>
        <Box
          sx={{
            mt: isSmallScreen ? "30px" : isMediumScreen ? "40px" : "48px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: isSmallScreen ? "0px" : "24px",
          }}
        >
          {investors.map((investor: IInvestor, idx: number) => (
            <Box key={idx} p={isSmallScreen ? "10px" : "20px"} flex="0 0 30%">
              <Box component="img" src={investor.logo} alt={investor.name} />
            </Box>
          ))}
        </Box>
      </Box>
      <Trading />
    </Box>
  );
};
export default Homepage;
