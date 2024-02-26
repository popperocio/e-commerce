const initialState = {
    cartProducts: [],
    toggleCartDetail: false
  };
  
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "OPEN_CART":
        return {
            ...state,
            toggleCartDetail: !state.toggleCartDetail,
        }
      case "ADD_TO_CART":
        const existingProductIndex = state.cartProducts.findIndex(product => product.id === action.payload.id);
        if (existingProductIndex !== -1) {
          const updatedCartProducts = [...state.cartProducts];
          updatedCartProducts[existingProductIndex].quantity += action.payload.quantity;
          return {
            ...state,
            cartProducts: updatedCartProducts,
          };
        } else {
          return {
            ...state,
            cartProducts: [...state.cartProducts, action.payload],
          };
        }
      default:
          return state;
    }

  };

  export { initialState, cartReducer };