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
export default function BDetails1(props) {
    const next = (e) => {
        e.preventDefault(); 
        props.nextStep(0);
    }

    const back = (e) => {
        e.preventDefault();
        props.setStep(20);
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
                    Enter Biochemistry Details
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
                    label = "Creatinine"
                    helperText = "umol/L"
                    placeholder = "Enter Creatinine Value"
                    color = "primary"
                    onChange={handleChange('creatinine')}
                    defaultValue = {props.values.creatinine}
                />
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Cystatin C"
                    helperText = "mg/L"
                    placeholder = "Enter Cystatin C Value"
                    color = "primary"
                    onChange={handleChange('cystatin_c')}
                    defaultValue = {props.values.cystatin_c}
                />
            </Box>


            <br/>
            <br/>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "eGFR Creatinine"
                    helperText = "mL/min/1.73 m*2"
                    placeholder = "Enter eGFR value for Creatinine"
                    color = "primary"
                    onChange={handleChange('egfr_crea')}
                    defaultValue = {props.values.egfr_crea}
                />
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "eGFR Cystatin C"
                    helperText = "mL/min/1.73 m*2"
                    placeholder = "Enter eGFR value for Cystatin C"
                    color = "primary"
                    onChange={handleChange('egfr_cys')}
                    defaultValue = {props.values.egfr_cys}
                />
            </Box>

            <br/>
            <br/>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "SGPT ALT"
                    helperText = "U/L"
                    placeholder = "Enter SGPT Alt Value"
                    color = "primary"
                    onChange={handleChange('sgpt_alt')}
                    defaultValue = {props.values.sgpt_alt}
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