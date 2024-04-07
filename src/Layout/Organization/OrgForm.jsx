import {
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import "./OrgForm.css";
import { SIGNIN_SIDE_IMG } from "../../utils/constants";

function OrgForm() {
  const [age, setAge] = React.useState("");

  const [size, setSize] = React.useState("");

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid xs={6}>
          <div className="form-org-container">
            <h2>Tell us about you.</h2>
            <FormControl size="small" fullWidth>
              <h4>Help you team to recognise and contact you.</h4>
              <p>Your name.</p>
              <OutlinedInput
                className="form-org-mg-bottom"
                size="small"
                placeholder="TechM"
                type="name"
              ></OutlinedInput>
              <div className="form-org-card">
                <div>
                  <p>Role(optional)</p>
                  <Select
                    fullWidth
                    value={size}
                    onChange={handleSize}
                    displayEmpty
                    //   inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>Choose One</em>
                    </MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </div>
                <div>
                  <p>Department(Optional)</p>
                  <Select
                    fullWidth
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    //   inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>Choose one</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </div>
              </div>
            </FormControl>
          </div>
          <div className="form-org-container">
            <h2>Tell us about your Company or team.</h2>
            <FormControl size="small" fullWidth>
              <h4>Company name or Team name.</h4>
              <p>This will be your org name.</p>
              <OutlinedInput
                className="form-org-mg-bottom"
                size="small"
                placeholder="TechM"
                type="name"
              ></OutlinedInput>
              <div className="form-org-card">
                <div>
                  <p>Company Size(optional)</p>
                  <Select
                    fullWidth
                    value={size}
                    onChange={handleSize}
                    displayEmpty
                    //   inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>Choose One</em>
                    </MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </div>
                <div>
                  <p>Industry(Optional)</p>
                  <Select
                    fullWidth
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    //   inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>Choose one</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </div>
              </div>
            </FormControl>
            <Button
              variant="contained"
              sx={{ float: "left", margin: "10px 0" }}
            >
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

export default OrgForm;
