import React, { useState, ReactNode } from "react";
import { GET_COMPANIES } from "./../../utils/queries";
import { CompanyFiles, DocumentDialogProps } from "./../../types/documentTypes";
import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Typography,
  makeStyles,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";

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
  }
}));

const FileUploadModal: React.FC<DocumentDialogProps> = ({ open }) => {
  const classes = useStyles();
  const [recipients, setRecipients] = useState<Array<string>>(["one"]);

  const handleNewRecipients = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ): void => {
    // const { options } = event.target.value;
    // const values = [];
    // for (let i = 0; i < options.length; i++) {
    //   options[i].selected && values.push(options[i].value);
    // }
    // console.log(event.target);
    // setRecipients(values);
  };

  return (
    <Dialog open={open}>
      <Box height={510} width={600}>
        <DialogTitle>
          <Typography variant="h2">Upload document</Typography>
        </DialogTitle>
        <DialogContent>
          <form>
            <FormControl>
              <InputLabel id="recipients">Recipient(s)</InputLabel>
              <Select
                labelId="recipients"
                id="multi-input-recipients"
                multiple
                value={recipients}
                onChange={handleNewRecipients}
                renderValue={(selected: any): ReactNode => (
                  <div className={classes.chips}>
                    {selected.map(
                      (value: { id: number; name: string }): ReactNode => (
                        <Chip
                          key={value.id}
                          label={value.name}
                          className={classes.chip}
                        />
                      )
                    )}
                  </div>
                )}
              >
                <MenuItem>first</MenuItem>
                <MenuItem>first</MenuItem>
              </Select>
            </FormControl>
            upload file!
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default FileUploadModal;
