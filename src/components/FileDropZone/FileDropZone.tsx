import React from "react";
import {
  createStyles,
  withStyles,
  Theme,
  WithStyles
} from "@material-ui/core/styles";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone, { IFileWithMeta, StatusValue } from "react-dropzone-uploader";

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

interface FileDropZoneProps extends WithStyles<typeof styles> {
  onChangeStatus?(
    file: IFileWithMeta,
    status: StatusValue,
    allFiles: IFileWithMeta[]
  ): { meta: { [name: string]: any } } | void;
}
const FileDropZone = withStyles(styles)((props: FileDropZoneProps) => {
  const { classes, onChangeStatus } = props;
  return (
    <Dropzone
      maxFiles={1}
      inputContent="Drop a file here or click to browse"
      onChangeStatus={onChangeStatus}
      classNames={{
        dropzone: classes.dropzone,
        inputLabel: classes.inputLabel
      }}
    />
  );
});

export default FileDropZone;
