import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./styles";
import { useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { navData } from "../../data/navData";
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import DrawerPanel from "./DrawerPanel";
import clsx from "clsx";
import Routes from "./Routes";
// import logo from "../../media/lairebauxNav.png";
import { Link } from "react-router-dom";



const Nav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <div className={classes.root}>
        {/* <div> */}
        <CssBaseline />
        <Box>
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: mobileOpen,
            })}
          >
            <Toolbar className={classes.title}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                edge="start"
                className={clsx(classes.menuButton, mobileOpen && classes.hide)}
              >
                <TiThMenuOutline />
              </IconButton>

              <Box >
                <Link to="/">
                <img
                className={classes.logo}
                  src={require("../../media/lairebauxNav.png")}
                  alt={<Typography variant="h5">LAIREBAUX</Typography>}
                />
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={toggleDrawer}>
              {theme.direction === "ltr" ? (
                <AiOutlineDoubleLeft className={classes.drawerToggleIcon} />
              ) : (
                <AiOutlineDoubleRight className={classes.drawerToggleIcon} />
              )}
            </IconButton>
          </div>
          <DrawerPanel data={navData} />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: mobileOpen,
          })}
        >
          <div className={classes.drawerHeader} />

          <Routes mobileOpen={mobileOpen} />
        </main>
      </div>
    </>
  );
};

export default Nav;
