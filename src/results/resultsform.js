import React, { Component } from 'react/index.js';
import ResultsPage from './tests/resultspage.js';
import ResultDetails from './tests/resultdetails.js'; 
import SelectOption from './selectoption.js'
import HDetails1 from './tests/hdetails1';
import RSubmit from './tests/rsubmit.js'; 
import RDetails from './tests/rdetails.js'; 
import RConfirm from './tests/rconfirm.js'; 
import SelectSymptoms from './symptoms/selectsymptoms.js';  
import Head from './symptoms/head.js';  
import Limbs from './symptoms/limbs.js';  
import Chest from './symptoms/chest.js';  
import Lungs from './symptoms/lungs.js';  
import Abdomen from './symptoms/abdomen.js';
import SConfirm from './symptoms/sconfirm.js';
import SSuccess from './symptoms/ssuccess.js'; 
//import HDetails2 from './hdetails2'; 
//import BDetails from './bdetails'; 
import { wait } from '@testing-library/dom';
export class ResultsForm extends Component {

  state = {
    step: 1,
    resultid: 10,
    sedimentation_rate: 0, 
    hemoglobin: 0,
    hematocrit: 0,
    wbcc: 0,
    rbcc: 0,
    mcv: 0,
    mch: 0,
    mchc: 0,
    rdw: 0,
    platelets: 0,
    neutrophils: 0,
    lymphocytes: 0,
    monocytes: 0,
    eosinophils: 0,
    basophils: 0,
    creatinine: 0,
    cystatin_c: 0,
    egfr_crea: 0,
    egfr_cys: 0,
    sgpt_alt: 0,
    cr_protein: 0,
    userid: 1,
    date: "2021-12-9 21:00",
    organization: "Life Labs",
    section: "Hematology",
    status: "F",
    head: [0, 0, 0, 0],
    abdomen: [0, 0, 0, 0, 0],
    limbs: [0, 0, 0, 0],
    lungs: [0, 0, 0, 0],
    chest: [0, 0, 0], 
    chosen:[0,0,0,0,0], 
    hselected: [0, 0, 0, 0],
    aselected: [0, 0, 0, 0, 0],
    liselected: [0, 0, 0, 0],
    luselected: [0, 0, 0, 0],
    cselected: [0, 0, 0, 0],
    comments: "",
  };

  // Proceed to next step
  nextStep = (id) => {
    const { step } = this.state;
    if(step == 22) {
      this.setState({
        step: 1
      });
    }
    else if(step === 1) {
      this.setState({
        step: 10*id
      })
    }
    else {
      this.setState({
        step: step + 1
      });
    }
  };

  setStep = (id) => {
    this.setState({
      step: id
    })
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    if(step % 10 === 0) {
      this.setState({
        step: 1
      });
    }
    else {
      this.setState({
        step: step - 1
      });
    }
  };

  // Handle fields change
  handleIDChange = (id) => {
    this.setState({
      resultid: id
    });
  };

  handleStateChange = (input) => (e) => {
    this.setState({ 
      [input]: e.target.value 
    })
  };
  
  handleChosenChange = (id, name) => (e) => {
    const arr = [...this.state.chosen];
    arr[id] = !this.state.chosen[id]; 
    if(arr[id] == 0) {
      this.reset(name); 
    }
    this.setState({
      chosen: arr
    });
  };

  handleVectorChange = (id, name) => (e) => {
    const arr = [...this.state[name]];
    arr[id] = Number(e.target.value);
    this.setState({
      [name] : arr
    });
  } 

  resetVectorId = (id, name) => {
    const arr = [...this.state[name]];
    arr[id] = 0;
    this.setState({
      [name] : arr
    });
  }

  setVectorId = (name, id, value) => {
    const arr = [...this.state[name]];
    arr[id] = value; 
    this.setState({
      [name] : arr
    }); 
  }
  reset = (name) => {
    if(typeof this.state[name] == 'object') {
      var arr = [];
      for(let i = 0; i<this.state[name].length; i++) {
        arr.push(0); 
      }
      this.setState({
        [name]: arr
      });
    }
    if(typeof this.state[name] == 'string') {
      this.setState({
        [name]: ""
      });
    }
    if(typeof this.state[name] == 'number') {
      this.setState({
        [name]: 1
      });
    }
  }

