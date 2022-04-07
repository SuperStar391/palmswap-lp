import * as React from "react";
import { styled as mStyled, alpha } from "@mui/material/styles";
import { Menu as MenuIcon, Close } from "@mui/icons-material";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

import logo from "assets/logo.svg";

const MenuItemWrapper = styled.div`
  cursor: "pointer";
  padding: 6px 10px;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const TradeBtn = styled(Button)`
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 24px;
  width: 150px;
  text-alignment: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Header = function () {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const CustomMenu = mStyled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  return (
    <Box
      sx={{
        py: isSmallScreen ? "25px" : "35px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            width: isSmallScreen ? "154px" : isMediumScreen ? "161px" : "208px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => navigate("/")}
          component="img"
          src={logo}
        />
        <Box display="flex" justifyContent="space-between">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <MenuItemWrapper onClick={() => navigate("/about")}>
              About
            </MenuItemWrapper>
            <MenuItemWrapper onClick={() => navigate("/developers")}>
              Developers
            </MenuItemWrapper>
            <MenuItemWrapper onClick={() => navigate("/token")}>
              Token
            </MenuItemWrapper>
            <MenuItemWrapper onClick={() => navigate("/community")}>
              Community
            </MenuItemWrapper>
            <MenuItemWrapper onClick={() => navigate("/careers")}>
              Careers
            </MenuItemWrapper>
          </Box>
        </Box>
        <TradeBtn variant="contained">Trade</TradeBtn>

        {isSmallScreen && (
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {open ? (
              <Close
                style={{
                  pointerEvents: "none",
                  color: "white",
                  fontSize: "22px",
                }}
              />
            ) : (
              <MenuIcon
                style={{
                  pointerEvents: "none",
                  color: "white",
                  fontSize: "22px",
                }}
              />
            )}
          </Button>
        )}
        <CustomMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          // sx={{  }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/about");
            }}
          >
            About
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/developers");
            }}
          >
            Developers
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/teams");
            }}
          >
            Token
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/community");
            }}
          >
            Community
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/careers");
            }}
          >
            Careers
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/trade");
            }}
          >
            Trade
          </MenuItem>
        </CustomMenu>
      </Box>
    </Box>
  );
};

export default Header;
