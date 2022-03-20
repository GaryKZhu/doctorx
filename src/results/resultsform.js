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
import Other from './symptoms/other.js'
import InputSelector from './view/inputselector.js';
import Panels from './view/panels.js'; 
import ShowResults from './view/showresults.js'
import HDetails2 from './tests/hdetails2.js'; 
import HDetails3 from './tests/hdetails3.js';
import BDetails1 from './tests/bdetails1.js'; 
import BDetails2 from './tests/bdetails2.js';
import BDetails3 from './tests/bdetails3.js';
import { wait } from '@testing-library/dom';
import { PanoramaWideAngleSharp } from '@material-ui/icons';
export class ResultsForm extends Component {

  state = {
    step: 1,
    resultid: 10,
    sedimentation_rate: 0.0, 
    hemoglobin: 0.0,
    hematocrit: 0.0,
    wbcc: 0.0,
    rbcc: 0.0,
    mcv: 0.0,
    mch: 0.0,
    mchc: 0.0,
    rdw: 0.0,
    platelets: 0.0,
    neutrophils: 0.0,
    lymphocytes: 0.0,
    monocytes: 0.0,
    eosinophils: 0.0,
    basophils: 0.0,
    granulocytes: 0.0,
    nucleatedrbc: 0.0,
    creatinine: 0.0,
    cystatin_c: 0.0,
    egfr_crea: 0.0,
    egfr_cys: 0.0,
    sgpt_alt: 0.0,
    cr_protein: 0.0,
    glucose: 0.0,
    sodium: 0.0,
    potassium: 0.0,
    albumin: 0.0, 
    bilirubin: 0.0, 
    alkaline: 0.0, 
    gamma: 0.0, 
    alanine: 0.0,
    lactate: 0.0,
    lipase: 0.0,
    userid: 1,
    date: "2021-12-09 21:00",
    organization: "Life Labs",
    section: "Hematology",
    status: "F",
    head: [0, 0, 0, 0],
    abdomen: [0, 0, 0, 0, 0],
    limbs: [0, 0, 0, 0, 0, 0],
    lungs: [0, 0, 0, 0, 0, 0],
    chest: [0, 0, 0], 
    ometrics: [0, 0, 0, 0, 0],
    chosen:[0,0,0,0,0,0], 
    hselected: [0, 0, 0, 0],
    aselected: [0, 0, 0, 0, 0],
    liselected: [0, 0, 0, 0, 0, 0],
    luselected: [0, 0, 0, 0, 0, 0],
    cselected: [0, 0, 0, 0],
    oselected: [0, 0, 0, 0, 0], 
    inputdate: [null, null], 
    symptoms: true,
    reports: true,
    comments: "",
  };

  // Proceed to next step
  nextStep = (id) => {
    const { step } = this.state;
    if(step === 1) {
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
    if(typeof this.state[input] == 'number') {
      if(!isNaN(parseFloat(this.state[input]))) {
        this.setState({ 
          [input]: parseFloat(e.target.value)
        })  
      }
      else {
        this.setState({ 
          [input]: parseInt(e.target.value)
        })
      }

    }
    else {
      this.setState({ 
        [input]: e.target.value
      })
    }
  };
  
  handleDateChange = (input) => (e) => {
    this.setState({
      [input]: e
    })
  }
  handleCheckbox = (input) => (e) => {
    this.setState({
      [input]: e.target.checked,
    });
  }
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
      granulocytes,
      nucleatedrbc,
      creatinine,
      cystatin_c,
      egfr_crea,
      egfr_cys,
      sgpt_alt,
      inputdate,
      symptoms,
      reports,
      glucose, 
      alanine, 
      sodium,
      potassium,
      albumin, 
      bilirubin, 
      alkaline, 
      gamma, 
      lactate,
      lipase,
      cr_protein} = this.state;

    const { userid, date, organization, section, status} = this.state;
    const { head, abdomen, limbs, lungs ,chest, chosen, ometrics, comments, hselected, aselected, cselected, liselected, luselected, oselected} = this.state; 

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
      granulocytes,
      nucleatedrbc,
      creatinine,
      cystatin_c,
      egfr_crea,
      egfr_cys,
      sgpt_alt,
      cr_protein,
      glucose, 
      sodium,
      potassium,
      albumin, 
      alanine,
      bilirubin, 
      alkaline, 
      gamma, 
      lactate,
      lipase,
      userid, date, organization, section, status };

    const svalues = { userid, chest, head, abdomen, limbs, lungs, ometrics, chosen, step, comments, hselected, aselected, cselected, liselected, luselected, oselected}; 
    const ivalues = { userid, inputdate, symptoms, reports}
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
            setStep={this.setStep}
            handleChange={this.handleStateChange}
            values={values} 
          />
        );
      
      case 21:
          return <HDetails1 
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          handleChosenChange = {this.handleChosenChange}
          handleChange={this.handleStateChange}
          values={values}
        />
      
      case 22:
          return <HDetails2 
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          handleChosenChange = {this.handleChosenChange}
          handleChange={this.handleStateChange}
          values={values}
        />

      case 23:
        return <HDetails3 
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          handleChosenChange = {this.handleChosenChange}
          handleChange={this.handleStateChange}
          values={values}
      />

      
      case 24:
        return ( // change this to be 
          <RConfirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleStateChange}
            values={values} 
          />
        );
        
      case 25:
        return (
          <RSubmit
            setStep={this.setStep}
            values={values}
          />
        );

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
              <Other
                setStep={this.setStep}
                handleChange={this.handleChosenChange}
                handleVectorChange={this.handleVectorChange}
                resetVectorId={this.resetVectorId}
                setVectorId={this.setVectorId}
                values={svalues}
              />
            );
        case 47:
          return (
            <SConfirm
              setStep={this.setStep}
              handleChange={this.handleStateChange}
              values={svalues}
            />
          );
        case 48:
          return (
            <SSuccess
              setStep={this.setStep}
              reset={this.reset}
              values={svalues}
            />
          )
        case 31: 
            return (
              <InputSelector
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange = {this.handleCheckbox}
                handleDateChange = {this.handleDateChange}
                handleStateChange={this.handleStateChange}
                values={ivalues}
              />
            )  
        case 30:
          return (
            <Panels 
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              values={ivalues}
            />
          )
        case 32:
          return (
            <ShowResults
              prevStep={this.prevStep}
              setStep={this.setStep}
              values={ivalues}
            />
          )

        case 51: {
          return (
            <BDetails1
              prevStep={this.prevStep}
              setStep={this.setStep}
              nextStep={this.nextStep}
              handleChosenChange = {this.handleChosenChange}
              handleChange={this.handleStateChange}
              values={values}
            />
          )
        }
        case 52: {
          return (
            <BDetails2
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChosenChange = {this.handleChosenChange}
              handleChange={this.handleStateChange}
              values={values}
            />
          )
        }
        case 53: {
          return (
            <BDetails3
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChosenChange = {this.handleChosenChange}
              handleChange={this.handleStateChange}
              values={values}
            />
          )
        }
        case 54:
          return ( // change this to be 
            <RConfirm
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleStateChange}
              values={values} 
            />
          );
          
        case 55:
          return (
            <RSubmit
              setStep={this.setStep}
              values={values}
            />
          );
    }
  }
}

export default ResultsForm;