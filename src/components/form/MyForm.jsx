import React from "react";
import { useForm, } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { TextField,  Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { modalMsg, setError } from "../../app/redux/messageModal";
import { authState, LogIn } from "../../app/redux/auth";
import { useDispatch, useSelector } from "react-redux";
import MsgModal from "../../components/msgModal/MsgModal"


const useStyles = makeStyles((theme) => ({
  textFields: {
    margin: "16px 0",
    minWidth: "500px",
    fontSize: "16px",
    textTransform: "capitalize",
  },
  buttonRegister: {
    backgroundColor: "#0066ff !important",
    "&:hover": { backgroundColor: "#666699 !important" },
    color: "white",
    fontSize: "16px",
    fontWeight: "bolder",
  },
  buttonLogin: {
    backgroundColor: "#00cc00 !important",
    "&:hover": { backgroundColor: "#990033 !important" },
    color: "white",
    fontSize: "16px",
    fontWeight: "bolder",
  },
}));

const MyForm = () => {
  const classes = useStyles();
  const { handleSubmit, register, reset, setValue } = useForm();
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = async (data) => {
    console.log('data :>> ', data);
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    try {
      const res = await fetch("/api/connect", {
        method: "POST",
        body: formData,
      });
      const resJson = await res.json();
      if (resJson.success) {
        dispatch(LogIn())
        reset();
        history.push("/") 
      } else {
        dispatch(setError(true));
        dispatch(modalMsg(resJson.message));
      }
    } catch (error) {
      dispatch(setError(true));
      dispatch(modalMsg(error.message));
    }

  };

  return (
    <>
    < MsgModal/>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
 
      <Grid item>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item>
            <TextField
              className={classes.textFields}
              label="T'es Qui"
              inputRef={register}
              name="username"
            />
          </Grid>
          <Grid>
            <TextField
              className={classes.textFields}
              label="Quoi"
              inputRef={register}
              name="password"
            />
          </Grid>
          <Grid item>
            <Button
              className={classes.buttonRegister}
              type="submit"
              variant="contained"
            >
              Vas-Y
            </Button>
          </Grid>
        </form>
      </Grid>


    </Grid>
    </>
  );
};

export default MyForm;
