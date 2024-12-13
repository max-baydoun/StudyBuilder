import {Box, Button, Grid2, Typography} from '@mui/material'
import SB from '../../assets/bruh.png'
import StarryCanvas from './StarryCanvas';
import { useState } from 'react';

function LandingPage() {
  const [logoClicked, setLogoClicked] = useState(false);

  const handleLogoClick = () => {
    setLogoClicked(true);
  }

  return (
        <Box id="Landing Page Box" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', width: '100%', height: '100%'}}>
            <StarryCanvas noOfStars={700} />
            <Grid2 id="Main Grid Landing Page" container columns={12} sx={{display: 'flex', width: '100%', height: '100vh', background: 'linear-gradient(to top, #2c3e50 0%,#050e39 50%)'}}>
                <Grid2 size={12} id="Logo" sx={{zIndex: 2, position: logoClicked ? 'absolute' : 'relative', padding: '60px', width: '100%', height: '100%', display: 'flex',  justifyContent: 'center', alignItems: 'center'}}>
                    <Box id="image" component="img" sx={{
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(50% 50%, white 0%, #012489 20%, rgba(0,0,0,0) 100%)',
                        borderRadius: '100%',
                        transform: logoClicked ? 'translate(-47vw, -45vh) scale(0.3)': '',
                        transition: 'transform ease 1s',
                        position: logoClicked ? 'fixed' : 'relative',
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
                <Grid2 size={12} id="Study Builder Text" sx={{zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
                    <Typography sx={{opacity: logoClicked ? 1 : 0, transition: 'opacity ease-in 1s', fontSize: '150px', fontWeight: 500, fontFamily: 'Urbanist ', color: 'white', textAlign: 'center'}}>
                        Study Builder
                    </Typography>
                </Grid2>
                <Grid2 size={12} id="Study Builder Text" sx={{zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography sx={{opacity: logoClicked ? 1 : 0, transition: 'opacity ease-in 1s',  color: 'white', width: '60%', fontWeight: 200, textAlign: 'center', fontFamily: 'Urbanist', fontSize: '20px'}}>
                        Unlock your full potential with Study Builder, the ultimate tool to help you organize, plan, and create engaging study sessions.
                        Whether you’re preparing for exams, mastering new topics, or simply expanding your knowledge, Study Builder brings together
                        the best resources and interactive features to guide your learning journey. With an intuitive interface, customizable study modes, 
                        and dynamic tools at your fingertips, building effective study habits has never been easier. Start building your future, one
                        study session at a time!
                    </Typography>
                </Grid2>
                <Grid2 size={12} columnGap={5} id="Authentication Buttons" sx={{zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button variant='contained' sx={{backgroundColor: '#DMC791'}}>Login</Button>
                    <Button variant='contained' sx={{backgroundColor: '#DMC791'}}>Sign up</Button>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default LandingPage;

