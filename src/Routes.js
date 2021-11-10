import * as ReactRouter from "react-router";

import { Home } from "./pages/Home";
import { Pokemon } from "./pages/Pokemon";
import {ThemeProvider} from 'styled-components'

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 1, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
}


export const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
    <ReactRouter.Routes>
      <ReactRouter.Route path="/" element={<Home />} />
      <ReactRouter.Route path="/pokemon/:id" element={<Pokemon />} />
    </ReactRouter.Routes>
    </ThemeProvider>
  );
};
