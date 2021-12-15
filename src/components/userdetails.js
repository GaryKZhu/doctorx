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



export class UserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
                        Enter User Details
                    </Typography>
                </Box>

                <br/>
                <br/>

                <Box display="flex" justifyContent="center" alignItems="center" >
                    <TextField
                        required
                        inputProps={{min: 0, style: { textAlign: 'center' }}}
                        variant = "outlined"
                        label = "First Name"
                        placeholder = "Enter Your First Name"
                        color = "primary"
                        width = 'calc(100% - 5px)'
                        onChange = {handleChange('fname')}
                        defaultValue = {values.fname}
                    />
                </Box>

                <br/>
                <Box display="flex" justifyContent="center" alignItems="center" >
                    <TextField
                        required
                        inputProps={{min: 0, style: { textAlign: 'center' }}}
                        variant = "outlined"
                        label = "Last Name"
                        placeholder = "Enter Your Last Name"
                        color = "primary"
                        width = 'calc(100% - 5px)'
                        onChange = {handleChange('lname')}
                        defaultValue = {values.lname}
                    />
                </Box>

                <br/>
                <Box display="flex" justifyContent="center" alignItems="center" >
                    <TextField
                        required
                        inputProps={{min: 0, style: { textAlign: 'center' }}}
                        variant = "outlined"
                        placeholder = "Enter Your Email"
                        label = "Email"
                        color = "primary"
                        onChange = {handleChange('email')}
                        defaultValue = {values.email} 
                    />
                </Box>

                <Box p="1rem" display="flex" justifyContent="center" alignItems="center" >
                    <Button
                        variant = "contained"
                        color = "primary"
                        onClick = {this.continue}
                    >
                        Continue
                    </Button>
                </Box>
            </MuiThemeProvider>
        );
    }
}

export default UserDetails
