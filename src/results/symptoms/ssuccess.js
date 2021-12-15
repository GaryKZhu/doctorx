import * as React from 'react';
import Box from '@material-ui/core/Box';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { MuiThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Typography, Button, Dialog, TextField } from '@material-ui/core';
import {useState} from 'react'; 
export default function SelectSymptoms(props) {
    const useStyles = makeStyles((theme) => ({
      root: {
        width: '100%',
      },
      paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
      },
      TableCell: {
        padding: "0px 8px",
        width: 400
      },
      visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
      },
      text: {
        height: "100px",
        paddingTop: '15%', 
      },
      media: {
        height: "200px",
      },
      back: {
        marginTop: "50px",
        paddingRight: "120px"
      }, 
      continue: {
        paddingBottom:"100px"
      }
  }));


  const { reset, values } = props; 
  const next = (e) => {
    e.preventDefault(); 
    reset('head');
    reset('lungs');
    reset('abdomen');
    reset('chest');
    reset('limbs')
    reset('hselected');
    reset('luselected');
    reset('aselected');
    reset('cselected');
    reset('liselected'); 
    reset('comments');
    reset('userid')
    props.setStep(1); 
  }

  var time = new Date(); 
  time.setTime(Date.now()); 
  const data = {
    "Userid" : values.userid,
    "Collection_date": time.toString(),
    "Head" : values.head.toString(),
    "Lung" : values.lungs.toString(),
    "Chest" : values.chest.toString(),
    "Abdomen" : values.abdomen.toString(),
    "Limbs" :values.limbs.toString()
  };
  
  const requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      redirect: 'follow'
  };

  fetch("http://10.0.0.51:9000/api/v1/symptoms", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  const classes = useStyles(); 
  return (
    <Dialog
      open
      fullWidth
      maxWidth='sm'
    >
      <Box>
          <Typography className = {classes.text} variant="h3" color="primary" align="center">
              Success
          </Typography>
      </Box>

      <Box p="1rem" className = {classes.continue} display="flex" justifyContent="center" alignItems="center" >
        <Button
            variant = "contained"
            color = "primary"
            onClick = {next}
        >
            Return
        </Button>
      </Box>
    </Dialog>
  );
}