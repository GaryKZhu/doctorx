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
export default function BDetails3(props) {
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
                    label = "Alkaline Phosphatase"
                    helperText = "U/L"
                    placeholder = "Enter Alkaline Phosphatase Value"
                    color = "primary"
                    onChange={handleChange('alkaline')}
                    defaultValue = {props.values.alkaline}
                />
            </Box>

            <br/>
            <br/>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Alanine Aminotransferase"
                    helperText = "U/L"
                    placeholder = "Enter Alanine Aminotransferase Value"
                    color = "primary"
                    onChange={handleChange('alanine')}
                    defaultValue = {props.values.alanine}
                />
            </Box>

            <br/>
            <br/>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Gamma glut transferase"
                    helperText = "U/L"
                    placeholder = "Enter Gamma glut transferase Value"
                    color = "primary"
                    onChange={handleChange('gamma')}
                    defaultValue = {props.values.gamma}
                />
            </Box>


            <br/>
            <br/>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Lactate dehydrogenase"
                    helperText = "U/L"
                    placeholder = "Enter Lactate dehydrogenase Value"
                    color = "primary"
                    onChange={handleChange('lactate')}
                    defaultValue = {props.values.lactate}
                />
            </Box>

            <br/>
            <br/>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Lipase"
                    helperText = "U/L"
                    placeholder = "Enter Lipase Value"
                    color = "primary"
                    onChange={handleChange('lipase')}
                    defaultValue = {props.values.lipase}
                />
            </Box>

            <br/>
            <br/>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "C Reactive Protein"
                    helperText = "mg/L"
                    placeholder = "Enter C Reactive Protein Value"
                    color = "primary"
                    onChange={handleChange('cr_protein')}
                    defaultValue = {props.values.cr_protein}
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