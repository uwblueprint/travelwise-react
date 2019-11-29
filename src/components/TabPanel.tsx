import React from "react";
import { Box } from "@material-ui/core";
interface TabPanelProps {
  value: Number;
  index: Number;
  children?: JSX.Element;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <Box
      value={value}
      index={index}
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {children}
    </Box>
  );
};

export default TabPanel;
