
import React from "react";
import logo from "../../shared/images/Group 1116606595.png";


import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import WestIcon from "@mui/icons-material/West";

const ForgotPass1 = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="flex items-center max-w-[1200px] mx-auto justify-center h-[100vh]">
        <aside className="bg-[#1C2536] w-full flex flex-col gap-[8px] items-start justify-center h-full pl-[64px]">
          <p className="text-[white]">Welcome to admin panel</p>
          <img src={logo} alt="" />
        </aside>
        <aside className=" w-full flex flex-col gap-[20px]  justify-center h-full pl-[60px]">
          <h1 className="font-bold">
            <WestIcon /> Login
          </h1>
          <h1 className="font-bold text-[30px]"> Forgot Password</h1>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
          />

          <Button variant="contained" disableElevation>
            Send reset link
          </Button>
        </aside>
      </div>
    </div>
  );
};

export default ForgotPass1;
