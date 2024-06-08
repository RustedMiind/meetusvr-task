import { Box, Grid } from "@mui/material";
import "./product-overview.scss";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";

const GridItem = (props) => <Grid item xs={12} md={6} {...props} />;

function ProductOverview() {
  return (
    <Box>
      <Grid container spacing={8}>
        <GridItem>
          <ProductImages />
        </GridItem>
        <GridItem>
          <ProductDetails />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ProductOverview;
