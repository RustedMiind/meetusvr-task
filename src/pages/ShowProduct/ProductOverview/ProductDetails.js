import {
  Box,
  Divider,
  Stack,
  Typography,
  Rating,
  Chip,
  Avatar,
  Button,
} from "@mui/material";
import productLogo from "../../../assets/product-logo.png";
import CircularButton from "../../../components/CIrcularButton";
import NumberInputWithControls from "../../../components/NumberInputWithControls";

const ColorItem = ({ selected }) => (
  <Avatar
    sx={{
      width: 60,
      height: 60,
      border: `2px solid transparent`,
      borderColor: selected ? "primary.main" : undefined,
    }}
    src="https://c8.alamy.com/comp/DMWB42/a-handsome-black-man-african-american-male-model-dressed-in-an-all-DMWB42.jpg"
  />
);

function ProductDetails() {
  return (
    <Stack spacing={3}>
      <img src={productLogo} alt="product-logo" width={68} />
      <Box>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
          adipiscing elit.
        </Typography>
        <Typography
          variant="h6"
          fontWeight={700}
          gutterBottom
          color={"text.secondary"}
        >
          Men
        </Typography>
      </Box>
      <Stack direction={"row"} gap={2} alignItems={"center"} flexWrap={"wrap"}>
        <Rating
          name="half-rating"
          readOnly
          value={4.4}
          size="large"
          precision={0.5}
        />

        <Typography variant="h6" fontWeight={700}>
          4.4 of 5
        </Typography>

        <Typography color={"text.secondary"} fontWeight={700}>
          22 Rates
        </Typography>
      </Stack>
      <Stack direction="row" gap={2} alignItems={"center"}>
        <Typography variant="h5" fontWeight={700} color={"primary.main"}>
          8,888 <span style={{ fontSize: "0.7em" }}>L.E.</span>
        </Typography>
        <Typography
          fontWeight={700}
          color={"text.disabled"}
          sx={{ textDecoration: "line-through" }}
        >
          9,999 L.E.
        </Typography>
        <Chip
          label="11% Off"
          color="secondary"
          size="small"
          sx={{ borderRadius: "4px", fontWeight: 800 }}
        />
      </Stack>

      <Divider />

      <Box>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Size
        </Typography>
        <Stack direction={"row"} gap={1}>
          <CircularButton>Small</CircularButton>
          <CircularButton>Medium</CircularButton>
          <CircularButton focused>Large</CircularButton>
          <CircularButton>X-Large</CircularButton>
          <CircularButton>XX-Large</CircularButton>
        </Stack>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Color
        </Typography>
        <Stack direction={"row"} gap={1}>
          <ColorItem />
          <ColorItem selected />
          <ColorItem />
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Quantity
        </Typography>
        <Stack direction={"row"} gap={1}>
          <NumberInputWithControls value={2} />
        </Stack>
      </Box>
    </Stack>
  );
}

export default ProductDetails;
