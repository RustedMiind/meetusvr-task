import { theme } from "../../theme/theme";
import { ThemeProvider, Grow } from "@mui/material";
import { SnackbarProvider } from "notistack";

function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        transitionDuration={{ appear: 500, exit: 500, enter: 300 }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        TransitionComponent={Grow}
        variant="success"
        autoHideDuration={10000}
      >
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default Providers;
