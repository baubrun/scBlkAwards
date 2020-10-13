import React from 'react'
import Loader from 'react-loader-spinner'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  
    spinner: {
      marginTop: "50%",
    }
  }));
  
const Spinner = () => {
    const classes = useStyles();

    return (
        <Grid
        className={classes.spinner}
         container 
         direction="column" 
         justify="center" 
         alignItems="center">
          <Grid item>
            <Loader
              type="Audio"
              color="#424242"
              height={200}
              width={200}
            //    timeout={2000} //3 secs
            />
          </Grid>
        </Grid>
  
    )
}

export default Spinner
