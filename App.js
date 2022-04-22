import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Result from './Component/Result';
import Modal from '@mui/material/Modal';
import "./App.css";
import moment from 'moment';

const theme = createTheme();

export default function SignUp() {

  const [openModal, setOpenModal] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [birthday, setBirthday] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   firstName: data.get('firstName'),
    //   middleName: data.get('middleName'),
    //   lastName: data.get('lastName'),
    //   date: data.get('birthday'), 
    //   description: data.get('description'),
    // });
    
    // const handleInputChange = (event) => {
    //   event.preventDefault()
    // }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Typography component="h1" variant="h5">
            Fill-up Details
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstname}
                  onChange={(e)=> {
                    setFirstname(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="middleName"
                  name="middleName"
                  required
                  fullWidth
                  id="middleName"
                  label="Middle Name"
                  autoFocus
                  value = {middlename}
                  onChange = {(e) => {
                    setMiddlename(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value ={lastname}
                  onChange = {(e) => {
                    setLastname(e.target.value) 
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField
                      sx={{ width: 220 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      id="date"
                      label="Birthday"
                      type="date"
                      name = "birthday"
                      value = {birthday}
                      onChange = {(e) => {
                        
                        setBirthday(e.target.value)}}
                    />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ width: 450 }}
                  noValidate
                  autoComplete="off"
                  label="Describe yourself"
                  helperText="Say something interesting about you"
                  name='description'
                  multiline
                  rows={2}
                  maxRows={4}
                  value = {desc}
                  onChange = {(e) => {
                    setDesc(e.target.value)
                  }}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className = "openModalBtn"
              onClick = {() => {
                setOpenModal(true);
                console.log(firstname);
                console.log(lastname);
                console.log(middlename);
                console.log(birthday);
                console.log(desc);
              }}
            >
              SUBMIT
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Modal
      open={openModal}
      onClose={()=> setOpenModal(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Personal Info</h2>
          <p id="parent-modal-description">
            Name: {`${firstname} ${middlename} ${lastname}`}
          </p>
          <p id="parent-modal-description">

            Age: {moment(moment(new Date).format('YYYY-MM-DD')).diff(moment(birthday), 'years')}  Birthday: {`${birthday}`}
            
          </p>
          <p id="parent-modal-description">
            Description : {`${desc}`}
          </p>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

