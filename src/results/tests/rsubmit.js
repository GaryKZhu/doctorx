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
    props.nextStep(); 
    setOpen(false);
  };

  const data = {
      "Userid" : props.values.userid,
      "Collection_date" : props.values.date,
      "Organization" : props.values.organization,
      "Section" : props.values.section,
      "Status" : props.values.status
  };
  const requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      redirect: 'follow'
  };

  fetch("http://10.0.0.51:9000/api/v1/reports", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


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