import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_COMPANIES } from "./../../utils/queries";
import { Companies, DocumentDialogProps } from "./../../types/documentTypes";
import FileDropZone from "./../FileDropZone/FileDropZone";
import { IFileWithMeta, StatusValue } from "react-dropzone-uploader";
import axios from "axios";
import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  Input,
  Icon,
  IconButton,
  DialogActions,
  Button
} from "@material-ui/core";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const useStyles = makeStyles(theme => ({
  input: {
    width: "100%"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
  flexSpace: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

interface File extends IFileWithMeta, Blob {}
const fromCompanyId = 1;

const FileUploadModal: React.FC<DocumentDialogProps> = ({ open, onClose }) => {
  const classes = useStyles();
  const [recipients, setRecipients] = useState<any>([]);
  const [file, setFile] = useState<File | null>();
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<{
    recipientsError: boolean;
    fileError: boolean;
  }>({ recipientsError: false, fileError: false });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRecipients(event.target.value as string[]);
  };

  const handleFileChange = (
    file: File,
    status: StatusValue,
    allFiles: IFileWithMeta[]
  ): { meta: { [name: string]: any } } | void => {
    if (status === "done") {
      setFile(file);
    } else if (status === "aborted" || status === "removed") {
      setFile(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formErrors = { ...errors };
    if (!recipients.length) {
      formErrors.recipientsError = true;
      setErrors(formErrors);
    }
    if (!file) {
      formErrors.fileError = true;
      setErrors(formErrors);
    }
    if (recipients.length && file) {
      setErrors({ recipientsError: false, fileError: false });
      const url = "localhost:3000/files/upload";
      const formData = new FormData();
      const toCompanyId = recipients[0].split("_._");
      formData.append("file", file);
      formData.append("fromCompanyId", fromCompanyId.toString());
      formData.append("toCompanyId", toCompanyId.toString());
      const config = {
        headers: { "content-type": "multipart/form-data" }
      };

      //   axios
      //     .post(url, formData, config)
      //     .then(response => console.log(response))
      //     .catch(console.log);
    }
  };

  const { loading, data } = useQuery<Companies, null>(GET_COMPANIES);
  const companies = data && data.companies;

  return (
    <Dialog open={open} onClose={onClose}>
      <Box minHeight={480} minWidth={520} padding={2}>
        <Box className={classes.flexSpace}>
          <DialogTitle>
            <strong>Upload document</strong>
          </DialogTitle>
          <IconButton aria-label="close" onClick={onClose}>
            <Icon>close</Icon>
          </IconButton>
        </Box>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel id="recipients-label">Recipient(s)</InputLabel>
              <Select
                error={errors.recipientsError}
                labelId="recipients-label"
                id="recipients"
                multiple
                value={recipients}
                onChange={handleChange}
                input={<Input id="select-recipients" />}
                renderValue={selected => (
                  <div className={classes.chips}>
                    {(selected as string[]).map(value => (
                      <Chip
                        key={value}
                        label={value.split("_._")[1]}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
              >
                {!loading &&
                  companies &&
                  companies.map(company => (
                    <MenuItem
                      key={company.id}
                      data-index={company.id}
                      value={`${company.id}_._${company.name}`}
                    >
                      {company.name}
                    </MenuItem>
                  ))}
                }
              </Select>
              <FileDropZone onChangeStatus={handleFileChange} />
              {errors.fileError && <ErrorMessage message="File Required" />}
              <TextField
                id="message"
                label="Message (Optional)"
                multiline
                rows="5"
                margin="normal"
                variant="outlined"
                onChange={(
                  event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >
                ) => {
                  setMessage(event.target.value);
                }}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button type="submit">Send</Button>
          </DialogActions>
        </form>
      </Box>
    </Dialog>
  );
};

export default FileUploadModal;
