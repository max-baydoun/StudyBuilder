import {Box, Grid2, Typography} from '@mui/material'
import SB from '../../assets/bruh.png'
import StarryCanvas from './StarryCanvas';

function LandingPage() {

  return (
        <Box id="Landing Page Box" sx={{overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', width: '100%', height: '100%'}}>
            <Grid2 id="Main Grid Landing Page" container columns={12} sx={{background: 'linear-gradient(to top, #2c3e50 0%,#050e39 50%)', display: 'inline-block'}}>
                <StarryCanvas noOfStars={500} />
                <Grid2 size={12} id="Logo" sx={{padding: '60px', width: '100%', height: '100vh', display: 'flex',  justifyContent: 'center', alignItems: 'center'}}>
                    <Box id="image" component="img" sx={{
                        zIndex: 2,
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(50% 50%, white 0%, #012489 20%, rgba(0,0,0,0) 100%)',
                        borderRadius: '100%',
                        ":hover": {
                            width: '500px',
                            height: '500px',
                            transition: 'ease 0.2s',
                        },
                        ":not(:hover)": {
                            transition: 'ease-out 0.2s'
                        }
                    }}
                        src={SB}
                        onClick={() => scrollBy({
                            top: window.innerHeight,
                            behavior: "smooth"
                        })}/>

                </Grid2> 
                <Grid2 size={12} id="Study Builder Text" sx={{display: 'flex', justifyContent: 'center', alignItems: 'top'}}>
                    <Typography sx={{fontSize: '150px', fontWeight: 500, fontFamily: 'Urbanist ', color: 'white', textAlign: 'center'}}>Study Builder</Typography>
                </Grid2>
                <Grid2 size={12} id="Study Builder Text" sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'top'}}>
                    <Typography sx={{width: '60%', fontWeight: 200, textAlign: 'center', fontFamily: 'Urbanist', fontSize: '20px'}}>
                    Unlock your full potential with Study Builder, the ultimate tool to help you organize, plan, and create engaging study sessions.
                    Whether you’re preparing for exams, mastering new topics, or simply expanding your knowledge, Study Builder brings together
                    the best resources and interactive features to guide your learning journey. With an intuitive interface, customizable study modes, 
                    and dynamic tools at your fingertips, building effective study habits has never been easier. Start building your future, one
                    study session at a time!
                    </Typography>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default LandingPage;

