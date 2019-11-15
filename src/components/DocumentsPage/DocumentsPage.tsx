import React from "react";
import { Query } from "react-apollo";
import { CompanyFiles } from "./../../types/documentTypes";
import { GET_SENT_COMPANY_FILES_BY_COMPANY_ID } from "./../../utils/queries";
import TableHead from "../TableHead";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Typography,
  makeStyles,
  Box,
  Button
} from "@material-ui/core";

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

const renderCompaniesFiles = () => {
  return (
    <Query<CompanyFiles>
      query={GET_SENT_COMPANY_FILES_BY_COMPANY_ID}
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
        console.log(data);
        const companyFiles = data && data.companies_files;
        return (
          companyFiles &&
          companyFiles.map(({ file, to_company, from_company }) => (
            <TableRow>
              <TableCell>{to_company.name}</TableCell>
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
  return (
    <>
      <Box className={classes.container}>
        <input type="document" />
        <Button>Upload</Button>
      </Box>
      <Table>
        <TableHead
          columnNames={["Sent to", "File name", "Date Sent", "File Size"]}
        />
        <TableBody>{renderCompaniesFiles()}</TableBody>
      </Table>
    </>
  );
};

export default DocumentsPage;
