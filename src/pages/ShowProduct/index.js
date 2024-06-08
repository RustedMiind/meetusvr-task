import { Stack } from "@mui/material";
import ProductOverview from "./ProductOverview";
import productMainImage from "../../assets/products/main-product.png";

const product = {
  name: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  price: 8888,
  priceBefore: 9999,
  image: productMainImage,
};

function ShowProductPage() {
  return (
    <Stack spacing={2}>
      <ProductOverview product={product} />
    </Stack>
  );
}

export default ShowProductPage;
