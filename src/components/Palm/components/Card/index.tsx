import { styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

interface IProp {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

const StyledCard = styled(Box)`
  flex: 1;
  text-align: center;
  background: #0b0612;
  padding: 70px 70px 40px;
  border-radius: 16px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    bottom: -7px;
    left: 30px;
    right: 30px;
    padding: 10px;
    background: linear-gradient(90deg, #9d7be9 0%, #6f57d1 100%);
    border-radius: 10px;
    z-index: -1;
  }
  :hover {
    .card-image {
      transform: scale(1.1);
      transition: 0.3s;
    }
  },
`;

const Card = function (props: IProp) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledCard
      sx={{
        "&:hover": {
          "& .card-image": {
            boxShadow: `0px 0px 20px 0px ${props.color}7f`,
          },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "40px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            margin: "-70px auto 0",
            padding: "30px",
            width: "40px",
            background: props.color,
            filter: "blur(40px)",
          }}
        ></Box>
      </Box>
      <Box
        className="card-image"
        sx={{
          width: "100px",
          height: "100px",
          padding: "15px",
          border: `1px solid ${props.color}`,
          borderRadius: "20px",
          background: `${props.color}36`,
          margin: "-120px auto 20px",
        }}
      >
        <Box
          component="img"
          src={props.icon}
          alt="governance"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
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
        sx={{ fontSize: isSmallScreen ? "13px" : "16px", opacity: "0.6" }}
      >
        {props.desc}
      </Typography>
    </StyledCard>
  );
};

export default Card;
