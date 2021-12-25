import { createContext, useContext, useState } from "react";

const FileHandlerContext = createContext();

const FilesProvider = (props) => {
  const [files, setFiles] = useState({
    images: [],
    selected: null,
  });

  const updateImages = () =>
    files.selected &&
    setFiles({
      images: [...files.images, files.selected],
    });

  const setSelected = (item) =>
    setFiles((previousState) => ({
      ...previousState,
      selected: item,
    }));

  const clearSelected = () =>
    setFiles((previousState) => ({
      ...previousState,
      selected: null,
    }));

  const filesContextValue = {
    files,
    updateImages,
    setSelected,
    clearSelected,
  };

  return <FileHandlerContext.Provider value={filesContextValue} {...props} />;
};

const useFiles = () => useContext(FileHandlerContext);

export { FilesProvider, useFiles };
