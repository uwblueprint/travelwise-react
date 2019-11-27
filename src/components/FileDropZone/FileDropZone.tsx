import React from "react";
import {
  createStyles,
  withStyles,
  Theme,
  WithStyles
} from "@material-ui/core/styles";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const styles = (theme: Theme) =>
  createStyles({
    dropzone: {
      marginTop: "1rem",
      border: `1px dashed #CCCCCC`,
      height: "120px",
      boxSizing: "border-box",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputLabel: {
      fontSize: "14px",
      lineHeight: "19px",
      color: "#888888"
    }
  });
const FileDropZone = withStyles(styles)((props: WithStyles<typeof styles>) => {
  const { classes } = props;
  return (
    <Dropzone
      multiple={false}
      classNames={{
        dropzone: classes.dropzone,
        inputLabel: classes.inputLabel
      }}
    />
  );
});

export default FileDropZone;
