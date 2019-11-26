import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_COMPANIES } from "./../../utils/queries";
import { Companies, DocumentDialogProps } from "./../../types/documentTypes";
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
  Select,
  OutlinedInput,
  Input,
  Icon,
  IconButton
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
  },
  flexLeft: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

const FileUploadModal: React.FC<DocumentDialogProps> = ({ open, onClose }) => {
  const classes = useStyles();
  const [recipients, setRecipients] = useState<any>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRecipients(event.target.value as string[]);
  };

  const { loading, data } = useQuery<Companies, null>(GET_COMPANIES);
  const companies = data && data.companies;

  return (
    <Dialog open={open} onClose={onClose}>
      <Box height={510} minWidth={500} padding={2}>
        <Box className={classes.flexLeft}>
          <IconButton aria-label="close" onClick={onClose}>
            <Icon>close</Icon>
          </IconButton>
        </Box>
        <DialogTitle>
          <Typography variant="h2">Upload document</Typography>
        </DialogTitle>
        <DialogContent>
          <form>
            <FormControl fullWidth>
              <InputLabel id="recipients-label">Recipient(s)</InputLabel>
              <Select
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
                        label={value.split(".")[1]}
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
                      value={`${company.id}.${company.name}`}
                    >
                      {company.name}
                    </MenuItem>
                  ))}
                }
              </Select>
            </FormControl>
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default FileUploadModal;
