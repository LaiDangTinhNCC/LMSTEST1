import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Iconify from '../../../components/iconify';
import { Grid, TextField, Typography } from '@mui/material';

export default function NewTeacher() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
 <Button variant="contained" onClick={handleClickOpen} startIcon={<Iconify icon="eva:plus-fill" />}>
            New Teacher
    </Button>
  
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
         New Teacher
        </DialogTitle>
        <DialogContent dividers>
        
        <Grid container item spacing={2}>
         

     
          <Grid xs={12} md={12} container item spacing={8}>
          <Grid item xs={4} md={4}><Typography>FirstName:</Typography></Grid>
          <Grid item xs={8} md={8}><TextField id="outlined-basic" variant="outlined" /></Grid>
          </Grid>
     
          <Grid xs={12} md={12} container item spacing={8}>
          <Grid item xs={4} md={4}><Typography>LastName:</Typography></Grid>
          <Grid item xs={8} md={8}><TextField id="outlined-basic" variant="outlined" /></Grid>
          </Grid>
     
          <Grid xs={12} md={12} container item spacing={8}>
          <Grid item xs={4} md={4}><Typography>Address:</Typography></Grid>
          <Grid item xs={8} md={8}><TextField id="outlined-basic" variant="outlined" /></Grid>
          </Grid>
     
          <Grid xs={12} md={12} container item spacing={8}>
          <Grid item xs={4} md={4}><Typography>Number Phone:</Typography></Grid>
          <Grid item xs={8} md={8}><TextField id="outlined-basic" variant="outlined" /></Grid>
          </Grid>
     

          <Grid xs={12} md={12} container item spacing={8}>
          <Grid item xs={4} md={4}><Typography>FirstName:</Typography></Grid>
          <Grid item xs={8} md={8}><TextField id="outlined-basic" variant="outlined" /></Grid>
          </Grid>
     
          <Grid xs={12} md={12} container item spacing={8}>
          <Grid item xs={4} md={4}><Typography>Status:</Typography></Grid>
          <Grid item xs={8} md={8}><TextField id="outlined-basic" variant="outlined" /></Grid>
          </Grid>
     
          <Grid xs={12} md={12} container item spacing={8}>
          <Grid item xs={4} md={4}><Typography>Level:</Typography></Grid>
          <Grid item xs={8} md={8}><TextField id="outlined-basic" variant="outlined" /></Grid>
          </Grid>
     

       

          </Grid>
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}