  render() {
    const { step } = this.state;
    const { resultid } = this.state;
    
    const { sedimentation_rate,
      hemoglobin,
      hematocrit,
      wbcc,
      rbcc,
      mcv,
      mch,
      mchc,
      rdw,
      platelets,
      neutrophils,
      lymphocytes,
      monocytes,
      eosinophils,
      basophils,
      creatinine,
      cystatin_c,
      egfr_crea,
      egfr_cys,
      sgpt_alt,
      cr_protein } = this.state;

    const { userid, date, organization, section, status} = this.state;
    const { head, abdomen, limbs, lungs ,chest, chosen, comments, hselected, aselected, cselected, liselected, luselected} = this.state; 

    const values = { resultid, sedimentation_rate,
      hemoglobin,
      hematocrit,
      wbcc,
      rbcc,
      mcv,
      mch,
      mchc,
      rdw,
      platelets,
      neutrophils,
      lymphocytes,
      monocytes,
      eosinophils,
      basophils,
      creatinine,
      cystatin_c,
      egfr_crea,
      egfr_cys,
      sgpt_alt,
      cr_protein,
      userid, date, organization, section, status };

    const svalues = { userid, chest, head, abdomen, limbs, lungs, chosen, step, comments, hselected, aselected, cselected, liselected, luselected}; 
    switch (step) {
      // case 1 should be selecting between going to view results or insert results
      case 1:
        return (
          <SelectOption
            nextStep={this.nextStep}
            handleChange={this.handleIDChange}
            values={values} 
          />
        ); 


      case 10: // should be 10 now 
        return (
          <ResultsPage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleIDChange}
            values={values} 
          />
        );

      case 11: // should be 11 now
        return (
          <ResultDetails
            prevStep={this.prevStep}
            handleChange={this.handleIDChange}
            values={values} 
          />
        );
      
      case 20:
        return ( // change this to be 
          <RDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleStateChange}
            values={values} 
          />
        );
      
      case 21:
        if(section == "Hematology") {
          return <HDetails1 
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChosenChange = {this.handleChosenChange}
            handleChange={this.handleChange}
            values={values}
          />
        }
        else {
          
        }

      case 22:
        return ( // change this to be 
          <RConfirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleStateChange}
            values={values} 
          />
        );
        
      case 23:
        return (
          <RSubmit
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 23:

      case 40:
        return (
          <SelectSymptoms
            setStep={this.setStep}
            prevStep={this.prevStep}
            handleChange={this.handleChosenChange}
            handleStateChange={this.handleStateChange}
            values={svalues}
          />
        );
        case 41:
          return (
            <Head
              setStep={this.setStep}
              handleChange={this.handleChosenChange}
              handleVectorChange={this.handleVectorChange}
              resetVectorId={this.resetVectorId}
              setVectorId={this.setVectorId}
              values={svalues}
            />
          );
        case 42:
          return (
            <Lungs
              setStep={this.setStep}
              handleChange={this.handleChosenChange}
              handleVectorChange={this.handleVectorChange}
              resetVectorId={this.resetVectorId}
              setVectorId={this.setVectorId}
              values={svalues}
            />
          );
        case 43:
          return (
            <Chest
            setStep={this.setStep}
            handleChange={this.handleChosenChange}
            handleVectorChange={this.handleVectorChange}
            resetVectorId={this.resetVectorId}
            setVectorId={this.setVectorId}
            values={svalues}
            />
          );
        case 44:
          return (
            <Abdomen
              setStep={this.setStep}
              handleChange={this.handleChosenChange}
              handleVectorChange={this.handleVectorChange}
              resetVectorId={this.resetVectorId}
              setVectorId={this.setVectorId}
              values={svalues}
            />
          );
        case 45:
          return (
            <Limbs
              setStep={this.setStep}
              handleChange={this.handleChosenChange}
              handleVectorChange={this.handleVectorChange}
              resetVectorId={this.resetVectorId}
              setVectorId={this.setVectorId}
              values={svalues}
            />
          );
        case 46:
          return (
            <SConfirm
              setStep={this.setStep}
              handleChange={this.handleStateChange}
              values={svalues}
            />
          );
        case 47:
          return (
            <SSuccess
              setStep={this.setStep}
              reset={this.reset}
              values={svalues}
            />
          )
    }
  }
}

export default ResultsForm;