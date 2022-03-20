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
                    label = "MCV"
                    helperText = {
                        <>
                          Mean Cell Volume
                          <br />
                          fl
                        </>
                    }
                    placeholder = "Enter MCV"
                    color = "primary"
                    onChange={handleChange('mcv')}
                    defaultValue = {props.values.mcv}
                />
            </Box>

            <br/>
            <br/>
            
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "MCH"
                    helperText = {
                        <>
                          Average Hemoglobin per Cell
                          <br />
                          pg
                        </>
                    }
                    placeholder = "Enter MCH"
                    color = "primary"
                    onChange={handleChange('mch')}
                    defaultValue = {props.values.mch}
                />
            </Box>


            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "MCHC"
                    helperText = {
                        <>
                          Average Concentration of Hemoglobin per Cell
                          <br />
                          g/L
                        </>
                    }
                    placeholder = "Enter MCHC"
                    color = "primary"
                    onChange={handleChange('mchc')}
                    defaultValue = {props.values.mchc}
                />
            </Box>


            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "RDW"
                    helperText = {
                        <>
                          Range of Red Blood Cell
                          <br />
                          %CV
                        </>
                    }
                    placeholder = "Enter RDW"
                    color = "primary"
                    onChange={handleChange('rdw')}
                    defaultValue = {props.values.rdw}
                />
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Platelets"
                    helperText = "x10E9/L"
                    placeholder = "Enter Platelet Count"
                    color = "primary"
                    onChange={handleChange('platelets')}
                    defaultValue = {props.values.platelets}
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