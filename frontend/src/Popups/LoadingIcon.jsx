import { Box, CircularProgress } from "@mui/material"

const LoadingIcon = () => {
  return (
    <Box sx={{
      position: 'absolute', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '50%',
      left: '50%',
      zIndex: '500', 
      width: '100%', 
      height: '100%', 
      transform: 'translate(-50%, -50%)',
      backdropFilter: 'blur(5px)'
    }}>
      <CircularProgress size="50px" />
    </Box>
  )
}

export default LoadingIcon