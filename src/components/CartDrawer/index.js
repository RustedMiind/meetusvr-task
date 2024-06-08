import { CartContext } from "../../contexts/CartContext";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Grid, Stack, Typography } from "@mui/material";
import CartItemCard from "./CartItemCard";

function CartDrawer() {
  return (
    <CartContext.Consumer>
      {(value) => {
        let total = 0;
        value.items?.forEach((item) => {
          total += item.count * item.price;
        });
        console.log("from consumer", value, value.items, typeof items);
        return (
          <Drawer anchor={"right"} open={value.opened} onClose={value.close}>
            <Stack spacing={2} py={4} px={2} width={450} maxWidth={"100vw"}>
              <Typography
                variant="h5"
                color="primary.main"
                fontWeight={700}
                textAlign={"center"}
              >
                My Cart
              </Typography>
              <Box>
                <Typography variant={"h6"} fontWeight={700} mb={3}>
                  Cart Summary
                </Typography>
                {!Boolean(value.items?.length) && (
                  <Typography>Your Cart Is Empty!</Typography>
                )}
                <Stack spacing={2}>
                  {value.items?.map((item) => (
                    <CartItemCard
                      key={item.name}
                      item={item}
                      remove={() => value.removeItem(item.name)}
                    />
                  ))}
                </Stack>
              </Box>
              <Typography variant="h5" fontWeight={700} textAlign={"center"}>
                Total: {total} L.E.
              </Typography>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      color="secondary"
                      sx={{ borderRadius: 100 }}
                    >
                      Review Cart
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ borderRadius: 100 }}
                      size="large"
                    >
                      Complete Checkout
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Drawer>
        );
      }}
    </CartContext.Consumer>
  );
}

export default CartDrawer;
