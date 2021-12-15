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
import { Typography, Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'
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
        height: "75px",
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
        paddingRight:"100px"
      }, 
      box: {
        height: "75px",
        marginBottom: "5px",
      }
  }));


  const { values, handleChange, handleStateChange } = props;
  const chosen = values.chosen; 
  const error = chosen.filter((v) => v).length == 0;
  const next = (e) => {
    e.preventDefault(); 
    let cur = props.values.step - 40; 
    if(!error) {
      for(let i = cur; i<chosen.length; i++) {
        if(chosen[i]) {
          props.setStep(40+i+1); 
          break; 
        }
      }
    }
  }

  const back = (e) => {
      e.preventDefault();
      props.prevStep();
  }

  const users = [
    {
        "name": "Jane",
        "userid": 1,
    },

    {
        "name": "John",
        "userid": 2,
    },
  ]; 
  const classes = useStyles(); 
  return (
    <MuiThemeProvider>
      <Box>
          <Typography className = {classes.text} variant="h3" color="primary" align="center">
              Select Symptoms
          </Typography>
      </Box>
      <Box className = {classes.box} display = "flex" justifyContent="center">
        <FormControl>
          <InputLabel> UserID </InputLabel>
          <Select
              onChange = {handleStateChange('userid')} 
              defaultValue = {values.userid}
          >
              {users.map((row, index) => {
                  return (
                      <MenuItem key={index} value={row.userid}>{row.name}</MenuItem>
                  ); 
              })}
          </Select>
        </FormControl>
      </Box>
      <Box className = {classes.media} display = "flex" justifyContent="center">
        <FormControl
          required
          error={error}
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
        >
          <FormLabel component="legend">Pick at least one</FormLabel>
          <br/>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={chosen[0]} onChange={handleChange(0, "head")} />
              }
              label="Head"
            />
            <FormControlLabel
              control={
                <Checkbox checked={chosen[1]} onChange={handleChange(1, "lungs")} />
              }
              label="Lungs, Throat, Nose"
            />
            <FormControlLabel
              control={
                <Checkbox checked={chosen[2]} onChange={handleChange(2, "chest")} />
              }
              label="Chest"
            />
            <FormControlLabel
              control={
                <Checkbox checked={chosen[3]} onChange={handleChange(3, "abdomen")}/>
              }
              label="Abdomen"
            />
            <FormControlLabel
              control={
                <Checkbox checked={chosen[4]} onChange={handleChange(4, "limbs")} />
              }
              label="Limbs"
            />
          </FormGroup>
        </FormControl>
      </Box>
      
      <Box className={classes.back} p="1rem" display="flex" justifyContent="center" alignItems="center" >
        <Button
            variant = "contained"
            color = "secondary"
            onClick = {back}
        >
            Back
        </Button>
      </Box>

      <Box className={classes.continue} display="flex" justifyContent="center" alignItems="center" >
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