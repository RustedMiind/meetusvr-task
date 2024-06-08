import { createContext, Component } from "react";

export const CartContext = createContext();

class CartContextProvider extends Component {
  state = { items: [], opened: false };
  addItem = (name, count = 1, price, image) => {
    const exists = Boolean(this.state.items.find((item) => item.name === name));
    if (exists)
      this.setState({
        items: this.state.map((item) => {
          if (item.name === name && item.count + count > 0)
            return { ...item, count: count + item.count };
          return item;
        }),
      });
    if (count < 1) return;
    else
      this.setState({
        items: [...this.state.items, { name, count, price, image }],
      });
  };

  removeItem = (name) => {
    this.setState({
      items: this.state.filter((item) => item.name !== name),
    });
  };

  openCart = () => {
    this.setState({ opened: true });
  };
  closeCart = () => {
    this.setState({ opened: false });
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          addItem: this.addItem,
          removeItem: this.removeItem,
          items: this.state.items,
          opened: this.state.opened,
          open: this.openCart,
          close: this.closeCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartContextProvider;
