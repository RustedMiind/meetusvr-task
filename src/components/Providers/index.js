import { theme } from "../../theme/theme";
import { ThemeProvider, Grow } from "@mui/material";
import { SnackbarProvider } from "notistack";
import CartContextProvider from "../../contexts/CartContext";

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
        <CartContextProvider>{children}</CartContextProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default Providers;
