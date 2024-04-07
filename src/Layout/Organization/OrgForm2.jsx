import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import { SIGNIN_SIDE_IMG } from "../../utils/constants";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./OrgForm.css";

function OrgForm2() {
  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid xs={6}>
          <div className="form-org-container">
            <h2>Who else is on the Techmahindra team?</h2>
            <div className="form-org-text-align">
              <p>Add colleagues by email</p> 
              <p>Add from Google contact.</p>
            </div>
            <TextField
              fullWidth
              // label="fullWidth"
              id="fullWidth"
              multiline="true"
              placeholder="example@work-space.com"
              minRows={4}
            />
            <div className="form-org-grp-btn">
              {/* <Button variant="contained">Next</Button> */}
              <Button variant="outlined">Copy Invitation</Button>
              {/* <Button>Skip</Button> */}
            </div>
          </div>
          <div className="form-org-container">
            <h2>What's your team working on right now?</h2>
            <p>
              This could be anything a project, Campaign, event or the deal
              you'r trying to close.
            </p>
            <FormControl fullWidth>
              <OutlinedInput
                className="form-org-mg-bottom"
                size="small"
                placeholder="E.g. Q4 budget"
                type="name"
              ></OutlinedInput>
              <p>How can slack help your team?(Optional)</p>
              <FormControlLabel
                sx={{
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                  margin: "10px 0",
                  width: "100%",
                }}
                label="Saty aligned to meet deadlines."
                control={<Checkbox icon={<BookmarkBorderIcon />} />}
              />

              <FormControlLabel
                sx={{
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                  margin: "10px 0",
                  width: "100%",
                }}
                label="Saty aligned to meet deadlines."
                control={<Checkbox icon={<BookmarkBorderIcon />} />}
              />

              <FormControlLabel
                sx={{
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                  margin: "10px 0",
                  width: "100%",
                }}
                label="Saty aligned to meet deadlines."
                control={<Checkbox icon={<BookmarkBorderIcon />} />}
              />
            </FormControl>
            <Button variant="contained" sx={{ float: "left" }}>
              Next
            </Button>
          </div>
        </Grid>
        <Grid xs={6}>
          <img
            className="form-org-img"
            src={require("../../assests/" + SIGNIN_SIDE_IMG)}
            alt="bg-img"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default OrgForm2;
