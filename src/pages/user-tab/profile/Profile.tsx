import { Avatar, Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import account from '../../../_mock/account';
import EditProfile from './EditProfile';


const Profile = () => {
  return (
    <Stack spacing={3}>
        <Box sx={sx.ProF}>
        <Avatar sx={sx.Ava} src={account.photoURL} alt="photoURL" />
        <Stack spacing={1} sx={{ml: '50px',mt:'10px'}}>
            <Typography variant="h4" sx={{color:'#fff'}}>Lai Dang Tinh</Typography>
            {/* <Button
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
        variant="outlined"
        color="success"
      >
        Edit Profile
      </Button> */}
            <EditProfile/>
        </Stack>
        </Box>
  <Table>
    <TableHead>
        <TableRow>
            <TableCell colSpan={2}><Typography sx={{textAlign: 'center'}} variant="h6">Basic information</Typography></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell><Typography sx={sx.Cellname}>Fullname</Typography>
                </TableCell>
            <TableCell>Lai Dang Tinh</TableCell>
        </TableRow>
        <TableRow>
        <TableCell><Typography sx={sx.Cellname}>Email Address</Typography>
            </TableCell>
            <TableCell>Dangtinhtk@gmail.com</TableCell>
        </TableRow>
        <TableRow>
        <TableCell><Typography sx={sx.Cellname}>Password</Typography>
            </TableCell>
            <TableCell>******</TableCell>
        </TableRow>
    </TableBody>
  </Table>
 

</Stack>
  )
}

const sx = {
    Cellname:{
        fontWeight: 'bold'
    },
    ProF:{
       width: '100%',
       height: '25vh',
       backgroundImage: 'url(/assets/background/backg.jpg)',
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       padding: '27px',
       display: 'flex',
    },
    Ava:{
        width: 100,
        height: 100,
    }

}

export default Profile