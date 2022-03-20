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
export default function BDetails2(props) {
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
                    label = "Glucose"
                    helperText = "umol/L"
                    placeholder = "Enter Glucose Value"
                    color = "primary"
                    onChange={handleChange('glucose')}
                    defaultValue = {props.values.glucose}
                />
            </Box>

            <br/>
            <br/>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Sodium"
                    helperText = "umol/L"
                    placeholder = "Enter Sodium Value"
                    color = "primary"
                    onChange={handleChange('sodium')}
                    defaultValue = {props.values.sodium}
                />
            </Box>

            <br/>
            <br/>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Potassium"
                    helperText = "umol/L"
                    placeholder = "Enter Potassium Value"
                    color = "primary"
                    onChange={handleChange('potassium')}
                    defaultValue = {props.values.potassium}
                />
            </Box>

            <br/>
            <br/>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Albumin"
                    helperText = "g/L"
                    placeholder = "Enter Albumin Value"
                    color = "primary"
                    onChange={handleChange('albumin')}
                    defaultValue = {props.values.albumin}
                />
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Bilirubin Total"
                    helperText = "umol/L"
                    placeholder = "Enter value for Bilirubin"
                    color = "primary"
                    onChange={handleChange('bilirubin')}
                    defaultValue = {props.values.bilirubin}
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