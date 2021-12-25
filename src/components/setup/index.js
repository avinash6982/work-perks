import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ImageGrid from "./ImageGrid";

import {
  NEXT_BUTTON_LABEL,
  SETUP_HEADING_MAIN,
  SETUP_HEADING_SUB,
} from "./Constants";

//setupComponent, as a wrapper for ImageGrid component
const Setup = () => {
  return (
    <Grid
      style={{
        display: "grid",
        placeItems: "center",
        height: "90vh",
      }}
    >
      <Grid item style={{ width: "100%" }} xs={12} md={8} lg={6}>
        <Card
          elevation={3}
          style={{ overflow: "hidden", borderRadius: ".8rem" }}
        >
          <Grid style={{ display: "flex" }}>
            <Grid style={{ flex: 9, position: "relative", padding: 20 }}>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }} gutterBottom>
                  {SETUP_HEADING_MAIN}
                </Typography>
                <Typography
                  style={{
                    fontSize: "1rem",
                    color: "#707070",
                    paddingBottom: 10,
                  }}
                  gutterBottom
                >
                  {SETUP_HEADING_SUB}
                </Typography>
                <Box
                  style={{
                    height: 5,
                    backgroundColor: "#387BAA",
                    width: 120,
                    borderRadius: 5,
                  }}
                ></Box>
                <ImageGrid />
              </CardContent>
              <CardActions style={{ padding: 20 }}>
                <Box style={{ position: "absolute", left: 30, bottom: 30 }}>
                  <Button variant="contained">{NEXT_BUTTON_LABEL}</Button>
                </Box>
              </CardActions>
            </Grid>
            <Grid style={{ flex: 3 }}>
              <Box
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#387BAA",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Setup;
