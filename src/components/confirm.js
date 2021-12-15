import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
});

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { classes } = this.props;
        const { values : { fname, lname, height, weight, age, gender, email } } = this.props;
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
                        Confirm Information
                    </Typography>
                </Box>

                <br/>
                <br/>
            
                <Box p="1rem" display="flex" justifyContent="center" alignItems="center">
                    <List justifyContent = "center">
                        <ListItem justifyContent = "center" >
                            <ListItemText
                                primary="First Name"
                                secondary={ fname }
                            />
                        </ListItem>
                        <ListItem justifyContent = "center" >
                            <ListItemText
                                primary="Last Name"
                                secondary={ lname }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Email"
                                secondary={ email }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Gender"
                                secondary={ gender }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Age"
                                secondary={ age }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Height"
                                secondary={ height }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Weight"
                                secondary={ weight }
                            />
                        </ListItem>
                    </List>
                </Box>

                <Box display = "flex" justifyContent="center" className={classes.root}> 
                    <Button variant="contained" color="secondary" onClick = {this.back}>
                        Back    
                    </Button>
                </Box>
                <Box display = "flex" justifyContent="center" className={classes.root}> 
                    <Button variant="contained" color="primary" onClick = {this.continue}>
                        Continue
                    </Button>
                </Box>

                
            </MuiThemeProvider>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(Confirm);
