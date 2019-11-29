import React from "react";
import {
  TableCell,
  TableHead as MuiTableHead,
  TableRow
} from "@material-ui/core";

interface TableHeadProps {
  columnNames: Array<string>;
}

const TableHead: React.FC<TableHeadProps> = ({ columnNames }) => {
  const renderColumns = () => {
    return columnNames.map(col => {
      return <TableCell>{col}</TableCell>;
    });
  };

  return (
    <MuiTableHead>
      <TableRow>{renderColumns()}</TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
