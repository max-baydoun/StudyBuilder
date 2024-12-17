import { Box, Grid2, TextField, Typography, Button, IconButton, Input, InputLabel, InputAdornment, OutlinedInput, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { authLogin } from "../../routing/authFuncs";
import GenericPopup from "../Popups/GenericPopup";
import LoadingIcon from "../Popups/LoadingIcon";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
    const [userLogin, setUserLogin] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [popup, setPopup] = useState({ title: "", message: "" });
    const [openPopupModal, setOpenPopupModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") handleSubmit();
        };
        localStorage.clear();
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [userLogin]);

    function handleSetEmail(event) {
        setUserLogin((oldLogin) => {
            return { ...oldLogin, email: event };
        });
    }
    function handleSetPassword(event) {
        setUserLogin((oldLogin) => {
            return { ...oldLogin, password: event };
        });
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
        <Box sx={{ zIndex: "3", padding: "50px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <Grid2 container sx={{ flexDirection: "column" }}>
                <Typography variant="h2" sx={{ color: "#FFF", fontFamily: "Urbanist" }}>
                    Welcome back!
                </Typography>
                <Typography variant="h4" sx={{ color: "#FFF", fontFamily: "Urbanist" }}>
                    Let&apos;s get you signed in
                </Typography>
            </Grid2>
            <Grid2
                container
                rowSpacing={2}
                columnSpacing={1}
                columns={12}
                sx={{
                    margin: "30px 0px",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px 0px",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    borderRadius: "10px",
                    minWidth: "400px",
                }}
            >
                <FormControl
                    size="small"
                    sx={{
                        width: "300px",
                        "& label.Mui-focused": { color: "white" },
                        "& label": { color: "white" },
                        "& .MuiOutlinedInput-root": {
                            color: "white",
                            "&.Mui-focused fieldset": { borderColor: "#6F7E8C" },
                        },
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                >
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput id="email" label="Email" onChange={(event) => handleSetEmail(event.target.value)} />
                </FormControl>
                <FormControl
                    size="small"
                    sx={{
                        width: "300px",
                        "& label.Mui-focused": { color: "white" },
                        "& label": { color: "white" },
                        "& .MuiOutlinedInput-root": {
                            color: "white",
                            "&.Mui-focused fieldset": { borderColor: "#6F7E8C" },
                        },
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                >
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        onChange={(event) => handleSetPassword(event.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton sx={{ color: showPassword ? "black" : "white" }} onClick={() => setShowPassword((prev) => !prev)}>
                                    {" "}
                                    {showPassword ? <VisibilityOff /> : <Visibility />}{" "}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                        backgroundColor: "rgba(84,107,171, 0.5)",
                        "&.Mui-disabled": { backgroundColor: "black", color: "white" },
                        textTransform: "none",
                        width: "230px",
                    }}
                    disabled={Object.values(userLogin).some((value) => value === "")}
                    onClick={handleSubmit}
                >
                    Login
                </Button>
            </Grid2>
            <GenericPopup object={popup} open={openPopupModal} handleClose={() => setOpenPopupModal(false)} />
            {isLoading && <LoadingIcon />}
        </Box>
    );
};

export default Login;
