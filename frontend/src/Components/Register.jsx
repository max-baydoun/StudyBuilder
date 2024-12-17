import { Box, Grid2, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { authRegister } from "../../routing/authFuncs";
// import setStore from "../../routing/setStore";
import  GenericPopup from "../Popups/GenericPopup";
import LoadingIcon from "../Popups/LoadingIcon";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const [userRegister, setUserRegister] = useState({name: '', email: '', password: '', confirmPassword: ''});
  const [popup, setPopup] = useState({title: '', message: ''});
  const [ openPopupModal, setOpenPopupModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') handleSubmit();
    };

    localStorage.clear();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [userRegister]);

  function handleSetName(event) {
    setUserRegister(oldRegister => {
      return {...oldRegister, name: event}
    })
  }

  function handleSetEmail(event) {
    setUserRegister(oldRegister => {
      return {...oldRegister, email: event}
    })
  }

  function handleSetPassword(event) {
    setUserRegister(oldRegister => {
      return {...oldRegister, password: event}
    })
  }

  function handleSetConfirmPassword(event) {
    setUserRegister(oldRegister => {
      return {...oldRegister, confirmPassword: event}
    })
  }

  async function handleSubmit() {
    // setIsLoading(true);
    // if (userRegister.password !== userRegister.confirmPassword) {
    //   setPopup({title: 'Invalid Register', message: 'Passwords do not match!'});
    //   setOpenPopupModal(true);
    //   setIsLoading(false);
    //   return;
    // }
    // const {name, email, password} = userRegister;
    // const payload = {name, email, password};
    // const user = await authRegister(payload);
    // if (user.error) {
    //   setPopup({title: 'Internal server error', message: user.error});
    //   setOpenPopupModal(true);
    // }
    // else {
    //   localStorage.setItem("token", user.token)
    //   await setStore({presentations: []});
    //   navigate('/dashboard');
    // }
    // setIsLoading(false);
  }

  return (
    <Box sx={{backgroundColor: '#f0f1f2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center'}}>
      <Typography variant="h2" sx={{color: '#888', margin: '30px 0px'}}>Register</Typography>    
      <Grid2 container rowSpacing={2} columnSpacing={1} columns={12} sx={{ alignItems: 'center', justifyContent: 'center', padding: '20px 0px', backgroundColor: 'white', borderRadius: '10px', maxWidth: '500px'}}>
        <Grid2 container sx={{padding: '30px 0px', border: '1px solid #dbd9d9', borderRadius: '3px', maxWidth: '300px'}}>
          <Grid2 size={12}>
            <TextField size="small" label="Username" variant="outlined" sx={{backgroundColor: '#f0f1f2'}} onChange={event => handleSetName(event.target.value)}/>
          </Grid2>
          <Grid2 size={12}>
            <TextField size="small" label="Email" variant="outlined" sx={{backgroundColor: '#f0f1f2'}} onChange={event => handleSetEmail(event.target.value)}/>
          </Grid2>
          <Grid2 size={12}>
            <TextField size="small" label="Password" type='password' variant="outlined" sx={{backgroundColor: '#f0f1f2'}} onChange={event => handleSetPassword(event.target.value)}/>
          </Grid2>
          <Grid2 size={12}>
            <TextField size="small" label="Confirm Password" type='password' variant="outlined" sx={{backgroundColor: '#f0f1f2'}} onChange={event => handleSetConfirmPassword(event.target.value)}/>
          </Grid2>
        </Grid2>
        <Grid2 container sx={{ maxWidth: '300px'}}>
          <Grid2 size={12} >
            <Button variant="contained" size="large" fullWidth sx={{  backgroundColor: '#404040'}}  disabled={Object.values(userRegister).some(value => value === '')} onClick={handleSubmit}>Submit</Button>
          </Grid2>
        </Grid2>
      </Grid2>
      < GenericPopup object={popup} open={ openPopupModal} handleClose={() => setOpenPopupModal(false)}/>
      {isLoading && <LoadingIcon />}
    </Box>
  )
}

export default Register;