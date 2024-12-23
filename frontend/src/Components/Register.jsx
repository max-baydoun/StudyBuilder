import { Box, Checkbox, FormControl, FormControlLabel, Grid2, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GenericPopup from "../Popups/GenericPopup";
import LoadingIcon from "../Popups/LoadingIcon";
import { omit } from "underscore";
import axios from "axios";


const Register = () => {
    const [userRegister, setUserRegister] = useState({ name: "", email: "", password: "", confirmPassword: "" });
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
    }, [userRegister]);

    function handleSetName(event) {
        setUserRegister((oldRegister) => {
            return { ...oldRegister, name: event };
        });
    }

    function handleSetEmail(event) {
        setUserRegister((oldRegister) => {
            return { ...oldRegister, email: event };
        });
    }

    function handleSetPassword(event) {
        setUserRegister((oldRegister) => {
            return { ...oldRegister, password: event };
        });
    }

    function handleSetConfirmPassword(event) {
        setUserRegister((oldRegister) => {
            return { ...oldRegister, confirmPassword: event };
        });
    }

    function handleSubmit() {
        setIsLoading(true);
        if (userRegister.password !== userRegister.confirmPassword) {
            setPopup({ title: "Invalid Register", message: "Passwords do not match!" });
            setOpenPopupModal(true);
            setIsLoading(false);
            return;
        }
        axios.post(
            "http://localhost:5000/auth/register",
            omit(userRegister, "confirmPassword"),
            {headers: {"Content-Type": 'application/json'}}
        ).then(res => {
            console.log(res);
            const data = res.data;
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        }).catch(error => {
            console.log(error);
            setPopup({ title: "Internal server error", message: error.response.data.error });
            setOpenPopupModal(true);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <Box sx={{ zIndex: "3", padding: "50px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <Grid2 container sx={{ flexDirection: "column" }}>
                <Typography variant="h2" sx={{ color: "#FFF", fontFamily: "Urbanist" }}>
                    Register
                </Typography>
            </Grid2>
            <Grid2
                id="Register main"
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
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <OutlinedInput id="name" label="Name" onChange={(event) => handleSetName(event.target.value)} />
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
                    <OutlinedInput id="password" label="Password" type={showPassword ? "text" : "password"} onChange={(event) => handleSetPassword(event.target.value)} />
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
                    <InputLabel htmlFor="confirm_password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="confirm_password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        onChange={(event) => handleSetConfirmPassword(event.target.value)}
                    />
                </FormControl>
                <Grid2 size={12} sx={{ display: "flex", justifyContent: "start", width: "300px" }}>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Show password"
                        sx={{ color: "white", "& .MuiCheckbox-root": { color: "white" } }}
                        onChange={() => setShowPassword((prev) => !prev)}
                    />
                </Grid2>
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
                    disabled={Object.values(userRegister).some((value) => value === "")}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Grid2>
            <GenericPopup object={popup} open={openPopupModal} handleClose={() => setOpenPopupModal(false)} />
            {isLoading && <LoadingIcon />}
        </Box>
    );
};

export default Register;
