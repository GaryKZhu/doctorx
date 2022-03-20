import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import { MuiThemeProvider } from '@material-ui/core';
import { Typography } from '@mui/material';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'; 
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core';
export default function InputSelector(props) {
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
  const next = (e) => {
    e.preventDefault(); 
    props.nextStep(0);
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
  const { values, handleChange, handleDateChange, handleStateChange } = props;
  const error = [values.reports, values.symptoms].filter((v) => v).length == 0;
  return (  
    <MuiThemeProvider>
      <br/> 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Box display = "flex" justifyContent="center"> 
        <iframe src="http://localhost:8080/goto/66G-8z0nz?orgId=1 &kiosk" width="1500" height="600" frameborder="0"></iframe>
      </Box>
      <br/>
      <br/>
      <br/>

    <Box display = "flex" justifyContent="center" > 
        <Button variant="contained" color="primary" onClick = {next}>
            Show Recommendations
        </Button>
    </Box>
    <br/>
    <Box display = "flex" justifyContent="center"> 
        <Button variant="contained" color="secondary" onClick = {back}>
            Back    
        </Button>
    </Box>
    </MuiThemeProvider>
  );
}