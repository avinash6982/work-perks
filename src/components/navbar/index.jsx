import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import AbcIcon from "@mui/icons-material/Abc";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

//responsive navbar component, optimized for mobile and desktop view
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //items inside desktop-menu
  const menuItems = ["Profile", "My account", "Signout"];
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {Object.keys(menuItems).map((key) => (
        <MenuItem onClick={handleMenuClose} key={key}>
          {menuItems[key]}
        </MenuItem>
      ))}
    </Menu>
  );

  //items inside mobile-menu
  const mobileMenuItems = [
    {
      name: "Messages",
      component: <MailIcon />,
      badgeContent: 5,
      badgeColor: "error",
      label: "show 5 new mails",
    },
    {
      name: "Notifications",
      component: <NotificationsIcon />,
      badgeEnabled: true,
      badgeContent: 10,
      badgeColor: "error",
      label: "show 10 new notifications",
    },
    {
      name: "Profile",
      component: <AccountCircle />,
      label: "profile page",
    },
    {
      name: "My account",
      component: <SettingsIcon />,
      label: "my account",
    },
    {
      name: "Signout",
      component: <LogoutIcon />,
      label: "signout",
    },
  ];
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {Object.keys(mobileMenuItems).map((key) => (
        <MenuItem key={key}>
          <IconButton
            size="large"
            aria-label={mobileMenuItems[key].label}
            color="inherit"
          >
            <Badge
              badgeContent={mobileMenuItems[key].badgeContent}
              color={mobileMenuItems[key].badgeColor}
            >
              {mobileMenuItems[key].component}
            </Badge>
          </IconButton>
          <p>{mobileMenuItems[key].name}</p>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} color="default">
        <Toolbar>
          <AbcIcon sx={{ fontSize: 70, color: "#387BAA" }} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show new mails"
              color="inherit"
            >
              <Badge badgeContent={5} color="error">
                <ChatBubbleOutlineOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit"
            >
              <Badge badgeContent={10} color="error">
                <NotificationsOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize="large" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
