import { Box, Grid, IconButton } from "@mui/material";
import AspectRatio from "../../../components/AspectRatio";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Dummy Images Imports
import image1 from "../../../assets/products/Group 329@2x.png";
import image2 from "../../../assets/products/Group 331@2x.png";
import image3 from "../../../assets/products/Group 333@2x.png";
import image4 from "../../../assets/products/Group 335@2x.png";

const SubImage = ({ img }) => (
  <Grid item xs={2.75}>
    <AspectRatio ratio={1}>
      <img className="product-overview-sub-image" src={img} alt="t-shirt" />
    </AspectRatio>
  </Grid>
);

const SliderAction = ({ icon }) => (
  <Grid item xs={0.5} sx={{ height: 1 }}>
    <Box
      sx={{
        height: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton size="small">{icon}</IconButton>
    </Box>
  </Grid>
);

function ProductImages({ product }) {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <AspectRatio ratio={1}>
            <img
              className="product-overview-sub-image"
              src={product.image}
              alt="t-shirt"
            />
          </AspectRatio>
        </Grid>
        {/* Sub Images Row */}
      </Grid>

      <Grid container spacing={1} alignItems={"center"} mt={0.5}>
        <SliderAction icon={<ArrowBackIosNewIcon sx={{ fontSize: 34 }} />} />
        <SubImage img={image1} />
        <SubImage img={image2} />
        <SubImage img={image3} />
        <SubImage img={image4} />
        <SliderAction icon={<ArrowForwardIosIcon sx={{ fontSize: 34 }} />} />
      </Grid>
    </Box>
  );
}

export default ProductImages;
