import { Box, Grid2, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { authLogin } from "../../routing/authFuncs";
import  GenericPopup from "../Popups/GenericPopup";
import LoadingIcon from "../Popups/LoadingIcon";

const Login = () => {
  const [userLogin, setUserLogin] = useState({email: '', password: ''});
  const [popup, setPopup] = useState({title: '', message: ''});
  const [openPopupModal, setOpenPopupModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') handleSubmit();
    };
    localStorage.clear();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [userLogin]);

  function handleSetEmail(event) {
    setUserLogin(oldLogin => {
      return {...oldLogin, email: event}
    })
  }
  function handleSetPassword(event) {
    setUserLogin(oldLogin => {
      return {...oldLogin, password: event}
    })
  }

  async function handleSubmit() {
  //   setIsLoading(true);
  //   const user = await authLogin(userLogin);
  //   if (user.error) {
  //     setPopup({title: 'Internal server error', message: user.error});
  //     setOpenPopupModal(true);
  //   }
  //   else {
  //     localStorage.setItem("token", user.token)
  //     navigate('/dashboard');
  //   }
  //   setIsLoading(false);
  }

  return (
    <Box sx={{backgroundColor: '#f0f1f2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center'}}>
      <Grid2 container sx={{flexDirection: 'column'}}>
        <Grid2>
          <Typography variant="h2" sx={{color: '#888'}}>Welcome back!</Typography>    
        </Grid2>
        <Grid2>
          <Typography variant="h3" sx={{color: '#aaa'}}>Let&apos;s get you signed in</Typography>    
        </Grid2>
      </Grid2>

      <Grid2 container rowSpacing={2} columnSpacing={1} columns={12} sx={{margin: '30px 0px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px 0px', backgroundColor: 'white', borderRadius: '10px', minWidth: '400px'}}>
        <Grid2 container sx={{padding: '30px 0px', border: '1px solid #dbd9d9', borderRadius: '3px', maxWidth: '300px'}}>
          <Grid2 size={12}>
            <TextField size="small" label="Email" variant="outlined" sx={{backgroundColor: '#f0f1f2'}} onChange={event => handleSetEmail(event.target.value)}/>
          </Grid2>
          <Grid2 size={12}>
            <TextField size="small" label="Password" type='password' variant="outlined" sx={{backgroundColor: '#f0f1f2'}} onChange={event => handleSetPassword(event.target.value)}/>
          </Grid2>
        </Grid2>
        <Grid2 container sx={{ maxWidth: '300px'}}>
          <Grid2 size={12} >
            <Button variant="contained" size="large" fullWidth sx={{  backgroundColor: '#404040'}}  disabled={Object.values(userLogin).some(value => value === '')} onClick={handleSubmit}>Log in</Button>
          </Grid2>
          <Grid2 size={12}>
            <Button variant="contained" size="large" fullWidth sx={{  backgroundColor: '#242424'}} onClick={() => navigate('/register')}>Register</Button>
          </Grid2>
        </Grid2>
      </Grid2>
      <GenericPopup object={popup} open={ openPopupModal} handleClose={() => setOpenPopupModal(false)}/>
      {isLoading && <LoadingIcon />}
    </Box>
  )
}

export default Login;