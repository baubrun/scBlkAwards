import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import "./nav.css";
import { useTranslation } from "react-i18next";
import { FiMail } from "react-icons/fi";
import { BsClipboardData } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { authState, logOut } from "../../app/redux/auth";
import { useHistory } from "react-router-dom";

const DrawerPanel = (props) => {
  const classes = useStyles();
  const { t } = useTranslation("nav");
  const { loggedIn } = useSelector(authState);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={classes.toolbar}>
      <List>
        <a className={classes.navLinks} href="mailto:lairebaux@live.com">
          <ListItem>
            <ListItemIcon className={classes.drawerIcons}>
              <FiMail className={classes.contact} />
            </ListItemIcon>
            <ListItemText className={classes.navIconLink} primary="Contact" />
          </ListItem>
        </a>
        {props.data.map((i, idx) => {
          return (
            <Link key={idx} className={classes.navLinks} to={i.url}>
              <ListItem>
                <ListItemIcon
                  className={classes.drawerIcons}
                  style={{ color: `${i.color}` }}
                >
                  {i.icon}
                </ListItemIcon>
                <ListItemText
                  className={classes.navIconLink}
                  primary={t(i.name)}
                />
              </ListItem>
            </Link>
          );
        })}

        {/* Tableau */}
        {loggedIn && (
          <>
            <Link key={"tableau"} className={classes.navLinks} to="/tableau">
              <ListItem>
                <ListItemIcon
                  className={classes.drawerIcons}
                  style={{ color: "white" }}
                >
                  <BsClipboardData />
                </ListItemIcon>
                <ListItemText
                  className={classes.navIconLink}
                  primary={t("dashboard")}
                />
              </ListItem>
            </Link>

              <ListItem>
                <ListItemIcon
                  className={classes.drawerIcons}
                  onClick={() => {
                    dispatch(logOut());
                    history.push("/");
                  }}
                  style={{ color: "gold" }}
                >
                  <FiLogOut />
                </ListItemIcon>
                <ListItemText className={classes.navIconLink} />
              </ListItem>
          </>
        )}
      </List>
    </div>
  );
};

export default DrawerPanel;
