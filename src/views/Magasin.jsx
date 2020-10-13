import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  Typography,
} from "@material-ui/core";
import { TextField, Box, Input, Grid } from "@material-ui/core";
import { storeData } from "../data/StoreData";


const Magasin = () => {
  return (
    <>
      {storeData.map((d, idx) => {
        return (
          <Card key={idx}>
            <CardMedia>{d.icon}</CardMedia>
            <CardContent></CardContent>

            <CardActions style={{ textAlign: "right" }}>
              <Typography variant="h5">{d.title}</Typography>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default Magasin;
