import { Box, Grid } from "@mui/material";
import "./product-overview.scss";
import ProductImages from "./ProductImages";

const GridItem = (props) => <Grid item xs={12} md={6} {...props} />;

function ProductOverview() {
  return (
    <Box>
      <Grid container spacing={2}>
        <GridItem>
          <ProductImages />
        </GridItem>
        <GridItem>Hello</GridItem>
      </Grid>
    </Box>
  );
}

export default ProductOverview;
