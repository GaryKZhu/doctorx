import { MuiThemeProvider } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import ViewLab from './images/viewresults.jpg'; 
import InsertLab from './images/insertresults.jpg';

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
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    BGap: {
      marginRight: '500px',
    },
    IGap: {
      marginRight: '220px',
    },
    Gap: {
      marginRight: '520px',
    },
    media: {
      height: "200px",
      paddingTop: '56.25%', 
      marginTop:'30'
    }
}));
export default function SelectOption(props) {  
    
    const next = (id) => {
        props.nextStep(id);
    }

    const classes = useStyles(); 
    return (
        <div> 
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        
        <Box display = "flex" justifyContent="center" className={classes.root}>
            <img className={classes.IGap} height = "250" src={ViewLab}></img>
            <img height = "250" src={InsertLab}></img>
        </Box>

        <br/><br/><br/><br/>

        <Box display = "flex" justifyContent="center" className={classes.root}> 
            <Button className = {classes.BGap} variant="contained" color="secondary" onClick={() => {next(1)}}>
                View Lab Results    
            </Button>
            <Button variant="contained" color="primary" onClick={() => {next(2)}}>
                Insert Lab Results
            </Button>
        </Box>

        <br/><br/>
        <Box display = "flex" justifyContent="center" className={classes.root}> 
            <Button className = {classes.Gap} variant="contained" color="secondary" onClick={() => {next(3)}}>
                View Symptoms   
            </Button>
            <Button variant="contained" color="primary" onClick={() => {next(4)}}>
                Insert Symptoms
            </Button>
        </Box>
        </div>
    );
}

