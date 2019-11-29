import React, { useState } from "react";
import {
  createStyles,
  withStyles,
  Theme,
  WithStyles
} from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

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

interface ErrorMessageProps extends WithStyles<typeof styles> {
  message: string;
}

const ErrorMessage = withStyles(styles)((props: ErrorMessageProps) => {
  const { message } = props;
  return (
    <Box>
      <Typography variant="caption" color="error">
        {message}
      </Typography>
    </Box>
  );
});

export default ErrorMessage;
