import React from "react";
import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// import _ from "lodash";
import { audioFieldInputs, audioFieldFiles } from "../../data/dashboardData";

import { useTranslation } from "react-i18next";

import { useForm } from "react-hook-form";

import { fetchAudioRequest } from "../../app/redux/fetchAudio";
import { modalMsg, setError } from "../../app/redux/messageModal";

const useStyles = makeStyles((theme) => ({
  textFields: {
    margin: "16px 0",
    minWidth: "500px",
    fontSize: "16px",
    textTransform: "capitalize",
  },
  button: {
    backgroundColor: "#424242 !important",
    color: "white",
    fontSize: "16px",
    fontWeight: "bolder",
  },
}));

const AudioForm = () => {
  const { handleSubmit, register, reset } = useForm();
  const classes = useStyles();
  const { t } = useTranslation("dashboard");
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("file", data.file[0]);
    formData.append("album", data.album);
    formData.append("author", data.author);
    formData.append("title", data.title);

    try {
      const res = await fetch("/api/upload-song", {
        method: "POST",
        body: formData,
      });
      const resJson = await res.json();
      dispatch(modalMsg(t(resJson.message)));
      reset();
      if (resJson.success) {
        dispatch(fetchAudioRequest());
      }
    } catch (error) {
      dispatch(setError(true));
      dispatch(modalMsg(error.message));
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h5">Ajoute une chanson</Typography>
      </Grid>
      <Grid item>
        <form onSubmit={handleSubmit(onSubmit)}>
          {audioFieldInputs.map((field, idx) => {
            return (
              <Grid key={idx} item>
                <TextField
                  className={classes.textFields}
                  inputRef={register}
                  label={t(field)}
                  name={field}
                  variant="outlined"
                />
              </Grid>
            );
          })}
          {audioFieldFiles.map((file, idx) => {
            return (
              <Grid key={idx} item>
                <TextField
                  className={classes.textFields}
                  helperText={t(file)}
                  InputLabelProps={{
                    shrink: false,
                  }}
                  inputRef={register}
                  name={file}
                  type="file"
                  variant="outlined"
                />
              </Grid>
            );
          })}
          <Button className={classes.button} type="submit" variant="contained">
            Soumettre
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default AudioForm;
