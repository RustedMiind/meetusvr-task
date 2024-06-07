import { Typography } from "@mui/material";
import "./App.scss";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Typography variant="h1">Hello World</Typography>
      </MainLayout>
    </div>
  );
}

export default App;
