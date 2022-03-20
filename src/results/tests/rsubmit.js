import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
export default function RSubmit(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    props.setStep(1); 
    setOpen(false);
  };

  const data = {
      "userid" : props.values.userid,
      "collection_date" : props.values.date,
      "organization" : props.values.organization,
      "section" : props.values.section,
      "status" : props.values.status
  };
  var requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      redirect: 'follow'
  };

  fetch("http://localhost:9000/api/v1/reports", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  if(props.values.section == "Hematology") {
    console.log("HI")
    var timestamp = (new Date(props.values.date).getTime())/1000
    const send = {
      "userid" : props.values.userid,
      "collection_date" : props.values.date,
      "timestamp" : timestamp,
      "sedimentation_rate": props.values.sedimentation_rate, 
      "hemoglobin": props.values.hemoglobin,
      "hematocrit": props.values.hematocrit,
      "wbcc": props.values.wbcc,
      "rbcc": props.values.rbcc,
      "mcv": props.values.mcv,
      "mch": props.values.mch,
      "mchc": props.values.mchc,
      "rdw": props.values.rdw,
      "platelets": props.values.platelets,
      "neutrophils": props.values.neutrophils,
      "lymphocytes": props.values.lymphocytes,
      "monocytes": props.values.monocytes,
      "eosinophils": props.values.eosinophils,
      "basophils": props.values.basophils,
      "granulocytes": props.values.granulocytes,
      "nucleatedrbc": props.values.nucleatedrbc,
    };
    console.log(send)
    requestOptions.body = JSON.stringify(send)
    console.log(requestOptions.body)
    fetch("http://localhost:9000/api/v1/hema", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  else if(props.values.section == "Biochemistry") {
    var timestamp = (new Date(props.values.date).getTime())/1000
    const send = {
      "userid" : props.values.userid,
      "collection_date" : props.values.date,
      "timestamp" : timestamp,
      "creatinine": props.values.creatinine, 
      "cystatin_c": props.values.cystatin_c,
      "egfr_crea": props.values.egfr_crea,
      "egfr_cys": props.values.egfr_cys,
      "sgpt_alt": props.values.sgpt_alt,
      "glucose": props.values.glucose,
      "potassium": props.values.potassium,
      "albumin": props.values.albumin,
      "bilirubin": props.values.bilirubin,
      "alkaline": props.values.alkaline,
      "gamma": props.values.gamma,
      "alanine": props.values.alanine,
      "lactate": props.values.lactate,
      "lipase": props.values.lipase,
      "cr_protein": props.values.cr_protein,
    };
    requestOptions.body = JSON.stringify(send)
    console.log(requestOptions.body)
    fetch("http://localhost:9000/api/v1/biochem", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your submission has been processed!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}