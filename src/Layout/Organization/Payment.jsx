import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "./Payment.css";

function Payment() {
  return (
    <div className="payment-container">
      <h2>You're ready to go!</h2>
      <p>Choose a subscription to get started:</p>
      <div className="payment-card">
        <Paper elevation={3} className="paper-card">
          <h1>Free</h1>
          <h1>$0</h1>
          <p>per person/month</p>

          <Button fullWidth variant="outlined">
            Start with Free
          </Button>
          <ul>
            <li className="list-padding">90 days of messae history</li>
            <li className="list-padding">1:1 audio/video coversation</li>
            <li className="list-padding">
              Direct message with external clients or customers
            </li>
          </ul>
        </Paper>
        <Paper elevation={3} className="paper-card">
          <div className="align-heading">
            <h1>Pro</h1>
            <div className="rcmd-card">
              <AutoAwesomeIcon />
              <p className="rcmd-text">Recommended</p>
            </div>
          </div>

          <h1 className="h1-margin">50% off*</h1>
          <p>
            <span className="text-strick">$655.00</span> $294.75 per
            person/month
          </p>

          <Button fullWidth variant="contained">
            Upgrade to Pro
          </Button>

          <List>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="90 days of messae history" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="1:1 audio/video coversation" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Direct message with external clients or customers" />
            </ListItem>
          </List>
        </Paper>
      </div>
    </div>
  );
}

export default Payment;
