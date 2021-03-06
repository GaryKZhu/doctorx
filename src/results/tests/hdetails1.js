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
import Box from '@material-ui/core/Box';
export default function HDetails1(props) {
    const next = (e) => {
        e.preventDefault(); 
        props.nextStep(0);
    }

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    const { handleChange } = props;

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
                    Enter Hematology Details
                </Typography>
            </Box>
            <Box>
                <Typography variant="h6" color="secondary" align="center">
                    If value is not included in test, input -1
                </Typography>
            </Box>
            <br/>
            <br/>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Sedimentation_rate"
                    helperText = "mm/hr"
                    placeholder = "Enter Sedimentation Rate"
                    color = "primary"
                    onChange={handleChange('sedimentation_rate')}
                    defaultValue = {props.values.sedimentation_rate}
                />
            </Box>

            <br/>
            <br/>
            
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Hemoglobin"
                    helperText = "g/L"
                    placeholder = "Enter Hemoglobin"
                    color = "primary"
                    onChange={handleChange('hemoglobin')}
                    defaultValue = {props.values.hemoglobin}
                />
            </Box>


            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Hematocrit"
                    helperText = "L/L"
                    placeholder = "Enter Hematocrit"
                    color = "primary"
                    onChange={handleChange('hematocrit')}
                    defaultValue = {props.values.hematocrit}
                />
            </Box>


            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "White Blood Cell Count"
                    helperText = "x10E9/L"
                    placeholder = "Enter White Blood Cell Count"
                    color = "primary"
                    onChange={handleChange('wbcc')}
                    defaultValue = {props.values.wbcc}
                />
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Red Blood Cell Count"
                    helperText = "x10E12/L"
                    placeholder = "Enter Red Blood Cell Count"
                    color = "primary"
                    onChange={handleChange('rbcc')}
                    defaultValue = {props.values.rbcc}
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