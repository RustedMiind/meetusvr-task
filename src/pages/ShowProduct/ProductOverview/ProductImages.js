import { Box, Grid, IconButton } from "@mui/material";
import AspectRatio from "../../../components/AspectRatio";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

function ProductImages() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <AspectRatio ratio={1}>
            <img
              className="product-overview-sub-image"
              src={
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww"
              }
              alt="t-shirt"
            />
          </AspectRatio>
        </Grid>
        {/* Sub Images Row */}
      </Grid>

      <Grid container spacing={1} alignItems={"center"} mt={0.5}>
        <SliderAction icon={<ArrowBackIosNewIcon sx={{ fontSize: 34 }} />} />
        <SubImage img="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww" />
        <SubImage img="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww" />
        <SubImage img="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww" />
        <SubImage img="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww" />
        <SliderAction icon={<ArrowForwardIosIcon sx={{ fontSize: 34 }} />} />
      </Grid>
    </Box>
  );
}

export default ProductImages;
