import { Container, Stack } from "@mui/material";
import BrandNav from "./BrandNav";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <BrandNav />
      <Navbar />
    </header>
  );
}

export default Header;
