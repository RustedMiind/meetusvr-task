import { Container, Typography } from "@mui/material";
import "./App.scss";
import MainLayout from "./layout/MainLayout";
import Filters from "./layout/MainLayout/Filters";
import BreadCrumbs from "./layout/MainLayout/Breadcrumbs";
import ShowProductPage from "./pages/ShowProduct";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <>
      <div className="App">
        <MainLayout>
          <Filters />
          <BreadCrumbs />
          <Container component="main" sx={{ py: 4 }}>
            <ShowProductPage />
          </Container>
        </MainLayout>
      </div>
      <CartDrawer />
    </>
  );
}

export default App;
