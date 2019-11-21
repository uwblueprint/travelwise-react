import React from "react";
import { Query } from "react-apollo";
import { CompanyFiles } from "../types/documentTypes";
import { GET_COMPANY_FILES_BY_COMPANY_ID } from "../utils/queries";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography
} from "@material-ui/core";

const companyFilesList = (
  <Query<CompanyFiles>
    query={GET_COMPANY_FILES_BY_COMPANY_ID}
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
      const companyFiles = data && data.companies[0].files;
      const companyName = data && data.companies[0].name;
      return (
        companyFiles &&
        companyFiles.map(file => (
          <TableRow>
            <TableCell>{file.title}</TableCell>
            <TableCell>
              <Typography>{companyName}</Typography>
            </TableCell>
          </TableRow>
        ))
      );
    }}
  </Query>
);

const DocumentsPage: React.FC = () => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography>File name</Typography>
          </TableCell>
          <TableCell>
            <Typography>Owner</Typography>
          </TableCell>
          <TableCell>
            <Typography>Date Received</Typography>
          </TableCell>
          <TableCell>
            <Typography>File Size</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{companyFilesList}</TableBody>
    </Table>
  </Paper>
);

export default DocumentsPage;
