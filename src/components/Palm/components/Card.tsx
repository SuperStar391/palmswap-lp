import { styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

interface IProp {
  icon: string;
  title: string;
  desc: string;
}

const StyledCard = styled(Box)`
  flex: 1;
  text-align: center;
  background: #0b0612;
  padding: 20px;
  border-radius: 16px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 30px;
    right: 30px;
    padding: 10px;
    background: linear-gradient(90deg, #9d7be9 0%, #6f57d1 100%);
    border-radius: 10px;
    z-index: -1;
  }
`;

const Card = function (props: IProp) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledCard>
      <Box
        component="img"
        src={props.icon}
        alt="governance"
        width={100}
        margin="-70px 0 20px"
      />
      <Typography
        sx={{
          fontSize: isSmallScreen ? "16px" : isMediumScreen ? "18px" : "20px",
          lineHeight: "40px",
          letterSpacing: "-0.5px",
          fontWeight: "600",
          pb: "8px",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        sx={{ fontSize: isSmallScreen ? "14px" : "17px", opacity: "0.6" }}
      >
        {props.desc}
      </Typography>
    </StyledCard>
  );
};

export default Card;
