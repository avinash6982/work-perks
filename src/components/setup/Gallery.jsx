import React, { useState } from "react";
import { useQuery } from "react-query";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useFiles } from "../../context/FileHandlerContext";
import { mockGalleryFetch } from "../../api/mockGalleryFetch";
import ImageGridItem from "../../common/components/ImageGridItem";

import { ERR_SOMETHING } from "./Constants";

//Gallery component
const Gallery = () => {
  //Consumes files context
  const filesContext = useFiles();
  //Fetch galleryItems
  const fetchItems = useQuery("galleryItems", mockGalleryFetch);
  const [selected, setSelected] = useState(null);

  //Sets image under selection, ready to push to images
  const makeSelection = (item, key) => {
    filesContext.setSelected(item);
    setSelected(key);
  };

  return (
    <Box
      style={{
        height: "50vh",
        width: "100%",
        overflow: "scroll",
        display: "block",
      }}
    >
      <Grid
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 6rem)",
        }}
        container
        spacing={2}
      >
        {fetchItems.status === "success" ? (
          Object.keys(fetchItems.data).map((key) => (
            <ImageGridItem
              key={key}
              onClick={() => makeSelection(fetchItems.data[key], key)}
              image={fetchItems.data[key]}
              selected={selected === key}
            />
          ))
        ) : fetchItems.status === "loading" ? (
          <ImageGridItem loading />
        ) : (
          <Typography gutterBottom>{ERR_SOMETHING}</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Gallery;
