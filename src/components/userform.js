import React, { Component } from 'react/index.js';
import UserDetails from './userdetails.js';
import UserMedicalInfo from './usermedicalinfo.js';
import Confirm from './confirm.js'
import Success from './success.js'
export class UserForm extends Component {
  state = {
    step: 1,
    fname: 'John',
    lname: 'Doe',
    height: 0,
    weight: 0,
    age: "2000-01-31",
    email: 'example@example.com',
    gender: 'M',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    console.log("asdf");  
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { fname, lname, height, weight, gender, age, email } = this.state;
    const values = { fname, lname, height, weight, age, gender, email };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserMedicalInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 4:
        return (
          <Success
            values={values}
          />
        );
    }
    
    }
}

export default UserForm;