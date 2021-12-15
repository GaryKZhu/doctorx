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


  const { values, handleChange } = props;
  const chosen = values.chosen; 
  const error = chosen.filter((v) => v).length == 0;
  const next = (e) => {
    e.preventDefault(); 
    props.setStep(47); 
  }

  const back = (e) => {
    e.preventDefault();
    let cur = props.values.step - 40; 
    let found = false; 
    for(let i = cur-2; i>=0; i--) {
      if(chosen[i]) {
        props.setStep(40+i+1); 
        found = true; 
        break; 
      }
    }
    if(!found) props.setStep(40); 
  }
  const classes = useStyles(); 
  return (
    <Dialog
      open
      fullWidth
      maxWidth='sm'
    >
      <Box>
          <Typography className = {classes.text} variant="h3" color="primary" align="center">
              Confirm
          </Typography>
      </Box>

      <Box p="1rem" display="flex" justifyContent="center" alignItems="center" >
        <TextField
          style ={{width: '50%'}}
          placeholder={"Add any comments here:"}
          value = {props.values.comments}
          multiline
          rows={1}
          rowsMax={Infinity}
          onChange={handleChange('comments')}
        />
      </Box>
      <Box p="1rem" display="flex" justifyContent="center" alignItems="center" >
        <Button
            variant = "contained"
            color = "secondary"
            onClick = {back}
        >
            Back
        </Button>
      </Box>

      <Box className = {classes.continue} display="flex" justifyContent="center" alignItems="center" >
        <Button
            variant = "contained"
            color = "primary"
            onClick = {next}
        >
            Finish
        </Button>
      </Box>
    </Dialog>
  );
}