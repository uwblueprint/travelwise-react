import React from "react";
import { Query } from "react-apollo";
import { CompanyFiles, DocumentDialogProps } from "./../../types/documentTypes";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from "@material-ui/core";

const FileUploadModal: React.FC<DocumentDialogProps> = ({ open }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>
        <Typography variant="h1">Upload document</Typography>
      </DialogTitle>
      <DialogContent>upload file!</DialogContent>
    </Dialog>
  );
};

export default FileUploadModal;
