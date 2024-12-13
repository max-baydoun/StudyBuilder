import { Box, Button, Grid2, Modal, Typography } from "@mui/material";

const GenericPopup = ({object, open, handleClose}) => {
  const {title, message, code=0} = object;
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ borderRadius: '8px', backgroundColor: '#ffffff', padding: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <Grid2 container spacing={2} columns={12} sx={{display: 'flex', padding: '5px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Grid2 container columns={12}>
            <Typography>{title}</Typography>
          </Grid2>
          <Grid2 container columns={12}>
            <Typography>{message}</Typography>
          </Grid2>
          <Grid2 container columns={12}>
            <Button variant="contained" onClick={() => handleClose(code)}>OK</Button>
          </Grid2>
        </Grid2>
      </Box>
    </Modal>
  )
}

export default GenericPopup;