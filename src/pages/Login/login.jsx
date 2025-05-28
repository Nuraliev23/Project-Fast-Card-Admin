import React, { useEffect, useState } from "react";
import logo from "../../shared/images/Group 1116606595.png";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../entities/reducers/adminSlice";


const Login = () => {
    const token = localStorage.getItem("Token");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const [logname, setlogname] = useState("");
  const [logpassword, setlogpassword] = useState("");
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.admin.loginError);

  const navigate = useNavigate();

  const handleLogin = async () => {
    const resultAction = await dispatch(
      login({ userName: logname, password: logpassword })
    );

    if (login.fulfilled.match(resultAction)) {
      navigate("/home/dashboard");
    } else {
      console.log("Login failed");
    }
  };
  useEffect(() => {
    setlogname("");
    setlogpassword("");
    if(token){
      navigate("/home/dashboard")
    }
  }, []);
  return (
    <div>
      <div className="flex md:items-center items-start max-w-[1200px] mx-auto justify-center h-[100vh] flex-col md:flex-row">
        <aside className="bg-[#1C2536] w-full flex flex-col gap-[8px] items-start justify-center h-full pl-[64px] mx-auto">
          <p className="text-[white]">Welcome to admin panel</p>
          <img src={logo} alt="" />
        </aside>
        <aside className=" w-full flex flex-col gap-[20px]  justify-center h-full pl-[60px]">
          <h1 className="font-bold">Login</h1>
          <TextField
            value={logname}
            onChange={(e) => setlogname(e.target.value)}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            size="small"
          />
          <FormControl sx={{}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              value={logpassword}
              onChange={(e) => setlogpassword(e.target.value)}
              className="w-full"
              size="small"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <p className="text-center text-[#2563EB]">Forgot Password?</p>
          <Button variant="contained" disableElevation onClick={handleLogin}>
            Login
          </Button>
          {loginError && <p className="text-red-500 mt-2">{loginError}</p>}
        </aside>
      </div>
    </div>
  );
};

export default Login;
