import * as React from 'react';
import Box from '@material-ui/core/Box';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { MuiThemeProvider, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Typography, Button, RadioGroup, Radio } from '@material-ui/core';
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
        height: "60px",
        paddingTop: '15%', 
      },
      stext: {
        height: "40px",
      },
      media: {
        height: "200px",
      },
      back: {
        marginTop: "50px",
        paddingRight: "120px"
      }, 
      continue: {
        paddingRight:"100px"
      }
  }));


  const { values, handleChange, handleRegularChange, handleVectorChange, resetVectorId, setVectorId } = props;
  const ometrics = values.ometrics; 
  const chosen = values.chosen; 
  const error = ometrics.filter((v) => v).length == 0;
  const next = (e) => {
    e.preventDefault(); 
    if(!error) {
      let cur = props.values.step - 40; 
      let found = false; 
      for(let i = cur; i<chosen.length; i++) {
        if(chosen[i]) {
          props.setStep(40+i+1); 
          found = true; 
          break; 
        }
      }
      if(!found) props.setStep(47); 
    }
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



  const selected = values.oselected; 
  
  const handleSelected = (e) => {
    setVectorId('oselected', e.target.name, e.target.checked)
    if(e.target.checked == 0) {
      resetVectorId(e.target.name, "ometrics"); 
    }
  }

  const classes = useStyles(); 
  return (
    <MuiThemeProvider>
      <Box>
          <Typography className = {classes.text} variant="h3" color="primary" align="center">
              Input Health Metrics
          </Typography>
      </Box>
      <Box className = {classes.media} display = "flex" justifyContent="center">
        <FormControl
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
        >
        <br/>
        <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={selected[0]} onChange={handleSelected}/>
              }
              label="Systolic Blood Pressure" name="0"
            />
            <TextField
                className={selected[0] == 0 ? classes.visuallyHidden : ''} 
                placeholder = "Enter Higher Value (mmHg)"
                label = "BP"
                color = "primary"
                onChange = {handleVectorChange(0, "ometrics")}
                defaultValue = {values.ometrics[0] == 0 ? '' : values.ometrics[0]} 
            />
        </FormGroup>

        <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={selected[1]} onChange={handleSelected}/>
              }
              label="Diabolic Blood Pressure" name="1"
            />
            <TextField
                className={selected[1] == 0 ? classes.visuallyHidden : ''} 
                placeholder = "Enter Lower Value (mmHg)"
                label = "BP"
                color = "primary"
                onChange = {handleVectorChange(1, "ometrics")}
                defaultValue = {values.ometrics[1] == 0 ? '' : values.ometrics[1]} 
            />
        </FormGroup>
        <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={selected[2]} onChange={handleSelected}/>
              }
              label="Blood Sugar" name="2"
            />
            <TextField
                className={selected[2] == 0 ? classes.visuallyHidden : ''} 
                placeholder = "Enter Value (mmol/L)"
                label = "Blood Sugar"
                color = "primary"
                onChange = {handleVectorChange(2, "ometrics")}
                defaultValue = {values.ometrics[2] == 0 ? '' : values.ometrics[2]} 
            />
        </FormGroup>
        <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={selected[3]} onChange={handleSelected}/>
              }
              label="Heart Rate" name="3"
            />
            <TextField
                className={selected[3] == 0 ? classes.visuallyHidden : ''} 
                placeholder = "Enter Value (bpm)"
                label = "Heart Rate"
                color = "primary"
                onChange = {handleVectorChange(3, "ometrics")}
                defaultValue = {values.ometrics[3] == 0 ? '' : values.ometrics[3]} 
            />
        </FormGroup>
        <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={selected[4]} onChange={handleSelected}/>
              }
              label="Weight" name="4"
            />
            <TextField
                className={selected[4] == 0 ? classes.visuallyHidden : ''} 
                placeholder = "Enter Value (kg)"
                label = "Weight"
                color = "primary"
                onChange = {handleVectorChange(4, "ometrics")}
                defaultValue = {values.ometrics[4] == 0 ? '' : values.ometrics[4]} 
            />
        </FormGroup>
        </FormControl>
      </Box>
      <br/>
      <br/>
      <br/>
      <Box p="1rem" display="flex" justifyContent="center" alignItems="center" >
        <Button
            variant = "contained"
            color = "secondary"
            onClick = {back}
        >
            Back
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" >
        <Button
            variant = "contained"
            color = "primary"
            onClick = {next}
        >
            Continue
        </Button>
      </Box>
    </MuiThemeProvider>
  );
}