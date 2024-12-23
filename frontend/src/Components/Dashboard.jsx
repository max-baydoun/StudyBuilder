import { AppBar, Box, Button, Grid2, Typography } from "@mui/material";
import SB from '../../assets/bruh.png'
import { useNavigate } from "react-router-dom";
import LoadingIcon from "../Popups/LoadingIcon";
import { useState } from "react";

function Dashboard() {
    const [isLoading, setIsLoading] = useState(false);
    const [KBs, setKBs] = useState([]);
    const navigate = useNavigate();
    const backgroundStyle = {background: 'linear-gradient(to top, #070B34 0%, #141852 20%, #2B2F77 40%, #483475 60%, #6B4984 80%, #855988 100%)'};
    

    const handleLogout = () => {
        setIsLoading(true);
        navigate('/').then(() => {setIsLoading(false);});
    }

    const loadKnowledgeBases = () => {
        // Fetch from database!
    }

    const NavBar = () => {
        return (
            <Box sx={{width: '100%'}}>
                <AppBar sx={{position: 'static', top: 'auto', bottom: '0', background: 'rgba(0, 0, 0, 0.9)'}}>
                    <Grid2 container columns={12} sx={{width: '100%', height: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', padding: '10px'}}>
                        <Grid2 size={2} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                            <Box id="image" component="img" sx={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '100%',
                            }} src={SB}/>
                            <Typography sx={{fontFamily: 'Urbanist', fontSize: '30px'}}>Study Builder</Typography>
                        </Grid2>
                        <Grid2 size={9} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                            <Button variant="contained" sx={{textTransform: 'none'}}>Create KB</Button>
                        </Grid2>
                        <Grid2 size={1}>
                            <Button variant="contained" sx={{textTransform: 'none'}} onClick={handleLogout}>Logout</Button>
                        </Grid2>
                    </Grid2>
                </AppBar>
            </Box>
        )
    }
    return (
        <Box sx={{ ...backgroundStyle, width: '100%', height: '100vh', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <Grid2 container columns={12} sx={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {KBs.length === 0 && 
                <Typography sx={{fontFamily: 'Urbanist', color: 'white', textAlign: 'center', fontSize: '40px'}}>
                    Your second brain seems to be looking a little empty, click the "Create KB" button to create a new Knowledge Base!
                </Typography>}
            </Grid2>
            <NavBar />
            {isLoading && <LoadingIcon />}
        </Box>
    )
}

export default Dashboard;
