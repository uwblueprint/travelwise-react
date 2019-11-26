src / types / Box.d.ts;
import * as Box from "@material-ui/core/Box/Box";
import React from "react";

declare module "@material-ui/core/Box/Box" {
  interface BoxProps {
    index?: Number;
    value?: Number;
    onClick?: React.MouseEventHandler<{}>;
  }
}
