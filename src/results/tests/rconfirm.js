import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
});

export default function RConfirm(props) {
    const next = (e) => {
        e.preventDefault(); 
        props.nextStep(0);
    }

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    }
    const { classes } = props;
    const { values, handleChange } = props;

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

            <Box>
                <Typography variant="h3" color="primary" align="center">
                    Confirm Information
                </Typography>
            </Box>

            <Box>
                <Typography variant="h6" color="secondary" align="center">
                    Are you sure you want to submit?
                </Typography>
            </Box>

            <br/>
            <br/>
            <Box display = "flex" justifyContent="center" > 
                <Button variant="contained" color="secondary" onClick = {back}>
                    Back    
                </Button>

            </Box>
            <br/>
            <Box display = "flex" justifyContent="center" > 
                <Button variant="contained" color="primary" onClick = {next}>
                    Continue
                </Button>
            </Box>
            
        </MuiThemeProvider>
    );
}


