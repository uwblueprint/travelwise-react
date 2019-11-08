src / types / createPalette.d.ts;
import * as createPalette from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions {
    gray?: PaletteColorOptions;
    yellow?: PaletteColorOptions;
  }
}
