import React, { useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Container from "@mui/material/Container";

import ImageGridItem from "../../common/components/ImageGridItem";
import { useFiles } from "../../context/FileHandlerContext";

import {
  CLEAR_SELECTION,
  DROPZONE_1,
  DROPZONE_2,
  DROPZONE_BUTTON_TITLE,
} from "./Constants";

//Handles file upload, dropzone
const FileUpload = () => {
  //Consumes files context
  const filesContext = useFiles();
  const fileInputRef = useRef(null);

  const handleClick = () => fileInputRef.current.click();
  const handleFileUpload = (file) =>
    filesContext.setSelected(URL.createObjectURL(file));
  const clearSelection = () => filesContext.clearSelected();

  useEffect(() => {
    return () => clearSelection();
  }, []);

  const handleDrop = (e) => {
    e.nativeEvent.preventDefault();
    if (!e) return;
    const file = e.nativeEvent.dataTransfer.files[0];
    handleFileUpload(file);
  };

  return (
    <Box
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e)}
      style={{
        height: "50vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      {filesContext.files.selected ? (
        <>
          <ImageGridItem image={filesContext.files.selected} large />
          <Button onClick={clearSelection}>{CLEAR_SELECTION}</Button>
        </>
      ) : (
        <label
          style={{
            border: "5px dotted #ccc",
            height: "100%",
            width: "100%",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
          }}
          htmlFor="file-upload"
        >
          <Box>
            <Container align="center">
              <FileCopyIcon style={{ fontSize: "60", color: "#707070" }} />
            </Container>
            <Container>
              <Typography
                variant="h6"
                style={{ color: "#707070" }}
                align="center"
              >
                {DROPZONE_1}
              </Typography>
            </Container>
            <Container>
              <Typography
                variant="subtitle1"
                style={{ color: "#707070" }}
                align="center"
              >
                {DROPZONE_2}
              </Typography>
            </Container>
            <Container style={{ padding: 20 }} align="center">
              <Input
                id="file-upload"
                fullWidth
                disableUnderline
                ref={fileInputRef}
                onChange={(e) => handleFileUpload(e.target.files[0])}
                style={{ display: "none" }}
                type="file"
                inputProps={{ accept: "image/*" }}
              ></Input>
              <Button
                id="file-upload"
                onClick={handleClick}
                variant="contained"
              >
                {DROPZONE_BUTTON_TITLE}
              </Button>
            </Container>
          </Box>
        </label>
      )}
    </Box>
  );
};

export default FileUpload;
