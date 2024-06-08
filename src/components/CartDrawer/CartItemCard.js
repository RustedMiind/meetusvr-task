import {
  Card,
  Paper,
  Grid,
  Box,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import AspectRatio from "../AspectRatio";

function CartItemCard({ item, remove }) {
  return (
    <Paper variant="outlined" sx={{ p: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <AspectRatio ratio={1}>
              <img
                src={item.image}
                className="product-overview-sub-image"
                alt=""
              />
            </AspectRatio>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={1}>
            <Typography fontWeight={700}>{item.name}</Typography>
            <Typography variant="body2" fontWeight={700}>
              Quantity: {item.count}
            </Typography>
            <Stack direction="row">
              <Typography
                variant="h6"
                fontWeight={700}
                color="primary.main"
                flexGrow={1}
              >
                {item.price} L.E.
              </Typography>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                sx={{ borderRadius: 100 }}
                onClick={remove}
              >
                Remove
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CartItemCard;
