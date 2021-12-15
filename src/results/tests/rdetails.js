import React, { Component, setState, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import makeStyles from '@material-ui/core/styles/makeStyles';



export default function HDetails1(props) {
    const { handleChange } = props;
    var { values : { userid, date, organization, section, status } } = props;

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
                    Enter Report Details
                </Typography>
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >

                <FormControl>
                    <InputLabel> UserID </InputLabel>
                    <Select
                        onChange = {handleChange('userid')} 
                        defaultValue = {userid}
                    >
                        {users.map((row, index) => {
                            return (
                                <MenuItem key={index} value={row.userid}>{row.name}</MenuItem>
                            ); 
                        })}
                    </Select>
                </FormControl>
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Date"
                    placeholder = "Enter Date of Report"
                    color = "primary"
                    onChange = {handleChange('date')}
                    defaultValue = {date}
                />
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Organization"
                    placeholder = "Enter Organization Name"
                    color = "primary"
                    onChange = {handleChange('organization')}
                    defaultValue = {organization}
                />
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <FormControl>
                    <InputLabel> Section </InputLabel>
                    <Select
                        onChange = {handleChange('section')}
                        defaultValue = {section}
                    >
                        <MenuItem value = {"Hematology"}> Hematology </MenuItem>
                        <MenuItem value = {"Urine"}> Urine </MenuItem>
                    </Select>
                </FormControl> 
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Status"
                    placeholder = "Enter Status"
                    color = "primary"
                    onChange = {handleChange('status')}
                    defaultValue = {status}
                />
            </Box>

            <Box p="1rem" display="flex" justifyContent="center" alignItems="center"  >

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

            <br/>
            <br/>


        </MuiThemeProvider>
    );
}