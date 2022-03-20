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
                    label = "Neutrophils"
                    helperText = "x10E9/L"
                    placeholder = "Enter Neutrophil Count"
                    color = "primary"
                    onChange={handleChange('neutrophils')}
                    defaultValue = {props.values.neutrophils}
                />
            </Box>

            <br/>
            <br/>
            
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Lymphocytes"
                    helperText = "x10E9/L"
                    placeholder = "Enter Lymphocyte Count"
                    color = "primary"
                    onChange={handleChange('lymphocytes')}
                    defaultValue = {props.values.lymphocytes}
                />
            </Box>


            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Monocytes"
                    helperText = "x10E9/L"
                    placeholder = "Enter Monocyte Count"
                    color = "primary"
                    onChange={handleChange('monocytes')}
                    defaultValue = {props.values.monocytes}
                />
            </Box>


            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Eosinophils"
                    helperText = "x10E9/L"
                    placeholder = "Enter Eosinophil Count"
                    color = "primary"
                    onChange={handleChange('eosinophils')}
                    defaultValue = {props.values.eosinophils}
                />
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Basophils"
                    helperText = "x10E9/L"
                    placeholder = "Enter Basophil Count"
                    color = "primary"
                    onChange={handleChange('basophils')}
                    defaultValue = {props.values.basophils}
                />
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Granulocytes"
                    helperText = "x10E9/L"
                    placeholder = "Enter Granulocyte Count"
                    color = "primary"
                    onChange={handleChange('granulocytes')}
                    defaultValue = {props.values.granulocytes}
                />
            </Box>

            <br/>
            <br/>

            <Box display="flex" justifyContent="center" alignItems="center"  >
                <TextField
                    required
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant = "outlined"
                    label = "Nucleated RBC"
                    helperText = "Early Stage Red Blood Cell\n/100 WBC"
                    placeholder = "Enter Nucleated Red Blood Cell Count"
                    color = "primary"
                    onChange={handleChange('nucleatedrbc')}
                    defaultValue = {props.values.nucleatedrbc}
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