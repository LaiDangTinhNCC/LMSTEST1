import { Helmet } from 'react-helmet-async';
// @mui
import {
  Box,
  Card,
  Container,
  Tab,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React from 'react';
import Profile from './user-tab/profile/Profile';


export default function UserPage() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <Container>
        <Card sx={sx.cardF}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Profile" value="1" />
            <Tab label="Certification" value="2" />
            <Tab label="Setting" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Profile/>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
        </Card>
      </Container>

    </>
  );
}
const sx = {
  cardF:{
    padding: '10px'
  }
}
