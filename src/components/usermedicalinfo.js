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

export class UserMedicalInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

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
                        Enter Medical Details
                    </Typography>
                </Box>

                <br/>
                <br/>

                <Box display="flex" justifyContent="center" alignItems="center"  >
                    <TextField
                        required
                        inputProps={{min: 0, style: { textAlign: 'center' }}}
                        variant = "outlined"
                        label = "Gender"
                        placeholder = "Enter your Gender"
                        color = "primary"
                        onChange = {handleChange('gender')}
                        defaultValue = {values.gender}
                    />
                </Box>

                <br/>
                <Box display="flex" justifyContent="center" alignItems="center" >
                    <TextField
                        required
                        inputProps={{min: 0, style: { textAlign: 'center' }}}
                        variant = "outlined"
                        label = "Height"
                        placeholder = "Enter Your Height"
                        helperText="In Centimeters"
                        color = "primary"
                        onChange = {handleChange('height')}
                        defaultValue = {values.height}
                    />
                </Box>

                <br/>
                <Box display="flex" justifyContent="center" alignItems="center" >
                    <TextField
                        required
                        inputProps={{min: 0, style: { textAlign: 'center' }}}
                        variant = "outlined"
                        placeholder = "Enter Your Weight"
                        helperText="In Kilograms"
                        label = "Weight"
                        color = "primary"
                        onChange = {handleChange('weight')}
                        defaultValue = {values.weight}
                    />
                </Box>

                <br/>
                <Box display="flex" justifyContent="center" alignItems="center" >
                    <TextField
                        required
                        inputProps={{min: 0, style: { textAlign: 'center' }}}
                        variant = "outlined"
                        placeholder = "Enter Your Birthday"
                        helperText="yyyy-mm-dd"
                        label = "Birthday"
                        color = "primary"
                        onChange = {handleChange('age')}
                        defaultValue = {values.age}
                    />
                </Box>


                <Box p="1rem" display="flex" justifyContent="center" alignItems="center"  >

                    <Button
                        variant = "contained"
                        color = "secondary"
                        onClick = {this.back}
                    >
                        Back
                    </Button>

                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" >
                    <Button
                        variant = "contained"
                        color = "primary"
                        onClick = {this.continue}
                    >
                        Continue
                    </Button>
                </Box>

                <br/>
                <br/>


            </MuiThemeProvider>
        );
    }
}

export default UserMedicalInfo
