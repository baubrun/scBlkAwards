import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";

import { storeData } from "../data/StoreData";

const useStyles = makeStyles({
  icon: {
    fontSize: "64px",
  },
  root: {
    maxWidth: 345,
    padding: "32px",
  },
});

const Store = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" spacing={4}>
      {storeData.map((d, idx) => {
        return (
          <Grid item>
            <Card className={classes.root} key={idx}>
              <CardActionArea>
                <CardHeader className={classes.icon} avatar={d.icon} />
                {/* <CardContent></CardContent> */}

                <CardActions >
                  <Typography variant="h5">{d.title}</Typography>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Store;
