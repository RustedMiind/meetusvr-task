import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import productLogo from "../../../assets/product-logo.png";

const IconWithLabel = ({ icon, label, href }) => (
  <Stack
    component={Button}
    size="small"
    spacing={0.5}
    alignItems={"center"}
    direction="row"
    className="plain"
    sx={{ color: "text.primary" }}
  >
    {icon}
    <Typography fontWeight={700}>{label}</Typography>
  </Stack>
);

function Navbar() {
  return (
    <Box component="nav" py={1}>
      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems={"center"}>
          <Grid
            item
            xs={0}
            md={4.5}
            display={{ xs: "none", lg: "block" }}
            flexGrow={{ xs: 1, md: 0 }}
          >
            <TextField
              size="small"
              sx={{ ".MuiInputBase-root": { borderRadius: 100 } }}
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid
            item
            xs={0}
            md={3}
            display={"flex"}
            justifyContent={{ xs: "unset", lg: "center" }}
          >
            <img src={productLogo} alt="adidas" height={56} />
          </Grid>
          <Grid item lg={4.5} flexGrow={1}>
            <Stack spacing={3} direction="row" justifyContent="end">
              <IconWithLabel
                icon={
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingBasketIcon sx={{ fontSize: 26 }} />
                  </Badge>
                }
                label="Cart"
              />
              <IconWithLabel
                icon={<FavoriteBorderIcon sx={{ fontSize: 26 }} />}
                label="Wishlist"
              />
              <IconWithLabel
                icon={<PermIdentityIcon sx={{ fontSize: 26 }} />}
                label="Login"
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Navbar;
