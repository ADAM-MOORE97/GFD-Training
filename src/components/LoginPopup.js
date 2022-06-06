import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function LoginPopup() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>  
    <Button onClick={handleClickOpen}>
    <i class="fa-regular fa-user text-white text-2xl md:text-3xl lg:text-4xl"></i>
    </Button>
    <Dialog open={open} onClose={handleClose}>
      
      <DialogContent>
       
        <TextField
         
          margin="dense"
          id="name"
          label="User ID"
          type="string"
          fullWidth
          variant="standard"
        />
        <TextField
          
          margin="dense"
          id="name"
          label="Password"
          type="string"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button>Sign In</Button>
      </DialogActions>
    </Dialog>
  </div>
);
  
}
