import { Box, Button, Grid, Typography } from "@mui/material";
import NumberInputWithControls from "../../../components/NumberInputWithControls";
import { Component } from "react";
import { CartContext } from "../../../contexts/CartContext";

const buttonStyles = {
  borderRadius: 1000,
  fontWeight: 700,
};

class AddToCart extends Component {
  state = { count: 1 };

  increment = (value = 1) => {
    this.setState((prevState) => {
      if (prevState.count + value < 1) return {};
      console.log(value);
      return { count: prevState.count + value };
    });
  };

  render() {
    return (
      <CartContext.Consumer>
        {({ addItem }) => (
          <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Quantity
            </Typography>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <NumberInputWithControls
                    value={this.state.count}
                    onIncrement={() => this.increment(1)}
                    onDecrement={() => this.increment(-1)}
                  />
                </Grid>
                <Grid item xs={12} md={6} />
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={buttonStyles}
                    fullWidth
                    onClick={() => {
                      addItem(
                        this.props.item.name,
                        this.state.count,
                        this.props.item.price,
                        this.props.item.image
                      );
                    }}
                  >
                    Add To Cart
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={buttonStyles}
                    fullWidth
                  >
                    Pickup From Store
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </CartContext.Consumer>
    );
  }
}

export default AddToCart;
