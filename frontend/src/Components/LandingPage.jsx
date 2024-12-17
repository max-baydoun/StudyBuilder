import {Box, Button, Grid2, Tab, Tabs, Typography} from '@mui/material'
import SB from '../../assets/bruh.png'
import StarryCanvas from './StarryCanvas';
import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Login from './Login';
import Register from './Register';


function LandingPage() {
  const [logoClicked, setLogoClicked] = useState(false);
  const [isLogin, setIsLogin] = useState("1");

  const handleLogoClick = () => {
    setLogoClicked(true);
  }
  
  const renderIntro = () => {
  const fadeStyle = {opacity: logoClicked ? 1 : 0, transition: 'opacity ease-in 1s'};
    return (
        <>
            <Grid2 size={7} id="Study Builder Text" sx={{zIndex: logoClicked ? 3 : -10, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Typography variant='h1' sx={{...fadeStyle, transition: 'opacity ease-in 1s', fontWeight: 500, fontFamily: 'Urbanist', color: 'white', textAlign: 'center'}}>
                    Study Builder
                </Typography>
                <Typography variant='body1' sx={{...fadeStyle, fontWeight: 200, fontFamily: 'Urbanist',  color: 'white', textAlign: 'center', padding: '20px', margin: '50px', borderRadius: '10px', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    Unlock your full potential with Study Builder, the ultimate tool to help you organize, plan, and create engaging study sessions.
                    Whether you&apos;re preparing for exams, mastering new topics, or simply expanding your knowledge, Study Builder brings together
                    the best resources and interactive features to guide your learning journey. With an intuitive interface, customizable study modes, 
                    and dynamic tools at your fingertips, building effective study habits has never been easier. Start building your future, one
                    study session at a time!
                </Typography>
            </Grid2>
            <Grid2 size={5} id="Auth Section" sx={{...fadeStyle, backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 3, display: 'flex', padding: '50px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <TabContext value={isLogin}>
                    <TabList onChange={(_,v) => setIsLogin(v)} sx={{...fadeStyle, width: '548px'}} variant='fullWidth'>
                        <Tab label="Login" value={"1"} sx={{fontFamily: 'Urbanist', fontSize: '20px', color: 'white', backgroundColor: 'rgba(19, 24, 98, 0.5)', textTransform: 'none'}}/>
                        <Tab label="Register" value={"0"} sx={{fontFamily: 'Urbanist', fontSize: '20px', color: 'white', backgroundColor: 'rgba(46, 68, 130, 0.5)', textTransform: 'none'}}/>
                    </TabList>
                    <TabPanel value="1" sx={{...fadeStyle, backgroundColor: 'rgba(0, 0, 255, 0.1)', borderRadius: '0px 0px 20px 20px'}}><Login /></TabPanel>
                    <TabPanel value="0" sx={fadeStyle}><Register /></TabPanel>
                </TabContext>
            </Grid2>
        </>
    )
  }

  return (
        <Box id="Landing Page Box" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', width: '100vw', height: '100vh', background: 'linear-gradient(to top, #2c3e50 0%,#050e39 50%)'}}>
            <StarryCanvas noOfStars={700} />
            <Grid2 id="Main Grid Landing Page" container columns={12} sx={{display: 'flex', width: '100%', height: '100%'}}>
                <Grid2 size={12} id="Logo" sx={{zIndex: 2, position: 'absolute', padding: '60px', width: '100%', height: '100%', display: 'flex',  justifyContent: 'center', alignItems: 'center'}}>
                    <Box id="image" component="img" sx={{
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(50% 50%, white 0%, #012489 20%, rgba(0,0,0,0) 100%)',
                        borderRadius: '100%',
                        transform: logoClicked ? 'translate(-46.7vw, -43.2vh) scale(0.3)': '',
                        transition: 'transform ease 1s',
                        position: logoClicked ? 'absolute' : 'relative',
                        ":hover": !logoClicked ? {
                            transition: 'ease-in 0.2s',
                            cursor: 'pointer'
                        } : {},
                        ":not(:hover)": {
                            transition: 'ease-out 0.2s'
                        }
                    }}
                        src={SB}
                        onClick={handleLogoClick}/>

                </Grid2>
                {renderIntro()}
            </Grid2>
        </Box>
    )
}

export default LandingPage;

