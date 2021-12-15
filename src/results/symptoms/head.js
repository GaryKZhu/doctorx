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


  const { values, handleChange, handleVectorChange, resetVectorId, setVectorId } = props;
  const head = values.head; 
  const chosen = values.chosen; 
  const error = head.filter((v) => v).length == 0;
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
      if(!found) props.setStep(46); 
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


  const selected = values.hselected; 
  
  const handleSelected = (e) => {
    setVectorId('hselected', e.target.name, e.target.checked)
    if(e.target.checked == 0) {
      resetVectorId(e.target.name, "head"); 
    }
  }

  const classes = useStyles(); 
  return (
    <MuiThemeProvider>
      <Box>
          <Typography className = {classes.text} variant="h3" color="primary" align="center">
              Select Symptoms
          </Typography>
      </Box>
      <br/>
      <Box>
          <Typography className = {classes.stext} variant="h6" color="primary" align="center">
              Relating to the Head
          </Typography>
      </Box>
      <Box className = {classes.media} display = "flex" justifyContent="center">
        <FormControl
          required
          error = {error}
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
        >
          <FormLabel component="legend">Pick at least one</FormLabel>
          <br/>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={selected[0]} onChange={handleSelected} />
              }
              label="Fever" name="0"
            />

            <RadioGroup className={selected[0] == 0 ? classes.visuallyHidden : ''} row name="0">
              <FormControlLabel value="1" onChange={handleVectorChange(0, "head")} control={<Radio checked={selected[0] == 0 ? false : (props.values.head[0] == 1)} />} label="1" />
              <FormControlLabel value="2" onChange={handleVectorChange(0, "head")} control={<Radio checked={selected[0] == 0 ? false : (props.values.head[0] == 2)} />} label="2" />
              <FormControlLabel value="3" onChange={handleVectorChange(0, "head")} control={<Radio checked={selected[0] == 0 ? false : (props.values.head[0] == 3)} />}  label="3" />
              <FormControlLabel value="4" onChange={handleVectorChange(0, "head")} control={<Radio checked={selected[0] == 0 ? false : (props.values.head[0] == 4)} />}  label="4" />
              <FormControlLabel value="5" onChange={handleVectorChange(0, "head")} control={<Radio checked={selected[0] == 0 ? false : (props.values.head[0] == 5)} />}  label="5" />
            </RadioGroup>
        </FormGroup>

        <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={selected[1]} onChange={handleSelected} />
              }
              label="Headache" name="1"
            />
            <RadioGroup className={selected[1] == 0 ? classes.visuallyHidden : ''} row name="1">
              <FormControlLabel value="1" onChange={handleVectorChange(1, "head")} control={<Radio checked={selected[1] == 0 ? false : (props.values.head[1] == 1)} />} label="1" />
              <FormControlLabel value="2" onChange={handleVectorChange(1, "head")} control={<Radio checked={selected[1] == 0 ? false : (props.values.head[1] == 2)} />} label="2" />
              <FormControlLabel value="3" onChange={handleVectorChange(1, "head")} control={<Radio checked={selected[1] == 0 ? false : (props.values.head[1] == 3)} />}  label="3" />
              <FormControlLabel value="4" onChange={handleVectorChange(1, "head")} control={<Radio checked={selected[1] == 0 ? false : (props.values.head[1] == 4)} />}  label="4" />
              <FormControlLabel value="5" onChange={handleVectorChange(1, "head")} control={<Radio checked={selected[1] == 0 ? false : (props.values.head[1] == 5)} />}  label="5" />
            </RadioGroup>
        </FormGroup>
        <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={selected[2]} onChange={handleSelected} />
              }
              label="Tiredness" name="2"
            />
            <RadioGroup className={selected[2] == 0 ? classes.visuallyHidden : ''} row name="2">
              <FormControlLabel value="1" onChange={handleVectorChange(2, "head")} control={<Radio checked={selected[2] == 0 ? false : (props.values.head[2] == 1)} />} label="1" />
              <FormControlLabel value="2" onChange={handleVectorChange(2, "head")} control={<Radio checked={selected[2] == 0 ? false : (props.values.head[2] == 2)} />} label="2" />
              <FormControlLabel value="3" onChange={handleVectorChange(2, "head")} control={<Radio checked={selected[2] == 0 ? false : (props.values.head[2] == 3)} />}  label="3" />
              <FormControlLabel value="4" onChange={handleVectorChange(2, "head")} control={<Radio checked={selected[2] == 0 ? false : (props.values.head[2] == 4)} />}  label="4" />
              <FormControlLabel value="5" onChange={handleVectorChange(2, "head")} control={<Radio checked={selected[2] == 0 ? false : (props.values.head[2] == 5)} />}  label="5" />
            </RadioGroup>
        </FormGroup >
        <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={selected[3]} onChange={handleSelected}/>
              }
              label="Nausea/Dizziness" name="3"
            />
            <RadioGroup className={selected[3] == 0 ? classes.visuallyHidden : ''} row name="3">
              <FormControlLabel value="1" onChange={handleVectorChange(3, "head")} control={<Radio checked={selected[3] == 0 ? false : (props.values.head[3] == 1)} />} label="1" />
              <FormControlLabel value="2" onChange={handleVectorChange(3, "head")} control={<Radio checked={selected[3] == 0 ? false : (props.values.head[3] == 2)} />} label="2" />
              <FormControlLabel value="3" onChange={handleVectorChange(3, "head")} control={<Radio checked={selected[3] == 0 ? false : (props.values.head[3] == 3)} />}  label="3" />
              <FormControlLabel value="4" onChange={handleVectorChange(3, "head")} control={<Radio checked={selected[3] == 0 ? false : (props.values.head[3] == 4)} />}  label="4" />
              <FormControlLabel value="5" onChange={handleVectorChange(3, "head")} control={<Radio checked={selected[3] == 0 ? false : (props.values.head[3] == 5)} />}  label="5" />
            </RadioGroup>
        </FormGroup>
        </FormControl>
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