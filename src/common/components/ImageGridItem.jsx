import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

//Single image item renders skeleton elemet on loading
const ImageGridItem = ({ image, large, onClick, selected, loading }) =>
  large ? (
    <Grid item xs={8} md={6} lg={4}>
      <Button
        onClick={onClick}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "15rem",
          width: "15rem",
          borderRadius: 5,
        }}
      ></Button>
    </Grid>
  ) : loading ? (
    <Grid item xs={8} md={6} lg={4}>
      <Skeleton
        variant="rectangular"
        style={{
          borderRadius: 5,
        }}
        width={"5rem"}
        height={"5rem"}
      />
    </Grid>
  ) : (
    <Grid item xs={6} md={4} lg={2}>
      <Button
        onClick={onClick}
        style={{
          border: selected && "3px solid #387BAA",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "5rem",
          width: "5rem",
          borderRadius: 5,
        }}
      ></Button>
    </Grid>
  );

export default ImageGridItem;
