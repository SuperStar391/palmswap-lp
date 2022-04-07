import { useEffect, useState } from "react";
import { Button, Link, styled, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import TokenCard from "components/TokenCard";
import { investors } from "config/investors";

import ethLogo from "assets/eth.png";
import btcLogo from "assets/btc.png";
import bnbLogo from "assets/bnb.png";
import usdLogo from "assets/tether.png";
import dappImg from "assets/dapp.svg";
import dappMobileImg from "assets/dapp.png";
import background1 from "assets/background1.png";
import background2 from "assets/background2.png";
import bgMobile from "assets/bgMobile.png";

import { IInvestor } from "interfaces/IInvestor";

import V1States from "../components/V1States";
import Trading from "../components/Trading";
import Blog from "../components/Blog";
import RewardsCycle from "../components/RewardsCycle";
import Palm from "../components/Palm";
import Roadmap from "../components/Roadmap";

const StyledButton = styled(Button)`
  border: none;
  padding: 8px 24px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border-radius: 24px;
`;

const GradientText = styled(Typography)`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 4px;
  font-weight: 500;
  background: linear-gradient(to right, #9d7be9 0%, #6f57d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  display: inline-block;
`;

const Homepage = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [imgSize, setImgSize] = useState(0);
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

  useEffect(() => {
    if (isSmallScreen) {
      setImgSize(40);
    } else {
      setImgSize(50);
    }
  }, [isSmallScreen, isMediumScreen]);

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
      {isSmallScreen ? (
        <Box
          component="img"
          src={bgMobile}
          sx={{
            position: "absolute",
            top: 0,
            width: "100vw",
            zIndex: -1,
          }}
        />
      ) : (
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "1000px",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={background1}
            sx={{
              position: "absolute",
              top: "-30%",
              left: "-12%",
              width: "57vw",
              zIndex: -1,
            }}
          />
          <Box
            component="img"
            src={background2}
            sx={{
              position: "absolute",
              top: "-17%",
              right: "-15%",
              width: "57vw",
              zIndex: -1,
            }}
          />
        </Box>
      )}
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
        <GradientText sx={{ pb: "8px" }}>TESTNET NOW LIVE</GradientText>
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
            fontSize: isSmallScreen ? "13px" : "16px",
            lineHeight: "24px",
            opacity: "0.6",
            pb: "30px",
            width: isSmallScreen ? "100%" : "50%",
            margin: "0 auto",
          }}
        >
          Trade perpetuals decentralized with up to <b>10x leverage</b> and earn
          tokens while trading trough Tradingcycles.
        </Typography>
        <StyledButton
          href="https://testnet.palmswap.org"
          variant="contained"
          sx={{ marginBottom: "20px", padding: "14px 36px" }}
        >
          Visit Testnet
        </StyledButton>
        <Box>
          <Link
            href="https://docs.palmswap.org"
            target="_blank"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "text.secondary",
              fontSize: isSmallScreen ? "14px" : "16px",
            }}
          >
            Documentation
            <OpenInNewIcon fontSize="medium" sx={{ pl: "8px" }} />
          </Link>
        </Box>
      </Box>

      {/* dapp image */}
      <Box sx={{ mt: isSmallScreen ? "53px" : "80px", position: "relative" }}>
        <Box
          sx={{ maxWidth: isMediumScreen ? "100%" : "900px" }}
          component="img"
          src={isSmallScreen ? dappMobileImg : dappImg}
        />
        <Box
          display="flex"
          gap="16px"
          flexDirection={isSmallScreen ? "row" : "column"}
          sx={
            isSmallScreen
              ? { marginTop: "-30px", justifyContent: "center" }
              : {
                  position: "absolute",
                  bottom: "30px",
                  right: `${-imgSize / 2}px`,
                }
          }
        >
          <Box
            component="img"
            src={ethLogo}
            width={imgSize}
            height={imgSize}
            alt="eth"
          />
          <Box
            component="img"
            src={bnbLogo}
            width={imgSize}
            height={imgSize}
            alt="bnb"
          />
          <Box
            component="img"
            src={btcLogo}
            width={imgSize}
            height={imgSize}
            alt="btc"
          />
          <Box
            component="img"
            src={usdLogo}
            width={imgSize}
            height={imgSize}
            alt="usd"
          />
        </Box>
      </Box>
      <V1States />
      <Box
        sx={{
          pt: isSmallScreen ? "30px" : isMediumScreen ? "50px" : "100px",
        }}
      >
        {/* Market part */}
        <Box sx={{ textAlign: "center" }}>
          <GradientText sx={{ pb: "8px" }}>MARKETS</GradientText>
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
              fontSize: isSmallScreen ? "13px" : "16px",
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
      <Roadmap />
      <Palm />
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
        <GradientText sx={{ pb: "8px" }}>backed by</GradientText>
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
