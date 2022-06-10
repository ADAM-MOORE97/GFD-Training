import * as React from 'react';
import { useState } from 'react';
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
    const [admin, setAdmin] = useState(false)
  return (
    <div>  
    <Button onClick={handleClickOpen}>
    <i class="fa-regular fa-user text-white text-2xl md:text-3xl lg:text-4xl"></i>
    </Button>
    <Dialog open={open} onClose={handleClose}>
      
      <DialogContent>
       <DialogActions>
       <button className={admin? "border-red-600 border-2 bg-red-600 text-white rounded-2xl w-1/4 hover:opacity-75" : "w-1/4 border-2 border-red-600 rounded-2xl hover:opacity-75 hover:bg-slate-50 hover:text-black"} onClick={()=>setAdmin(!admin)}>Admin</button>
       </DialogActions>
        <TextField
         
          margin="dense"
          id="name"
          label={admin? "Admin ID" : "User ID"}
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
          
        <button className='bg-red-600 text-white rounded-2xl w-1/4 hover:opacity-75' onClick={handleClose}>Cancel</button>
        <button className='bg-red-600 text-white rounded-2xl w-1/4 hover:opacity-75'>Sign In</button>
      </DialogActions>
    </Dialog>
  </div>
);
  
}
