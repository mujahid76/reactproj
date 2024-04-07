import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import "./CreateOrg.css";

function CreateOrJoinOrganisation() {
  return (
    <>
      <div className="org-heading">
        <p className="org-p-heading">Confirmed as</p>
        <h4>techm@work-space.com</h4>
        <Button
          className="org-heading-btn"
          variant={"text"}
          size="small"
          sx={{ marginTop: "5px" }}
        >
          Change
        </Button>
      </div>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // backgroundColor: "red",
          }}
        >
          <div className="org-box">
            <div className="org-top-container">
              <h2>Create New Organisation</h2>
              <p className="org-p-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur cupiditate, maiores tenetur veniam repudiandae,
              </p>
              <Button className="btn-org" variant="contained" size="medium">
                Create an organisation
              </Button>
              <p className="org-p-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                aperiam eveniet at voluptatum nulla provident deleniti alias
                ducimus nesciunt
              </p>
            </div>
          </div>
          <div className="org-box">
            <img
              className="org-img-card"
              src={require("../../assests/signin-side.png")}
              alt="bg-img"
            />
          </div>
        </div>

        <div className="org-list-container">
          <h2 className="org-text-center">Accept an Invitation</h2>

          <Card>
            <CardHeader
              sx={{ textAlign: "justify" }}
              title="Invitation for example@workspace.com"
            />

            <Divider variant="fullWidth" />
            <CardContent sx={{ padding: 0 }}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ width: "80%" }}
                    primary="Brunch this weekend?"
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </>
                    }
                  />
                  <ListItemButton
                    sx={{
                      color: "white",
                      backgroundColor: "blue",
                      justifyContent: "center",
                      margin: "10px",
                      borderRadius: "4px",
                    }}
                    className="org-list-btn"
                  >
                    Join
                  </ListItemButton>
                </ListItem>

                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ width: "80%" }}
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{
                            display: "inline",
                          }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                  <ListItemButton
                    sx={{
                      color: "white",
                      backgroundColor: "blue",
                      justifyContent: "center",
                      margin: "10px",
                      borderRadius: "4px",
                    }}
                    className="org-list-btn"
                  >
                    Join
                  </ListItemButton>
                </ListItem>
              </List>
            </CardContent>
          </Card>
          <div className="org-card-btn">
            <p>Not seein your Organisation?</p>
            <Button variant="text">Try a different email</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CreateOrJoinOrganisation;
