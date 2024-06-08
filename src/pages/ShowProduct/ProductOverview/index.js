import { Box, Grid } from "@mui/material";
import "./product-overview.scss";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import SimilarProducts from "./SimilarProducts";

const GridItem = (props) => <Grid item xs={12} md={6} {...props} />;

function ProductOverview({ product }) {
  return (
    <Box>
      <Grid container spacing={8}>
        <GridItem>
          <ProductImages product={product} />
        </GridItem>
        <GridItem>
          <ProductDetails product={product} />
        </GridItem>
      </Grid>
      <Box mt={4}>
        <SimilarProducts />
      </Box>
    </Box>
  );
}

export default ProductOverview;
