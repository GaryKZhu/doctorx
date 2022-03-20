import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';

export class Success extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values : { fname, lname, height, weight, age, gender, email } } = this.props;
        var time = new Date(); 
        time.setTime(Date.now()); 
        console.log(height)
        console.log(weight)
        const data = {
            "userid" : 0,
            "firstname" : fname, 
            "lastname" : lname,
            "timestamp" : time.getTime(),
            "email" : email,
            "height" : parseInt(height),
            "weight" : parseInt(weight),
            "birthday" : age,
            "gender" : gender
        };
        console.log(data)
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            redirect: 'follow'
        };


        fetch("http://localhost:9000/api/v1/insertuser", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        return (
            <MuiThemeProvider>
                <Dialog open fullWidth={true} maxWidth = {'md'} scroll = "body">
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                Success
                            </Typography>
                        </Toolbar>
                    </AppBar>


                <Box>
                    <Typography variant="h3" color="primary" align="center">
                        Success
                    </Typography>
                </Box>

                <h3 align = "center"> Thank you for your submission! </h3>
                <p align = "center"> We are processing your data and will send you an email when we are finished. </p>

                </Dialog>
            </MuiThemeProvider>
        );
    }
}

export default Success
