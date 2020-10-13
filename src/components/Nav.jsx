import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { navData } from "../data/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Nav = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleDrawer = () => {
    setMobileOpen(true);
  };

  const drawer = () => {
    return (
      <div>
        <div className={classes.toolbar}>
          <List>
            {navData.map((navItem, idx) => {
              <ListItem key={idx}>
                <ListItemText primary={navItem.name} />
              </ListItem>;
            })}
          </List>
        </div>
      </div>
    );
  };

  return (
    //   <CssBaseline/>
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <IconButton
        aria-label="open drawer"
        className={classes.menuButton}
        edge="start"
        onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography>LAIREBAUX</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
