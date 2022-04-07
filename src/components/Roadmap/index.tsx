import { Grid, styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import globalIcon from "assets/global.svg";

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

const StyledGrid = styled(Grid)`
  position: relative;
  ::before {
    content: "";
    padding: 5px;
    border-radius: 5px;
    background: #8568db;
    position: absolute;
    right: -27px;
    top: 51px;
  }
`;

const StyledContainer = styled(Grid)`
  position: relative;
  border-right: 3px solid #6d80ca26;
  text-align: right;
  padding-right: 20px;
  ::before {
    content: "";
    padding: 5px;
    border-radius: 5px;
    background: #8568db;
    position: absolute;
    right: -7px;
    bottom: 10px;
  }
`;

const Roadmap = function () {
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
      <GradientText sx={{ pb: "8px" }}>Advantages</GradientText>
      <Typography
        sx={{
          fontSize: isSmallScreen ? "24px" : isMediumScreen ? "30px" : "32px",
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
          fontSize: isSmallScreen ? "13px" : "16px",
          lineHeight: "22px",
          opacity: "0.6",
          pb: "20px",
        }}
      >
        In order to meet the needs of all traders we rely on Multi-protocol.
      </Typography>

      <Grid container sx={{ marginTop: "30px" }}>
        <StyledContainer
          container
          item
          xs={6}
          direction="column"
          spacing="30px"
          paddingBottom="70px"
        >
          <StyledGrid item xs={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "20px",
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: "#8568DB",
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                V1
              </Typography>
              <Typography component="span" sx={{ fontSize: "16px" }}>
                Q2 2022
              </Typography>
            </Box>
          </StyledGrid>
          <StyledGrid item xs={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "20px",
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: "#8568DB",
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                V2
              </Typography>
              <Typography component="span" sx={{ fontSize: "16px" }}>
                Q4 2022
              </Typography>
            </Box>
          </StyledGrid>
        </StyledContainer>
        <Grid
          container
          item
          xs={6}
          spacing="30px"
          direction="column"
          sx={{
            textAlign: "left",
            paddingLeft: "20px",
            paddingBottom: "70px",
          }}
        >
          <Grid item xs={6}>
            <Box display="flex" gap="30px" flexDirection="column">
              <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Box
                  sx={{
                    height: "35px",
                    background: "#1E2130",
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    component="img"
                    src={globalIcon}
                    width={15}
                    height={15}
                    margin="10px"
                  />
                </Box>
                <Box maxWidth="300px">
                  <Typography
                    sx={{
                      fontSize: isMediumScreen ? "14px" : "16px",
                      marginBottom: "8px",
                    }}
                  >
                    Fully on-chain
                  </Typography>
                  <Typography sx={{ fontSize: "11px", opacity: 0.6 }}>
                    Trade long and short with up to 10x leverage, no sign-up, no
                    middleman, no waiting.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Box
                  sx={{
                    height: "35px",
                    background: "#1E2130",
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    component="img"
                    src={globalIcon}
                    width={15}
                    height={15}
                    margin="10px"
                  />
                </Box>
                <Box maxWidth="300px">
                  <Typography
                    sx={{
                      fontSize: isMediumScreen ? "14px" : "16px",
                      marginBottom: "8px",
                    }}
                  >
                    Use different Order Types
                  </Typography>
                  <Typography sx={{ fontSize: "11px", opacity: 0.6 }}>
                    Needed order types as limit orders, take profit and stop
                    loss on-chain available now.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Box
                  sx={{
                    height: "35px",
                    background: "#1E2130",
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    component="img"
                    src={globalIcon}
                    width={15}
                    height={15}
                    margin="10px"
                  />
                </Box>
                <Box maxWidth="300px">
                  <Typography
                    sx={{
                      fontSize: isMediumScreen ? "14px" : "16px",
                      marginBottom: "8px",
                    }}
                  >
                    Guaranteed liquidity
                  </Typography>
                  <Typography sx={{ fontSize: "11px", opacity: 0.6 }}>
                    Trade instantly with guaranteed liquidity using vAMM
                    technology at any time.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" gap="30px" flexDirection="column">
              <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Box
                  sx={{
                    height: "35px",
                    background: "#1E2130",
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    component="img"
                    src={globalIcon}
                    width={15}
                    height={15}
                    margin="10px"
                  />
                </Box>
                <Box maxWidth="300px">
                  <Typography
                    sx={{
                      fontSize: isMediumScreen ? "14px" : "16px",
                      marginBottom: "8px",
                    }}
                  >
                    Dynamic vAMM
                  </Typography>
                  <Typography sx={{ fontSize: "11px", opacity: 0.6 }}>
                    The upgrade to Dynamic vAMM is being implemented to ensure
                    optimal slippage and liquidity for traders.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Box
                  sx={{
                    height: "35px",
                    background: "#1E2130",
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    component="img"
                    src={globalIcon}
                    width={15}
                    height={15}
                    margin="10px"
                  />
                </Box>
                <Box maxWidth="300px">
                  <Typography
                    sx={{
                      fontSize: isMediumScreen ? "14px" : "16px",
                      marginBottom: "8px",
                    }}
                  >
                    Deep Liquidity
                  </Typography>
                  <Typography sx={{ fontSize: "11px", opacity: 0.6 }}>
                    Dynamic K allows us to ensure that prices are always traded
                    in the part of the curve with the highest liquidity.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Box
                  sx={{
                    height: "35px",
                    background: "#1E2130",
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    component="img"
                    src={globalIcon}
                    width={15}
                    height={15}
                    margin="10px"
                  />
                </Box>
                <Box maxWidth="300px">
                  <Typography
                    sx={{
                      fontSize: isMediumScreen ? "14px" : "16px",
                      marginBottom: "8px",
                    }}
                  >
                    High Leverage
                  </Typography>
                  <Typography sx={{ fontSize: "11px", opacity: 0.6 }}>
                    Users can trade perpetuals with up 50x leverage and profit
                    of our low fee policy.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Typography
        sx={{
          fontSize: isSmallScreen ? "13px" : "16px",
          lineHeight: "22px",
          opacity: "0.6",
          pt: "20px",
        }}
      >
        Be patient.
      </Typography>
    </Box>
  );
};

export default Roadmap;
