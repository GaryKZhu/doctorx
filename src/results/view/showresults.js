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
import { useFetch } from '../FetchData'; 
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
      height: "20px",
      marginBottom: "20px",
    }
  }));
  const next = (e) => {
    e.preventDefault(); 
    props.setStep(1);
  }

  const back = (e) => {
      e.preventDefault();
      props.prevStep();
  }

  const classes = useStyles(); 
  const { values } = props;
  const res = useFetch('http://localhost:9000/api/v1/multiestimate?userid='+values.userid+'&start='+values.inputdate[0].getTime()+'&end='+(values.inputdate[1].getTime()+8640000-1), {});
  const data = res.response; 
  console.log(data)
  return (  
    <MuiThemeProvider>
      <Box>
          <Typography className = {classes.text} variant="h3" color="primary" align="center">
              Your Recommendations Are: 
          </Typography>
      </Box>
        <Box className = {classes.box} display = "flex" justifyContent="center">
            {data[0]}
        </Box>
        <Box className = {classes.box} display = "flex" justifyContent="center">
            {data[1]}
        </Box>
        <Box className = {classes.box} display = "flex" justifyContent="center">
            {data[2]}
        </Box>
        <Box display = "flex" justifyContent="center" > 
            <Button variant="contained" color="secondary" onClick = {back}>
                Back    
            </Button>

        </Box>
        <br/>
        <Box display = "flex" justifyContent="center" > 
            <Button variant="contained" color="primary" onClick = {next}>
                Return
            </Button>
        </Box>
    </MuiThemeProvider>
  );
}