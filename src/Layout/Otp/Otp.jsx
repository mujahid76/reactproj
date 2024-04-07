import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { SIGNIN_SIDE_IMG } from "../../utils/constants";
import { Button} from "@mui/material";
import { useUserAuth } from "../../context/UserAuthContext";
import OTPInput, { ResendOTP } from "otp-input-react";

import "./Otp.css";

function OtpPage() {
  const { user } = useUserAuth();

  const [OTP, setOTP] = useState("");

  const onOTPSubmit = () => {
    //Need to call an API for OTP validation
  }
  const timer = (time) => {
    return <p className="otp-expries-container">OTP expires in - {time}secs</p>;
  };

  const renderButton = (buttonProps) => {
    return <Button {...buttonProps} color="primary">Resend</Button>;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid xs={6}>
          <div className="otp-title-card">
            <h1>Check your email for a code</h1>
            <p>
              We have send a code to your {user.email}. The code expires shortly, so Please enter it soon.
            </p>
            <Box className="otp-input-box-container" >
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
              />
            </Box>

            <Box className="otp-input-box-container">
              <Button variant="contained" color="success" onClick={onOTPSubmit}>Submit</Button>
            </Box>
            <Box className="mt-20">
              Didn't get the code?
            </Box>
            <ResendOTP
             // onResendClick={() => console.log("Resend clicked")}
              maxTime={30}
              renderTime={timer}
              renderButton={renderButton}
              className="resend-otp-container"
            />
          </div>
        </Grid>
        <Grid xs={6}>
          <img
            className="otp-img-card"
            src={require("../../assests/" + SIGNIN_SIDE_IMG)}
            alt="bg-img"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default OtpPage;
