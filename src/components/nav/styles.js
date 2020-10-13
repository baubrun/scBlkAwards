import {
  makeStyles,
} from "@material-ui/core/styles";
import theme from "../../config/themeColors"

const drawerWidth = 240;


export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  body: {
    fontSize: "48px",
  },
  contact: {
    color: "#0066ff",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -140,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

  drawerToggleIcon: {
    color: "white",
    // fontSize: "48px",
    marginLeft: "160px"
  },
  drawerIcons: {
    fontSize: "32px",
    margin: "8px",
  },
  drawerPaper: {
    backgroundColor: "#424242",
    width: drawerWidth,
  },
  hide: {
    display: 'none',
  },
  logo: {
    // color: "white",
    // height: 200,
    // width: 200,
    // objectFit: "contain",
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  MuiListItemText: {
    primary: {
      fontSize: "16px",
    }
  },
  navLinks: {
    textDecoration: "none !important",
  },

  navIconLink: {
    color: "#fff",
    "&:hover": {
      color: "red",
      transition: "all 1s linear",

    },
  },
  title: {
    // marginLeft: "auto",
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },

  // // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar

}))