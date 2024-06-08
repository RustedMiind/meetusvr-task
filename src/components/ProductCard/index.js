import {
  Box,
  Card,
  Chip,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import productLogo from "../../assets/product-logo.png";
import AspectRatio from "../AspectRatio";

function ProductCard({ image }) {
  return (
    <Stack component={Paper} p={1} spacing={1}>
      <Box width={1}>
        <AspectRatio ratio={1}>
          <img className="product-overview-sub-image" src={image} alt="" />
        </AspectRatio>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Typography variant="h6" fontWeight={700} color={"primary.main"}>
            {8888} <span style={{ fontSize: "0.7em" }}>L.E.</span>
          </Typography>
          <Stack direction="row" gap={2} alignItems={"center"}>
            <Typography
              fontWeight={700}
              color={"text.disabled"}
              sx={{ textDecoration: "line-through" }}
              variant="body2"
            >
              {8888} L.E.
            </Typography>
            <Chip
              label="11% Off"
              color="secondary"
              size="small"
              sx={{ borderRadius: "4px", fontWeight: 800 }}
            />
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <Box
            alignItems="end"
            width={1}
            pr={2}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <img src={productLogo} alt="product-logo" width={68} />
          </Box>
        </Grid>
      </Grid>
      <Stack alignItems={"center"} pt={1} spacing={1}>
        <Stack
          direction={"row"}
          gap={2}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Rating
            name="half-rating"
            readOnly
            value={4.4}
            size="medium"
            precision={0.5}
          />

          <Typography variant="body1" fontWeight={700}>
            4.4 of 5
          </Typography>
        </Stack>
        <Typography variant="body1">
          Pickup From: <span style={{ fontWeight: 700 }}>Genena Mall</span>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default ProductCard;
