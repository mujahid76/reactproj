//import * as React from "react";
import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Button, Divider, OutlinedInput } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { SIGNIN_SIDE_IMG } from "../../utils/constants";
import { useUserAuth } from "../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase/firebase";
import "./SignIn.css";

function SignIn() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn().then(
        async(result) => {
          const token = await auth?.currentUser?.getIdToken(true);
        //4 - check if have token in the current user
        if (token) {
          //5 - put the token at localStorage (We'll use this to make requests)
          localStorage.setItem("@token", token);
          //6 - navigate user to the book list
          navigate("/otp");
        }
        }
      )
      //navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid xs={6}>
          <div className="signin-card">
            <p className="signin-heading">Register With TechMahindra</p>
            <p>Enter Yor Work Email to receive a one time passcode.</p>

            <div className="signin-input-card">
              <OutlinedInput
                className="signin-mg-bottom"
                size="small"
                placeholder="name@work-email.com"
                type="email"
              ></OutlinedInput>

              <Button variant="contained" size="medium">
                Continue
              </Button>
            </div>

            <Divider className="signin-divider">OR</Divider>

            <div className="signin-social-btns">
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleSignIn}
              >
                Login with Gmail
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<AppleIcon />}
              >
                Login with Apple
              </Button>
            </div>
          </div>
        </Grid>
        <Grid xs={6}>
          <img
            className="signin-img-card"
            src={require("../../assests/" + SIGNIN_SIDE_IMG)}
            alt="bg-img"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignIn;
