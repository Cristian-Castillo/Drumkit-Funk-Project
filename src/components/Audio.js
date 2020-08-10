import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function ContinuousSlider() {
  
    const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
      </Typography>
      <Grid container spacing={2}>
        <Grid item style={{marginTop:'-6px'}}>
          <VolumeDown />
        </Grid>
        <Grid item xs >
          <Slider style= {{color:'#A846A0'}}value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item style={{marginTop:'-4.5px'}}>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}