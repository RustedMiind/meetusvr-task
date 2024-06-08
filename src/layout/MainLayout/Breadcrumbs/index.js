import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BreadCrumbs() {
  return (
    <>
      <Divider />
      <Container
        component="div"
        role="presentation"
        onClick={() => handleClick()}
      >
        <MuiBreadcrumbs
          aria-label="breadcrumb"
          sx={{
            py: 2.5,
            color: "text.primary",
            fontWeight: 700,
            ".MuiLink-root": { textDecoration: "underline" },
          }}
        >
          <Link underline="hover" color="inherit" href="#">
            Men
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Clothing
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Tops
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Adidas
          </Link>
          <Typography color="text.primary" fontWeight={"inherit"}>
            Adidas Black T-Shirt
          </Typography>
        </MuiBreadcrumbs>
      </Container>
      <Divider />
    </>
  );
}
