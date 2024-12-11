import {Box, Grid2, Typography} from '@mui/material'
import SB from '../../assets/yep.png'

function LandingPage() {

  return (
        <Box id="Landing Page Box" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', height: '100vh'}}>

            <Grid2 id="Main Grid Landing Page" container columns={12} sx={{borderRadius: '20px', width: '100%', height: '100%', background: 'linear-gradient(to top, #2c3e50 0%, #2c3e50 40%, black 70%, black 100%)', display: 'inline-block'}}>
                <Grid2 size={12} id="Logo" sx={{width: '100%', height: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box id="image" component="img" sx={{width: '300px', height: '300px', background: 'radial-gradient(closest-side ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(115, 230, 255, 0.5) 60%, rgba(0, 0, 0, 0) 100%)'}} src={SB}/>
                </Grid2> 
                <Grid2 size={12} id="Study Builder Text" sx={{fontSize: '100px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'top'}}>
                    Study Builder
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default LandingPage;

