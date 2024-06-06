import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

// Icons Imports
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PlaceIcon from "@mui/icons-material/Place";

import logo from "../../../assets/logo.png";

const IconWithLabel = ({ icon, label, href }) => (
  <Stack
    spacing={0.5}
    alignItems={"center"}
    direction="row"
    component="a"
    href={href || "#"}
    className="plain"
  >
    {icon} <Typography fontWeight={700}>{label}</Typography>
  </Stack>
);

function BrandNav() {
  return (
    <Box py={1} sx={{ bgcolor: "secondary.main" }}>
      <Container maxWidth={"lg"}>
        <Stack direction={"row"} alignItems={"center"} gap={4}>
          {/* Menu And Logo */}
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            flexGrow={{ xs: 1, lg: "unset" }}
          >
            <IconButton size="small">
              <MenuIcon sx={{ fontSize: 32, color: "text.primary" }} />
            </IconButton>
            <img src={logo} alt="yeshtery" height={30} />
          </Stack>

          {/* Alert */}
          <Stack
            display={{
              xs: "none",
              lg: "block",
            }}
            flexGrow={1}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ChevronLeftIcon />
              <span>
                Valentine’s Day Offers! Buy Two Get One Free{" "}
                <a style={{ fontWeight: 700 }} href="##">
                  Shop Now
                </a>
              </span>
              <ChevronRightIcon />
            </Typography>
          </Stack>

          {/* Actions  */}
          <Stack
            direction={"row"}
            spacing={3}
            display={{
              xs: "none",
              sm: "flex",
            }}
          >
            <IconWithLabel
              icon={<LocalPhoneIcon sx={{ fontSize: 26 }} />}
              label={"Cart"}
            />
            <IconWithLabel
              icon={<ShoppingCartIcon sx={{ fontSize: 26 }} />}
              label={"Track Order"}
            />
            <IconWithLabel
              icon={<PlaceIcon sx={{ fontSize: 26 }} />}
              label={"Find A Store"}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default BrandNav;
