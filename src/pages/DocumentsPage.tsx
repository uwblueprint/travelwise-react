import React from "react";
import { Query } from "react-apollo";
import { CompanyFiles } from "../types/documentTypes";
import {
  GET_SENT_COMPANY_FILES_BY_COMPANY_ID,
  GET_RECEIVED_COMPANY_FILES_BY_COMPANY_ID
} from "../utils/queries";
import TableHead from "../components/TableHead";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Typography,
  Tabs,
  Tab,
  makeStyles,
  Box,
  Button
} from "@material-ui/core";
import TabPanel from "../components/TabPanel";
import FileUploadModal from "../components/FileUploadDialog/FileUploadDialog";

const useStyles = makeStyles(theme => ({
  container: {
    boxShadow: "0px 8px 8px -8px rgba(0, 0, 0, 0.25)",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF"
  }
}));

const a11yProps = (index: Number): { id: string; "aria-controls": string } => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};

const renderCompaniesFiles = (fileType: string): JSX.Element => {
  const isSentFiles = fileType === "SENT";
  return (
    <Query<CompanyFiles>
      query={
        isSentFiles
          ? GET_SENT_COMPANY_FILES_BY_COMPANY_ID
          : GET_RECEIVED_COMPANY_FILES_BY_COMPANY_ID
      }
      variables={{ companyId: 1 }}
    >
      {({ loading, error, data }) => {
        if (error) {
          return `Error ${error.message}`;
        }

        if (loading) {
          return (
            <TableRow>
              <TableCell>Empty</TableCell>
            </TableRow>
          );
        }

        const companyFiles = data && data.companies_files;
        return (
          companyFiles &&
          companyFiles.map(({ file, to_company, from_company }) => (
            <TableRow>
              <TableCell>
                {isSentFiles ? to_company.name : from_company}
              </TableCell>
              <TableCell>{file.title}</TableCell>
              <TableCell>{file.date_created}</TableCell>
              <TableCell>{file.file_size}</TableCell>
            </TableRow>
          ))
        );
      }}
    </Query>
  );
};

const DocumentsPage: React.FC = () => {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <>
      <Box className={classes.container}>
        <input type="text" name="search" />
        <Button onClick={() => setIsDialogOpen(true)}>Upload</Button>
      </Box>
      <Tabs value={index} aria-label="tabs" indicatorColor="primary">
        <Tab
          label="Received Documents"
          onClick={() => setIndex(0)}
          {...a11yProps(0)}
        />
        <Tab
          label="Sent Documents"
          onClick={() => setIndex(1)}
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={0} index={index}>
        <Table>
          <TableHead
            columnNames={["Sent to", "File name", "Date Sent", "File Size"]}
          />
          <TableBody>{renderCompaniesFiles("SENT")}</TableBody>
        </Table>
      </TabPanel>
      <TabPanel value={1} index={index}>
        <Table>
          <TableHead
            columnNames={["From", "File name", "Date Sent", "File Size"]}
          />
          <TableBody>{renderCompaniesFiles("RECEIVED")}</TableBody>
        </Table>
      </TabPanel>
      <FileUploadModal
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default DocumentsPage;
